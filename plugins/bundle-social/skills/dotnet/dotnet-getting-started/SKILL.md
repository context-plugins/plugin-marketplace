---
name: "dotnet-getting-started"
description: "Load for any Bundle Social .NET SDK contract fact in C#, instead of memory: install, namespaces, environments, auth, and the SDK map giving every operation signature and error case and the file declaring each model, enum and error type. .NET/C# only; dotnet-integrate-bundle-social is the workflow that drives it."
---

# Getting started with the Bundle Social .NET SDK

> **Map layer** for `dotnet-integrate-bundle-social`: the contracts in scope go into `bundle-social-plan.md`; come back to the map page a row cites for any fact the sheet lacks.

Usage companions: `dotnet-client-initialization`, `dotnet-authentication`, `dotnet-calling-endpoints`, `dotnet-models`, `dotnet-error-handling`, `dotnet-configuration-resilience`, `dotnet-testing`. The SDK map is authoritative for the SDK's *surface* (signatures, model shapes, enums, which error type an operation throws); the companions are the *usage layer* — how to call each piece and the gotchas a signature cannot show. Reading the map or source does not replace a step's companion: at each step below, load the companion *and* confirm names against the map.

> **Ground every signature, model, enum, and error type in the SDK map** (`sdk-map.md` + `map/operations/`, inside the SDK source bundled in this plugin — see the *SDK source* section for where it sits); **never fill a gap from memory.**

## SDK identity

