[![build](https://github.com/opspec-pkgs/jmespath.query.evaluate/actions/workflows/build.yml/badge.svg)](https://github.com/opspec-pkgs/jmespath.query.evaluate/actions/workflows/build.yml)


# Problem statement

evaluates a [jmespath](http://jmespath.org/) query

# Example usage

## Visualize

```shell
opctl ui github.com/opspec-pkgs/jmespath.query.evaluate#1.0.0
```

## Run

```
opctl run github.com/opspec-pkgs/jmespath.query.evaluate#1.0.0
```

## Compose

```yaml
op:
  ref: github.com/opspec-pkgs/jmespath.query.evaluate#1.0.0
  inputs:
    data:  # 👈 required; provide a value
    query:  # 👈 required; provide a value
  outputs:
    result:
```

# Support

join us on
[![Slack](https://img.shields.io/badge/slack-opctl-E01563.svg)](https://join.slack.com/t/opctl/shared_invite/zt-51zodvjn-Ul_UXfkhqYLWZPQTvNPp5w)
or
[open an issue](https://github.com/opspec-pkgs/jmespath.query.evaluate/issues)

# Releases

releases are versioned according to
[![semver 2.0.0](https://img.shields.io/badge/semver-2.0.0-brightgreen.svg)](http://semver.org/spec/v2.0.0.html)
and [tagged](https://git-scm.com/book/en/v2/Git-Basics-Tagging); see
[CHANGELOG.md](CHANGELOG.md) for release notes

# Contributing

see
[project/CONTRIBUTING.md](https://github.com/opspec-pkgs/project/blob/main/CONTRIBUTING.md)
