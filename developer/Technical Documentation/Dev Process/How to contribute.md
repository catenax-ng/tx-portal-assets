## Contribution details

To contribute to the portal as part of the open source community, please read the details defined below.
Besides a generic "how to", some commit and pull request (PR) guidelines are defined to ensure readability and make newly created PRs more easy to review. Additionally, changelogs can get validated as well as written more easily and across the huge contributor community similar patterns are used.

<br>
<strong>Content:</strong>

- [Commit How To](#how-to-contribute)
- [Commit Guidelines](#commit-guidelines)

<br>
<br>

### How To Contribute

<br>

#### #1 Create a fork

Open github - "eclipse-tractusx" project and select the respective repository to which you want to contribute.
[Create a fork of the respective repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo).


<br>

#### #2 Fork setup

Setup your fork by entering a name and make sure that you unselect the "main branch only" selection, in case the original repo has a dev and a main branch.

<br>

Click "Create fork"

<br>

#### #3 Commit

With the newly created fork, you can now start to contribute. Create a new branch in your own fork and start to implement the planned changes or new features.
When the implementation is ready, create a PR against the original repository.

<br>

The PR will get reviewed by the repo owners/official committers.
As part of the pr review, sonar cloud will run automatically, and unit tests (if configured) will get executed. The PR owner is responsible to check the results and fix possible findings.

<br>

### Commit Guidelines

<br>

#### PR Title

Suggested naming convention:'<type><(function)>: {short summary}'

<br>

#### Types

* feature - used for new functional features (example: "feature (administration): tech user secret management")
* change - used when smaller changes are done on existing/released features (example: "change (reg.): POST/companyData")
* bugfix - used for pure bugfixes (example: "bugfix (admin board): GET endpoint")
* enabler - used for technical changes, data changes, unit test updates and documentation (example: "enhance (seeding): base data load")

<br>

#### PR Description

In the PR description, add details to the change/bugfix/feature.
What was changed, why it was changed (e.g. which issue/requirement does the change fix/fulfill), and how it was changed.

<br>
<br>
