---
name: "typescript-integrate-discourse"
description: "MANDATORY FIRST STEP for Discourse TypeScript SDK work in a TypeScript or JavaScript project — load this BEFORE you write any code; TypeScript SDK ONLY, never load it for any other language. Applies when asked to integrate Discourse in TypeScript/Node — export events ics, list events, create backup, download backup, get backups, send download backup email, or when the Discourse TypeScript SDK errors, fails to compile, or behaves unexpectedly. Knowing the SDK exists is NOT a substitute for loading this, because it carries five binding gates stated NOWHERE else and not inferable from the package — (1) load typescript-getting-started, confirm `discourse` actually resolves and read the SDK map that ships inside it before any lookup, (2) the exact plan-file path (discourse-plan.md at the repo root) and the no-project-file-edits window until a contract sheet with no open lookups exists there and you have read it, (3) the mandatory load of every typescript-* companion skill the sheet names, (4) the host decision, which this SDK forces once and irreversibly — it declares one environment and no ServerEnvironment, so any other host is a serverOptions base-URL override rather than an environment member, and (5) the memory ban, where every signature, request field, channel, header default, error arm and enum member comes from a lookup and never from recall or runtime introspection."
---

# Discourse TypeScript SDK — Integration workflow (lookup layer + contract sheet)

You do the SDK lookups yourself: `typescript-getting-started` is your **lookup layer** — load it and ground every contract fact in it (and in the source files its table names) before writing code. The `typescript-*` companion skills are a different thing: they are API-agnostic *usage* guidance, they are yours to load, and Step 1c below makes loading them mandatory.

## Your lookup layer

- **`typescript-getting-started`** is the entry point for every SDK need. It carries the SDK's identity (package name, version, Node floor, how it installs), the single import specifier and what the root exports, the server environments and the base-URL knob, the auth pattern, the resources, and a **file table** naming the one file that owns each kind of fact. Load it first, always.
- **The SDK map is your lookup surface, and you open it yourself.** The SDK ships `sdk-map.md` and `map/operations/` at its package root — and because `package.json`'s `files` list includes them, **installing the package puts the map in `node_modules/discourse/`**. There is nothing to clone and no helper agent to delegate to. `typescript-getting-started` tells you how to traverse it: read `sdk-map.md` once, then the one resource page your operations live on.
- **The installed package is the ground truth; the file table is only the locator.** Confirm it resolves before you rely on a lookup — `node -e "console.log(require.resolve('discourse/package.json'))"`. **If the resolve fails, or the directory it prints carries no `sdk-map.md`, the map is still in the SDK's own repository** — <https://github.com/context-plugins/discourse-typescript-sdk>, branch `main`. Read it there, and only if neither route yields a map mark the fact `UNVERIFIED`, say what would settle it, and do not fill the hole from memory. This SDK is **not published to a registry**, so the install is a build from its source — <https://github.com/context-plugins/discourse-typescript-sdk>. `typescript-getting-started`'s *Install* section carries what to run.
- **Read scoped.** Search for the one symbol and read the lines around it rather than whole files, and never copy a design comment's rationale onto a contract sheet — the sheet carries facts an implementer must obey, not the reasoning behind them.
- **Write a contract sheet with no open lookups** before you implement: exact signatures with the right request type name, every request field with its channel, wire name and default, required-vs-optional-vs-nullable members, the error arms per operation with the status each covers, and enum members for the operations in scope. `typescript-getting-started` ends with a checklist of what a sheet for this SDK is incomplete without — treat that as the checklist for your own sheet, and collect every in-scope operation in ONE pass rather than re-opening a map page per field.

**Scope guard:** the APIMatic-generated Discourse **TypeScript SDK** (package and import specifier `discourse`, client `DiscourseClient`) in **TypeScript or JavaScript projects only**. Unrelated API, or any language other than TypeScript/JavaScript — do nothing; this skill does not apply.

## Workflow

**If the user opens with a reported SDK error, a compile failure, or unexpected Discourse behaviour** (not new feature work), skip the plan-first flow: load `typescript-getting-started` and `typescript-error-handling`, look the failing symbol up on the map page or in the file the table names, and fix from what you find. Otherwise, for implementation work:

### Step 1 — Plan first (always, for any implementation work)

Your FIRST action is to load `typescript-getting-started` and work through the user's full request (all features in scope — one plan covers the whole implementation). Load `typescript-error-handling` before you write the plan too: table 1b.4 is decided from it. Then write the plan and its contract sheet to `<project repo root>/discourse-plan.md` — that absolute path, not a location you pick later.

