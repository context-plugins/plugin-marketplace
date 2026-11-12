---
name: "dotnet-integrate-tesla-fleet-management-api"
description: "MANDATORY FIRST STEP for any Tesla Fleet Management API .NET SDK work in C#: integrating Tesla Fleet Management API, or a Tesla Fleet Management API .NET SDK call that errors or behaves unexpectedly. Load it before opening the SDK map or touching any project file — it sets the plan-first workflow (tesla-fleet-management-api-plan.md before any code) and the map-grounding rules. .NET/C# only; never load it for another language."
---

# Tesla Fleet Management API .NET SDK — Workflow (map + skills)

You orchestrate this task: the `tesla-fleet-management-api-planner` agent writes the plan and its contract sheet; you answer contract questions, implement from the sheet and fix SDK errors yourself. Your source of truth is the **SDK map that ships inside the SDK source repo** (`sdk-map.md` plus its `map/operations/` pages; model, enum and error shapes live in the source files those pages name), obtained per `dotnet-getting-started`, plus the companion `dotnet-*` skills for usage traps. Your training data on this SDK is stale — every fact you emit must come from a map page or a map-named source file you actually read this session, in that same clone; you never guess.

**Scope guard:** the APIMatic-generated Tesla Fleet Management API **.NET SDK** (root namespace `TeslaFleetManagementApi`) in **C#/.NET projects only**. For any other API or language, say so and stop — this skill does not apply.

## The planner agent

`tesla-fleet-management-api-planner` ships with this plugin. It writes `tesla-fleet-management-api-plan.md` — the plan and its contract sheet — and revises it in place; it writes no project code. Start it the first of these ways your host allows:

1. **Your subagent tool lists it.** Some hosts list a plugin's agents under the plugin's name, as `tesla:tesla-fleet-management-api-planner`; start it by whichever of the two names your subagent tool lists.
2. **It isn't listed, or you can't start a subagent.** Tell the user in one line that you are writing the plan yourself, then do so as *Step 1* describes. Don't stop to ask.

However you start it:

- **Start it on the same model you are running on.** If your subagent tool takes a model, pass your own model; if it has no model option, leave its default. Tell the user in one line which model you started it on.
- **Start it once per integration.** A plan revision is a follow-up message to that same agent; re-start it, carrying the clarification and the plan path, only where your host cannot message it. Never start a second one for the same integration.

## Grounding rules

- **Map for contracts; the map-named file for shapes** — follow `dotnet-getting-started`'s *SDK map* and *SDK source* sections in full.
- **Your contract sheet never leaves a contract fact open for "later."** The map pages and the files they name answer nearly everything — resolve them during planning. A fact only live traffic could confirm becomes a concrete defensive-coding directive on the sheet, labelled `UNVERIFIED` (§7); never leave a row marked for a later source lookup.
- **When you judge how far a contract can be trusted**, the trust judgment may cite ONLY evidence visible in the map or SDK source (e.g. two generated definitions that disagree, a suspicious shared model) — never training-data memory of this API, and never claims about what the live wire "usually" sends.
- **The sheet records Tesla Fleet Management API's call surface, not the application's design** — its persistence, its concurrency rules, and the request contract its own callers must satisfy. Where an SDK fact forces an application decision, record the fact and its consequence and mark the decision `YOUR CALL — not in the map` (§7), to be decided at implementation time against the task.
- **Name only what you have read.** Never name a claim, header or route of the application as though you knew it exists — unless you have read that code. Name configuration by its binding key, never by a raw environment variable, and give the default the map documents where there is one: a setting you invent a name for is a setting no deployment will supply.

## Workflow

**If the user opens with a reported SDK error or unexpected Tesla Fleet Management API behaviour** (not new feature work), go straight to *Step 4 — Fixing SDK errors* below — do not run the plan-first flow for a bug report. Otherwise, for implementation work:

### Step 1 — Plan first: the planner writes `tesla-fleet-management-api-plan.md` (always, for any implementation work)

Your FIRST action, once you have reached the SDK source (the one prerequisite below that comes before the start), is to start **`tesla-fleet-management-api-planner`**, as *The planner agent* says, once, with the user's full request and the name of this skill, `dotnet-integrate-tesla-fleet-management-api`. Dictate in its task the absolute project root, the absolute path of the SDK source you reached — it reads the map and the source there rather than reaching its own — and the absolute path it must write to — `<project repo root>/tesla-fleet-management-api-plan.md`, that exact path, always; never another location. It grounds and writes the plan and the contract sheet exactly as *How to ground* and the format below describe, and returns the file's path. Those subsections are its instructions and your reference: you read the sheet in that format, and once the code compiles you fill its `TBD` cells and settle its `YOUR CALL — not in the map` entries, as *Step 3* says. Do the rest of the read-only prerequisites below in the same message as the start, and while it works.

