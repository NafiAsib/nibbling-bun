# Nibbling on Bun (ɔ◔‿◔)ɔ ♥

<img align="left" alt="Bun, an incredibly faster all-in-one JS/TS runtime" width="128rem" src="https://camo.githubusercontent.com/cc7b5924f05d4f0743ce6d7969405545cb997e58dec5f9d5f8718011c7d446ae/68747470733a2f2f62756e2e73682f6c6f676f4032782e706e67" />

This repository serves as a Linux-based quick-starter development container tailored for use with Visual Studio Code's `Remote - Containers` extension and `GitHub Codespaces`. It streamlines the setup process, providing a consistent and isolated development environment, making it effortless for developers to jump right into their projects without dealing with complex setup procedures or worrying about system-specific configurations.

## How to use

You need to have the following `things` installed,

- VS Code
- Docker
- [Dev Containers Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

Then just clone the repo, open & start `vscode`in `Devcontainer`

```bash
git clone git@github.com:NafiAsib/nibbling-bun.git
cd nibbling-bun
code .
```

***Depending on your internet speed, first time installation could take some time***

## Start the Bun server

- To start the existing `bunana` app
  ```bash
  cd bunana
  bun install
  bun dev
  ```
  This will start the development server on port 3000. Visit `http://localhost:3000`
- To create a new app
  ```bash
  bun init
  ```
