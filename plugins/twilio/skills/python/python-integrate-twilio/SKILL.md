---
name: "python-integrate-twilio"
description: "MANDATORY FIRST STEP for Twilio Python SDK work in a Python project — load this BEFORE you write any code; Python SDK ONLY, never load it for any other language. Applies when asked to integrate Twilio in Python — modify the properties of a given account, fetch an instance of an addonresult, usage records for all time, create a new application within your account, updates the application's properties, create a new credential list mapping resource, create a new ip access control list mapping, fetch an instance of an authorized-connect-app — or when a Twilio Python SDK call errors or behaves unexpectedly. Knowing the SDK exists is NOT a substitute for loading this, because it carries five binding gates stated NOWHERE else and not inferable from the package — (1) load python-getting-started, confirm the package is actually installed and read the SDK map that ships with it before any lookup, (2) the exact plan-file path and the no-project-file-edits window until a contract sheet with no open lookups exists there and you have read it, (3) the mandatory load of every python-* companion skill the sheet names, (4) sync-vs-async decided once from the host application before the first call, and (5) the memory ban, where every signature, wire alias, error union and enum member comes from a lookup and never from recall or runtime introspection."
---

# Twilio Python SDK — Integration workflow (lookup layer + contract sheet)

You do the SDK lookups yourself: `python-getting-started` is your **lookup layer** — load it and ground every contract fact in it (and in the source modules its table names) before writing code. The `python-*` companion skills are a different thing: they are API-agnostic *usage* guidance, they are yours to load, and Step 1c below makes loading them mandatory.

## Your lookup layer

- **`python-getting-started`** is the entry point for every SDK need. It carries the SDK's identity (distribution name vs import root, version, Python floor, install-from-source), what the root package exports and the four modules the surface splits across, environments and the base-URL knob, the auth pattern, the controllers, and a **module table** naming the one file that owns each kind of fact. Load it first, always.
- **The SDK map is your lookup surface, and you open it yourself.** The SDK ships `sdk-map.md` and `map/operations/` at its root. There is no helper agent on the Python side — the map is yours to read, not something to delegate. `python-getting-started` tells you how to traverse it: read `sdk-map.md` once, then the one controller page your operations live on.
- **The installed package is the ground truth; the module table is only the locator.** Confirm the package is importable before you rely on a lookup — `python -c "import twilio, pathlib; print(pathlib.Path(twilio.__file__).parent)"`. **If it is not installed there is no source to read**: mark the fact `UNVERIFIED`, say what would settle it, and do not fill the hole from memory. (The distribution is not on any package index — it installs from its repository; `python-getting-started` carries the command.)
- **Read scoped.** Those modules carry long design docstrings. `grep -n` for the symbol and read the surrounding lines rather than whole files, and never copy a docstring's design rationale onto a contract sheet — the sheet carries facts an implementer must obey, not the reasoning behind them.
- **Write a contract sheet with no open lookups** before you implement: exact signatures, the keyword-only boundary, wire aliases, required-vs-`UNSET` members, the `ApiError.error` union per operation, and enum members for the operations in scope. `python-getting-started` ends with a checklist of the rows a Python sheet is incomplete without — treat that list as the checklist for your own sheet, and collect every in-scope operation in ONE pass rather than re-opening a module per member.

**Scope guard:** the APIMatic-generated Twilio **Python SDK** (import root `twilio`, distribution `twilio`) in **Python projects only**. Unrelated API, or any language other than Python — do nothing; this skill does not apply.

## Workflow

**If the user opens with a reported SDK error or unexpected Twilio behaviour** (not new feature work), skip the plan-first flow: load `python-getting-started` and `python-error-handling`, look the failing symbol up in the module the table names, and fix from what you find. Otherwise, for implementation work:

### Step 1 — Plan first (always, for any implementation work)

Your FIRST action is to load `python-getting-started` and work through the user's full request (all features in scope — one plan covers the whole implementation). Then write the plan and its contract sheet to `<project repo root>/twilio-plan.md` — that absolute path, not a location you pick later.

