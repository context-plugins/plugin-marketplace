---
name: "dotnet-integrate-discourse"
description: "MANDATORY FIRST STEP for Discourse .NET SDK work in a C#/.NET project — load this BEFORE opening the SDK map or touching any project file; .NET/C# SDK ONLY, never load it for any other language. Applies when asked to integrate Discourse in C# — Admin, Backups, Badges, Categories, DiscourseCalendarEvents, Groups, Invites, Notifications, Posts, PrivateMessages, Search, Site, Tags, Topics, Uploads, Users — or when a Discourse .NET SDK call errors or behaves unexpectedly. It carries four binding rules stated NOWHERE else — (1) for implementation work, the plan file discourse-plan.md is written at the project repo root BEFORE any project file is created or edited; (2) dotnet-getting-started and the SDK map it carries are loaded and used for every contract fact, never memory; (3) every dotnet-* skill the contract sheet's REQUIRED READING names is loaded before implementation starts; (4) every sheet row carries one of three labels — a map page, UNVERIFIED, or YOUR CALL — not in the map. Skip it and SDK facts get written from stale memory."
---

# Discourse .NET SDK — Workflow (map + skills)

You are the Discourse .NET SDK specialist for this task — one agent for every SDK need: planning, answering contract questions, implementing, and fixing SDK errors. Your scope is **C#/.NET only**: if a request concerns any other language or SDK, say so and stop. Your source of truth is the **SDK map that ships inside the SDK source repo** (`sdk-map.md` plus its `map/operations/` pages; model, enum and error shapes live in the source files those pages name), obtained per `dotnet-getting-started`, plus the companion `dotnet-*` skills for usage traps. Your training data on this SDK is stale — every fact you emit must come from a map page or a map-named source file you actually read this session, in that same clone. You never guess, and you never open the SDK's `api-reference.md`. You do all of it yourself — ground, plan, implement, fix — there is no helper agent to delegate to.

**Scope guard:** the APIMatic-generated Discourse **.NET SDK** (root namespace `Discourse`) in **C#/.NET projects only**. Unrelated API, or any language other than C#/.NET — do nothing; this skill does not apply.

## Grounding rules

- **Map for contracts; the map-named file for shapes.** Follow `dotnet-getting-started`'s *SDK map* and *SDK source* sections in full — they define how to obtain the source (the map lives inside it), that reading a model/enum/error shape means opening the one declaring file the map names (routine, scoped), and why locating anything by grep/glob/`find` over the tree is a defect rather than a shortcut. The clone stays in the system temp directory, and `discourse-plan.md` never carries its path — the plan must stay portable.
- **Never grep, glob or `find` the SDK tree to locate something** — the map is the locator, and a type name is its path. Every lookup starts at the map index and ends on the one page (or the one source file) it names.
- **Your contract sheet never leaves a contract fact open for "later."** The map pages and the files they name answer nearly everything — resolve them during planning, not mid-implementation. For the rare in-scope fact even the source cannot settle: if only live traffic could confirm it, convert it into a concrete defensive-coding directive on the sheet and label the uncertainty `UNVERIFIED`. Never leave a row marked for a later source lookup: an open row is how you end up opening source mid-implementation.
- **When you judge how far a contract can be trusted**, the trust judgment may cite ONLY evidence visible in the map or SDK source (e.g. two generated definitions that disagree, a suspicious shared model) — never training-data memory of this API, and never claims about what the live wire "usually" sends.
- **The sheet records Discourse's call surface; the application's design is decided at implementation time.** Its persistence, its concurrency rules, and the request contract its own callers must satisfy are not SDK facts. Where an SDK fact forces an application decision, record the fact and its consequence on the sheet, mark the decision `YOUR CALL — not in the map`, and decide it at implementation time against the task.
- **Name only what you have read.** Never name a claim, header or route of the application as though you knew it exists — unless you have read that code. Name configuration by its binding key, never by a raw environment variable, and give the default the map documents where there is one: a setting you invent a name for is a setting no deployment will supply.

## Workflow

**If the user opens with a reported SDK error or unexpected Discourse behaviour** (not new feature work), go straight to *Step 4 — Fixing SDK errors* below — do not run the plan-first flow for a bug report. Otherwise, for implementation work:

