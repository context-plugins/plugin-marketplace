# SDK map — Cellpoint (.NET)

> A generated table-of-contents for this SDK. Consult this map and its sub-pages to learn signatures, error
> types, enum values, and server/auth wiring **by lookup** — open a source file only for a full method/model
> body the map doesn't carry. The compiler is the backstop: a wrong name fails to build.

| | |
|---|---|
| SDK display name | Cellpoint |
| Root namespace/module | `CellPointApi` |
<!-- gen:stamp -->
| Target framework(s) | `netstandard2.0` (C# `LangVersion 14`, `Nullable enable`) |
| Source commit (spec stamp) | `96cfaa7` (`96cfaa7467fb4cf5bc5635c95c37dcaf0ef6282c`, tagged `96cfaa7`) |
<!-- /gen:stamp -->
| Generator | APIMatic |
| Repo | https://github.com/context-plugins/cellpoint-csharp-sdk (branch `main`) |

Staleness check: if the SDK is regenerated, the source commit stamp above changes (the SDK repo and this
plugin regenerate together). If a lookup here fails to compile, trust the compiler and re-read the source
file linked in the row.

---

## Getting a client

```csharp
using CellPointApi;
using CellPointApi.Servers; // ServerEnvironment lives here

var options = new CellPointApiClientOptions
{
    // Set the credentials properties for the scheme(s) this API uses — see Servers & auth below.
    // Environment selects the server environment; see Servers & auth below.
};
var client = new CellPointApiClient(httpClient, options); // httpClient: System.Net.Http.HttpClient
```

DI alternative (`ServiceCollectionExtensions.cs`):

```csharp
services.AddCellPointApiClient(o =>
{
    // set credentials / environment on o here
});
```

Every API group is a property on the client (e.g. `client.Customers`). Source:
`CellPointApiClient.cs`.

<!-- crawler:client-options -->
All `CellPointApiClientOptions` properties (source: `CellPointApiClientOptions.cs`):

| Property | Type |
|---|---|
| `Environment` | `ServerEnvironment` |
| `Retry` | `RetryOptions` |
| `Logging` | `LoggingOptions` |
| `Server` | `ServerOptions` |
| `CpdIssuedJwt` | `OAuth2ClientCredentials?` |
| `CpdIssuedJwtTokenStrategy` | `IOAuth2TokenStrategy<OAuth2ClientCredentials>?` |
| `MerchantIssuedJwt` | `string?` |

`RetryOptions` members (source: `Core/Configuration/RetryOptions.cs`; build a full instance — all members are `required` — or start from `RetryOptions.Default()`):

| Member | Type |
|---|---|
| `StatusCodesToRetry` | `IReadOnlyList<HttpStatusCode>` |
| `HttpMethodsToRetry` | `IReadOnlyList<HttpMethod>` |
| `MaxRetries` | `int` |
| `Delay` | `TimeSpan` |
| `Timeout` | `TimeSpan?` |
| `BackOffFactor` | `int` |
| `UseExponentialBackoff` | `bool` |
| `MaxJitter` | `TimeSpan` |
| `OnRetry` | `Action<RetryAttempt>?` |

Client constructor(s):

- `CellPointApiClient(HttpClient httpClient, CellPointApiClientOptions options)`
<!-- /crawler:client-options -->

---

## Error-handling model (read once — applies to every operation)

Operations are **throw-based**. On an error status the SDK throws `SdkException<TError>`
(`Core/Exceptions/SdkException.cs`) exposing `.Error` of type `TError`. There are two cases:

- **Case A — typed error.** `TError` is a generated `…Error : ApiError` class with status-specific
  `TryGet…(out …)` accessors (returns `true` when that shape is present) plus the inherited
  `TryGetRawError(out RawError)` fallback. The per-operation rows name the exact `TryGet…` methods and the HTTP
  status each maps to.
- **Case B — raw error.** `TError` is `RawError` (`Core/ErrorResponse/RawError.cs`): `StatusCode`,
  `ReadAsString()`, `ReadAsJson<T>()`, `ReadAsBytes()`.

<!-- gen:error-core -->
Core error types (`Core/ErrorResponse/`) — public members with their **declared types**, verbatim from source:

| Type | Public members | Source |
|---|---|---|
| `ApiError` — abstract base of all 33 typed error classes in `Errors/` | `TryGetRawError(out RawError error): bool` | `Core/ErrorResponse/ApiError.cs` |
| `RawError` | `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?` | `Core/ErrorResponse/RawError.cs` |

Typed-error payload shapes (the `out` types in each operation page's error-accessor cells) are ordinary records/unions: field names, declared types, and JSON wire names live on the records pages / `unions.md` like any other model.
<!-- /gen:error-core -->

```csharp
try { var resp = await client.{ApiGroup}.{Operation}(body); }
catch (SdkException<{Operation}Error> ex)              // Case A
{
    if (ex.Error.TryGetSomeShape(out var typed))      { /* handle that status */ }
    else if (ex.Error.TryGetRawError(out var raw))    { /* other statuses */ }
}
catch (SdkException<RawError> ex)                     // Case B
{
    var status = ex.Error.StatusCode;
    var body   = ex.Error.ReadAsString();
}
```

<!-- crawler:op-stats -->
**No-throw ("`…Result`") variants: absent across this SDK** — every operation is throw-only.
Of **33 operations**, **33 are Case A (typed)** and **0 are Case B (raw)**.
<!-- /crawler:op-stats -->

---

## Operations — by controller (10 groups, 33 operations)

Each links to a sub-page with one row per operation (HTTP, signature with must-pass-explicitly params, return
type, error Case A/B + accessors, pagination).

<!-- crawler:ops-table -->
| Controller (`client.X`) | Ops | Page |
|---|---:|---|
| `ApplePay` | 1 | [map/operations/ApplePay.md](map/operations/ApplePay.md) |
| `AuthenticationApi` | 1 | [map/operations/AuthenticationApi.md](map/operations/AuthenticationApi.md) |
| `Bulk` | 2 | [map/operations/Bulk.md](map/operations/Bulk.md) |
| `Cards` | 3 | [map/operations/Cards.md](map/operations/Cards.md) |
| `Notes` | 2 | [map/operations/Notes.md](map/operations/Notes.md) |
| `Orders` | 9 | [map/operations/Orders.md](map/operations/Orders.md) |
| `PaymentMethods` | 2 | [map/operations/PaymentMethods.md](map/operations/PaymentMethods.md) |
| `Proxy` | 1 | [map/operations/Proxy.md](map/operations/Proxy.md) |
| `Transactions` | 11 | [map/operations/Transactions.md](map/operations/Transactions.md) |
| `Wallet` | 1 | [map/operations/Wallet.md](map/operations/Wallet.md) |
<!-- /crawler:ops-table -->

---

## Models

<!-- gen:models-table -->
| Group | Count | Page |
|---|---:|---|
| Records (plain `record` data models) | 187 | [`Account` … `RetryRefundResponse`](map/models/records-1-Ac-Re.md) · [`Reward` … `WalletTokenizedTokenIdentification`](map/models/records-2-Re-Wa.md) |
| Unions (`OneOf` / `AnyOf`) — variant factories + `TryGet…` | 7 + 0 | [map/models/unions.md](map/models/unions.md) |
| Enums (`StringEnum<T>` / `IntEnum<T>`) — literal C# member names + wire values | 53 | [map/models/enums.md](map/models/enums.md) |
<!-- /gen:models-table -->

Model conventions: records are immutable with `init`-only setters; `required` properties must be set in the
object initializer; nullable (`T?`) properties are optional. Each record field is listed as
`CSharpName (wire_name): Type` — the parenthesized name is the JSON wire name (`[JsonPropertyName]`).
Unions wrap `Optional<T>` variants — construct via a static factory or implicit
conversion, read back via `TryGet…(out …)`. Enums are **not** C# enums — build with `Type.FromValue("wire")`
or the static members (enums.md lists the literal member names: `SomeEnum.SomeMember`, not
`SomeEnum.some_member`).

<!-- gen:namespaces -->
Namespaces by content type (add `using` accordingly):

| Contents | Namespace(s) |
|---|---|
| Client & options (root) | `CellPointApi` |
| Operation controllers (`Api/`) | `CellPointApi.Api` |
| Records (`Models/`) | `CellPointApi.Models` |
| Enums (`Models/Enums/`) | `CellPointApi.Models.Enums` |
| Unions (`Models/AnyOf/`, `Models/OneOf/`) | `CellPointApi.Models.OneOf` |
| Error classes (`Errors/`) | `CellPointApi.Errors` |
<!-- /gen:namespaces -->

---

## Servers & auth

<!-- crawler:servers-auth -->
**Auth.** The scheme(s) this API uses surface as credentials properties on `CellPointApiClientOptions` (source: `CellPointApiClientOptions.cs`) — set them before constructing the client; load `dotnet-authentication` for the wiring:

| Property | Type | Notes (from the source XML docs) |
|---|---|---|
| `CpdIssuedJwt` | `OAuth2ClientCredentials?` | <b>JWT Client Authentication</b> <para> Uses a server-generated JSON Web Token (JWT) signed with an asymmetric key to confirm the client's identity. </para> <para> The server can extract client's assertion from the request and verify it with the private key. </para> <para> <b>Flow for calling APIs:</b> !<see href="media/diagram_002.png">diagram_002</see> </para> <para> <b>*Steps as described in the above diagram:</b>* 1. Merchant Server calls the API with the CPD issued access token in the header as Authorization:Bearer. 2. CPD API Server will internally validate the access token. 4. If the access token is valid CPD API Server, will process the request. </para> |
| `CpdIssuedJwtTokenStrategy` | `IOAuth2TokenStrategy<OAuth2ClientCredentials>?` | — |
| `MerchantIssuedJwt` | `string?` | Merchant will send a <see href="https://jwt.io/introduction">JWT</see> signed by their private key. <para> Sample and description of the JWT that is sent as a header to get an OAuth token are as follows: </para> <para> <b>*Header of JWT</b>* </para> <para> <code> { "typ" : "JWT",       // Represents that this JSON object is JWT "alg" : "RS256",     // The algorithm used to sign the JWT "kid" : "1918290"    // The id used to look up the correct public key in the JWKS file. This public key will correspond to the private key used to sign this JWT } </code> <b>*Payload for JWT</b>* <code> { "sub" : "clientId",                             // Client ID assigned by CellPoint Digital (a string) "iss" : "https://merchantsite.com",             // Identifies the issuing authority that issued the JWT  (a string) "aud" : "https://auth.api.us.cellpoint.app/",   // Identifies the recipients that the JWT is intended for (a string or array of strings) "iat" : 1506553019,                             // Time at which the JWT was issued (numeric) "exp" : 1506556619,                             // Expiration time on or after which the JWT is not accepted for processing (numeric) "jti" : "BD1FF263-3D25-4593-A685-5EC1326E1F37", // JWT ID used to prevent the JWT from being replayed } </code> <b>*Signature for JWT</b>* </para> <para> The token must be signed with the merchant's private key. The <c>kid</c> property in the header refers to the key used to sign JWT. The public keys will be fetched from the merchant's JWKS endpoint. </para> <para> The generated PrivateKeyJWT should be sent in header like so: &gt; Authorization: Bearer generatedPrivateKeyJWT </para> |

**Environments.** `options.Environment` is a `ServerEnvironment` (`Servers/ServerEnvironment.cs`) with members: `ServerEnvironment.Production`. Base-URL templates and override points live under `Servers/` and `options.Server`.
<!-- /crawler:servers-auth -->
