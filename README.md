# gh-release-testing

## `semver.js` Usage

Script at `.github/workflows/scripts/semver.js`

```yaml
- uses: actions/github-script@v7
  id: semver
  with:
    script: |
      const semver = require('./.github/workflows/scripts/semver.js')
      return semver({ context })
```

Output is saved to step outputs as `result` and can be used like so:

```yaml
- run: echo "${{ fromJson(steps.semver.outputs.result).major }}"
```
