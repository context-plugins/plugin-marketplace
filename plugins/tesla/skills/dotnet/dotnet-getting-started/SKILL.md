---
name: "dotnet-getting-started"
description: "Load for any Tesla Fleet Management API .NET SDK contract fact in C#, instead of memory: install, namespaces, environments, auth, and the SDK map giving every operation signature and error case and the file declaring each model, enum and error type. .NET/C# only; dotnet-integrate-tesla-fleet-management-api is the workflow that drives it."
---

# Getting started with the Tesla Fleet Management API .NET SDK

> **Map layer** for `dotnet-integrate-tesla-fleet-management-api`: the contracts in scope go into `tesla-fleet-management-api-plan.md`; come back to the map page a row cites for any fact the sheet lacks.

Usage companions: `dotnet-client-initialization`, `dotnet-authentication`, `dotnet-calling-endpoints`, `dotnet-models`, `dotnet-error-handling`, `dotnet-configuration-resilience`, `dotnet-testing`. The SDK map is authoritative for the SDK's *surface* (signatures, model shapes, enums, which error type an operation throws); the companions are the *usage layer* — how to call each piece and the gotchas a signature cannot show. Reading the map or source does not replace a step's companion: at each step below, load the companion *and* confirm names against the map.

> **Ground every signature, model, enum, and error type in the SDK map** (`sdk-map.md` + `map/operations/`, inside the SDK source repo — see the *SDK source* section for obtaining it); **never fill a gap from memory.**

## SDK identity

