---
name: "python-integrate-tesla-fleet-management-api"
description: "MANDATORY FIRST STEP for Tesla Fleet Management API Python SDK work in a Python project (never another language): load before writing code to integrate Tesla Fleet Management API in Python — controls the front or rear trunk, briefly flashes vehicle headlights — or when a Tesla Fleet Management API Python SDK call errors or behaves unexpectedly. Holds the plan-first workflow: the plan file, the contract sheet and its no-edits gate, and which python-* companion skills to load."
---

# Tesla Fleet Management API Python SDK — Integration workflow (lookup layer + contract sheet)

`python-getting-started` is your **lookup layer**; the `python-*` companions are API-agnostic *usage* skills that Step 1c makes mandatory.

## Your lookup layer

- **`python-getting-started`** is the entry point for every SDK need: the SDK's identity (distribution name vs import root, version, Python floor, install-from-source), the root package's exports and the modules the surface splits across, environments and the base-URL knob, the auth pattern, the controllers, and a **module table** naming the one file that owns each kind of fact. Load it first, always.
- **The SDK map** (`sdk-map.md` and `map/operations/`, at the SDK root) is yours to open and read: `sdk-map.md` once, then the one controller page your operations live on.
- **The installed package is the ground truth; the module table is only the locator.** Confirm the package imports, with the probe in `python-getting-started`, before you rely on a lookup; **if it is not installed, install it first**. Until then mark the fact `UNVERIFIED`, say what would settle it, and do not fill the hole from memory. (The distribution is not on any package index — it installs from its repository; `python-getting-started` carries the command.)
- **Write a contract sheet with no open lookups** before you implement — every in-scope operation in one pass, against the checklist that ends `python-getting-started`.

**Scope:** the Tesla Fleet Management API **Python SDK** (import root `tesla_fleet_management_api`, distribution `tesla-fleet-management-api`) in **Python projects only**.

## The planner agent

`tesla-fleet-management-api-planner` ships with this plugin. It writes `tesla-fleet-management-api-plan.md` — the plan and its contract sheet — and revises it in place; it writes no project code. Start it the first of these ways your host allows:

1. **Your subagent tool lists it.** Some hosts list a plugin's agents under the plugin's name, as `tesla:tesla-fleet-management-api-planner`; start it by whichever of the two names your subagent tool lists.
2. **It isn't listed, or you can't start a subagent.** Tell the user in one line that you are writing the plan yourself, then do so as *Step 1* describes. Don't stop to ask.

However you start it:

- **Start it on the same model you are running on.** If your subagent tool takes a model, pass your own model; if it has no model option, leave its default. Tell the user in one line which model you started it on.
- **Start it once per integration.** A plan revision is a follow-up message to that same agent; re-start it, carrying the clarification and the plan path, only where your host cannot message it. Never start a second one for the same integration.

## Workflow

**If the user opens with a reported SDK error or unexpected Tesla Fleet Management API behaviour** (not new feature work), skip the plan-first flow: load `python-getting-started` and `python-error-handling`, look the failing symbol up in the module the table names, and fix from what you find. Otherwise, for implementation work:

### Step 1 — Plan first (always, for any implementation work)

Your FIRST action, once the SDK is installed and you have reached its source (both are prerequisites below; installing follows the toolchain check and the baseline, and the gate allows it), is to start **`tesla-fleet-management-api-planner`**, as *The planner agent* says, once, with the user's full request — all features in scope; one plan covers the whole implementation — and the name of this skill, `python-integrate-tesla-fleet-management-api`. Dictate in its task the absolute project root, the absolute path of the SDK source you reached — it reads the map there rather than reaching its own — and the absolute path it must write to — `<project repo root>/tesla-fleet-management-api-plan.md`, that absolute path, not a location you pick later. It loads `python-getting-started`, writes the plan and its contract sheet as this step and *Step 1c* describe, and returns the file's path.

**If you couldn't start the planner** (case 2 in *The planner agent*), load `python-getting-started`, work through the request yourself, and write the file at that path.

**Do these two read-only prerequisites before you install the SDK — the install changes the tree they read:**

- **establish the toolchain before you need it**: which environment manager the repo uses (`uv`, `poetry`, `pip` + venv, `pdm`), whether `tesla-fleet-management-api` is already a dependency and at what version, and the exact commands that run the project's tests and type checker. Getting this wrong later costs a broken install mid-implementation — and an uninstalled package costs you the lookup layer itself;
- a baseline run of the project's checks (`pytest`, `mypy`, `ruff` — whatever it has) on the UNTOUCHED tree, so later failures are attributable to your changes.