**If you couldn't start the planner** (case 2 in *The planner agent*), *How to ground* and the format are your own instructions: write the file yourself at that path. It is the only project-repo file you write before the HARD GATE further down.

#### How to ground (map-first, one pass)

1. Load `dotnet-getting-started`; open `sdk-map.md` (the index).
2. From the index, open the **operations pages** for every controller in scope — take signatures (the request record each operation takes, and its required members), return types, error case (A: typed `ApiException<{Operation}Error>` with its `TryGet…` accessors and payload type / B: `ApiException<RawError>`), and pagination — remembering that a block silent on a defaults-table point means the default applies. Where an operation's *semantics* decide what you must pass, that prose is the method's XML `<remarks>` in the `Api/` file the page names, and the per-member docs on its request record: read it there.
3. Open, scoped, the **declaring source file** for every request/response model you will reference — the operation's **Type sources** table names it — and take field names WITH their `[JsonPropertyName]` wire names, `required` flags, nullability, and the envelope shape. Enum value lists and union accessors come from their declaring files the same way.
4. Map each in-scope step to the companion skill that governs it, as a trap note (format in §3 below).

#### Prerequisites

**Reach the SDK source before you start the planner** (per `dotnet-getting-started`) — the map lives inside it, so this comes before any map work, and the planner reads the copy you reached rather than reaching its own.

The rest need no SDK knowledge and touch no project file, so do them while the planner works — or alongside your own map work, if you are writing the plan yourself:

- the repo survey (read-only exploration of conventions and layering) — record each convention as *pattern + the ONE exemplar file path to imitate*, NOT inline code snippets: you will read the exemplar at edit time anyway, so a snippet dump gets paid for twice;
- `dotnet restore` and a baseline `dotnet build` / `dotnet test` of the UNTOUCHED solution, so later failures are attributable to your changes;
- locating the SDK reference and its version in the project;
- credentials/environment verification (per the task's secret-handling rules);
- setting up your task tracking.

#### HARD GATE

**No project-file creation or edits until the planner has RETURNED, `tesla-fleet-management-api-plan.md` EXISTS at the path you dictated (check it — a helper can misreport where it saved), every section below is filled in, and you have read it.** If you wrote the plan yourself, the gate is the file existing at that path with every section filled in. The read-only prerequisites above are allowed; using them as a "head start" on code is a defect, however obvious the code seems.

#### The `tesla-fleet-management-api-plan.md` format (keep it tight — tables, not prose)

1. **Scope & sequence** — the implementation steps in order, each naming the operations it uses. A capability the map lacks is a Blocker (§6), never a data path you invent to replace it.
2. **CONTRACT SHEET** — open the section with two literal warning lines: that signatures are generated code, verbatim — each operation that takes input takes ONE request record as its first parameter (an operation with no inputs takes none), built with an object initializer whose property names are the record's own, never flat arguments; and that every SDK type is written fully-qualified with the namespace its source path implies, taken from the path the map gives for THAT type, never from where a neighbouring type sits. Then one table row per operation: controller property · method signature · request record + its members (`Name: type, required?`) · body model + its fields (`Name (wire_name): type, required?`) · response envelope + the inner fields the integration reads · error case A/B + accessors + payload type · pagination · **source** (§7). Below it: the enum value tables actually needed, and the client construction/auth/server-node facts. ⚠ A request model may mark nothing required, and then `required?` selects nothing for you — carry the optional fields the endpoint's own prose ties to whether the call is accepted, and say which doc-named fields you left out.

The CONTRACT SHEET also carries a **CROSS-OPERATION INVARIANTS** table, directly below its per-operation rows: the rules no single row can state, because they relate two operations. One row per value the task lets a caller supply where a *different* operation defines the legal set for it (identifiers, handles, codes, references); `none` if the task has no such value — never leave the table out.

| Invariant | Operations | Enforced where |
| --- | --- | --- |
| a value accepted by X must be one Y returned | `{WriteOperation}` ← `{ListOperation}` | before `{WriteOperation}` is called |

⚠⚠ The map never states these rules; derive them from the task.

⚠⚠ **Operations** names the operation that *defines* the legal set: the list or search call that returns what this application offers, or the earlier call whose result this application stored. A lookup that confirms a single value exists is not an answer: it proves the value exists at the provider, not that it is one this application offers.

**Enforced where** names the member that checks, before the write, that the caller's value is in that set. If the application never reads that set, say so there and add the read — the check is part of the work. `YOUR CALL — not in the map` is not a legal entry in any cell of this table.

3. **Trap notes** — one line per hazard, attached to the step where it bites, each ending in an inline **`MUST load <skill>`** pointer. State the hazard and what it costs, never the answer — no fix, no snippet, not even a companion default you believe correct: "what `Timeout` actually bounds" is a trap note, "`Timeout` is per-attempt" is not. A trap note from which you could write correct code without loading the named skill is a defect. Contract *facts* are the opposite: resolve those fully and inline.
4. **REQUIRED READING** — close the sheet with the de-duplicated list of every `dotnet-*` skill named above, one line each: skill · the step it governs, each name plugin-qualified (every APIMatic .NET plugin ships these same names), all to be loaded **before implementation starts**. It always lists `dotnet-error-handling`, even when the trap notes are few, and always carries, verbatim, this hazard row: a body that does not match its declared type — a drifted or malformed **2xx** response (a missing `required` member) or a **non-2xx** body that does not match its operation's generated `{Operation}Error` shape — surfaces as `ResponseDeserializationException`, an `ApiException` that keeps the HTTP status and names the target type but is **not** an `ApiException<TError>`; a catch ladder that handles only `ApiException<TError>` lets it escape, so it must also catch `ResponseDeserializationException` (or `ApiException`).
5. **PRODUCTION READINESS** — the fixed table below, every row recording a *decision*, or `N/A` with its reason where that is genuinely true. A row that only names a skill — even one in REQUIRED READING — restates the concern, or sits blank is **not addressed**.
6. **Assumptions & Blockers** — anything you had to assume about the user's intent, and anything that blocks planning. An empty section is a valid outcome; an invented fact is not. If you expect the provider to reject a call the plan makes, that is a **Blocker**.
7. **Source labels** — every row's **source** cell is one of: the map page or map-named file it came from (so a later lookup is one targeted open); `UNVERIFIED` (only live traffic can settle it); `YOUR CALL — not in the map` (a decision about the application). Something that stops you planning goes in §6.

| # | Concern | The decision the plan must record |
| --- | --- | --- |
| 1 | **Credential fail-fast** | Where credentials are bound — code, the SDK's own environment variables, a provider or `IConfiguration` — and that the host refuses to start when one is missing or blank, rather than discovering it as an `AuthSchemeException` on the first call in production. The check follows the source: the SDK's variable itself when that supplies the credential, the provider's own source when a provider does. A multi-part credential needs **every** part checked, because a blank part is not a missing one. |
| 2 | **Secret sourcing & rotation** | Where the secret comes from, and that the DI registration builds the options object **once at registration** and captures it in the singleton — so a rotated secret does not take effect until the process restarts. If rotation without a restart is required, say how. |
| 3 | **Total timeout budget** | The number the caller actually gets, not the knob — state the budget and where it is enforced. What `Timeout` bounds, and what bounds a whole call: `dotnet-configuration-resilience`. |
| 4 | **Write-retry ownership** | Which of the scope's writes the SDK may resend and which it may not — the retried verbs are under *Retries* in `dotnet-configuration-resilience`. |
| 5 | **Idempotency & ambiguous writes** | For each write in scope: its real key — a member of its request record (*Idempotency* in `dotnet-getting-started`) — or that none exists, and then its reconciliation path. The `Idempotency-Key` header every non-GET call sends is **not** a key and must not be cited as one. |
| 6 | **Observability** | What is logged at which level, and which correlation id from the provider's error bodies reaches your own logs. |
| 7 | **Sensitive data** | Whether the scope carries data you would not want in a log (*Sensitive data* in `dotnet-getting-started`). If it does: `LogRequestBody` off, `LoggerFactory` assigned explicitly, and every sensitive form-body key added to the deny-list. |
| 8 | **Environment selection** | Which base URLs each deployment talks to. Enumerate the server groups and environment members from the map's *Servers & auth* section — there may be more than one group, and each operation resolves through its own. State which groups the scope touches and what each deployment sets; if the SDK declares no sandbox environment, say how test traffic is kept away from the live system. |
| 9 | **Duplicate prevention under concurrency** | For each write a caller can trigger twice: its row in **DUPLICATE CLAIMS** below. If this codebase has nowhere to keep a claim that outlives the process, that is a Blocker in §6, not a row. |
| 10 | **Partial results** | For each paged read that can stop at a cap: the field or return type that tells the caller the result was cut short. |
| 11 | **Unknown outcomes** | For each write whose connection can fail after the provider may have acted: how the code settles the outcome instead of reporting a failure. |

**DUPLICATE CLAIMS** — one row per write a caller can trigger twice; `none` if the task has no such write.

| Write | Where the claim is stored | What rejects the second one | Where that rejection is caught | Where in the code |
| --- | --- | --- | --- | --- |

Every row follows one order: **claim → SDK call → record the result**. The claim is a write of its own, made before the SDK call, so a second caller is stopped before it reaches the provider; release it when the provider refuses the call.

⚠⚠ **Where the claim is stored**: a store this application owns — the one the codebase already keeps its records in — never the provider. A provider idempotency key goes beside the claim, never in place of it.

⚠⚠ **What rejects the second one**: the store refusing the second caller's claim, the way this codebase already refuses a duplicate. A conflict on the save *after* the SDK call is too late — both callers have already reached the provider. A read before the write — a status check, a lookup by key — is not a refusal either: it lets both callers through. Pick a refusal the store you run against enforces: a primary key is refused even by in-memory test stores; a unique index may not be.

**Where that rejection is caught**: the `catch` for what the store raises on the second claim — a lookup that returns the earlier result is not a catch.

Write `TBD` in **Where in the code** while you plan — every row. Once the code compiles, replace each `TBD` individually with two members, in order: the claim write, then the SDK call it precedes. Only this column changes after coding starts. ⚠⚠ A `TBD` left behind, a member that is not in the code, or one note covering several rows is **not addressed**; if the code does not do what the row says, fix the code, then the cell.

**PAGED READS** — one row per read that walks pages; `none` if the scope reads no paged list.

| Read | What caps it | How the caller learns the answer was cut short | Where in the code |
| --- | --- | --- | --- |

⚠⚠ A log line is not a legal entry in the third column: whoever reads the result never reads your logs. Name the field or return type that changes. Write `TBD` in **Where in the code** while you plan; once the code compiles, replace it with the member that sets that field or return type. A `TBD` left behind is not addressed.

**UNKNOWN OUTCOMES** — one row per write whose connection can fail after the provider may already have acted; `none` if the scope makes no writes.

| Write | The operation you re-read with | The reference you search by | Where in the code | The test that fails the connection |
| --- | --- | --- | --- | --- |

⚠⚠ Reporting a failure is not a legal entry, and neither is leaving the caller to retry. Settle the outcome in the failing write's own `catch`, before it returns, or record it as unknown for code that settles it later — a report someone reads is not that code. With no reference, the third column names what the match uses; if the provider offers no way to find the write, that is a Blocker in §6, not a row.

**Where in the code**: that `catch`, or the unknown state and the code that settles it — a re-read helper nothing calls is not addressed. **The test that fails the connection** asserts what follows. Both are `TBD` while you plan, replaced once the code compiles. A `TBD` left behind is not addressed.

Keep the file lean: no copied map pages, no full model dumps, and no clone path — only the operations and fields the scope actually touches.

### Step 2 — Required reading (do this before you write any code)

The contract sheet ends with a **REQUIRED READING** block, and its rows carry inline `MUST load <skill>` pointers. **Load every `dotnet-*` skill the sheet names, now, before you start implementing** — not lazily at the step that needs it; the sheet names hazards, not their answers. If the sheet names none, load `dotnet-error-handling` anyway — every integration writes an error boundary.

Before implementing, check the plan's **Assumptions & Blockers** section:

- Blocker or major assumption → surface it to the user in plain language, get their answer, and send it to the SAME planner as a follow-up message (re-start it, carrying the clarification and the plan path, only where your host cannot message it). It revises `tesla-fleet-management-api-plan.md` in place and replies with the changed rows verbatim: work from that reply, not a re-read of the file. If you wrote the plan yourself, revise it in place with targeted edits — edit the changed rows, append the new section. Rewriting the whole file to change a few rows is a defect.
- Minor assumptions only → proceed.

Full re-planning only on genuine scope change; for a single missing fact mid-implementation, look it up in the map — never guess.

### Step 3 — Implement from the contract sheet

1. Read `tesla-fleet-management-api-plan.md` once and treat its contracts as authoritative — never re-derive or "double-check" one from memory; re-open the map page a row cites. Only a `YOUR CALL — not in the map` row is weighed against the task, and the task wins.
2. Implement sequentially, following the repo's own conventions and layering, each step in line with the companion that governs it. Take every contract *fact* (signatures, wire names, error accessors, enum values) from the contract sheet or a map lookup — never from memory or a companion.
3. After every change: `dotnet build`; fix non-SDK errors yourself.
4. **Any compile or runtime error involving an SDK type or member** → *Step 4* below, after at most one self-fix.
5. Once the code is complete, open each member the **DUPLICATE CLAIMS** and **UNKNOWN OUTCOMES** rows name and confirm it runs when that write runs. Where the code falls short of a row, fix the code, not the row.
6. Then settle every `YOUR CALL — not in the map` entry in `tesla-fleet-management-api-plan.md`: overwrite the marker where it stands, in its row or in **Assumptions & Blockers**, with the decision the code made and the member that implements it, so no entry is left open. Never gather the decisions in a section of their own. Name each one in your final report. A `YOUR CALL` left in the plan is a decision nobody recorded; one the report leaves out is a decision the user never saw.
7. Run the project's tests (`dotnet test`); verify the integration end to end the way the task demands.

### Step 4 — Fixing SDK errors (map-first, in place)

A compile or runtime error involving an SDK type or member (`CS1061`, `CS0117`, `CS0234`, `CS0104`, `CS1503`, `CS7036`, … on `TeslaFleetManagementApi.*`, or a provider error). Resolve it map-first — load `dotnet-getting-started` first if you have not already — never by guessing.

1. **Map lookup first.** For an operation symbol, find its block on the controller's operations page; for a model, enum, error or request-record symbol, open the declaring file — its name is its path (the layout in `dotnet-getting-started`'s *SDK source* section), or take it from the operation's Type sources table. If the code contradicts what you read (wrong field name, missed response envelope, wrong param order, wrong namespace), that is the fix. Response envelopes are the classic case: response types often wrap their payload in one field — reads go one level down.
2. **Go one level deeper on a real gap.** If what you read matches the code, or ambiguity remains, open the operation's own method in the `Api/{Controller}.cs` file the page header names — its `<remarks>` docs and the request it builds — and the per-member docs on its request record, in this session's SDK clone, scoped. Never scan the tree.
3. **Never re-guess** from the knowledge that produced the error: each failing symbol gets a map/source-grounded answer before its line changes; never mutate payloads, field names, or status handling speculatively to "see if it works".
4. **Fix in place** — edit only the project files involved in the error, grounded in the map row (or the named source file).
5. **Build to verify, and classify the outcome:** compiles clean → run `dotnet test` on the touched tests when they exist; compile error → the fix is not done, resolve it the same map-first way and rebuild; build blocked (output locked) → the solution is running, so stop it if you started it, or ask the user to rather than killing their process.
6. **Runtime / provider errors** — read the provider's error payload through the documented path: the operation's error case and `TryGet…` accessors from its map row; `dotnet-error-handling` for the Case A/B mechanics. Config-shaped failures (`AuthSchemeException`, 401, wrong host, timeouts): check auth, the server-node/base-URL configuration, and retry semantics before touching call sites.

If a fix corrects a row in `tesla-fleet-management-api-plan.md`, correct the row in the file too — the sheet stays the record of what was verified.

### Step 5 — Pure questions

A standalone Tesla Fleet Management API question with no code change: load `dotnet-getting-started`, look it up in the map (open the one source file the map names only on a real gap), and answer with the map page (or source file) it came from. No plan file — just the grounded answers; when several questions arrive batched, answer them all in one pass. Never answer from memory, even for "easy" questions.

## Anti-patterns — never do these

- **Never create or edit a project file while `tesla-fleet-management-api-planner` is running**, and never start a second one for the same integration.
- **Never write a Tesla Fleet Management API/SDK fact from memory** — every signature, field name, enum value, and error type in your code must come from the contract sheet or a map lookup. And **never write a call from memory "to fix later".**
- **Do not grep, glob or `find` the SDK tree, and do not open its `api-reference.md`** — the map is the locator; `dotnet-getting-started` says why.
- **Do not web-search Tesla Fleet Management API for an implementation detail** — the map and the SDK source it lives in are the ground truth for THIS SDK version, and `TeslaFleetManagementApi` is what the generated source declares, not what public docs describe.

