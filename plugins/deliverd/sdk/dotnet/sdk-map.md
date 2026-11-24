<!-- Generated file — do not edit; regenerated with the SDK. -->

# SDK map — Deliverd (.NET)

> A generated table of contents for this SDK. Consult this map and its sub-pages to learn signatures, error types, and server/auth wiring **by lookup**. Model shapes and enum values are *not* duplicated here — the map names the file declaring each type; read the shape there. The compiler is the backstop: a wrong name fails to build.

|  |  |
| --- | --- |
| SDK display name | Deliverd |
| Root namespace | `Deliverd` |
| Target framework | `netstandard2.0` (C# `LangVersion 14`, `Nullable enable`) |
| API spec version | `1.0.0` |
| Generator | APIMatic |

Staleness check: the API spec version above changes when the SDK is regenerated from a new spec. If a lookup here fails to compile, trust the compiler and re-read the source file named in the row.

All `Source` paths on this map and its sub-pages are relative to the **SDK root** — the directory holding this file — never to the page that carries them; the project file is `src/Deliverd/Deliverd.csproj`. Open them as-is from the SDK root, from any page; if the SDK sits under a subdirectory of a larger repo, prefix that subdirectory.

---

## Getting a client

```csharp
var httpClient = new HttpClient();
// TODO: configure more client options here
var options = new DeliverdClientOptions
{
    BearerAuth = "YOUR_BEARER_TOKEN",
    Environment = ServerEnvironment.Production,
};
var client = new DeliverdClient(httpClient, options);
```

DI alternative (`services.AddDeliverdClient`):

```csharp
services.AddDeliverdClient(options =>
{
    options.BearerAuth = "YOUR_BEARER_TOKEN";
    options.Environment = ServerEnvironment.Production;
    // TODO: configure more client options here
});
```

Every API group is a property on the client (e.g. `client.Actions`). Source: `src/Deliverd/DeliverdClient.cs`. The only constructor is `DeliverdClient(HttpClient httpClient, DeliverdClientOptions options)`.

All `DeliverdClientOptions` properties (source: `src/Deliverd/DeliverdClientOptions.cs`):

| Property | Type |
| --- | --- |
| `Environment` | `ServerEnvironment` |
| `Retry` | `RetryOptions` |
| `Logging` | `LoggingOptions` |
| `TimeProvider` | `TimeProvider` |
| `Server` | `ServerOptions` |
| `StreamReadTimeout` | `TimeSpan?` |
| `Hooks` | `IReadOnlyList<SdkHook>` |
| `BearerAuth` | `string?` |
| `BearerAuthProvider` | `CredentialProvider<string>?` |

`ServerEnvironment` (source: `src/Deliverd/Servers/ServerEnvironment.cs`, namespace `Deliverd.Servers`)

`RetryOptions` members (namespace `Deliverd.Core.Configuration` — add `using Deliverd.Core.Configuration;`; source: `src/Deliverd/Core/Configuration/RetryOptions.cs`; all members are `required`, so build a full instance or start from `RetryOptions.Default()`):

| Member | Type |
| --- | --- |
| `StatusCodesToRetry` | `IReadOnlyList<HttpStatusCode>` |
| `HttpMethodsToRetry` | `IReadOnlyList<HttpMethod>` |
| `MaxRetries` | `int` |
| `Delay` | `TimeSpan` |
| `Timeout` | `TimeSpan?` |
| `BackOffFactor` | `int` |
| `UseExponentialBackoff` | `bool` |
| `MaxJitter` | `TimeSpan` |
| `OnRetry` | `Action<RetryAttempt>?` |

---

## Error-handling model (read once — applies to every operation)

Operations are **throw-based**. On an error status the SDK throws `ApiException<TError>` (`src/Deliverd/Core/Exceptions/ApiException.cs`, namespace `Deliverd.Core.Exceptions`) exposing `.Error` of type `TError` beside the `StatusCode`, `Headers` and `ContentType` of the response. There are two cases:

- **Case A — typed error.** `TError` is a generated `…Error : ApiError` class (namespace `Deliverd.Errors`) with status-specific `TryGet…(out …)` accessors (each returns `true` when that shape is present) plus the inherited `TryGetRawError([NotNullWhen(true)] out RawError? error)` fallback, and an exhaustive `Match` pair — `Match<TResult>(Func<T, TResult> on{Arm}…, Func<RawError, TResult> otherwise)` and its `Action` twin — with one `on…` arm per accessor, in the ordinal order of their names, and a required `otherwise` that receives the `RawError` of a status the operation does not declare. The operation blocks name the exact `TryGet…` methods and the HTTP status each maps to.
- **Case B — raw error.** `TError` is `RawError` (`src/Deliverd/Core/ErrorResponse/RawError.cs`, namespace `Deliverd.Core.ErrorResponse`): `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`.

⚠ Each of the three lives in its own namespace. `src/Deliverd/Core/` holds several namespaces, so a catch block naming `ApiException<T>`, a typed `{Operation}Error` and `RawError` together needs a `using` for each.

`ApiException<TError>` is one leaf of the `SdkException` family (`src/Deliverd/Core/Exceptions/SdkException.cs`): a request that produced no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match its declared type as `ResponseDeserializationException`, and a required credential that is not configured, or one that could not be applied, as `AuthSchemeException`. Every one of them names the failed call. The full table is in [README → Error Handling](README.md#error-handling).

Core error types (`src/Deliverd/Core/ErrorResponse/`) — public members with their **declared types**, verbatim from source:

| Type | Public members | Source |
| --- | --- | --- |
| `ApiError` — abstract base of the 85 typed error classes in `src/Deliverd/Errors/` | `TryGetRawError([NotNullWhen(true)] out RawError? error): bool` | `src/Deliverd/Core/ErrorResponse/ApiError.cs` |
| `RawError` | `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?` | `src/Deliverd/Core/ErrorResponse/RawError.cs` |

Every accessor over a reference-type payload, on a typed error and on a `OneOf`/`AnyOf` union alike, is `[NotNullWhen(true)] out T?`: read the value inside the `if`, where the compiler has narrowed it; a value-type payload (`long`, `JsonElement`) stays a bare `out`.

Typed-error payload shapes (the `out` types in each operation page's error-accessor cells) are ordinary records/unions — no special handling. The operation's **Type sources** table gives the file that declares each one; read field names, declared types, and JSON wire names there, as for any other model.

```csharp
try
{
    var response = await client.AiSystems.PatchApiV1AiSystemsById(new PatchApiV1AiSystemsByIdRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
}
catch (ApiException<PatchApiV1AiSystemsByIdError> ex)
{
    // Case A — typed error
    if (ex.Error.TryGetNoContent(out var error))
    {
        // Handle 402
    }
    else if (ex.Error.TryGetRawError(out var raw))
    {
        // Any other error status
    }
}
catch (ApiException<RawError> ex)
{
    // Case B — raw error
    // ex.Error.StatusCode, ex.Error.ReadAsString(), ex.Error.ReadAsJson<T>()
}
```

**No-throw (`…Result`) variants: absent across this SDK** — every operation is throw-only. Of **142 operations**, **85 are Case A (typed)** and **57 are Case B (raw)**.

---

## Operations — by controller (28 groups, 142 operations)

Each links to a sub-page with one row per operation: signature, the request record's required members, query-param wire names (with the serialization style where the spec declares one), return type, error Case A/B, and Case A's typed accessors with their statuses. Each operation also carries a **Type sources** table — every type it names, with the file that declares it — so resolving a body, return, or error payload to its source is a lookup, never a search. `RawError` is excluded there (its members and path are above); an operation with no table names nothing but primitives and `RawError`.

**Each row states what is specific to its operation. Everything below holds for EVERY operation unless that operation's row says otherwise, so a row silent on one of these points is telling you the default here applies — take it and move on rather than opening the source to confirm it.**

| Applies to every operation | Stated where | A row appears only when |
| --- | --- | --- |
| **Throw-only** — no `…Result`/no-throw variant exists anywhere in this SDK | this page, Error-handling model | a no-throw sibling exists (none do at this SDK version) |
| **No pagination** — the operation returns a single response, not a `Pageable` | here | pagination is offered — the block carries a **Pagination** bullet naming the posture (page-, offset-, cursor- or link-based, or the `page`-without-page-size case) |
| **Case B error accessors are always these four** — `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?` | the `RawError` row above | never — a `Case B` label always implies exactly these four; Case A rows list their own typed accessors |
| **Server group `Default`** — base URL per Servers & auth below | here | the operation is on another group — its block carries a **Server group** bullet |
| **Inputs are one request record** — an operation that takes input takes a single request record as its first parameter; build it with an object initializer, using the property names in the record's source (its file is in the operation's **Type sources**). A member the row does not list as required is optional or already carries the spec's default | here | never — it always holds |

**The HTTP verb and route live on the operation itself**, in the source file named at the top of its operations page. This map is method-first: the C# method is the interface you call. When something wire-level needs the route — reproducing a raw request, pointing the client at a mock, reading a provider-side log — read it from that file; do not reconstruct it from memory or infer it from the method name.

**The endpoint's behavioural prose lives there too**, as the XML `<remarks>` on the method. Rows here give you the contract — names, types, shapes, errors. Where an operation's *semantics* decide what you must pass — a parameter whose value changes server-side behaviour, an ordering or exclusivity rule between fields — that is what `<remarks>` settles; read it there rather than filling it in from memory.

| Controller (`client.X`) | Ops | Page |
| --- | --- | --- |
| `Actions` | 2 | [map/operations/Actions.md](map/operations/Actions.md) |
| `Agents` | 2 | [map/operations/Agents.md](map/operations/Agents.md) |
| `AiSystems` | 7 | [map/operations/AiSystems.md](map/operations/AiSystems.md) |
| `Analytics` | 1 | [map/operations/Analytics.md](map/operations/Analytics.md) |
| `Approvals` | 6 | [map/operations/Approvals.md](map/operations/Approvals.md) |
| `Audiences` | 1 | [map/operations/Audiences.md](map/operations/Audiences.md) |
| `AuditEvents` | 1 | [map/operations/AuditEvents.md](map/operations/AuditEvents.md) |
| `Collections` | 4 | [map/operations/Collections.md](map/operations/Collections.md) |
| `Comments` | 2 | [map/operations/Comments.md](map/operations/Comments.md) |
| `DecisionSessions` | 2 | [map/operations/DecisionSessions.md](map/operations/DecisionSessions.md) |
| `Drafts` | 1 | [map/operations/Drafts.md](map/operations/Drafts.md) |
| `Evidence` | 1 | [map/operations/Evidence.md](map/operations/Evidence.md) |
| `Flows` | 6 | [map/operations/Flows.md](map/operations/Flows.md) |
| `Gates` | 7 | [map/operations/Gates.md](map/operations/Gates.md) |
| `GovernanceApi` | 12 | [map/operations/GovernanceApi.md](map/operations/GovernanceApi.md) |
| `Knowledge` | 7 | [map/operations/Knowledge.md](map/operations/Knowledge.md) |
| `Playbooks` | 8 | [map/operations/Playbooks.md](map/operations/Playbooks.md) |
| `Policies` | 7 | [map/operations/Policies.md](map/operations/Policies.md) |
| `Reports` | 21 | [map/operations/Reports.md](map/operations/Reports.md) |
| `Reviews` | 4 | [map/operations/Reviews.md](map/operations/Reviews.md) |
| `RiskIndicators` | 2 | [map/operations/RiskIndicators.md](map/operations/RiskIndicators.md) |
| `Schedules` | 4 | [map/operations/Schedules.md](map/operations/Schedules.md) |
| `Screen` | 1 | [map/operations/Screen.md](map/operations/Screen.md) |
| `Tasks` | 24 | [map/operations/Tasks.md](map/operations/Tasks.md) |
| `Templates` | 1 | [map/operations/Templates.md](map/operations/Templates.md) |
| `Uploads` | 1 | [map/operations/Uploads.md](map/operations/Uploads.md) |
| `WebhookEndpoints` | 6 | [map/operations/WebhookEndpoints.md](map/operations/WebhookEndpoints.md) |
| `Workspaces` | 1 | [map/operations/Workspaces.md](map/operations/Workspaces.md) |

---

## Models — where they live, how to build them

**Shapes live only in the source.** Every file under `src/Deliverd/Models/`, `src/Deliverd/Errors/` and `src/Deliverd/Requests/` declares exactly one public type, named after the file, and no two share a name — so a type name *is* its path. Take it from the operation's **Type sources** table, or build it from the kind's directory below. Never grep for a type.

| Group | Count | Directory (file = `<TypeName>.cs`) |
| --- | --- | --- |
| Records (plain `record` data models) | 305 | `src/Deliverd/Models/` |
| Unions (`AnyOf`) — variant factories + `TryGet…` + `Match` | 1 | `src/Deliverd/Models/AnyOf/` |
| Enums (`OpenStringEnum<T>` / `OpenIntEnum<T>`) — C# member names + wire values | 114 | `src/Deliverd/Models/Enums/` |
| Typed error classes (`: ApiError`, one per Case A operation) | 85 | `src/Deliverd/Errors/` |
| Request records (one per operation that takes input; never serialized) | 136 | `src/Deliverd/Requests/` — a controller's records sit in a folder named after it (an operation with several tags is filed under the first tag it declares) |

Conventions: records are immutable, `init`-only; `required` properties must be set in the object initializer; `T?` is optional. A field's wire name is its `[JsonPropertyName]` and often differs from the C# name (`AmountInCents` ↔ `amount_in_cents`) — read it off the property, don't derive it. `OneOf`/`AnyOf` unions wrap `Optional<T>` variants — build via static factory or implicit conversion, read one variant via `TryGet…(out …)` or branch over all of them with the generated `Match`, which takes one `on{Variant}` handler per variant in declaration order and then `otherwise`, which receives the raw `JsonElement` of a value the SDK could not place: unions are open on read, so an unrecognised discriminator value or a body no variant accepts lands in `TryGetUnknown(out JsonElement)` and re-serializes verbatim; pass handlers by name, and treat an added or moved variant as a breaking change; `AllOf` compositions are not unions — every constituent is a `required` property, so set them all, and those constituent properties carry no `[JsonPropertyName]` and have no wire name of their own, because the generated converter flattens each constituent's own fields directly into the one parent JSON object. Enums are **not** C# enums — use the static members, whose names are PascalCase even when the wire value isn't (`CollectionMethod.Invoice`, not `.invoice`); there is no public factory, so resolve a raw value with `TryGetKnownValue` and branch with the generated `Match`, whose `otherwise` arm receives any value the SDK does not declare.

Namespaces by content type (add `using` accordingly):

| Contents | Namespace |
| --- | --- |
| Client & options (root) | `Deliverd` |
| Operation controllers (`src/Deliverd/Api/`) | `Deliverd.Api` |
| Records (`src/Deliverd/Models/`) | `Deliverd.Models` |
| Enums (`src/Deliverd/Models/Enums/`) | `Deliverd.Models.Enums` |
| AnyOf unions (`src/Deliverd/Models/AnyOf/`) | `Deliverd.Models.AnyOf` |
| Error classes (`src/Deliverd/Errors/`) | `Deliverd.Errors` |
| Request records (`src/Deliverd/Requests/`) | `Deliverd.Requests` — plus `.<Controller>` for a controller's records (an operation with several tags is filed under the first tag it declares) |

---

## Servers & auth

**Bearer token.** Set `options.BearerAuth = "<token>"`, or `options.BearerAuthProvider` to a delegate asked on every request. API key (dlv_…) created in Settings → API tokens, or an OAuth access token (dlvo_…). Every route below can answer `401 auth_error` — the credential was not accepted — or `403 insufficient_scope`, which is a different thing: the credential is fine and was not issued with the scope this route needs. Reissue it with that scope rather than replacing it with another of the same ones. Older clients may still branch on `auth_error` for both.

Operation blocks name their credential in an **Auth** bullet; an operation whose spec declares no scheme carries no such bullet.

- `AND` — every credential listed must be configured; the call fails before anything is sent, naming each one that is not.
- `OR` — the first configured credential that applies is sent, in the order listed; a configured one that fails falls through to the next; when none is configured the call fails before anything is sent, naming all of them.
- `OR anonymous` — the operation accepts anonymous callers: it is authenticated when a whole alternative listed before it is configured (every credential in an AND group), and sent without credentials otherwise.
- `(scopes: …)` — the OAuth2 scopes the operation's token is requested with; a client-credentials scheme mints one token per scope set.

A required credential you never configured fails the call with `AuthSchemeException` before anything is sent, so a `401` on an operation that requires a credential means the server rejected the one that was sent. A credential option left `null` is read from an environment variable when the client is constructed; the README's **Credentials from environment variables** table names them. A value set in code always wins, including the placeholder assignments in the **Getting a client** sample; delete the line for any credential you supply through an environment variable.

**Environments.** `options.Environment` selects the target environment (`src/Deliverd/Servers/ServerEnvironment.cs`):

| Environment | Value | Hosting |
| --- | --- | --- |
| `ServerEnvironment.Production` *(default)* | `production` | Deliverd REST API (paths carry the /api/v1 prefix; https://deliverd.dev/llms.txt: "REST API: https://deliverd.dev/api/v1") |

**1 server group.** Base-URL templates and override points (`options.Server.…`):

| Group | `Production` base URL | Override point |
| --- | --- | --- |
| `Default` | `https://deliverd.dev` | `options.Server.Default.Production.BaseUrl` |

Retry/resilience is configurable via `options.Retry` (`RetryOptions`, backed by Polly).