|  |  |
| --- | --- |
| API | Tesla Fleet Management API |
| NuGet package | *not published to NuGet — see *Install* below* |
| Source repo | https://github.com/context-plugins/tesla-csharp-sdk (branch `main` — the ref this map documents) |
| Root namespace | `TeslaFleetManagementApi` (the `using` namespace) |
| Client class | `TeslaFleetManagementApiClient` |
| Options class | `TeslaFleetManagementApiClientOptions` |
| Auth | **Bearer** token — set `BearerAuth`<br>**OAuth 2.0** authorization code — set `ThirdpartytokenAuthorizationCode`<br>**OAuth 2.0** client credentials — set `ThirdpartytokenClientCredentials` |
| Environments | `ServerEnvironment.Production` *(default)*<br>base URL per server group (3 groups): `sdk-map.md` *Servers & auth* |
| Log environment variable | `TESLA_FLEET_MANAGEMENT_API_LOG` |
| Target framework | `netstandard2.0` (C# `LangVersion 14`) |

## Namespaces (using-directives)

The SDK splits its public types across **separate child namespaces**. C# does **not** import child namespaces transitively, so `using TeslaFleetManagementApi.Models;` alone does **not** make enums, union types, or error types visible — you get `CS0103`/`CS0246` ("name/type does not exist") on build. Add a separate `using` for each kind of type you reference:

| Type | Namespace |
| --- | --- |
| `TeslaFleetManagementApiClient` | `TeslaFleetManagementApi` |
| `TeslaFleetManagementApiClientOptions` | `TeslaFleetManagementApi` |
| `ServerEnvironment` | `TeslaFleetManagementApi.Servers` |

Models, enums, union types and the generated error types each sit in their own child namespace. The map's **Namespaces by content type** table maps each source directory to its namespace, so read the namespace off the path the map gives for the type; anything left ambiguous is settled by the `namespace` declaration at the top of the type's own file.

## Install — from source

This SDK is **not published to a package feed**, so there is no `dotnet add package` for it. Build it from its repository — <https://github.com/context-plugins/tesla-csharp-sdk>, branch `main` — and reference the resulting assembly from the project that will call Tesla Fleet Management API, then write the `using` directives from the table above.

> **Build against the assembly built from that repository; never copy the SDK source into your repository** — a copy is a fork the map stops describing. The map is read from the read-only **reference clone** (*SDK source* below), never part of the build.

## SDK map — look up first, open the named file second, never grep

The map sits at the SDK root **inside the SDK source repo** and always matches the source beside it. It is **method-first**: operation contracts are on its pages; for model, enum and error shapes it names the file declaring each type, and you read the shape in that file. Every path below is relative to the SDK root in the clone — obtain it first (next section):

- **`sdk-map.md`** — the index and the read-once pages: SDK identity, client construction and the full options surface, the error-handling model (Case A typed / Case B raw), the **defaults table** for operations, the model/enum/error directory conventions, *Namespaces by content type*, and *Servers & auth*.
- **`map/operations/`** — one page per controller, one block per operation: the exact C# signature with its request record's required members, the return type, the error case (A: typed `{Operation}Error` with its `TryGet…` accessors and their statuses / B: `RawError`), pagination and server-group bullets **only where they differ from the defaults**, and a **Type sources** table naming the file that declares every type the operation mentions.
- **Shapes live in the source, one type per file.** Every file under `src/TeslaFleetManagementApi/Models/`, `src/TeslaFleetManagementApi/Errors/` and `src/TeslaFleetManagementApi/Requests/` declares exactly one public type named after the file, so a type name *is* its path (the directories are under *Layout* below), or take it from the operation's Type sources table. Read the fields, `required` flags, enum values and, on a model, the `[JsonPropertyName]` wire names from that one file, scoped (a request record is never serialized and carries none). The compiler is the backstop: a wrong name fails to build.

**Never grep, glob, `find` or otherwise scan the clone to locate anything** — the map and the name-is-path rule are the locator. Instead:

1. Open `sdk-map.md` and follow its controller table to the operations pages in scope; read every contract fact (signature, error accessors, pagination) by lookup.
2. **Silence means the default.** The index's defaults table states what holds for every operation (throw-only, no pagination, the default server group, inputs as one request record); an operation's block states only what differs. A block silent on pagination has none — take the default and move on rather than opening the source to confirm it.
3. The **HTTP verb/route and the endpoint's behavioural prose** live on the operation method itself — the XML `<remarks>` docs in the `Api/{Controller}.cs` file the page header names; what each input means is in the per-member docs on its request record. Read them there when wire-level detail or call-acceptance semantics matter; never reconstruct a route from memory.

Keep lookups cheap — the rules that keep a session's context small:

- Collect every in-scope contract in **one** pass into the **contract sheet** in `tesla-fleet-management-api-plan.md` (format in `dotnet-integrate-tesla-fleet-management-api`); never re-look-up a fact the sheet already carries.
- When you do open a source file, read it **scoped**: with an offset/limit, or a search for the one symbol — never dump a whole file into the conversation.
- Never open the SDK's `api-reference.md` — the map supersedes it.

## SDK source — get it first; the map lives inside it

The SDK source is where the map lives, so **getting it is the first step of SDK work this session, not a fallback**: one shallow clone at the recorded ref, into the **system temp directory** (`<temp>/tesla-fleet-management-api-sdk-src/`), reused for the whole session. It is a read-only reference, never in the project repo, and **not** a build dependency.

**Clone once, up front**, into a fresh timestamped folder under `<temp>/tesla-fleet-management-api-sdk-src/`, and reuse that folder for the rest of your session:

```bash
# Linux/macOS:
dir="${TMPDIR:-/tmp}/tesla-fleet-management-api-sdk-src/$(date +%Y%m%d-%H%M%S)"
git clone --filter=blob:none --branch main https://github.com/context-plugins/tesla-csharp-sdk "$dir"
# Reuse "$dir" for the rest of your session (it is your clone path).
```

```powershell
# Windows (PowerShell):
$dir = "$env:TEMP\tesla-fleet-management-api-sdk-src\$(Get-Date -Format yyyyMMdd-HHmmss)"
git clone --filter=blob:none --branch main https://github.com/context-plugins/tesla-csharp-sdk $dir
# Reuse $dir for the rest of your session (it is your clone path).
```

The source you read is branch `main`: a branch is a moving target, not a pin — it can move after this plugin ships, and then the map you read describes code the package no longer matches. If a name from the map fails to compile, trust the compiler, re-read the source file the map's row names, and report the mismatch; never patch around it from memory.

The clone stays in the system temp directory, and `tesla-fleet-management-api-plan.md` never carries its path — the plan must stay portable.

Then confirm the SDK shape **only** from the clone — not by either of these:

- **Do not decompile or run reflection over the built assembly.** It drops what the source carries and the other skills rely on: the XML `<exception>`/parameter doc-comments and the exact parameter names and order.
- **Do not fetch SDK files from the web one at a time** as your way in — `…/blob/…` pages return HTML, not source. Read the local clone instead; only if you truly cannot clone (`git` is unavailable), fetch a **raw** URL derived from the source repo above — never a `…/blob/…` page.

Layout — where the SDK map's file references resolve, relative to the SDK root in the clone (open these directly; do not scan for them):

- `src/TeslaFleetManagementApi/Api/` — one file per controller/group; **this is where the operation methods live** (the HTTP verb and route, and the XML `<remarks>` docs carrying the endpoint's behavioural prose). The map's per-controller pages name the exact file.
- `src/TeslaFleetManagementApi/Models/` (+ `src/TeslaFleetManagementApi/Models/Enums/`) — body and response models, unions and enums.
- `src/TeslaFleetManagementApi/Requests/` — one request record per operation that takes input, carrying the per-member docs for each input; a controller's records sit in `src/TeslaFleetManagementApi/Requests/<Controller>/` (an operation on several controllers has one record, in one of their folders — its Type sources table names which).
- `src/TeslaFleetManagementApi/Errors/` — per-operation `{Operation}Error` types (only Case-A operations have one; the map's rows say which case each operation is).
- `src/TeslaFleetManagementApi/Core/` — HTTP infrastructure (the `SdkException` family, `RawError`, auth, retries, `SdkHook`).
- `src/TeslaFleetManagementApi/Servers/`, `src/TeslaFleetManagementApi/TeslaFleetManagementApiClient.cs`, `src/TeslaFleetManagementApi/ServiceCollectionExtensions.cs` — environments, the client, DI.

**Leave the clone in place and unedited** — later steps reuse it instead of cloning again, and an edit made in it never reaches the SDK, so report what needs changing instead. The OS reaps the temp directory on its own.

## Idempotency — the real keys are on the map; the injected header is not one

**Every non-GET call sends an `Idempotency-Key` header.** Unless the operation's request record carries that header as a member, its value is a fresh `Guid.NewGuid()` on every call — it deduplicates nothing, and Tesla Fleet Management API may not read the header at all, so never cite it as a key.

Whether an operation takes a **real**, caller-supplied key is visible on that operation's request record: look for a key-shaped member (an idempotency key, a request id) in the record file its **Type sources** table names. Its semantics — retention windows, when it is mandatory — are in that member's XML docs and the method's `<remarks>` in the `Api/` file the page names. An **`If-Match`** member on the record guards against lost updates, not duplicates. For every write with no key, the answer is reconciliation: `dotnet-configuration-resilience`.

## Sensitive data — check the request models before you log anything

Whether this API's **request** models carry fields you must never log — card or bank numbers, personal data, message content — is a shape question: each request model's declaring file (the map's Type sources table names it) lists every field with its `[JsonPropertyName]` wire name. If the scope touches such a field, the SDK's logging decides your posture (see `dotnet-configuration-resilience`): JSON request bodies are logged **verbatim** when `LogRequestBody` is on, with no redaction; form bodies are masked only by deny-list; and leaving `options.Logging.LoggerFactory` unset arms the `TESLA_FLEET_MANAGEMENT_API_LOG` environment variable, whose `trace` level forces body logging on with no code change and no deploy. So on any build that can carry such a field: `LogRequestBody` stays off, `LoggerFactory` is set explicitly in production, and your own diagnostics never echo a request body on those paths.

Responses are often safer — many APIs return masked variants of what requests carry raw — but that too is a model-shape fact: check the response model's file before assuming.

## Response metadata — status and headers are not on the return value

On a success the SDK returns only the deserialized body: the HTTP status and headers of a successful call are **not on the return value**, and unless the map's error-handling model notes no-throw `{Operation}Result` siblings for this SDK, there is no non-throwing variant to get them from. On an error, what is reachable depends on the operation's error case — its map row: a Case B `RawError` carries `StatusCode`; a typed Case A body may or may not (see `dotnet-error-handling`).

The status and headers of a successful call (`Retry-After`, rate-limit budgets, a request-id echo) are reachable only through **hooks** — `SdkHook.OnResponse` on `options.Hooks`, or per call on `requestOptions.Hooks`, running once per attempt; see *Hooks* in `dotnet-configuration-resilience`.

## The `dotnet-*` skill names are not unique across plugins

Every APIMatic .NET plugin ships this same set of `dotnet-*` skill names, and a copy from another plugin may describe a different runtime. **Load the copy that ships with this plugin**: write plugin-qualified names where your harness supports them, and where it does not, confirm the copy you loaded describes the runtime this SDK ships — `RequestOptions` carrying both a log level and `Hooks`, and a `src/TeslaFleetManagementApi/Core/Hooks/SdkHook.cs` in the source. The `X-APIMatic-Gen-Version` wire header does not distinguish these runtimes, so it is not the check.

## Integration workflow — load the companion skill at each step

You loaded every companion the sheet named before starting (per `dotnet-integrate-tesla-fleet-management-api`); before you write the code for each step, re-read the one that governs it — even if you have already read the relevant source. A typical integration reaches them in this order:

1. **Client & DI setup** — load **dotnet-client-initialization** before you write `new TeslaFleetManagementApiClient(...)`, build its options, or DI-register it.
2. **Authentication** — load **dotnet-authentication** before you set the credentials properties on `TeslaFleetManagementApiClientOptions` — the identity table above names them.
3. **Calling an endpoint / building a request body** — load **dotnet-calling-endpoints** before the first `client.{ApiGroup}.{Operation}(...)` call; whether a write takes a real idempotency key is on its request record (*Idempotency* above).
4. **Models** — load **dotnet-models** the moment a request/response field is not a plain string or number. A model's extension-data bag for unknown fields is `AdditionalProperties`, a numbered variant of that name on a model that already has a property called that, and absent on a model that admits no extra fields — confirm it in the model's file.
5. **Error handling** — load **dotnet-error-handling** before you write any `try/catch`; confirm each operation's Case A or B in its map row.
6. **Configuration & resilience** — load **dotnet-configuration-resilience** when you tune retries, timeouts, the base URL, pagination, or logging.
7. **Testing** — load **dotnet-testing** before you stub the SDK.