**Do the read-only prerequisites in the same pass — they need no SDK knowledge and touch no project file:**

- the repo survey (read-only exploration of conventions, layering, **module format — ESM or CJS, which changes how the SDK is imported and whether `instanceof` on its error classes is trustworthy**, and the runtime: Node, a bundled browser app, or an edge runtime) — capture each convention as *pattern + the ONE exemplar file path to imitate*, NOT inline code snippets: you will read the exemplar at edit time anyway, so a snippet dump gets paid for twice;
- **establish the toolchain before you need it**: the package manager, whether `discourse` is already a dependency and at what version, the `tsconfig` flags that change what compiles here (`exactOptionalPropertyTypes`, `verbatimModuleSyntax`, `strict`), and the exact commands that run the project's build, type check, lint and tests. Getting this wrong later costs a broken install mid-implementation — and an uninstalled package costs you the lookup layer itself, since the map ships inside it;
- a baseline run of the project's checks (`tsc --noEmit`, the test runner, the linter — whatever it has) on the UNTOUCHED tree, so later failures are attributable to your changes;
- credentials/environment verification (per the task's secret-handling rules) — **including which host this deployment will actually talk to**, since this SDK declares exactly one environment, so it emits no `ServerEnvironment` at all and **any other host is a `serverOptions` base-URL override rather than an environment value**;
- **a read-only smoke of each in-scope operation against the real credential**, run from your scratchpad, not the project, once the map has given you the signatures and before you finalise the sheet. A plan-, region- or entitlement-gated endpoint answers `403` here — the map presents every operation uniformly and cannot know which ones your credential may call — and learning that now reorders the plan rather than the build. Skip only operations whose side effects you cannot reverse;
- setting up your task tracking.

Never use the planning phase to get a "head start" on implementation: **creating or editing ANY project file before the gate below is a defect**, no matter how obvious the code seems.

**HARD GATE — no project-file creation or edits until:** `discourse-plan.md` EXISTS at the repo root, its contract sheet has **no open lookups**, and you have read it. The gate bars coding "meanwhile"; it does not bar the read-only prerequisite work above. Starting to code before the sheet exists defeats the entire plan-first design.

**What the gate does not cover:** installing `discourse` into the project, installing the toolchain, and the files those writes produce (`node_modules/`, a lockfile the installer updates) are **prerequisites, not project-file edits**. On a greenfield repo they are the only way to reach the lookup layer at all — the map lives inside the installed package — and they are the only writes permitted before the gate. Nothing you author by hand may change.

### Step 1b — The tables the contract sheet must carry (fill these in before you write any code)

The per-operation rows describe **what each operation is**. The tables below carry what those rows cannot: a write that may reach the provider twice or whose outcome you may not learn, a rule that spans two operations, and a field nobody asked for. Fill in every one that applies before any code exists.

#### 1b.1 — DURABLE WRITES

One row in each table below per operation in scope that creates, sends or changes something on the provider's side; `none` if the scope has no such write. Every row follows one order: **claim → SDK call → record the result**. The claim is a row of its own, committed to a store this application owns *before* the call — not a field filled in afterwards on the record the write is about — so a second caller is stopped before it reaches the provider, and a lost answer leaves something to settle. A test that reads the store from inside the faked `fetch` shows the claim was there when the request left.

**DUPLICATE CLAIMS** — what stops the same operation reaching the provider twice.

| Write | Where the claim is stored | What rejects the second one | Where that rejection is caught | Where in the code |
| --- | --- | --- | --- | --- |

⚠⚠ **What rejects the second one**: the store refusing the second claim — a unique constraint or a conditional write on a value every caller doing the same operation computes the same (the order being paid, the signup being welcomed), never on a value minted per attempt, which is unique by construction and refuses nothing. A read before the write, an in-process lock, or an assumption that one process runs lets both callers through. Release the claim when the provider refuses the call, so a later attempt is not blocked.

**Where that rejection is caught**: the `catch` for what the store raises on the second claim, recognised by the driver's error code rather than its message; the losing caller then uses the record the winner wrote.

The SDK sends an `Idempotency-Key` minted once per call, and its own retries resend that key — but a second click or a retry of your own is a new call with a new key, so the provider cannot join the two. The key goes beside the claim, never in place of it; where the operation declares its own key, send the reference stored on the claim (see `typescript-configuration-resilience`).

**UNKNOWN OUTCOMES** — what settles a write the provider may have acted on without your code learning the answer.

| Write | The operation you re-read with | The reference you search by | Where in the code | The test that fails the connection |
| --- | --- | --- | --- | --- |

⚠⚠ A `ConnectionError` or `TimeoutError` on a write is *unknown*, not *failed*: the provider may already have acted. Reporting a failure is not a legal entry, and neither is leaving the caller to check or retry. Settle it in that write's own `catch`: re-read by the reference you sent — found, settle from what the provider holds; not found, or the re-read itself fails, still unknown, never failed. Telling the caller the outcome is unknown comes after the re-read, never instead of it. If the provider offers no way to find the write, that is a **Blocker** in Assumptions & Blockers, not a row.

A write that never left has nothing to re-read — a credential that could not be obtained (`AuthError`) or a value that would not encode (`EncodeError`) — and must reach a different outcome. Re-reading after every error is not the safe default: "any error might mean it went through" is false for a request that never left, so a refused credential gets its own outcome and no re-read. **The test that fails the connection** asserts the re-read request was made; a second test, a never-sent failure on the same write, asserts it was not.

Write `TBD` in **Where in the code** and **The test that fails the connection** while you plan — every row. Once the code compiles, replace each `TBD` individually: the claim write, then the SDK call it precedes; the `catch`, then the re-read it makes. ⚠⚠ A `TBD` left behind, a name that is not in the code, or one note covering several rows is **not addressed**; if the code does not do what the row says, fix the code, then the cell.

#### 1b.2 — CROSS-OPERATION INVARIANTS

**CROSS-OPERATION INVARIANTS** — copy this header into the contract sheet and add one row per value a caller supplies (an identifier, a code, a reference) whose legal set something other than that call defines: a list the provider returns, or records this application keeps. `none` if the task restricts no such value. ⚠⚠ The map never states these rules; derive them from the task.

| Invariant | Where the legal set comes from | Enforced where | The test that proves it |
| --- | --- | --- | --- |

⚠⚠ **The legal set is the one this task offers, not everything the account holds.** Asking the provider whether a value exists is not this check: the provider already rejects what exists nowhere, so a lookup of one record by its id enforces nothing new — internal records, test records and records meant for something else all exist, and all pass it. Check membership of the offered set itself, read in full (every page). If neither the provider nor this application can name that set, that is a **Blocker** in Assumptions & Blockers, not a row.

The check runs before the write is attempted and before its **DUPLICATE CLAIMS** claim is inserted — a value rejected after the claim exists leaves the claim behind to block a later, legitimate attempt. **The test that proves it** asserts a value outside the set is rejected **and** the write is never called.

#### 1b.3 — OPTIONAL REQUEST FIELDS

For every write operation in scope, the contract sheet carries an **OPTIONAL FIELDS** table: one row per optional field on the request, and what **requires** it.

| Field | What requires it | Set it? |
| --- | --- | --- |
| `{optionalField}` | nothing | ❌ leave it out |
| `{optionalField}` | the words in the task that supply it | ✅ set it from those words |
| `{optionalField}` | a named row of this sheet — e.g. the idempotency key a DUPLICATE CLAIMS row sends, or the reference an UNKNOWN OUTCOMES row searches by | ✅ set it, and name that row here |

⚠⚠ **A field nothing requires is not yours to choose** — and "something requires it" means the task's own words or a row of this sheet, never your own sense that it looks sensible. Leaving it out *is* the decision: the provider's own default then applies, whether that is the account's configuration or the API's documented behaviour, and neither is yours to replace with a value you invented.

⚠⚠ **This rule never removes a field another row requires.** An idempotency key, and the reference you look an unknown outcome up by, are required by the DUPLICATE CLAIMS and UNKNOWN OUTCOMES rows rather than by the task — the task will never mention either. Dropping one to satisfy this table is a defect, not compliance. And because a header, a query parameter and a body field all look alike on this SDK's flat request object, "it is only a header" is not a reason to leave a field off the table.

⚠⚠ **The map does not state defaults, and its silence is not permission to pick one.** A member typed `field?: T` tells you the field may be omitted. It tells you nothing about what omitting it does. If you cannot state what the provider will apply when the field is absent, that is a reason to leave it absent, not a reason to fill it.

**The test that proves it:** assert the request the SDK sent carries **no key your own code set without a row that requires it** — headers and query parameters included, not only the body. The SDK adds its own (authorization, content type, its defaults); those are not yours and need no row. A test that only checks the fields you meant to send cannot see an invented one.

#### 1b.4 — WHEN THE API SAYS NO

Add one table per operation that uses the caller's data — what they typed, IDs they supply, and data your app stores for them (their email, their name). An empty request body does not make a refusal yours: when the API refuses the data you sent for them, only its reason tells them what to change. An operation with no typed arms still gets one.

| status | your app answers | the caller reads | test |
| --- | --- | --- | --- |
| a `4xx` other than 401 / 403 / 429 | the same `4xx` | the API's reason text from `err.payload` | fake it with a reason; assert the reason is in your response |
| 401 / 403 | 502 | a fixed message — our credentials | fake a 401; assert 502 and the fixed message |
| 429 | 503 | a fixed message — our quota | — |
| 5xx | 502 | a fixed message | — |
| no response, on a write | per UNKNOWN OUTCOMES | unknown — never "failed" | — |
| no response, on a read | 502 | a fixed message | — |

Logging the reason is not returning it: log it **and** put it in the response.

### Step 1c — Required reading (do this before you write any code)

End the contract sheet with a **REQUIRED READING** block whose rows carry inline `MUST load <skill>` pointers. **Load every `typescript-*` skill the sheet names, now, before you start implementing** — not lazily at the step that needs it. The sheet deliberately does *not* carry the how-to: it names the hazard and hands you the skill that resolves it, so an unloaded pointer is a gap in what you know, not a formality.

**A fixed floor applies regardless of what the sheet says** — the sheet can add to it, never remove from it: `typescript-error-handling` always (every integration writes an error boundary, and this SDK's one error family is narrowed on its closed `kind`, with four throwables outside it that a family test has to rethrow); `typescript-client-initialization` before the client is constructed; `typescript-testing` before the first test file you create or edit, *including* a throwaway verification script that fakes `fetch`. A sheet row that excuses one of these ("out of scope", "no test suite requested") is not a substitute for loading it.

These are API-agnostic usage skills; loading them is not a substitute for the lookup layer, and reading a file in the installed package does not remove the need to load the skill for that step. Contract *facts* still come only from your sheet or a fresh lookup.

Before implementing, check the plan's **Assumptions & Blockers** section:

- Blocker or major assumption → surface it to the user in plain language, get their answer, and revise `discourse-plan.md` in place.
- Minor assumptions only → proceed.

Full re-planning only on genuine scope change; for a single missing fact mid-implementation, do the lookup, never guess.

### Step 2 — Implement from the contract sheet

1. Read `discourse-plan.md` once. Treat its contracts as authoritative — do not re-derive or "double-check" them from memory. When a lookup revises a row, update the file so the sheet and the code never disagree.
2. **Decide which host this deployment talks to, explicitly, before the first call.** This SDK declares one environment and emits no selector for it, so a different host is a `serverOptions` base-URL override. Nothing in the options then records **which** deployment this is, which is precisely the shape of configuration that gets a live secret aimed at a test host or the reverse. Bind it to configuration and fail startup if the (host, credential) pair is not the one this deployment intends.
3. **Build the client once and hold it.** Resources are memoized lazy getters on it, so rebuilding one per request throws that state away. There is no `close()` — it owns a `fetch`, not a pool.
4. **Pick the response mode per call, deliberately.** Every operation returns `ApiPromise<T, E>`: `await` it and an error status rejects, or call `.asApiResult()` **on the value the operation returned** for the non-throwing `ApiResult<T, E>` — the only way to see the status and headers of a *success*, and therefore the only way to observe anything at all from the **11 operations that resolve to `undefined`** (every operation whose success declares no body — the map's **Returns** bullet names them). `ApiPromise` overrides `Symbol.species`, so `.then()`/`.catch()`/`.finally()` hand back a plain `Promise` with the method gone — the mode is chosen at write time, never retrofitted.
5. Implement sequentially, following the repo's own conventions and layering. You loaded the companion skills the sheet named in Step 1c — implement each step in line with the one that governs it. Take every contract *fact* (signatures, field names, channels, error arms, enum members) from the contract sheet or a fresh lookup — never re-derive one from a companion.
6. After every change: run the project's **type checker** (`tsc --noEmit`) as well as its tests. The package ships its own types and is generated under strict TypeScript, so a type error against it is a real contract violation, not noise — it is the compile-time backstop the whole map-first discipline leans on. **Treat a clean type check as the gate you do not skip.** If the project has no type check configured, run `tsc --noEmit` over the files you touched; if you genuinely cannot, say so in your final report rather than silently substituting a smoke run. Fix non-SDK errors yourself.
7. **Any error involving an SDK type or member** — `TS2339` (property does not exist), `TS2345`/`TS2322` (argument or assignment mismatch), `TS2551` (did you mean), `TS2307` (cannot find module — usually a deep import), `TS2739`/`TS2741` (missing required members), or an unexpected rejection at runtime — → go back to `typescript-getting-started`'s map section and file table, and read the one page or file that owns the fact. Do not attempt more than one self-fix of an SDK-name error before doing that lookup: rewriting from the same knowledge that produced the error is guessing. Remember which failures are **not** `ApiError`: a malformed body is `DecodeError`, a value that would not encode `EncodeError`, a dropped connection `ConnectionError`, an attempt's timeout `TimeoutError` (both only after any retries are spent), a credential that could not be **obtained** `AuthError` — every one of them in the `DiscourseError` family, told apart by `err.kind`. So an exception that does not look like an API error may still be one of the SDK's failure kinds.
8. Once the code is complete, open each member the **DUPLICATE CLAIMS** and **UNKNOWN OUTCOMES** rows name and confirm it runs when that write runs. Where the code falls short of a row, fix the code, not the row.
9. Run the project's tests; verify the integration end to end the way the task demands. Retrying is **on by default**, so if the task needs a different policy, tune it through `ClientOptions.retry` rather than wrapping the call. The SDK has no logging, hooks or middleware, so anything the task needs there is yours to build on the `ClientOptions.fetch` seam or to deliberately omit — say which you did for both.

### Step 3 — Answering pure questions

A standalone Discourse question with no code change: look it up in `typescript-getting-started` (and the map page or file its table names), then give the grounded answer, citing where it came from. When several questions arrive batched, answer them in one pass. Never answer from memory, even for "easy" questions.

## Anti-patterns — never do these

- **Always load `typescript-getting-started` first.** It is your lookup layer, not optional background. (The `typescript-*` companions are the complement: load the ones the sheet names, per Step 1c.) Don't re-derive a contract *fact* from a companion — exact signatures, request fields, channels, error arms and enum members come from the sheet or a fresh lookup.
- **Never write any Discourse or SDK fact from memory** — every signature, field name, wire header, enum member, and error arm in your code must come from the contract sheet or a lookup. And **never write a call from memory "to fix later".**
- **Never switch on an error arm tag across operations.** A tag is derived from the arm's **body schema**, never from its status: an arm whose body is a direct model reference is named after that model in lower camel (`"validationError"`), and every other body — a primitive, an array, a map, or no content — is named `"error{Status}"` (`"error400"`, `"error4XX"`, `"errorDefault"`), with a numeric suffix on the second of two arms that would otherwise land on the same name. Tags are resolved **per operation**, so the same tag covers different statuses on different operations — a shared handler keyed on `err.payload.kind` is a bug. Read the status from `err.status`, and narrow on `kind` only against the arm table of that one operation.
- **Don't web-search Discourse topics to find an implementation detail** — the installed package's own map and source are the ground truth, and the file table tells you where to look. Public Discourse docs describe the HTTP API, not this SDK's generated surface, and the two disagree on names, on which fields are required, and on what the SDK sends by default.
- **Never introspect the SDK at run time to discover its shape.** `Object.keys`, logging a client instance, or a REPL poke is the TypeScript-flavoured version of decompiling the package: it answers what exists, never what is *supported*, and it invites `#`-private fields and unexported engine types into your code. Read the map, then the file it names.
- **Don't grep the package to *locate* a type** — the SDK map is the locator (and says so: *"Do not derive the path from the type name"*); grep only *inside* the file its **Type sources** table names, for the symbol. A sweep for a *shape* is a different thing, and is fine: "every field typed `unknown`", "every required-nullable member" are cross-cutting questions nothing indexes, and one targeted `grep -rn` over `src/models/` is the right tool for them — record what it found on the sheet.
- **Don't deep-import from the package** (`discourse/models/…`). The package root is the only entry and deep specifiers do not resolve; the map's `Source` paths are for reading, not importing.
- **Don't import `Event` unaliased.** This SDK exports a type named after a TypeScript/DOM global, so importing it plain shadows the global for the whole file. Alias on import from `discourse`.
- **Don't vendor the SDK's `src/` into the project, point `tsconfig` `paths` at a throwaway clone, or import from `dist/` directly** to make a lookup possible. Install it properly (see `typescript-getting-started`); a clone-based shortcut breaks every import the moment the clone is deleted, and it does not put the map where the lookups expect it.
- **Don't create or edit project files before the HARD GATE** in Step 1 — plan and contract sheet first, code second.