|  |  |
| --- | --- |
| API | Bundle Social |
| Package | *generated for this plugin, not published — see *Install* below* |
| SDK source | `sdk/dotnet/` inside this plugin (generated with it) |
| Root namespace | `BundleSocial` (the `using` namespace) |
| Client class | `BundleSocialClient` |
| Options class | `BundleSocialClientOptions` |
| Auth | **API key** in the `x-api-key` header — set `ApiKeyAuth` |
| Environments | `ServerEnvironment.Production` *(default)* → `https://api.bundle.social`<br>`ServerEnvironment.Environment2` → `http://localhost:3001` |
| Log environment variable | `BUNDLE_SOCIAL_LOG` |
| Target framework | `netstandard2.0` (C# `LangVersion 14`) |

## Namespaces (using-directives)

The SDK splits its public types across **separate child namespaces**. C# does **not** import child namespaces transitively, so `using BundleSocial.Models;` alone does **not** make enums, union types, or error types visible — you get `CS0103`/`CS0246` ("name/type does not exist") on build. Add a separate `using` for each kind of type you reference:

| Type | Namespace |
| --- | --- |
| `BundleSocialClient` | `BundleSocial` |
| `BundleSocialClientOptions` | `BundleSocial` |
| `ServerEnvironment` | `BundleSocial.Servers` |

Models, enums, union types and the generated error types each sit in their own child namespace. The map's **Namespaces by content type** table maps each source directory to its namespace, so read the namespace off the path the map gives for the type; anything left ambiguous is settled by the `namespace` declaration at the top of the type's own file.

## Install — reference the SDK that ships in this plugin

This SDK is **not on NuGet** — it was generated for this plugin and ships inside it as source, at `sdk/dotnet/` relative to the plugin root (the directory holding `skills/`). Reference the project where it sits, from the project that will call Bundle Social:

```bash
dotnet add <your-project>.csproj reference <plugin-root>/sdk/dotnet/src/BundleSocial/BundleSocial.csproj
```

**That reference is local to this machine.** `dotnet add reference` writes a `<ProjectReference>` whose path runs from your project into this plugin's install directory, so the project builds only where this plugin is installed at that path — a teammate needs the plugin installed and the reference re-pointed at their copy (remove it with `dotnet remove reference`, then run the command again), and a CI runner without the plugin cannot build it. Say so when you hand the work over. If this plugin is reinstalled somewhere else, the reference dangles: re-point it the same way.

> **Build against the project where it sits in this plugin; never copy the SDK source into your repository** — a copy is a fork the map stops describing. The map is read from that same source, which is also your build reference.

## SDK map — look up first, open the named file second, never grep

The map sits at the SDK root **inside the SDK source bundled in this plugin** and always matches that source and these skills. It is **method-first**: operation contracts are on its pages; for model, enum and error shapes it names the file declaring each type, and you read the shape in that file. Every path below is relative to the SDK root, `sdk/dotnet/` in this plugin — the next section has the layout:

- **`sdk-map.md`** — the index and the read-once pages: SDK identity, client construction and the full options surface, the error-handling model (Case A typed / Case B raw), the **defaults table** for operations, the model/enum/error directory conventions, *Namespaces by content type*, and *Servers & auth*.
- **`map/operations/`** — one page per controller, one block per operation: the exact C# signature with its request record's required members, the return type, the error case (A: typed `{Operation}Error` with its `TryGet…` accessors and their statuses / B: `RawError`), pagination and server-group bullets **only where they differ from the defaults**, and a **Type sources** table naming the file that declares every type the operation mentions.
- **Shapes live in the source, one type per file.** Every file under `src/BundleSocial/Models/`, `src/BundleSocial/Errors/` and `src/BundleSocial/Requests/` declares exactly one public type named after the file, so a type name *is* its path (the directories are under *Layout* below), or take it from the operation's Type sources table. Read the fields, `required` flags, enum values and, on a model, the `[JsonPropertyName]` wire names from that one file, scoped (a request record is never serialized and carries none). The compiler is the backstop: a wrong name fails to build.

**Never grep, glob, `find` or otherwise scan that source to locate anything** — the map and the name-is-path rule are the locator. Instead:

1. Open `sdk-map.md` and follow its controller table to the operations pages in scope; read every contract fact (signature, error accessors, pagination) by lookup.
2. **Silence means the default.** The index's defaults table states what holds for every operation (throw-only, no pagination, the default server group, inputs as one request record); an operation's block states only what differs. A block silent on pagination has none — take the default and move on rather than opening the source to confirm it.
3. The **HTTP verb/route and the endpoint's behavioural prose** live on the operation method itself — the XML `<remarks>` docs in the `Api/{Controller}.cs` file the page header names; what each input means is in the per-member docs on its request record. Read them there when wire-level detail or call-acceptance semantics matter; never reconstruct a route from memory.

Keep lookups cheap — the rules that keep a session's context small:

- Collect every in-scope contract in **one** pass into the **contract sheet** in `bundle-social-plan.md` (format in `dotnet-integrate-bundle-social`); never re-look-up a fact the sheet already carries.
- When you do open a source file, read it **scoped**: with an offset/limit, or a search for the one symbol — never dump a whole file into the conversation.
- Never open the SDK's `api-reference.md` — the map supersedes it.

## SDK source — it is already here; the map lives inside it

The SDK source is where the map lives, and it ships with this plugin at `sdk/dotnet/` relative to the plugin root (the directory holding `skills/`), so **there is nothing to clone**: it already sits beside these skills. It is a read-only reference, never in the project repo, and it is also what your build references.

**Resolve its path once, up front**, at `<plugin-root>/sdk/dotnet/`, and reuse that path for the rest of your session.

The source you read is the copy that ships in this plugin: there is no ref to pin. If a name from the map fails to compile, trust the compiler, re-read the source file the map's row names, and report the mismatch; never patch around it from memory.

The source stays in this plugin at `sdk/dotnet/`, and `bundle-social-plan.md` cites it by that plugin-relative path — that path stays valid for anyone who loads this plugin.

Then confirm the SDK shape **only** from that source — not by either of these:

- **Do not decompile or run reflection over the built assembly.** It drops what the source carries and the other skills rely on: the XML `<exception>`/parameter doc-comments and the exact parameter names and order.
- **Do not fetch SDK files from the web one at a time** as your way in — `…/blob/…` pages return HTML, not source. Read the copy in this plugin instead.

Layout — where the SDK map's file references resolve, relative to the SDK root, `sdk/dotnet/` in this plugin (open these directly; do not scan for them):

- `src/BundleSocial/Api/` — one file per controller/group; **this is where the operation methods live** (the HTTP verb and route, and the XML `<remarks>` docs carrying the endpoint's behavioural prose). The map's per-controller pages name the exact file.
- `src/BundleSocial/Models/` (+ `src/BundleSocial/Models/Enums/`) — body and response models, unions and enums.
- `src/BundleSocial/Requests/` — one request record per operation that takes input, carrying the per-member docs for each input; a controller's records sit in `src/BundleSocial/Requests/<Controller>/` (an operation on several controllers has one record, in one of their folders — its Type sources table names which).
- `src/BundleSocial/Errors/` — per-operation `{Operation}Error` types (only Case-A operations have one; the map's rows say which case each operation is).
- `src/BundleSocial/Core/` — HTTP infrastructure (the `SdkException` family, `RawError`, auth, retries, `SdkHook`).
- `src/BundleSocial/Servers/`, `src/BundleSocial/BundleSocialClient.cs`, `src/BundleSocial/ServiceCollectionExtensions.cs` — environments, the client, DI.

**Leave the source in place and unedited** — later steps reuse it, and an edit made in it is lost the next time this plugin is regenerated, so report what needs changing instead.

## Idempotency — the real keys are on the map; the injected header is not one

**Every non-GET call sends an `Idempotency-Key` header.** Unless the operation's request record carries that header as a member, its value is a fresh `Guid.NewGuid()` on every call — it deduplicates nothing, and Bundle Social may not read the header at all, so never cite it as a key.

Whether an operation takes a **real**, caller-supplied key is visible on that operation's request record: look for a key-shaped member (an idempotency key, a request id) in the record file its **Type sources** table names. Its semantics — retention windows, when it is mandatory — are in that member's XML docs and the method's `<remarks>` in the `Api/` file the page names. An **`If-Match`** member on the record guards against lost updates, not duplicates. For every write with no key, the answer is reconciliation: `dotnet-configuration-resilience`.

## Sensitive data — check the request models before you log anything

Whether this API's **request** models carry fields you must never log — card or bank numbers, personal data, message content — is a shape question: each request model's declaring file (the map's Type sources table names it) lists every field with its `[JsonPropertyName]` wire name. If the scope touches such a field, the SDK's logging decides your posture (see `dotnet-configuration-resilience`): JSON request bodies are logged **verbatim** when `LogRequestBody` is on, with no redaction; form bodies are masked only by deny-list; and leaving `options.Logging.LoggerFactory` unset arms the `BUNDLE_SOCIAL_LOG` environment variable, whose `trace` level forces body logging on with no code change and no deploy. So on any build that can carry such a field: `LogRequestBody` stays off, `LoggerFactory` is set explicitly in production, and your own diagnostics never echo a request body on those paths.

Responses are often safer — many APIs return masked variants of what requests carry raw — but that too is a model-shape fact: check the response model's file before assuming.

## Response metadata — status and headers are not on the return value

On a success the SDK returns only the deserialized body: the HTTP status and headers of a successful call are **not on the return value**, and unless the map's error-handling model notes no-throw `{Operation}Result` siblings for this SDK, there is no non-throwing variant to get them from. On an error, what is reachable depends on the operation's error case — its map row: a Case B `RawError` carries `StatusCode`; a typed Case A body may or may not (see `dotnet-error-handling`).

The status and headers of a successful call (`Retry-After`, rate-limit budgets, a request-id echo) are reachable only through **hooks** — `SdkHook.OnResponse` on `options.Hooks`, or per call on `requestOptions.Hooks`, running once per attempt; see *Hooks* in `dotnet-configuration-resilience`.

## The `dotnet-*` skill names are not unique across plugins

Every APIMatic .NET plugin ships this same set of `dotnet-*` skill names, and a copy from another plugin may describe a different runtime. **Load the copy that ships with this plugin**: write plugin-qualified names where your harness supports them, and where it does not, confirm the copy you loaded describes the runtime this SDK ships — `RequestOptions` carrying both a log level and `Hooks`, and a `src/BundleSocial/Core/Hooks/SdkHook.cs` in the source. The `X-APIMatic-Gen-Version` wire header does not distinguish these runtimes, so it is not the check.

## Integration workflow — load the companion skill at each step

You loaded every companion the sheet named before starting (per `dotnet-integrate-bundle-social`); before you write the code for each step, re-read the one that governs it — even if you have already read the relevant source. A typical integration reaches them in this order:

1. **Client & DI setup** — load **dotnet-client-initialization** before you write `new BundleSocialClient(...)`, build its options, or DI-register it.
2. **Authentication** — load **dotnet-authentication** before you set the credentials properties on `BundleSocialClientOptions` — the identity table above names them.
3. **Calling an endpoint / building a request body** — load **dotnet-calling-endpoints** before the first `client.{ApiGroup}.{Operation}(...)` call; whether a write takes a real idempotency key is on its request record (*Idempotency* above).
4. **Models** — load **dotnet-models** the moment a request/response field is not a plain string or number. A model's extension-data bag for unknown fields is `AdditionalProperties`, a numbered variant of that name on a model that already has a property called that, and absent on a model that admits no extra fields — confirm it in the model's file.
5. **Error handling** — load **dotnet-error-handling** before you write any `try/catch`; confirm each operation's Case A or B in its map row.
6. **Configuration & resilience** — load **dotnet-configuration-resilience** when you tune retries, timeouts, the base URL, pagination, or logging.
7. **Testing** — load **dotnet-testing** before you stub the SDK.

