---
name: "dotnet-getting-started"
description: "Twilio .NET SDK identity and lookup layer (.NET/C# only) you load directly — install, root namespace, environments, auth pattern, and the SDK map (shipped inside the SDK source repo): every operation signature and error case by lookup, plus the source file declaring each model, enum and error type. Load it for every contract fact, never memory; dotnet-integrate-twilio is the workflow that uses it."
---

# Getting started with the Twilio .NET SDK

> **Who this skill is for.** This is the **map layer**: load it to ground every Twilio SDK fact. `dotnet-integrate-twilio` is the workflow that drives it — you collect the contracts for the work in scope into `twilio-plan.md`, implement from that sheet, and come back to the one map page a row cites for any fact the sheet is missing. Every contract fact comes from here, never from memory.

This is the **SDK-specific** entry point. For general patterns that apply to any APIMatic-generated .NET SDK (auth, calling endpoints, models, error handling, retries, testing), see the companion API-agnostic skills: `dotnet-client-initialization`, `dotnet-authentication`, `dotnet-calling-endpoints`, `dotnet-models`, `dotnet-error-handling`, `dotnet-configuration-resilience`, `dotnet-testing`.

**The SDK map and these companion skills are complementary — load both.** The map (generated from the SDK source, which remains the ground truth) is authoritative for the SDK's *surface* (signatures, model shapes, enums, which error type an operation throws); the companion skills are the *usage layer* on top — the best-practice way to call each piece and the gotchas a signature cannot show. Reading the map or source does not remove the need to load the skill for that step, so at each step below, load the companion *and* confirm names against the map.

> **Ground every signature, model, enum, and error type in the SDK map** (`sdk-map.md` + `map/operations/`, inside the SDK source repo — see the *SDK source* section for obtaining it). The map is **method-first**: operation signatures, error cases with their `TryGet…` accessors, pagination and server/auth wiring are on its pages by lookup — and for every type an operation names, the map names the **file that declares it**, so a shape question (fields, wire names, enum values, union accessors) is one targeted file open, never a search. When a map-sourced name fails to compile, re-read the file its row names; **never fill the gap from memory.** Do **not** decompile or reflect over the installed reference, do **not** fetch GitHub files ad hoc, and do **not** grep or run other expensive searches over the clone.

## SDK identity

|  |  |
| --- | --- |
| API | Twilio |
| NuGet package | *not published to NuGet — see *Install* below* |
| Source repo | https://github.com/context-plugins/twilio-csharp-sdk (branch `main` — the ref this map documents) |
| Root namespace | `Twilio` (the `using` namespace) |
| Client class | `TwilioClient` |
| Options class | `TwilioClientOptions` |
| Auth | HTTP **Basic** — set `AccountSidAuthToken` |
| Environments | `ServerEnvironment.Production` *(default)* → `Default` `https://api.twilio.com`, `Default1` `https://messaging.twilio.com`, `Default2` `https://content.twilio.com`, `Default3` `https://verify.twilio.com`, `Default4` `https://lookups.twilio.com`, `Default5` `https://numbers.twilio.com`, `Default6` `https://video.twilio.com`, `Default7` `https://conversations.twilio.com`, `Default8` `https://taskrouter.twilio.com`, `Default9` `https://trusthub.twilio.com`, `Default10` `https://proxy.twilio.com`, `Default11` `https://studio.twilio.com`, `Default12` `https://sync.twilio.com`, `Default13` `https://flex-api.twilio.com`, `Default14` `https://insights.twilio.com` |
| Log environment variable | `TWILIOCLIENT_LOG` |
| Target framework | `netstandard2.0` |

The table above is **orientation, not a copy-paste recipe** — it gives you the names and facts (install, namespaces, the auth *pattern*, the environments), while the actual integration code comes from the companion skills. Load every one the contract sheet's REQUIRED READING names before you start implementing (`dotnet-integrate-twilio` makes that binding); the **Integration workflow** below says which governs which step.

## Namespaces (using-directives)

The SDK splits its public types across **separate child namespaces**. C# does **not** import child namespaces transitively, so `using Twilio.Models;` alone does **not** make enums, union types, or error types visible — you get `CS0103`/`CS0246` ("name/type does not exist") on build. Add a separate `using` for each kind of type you reference:

| Type | Namespace |
| --- | --- |
| `TwilioClient` | `Twilio` |
| `TwilioClientOptions` | `Twilio` |
| `ServerEnvironment` | `Twilio.Servers` |

