<!-- Generated file — do not edit; regenerated with the SDK. -->

# SDK map — DoiT (.NET)

> A generated table of contents for this SDK. Consult this map and its sub-pages to learn signatures, error types, and server/auth wiring **by lookup**. Model shapes and enum values are *not* duplicated here — the map names the file declaring each type; read the shape there. The compiler is the backstop: a wrong name fails to build.

|  |  |
| --- | --- |
| SDK display name | DoiT |
| Root namespace | `DoiT` |
| Target framework | `netstandard2.0` (C# `LangVersion 14`, `Nullable enable`) |
| API spec version | `v1` |
| Generator | APIMatic |

Staleness check: the API spec version above changes when the SDK is regenerated from a new spec. If a lookup here fails to compile, trust the compiler and re-read the source file named in the row.

All `Source` paths on this map and its sub-pages are relative to the **SDK root** — the directory holding this file — never to the page that carries them; the project file is `src/DoiT/DoiT.csproj`. Open them as-is from the SDK root, from any page; if the SDK sits under a subdirectory of a larger repo, prefix that subdirectory.

---

## Getting a client

```csharp
var httpClient = new HttpClient();
// TODO: configure more client options here
var options = new DoiTClientOptions
{
    ApiKey = "YOUR_API_KEY",
    TenantId = "YOUR_API_KEY",
    Oauth2 = new OAuth2AuthorizationCodeCredentials
    {
        ClientId = "YOUR_CLIENT_ID",
        RedirectUri = "YOUR_REDIRECT_URI",
        PromptForAuthorizationCode = (authUrl, ct) => Task.FromResult(""),
    },
    Environment = ServerEnvironment.Production,
};
var client = new DoiTClient(httpClient, options);
```

DI alternative (`services.AddDoiTClient`):

```csharp
services.AddDoiTClient(options =>
{
    options.ApiKey = "YOUR_API_KEY";
    options.TenantId = "YOUR_API_KEY";
    options.Oauth2 =
        new OAuth2AuthorizationCodeCredentials
        {
            ClientId = "YOUR_CLIENT_ID",
            RedirectUri = "YOUR_REDIRECT_URI",
            PromptForAuthorizationCode = (authUrl, ct) => Task.FromResult(""),
        };
    options.Environment = ServerEnvironment.Production;
    // TODO: configure more client options here
});
```

Every API group is a property on the client (e.g. `client.AccountTeam`). Source: `src/DoiT/DoiTClient.cs`. The only constructor is `DoiTClient(HttpClient httpClient, DoiTClientOptions options)`.

All `DoiTClientOptions` properties (source: `src/DoiT/DoiTClientOptions.cs`):

| Property | Type |
| --- | --- |
| `Environment` | `ServerEnvironment` |
| `Retry` | `RetryOptions` |
| `Logging` | `LoggingOptions` |
| `TimeProvider` | `TimeProvider` |
| `Server` | `ServerOptions` |
| `StreamReadTimeout` | `TimeSpan?` |
| `Hooks` | `IReadOnlyList<SdkHook>` |
| `ApiKey` | `string?` |
| `ApiKeyProvider` | `CredentialProvider<string>?` |
| `TenantId` | `string?` |
| `TenantIdProvider` | `CredentialProvider<string>?` |
| `Oauth2` | `OAuth2AuthorizationCodeCredentials?` |

`ServerEnvironment` (source: `src/DoiT/Servers/ServerEnvironment.cs`, namespace `DoiT.Servers`)
`OAuth2AuthorizationCodeCredentials` (source: `src/DoiT/Core/Authentication/OAuth2/AuthorizationCode/OAuth2AuthorizationCodeCredentials.cs`, namespace `DoiT.Core.Authentication.OAuth2.AuthorizationCode`)

`RetryOptions` members (namespace `DoiT.Core.Configuration` — add `using DoiT.Core.Configuration;`; source: `src/DoiT/Core/Configuration/RetryOptions.cs`; all members are `required`, so build a full instance or start from `RetryOptions.Default()`):

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

Operations are **throw-based**. On an error status the SDK throws `ApiException<TError>` (`src/DoiT/Core/Exceptions/ApiException.cs`, namespace `DoiT.Core.Exceptions`) exposing `.Error` of type `TError` beside the `StatusCode`, `Headers` and `ContentType` of the response. There are two cases:

- **Case A — typed error.** `TError` is a generated `…Error : ApiError` class (namespace `DoiT.Errors`) with status-specific `TryGet…(out …)` accessors (each returns `true` when that shape is present) plus the inherited `TryGetRawError([NotNullWhen(true)] out RawError? error)` fallback, and an exhaustive `Match` pair — `Match<TResult>(Func<T, TResult> on{Arm}…, Func<RawError, TResult> otherwise)` and its `Action` twin — with one `on…` arm per accessor, in the ordinal order of their names, and a required `otherwise` that receives the `RawError` of a status the operation does not declare. The operation blocks name the exact `TryGet…` methods and the HTTP status each maps to.
- **Case B — raw error.** `TError` is `RawError` (`src/DoiT/Core/ErrorResponse/RawError.cs`, namespace `DoiT.Core.ErrorResponse`): `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`.

⚠ Each of the three lives in its own namespace. `src/DoiT/Core/` holds several namespaces, so a catch block naming `ApiException<T>`, a typed `{Operation}Error` and `RawError` together needs a `using` for each.

`ApiException<TError>` is one leaf of the `SdkException` family (`src/DoiT/Core/Exceptions/SdkException.cs`): a request that produced no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match its declared type as `ResponseDeserializationException`, and a required credential that is not configured, or one that could not be applied, as `AuthSchemeException`. Every one of them names the failed call. The full table is in [README → Error Handling](README.md#error-handling).

Core error types (`src/DoiT/Core/ErrorResponse/`) — public members with their **declared types**, verbatim from source:

| Type | Public members | Source |
| --- | --- | --- |
| `ApiError` — abstract base of the 250 typed error classes in `src/DoiT/Errors/` | `TryGetRawError([NotNullWhen(true)] out RawError? error): bool` | `src/DoiT/Core/ErrorResponse/ApiError.cs` |
| `RawError` | `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?` | `src/DoiT/Core/ErrorResponse/RawError.cs` |

Every accessor over a reference-type payload, on a typed error and on a `OneOf`/`AnyOf` union alike, is `[NotNullWhen(true)] out T?`: read the value inside the `if`, where the compiler has narrowed it; a value-type payload (`long`, `JsonElement`) stays a bare `out`.

Typed-error payload shapes (the `out` types in each operation page's error-accessor cells) are ordinary records/unions — no special handling. The operation's **Type sources** table gives the file that declares each one; read field names, declared types, and JSON wire names there, as for any other model.

```csharp
try
{
    var response = await client.AccountTeam.ListAccountTeam();
}
catch (ApiException<ListAccountTeamError> ex)
{
    // Case A — typed error
    if (ex.Error.TryGetError(out var error))
    {
        // Handle 400, 401, 403
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

**No-throw (`…Result`) variants: absent across this SDK** — every operation is throw-only. Of **250 operations**, **250 are Case A (typed)** and **0 are Case B (raw)**.

---

## Operations — by controller (48 groups, 250 operations)

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
| `AccountTeam` | 1 | [map/operations/AccountTeam.md](map/operations/AccountTeam.md) |
| `Alerts` | 6 | [map/operations/Alerts.md](map/operations/Alerts.md) |
| `Allocations` | 5 | [map/operations/Allocations.md](map/operations/Allocations.md) |
| `Annotations` | 5 | [map/operations/Annotations.md](map/operations/Annotations.md) |
| `Anomalies` | 4 | [map/operations/Anomalies.md](map/operations/Anomalies.md) |
| `Assets` | 4 | [map/operations/Assets.md](map/operations/Assets.md) |
| `Auth` | 1 | [map/operations/Auth.md](map/operations/Auth.md) |
| `Ava` | 4 | [map/operations/Ava.md](map/operations/Ava.md) |
| `BillingExplainerApi` | 2 | [map/operations/BillingExplainerApi.md](map/operations/BillingExplainerApi.md) |
| `BillingTransfer` | 8 | [map/operations/BillingTransfer.md](map/operations/BillingTransfer.md) |
| `BudgetSuggestions` | 3 | [map/operations/BudgetSuggestions.md](map/operations/BudgetSuggestions.md) |
| `Budgets` | 5 | [map/operations/Budgets.md](map/operations/Budgets.md) |
| `CloudConnect` | 5 | [map/operations/CloudConnect.md](map/operations/CloudConnect.md) |
| `CloudDiagrams` | 12 | [map/operations/CloudDiagrams.md](map/operations/CloudDiagrams.md) |
| `CloudIncidents` | 2 | [map/operations/CloudIncidents.md](map/operations/CloudIncidents.md) |
| `CloudFlowApi` | 13 | [map/operations/CloudFlowApi.md](map/operations/CloudFlowApi.md) |
| `CommitmentManager` | 2 | [map/operations/CommitmentManager.md](map/operations/CommitmentManager.md) |
| `ComposerInsightsBeta` | 2 | [map/operations/ComposerInsightsBeta.md](map/operations/ComposerInsightsBeta.md) |
| `Connections` | 5 | [map/operations/Connections.md](map/operations/Connections.md) |
| `ContractTemplates` | 6 | [map/operations/ContractTemplates.md](map/operations/ContractTemplates.md) |
| `Contracts` | 6 | [map/operations/Contracts.md](map/operations/Contracts.md) |
| `CustomerGroups` | 11 | [map/operations/CustomerGroups.md](map/operations/CustomerGroups.md) |
| `Customers` | 2 | [map/operations/Customers.md](map/operations/Customers.md) |
| `DataHub` | 11 | [map/operations/DataHub.md](map/operations/DataHub.md) |
| `Dimensions` | 2 | [map/operations/Dimensions.md](map/operations/Dimensions.md) |
| `Folders` | 5 | [map/operations/Folders.md](map/operations/Folders.md) |
| `GeographicAccess` | 12 | [map/operations/GeographicAccess.md](map/operations/GeographicAccess.md) |
| `Insights` | 9 | [map/operations/Insights.md](map/operations/Insights.md) |
| `Invoices` | 2 | [map/operations/Invoices.md](map/operations/Invoices.md) |
| `Labels` | 7 | [map/operations/Labels.md](map/operations/Labels.md) |
| `Organizations` | 1 | [map/operations/Organizations.md](map/operations/Organizations.md) |
| `PerfectScaleForCommitmentsAws` | 10 | [map/operations/PerfectScaleForCommitmentsAws.md](map/operations/PerfectScaleForCommitmentsAws.md) |
| `PerfectScaleForCommitmentsGcp` | 8 | [map/operations/PerfectScaleForCommitmentsGcp.md](map/operations/PerfectScaleForCommitmentsGcp.md) |
| `PerfectScaleForCommitmentsGeneral` | 2 | [map/operations/PerfectScaleForCommitmentsGeneral.md](map/operations/PerfectScaleForCommitmentsGeneral.md) |
| `Platforms` | 1 | [map/operations/Platforms.md](map/operations/Platforms.md) |
| `Products` | 1 | [map/operations/Products.md](map/operations/Products.md) |
| `Reports` | 12 | [map/operations/Reports.md](map/operations/Reports.md) |
| `Roles` | 5 | [map/operations/Roles.md](map/operations/Roles.md) |
| `ServiceAccounts` | 10 | [map/operations/ServiceAccounts.md](map/operations/ServiceAccounts.md) |
| `ServiceQuotas` | 1 | [map/operations/ServiceQuotas.md](map/operations/ServiceQuotas.md) |
| `Settings` | 7 | [map/operations/Settings.md](map/operations/Settings.md) |
| `SharedPayers` | 4 | [map/operations/SharedPayers.md](map/operations/SharedPayers.md) |
| `Sharing` | 2 | [map/operations/Sharing.md](map/operations/Sharing.md) |
| `Signup` | 5 | [map/operations/Signup.md](map/operations/Signup.md) |
| `SupportRequests` | 9 | [map/operations/SupportRequests.md](map/operations/SupportRequests.md) |
| `Templates` | 2 | [map/operations/Templates.md](map/operations/Templates.md) |
| `Users` | 6 | [map/operations/Users.md](map/operations/Users.md) |
| `WidgetsBeta` | 2 | [map/operations/WidgetsBeta.md](map/operations/WidgetsBeta.md) |

---

## Models — where they live, how to build them

**Shapes live only in the source.** Every file under `src/DoiT/Models/`, `src/DoiT/Errors/` and `src/DoiT/Requests/` declares exactly one public type, named after the file, and no two share a name — so a type name *is* its path. Take it from the operation's **Type sources** table, or build it from the kind's directory below. Never grep for a type.

| Group | Count | Directory (file = `<TypeName>.cs`) |
| --- | --- | --- |
| Records (plain `record` data models) | 531 | `src/DoiT/Models/` |
| Unions (`OneOf`) — variant factories + `TryGet…` + `Match` | 2 | `src/DoiT/Models/OneOf/` |
| Unions (`AnyOf`) — variant factories + `TryGet…` + `Match` | 3 | `src/DoiT/Models/AnyOf/` |
| Enums (`OpenStringEnum<T>` / `OpenIntEnum<T>`) — C# member names + wire values | 220 | `src/DoiT/Models/Enums/` |
| Typed error classes (`: ApiError`, one per Case A operation) | 250 | `src/DoiT/Errors/` |
| Request records (one per operation that takes input; never serialized) | 239 | `src/DoiT/Requests/` — a controller's records sit in a folder named after it (an operation with several tags is filed under the first tag it declares) |

Conventions: records are immutable, `init`-only; `required` properties must be set in the object initializer; `T?` is optional. A field's wire name is its `[JsonPropertyName]` and often differs from the C# name (`AmountInCents` ↔ `amount_in_cents`) — read it off the property, don't derive it. `OneOf`/`AnyOf` unions wrap `Optional<T>` variants — build via static factory or implicit conversion, read one variant via `TryGet…(out …)` or branch over all of them with the generated `Match`, which takes one `on{Variant}` handler per variant in declaration order and then `otherwise`, which receives the raw `JsonElement` of a value the SDK could not place: unions are open on read, so an unrecognised discriminator value or a body no variant accepts lands in `TryGetUnknown(out JsonElement)` and re-serializes verbatim; pass handlers by name, and treat an added or moved variant as a breaking change; `AllOf` compositions are not unions — every constituent is a `required` property, so set them all, and those constituent properties carry no `[JsonPropertyName]` and have no wire name of their own, because the generated converter flattens each constituent's own fields directly into the one parent JSON object. Enums are **not** C# enums — use the static members, whose names are PascalCase even when the wire value isn't (`CollectionMethod.Invoice`, not `.invoice`); there is no public factory, so resolve a raw value with `TryGetKnownValue` and branch with the generated `Match`, whose `otherwise` arm receives any value the SDK does not declare.

Namespaces by content type (add `using` accordingly):

| Contents | Namespace |
| --- | --- |
| Client & options (root) | `DoiT` |
| Operation controllers (`src/DoiT/Api/`) | `DoiT.Api` |
| Records (`src/DoiT/Models/`) | `DoiT.Models` |
| Enums (`src/DoiT/Models/Enums/`) | `DoiT.Models.Enums` |
| OneOf unions (`src/DoiT/Models/OneOf/`) | `DoiT.Models.OneOf` |
| AnyOf unions (`src/DoiT/Models/AnyOf/`) | `DoiT.Models.AnyOf` |
| Error classes (`src/DoiT/Errors/`) | `DoiT.Errors` |
| Request records (`src/DoiT/Requests/`) | `DoiT.Requests` — plus `.<Controller>` for a controller's records (an operation with several tags is filed under the first tag it declares) |

---

## Servers & auth

**API key (header `Authorization`).** Set `options.ApiKey = "<api_key>"`, or `options.ApiKeyProvider` to a delegate asked on every request; sent as the `Authorization` request header. Use the "Bearer <API_KEY>" format or sign in for autofill

**API key (header `X-Tenant-Id`).** Set `options.TenantId = "<api_key>"`, or `options.TenantIdProvider` to a delegate asked on every request; sent as the `X-Tenant-Id` request header. Customer (tenant) ID for the request. Separate from your API token: always authenticate with `Authorization: Bearer <token>` (personal or service account). See [Get Started](https://developer.doit.com/docs/start). Omit when your token is scoped to a single customer (resolved automatically). A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.

**OAuth2 (authorization code).** Set `options.Oauth2` with client id, redirect URI and a `PromptForAuthorizationCode` callback; authorization at `https://console.doit.com/sign-in/oauth`, tokens from `https://console.doit.com/api/auth/token`.

Operation blocks name their credential in an **Auth** bullet; an operation whose spec declares no scheme carries no such bullet.

- `AND` — every credential listed must be configured; the call fails before anything is sent, naming each one that is not.
- `OR` — the first configured credential that applies is sent, in the order listed; a configured one that fails falls through to the next; when none is configured the call fails before anything is sent, naming all of them.
- `OR anonymous` — the operation accepts anonymous callers: it is authenticated when a whole alternative listed before it is configured (every credential in an AND group), and sent without credentials otherwise.
- `(scopes: …)` — the OAuth2 scopes the operation's token is requested with; a client-credentials scheme mints one token per scope set.

A required credential you never configured fails the call with `AuthSchemeException` before anything is sent, so a `401` on an operation that requires a credential means the server rejected the one that was sent. A credential option left `null` is read from an environment variable when the client is constructed; the README's **Credentials from environment variables** table names them. A value set in code always wins, including the placeholder assignments in the **Getting a client** sample; delete the line for any credential you supply through an environment variable.

**Environments.** `options.Environment` selects the target environment (`src/DoiT/Servers/ServerEnvironment.cs`):

| Environment | Value | Hosting |
| --- | --- | --- |
| `ServerEnvironment.Production` *(default)* | `production` | — |

**3 server groups.** Base-URL templates and override points (`options.Server.…`):

| Group | `Production` base URL | Override point |
| --- | --- | --- |
| `Default` | `https://api.doit.com` | `options.Server.Default.Production.BaseUrl` |
| `AuthServer` | `https://console.doit.com/sign-in` | `options.Server.AuthServer.Production.BaseUrl` |
| `AccessTokenServer` | `https://console.doit.com/api/auth` | `options.Server.AccessTokenServer.Production.BaseUrl` |

Retry/resilience is configurable via `options.Retry` (`RetryOptions`, backed by Polly).