**Do the read-only prerequisites in the same pass — they need no SDK knowledge and touch no project file:**

- the repo survey (read-only exploration of conventions, layering, and **whether the project is sync or `async`**) — capture each convention as *pattern + the ONE exemplar file path to imitate*, NOT inline code snippets: you will read the exemplar at edit time anyway, so a snippet dump gets paid for twice;
- **establish the toolchain before you need it**: which environment manager the repo uses (`uv`, `poetry`, `pip` + venv, `pdm`), whether `twilio` is already a dependency and at what version, and the exact commands that run the project's tests and type checker. Getting this wrong later costs a broken install mid-implementation — and an uninstalled package costs you the lookup layer itself;
- a baseline run of the project's checks (`pytest`, `mypy`, `ruff` — whatever it has) on the UNTOUCHED tree, so later failures are attributable to your changes;
- credentials/environment verification (per the task's secret-handling rules) — including which host `server_config` will select, since omitting it is silent;
- **a read-only smoke of each in-scope operation against the real credential**, run from your scratchpad, not the project, once the map has given you the signatures and before you finalise the sheet. A plan-, region- or entitlement-gated endpoint answers `403` here — the map presents every operation uniformly and cannot know which ones your key may call — and learning that now reorders the plan rather than the build. Skip only operations whose side effects you cannot reverse;
- setting up your task tracking.

Never use the planning phase to get a "head start" on implementation: **creating or editing ANY project file before the gate below is a defect**, no matter how obvious the code seems.

**HARD GATE — no project-file creation or edits until:** `twilio-plan.md` EXISTS at the repo root, its contract sheet has **no open lookups**, and you have read it. The gate bars coding "meanwhile"; it does not bar the read-only prerequisite work above. Starting to code before the sheet exists defeats the entire plan-first design.

**What the gate does not cover:** creating or activating a virtual environment, installing `twilio` and the toolchain into it, and the files those writes produce (`.venv/`, a lockfile the installer updates) are **prerequisites, not project-file edits**. On a greenfield repo they are the only way to reach the lookup layer at all, and they are the only writes permitted before the gate. Nothing you author by hand may change.

### Step 1c — Required reading (do this before you write any code)

End the contract sheet with a **REQUIRED READING** block whose rows carry inline `MUST load <skill>` pointers. **Load every `python-*` skill the sheet names, now, before you start implementing** — not lazily at the step that needs it. The sheet deliberately does *not* carry the how-to: it names the hazard and hands you the skill that resolves it, so an unloaded pointer is a gap in what you know, not a formality.

**A fixed floor applies regardless of what the sheet says** — the sheet can add to it, never remove from it: `python-error-handling` always (every integration writes an error boundary); `python-client-initialization` before the client is constructed; `python-testing` before the first test file you create or edit, *including* a throwaway verification script that fakes the transport. A sheet row that excuses one of these ("out of scope", "no test suite requested") is not a substitute for loading it.

These are API-agnostic usage skills; loading them is not a substitute for the lookup layer, and reading a module in the installed package does not remove the need to load the skill for that step. Contract *facts* still come only from your sheet or a fresh lookup.

Before implementing, check the plan's **Assumptions & Blockers** section:

- Blocker or major assumption → surface it to the user in plain language, get their answer, and revise `twilio-plan.md` in place.
- Minor assumptions only → proceed.

Full re-planning only on genuine scope change; for a single missing fact mid-implementation, do the lookup, never guess.

### Step 2 — Implement from the contract sheet

1. Read `twilio-plan.md` once. Treat its contracts as authoritative — do not re-derive or "double-check" them from memory. When a lookup revises a row, update the file so the sheet and the code never disagree.
2. **Decide sync vs async once, from the host application, before the first call** — and take the decision from the repo survey, not from preference. This SDK ships two complete client classes (`Client` / `AsyncClient`) and there is no bridge between them: a sync client in an `async def` blocks the event loop, and an async client in sync code is a coroutine nobody awaits. Getting this wrong is not a local fix later; it is every call site. The choice also changes the transport-override keyword (`custom_http_client` vs `custom_async_http_client`) and the teardown obligation (`close()` vs `await aclose()`).
3. **Pick the response mode per call, deliberately.** Each operation exists twice: the plain call raises `ApiError` on failure, and its `with_raw_response` peer returns `ApiResult` instead. For the operations that return `None`, the raw peer is the only way to observe the status code — so a call whose outcome you must inspect needs the mode chosen at write time, not retrofitted.
4. Implement sequentially, following the repo's own conventions and layering. You loaded the companion skills the sheet named in Step 1c — implement each step in line with the one that governs it. Take every contract *fact* (signatures, wire aliases, error unions, enum members) from the contract sheet or a fresh lookup — never re-derive one from a companion.
5. After every change: run the project's **type checker** (`mypy`/`pyright`) as well as its tests. The package ships `py.typed` and is generated under `mypy --strict`, so a type error against it is a real contract violation, not noise — it is the closest thing Python gives you to the compile step. **Treat a clean type check as the gate you do not skip.** If the project has no type checker configured, install `mypy` into the environment and run `mypy --strict` on the files you touched — the SDK is generated under that setting, so it checks cleanly against it. If you genuinely cannot install one, say so in your final report rather than silently substituting a smoke run. Fix non-SDK errors yourself.
6. **Any error involving an SDK type or member** — an `AttributeError`/`TypeError` on a `twilio.*` object, a `pydantic.ValidationError` you cannot place, a mypy error naming an SDK type, an unexpected `ApiError` — → go back to `python-getting-started`'s module table and read the one module that owns the fact. Do not attempt more than one self-fix of an SDK-name error before doing that lookup: rewriting from the same knowledge that produced the error is guessing. Remember that a **decode failure raises `ValidationError`/`ValueError`, not `ApiError`, and bypasses both response modes**, and that `httpx` transport exceptions arrive unwrapped — so an exception that does not look like an API error may still be one of the SDK's failure kinds.
7. Run the project's tests; verify the integration end to end the way the task demands. The SDK performs **no retries at all**, so anything the task needs there is yours to build or deliberately omit — say which you did.

### Step 3 — Answering pure questions

A standalone Twilio question with no code change: look it up in `python-getting-started` (and the module its table names), then give the grounded answer. Never answer from memory, even for "easy" questions.

## Anti-patterns — never do these

- **Always load `python-getting-started` first.** It is your lookup layer, not optional background. (The `python-*` companions are the complement: load the ones the sheet names, per Step 1c.) Don't re-derive a contract *fact* from a companion — exact signatures, wire aliases, error unions and enum members come from the sheet or a fresh lookup.
- **Never write a Twilio/SDK fact from memory** — every signature, field name, enum member, and error union in your code must come from the contract sheet or a lookup. And **never write a call from memory "to fix later".**
- **Don't web-search Twilio topics to find an implementation detail** — the installed package's own source is the ground truth, and the module table tells you where to look. Public Twilio docs describe the REST API, not this SDK's generated surface, and the two disagree on names.
- **Never introspect the SDK at runtime to discover its shape.** `dir()`, `model_fields`, `inspect.signature`, or a REPL poke is the Python-flavoured version of decompiling the package: it answers what exists, never what is *supported*, and it silently invites private attributes into your code. Read the source module instead.
- **Don't grep the package to *locate* a type** — the SDK map is the locator (and says so: *"Never grep for a type"*); grep only *inside* the module its **Type sources** table names, for the symbol. A sweep for a *shape* is a different thing, and is fine: "every member typed `Optional[Any]`", "every discriminator field" are cross-cutting questions nothing indexes, and one targeted `grep -rn` over `models/` is the right tool for them — record what it found on the sheet.
- **Don't vendor, `sys.path`-hack, or editable-install the SDK from a throwaway clone** to make a lookup possible. Install the distribution properly into the project's environment (see `python-getting-started`); an editable install pointed at a clone breaks every import the moment the clone is deleted.
- **Don't create or edit project files before the HARD GATE** in Step 1 — plan and contract sheet first, code second.

