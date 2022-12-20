# Release-Process

The release process of a new version can roughly be divided in three steps:

* Preparation
* Triggering of a versioned image build
* Release of a new helm chart version
* Merge upstream to eclipse-tractusx

The process builds on the development flow which takes place within the forks from eclipse-tractusx, located in the catenax-ng org.

The relevant frontend repositories are the following:
* https://github.com/catenax-ng/tx-portal-frontend
* https://github.com/catenax-ng/tx-portal-frontend-registration
* https://github.com/catenax-ng/tx-portal-assets

The relevant backend repository is the following:
* https://github.com/catenax-ng/tx-portal-backend

## Preparation

It's recommended to do step 1-3 in one preparatory pull request to main or dev respectively.

1; Update changelog file

The changelog file tracks all notable changes since the last released version.
During development every developer should extend the changelog under the 'Unreleased' section when raising a pull request to dev (frontend repos) or main (backend repo).
Once a new version is ready to be released, the changelog of the version gets finalized and the release version for the up to then unreleased changes gets set.
The following convention is a good practice for a clearly structured changelog:
https://keepachangelog.com/en/1.0.0/

2; Update dependencies file

In order to have up-to-date list of the third-party libraries available in the repository the dependencies file needs to be updated.
For the frontend repositories this can be done by running the following:

```bash
yarn licenses list > DEPENDENCIES'
```

For the backed repository the dependencies file can be updated by running the following statements:

```bash
dotnet list src package --include-transitive > DEPENDENCIES-PREP

cat DEPENDENCIES-PREP | grep ">" | grep -Pv "\s(Org|Microsoft|NuGet|System|runtime|docker|Docker|NETStandard)" | sed -E -e "s/\s+> ([a-zA-Z\.\-]+).+\s([0-9]+\.[0-9]+\.[0-9]+)\s*/nuget\/nuget\/\-\/\1\/\2/g" > DEPENDENCIES

awk -i inplace '!seen[$0]++' DEPENDENCIES
```
Only commit the updated dependencies file, not the 'DEPENDENCIES-PREP' file.

3; Version bump (frontend repos only)

Version bump in package.json files using the following:

```bash
yarn version
```

4; Merge from dev into main branch

The merge dev into main needs to happen before releasing.
This is only for repositories with a dev branch e.g., tx-portal-frontend and tx-portal-frontend-registration.

## Triggering of a versioned image build

It's important to pull the latest state from main of every repository.
Then a tag with the release needs (e.g v0.10.0) and pushed.
The push triggers the release workflow action which created versioned image builds.

## Release new version of helm chart

The portal helm chart is maintained the https://github.com/catenax-ng/tx-portal-cd rep

Once the versioned images are available, they can be used in the portal helm char and a new version of the helm chart can be released.
The consortia specific helm charts are released from the 'helm environments' branch available in the https://github.com/catenax-ng/tx-portal-cd fork.
The official portal helm chart is released from the main branch of https://github.com/eclipse-tractusx/portal-cd.

## Merge upstream to eclipse-tractusx

Once a new version has been released, it should be merged upstream and tagged.

The relevant frontend repositories are the following:

* https://github.com/eclipse-tractusx/portal-frontend
* https://github.com/eclipse-tractusx/portal-frontend-registration
* https://github.com/eclipse-tractusx/portal-assets

The relevant backend repository is the following:

* https://github.com/eclipse-tractusx/portal-backend
