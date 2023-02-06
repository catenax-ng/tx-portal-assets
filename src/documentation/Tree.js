/********************************************************************************
 * Copyright (c) 2021, 2023 Contributors to the Eclipse Foundation
 *
 * See the NOTICE file(s) distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Apache License, Version 2.0 which is available at
 * https://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ********************************************************************************/

const fs = require('fs')
const { parse } = require('path')

class Transformer {

    static tree2map(map, tree, parent, level) {
        tree.parent = parent
        tree.level = level
        map[tree.path] = tree
        if (tree.children)
            tree.children.forEach(child => Transformer.tree2map(map, child, tree, level + 1))
        return map
    }



}

class MDHelper {

    readContent(path) {
        if (!fs.lstatSync(path).isFile())
            return ''
        try {
          return fs.readFileSync(path, 'utf8')
        } catch (err) {
          return ''
        }
    }

    parseChapters(path) {
        return this.readContent(path).split(/\n/).filter(line => line.charAt(0)==='#')
    }

    extractChapterTree(tree) {
        if (fs.lstatSync(tree.path).isFile())
            tree.chapter = this.parseChapters(tree.path)
        else if (tree.children)
            tree.children.forEach(child => this.extractChapterTree(child))
        return tree
    }

} 

class TreeHelper {

    static readDirTree(root) {
        const dirTree = require('directory-tree')
        const tree = dirTree(root)
        //const tree = Transformer.tree2map({}, dirTree(root), undefined, 0)
        return tree
    }

}

const tree = TreeHelper.readDirTree('docs')
//console.log(tree)
const md = new MDHelper()
console.log(JSON.stringify(md.extractChapterTree(tree), null, 2))