**Then make sure the SDK is installed and reach its source, before you start the planner** (both per `python-getting-started`) — the installed package does not carry the map, which lives in the SDK's source tree, and the planner reads the copy you reached rather than reaching its own.

**Do the rest while the planner works — they need no SDK knowledge and touch no project file:**

- the repo survey (read-only exploration of conventions, layering, and **whether the project is sync or `async`**) — capture each convention as *pattern + the ONE exemplar file path to imitate*, NOT inline code snippets: you will read the exemplar at edit time anyway, so a snippet dump gets paid for twice;
- credentials/environment verification (per the task's secret-handling rules) — including which host `server_config` will select, since omitting it is silent;
- setting up your task tracking.

**HARD GATE — no project-file creation or edits until** the planner has returned, `tesla-fleet-management-api-plan.md` exists at the repo root (check it — a helper can misreport where it saved), its contract sheet has **no open lookups**, and you have read it. If you wrote the plan yourself, the gate is the same without the return. The read-only prerequisites above are not gated.

**What the gate does not cover:** creating or activating a virtual environment, installing `tesla-fleet-management-api` and the toolchain into it, and the files those writes produce (`.venv/`, a lockfile the installer updates) are **prerequisites, not project-file edits**. On a greenfield repo they are the only way to reach the lookup layer at all, and they are the only writes permitted before the gate. Nothing you author by hand may change.

**One read-only prerequisite waits for the signatures: a smoke of each in-scope operation against the real credential**, run from your scratchpad, not the project, once the planner has returned and you have read the sheet, with the signatures it records, and before your first project edit — or, if you are writing the plan yourself, once the map has given you the signatures and before you finalise the sheet. A plan-, region- or entitlement-gated endpoint answers `403` here — the map presents every operation uniformly and cannot know which ones your key may call — and learning that now reorders the plan rather than the build. Send each `403` to the SAME planner as a revision, as *Step 1c* sends a blocker, and implement from its reply; if you wrote the plan yourself, revise the sheet in place. Skip only operations whose side effects you cannot reverse.

**DUPLICATE CLAIMS** — one row per write a caller can trigger twice; `none` if the task has no such write (`python-configuration-resilience`, *The same operation arriving twice*).

| Write | Where the claim is stored | What rejects the second one | Where that rejection is caught | Where in the code |
| --- | --- | --- | --- | --- |

Every row follows one order: **claim → SDK call → record the result**. The claim is a write of its own, made before the SDK call, so a second caller is stopped before it reaches the provider; release it when the provider refuses the call.

⚠⚠ **Where the claim is stored**: a store this application owns — the one the codebase already keeps its records in — never the provider. A provider idempotency key goes beside the claim, never in place of it; the SDK's own `Idempotency-Key` header is not one. If this codebase has nowhere to keep a claim that outlives the process, that is a Blocker in the plan's **Assumptions & Blockers**, not a row.

⚠⚠ **What rejects the second one**: the store refusing the second caller's claim, the way this codebase already refuses a duplicate. A conflict on the save *after* the SDK call is too late — both callers have already reached the provider. A read before the write — a status check, a lookup by key — is not a refusal either: it lets both callers through. Pick a refusal the store you run against enforces.

**Where that rejection is caught**: the `except` for what the store raises on the second claim — a lookup that returns the earlier result is not an `except`.

Write `TBD` in **Where in the code** while you plan — every row; it names code not yet written, not a contract fact, so it is not an open lookup. Once the code type-checks, replace each `TBD` individually with two functions, in order: the claim write, then the SDK call it precedes. Only this column changes after coding starts. ⚠⚠ A `TBD` left behind, a function that is not in the code, or one note covering several rows is **not addressed**; if the code does not do what the row says, fix the code, then the cell.

### Step 1c — Required reading (do this before you write any code)

End the contract sheet with a **REQUIRED READING** block whose rows carry inline `MUST load <skill>` pointers. **Load every `python-*` skill the sheet names, now, before you start implementing** — not lazily at the step that needs it, and even if you have already read the module. The sheet deliberately does *not* carry the how-to: it names the hazard and hands you the skill that resolves it, so an unloaded pointer is a gap in what you know, not a formality.

**A fixed floor applies regardless of what the sheet says** — the sheet can add to it, never remove from it: `python-error-handling` always (every integration writes an error boundary); `python-client-initialization` before the client is constructed; `python-testing` before the first test file you create or edit, *including* a throwaway verification script that fakes the transport. A sheet row that excuses one of these ("out of scope", "no test suite requested") is not a substitute for loading it.

Before implementing, check the plan's **Assumptions & Blockers** section:

- Blocker or major assumption → surface it to the user in plain language, get their answer, and send it to the SAME planner as a follow-up message (re-start it, carrying the clarification and the plan path, only where your host cannot message it). It revises `tesla-fleet-management-api-plan.md` in place and replies with the changed rows verbatim: work from that reply, not a re-read of the file. If you wrote the plan yourself, revise it in place.
- Minor assumptions only → proceed.

Full re-planning only on genuine scope change; for a single missing fact mid-implementation, do the lookup, never guess.

### Step 2 — Implement from the contract sheet

1. Read `tesla-fleet-management-api-plan.md` once. Treat its contracts as authoritative — do not re-derive or "double-check" them from memory. When a lookup revises a row, update the file so the sheet and the code never disagree.
2. **Decide sync vs async once, from the repo survey, before the first call** — `Client` or `AsyncClient`. The two have no bridge, and the choice fixes the transport-override keyword and the teardown (`python-client-initialization`).
3. **Pick the response mode per call, at write time:** the plain call raises `ApiError`; its `with_raw_response` peer returns `ApiResult`, the only way to see the status of an operation that returns `None`.
4. Implement sequentially, in the repo's own conventions and layering, in line with the companion that governs each step. Take every contract *fact* (signatures, wire aliases, error unions, enum members) from the sheet or a fresh lookup — never from a companion.
5. After every change: run the project's **type checker** (`mypy`/`pyright`) as well as its tests. The package ships `py.typed`, so a type error against it is a real contract violation, not noise — it is the closest thing Python gives you to the compile step. **Treat a clean type check as the gate you do not skip.** If the project has no type checker configured, install `mypy` into the environment and run `mypy --strict` on the files you touched — the SDK checks cleanly under it. If you genuinely cannot install one, say so in your final report rather than silently substituting a smoke run. Fix non-SDK errors yourself.
6. **Any error involving an SDK type or member** — an `AttributeError`/`TypeError` on a `tesla_fleet_management_api.*` object, a `pydantic.ValidationError` you cannot place, a mypy error naming an SDK type, an unexpected `ApiError` — → go back to `python-getting-started`'s module table and read the one module that owns the fact. Do not attempt more than one self-fix of an SDK-name error before doing that lookup. A decode, connection or authentication failure is an `SdkError` too, though not an `ApiError` (`python-error-handling`).
7. Once the code is complete, open each function the **DUPLICATE CLAIMS** rows name and confirm it runs when that write runs. Where the code falls short of a row, fix the code, not the row.
8. Run the project's tests; verify the integration end to end the way the task demands. Keep, tune (`retry_options`) or disable (`max_retries` set to `0`) the default retries rather than wrapping the call in a retry of your own, and say which you did. Logging is **off by default**: run a new call once under `TESLA_FLEET_MANAGEMENT_API_LOG=info` to see what went on the wire.

### Step 3 — Answering pure questions

A standalone Tesla Fleet Management API question with no code change: look it up in `python-getting-started` (and the module its table names), then give the grounded answer. Never answer from memory, even for "easy" questions.

## Anti-patterns — never do these

- **Never create or edit a project file while `tesla-fleet-management-api-planner` is running**, and never start a second one for the same integration.
- **Never write a Tesla Fleet Management API/SDK fact from memory** — every signature, field name, enum member, and error union in your code must come from the contract sheet or a lookup. And **never write a call from memory "to fix later".**
- **Don't web-search Tesla Fleet Management API topics to find an implementation detail** — the installed package's own source is the ground truth, and the module table tells you where to look. Public Tesla Fleet Management API docs describe the REST API, not this SDK's generated surface, and the two disagree on names.
- **Never introspect the SDK at runtime to discover its shape.** `dir()`, `model_fields`, `inspect.signature`, or a REPL poke is the Python-flavoured version of decompiling the package: it answers what exists, never what is *supported*, and it silently invites private attributes into your code. Read the source module instead.
- **Don't grep the package to *locate* a type** — the map's **Type sources** table is the locator; grep only inside the module it names. A cross-cutting *shape* sweep ("every member typed `Optional[Any]`", "every discriminator field") is fine as one `grep -rn` over `models/`, recorded on the sheet.

