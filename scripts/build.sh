#!/bin/bash

copy-dist() {
    mkdir -p ./public/documentation/js/lib/$1
    cp -R ./node_modules/$1/dist/* ./public/documentation/js/lib/$1    
}

copy-dist zero-md
copy-dist mermaid
