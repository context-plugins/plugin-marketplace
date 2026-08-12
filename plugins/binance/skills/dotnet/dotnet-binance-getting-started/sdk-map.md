# SDK map — binance (.NET)

> A generated table-of-contents for this SDK. Consult this map and its sub-pages to learn signatures, error
> types, enum values, and server/auth wiring **by lookup** — open a source file only for a full method/model
> body the map doesn't carry. The compiler is the backstop: a wrong name fails to build.

| | |
|---|---|
| SDK display name | binance |
| Root namespace/module | `BinancePublicSpotApi` |
<!-- gen:stamp -->
| Target framework(s) | `netstandard2.0` (C# `LangVersion 14`, `Nullable enable`) |
| Source commit (spec stamp) | `6ef8955` (`6ef8955cf9c3759855dac68f6a5aa12dd936671e`, tagged `6ef8955`) |
<!-- /gen:stamp -->
| Generator | APIMatic |
| Repo | https://github.com/context-plugins/binance-csharp-sdk (branch `main`) |

Staleness check: if the SDK is regenerated, the source commit stamp above changes (the SDK repo and this
plugin regenerate together). If a lookup here fails to compile, trust the compiler and re-read the source
file linked in the row.

---

## Getting a client

```csharp
using BinancePublicSpotApi;
using BinancePublicSpotApi.Servers; // ServerEnvironment lives here

var options = new BinancePublicSpotApiClientOptions
{
    // Set the credentials properties for the scheme(s) this API uses — see Servers & auth below.
    // Environment selects the server environment; see Servers & auth below.
};
var client = new BinancePublicSpotApiClient(httpClient, options); // httpClient: System.Net.Http.HttpClient
```

DI alternative (`ServiceCollectionExtensions.cs`):

```csharp
services.AddBinancePublicSpotApiClient(o =>
{
    // set credentials / environment on o here
});
```

Every API group is a property on the client (e.g. `client.Customers`). Source:
`BinancePublicSpotApiClient.cs`.

<!-- crawler:client-options -->
All `BinancePublicSpotApiClientOptions` properties (source: `BinancePublicSpotApiClientOptions.cs`):

| Property | Type |
|---|---|
| `Environment` | `ServerEnvironment` |
| `Retry` | `RetryOptions` |
| `Logging` | `LoggingOptions` |
| `Server` | `ServerOptions` |
| `ApiKeyAuth` | `string?` |

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

- `BinancePublicSpotApiClient(HttpClient httpClient, BinancePublicSpotApiClientOptions options)`
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
| `ApiError` — abstract base of all 333 typed error classes in `Errors/` | `TryGetRawError(out RawError error): bool` | `Core/ErrorResponse/ApiError.cs` |
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
Of **340 operations**, **333 are Case A (typed)** and **7 are Case B (raw)**.
<!-- /crawler:op-stats -->

---

## Operations — by controller (29 groups, 340 operations)

Each links to a sub-page with one row per operation (HTTP, signature with must-pass-explicitly params, return
type, error Case A/B + accessors, pagination).

<!-- crawler:ops-table -->
| Controller (`client.X`) | Ops | Page |
|---|---:|---|
| `AutoInvest` | 17 | [map/operations/AutoInvest.md](map/operations/AutoInvest.md) |
| `Blvt` | 6 | [map/operations/Blvt.md](map/operations/Blvt.md) |
| `C2C` | 1 | [map/operations/C2C.md](map/operations/C2C.md) |
| `ConvertApi` | 9 | [map/operations/ConvertApi.md](map/operations/ConvertApi.md) |
| `CopyTrading` | 2 | [map/operations/CopyTrading.md](map/operations/CopyTrading.md) |
| `CryptoLoans` | 21 | [map/operations/CryptoLoans.md](map/operations/CryptoLoans.md) |
| `DualInvestment` | 5 | [map/operations/DualInvestment.md](map/operations/DualInvestment.md) |
| `Fiat` | 2 | [map/operations/Fiat.md](map/operations/Fiat.md) |
| `Futures` | 3 | [map/operations/Futures.md](map/operations/Futures.md) |
| `FuturesAlgo` | 6 | [map/operations/FuturesAlgo.md](map/operations/FuturesAlgo.md) |
| `GiftCard` | 6 | [map/operations/GiftCard.md](map/operations/GiftCard.md) |
| `IsolatedMarginStream` | 3 | [map/operations/IsolatedMarginStream.md](map/operations/IsolatedMarginStream.md) |
| `Margin` | 48 | [map/operations/Margin.md](map/operations/Margin.md) |
| `MarginStream` | 3 | [map/operations/MarginStream.md](map/operations/MarginStream.md) |
| `Market` | 15 | [map/operations/Market.md](map/operations/Market.md) |
| `Mining` | 13 | [map/operations/Mining.md](map/operations/Mining.md) |
| `Nft` | 4 | [map/operations/Nft.md](map/operations/Nft.md) |
| `Pay` | 1 | [map/operations/Pay.md](map/operations/Pay.md) |
| `PortfolioMargin` | 14 | [map/operations/PortfolioMargin.md](map/operations/PortfolioMargin.md) |
| `Rebate` | 1 | [map/operations/Rebate.md](map/operations/Rebate.md) |
| `Savings` | 4 | [map/operations/Savings.md](map/operations/Savings.md) |
| `SimpleEarn` | 24 | [map/operations/SimpleEarn.md](map/operations/SimpleEarn.md) |
| `SpotAlgo` | 5 | [map/operations/SpotAlgo.md](map/operations/SpotAlgo.md) |
| `Staking` | 12 | [map/operations/Staking.md](map/operations/Staking.md) |
| `StreamApi` | 3 | [map/operations/StreamApi.md](map/operations/StreamApi.md) |
| `SubAccountApi` | 45 | [map/operations/SubAccountApi.md](map/operations/SubAccountApi.md) |
| `TradeApi` | 23 | [map/operations/TradeApi.md](map/operations/TradeApi.md) |
| `VipLoans` | 10 | [map/operations/VipLoans.md](map/operations/VipLoans.md) |
| `Wallet` | 34 | [map/operations/Wallet.md](map/operations/Wallet.md) |
<!-- /crawler:ops-table -->

---

## Models

<!-- gen:models-table -->
| Group | Count | Page |
|---|---:|---|
| Records (plain `record` data models) | 522 | [`Account` … `OrderResponseFull`](map/models/records-1-Ac-Or.md) · [`OrderResponseResult` … `SapiV1LendingAutoInvestSourceAssetListResponse`](map/models/records-2-Or-Sa.md) · [`SapiV1LendingAutoInvestTargetAssetListResponse` … `SubAccountUsdtfuturesSummary`](map/models/records-3-Sa-Su.md) · [`SubOrder` … `WorkerData`](map/models/records-4-Su-Wo.md) |
| Unions (`OneOf` / `AnyOf`) — variant factories + `TryGet…` | 0 + 15 | [map/models/unions.md](map/models/unions.md) |
| Enums (`StringEnum<T>` / `IntEnum<T>`) — literal C# member names + wire values | 62 | [map/models/enums.md](map/models/enums.md) |
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
| Client & options (root) | `BinancePublicSpotApi` |
| Operation controllers (`Api/`) | `BinancePublicSpotApi.Api` |
| Records (`Models/`) | `BinancePublicSpotApi.Models` |
| Enums (`Models/Enums/`) | `BinancePublicSpotApi.Models.Enums` |
| Unions (`Models/AnyOf/`, `Models/OneOf/`) | `BinancePublicSpotApi.Models.AnyOf` |
| Error classes (`Errors/`) | `BinancePublicSpotApi.Errors` |
<!-- /gen:namespaces -->

---

## Servers & auth

<!-- crawler:servers-auth -->
**Auth.** The scheme(s) this API uses surface as credentials properties on `BinancePublicSpotApiClientOptions` (source: `BinancePublicSpotApiClientOptions.cs`) — set them before constructing the client; load `dotnet-authentication` for the wiring:

| Property | Type | Notes (from the source XML docs) |
|---|---|---|
| `ApiKeyAuth` | `string?` | Binance Public API Key |

**Environments.** `options.Environment` is a `ServerEnvironment` (`Servers/ServerEnvironment.cs`) with members: `ServerEnvironment.Production`, `ServerEnvironment.Environment2`. Base-URL templates and override points live under `Servers/` and `options.Server`.
<!-- /crawler:servers-auth -->