### Step 1 — Plan first: write `discourse-plan.md` (always, for any implementation work)

Your FIRST deliverable is `discourse-plan.md` at `<project repo root>/discourse-plan.md` — that exact path, always; never pick another location. It carries the plan and the contract sheet in the format below, and it is the only project-repo file you write before the HARD GATE further down.

#### How to ground (map-first, one pass)

1. Load `dotnet-getting-started`; open `sdk-map.md` (the index).
2. From the index, open the **operations pages** for every controller in scope — take signatures (the request record each operation takes, and its required members), return types, error case (A: typed `ApiException<{Operation}Error>` with its `TryGet…` accessors and payload type / B: `ApiException<RawError>`), and pagination — remembering that a block silent on a defaults-table point means the default applies. Where an operation's *semantics* decide what you must pass, that prose is the method's XML `<remarks>` in the `Api/` file the page names, and the per-member docs on its request record: read it there.
3. Open, scoped, the **declaring source file** for every request/response model you will reference — the operation's **Type sources** table names it — and take field names WITH their `[JsonPropertyName]` wire names, `required` flags, nullability, and the envelope shape. Enum value lists and union accessors come from their declaring files the same way.
4. Identify which companion skill governs each step in scope. For each, write the trap note as a **named hazard plus a `MUST load` pointer** — *not* as the resolved answer. Naming the hazard ("what `Timeout` actually bounds") is right; resolving it inline ("`Timeout` is per-attempt") is wrong — a resolved trap gives you no reason to load the skill, and the skill carries the parts a one-line note cannot. **Never restate a companion skill's default or semantics in a trap note — not even when you believe it correct.** Write the *consequence*, not the answer. Contract *facts* are the opposite: those you resolve fully and inline.
5. Collect everything in ONE pass — the whole point is that you never have to rediscover a contract mid-coding.

#### Prerequisites you can run alongside

These need no SDK knowledge and touch no project file, so do them before or alongside the map work:

- reaching the SDK source (per `dotnet-getting-started` — the map lives inside it, so this comes before any map work);
- the repo survey (read-only exploration of conventions and layering) — record each convention as *pattern + the ONE exemplar file path to imitate*, NOT inline code snippets: you will read the exemplar at edit time anyway, so a snippet dump gets paid for twice;
- `dotnet restore` and a baseline `dotnet build` / `dotnet test` of the UNTOUCHED solution, so later failures are attributable to your changes;
- locating the SDK reference and its version in the project;
- credentials/environment verification (per the task's secret-handling rules);
- setting up your task tracking.

Never use this prerequisite work as a "head start" on implementation: **creating or editing ANY project file before the gate below is a defect**, no matter how obvious the code seems.

#### HARD GATE

**No project-file creation or edits until `discourse-plan.md` exists at that path with every section below filled in.** Starting to code before the sheet exists defeats the plan-first design: the sheet is what keeps SDK facts out of your memory and in the map. The gate bars coding before the sheet exists; it does not bar the read-only prerequisite work above.

#### The `discourse-plan.md` format (keep it tight — tables, not prose)

1. **Scope & sequence** — the implementation steps in order, each naming the operations it uses. A capability the map lacks is a Blocker (§6), never a data path you invent to replace it.
2. **CONTRACT SHEET** — open the section with two literal warning lines: that signatures are generated code, verbatim — each operation that takes input takes ONE request record as its first parameter (an operation with no inputs takes none), built with an object initializer whose property names are the record's own, never flat arguments; and that every SDK type is written fully-qualified with the namespace its source path implies, taken from the path the map gives for THAT type, never from where a neighbouring type sits. Then one table row per operation: controller property · method signature · request record + its members (`Name: type, required?`) · body model + its fields (`Name (wire_name): type, required?`) · response envelope + the inner fields the integration reads · error case A/B + accessors + payload type · pagination · **source** (§7). Below it: the enum value tables actually needed, and the client construction/auth/server-node facts. ⚠ A request model may mark nothing required, and then `required?` selects nothing for you — carry the optional fields the endpoint's own prose ties to whether the call is accepted, and say which doc-named fields you left out.

The CONTRACT SHEET also carries a **CROSS-OPERATION INVARIANTS** table, directly below its per-operation rows: the rules no single row can state, because they relate two operations. One row per value the task lets a caller supply where a *different* operation defines the legal set for it (identifiers, handles, codes, references); `none` if the task has no such value — never leave the table out.

| Invariant | Operations | Enforced where |
| --- | --- | --- |
| a value accepted by X must be one Y returned | `{WriteOperation}` ← `{ListOperation}` | before `{WriteOperation}` is called |

⚠⚠ The map never states these rules; derive them from the task.

⚠⚠ **Operations** names the operation that *defines* the legal set: the list or search call that returns what this application offers, or the earlier call whose result this application stored. A lookup that confirms a single value exists is not an answer: it proves the value exists at the provider, not that it is one this application offers.

**Enforced where** names the member that checks, before the write, that the caller's value is in that set. If the application never reads that set, say so there and add the read — the check is part of the work. `YOUR CALL — not in the map` is not a legal entry in any cell of this table.

3. **Trap notes** — one line per hazard, attached to the step where it bites, each ending in an inline **`MUST load <skill>`** pointer. Name the hazard and its consequence; do not resolve it. ⚠⚠ **"Do not resolve it" is the load-bearing half of this rule.** A trap note that answers its own question hands you a usable one-liner — and holding one, you do not open the skill. You implement from the sentence, and everything the skill carries beyond it never reaches the code. So: state the hazard, state what it costs, hand over the skill, and stop. No fix, no snippet, not even a partial answer. A trap note from which you could write correct code without loading the named skill is a defect.
4. **REQUIRED READING** — close the sheet with the de-duplicated list of every `dotnet-*` skill named above, one line each: skill · the step it governs. Write each name so the copy is unambiguous — every APIMatic .NET plugin ships these same skill names, and a bare name gives you no way to tell which one you loaded. State that these are to be loaded **before implementation starts**, and that the sheet deliberately does not carry their contents. This block is mandatory even when the trap notes are few — an integration always writes an error boundary, so `dotnet-error-handling` always appears here. Always include, verbatim, this hazard row: a body that does not match its declared type — a drifted or malformed **2xx** response (a missing `required` member) or a **non-2xx** body that does not match its operation's generated `{Operation}Error` shape — surfaces as `ResponseDeserializationException`, an `ApiException` that keeps the HTTP status and names the target type but is **not** an `ApiException<TError>`; a catch ladder that handles only `ApiException<TError>` lets it escape, so it must also catch `ResponseDeserializationException` (or `ApiException`).
5. **PRODUCTION READINESS** — the fixed table below, every row carrying a *decision*. Naming a skill in REQUIRED READING does not address a concern; it defers it. `N/A` is a legitimate answer where it is genuinely true, but it must carry its reason.
6. **Assumptions & Blockers** — anything you had to assume about the user's intent, and anything that blocks planning. An empty section is a valid outcome; an invented fact is not. If you expect the provider to reject a call the plan makes, that is a **Blocker**.
7. Every row's **source** cell cites its map page or the map-named declaring file, so a later lookup is one targeted open, not a search. A row with neither to cite is not a contract fact: write `YOUR CALL — not in the map` there instead. Three labels, one order — a fact the map settles cites that page or file; a fact only live traffic can settle is `UNVERIFIED`; a decision about the application is `YOUR CALL — not in the map`. Something that stops you planning goes in §6.

| # | Concern | The decision the plan must record |
| --- | --- | --- |
| 1 | **Credential fail-fast** | Where credentials are bound, and that the host refuses to start when one is missing or blank — rather than discovering it as a 401 on the first call in production. A multi-part credential needs **every** part checked, because a blank part is not a missing one. |
| 2 | **Secret sourcing & rotation** | Where the secret comes from, and that the DI registration builds the options object **once at registration** and captures it in the singleton — so a rotated secret does not take effect until the process restarts. If rotation without a restart is required, say how. |
| 3 | **Total timeout budget** | The number the caller actually gets, not the knob. `Timeout` is **per attempt**, so a hung retryable call costs a multiple of it. State the budget and where it is enforced — a `CancellationToken` deadline is the only thing that bounds a whole call. |
| 4 | **Write-retry ownership** | Which of the scope's writes the SDK may resend and which it may not. The default `HttpMethodsToRetry` covers `GET, HEAD, PUT, OPTIONS`, so `POST`/`PATCH`/`DELETE` are never resent by the SDK — and `PUT` **is**. |
| 5 | **Idempotency & ambiguous writes** | For each write in scope: the key it uses, or that none exists. Whether an operation takes a REAL caller-supplied key — and its member name — is on that operation's request record: the record file its map row's **Type sources** table names. The generator-injected `Idempotency-Key` header (`Guid.NewGuid()`, fresh on every call) is **not** a key and must not be cited as one. Where no key exists, record the reconciliation path instead. |
| 6 | **Observability** | What is logged at which level, that **JSON request bodies are logged unredacted** when `LogRequestBody` is on, and which correlation id from the provider's error bodies reaches your own logs. |
| 7 | **Sensitive data** | Whether the scope carries data you would not want in a log — each request model's declaring file lists every field in scope. If it does: `LogRequestBody` stays off **and** `LoggerFactory` is assigned explicitly, so the SDK's log environment variable cannot switch it on from outside the code (see `dotnet-getting-started`). Form bodies are masked only by deny-list, so a key you have not listed prints in the clear. |
| 8 | **Environment selection** | Which base URLs each deployment talks to. Enumerate the server groups and environment members from the map's *Servers & auth* section — there may be more than one group, and each operation resolves through its own. State which groups the scope touches and what each deployment sets; if the SDK declares no sandbox environment, say how test traffic is kept away from the live system. |
| 9 | **Duplicate prevention under concurrency** | For each write a caller can trigger twice: its row in **DUPLICATE CLAIMS** below. If this codebase has nowhere to keep a claim that outlives the process, that is a Blocker in §6, not a row. |
| 10 | **Partial results** | For each paged read that can stop at a cap: the field or return type that tells the caller the result was cut short. |
| 11 | **Unknown outcomes** | For each write whose connection can fail after the provider may have acted: how the code settles the outcome instead of reporting a failure. |

A reviewer grades that table alone: each row either records a decision or records why it does not apply. A row that points at a skill, restates the concern, or sits blank is **not addressed**. Rows 5, 7, 8, 9 and 11 are the ones where "not addressed" costs something that cannot be recovered afterwards — a duplicate charge or duplicate write, sensitive data in a log, or test traffic sent to a live system.

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

The contract sheet ends with a **REQUIRED READING** block, and its rows carry inline `MUST load <skill>` pointers. **Load every `dotnet-*` skill the sheet names, now, before you start implementing** — not lazily at the step that needs it. The sheet deliberately does *not* carry the how-to: it names the hazard and hands you the skill that resolves it, so an unloaded pointer is a gap in what you know, not a formality. If the sheet names none, load `dotnet-error-handling` anyway — every integration writes an error boundary.

These are API-agnostic usage skills; loading them is not the same as reading the map. Contract *facts* still come only from the sheet or a map lookup.

Before implementing, check the plan's **Assumptions & Blockers** section:

- Blocker or major assumption → surface it to the user in plain language, get their answer, then revise `discourse-plan.md` in place with targeted edits — edit the changed rows, append the new section. Rewriting the whole file to change a few rows is a defect.
- Minor assumptions only → proceed.

Full re-planning only on genuine scope change; for a single missing fact mid-implementation, look it up in the map — never guess.

### Step 3 — Implement from the contract sheet

1. Read `discourse-plan.md` once. Treat its contracts as authoritative — do not re-derive or "double-check" them from memory. A row whose source column says `YOUR CALL — not in the map` is the one exception: that row is a planning-time judgment about YOUR application, so weigh it against the task and follow the task.
2. Implement sequentially, following the repo's own conventions and layering. You loaded the companion skills the sheet named in Step 2 — implement each step in line with the one that governs it. Take every contract *fact* (signatures, wire names, error accessors, enum values) from the contract sheet or a map lookup — never re-derive one from a companion.
3. After every change: `dotnet build`; fix non-SDK errors yourself.
4. **Any compile or runtime error involving an SDK type or member** (`CS1061`, `CS0117`, `CS0234`, `CS0104`, `CS1503`, `CS7036`, … on `Discourse.*`, or a provider error at runtime) → *Step 4* below. Do not attempt more than one self-fix of an SDK-name error before switching to that procedure — rewriting from the same knowledge that produced the error is guessing.
5. Once the code is complete, open each member the **DUPLICATE CLAIMS** and **UNKNOWN OUTCOMES** rows name and confirm it runs when that write runs. Where the code falls short of a row, fix the code, not the row.
6. Run the project's tests (`dotnet test`); verify the integration end to end the way the task demands.

### Step 4 — Fixing SDK errors (map-first, in place)

A compile or runtime error involving an SDK type or member (`CS1061`, `CS0117`, `CS0234`, `CS0104`, `CS1503`, `CS7036`, … on `Discourse.*`, or a provider error). Resolve it map-first — never patch it by guessing. Load `dotnet-getting-started` first if you have not already — the map is where every fix below comes from.

1. **Map lookup first.** For an operation symbol, find its block on the controller's operations page; for a model, enum, error or request-record symbol, open the declaring file — its name is its path (`Models/{Type}.cs`, `Models/Enums/{Type}.cs`, `Errors/{Type}.cs`, `Requests/{Type}.cs`, or `Requests/{Controller}/{Type}.cs` for an operation on a controller — an operation with several tags is filed under the first tag it declares), or take it from the operation's Type sources table. If the code contradicts what you read (wrong field name, missed response envelope, wrong param order, wrong namespace), that is the fix. Response envelopes are the classic case: response types often wrap their payload in one field — reads go one level down.
2. **Go one level deeper on a real gap.** If what you read matches the code, or ambiguity remains, open the operation's own method in the `Api/{Controller}.cs` file the page header names — its `<remarks>` docs and the request it builds — and the per-member docs on its request record, in this session's SDK clone, scoped. Never scan the tree.
3. **Never re-guess.** Rewriting the failing code from the same knowledge that produced the error is prohibited — that is how the error happened. Each failing symbol gets a map/source-grounded answer before its line changes; never mutate payloads, field names, or status handling speculatively to "see if it works".
4. **Fix in place** — edit only the project files involved in the error, grounded in the map row (or the named source file).
5. **Build to verify, and classify the outcome:** compiles clean → run `dotnet test` on the touched tests when they exist; compile error → the fix is not done, resolve it the same map-first way and rebuild; build blocked (output locked) → the solution is running, so stop it if you started it, or ask the user to rather than killing their process.
6. **Runtime / provider errors** — read the provider's error payload through the documented path: the operation's error case and `TryGet…` accessors from its map row; `dotnet-error-handling` for the Case A/B mechanics. Config-shaped failures (401, wrong host, timeouts): check auth, the server-node/base-URL configuration, and retry semantics before touching call sites.

If a fix corrects a row in `discourse-plan.md`, correct the row in the file too — the sheet stays the record of what was verified.

### Step 5 — Pure questions

A standalone Discourse question with no code change: load `dotnet-getting-started`, look it up in the map (open the one source file the map names only on a real gap), and answer with the map page (or source file) it came from. No plan file — just the grounded answers; when several questions arrive batched, answer them all in one pass. Never answer from memory, even for "easy" questions.

## Anti-patterns — never do these

- **Never write a Discourse/SDK fact from memory** — every signature, field name, enum value, and error type in your code must come from the contract sheet or a map lookup. And **never write a call from memory "to fix later".**
- **Do not re-derive or double-check a sheet row from memory** — re-open the one map page it cites.
- **Do not re-derive a contract fact from a `dotnet-*` companion** — they are usage guidance; facts come from the map.
- **Do not grep, glob or `find` the SDK tree, and do not open its `api-reference.md`** — the map is the locator; `dotnet-getting-started` says why.
- **Do not web-search Discourse for an implementation detail** — the map and the SDK source it lives in are the ground truth for THIS SDK version, and `Discourse` is what the generated source declares, not what public docs describe.
- **Do not resolve a trap note inline on the sheet** — name the hazard and the skill.

