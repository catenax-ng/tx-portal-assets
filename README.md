# Catena-X Portal Assets

This repository contains the documentation and static image content for Catena-X Portal.

The Catena-X Portal application consists of

* [portal-frontend](https://github.com/eclipse-tractusx/portal-frontend),
* [portal-frontend-registration](https://github.com/eclipse-tractusx/portal-frontend-registration),
* [portal-assets](https://github.com/eclipse-tractusx/portal-assets) and
* [portal-backend](https://github.com/eclipse-tractusx/portal-backend).

![Tag](https://img.shields.io/static/v1?label=&message=LeadingRepository&color=green&style=flat) The helm chart for installing the Catena-X Portal is available in [portal-cd](https://github.com/eclipse-tractusx/portal-cd).

The Catena-X Portal is designed to work with the [Catena-X IAM](https://github.com/eclipse-tractusx/portal-iam).

## Steps to run local

Note: if you like to run the complete frontend environment follow the guide in the documentation how to start an entire
[Local Frontend Environment](https://portal.dev.demo.catena-x.net/documentation/?path=developer%2FTechnical+Documentation%2FDev+Process%2F05.+Frontend+Environment.md)

    yarn
    yarn build:release
    yarn build
    yarn start
