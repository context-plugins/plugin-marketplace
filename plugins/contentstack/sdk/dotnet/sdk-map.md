<!-- Generated file — do not edit; regenerated with the SDK. -->

# SDK map — Contentstack (.NET)

> A generated table of contents for this SDK. Consult this map and its sub-pages to learn signatures, error types, and server/auth wiring **by lookup**. Model shapes and enum values are *not* duplicated here — the map names the file declaring each type; read the shape there. The compiler is the backstop: a wrong name fails to build.

|  |  |
| --- | --- |
| SDK display name | Contentstack |
| Root namespace | `Contentstack` |
| Target framework | `netstandard2.0` (C# `LangVersion 14`, `Nullable enable`) |
| API spec version | `v1` |
| Generator | APIMatic |

Staleness check: the API spec version above changes when the SDK is regenerated from a new spec. If a lookup here fails to compile, trust the compiler and re-read the source file named in the row.

All `Source` paths on this map and its sub-pages are relative to the **SDK root** — the directory holding this file — never to the page that carries them; the project file is `src/Contentstack/Contentstack.csproj`. Open them as-is from the SDK root, from any page; if the SDK sits under a subdirectory of a larger repo, prefix that subdirectory.

---

## Getting a client

```csharp
var httpClient = new HttpClient();
// TODO: configure more client options here
var options = new ContentstackClientOptions
{
    BearerAuth = "YOUR_BEARER_TOKEN",
    AuthtokenAuth = "YOUR_API_KEY",
    ApiKey = "YOUR_API_KEY",
    DeliveryToken = "YOUR_API_KEY",
    ManagementTokenAuth = "YOUR_API_KEY",
    Environment = ServerEnvironment.Production,
};
var client = new ContentstackClient(httpClient, options);
```

DI alternative (`services.AddContentstackClient`):

```csharp
services.AddContentstackClient(options =>
{
    options.BearerAuth = "YOUR_BEARER_TOKEN";
    options.AuthtokenAuth = "YOUR_API_KEY";
    options.ApiKey = "YOUR_API_KEY";
    options.DeliveryToken = "YOUR_API_KEY";
    options.ManagementTokenAuth = "YOUR_API_KEY";
    options.Environment = ServerEnvironment.Production;
    // TODO: configure more client options here
});
```

Every API group is a property on the client (e.g. `client.ScimUsers`). Source: `src/Contentstack/ContentstackClient.cs`. The only constructor is `ContentstackClient(HttpClient httpClient, ContentstackClientOptions options)`.

All `ContentstackClientOptions` properties (source: `src/Contentstack/ContentstackClientOptions.cs`):

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
| `AuthtokenAuth` | `string?` |
| `AuthtokenAuthProvider` | `CredentialProvider<string>?` |
| `ApiKey` | `string?` |
| `ApiKeyProvider` | `CredentialProvider<string>?` |
| `DeliveryToken` | `string?` |
| `DeliveryTokenProvider` | `CredentialProvider<string>?` |
| `ManagementTokenAuth` | `string?` |
| `ManagementTokenAuthProvider` | `CredentialProvider<string>?` |

`ServerEnvironment` (source: `src/Contentstack/Servers/ServerEnvironment.cs`, namespace `Contentstack.Servers`)

`RetryOptions` members (namespace `Contentstack.Core.Configuration` — add `using Contentstack.Core.Configuration;`; source: `src/Contentstack/Core/Configuration/RetryOptions.cs`; all members are `required`, so build a full instance or start from `RetryOptions.Default()`):

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

Operations are **throw-based**. On an error status the SDK throws `ApiException<TError>` (`src/Contentstack/Core/Exceptions/ApiException.cs`, namespace `Contentstack.Core.Exceptions`) exposing `.Error` of type `TError` beside the `StatusCode`, `Headers` and `ContentType` of the response. There are two cases:

- **Case A — typed error.** `TError` is a generated `…Error : ApiError` class (namespace `Contentstack.Errors`) with status-specific `TryGet…(out …)` accessors (each returns `true` when that shape is present) plus the inherited `TryGetRawError([NotNullWhen(true)] out RawError? error)` fallback, and an exhaustive `Match` pair — `Match<TResult>(Func<T, TResult> on{Arm}…, Func<RawError, TResult> otherwise)` and its `Action` twin — with one `on…` arm per accessor, in the ordinal order of their names, and a required `otherwise` that receives the `RawError` of a status the operation does not declare. The operation blocks name the exact `TryGet…` methods and the HTTP status each maps to.
- **Case B — raw error.** `TError` is `RawError` (`src/Contentstack/Core/ErrorResponse/RawError.cs`, namespace `Contentstack.Core.ErrorResponse`): `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`.

⚠ Each of the three lives in its own namespace. `src/Contentstack/Core/` holds several namespaces, so a catch block naming `ApiException<T>`, a typed `{Operation}Error` and `RawError` together needs a `using` for each.

`ApiException<TError>` is one leaf of the `SdkException` family (`src/Contentstack/Core/Exceptions/SdkException.cs`): a request that produced no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match its declared type as `ResponseDeserializationException`, and a required credential that is not configured, or one that could not be applied, as `AuthSchemeException`. Every one of them names the failed call. The full table is in [README → Error Handling](README.md#error-handling).

Core error types (`src/Contentstack/Core/ErrorResponse/`) — public members with their **declared types**, verbatim from source:

| Type | Public members | Source |
| --- | --- | --- |
| `ApiError` — abstract base of the 112 typed error classes in `src/Contentstack/Errors/` | `TryGetRawError([NotNullWhen(true)] out RawError? error): bool` | `src/Contentstack/Core/ErrorResponse/ApiError.cs` |
| `RawError` | `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?` | `src/Contentstack/Core/ErrorResponse/RawError.cs` |

Every accessor over a reference-type payload, on a typed error and on a `OneOf`/`AnyOf` union alike, is `[NotNullWhen(true)] out T?`: read the value inside the `if`, where the compiler has narrowed it; a value-type payload (`long`, `JsonElement`) stays a bare `out`.

Typed-error payload shapes (the `out` types in each operation page's error-accessor cells) are ordinary records/unions — no special handling. The operation's **Type sources** table gives the file that declares each one; read field names, declared types, and JSON wire names there, as for any other model.

```csharp
try
{
    var response = await client.ScimUsers.CreateScimUser(new CreateScimUserRequest
    {
        OrganizationUid = "some example string",
        Body = new ScimUser(),
    });
}
catch (ApiException<CreateScimUserError> ex)
{
    // Case A — typed error
    if (ex.Error.TryGetScimError(out var error))
    {
        // Handle 400, 401, 409
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

**No-throw (`…Result`) variants: absent across this SDK** — every operation is throw-only. Of **114 operations**, **112 are Case A (typed)** and **2 are Case B (raw)**.

---

## Operations — by controller (33 groups, 114 operations)

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
| `ScimUsers` | 5 | [map/operations/ScimUsers.md](map/operations/ScimUsers.md) |
| `Accounts` | 1 | [map/operations/Accounts.md](map/operations/Accounts.md) |
| `Analytics` | 1 | [map/operations/Analytics.md](map/operations/Analytics.md) |
| `Assets` | 3 | [map/operations/Assets.md](map/operations/Assets.md) |
| `AttributesApi` | 4 | [map/operations/AttributesApi.md](map/operations/AttributesApi.md) |
| `Audiences` | 4 | [map/operations/Audiences.md](map/operations/Audiences.md) |
| `AuditLogs` | 1 | [map/operations/AuditLogs.md](map/operations/AuditLogs.md) |
| `Automations` | 4 | [map/operations/Automations.md](map/operations/Automations.md) |
| `BrandKits` | 5 | [map/operations/BrandKits.md](map/operations/BrandKits.md) |
| `ContentTypes` | 5 | [map/operations/ContentTypes.md](map/operations/ContentTypes.md) |
| `Deployments` | 5 | [map/operations/Deployments.md](map/operations/Deployments.md) |
| `Entries` | 7 | [map/operations/Entries.md](map/operations/Entries.md) |
| `EntryVariants` | 2 | [map/operations/EntryVariants.md](map/operations/EntryVariants.md) |
| `Environments` | 7 | [map/operations/Environments.md](map/operations/Environments.md) |
| `Events` | 2 | [map/operations/Events.md](map/operations/Events.md) |
| `ExecutionLogs` | 2 | [map/operations/ExecutionLogs.md](map/operations/ExecutionLogs.md) |
| `Experiences` | 7 | [map/operations/Experiences.md](map/operations/Experiences.md) |
| `FileUploads` | 1 | [map/operations/FileUploads.md](map/operations/FileUploads.md) |
| `Geolocation` | 3 | [map/operations/Geolocation.md](map/operations/Geolocation.md) |
| `GlobalFields` | 2 | [map/operations/GlobalFields.md](map/operations/GlobalFields.md) |
| `LlmConfiguration` | 2 | [map/operations/LlmConfiguration.md](map/operations/LlmConfiguration.md) |
| `ManifestApi` | 1 | [map/operations/ManifestApi.md](map/operations/ManifestApi.md) |
| `Organizations` | 3 | [map/operations/Organizations.md](map/operations/Organizations.md) |
| `Projects` | 10 | [map/operations/Projects.md](map/operations/Projects.md) |
| `ScimGroups` | 6 | [map/operations/ScimGroups.md](map/operations/ScimGroups.md) |
| `ScimSchemaDiscovery` | 2 | [map/operations/ScimSchemaDiscovery.md](map/operations/ScimSchemaDiscovery.md) |
| `Stacks` | 5 | [map/operations/Stacks.md](map/operations/Stacks.md) |
| `Synchronization` | 1 | [map/operations/Synchronization.md](map/operations/Synchronization.md) |
| `UserAttributes` | 2 | [map/operations/UserAttributes.md](map/operations/UserAttributes.md) |
| `UserSessions` | 2 | [map/operations/UserSessions.md](map/operations/UserSessions.md) |
| `Users` | 2 | [map/operations/Users.md](map/operations/Users.md) |
| `Variables` | 2 | [map/operations/Variables.md](map/operations/Variables.md) |
| `VoiceProfiles` | 5 | [map/operations/VoiceProfiles.md](map/operations/VoiceProfiles.md) |

---

## Models — where they live, how to build them

**Shapes live only in the source.** Every file under `src/Contentstack/Models/`, `src/Contentstack/Errors/` and `src/Contentstack/Requests/` declares exactly one public type, named after the file, and no two share a name — so a type name *is* its path. Take it from the operation's **Type sources** table, or build it from the kind's directory below. Never grep for a type.

| Group | Count | Directory (file = `<TypeName>.cs`) |
| --- | --- | --- |
| Records (plain `record` data models) | 120 | `src/Contentstack/Models/` |
| Enums (`OpenStringEnum<T>` / `OpenIntEnum<T>`) — C# member names + wire values | 13 | `src/Contentstack/Models/Enums/` |
| Typed error classes (`: ApiError`, one per Case A operation) | 112 | `src/Contentstack/Errors/` |
| Request records (one per operation that takes input; never serialized) | 105 | `src/Contentstack/Requests/` — a controller's records sit in a folder named after it (an operation with several tags is filed under the first tag it declares) |

Conventions: records are immutable, `init`-only; `required` properties must be set in the object initializer; `T?` is optional. A field's wire name is its `[JsonPropertyName]` and often differs from the C# name (`AmountInCents` ↔ `amount_in_cents`) — read it off the property, don't derive it. `OneOf`/`AnyOf` unions wrap `Optional<T>` variants — build via static factory or implicit conversion, read one variant via `TryGet…(out …)` or branch over all of them with the generated `Match`, which takes one `on{Variant}` handler per variant in declaration order and then `otherwise`, which receives the raw `JsonElement` of a value the SDK could not place: unions are open on read, so an unrecognised discriminator value or a body no variant accepts lands in `TryGetUnknown(out JsonElement)` and re-serializes verbatim; pass handlers by name, and treat an added or moved variant as a breaking change; `AllOf` compositions are not unions — every constituent is a `required` property, so set them all, and those constituent properties carry no `[JsonPropertyName]` and have no wire name of their own, because the generated converter flattens each constituent's own fields directly into the one parent JSON object. Enums are **not** C# enums — use the static members, whose names are PascalCase even when the wire value isn't (`CollectionMethod.Invoice`, not `.invoice`); there is no public factory, so resolve a raw value with `TryGetKnownValue` and branch with the generated `Match`, whose `otherwise` arm receives any value the SDK does not declare.

Namespaces by content type (add `using` accordingly):

| Contents | Namespace |
| --- | --- |
| Client & options (root) | `Contentstack` |
| Operation controllers (`src/Contentstack/Api/`) | `Contentstack.Api` |
| Records (`src/Contentstack/Models/`) | `Contentstack.Models` |
| Enums (`src/Contentstack/Models/Enums/`) | `Contentstack.Models.Enums` |
| Error classes (`src/Contentstack/Errors/`) | `Contentstack.Errors` |
| Request records (`src/Contentstack/Requests/`) | `Contentstack.Requests` — plus `.<Controller>` for a controller's records (an operation with several tags is filed under the first tag it declares) |

---

## Servers & auth

**Bearer token.** Set `options.BearerAuth = "<token>"`, or `options.BearerAuthProvider` to a delegate asked on every request. OAuth 2.0 Bearer token with launch:manage or launch.projects scopes., OAuth 2.0 Bearer token with appropriate Automate scopes., OAuth 2.0 Bearer token with personalize:manage or personalize:read scope., OAuth 2.0 Bearer token with personalize:manage or personalize:read scope., OAuth 2.0 Bearer token with appropriate Automate scopes., OAuth 2.0 Bearer token with appropriate Automate scopes., OAuth 2.0 Bearer token with brand-kits:manage scope., OAuth 2.0 Bearer token with launch:manage or launch.projects scopes., OAuth 2.0 Bearer token with launch:manage or launch.projects scopes., OAuth 2.0 Bearer token with personalize:manage or personalize:read scope., OAuth 2.0 Bearer token with appropriate Automate scopes., OAuth 2.0 Bearer token with personalize:manage or personalize:read scope., OAuth 2.0 Bearer token with launch:manage or launch.projects scopes., OAuth 2.0 Bearer token with personalize:manage or personalize:read scope., OAuth 2.0 Bearer token with brand-kits:manage scope., OAuth 2.0 Bearer token with appropriate Automate scopes., Bearer token from the Identity Provider client for SCIM authentication., Bearer token from the Identity Provider client for SCIM authentication., Bearer token from the Identity Provider client for SCIM authentication., OAuth 2.0 Bearer token with appropriate Automate scopes., OAuth 2.0 Bearer token with brand-kits:manage scope.

**API key (header `authtoken`).** Set `options.AuthtokenAuth = "<api_key>"`, or `options.AuthtokenAuthProvider` to a delegate asked on every request; sent as the `authtoken` request header. Contentstack user authtoken for session-based authentication., User session token obtained from the login endpoint., Contentstack user authtoken for session-based authentication., Contentstack user authtoken for session-based authentication., Contentstack user authtoken for session-based authentication., Contentstack user authtoken for session-based authentication., Contentstack user authtoken for session-based authentication., User session token obtained from the login endpoint., Contentstack user authtoken for session-based authentication., User session token obtained from the login endpoint., User session token obtained from the login endpoint., Contentstack user authtoken for session-based authentication., Contentstack user authtoken for session-based authentication., Contentstack user authtoken for session-based authentication., Contentstack user authtoken for session-based authentication., Contentstack user authtoken for session-based authentication., Contentstack user authtoken for session-based authentication., User session token obtained from the login endpoint., Contentstack user authtoken for session-based authentication., User session token obtained from the login endpoint., User session token obtained from the login endpoint., User session token obtained from the login endpoint., Contentstack user authtoken for session-based authentication., Contentstack user authtoken for session-based authentication.

**API key (header `api_key`).** Set `options.ApiKey = "<api_key>"`, or `options.ApiKeyProvider` to a delegate asked on every request; sent as the `api_key` request header. The API key for the Contentstack stack.

**API key (header `access_token`).** Set `options.DeliveryToken = "<api_key>"`, or `options.DeliveryTokenProvider` to a delegate asked on every request; sent as the `access_token` request header. The delivery token granting read access to the stack environment.

**API key (header `authorization`).** Set `options.ManagementTokenAuth = "<api_key>"`, or `options.ManagementTokenAuthProvider` to a delegate asked on every request; sent as the `authorization` request header. Management token in the format "Bearer {management_token}" for server-to-server authentication without user sessions.

Operation blocks name their credential in an **Auth** bullet; an operation whose spec declares no scheme carries no such bullet.

- `AND` — every credential listed must be configured; the call fails before anything is sent, naming each one that is not.
- `OR` — the first configured credential that applies is sent, in the order listed; a configured one that fails falls through to the next; when none is configured the call fails before anything is sent, naming all of them.
- `OR anonymous` — the operation accepts anonymous callers: it is authenticated when a whole alternative listed before it is configured (every credential in an AND group), and sent without credentials otherwise.
- `(scopes: …)` — the OAuth2 scopes the operation's token is requested with; a client-credentials scheme mints one token per scope set.

A required credential you never configured fails the call with `AuthSchemeException` before anything is sent, so a `401` on an operation that requires a credential means the server rejected the one that was sent. A credential option left `null` is read from an environment variable when the client is constructed; the README's **Credentials from environment variables** table names them. A value set in code always wins, including the placeholder assignments in the **Getting a client** sample; delete the line for any credential you supply through an environment variable.

**Environments.** `options.Environment` selects the target environment (`src/Contentstack/Servers/ServerEnvironment.cs`):

| Environment | Value | Hosting |
| --- | --- | --- |
| `ServerEnvironment.Production` *(default)* | `production` | AWS North America Production Server |
| `ServerEnvironment.Environment2` | `environment2` | AWS Europe Production Server |
| `ServerEnvironment.Environment3` | `environment3` | AWS Australia Production Server |
| `ServerEnvironment.Environment4` | `environment4` | Azure North America Production Server, AWS North America Production Server, Azure North America Production Server, Azure North America Production Server, Azure North America Production Server, AWS North America Production Server, Azure North America Production Server, AWS North America Production Server, Azure North America Production Server, Azure North America Production Server, Azure North America Production Server, Azure North America Production Server, Azure North America Production Server, Azure North America Production Server, Azure North America Production Server, Azure North America Production Server, AWS North America Production Server, Azure North America Production Server, Azure North America Production Server, Azure North America Production Server, Azure North America Production Server, Azure North America Production Server, Azure North America Production Server, Azure North America Production Server, Azure North America Production Server |
| `ServerEnvironment.Environment5` | `environment5` | Azure Europe Production Server, AWS Europe Production Server, Azure Europe Production Server, Azure Europe Production Server, Azure Europe Production Server, AWS Europe Production Server, Azure Europe Production Server, AWS Europe Production Server, Azure Europe Production Server, Azure Europe Production Server, Azure Europe Production Server, Azure Europe Production Server, Azure Europe Production Server, Azure Europe Production Server, Azure Europe Production Server, Azure Europe Production Server, AWS Europe Production Server, Azure Europe Production Server, Azure Europe Production Server, Azure Europe Production Server, Azure Europe Production Server, Azure Europe Production Server, Azure Europe Production Server, Azure Europe Production Server, Azure Europe Production Server |
| `ServerEnvironment.Environment6` | `environment6` | AWS Australia Production Server, GCP North America Production Server, AWS Australia Production Server, AWS Australia Production Server, AWS North America Production Server, AWS North America Production Server, GCP North America Production Server, AWS Australia Production Server, GCP North America Production Server, GCP North America Production Server, GCP North America Production Server, GCP North America Production Server |
| `ServerEnvironment.Environment7` | `environment7` | Azure North America Production Server, GCP Europe Production Server, Azure North America Production Server, Azure North America Production Server, AWS Europe Production Server, AWS Europe Production Server, GCP Europe Production Server, Azure North America Production Server, GCP Europe Production Server, GCP Europe Production Server, GCP Europe Production Server, GCP Europe Production Server |
| `ServerEnvironment.Environment8` | `environment8` | Azure Europe Production Server, AWS Australia Production Server, AWS Australia Production Server, Azure Europe Production Server |
| `ServerEnvironment.Environment9` | `environment9` | Azure North America Production Server |
| `ServerEnvironment.Environment10` | `environment10` | Azure Europe Production Server |

**9 server groups.** Base-URL templates and override points (`options.Server.…`):

| Group | `Production` base URL | `Environment2` base URL | `Environment3` base URL | `Environment4` base URL | `Environment5` base URL | `Environment6` base URL | `Environment7` base URL | `Environment8` base URL | `Environment9` base URL | `Environment10` base URL | Override point |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `Default` | `https://launch-api.contentstack.com` | `https://eu-launch-api.contentstack.com` | `https://au-launch-api.contentstack.com` | `https://azure-na-launch-api.contentstack.com` | `https://azure-eu-launch-api.contentstack.com` | `https://launch-api.contentstack.com` | `https://launch-api.contentstack.com` | `https://launch-api.contentstack.com` | `https://launch-api.contentstack.com` | `https://launch-api.contentstack.com` | `options.Server.Default.Production.BaseUrl` (and the other environments) |
| `DefaultContentstackAutomateManagementAccountsApi` | `https://automations-api.contentstack.com` | `https://eu-automations-api.contentstack.com` | `https://au-automations-api.contentstack.com` | `https://automations-api.contentstack.com` | `https://automations-api.contentstack.com` | `https://automations-api.contentstack.com` | `https://automations-api.contentstack.com` | `https://automations-api.contentstack.com` | `https://automations-api.contentstack.com` | `https://automations-api.contentstack.com` | `options.Server.DefaultContentstackAutomateManagementAccountsApi.Production.BaseUrl` (and the other environments) |
| `DefaultContentstackAssetsApi` | `https://cdn.contentstack.io/v3` | `https://eu-cdn.contentstack.com/v3` | `https://au-cdn.contentstack.com/v3` | `https://api.contentstack.io/v3` | `https://eu-api.contentstack.com/v3` | `https://au-api.contentstack.com/v3` | `https://azure-na-api.contentstack.com/v3` | `https://azure-eu-api.contentstack.com/v3` | `https://cdn.contentstack.io/v3` | `https://cdn.contentstack.io/v3` | `options.Server.DefaultContentstackAssetsApi.Production.BaseUrl` (and the other environments) |
| `DefaultContentstackPersonalizeManagementAttributesApi` | `https://personalize-api.contentstack.com` | `https://eu-personalize-api.contentstack.com` | `https://au-personalize-api.contentstack.com` | `https://azure-na-personalize-api.contentstack.com` | `https://azure-eu-personalize-api.contentstack.com` | `https://personalize-api.contentstack.com` | `https://personalize-api.contentstack.com` | `https://personalize-api.contentstack.com` | `https://personalize-api.contentstack.com` | `https://personalize-api.contentstack.com` | `options.Server.DefaultContentstackPersonalizeManagementAttributesApi.Production.BaseUrl` (and the other environments) |
| `DefaultContentstackBrandKitManagementBrandKitsApi` | `https://brand-kits-api.contentstack.com` | `https://eu-brand-kits-api.contentstack.com` | `https://au-na-brand-kits-api.contentstack.com` | `https://azure-na-brand-kits-api.contentstack.com` | `https://azure-eu-brand-kits-api.contentstack.com` | `https://gcp-na-brand-kits-api.contentstack.com` | `https://gcp-eu-brand-kits-api.contentstack.com` | `https://brand-kits-api.contentstack.com` | `https://brand-kits-api.contentstack.com` | `https://brand-kits-api.contentstack.com` | `options.Server.DefaultContentstackBrandKitManagementBrandKitsApi.Production.BaseUrl` (and the other environments) |
| `DefaultContentstackEnvironmentsApi` | `https://api.contentstack.io/v3` | `https://eu-api.contentstack.com/v3` | `https://au-api.contentstack.com/v3` | `https://azure-na-api.contentstack.com/v3` | `https://azure-eu-api.contentstack.com/v3` | `https://launch-api.contentstack.com` | `https://eu-launch-api.contentstack.com` | `https://au-launch-api.contentstack.com` | `https://azure-na-launch-api.contentstack.com` | `https://azure-eu-launch-api.contentstack.com` | `options.Server.DefaultContentstackEnvironmentsApi.Production.BaseUrl` (and the other environments) |
| `DefaultContentstackEventsApi` | `https://personalize-edge.contentstack.com` | `https://eu-personalize-edge.contentstack.com` | `https://au-personalize-edge.contentstack.com` | `https://azure-na-personalize-edge.contentstack.com` | `https://azure-eu-personalize-edge.contentstack.com` | `https://personalize-api.contentstack.com` | `https://eu-personalize-api.contentstack.com` | `https://au-personalize-api.contentstack.com` | `https://azure-na-personalize-api.contentstack.com` | `https://azure-eu-personalize-api.contentstack.com` | `options.Server.DefaultContentstackEventsApi.Production.BaseUrl` (and the other environments) |
| `DefaultContentstackProjectsApi` | `https://automations-api.contentstack.com` | `https://eu-automations-api.contentstack.com` | `https://au-automations-api.contentstack.com` | `https://launch-api.contentstack.com` | `https://eu-launch-api.contentstack.com` | `https://au-launch-api.contentstack.com` | `https://azure-na-launch-api.contentstack.com` | `https://azure-eu-launch-api.contentstack.com` | `https://automations-api.contentstack.com` | `https://automations-api.contentstack.com` | `options.Server.DefaultContentstackProjectsApi.Production.BaseUrl` (and the other environments) |
| `DefaultContentstackScimScimGroupsApi` | `https://auth-api.contentstack.com` | `https://eu-auth-api.contentstack.com` | `https://au-auth-api.contentstack.com` | `https://azure-na-auth-api.contentstack.com` | `https://azure-eu-auth-api.contentstack.com` | `https://gcp-na-auth-api.contentstack.com` | `https://gcp-eu-auth-api.contentstack.com` | `https://auth-api.contentstack.com` | `https://auth-api.contentstack.com` | `https://auth-api.contentstack.com` | `options.Server.DefaultContentstackScimScimGroupsApi.Production.BaseUrl` (and the other environments) |

Retry/resilience is configurable via `options.Retry` (`RetryOptions`, backed by Polly).

