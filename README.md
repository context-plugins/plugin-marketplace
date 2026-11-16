# exp/finix-task11 — experiment-only branch

This orphan branch holds the Finix Context Plugin used by `apimatic/plugin-experiments` task 11
(branch `task11-finix`). It is **not** a published plugin and is **never merged into `main`**.

- Generated 2026-11-16 with `@apimatic/cli` 2.2.0 (`plugin generate`) from Finix's official
  OpenAPI spec (`https://docs.finix.com/_bundle/api/index.yaml`, sha256 `0dc38dec08b9a774…`), unmodified.
- `plugins/finix/` is the generator's output, unchanged.

**Do not delete or force-push this branch.** Experiment runs install the plugin by pinning this
branch's commit; if the commit becomes unreachable, those runs cannot be reproduced.
