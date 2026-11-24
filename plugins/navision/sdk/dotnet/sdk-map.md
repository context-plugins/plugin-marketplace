<!-- Generated file — do not edit; regenerated with the SDK. -->

# SDK map — Microsoft Dynamics NAV (.NET)

> A generated table of contents for this SDK. Consult this map and its sub-pages to learn signatures, error types, and server/auth wiring **by lookup**. Model shapes and enum values are *not* duplicated here — the map names the file declaring each type; read the shape there. The compiler is the backstop: a wrong name fails to build.

|  |  |
| --- | --- |
| SDK display name | Microsoft Dynamics NAV |
| Root namespace | `MicrosoftDynamicsNav` |
| Target framework | `netstandard2.0` (C# `LangVersion 14`, `Nullable enable`) |
| API spec version | `2.0` |
| Generator | APIMatic |

Staleness check: the API spec version above changes when the SDK is regenerated from a new spec. If a lookup here fails to compile, trust the compiler and re-read the source file named in the row.

All `Source` paths on this map and its sub-pages are relative to the **SDK root** — the directory holding this file — never to the page that carries them; the project file is `src/MicrosoftDynamicsNav/MicrosoftDynamicsNav.csproj`. Open them as-is from the SDK root, from any page; if the SDK sits under a subdirectory of a larger repo, prefix that subdirectory.

---

## Getting a client

```csharp
var httpClient = new HttpClient();
// TODO: configure more client options here
var options = new MicrosoftDynamicsNavClientOptions
{
    Oauth2AuthorizationCode = new OAuth2AuthorizationCodeCredentials
    {
        ClientId = "YOUR_CLIENT_ID",
        RedirectUri = "YOUR_REDIRECT_URI",
        PromptForAuthorizationCode = (authUrl, ct) => Task.FromResult(""),
    },
    Oauth2ClientCredentials = new OAuth2ClientCredentials
    {
        ClientId = "YOUR_CLIENT_ID",
        ClientSecret = "YOUR_CLIENT_SECRET",
    },
    BearerAuth = "YOUR_BEARER_TOKEN",
    Environment = ServerEnvironment.Production,
};
var client = new MicrosoftDynamicsNavClient(httpClient, options);
```

DI alternative (`services.AddMicrosoftDynamicsNavClient`):

```csharp
services.AddMicrosoftDynamicsNavClient(options =>
{
    options.Oauth2AuthorizationCode =
        new OAuth2AuthorizationCodeCredentials
        {
            ClientId = "YOUR_CLIENT_ID",
            RedirectUri = "YOUR_REDIRECT_URI",
            PromptForAuthorizationCode = (authUrl, ct) => Task.FromResult(""),
        };
    options.Oauth2ClientCredentials =
        new OAuth2ClientCredentials { ClientId = "YOUR_CLIENT_ID", ClientSecret = "YOUR_CLIENT_SECRET" };
    options.BearerAuth = "YOUR_BEARER_TOKEN";
    options.Environment = ServerEnvironment.Production;
    // TODO: configure more client options here
});
```

Every API group is a property on the client (e.g. `client.Accounts`). Source: `src/MicrosoftDynamicsNav/MicrosoftDynamicsNavClient.cs`. The only constructor is `MicrosoftDynamicsNavClient(HttpClient httpClient, MicrosoftDynamicsNavClientOptions options)`.

All `MicrosoftDynamicsNavClientOptions` properties (source: `src/MicrosoftDynamicsNav/MicrosoftDynamicsNavClientOptions.cs`):

| Property | Type |
| --- | --- |
| `Environment` | `ServerEnvironment` |
| `Retry` | `RetryOptions` |
| `Logging` | `LoggingOptions` |
| `TimeProvider` | `TimeProvider` |
| `Server` | `ServerOptions` |
| `StreamReadTimeout` | `TimeSpan?` |
| `Hooks` | `IReadOnlyList<SdkHook>` |
| `Oauth2AuthorizationCode` | `OAuth2AuthorizationCodeCredentials?` |
| `Oauth2ClientCredentials` | `OAuth2ClientCredentials?` |
| `BearerAuth` | `string?` |
| `BearerAuthProvider` | `CredentialProvider<string>?` |

`ServerEnvironment` (source: `src/MicrosoftDynamicsNav/Servers/ServerEnvironment.cs`, namespace `MicrosoftDynamicsNav.Servers`)
`OAuth2AuthorizationCodeCredentials` (source: `src/MicrosoftDynamicsNav/Core/Authentication/OAuth2/AuthorizationCode/OAuth2AuthorizationCodeCredentials.cs`, namespace `MicrosoftDynamicsNav.Core.Authentication.OAuth2.AuthorizationCode`)
`OAuth2ClientCredentials` (source: `src/MicrosoftDynamicsNav/Core/Authentication/OAuth2/ClientCredentials/OAuth2ClientCredentials.cs`, namespace `MicrosoftDynamicsNav.Core.Authentication.OAuth2.ClientCredentials`)

`RetryOptions` members (namespace `MicrosoftDynamicsNav.Core.Configuration` — add `using MicrosoftDynamicsNav.Core.Configuration;`; source: `src/MicrosoftDynamicsNav/Core/Configuration/RetryOptions.cs`; all members are `required`, so build a full instance or start from `RetryOptions.Default()`):

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

Operations are **throw-based**. On an error status the SDK throws `ApiException<TError>` (`src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs`, namespace `MicrosoftDynamicsNav.Core.Exceptions`) exposing `.Error` of type `TError` beside the `StatusCode`, `Headers` and `ContentType` of the response. There are two cases:

- **Case A — typed error.** `TError` is a generated `…Error : ApiError` class (namespace `MicrosoftDynamicsNav.Errors`) with status-specific `TryGet…(out …)` accessors (each returns `true` when that shape is present) plus the inherited `TryGetRawError([NotNullWhen(true)] out RawError? error)` fallback, and an exhaustive `Match` pair — `Match<TResult>(Func<T, TResult> on{Arm}…, Func<RawError, TResult> otherwise)` and its `Action` twin — with one `on…` arm per accessor, in the ordinal order of their names, and a required `otherwise` that receives the `RawError` of a status the operation does not declare. The operation blocks name the exact `TryGet…` methods and the HTTP status each maps to.
- **Case B — raw error.** `TError` is `RawError` (`src/MicrosoftDynamicsNav/Core/ErrorResponse/RawError.cs`, namespace `MicrosoftDynamicsNav.Core.ErrorResponse`): `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`.

⚠ Each of the three lives in its own namespace. `src/MicrosoftDynamicsNav/Core/` holds several namespaces, so a catch block naming `ApiException<T>`, a typed `{Operation}Error` and `RawError` together needs a `using` for each.

`ApiException<TError>` is one leaf of the `SdkException` family (`src/MicrosoftDynamicsNav/Core/Exceptions/SdkException.cs`): a request that produced no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match its declared type as `ResponseDeserializationException`, and a required credential that is not configured, or one that could not be applied, as `AuthSchemeException`. Every one of them names the failed call. The full table is in [README → Error Handling](README.md#error-handling).

Core error types (`src/MicrosoftDynamicsNav/Core/ErrorResponse/`) — public members with their **declared types**, verbatim from source:

| Type | Public members | Source |
| --- | --- | --- |
| `ApiError` — abstract base of the 108 typed error classes in `src/MicrosoftDynamicsNav/Errors/` | `TryGetRawError([NotNullWhen(true)] out RawError? error): bool` | `src/MicrosoftDynamicsNav/Core/ErrorResponse/ApiError.cs` |
| `RawError` | `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?` | `src/MicrosoftDynamicsNav/Core/ErrorResponse/RawError.cs` |

Every accessor over a reference-type payload, on a typed error and on a `OneOf`/`AnyOf` union alike, is `[NotNullWhen(true)] out T?`: read the value inside the `if`, where the compiler has narrowed it; a value-type payload (`long`, `JsonElement`) stays a bare `out`.

Typed-error payload shapes (the `out` types in each operation page's error-accessor cells) are ordinary records/unions — no special handling. The operation's **Type sources** table gives the file that declares each one; read field names, declared types, and JSON wire names there, as for any other model.

```csharp
try
{
    var response = await client.Accounts.GetAccount(new GetAccountRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        AccountId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
}
catch (ApiException<GetAccountError> ex)
{
    // Case A — typed error
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // Handle 401, 404
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

**No-throw (`…Result`) variants: absent across this SDK** — every operation is throw-only. Of **108 operations**, **108 are Case A (typed)** and **0 are Case B (raw)**.

---

## Operations — by controller (38 groups, 108 operations)

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
| `Accounts` | 3 | [map/operations/Accounts.md](map/operations/Accounts.md) |
| `AppManagement` | 4 | [map/operations/AppManagement.md](map/operations/AppManagement.md) |
| `AvailableApplications` | 2 | [map/operations/AvailableApplications.md](map/operations/AvailableApplications.md) |
| `Companies` | 6 | [map/operations/Companies.md](map/operations/Companies.md) |
| `ConfigurationPackages` | 5 | [map/operations/ConfigurationPackages.md](map/operations/ConfigurationPackages.md) |
| `CountriesRegions` | 1 | [map/operations/CountriesRegions.md](map/operations/CountriesRegions.md) |
| `CurrencyApi` | 1 | [map/operations/CurrencyApi.md](map/operations/CurrencyApi.md) |
| `CustomerPayments` | 1 | [map/operations/CustomerPayments.md](map/operations/CustomerPayments.md) |
| `Customers` | 5 | [map/operations/Customers.md](map/operations/Customers.md) |
| `Dimensions` | 1 | [map/operations/Dimensions.md](map/operations/Dimensions.md) |
| `Employees` | 1 | [map/operations/Employees.md](map/operations/Employees.md) |
| `EnvironmentOperations` | 2 | [map/operations/EnvironmentOperations.md](map/operations/EnvironmentOperations.md) |
| `EnvironmentSettingsApi` | 2 | [map/operations/EnvironmentSettingsApi.md](map/operations/EnvironmentSettingsApi.md) |
| `Environments` | 10 | [map/operations/Environments.md](map/operations/Environments.md) |
| `ExtensionDeploymentStatusApi` | 1 | [map/operations/ExtensionDeploymentStatusApi.md](map/operations/ExtensionDeploymentStatusApi.md) |
| `ExtensionUploadApi` | 3 | [map/operations/ExtensionUploadApi.md](map/operations/ExtensionUploadApi.md) |
| `ExtensionsApi` | 5 | [map/operations/ExtensionsApi.md](map/operations/ExtensionsApi.md) |
| `Features` | 3 | [map/operations/Features.md](map/operations/Features.md) |
| `ItemCategories` | 1 | [map/operations/ItemCategories.md](map/operations/ItemCategories.md) |
| `Items` | 5 | [map/operations/Items.md](map/operations/Items.md) |
| `Journals` | 3 | [map/operations/Journals.md](map/operations/Journals.md) |
| `Notifications` | 2 | [map/operations/Notifications.md](map/operations/Notifications.md) |
| `PaymentMethods` | 1 | [map/operations/PaymentMethods.md](map/operations/PaymentMethods.md) |
| `PaymentTerms` | 1 | [map/operations/PaymentTerms.md](map/operations/PaymentTerms.md) |
| `PermissionSets` | 3 | [map/operations/PermissionSets.md](map/operations/PermissionSets.md) |
| `Profiles` | 1 | [map/operations/Profiles.md](map/operations/Profiles.md) |
| `PurchaseInvoices` | 2 | [map/operations/PurchaseInvoices.md](map/operations/PurchaseInvoices.md) |
| `PurchaseOrders` | 6 | [map/operations/PurchaseOrders.md](map/operations/PurchaseOrders.md) |
| `SalesInvoices` | 2 | [map/operations/SalesInvoices.md](map/operations/SalesInvoices.md) |
| `SalesOrders` | 6 | [map/operations/SalesOrders.md](map/operations/SalesOrders.md) |
| `ScheduledJobs` | 1 | [map/operations/ScheduledJobs.md](map/operations/ScheduledJobs.md) |
| `SecurityGroups` | 1 | [map/operations/SecurityGroups.md](map/operations/SecurityGroups.md) |
| `Storage` | 3 | [map/operations/Storage.md](map/operations/Storage.md) |
| `SupportSettingsApi` | 1 | [map/operations/SupportSettingsApi.md](map/operations/SupportSettingsApi.md) |
| `UpdateManagement` | 2 | [map/operations/UpdateManagement.md](map/operations/UpdateManagement.md) |
| `Users` | 5 | [map/operations/Users.md](map/operations/Users.md) |
| `VendorPayments` | 1 | [map/operations/VendorPayments.md](map/operations/VendorPayments.md) |
| `Vendors` | 5 | [map/operations/Vendors.md](map/operations/Vendors.md) |

---

## Models — where they live, how to build them

**Shapes live only in the source.** Every file under `src/MicrosoftDynamicsNav/Models/`, `src/MicrosoftDynamicsNav/Errors/` and `src/MicrosoftDynamicsNav/Requests/` declares exactly one public type, named after the file, and no two share a name — so a type name *is* its path. Take it from the operation's **Type sources** table, or build it from the kind's directory below. Never grep for a type.

| Group | Count | Directory (file = `<TypeName>.cs`) |
| --- | --- | --- |
| Records (plain `record` data models) | 145 | `src/MicrosoftDynamicsNav/Models/` |
| Enums (`OpenStringEnum<T>` / `OpenIntEnum<T>`) — C# member names + wire values | 35 | `src/MicrosoftDynamicsNav/Models/Enums/` |
| Typed error classes (`: ApiError`, one per Case A operation) | 108 | `src/MicrosoftDynamicsNav/Errors/` |
| Request records (one per operation that takes input; never serialized) | 105 | `src/MicrosoftDynamicsNav/Requests/` — a controller's records sit in a folder named after it (an operation with several tags is filed under the first tag it declares) |

Conventions: records are immutable, `init`-only; `required` properties must be set in the object initializer; `T?` is optional. A field's wire name is its `[JsonPropertyName]` and often differs from the C# name (`AmountInCents` ↔ `amount_in_cents`) — read it off the property, don't derive it. `OneOf`/`AnyOf` unions wrap `Optional<T>` variants — build via static factory or implicit conversion, read one variant via `TryGet…(out …)` or branch over all of them with the generated `Match`, which takes one `on{Variant}` handler per variant in declaration order and then `otherwise`, which receives the raw `JsonElement` of a value the SDK could not place: unions are open on read, so an unrecognised discriminator value or a body no variant accepts lands in `TryGetUnknown(out JsonElement)` and re-serializes verbatim; pass handlers by name, and treat an added or moved variant as a breaking change; `AllOf` compositions are not unions — every constituent is a `required` property, so set them all, and those constituent properties carry no `[JsonPropertyName]` and have no wire name of their own, because the generated converter flattens each constituent's own fields directly into the one parent JSON object. Enums are **not** C# enums — use the static members, whose names are PascalCase even when the wire value isn't (`CollectionMethod.Invoice`, not `.invoice`); there is no public factory, so resolve a raw value with `TryGetKnownValue` and branch with the generated `Match`, whose `otherwise` arm receives any value the SDK does not declare.

Namespaces by content type (add `using` accordingly):

| Contents | Namespace |
| --- | --- |
| Client & options (root) | `MicrosoftDynamicsNav` |
| Operation controllers (`src/MicrosoftDynamicsNav/Api/`) | `MicrosoftDynamicsNav.Api` |
| Records (`src/MicrosoftDynamicsNav/Models/`) | `MicrosoftDynamicsNav.Models` |
| Enums (`src/MicrosoftDynamicsNav/Models/Enums/`) | `MicrosoftDynamicsNav.Models.Enums` |
| Error classes (`src/MicrosoftDynamicsNav/Errors/`) | `MicrosoftDynamicsNav.Errors` |
| Request records (`src/MicrosoftDynamicsNav/Requests/`) | `MicrosoftDynamicsNav.Requests` — plus `.<Controller>` for a controller's records (an operation with several tags is filed under the first tag it declares) |

---

## Servers & auth

**OAuth2 (authorization code).** Set `options.Oauth2AuthorizationCode` with client id, redirect URI and a `PromptForAuthorizationCode` callback; authorization at `https://login.microsoftonline.com/{tenantId}/oauth2/v2.0/authorize`, tokens from `https://login.microsoftonline.com/{tenantId}/oauth2/v2.0/token`. OAuth 2.0 authentication via Microsoft Entra ID

**OAuth2 (client credentials).** Set `options.Oauth2ClientCredentials` with your client id and secret; tokens are fetched from `https://login.microsoftonline.com/{tenantId}/oauth2/v2.0/token`. OAuth 2.0 authentication via Microsoft Entra ID

**Bearer token.** Set `options.BearerAuth = "<token>"`, or `options.BearerAuthProvider` to a delegate asked on every request. Bearer token obtained from Microsoft Entra ID

Operation blocks name their credential in an **Auth** bullet; an operation whose spec declares no scheme carries no such bullet.

- `AND` — every credential listed must be configured; the call fails before anything is sent, naming each one that is not.
- `OR` — the first configured credential that applies is sent, in the order listed; a configured one that fails falls through to the next; when none is configured the call fails before anything is sent, naming all of them.
- `OR anonymous` — the operation accepts anonymous callers: it is authenticated when a whole alternative listed before it is configured (every credential in an AND group), and sent without credentials otherwise.
- `(scopes: …)` — the OAuth2 scopes the operation's token is requested with; a client-credentials scheme mints one token per scope set.

A required credential you never configured fails the call with `AuthSchemeException` before anything is sent, so a `401` on an operation that requires a credential means the server rejected the one that was sent. A credential option left `null` is read from an environment variable when the client is constructed; the README's **Credentials from environment variables** table names them. A value set in code always wins, including the placeholder assignments in the **Getting a client** sample; delete the line for any credential you supply through an environment variable.

**Environments.** `options.Environment` selects the target environment (`src/MicrosoftDynamicsNav/Servers/ServerEnvironment.cs`):

| Environment | Value | Hosting |
| --- | --- | --- |
| `ServerEnvironment.Production` *(default)* | `production` | Business Central Online (Common Endpoint), Business Central Administration Center, Business Central Administration Center, Business Central Online Automation API, Business Central Online Automation API, Business Central Online (Common Endpoint), Business Central Online (Common Endpoint), Business Central Online (Common Endpoint), Business Central Online (Common Endpoint), Business Central Online (Common Endpoint), Business Central Online (Common Endpoint), Business Central Administration Center, Business Central Administration Center, Business Central Administration Center, Business Central Online Automation API, Business Central Online Automation API, Business Central Online Automation API, Business Central Online Automation API, Business Central Online (Common Endpoint), Business Central Online (Common Endpoint), Business Central Online (Common Endpoint), Business Central Administration Center, Business Central Online (Common Endpoint), Business Central Online (Common Endpoint), Business Central Online Automation API, Business Central Online Automation API, Business Central Online (Common Endpoint), Business Central Online (Common Endpoint), Business Central Online (Common Endpoint), Business Central Online (Common Endpoint), Business Central Online Automation API, Business Central Online Automation API, Business Central Administration Center, Business Central Administration Center, Business Central Administration Center, Business Central Online Automation API, Business Central Online (Common Endpoint), Business Central Online (Common Endpoint) |
| `ServerEnvironment.Environment2` | `environment2` | Business Central On-Premises, Business Central On-Premises Automation API, Business Central On-Premises Automation API, Business Central On-Premises, Business Central On-Premises, Business Central On-Premises, Business Central On-Premises, Business Central On-Premises, Business Central On-Premises, Business Central On-Premises Automation API, Business Central On-Premises Automation API, Business Central On-Premises Automation API, Business Central On-Premises Automation API, Business Central On-Premises, Business Central On-Premises, Business Central On-Premises, Business Central On-Premises, Business Central On-Premises, Business Central On-Premises Automation API, Business Central On-Premises Automation API, Business Central On-Premises, Business Central On-Premises, Business Central On-Premises, Business Central On-Premises, Business Central On-Premises Automation API, Business Central On-Premises Automation API, Business Central On-Premises Automation API, Business Central On-Premises, Business Central On-Premises |

**4 server groups.** Base-URL templates and override points (`options.Server.…`):

| Group | `Production` base URL | `Environment2` base URL | Override point |
| --- | --- | --- | --- |
| `Default` | `https://api.businesscentral.dynamics.com/v2.0/{environment}/api/v2.0` | `https://{server}:{port}/{instance}/api/v2.0` | `options.Server.Default.Production.BaseUrl` (and the other environments) |
| `AuthServer` | `https://login.microsoftonline.com/{tenantId}/oauth2/v2.0` | `https://login.microsoftonline.com/{tenantId}/oauth2/v2.0` | `options.Server.AuthServer.Production.BaseUrl` (and the other environments) |
| `DefaultBusinessCentralAdministrationCenterAppManagementApi` | `https://api.businesscentral.dynamics.com/admin/v2.28` | `https://api.businesscentral.dynamics.com/admin/v2.28` | `options.Server.DefaultBusinessCentralAdministrationCenterAppManagementApi.Production.BaseUrl` (and the other environments) |
| `DefaultBusinessCentralAutomationApiV20CompaniesApi` | `https://api.businesscentral.dynamics.com/v2.0/{environment}/api/microsoft/automation/v2.0` | `https://{server}:{port}/{instance}/api/microsoft/automation/v2.0` | `options.Server.DefaultBusinessCentralAutomationApiV20CompaniesApi.Production.BaseUrl` (and the other environments) |

`Default` · `Production` template variables: `{environment}` defaults to `"production"` — override `options.Server.Default.Production.Environment`.

`Default` · `Environment2` template variables: `{server}` defaults to `"localhost"` — override `options.Server.Default.Environment2.Server`. `{port}` defaults to `"7048"` — override `options.Server.Default.Environment2.Port`. `{instance}` defaults to `"BC"` — override `options.Server.Default.Environment2.Instance`.

`DefaultBusinessCentralAutomationApiV20CompaniesApi` · `Production` template variables: `{environment}` defaults to `"production"` — override `options.Server.DefaultBusinessCentralAutomationApiV20CompaniesApi.Production.Environment`.

`DefaultBusinessCentralAutomationApiV20CompaniesApi` · `Environment2` template variables: `{server}` defaults to `"localhost"` — override `options.Server.DefaultBusinessCentralAutomationApiV20CompaniesApi.Environment2.Server`. `{port}` defaults to `"7048"` — override `options.Server.DefaultBusinessCentralAutomationApiV20CompaniesApi.Environment2.Port`. `{instance}` defaults to `"BC"` — override `options.Server.DefaultBusinessCentralAutomationApiV20CompaniesApi.Environment2.Instance`.

Retry/resilience is configurable via `options.Retry` (`RetryOptions`, backed by Polly).