Models, enums, union types and the generated error types each sit in their own child namespace. The map's **Namespaces by content type** table maps each source directory to its namespace, so read the namespace off the path the map gives for the type; anything left ambiguous is settled by the `namespace` declaration at the top of the type's own file.

## Install — from source

This SDK is **not published to a package feed**, so there is no `dotnet add package` for it. Build it from its repository — <https://github.com/context-plugins/twilio-csharp-sdk>, branch `main` — and reference the resulting assembly, then write the `using` directives from the table above. That build reference is a separate thing from the read-only reference clone the *SDK source* section describes, which carries the map and is never part of the build.

## SDK map — look up first, open the named file second, never grep

The SDK ships a generated map **inside its source repo**, at the SDK root — the map and the SDK regenerate together in one repo, so they cannot drift apart. The map is **method-first**: operation contracts are on its pages; model, enum and error **shapes are deliberately not duplicated there** — the map names the file declaring each type, and you read the shape in that file. Obtain the source first (next section); every path below is relative to the SDK root in the clone:

- **`sdk-map.md`** — the index and the read-once pages: SDK identity, client construction and the full options surface, the error-handling model (Case A typed / Case B raw), the **defaults table** for operations, the model/enum/error directory conventions, *Namespaces by content type*, and *Servers & auth*.
- **`map/operations/`** — one page per controller, one block per operation: the exact C# signature with must-pass-explicitly params, the return type, the error case (A: typed `{Operation}Error` with its `TryGet…` accessors and their statuses / B: `RawError`), pagination and server-group bullets **only where they differ from the defaults**, and a **Type sources** table naming the file that declares every type the operation mentions.
- **Shapes live in the source, one type per file.** Every file under `Models/` and `Errors/` declares exactly one public type named after the file, so a type name *is* its path: take it from the operation's Type sources table (or the kind's directory — records `Models/`, enums `Models/Enums/`, typed errors `Errors/`) and read the fields, `required` flags, `[JsonPropertyName]` wire names and enum values from that one file. The compiler is the backstop: a wrong name fails to build.

**This map is how you traverse the SDK.** Do **not** grep, glob, `find`, or otherwise scan the clone to locate an operation, model, enum, union, or error type — the map (and the name-is-path convention) is the locator. Instead:

1. Open `sdk-map.md` and follow its controller table to the operations pages in scope; read every contract fact (signature, error accessors, pagination) by lookup.
2. **Silence means the default.** The index's defaults table states what holds for every operation (throw-only, no pagination, the default server group, the `ct` parameter name); an operation's block states only what differs. A block silent on pagination has none — take the default and move on rather than opening the source to confirm it.
3. For a **shape** (model fields, enum values, union accessors, a typed error's payload), open the one declaring file the map names — that is the normal flow here, not a fallback — and read it scoped.
4. The **HTTP verb/route and the endpoint's behavioural prose** live on the operation method itself — the XML `<remarks>` and `<param>` docs in the `Api/{Controller}.cs` file the page header names. Read them there when wire-level detail or call-acceptance semantics matter; never reconstruct a route from memory.

Keep lookups cheap — the rules that keep a session's context small:

- Collect the contracts for **every** in-scope operation in **one** pass — signatures and error accessors from the map pages, then required fields with wire names and enum values from the declaring files those pages name — into the **contract sheet** in `twilio-plan.md`, then implement from the sheet. Do not re-open a map page or source file per field, and never re-look-up a fact the sheet already carries.
- When you do open a source file, read it **scoped**: with an offset/limit, or a search for the one symbol — never dump a whole file into the conversation.
- Never open the SDK's `api-reference.md` — the map supersedes it.

## SDK source — get it first; the map lives inside it

The SDK source is where the map lives, so **getting it is the first step of SDK work this session, not a fallback**: one shallow clone at the recorded ref, into the **system temp directory** (`<temp>/twilio-sdk-src/`), reused for the whole session. The clone is a read-only reference, never in the project repo, and **not** a build dependency. Opening the **one declaring file** a map page names is the normal flow here — that is where model, enum and error shapes live. What stays off-limits is *locating* anything by scanning: every file you open is one the map named, opened scoped, never found by grep.

**Clone once, up front**, into a fresh timestamped folder under `<temp>/twilio-sdk-src/`, and reuse that folder for the rest of your session:

```bash
# Linux/macOS:
dir="${TMPDIR:-/tmp}/twilio-sdk-src/$(date +%Y%m%d-%H%M%S)"
git clone --filter=blob:none --branch main https://github.com/context-plugins/twilio-csharp-sdk "$dir"
# Reuse "$dir" for the rest of your session (it is your clone path).
```

```powershell
# Windows (PowerShell):
$dir = "$env:TEMP\twilio-sdk-src\$(Get-Date -Format yyyyMMdd-HHmmss)"
git clone --filter=blob:none --branch main https://github.com/context-plugins/twilio-csharp-sdk $dir
# Reuse $dir for the rest of your session (it is your clone path).
```

A branch is a moving target, not a pin: `main` can be regenerated after this plugin ships, and then the map you read describes code the package no longer matches. If a name from the map fails to compile, trust the compiler, re-read the source file the map's row names, and report the drift; never patch around it from memory.

The clone lives in `<temp>/twilio-sdk-src/`, **never** in the project repo, and its path never goes into `twilio-plan.md` — the plan must stay portable, and the clone is a session-local reference, not part of the project.

Then confirm the SDK shape **only** from that local clone — not by either of these:

- **Do not decompile or run reflection over the built assembly.** A compiled assembly drops what the source carries and the other skills rely on: the XML `<exception>`/parameter doc-comments, the exact parameter names and order, and each method's internal request-builder list.
- **Do not fetch GitHub files one at a time** as your way in — `…/blob/…` pages return HTML (not source) and guessed paths fail, which is exactly how ad-hoc fetching breaks. Clone once and read locally instead. Only if you truly cannot clone (`git` is unavailable) fetch a **raw** URL, derived from the source repo above — never a `…/blob/…` page.

Layout — where the SDK map's file references resolve (open these directly; do not scan for them):

- `Api/` — one file per controller/group; **this is where the operation methods live** (the HTTP verb and route, and the XML `<remarks>`/`<param>` docs carrying the endpoint's behavioural prose). The map's per-controller pages name the exact file.
- `Models/` (+ `Models/Enums/`) — request/response records, unions and enums; one public type per file, named after the file.
- `Errors/` — per-operation `{Operation}Error` types (only Case-A operations have one; the map's rows say which case each operation is).
- `Core/` — HTTP infrastructure (`SdkException<T>`, `RawError`, auth, retries, `SdkHook`).
- `Servers/`, `TwilioClient.cs`, `ServiceCollectionExtensions.cs` — environments, the client, DI.

**Leave the clone in place — do not delete it.** It is a read-only reference with nothing of yours in it, and keeping it is what lets every later step in this session reuse it instead of cloning again. The OS reaps the temp directory on its own; a future session simply makes its own timestamped clone.

## Idempotency — the real keys are on the map; the injected header is not one

The generator injects an `Idempotency-Key: Guid.NewGuid()` header on **every non-GET operation** — fresh on every call, invisible to you, and **not** an idempotency key in any meaningful sense: a value that changes per call deduplicates nothing, and Twilio may not document reading that header at all. `dotnet-configuration-resilience` explains why a visible header like this is worse than an absent one.

Whether an operation takes a **real**, caller-supplied key is an API fact, visible on that operation's map row: look for a key-shaped parameter (an idempotency key, a request id) in the signature. Its semantics — retention windows, when it is mandatory — are provider prose, in the method's XML `<param>`/`<remarks>` docs in the `Api/` file the page names. Some APIs expose **`If-Match` optimistic concurrency** instead — a different guarantee (reject my write if the resource changed) solving a different problem (lost updates, not duplicates); those parameters show in the signatures too. For every write with no key, the answer is reconciliation — `dotnet-configuration-resilience` — not hope.

## Sensitive data — check the request models before you log anything

Whether this API's **request** models carry fields you must never log — card or bank numbers, personal data, message content — is a shape question: each request model's declaring file (the map's Type sources table names it) lists every field with its `[JsonPropertyName]` wire name. If the scope touches such a field, three generator facts decide your logging posture (all in `dotnet-configuration-resilience`): JSON request bodies are logged **verbatim** when `LogRequestBody` is on, with no redaction; form bodies are masked only by deny-list; and leaving `options.Logging.LoggerFactory` unset arms the `TWILIOCLIENT_LOG` environment variable, whose `trace` level forces body logging on with no code change and no deploy. So on any build that can carry such a field: `LogRequestBody` stays off, `LoggerFactory` is set explicitly in production, and your own diagnostics never echo a request body on those paths.

Responses are often safer — many APIs return masked variants of what requests carry raw — but that too is a model-shape fact: check the response model's file before assuming.

## Response metadata — status and headers are not on the return value

On a success the SDK returns only the deserialized body: the HTTP status and headers of a successful call are **not on the return value**, and unless the map's error-handling model notes no-throw `{Operation}Result` siblings for this SDK, there is no non-throwing variant to get them from. On an error, what is reachable depends on the operation's error case — its map row: a Case B `RawError` carries `StatusCode`; a typed Case A body may or may not (see `dotnet-error-handling`).

**Hooks are the SDK's own seam for transport metadata.** `options.Hooks` (client-wide) and `requestOptions.Hooks` (per call, appended after the client-wide list) take `SdkHook` instances; `SdkHook.OnResponse((response, context) => …)` sees every raw `HttpResponseMessage` — status, `Retry-After`, rate-limit budget headers, a request-id echo for correlation — and `SdkHook.OnRequest` the outgoing request. A hook runs **inside the retry pipeline, once per attempt**, so "the" value is the last attempt's; a per-call hook can close over a local, which puts the observed value in scope in the same method's `catch`. `RawClient.ExecuteResult` does return an `ApiResult`, but `RawClient` is `internal sealed`, so hooks — not reflection, and not a `DelegatingHandler` you would otherwise need — are the supported way in.

## The `dotnet-*` skill names are not unique across plugins

Every APIMatic .NET plugin ships this same set of `dotnet-*` skill names. Copies from the **same generator version** are byte-identical, so between those plugins a collision is harmless. A copy from a **different generator version** is not — it describes a different runtime, and an older plugin's retry eligibility, request-options surface and unknown-field handling all differ from this SDK's. **Load the copy that ships with THIS plugin**: write plugin-qualified names where your harness supports them, and where it does not, confirm the copy you loaded describes the runtime this SDK actually ships — `RequestOptions` carrying both a log level and `Hooks`, and a `Core/Hooks/SdkHook.cs` in the source. The `X-APIMatic-Gen-Version` wire header does not distinguish these surfaces, so it is not the check.

## Integration workflow — load the companion skill at each step

You loaded every companion the sheet named before starting (per `dotnet-integrate-twilio`); before you write the code for each step, re-read the one that governs it — even if you have already read the relevant source. Each step calls out the trap the signature hides (in *parens*). A typical integration reaches them in this order:

1. **Client & DI setup** — load **dotnet-client-initialization** before you write `new TwilioClient(...)`, build its options, or DI-register it. (*The signature will not tell you:* the `HttpClient`/handler pipeline must be long-lived and reused via `IHttpClientFactory`, not rebuilt per request; the SDK client wrapper over it may be transient.)
2. **Authentication** — load **dotnet-authentication** before you set credentials. The scheme(s) this SDK accepts are the credentials properties on `TwilioClientOptions` — the identity table above names them. (*The signature will not tell you:* set credentials before constructing the client or in the DI callback, and load secrets from configuration rather than hardcoding.)
3. **Calling an endpoint / building a request body** — load **dotnet-calling-endpoints** before the first `client.{ApiGroup}.{Operation}(...)` call. (*The signature will not tell you:* call list/search ops with named arguments — many optional params have no C# default and mis-bind in a positional call; and whether a write takes a real idempotency key is on its map row — the injected `Idempotency-Key` header is not one, see *Idempotency* above.)
4. **Models** — load **dotnet-models** the moment a request/response field is not a plain string or number. (*The signature will not tell you:* unions are built with factory methods and read via `TryGet…` (no `new`), enums are `StringEnum<T>` not C# enums, and unknown response fields are kept — every model carries an `AdditionalProperties` extension-data property, so they survive deserialization instead of vanishing.)
5. **Error handling** — load **dotnet-error-handling** before you write any `try/catch`. (*The signature will not tell you:* an operation is either Case B (`SdkException<RawError>`, no typed accessors) or Case A (a typed `{Operation}Error`) — how the API mixes them is its own fact, so confirm each operation's case in its map row; and `TryGetRawError` is not a catch-all on the typed errors. Whether no-throw `…Result` variants exist at all is stated once, in the map's defaults table; never assume one does.)
6. **Configuration & resilience** — load **dotnet-configuration-resilience** when you tune retries, timeouts, the base URL, pagination, or logging. (*The signature will not tell you:* `HttpMethodsToRetry` gates **every** retry trigger, so a `POST` is never resent by default — but a `GET` that hangs costs far more than the `Timeout` value suggests, because the per-attempt timeout is itself retried. `Timeout` is per-attempt not total, `RetryOptions.Disabled()` turns retries off, and there **is** a built-in logger on `options.Logging` — whose `LogRequestBody` does not redact JSON.)
7. **Testing** — load **dotnet-testing** before you stub the SDK. (*The signature will not tell you:* the `HttpClient` constructor argument is the test seam; match the project's existing framework and assertion style.)

