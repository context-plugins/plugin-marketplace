# SDK map — sportsdata (.NET)

> A generated table-of-contents for this SDK. Consult this map and its sub-pages to learn signatures, error
> types, enum values, and server/auth wiring **by lookup** — open a source file only for a full method/model
> body the map doesn't carry. The compiler is the backstop: a wrong name fails to build.

| | |
|---|---|
| SDK display name | sportsdata |
| Root namespace/module | `Sportsdata` |
<!-- gen:stamp -->
| Target framework(s) | `netstandard2.0` (C# `LangVersion 14`, `Nullable enable`) |
| Source commit (spec stamp) | `e5edaa2` (`e5edaa27a127a7bcb0c300c367cb62a6d108d10a`, tagged `e5edaa2`) |
<!-- /gen:stamp -->
| Generator | APIMatic |
| Repo | https://github.com/context-plugins/sportsdata-csharp-sdk (branch `main`) |

Staleness check: if the SDK is regenerated, the source commit stamp above changes (the SDK repo and this
plugin regenerate together). If a lookup here fails to compile, trust the compiler and re-read the source
file linked in the row.

---

## Getting a client

```csharp
using Sportsdata;
using Sportsdata.Servers; // ServerEnvironment lives here

var options = new SportsdataClientOptions
{
    // Set the credentials properties for the scheme(s) this API uses — see Servers & auth below.
    // Environment selects the server environment; see Servers & auth below.
};
var client = new SportsdataClient(httpClient, options); // httpClient: System.Net.Http.HttpClient
```

DI alternative (`ServiceCollectionExtensions.cs`):

```csharp
services.AddSportsdataClient(o =>
{
    // set credentials / environment on o here
});
```

Every API group is a property on the client (e.g. `client.Customers`). Source:
`SportsdataClient.cs`.

<!-- crawler:client-options -->
All `SportsdataClientOptions` properties (source: `SportsdataClientOptions.cs`):

| Property | Type |
|---|---|
| `Environment` | `ServerEnvironment` |
| `Retry` | `RetryOptions` |
| `Logging` | `LoggingOptions` |
| `Server` | `ServerOptions` |
| `ApiKeyHeader` | `string?` |
| `ApiKeyQuery` | `string?` |

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

- `SportsdataClient(HttpClient httpClient, SportsdataClientOptions options)`
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
| `ApiError` — abstract base of all 741 typed error classes in `Errors/` | `TryGetRawError(out RawError error): bool` | `Core/ErrorResponse/ApiError.cs` |
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
Of **741 operations**, **741 are Case A (typed)** and **0 are Case B (raw)**.
<!-- /crawler:op-stats -->

---

## Operations — by controller (50 groups, 741 operations)

Each links to a sub-page with one row per operation (HTTP, signature with must-pass-explicitly params, return
type, error Case A/B + accessors, pagination).

<!-- crawler:ops-table -->
| Controller (`client.X`) | Ops | Page |
|---|---:|---|
| `CbbV3Odds` | 34 | [map/operations/CbbV3Odds.md](map/operations/CbbV3Odds.md) |
| `CbbV3Scores` | 22 | [map/operations/CbbV3Scores.md](map/operations/CbbV3Scores.md) |
| `CbbV3Stats` | 11 | [map/operations/CbbV3Stats.md](map/operations/CbbV3Stats.md) |
| `CfbV3Odds` | 34 | [map/operations/CfbV3Odds.md](map/operations/CfbV3Odds.md) |
| `CfbV3Scores` | 26 | [map/operations/CfbV3Scores.md](map/operations/CfbV3Scores.md) |
| `CfbV3Stats` | 13 | [map/operations/CfbV3Stats.md](map/operations/CfbV3Stats.md) |
| `CwbbV3Scores` | 8 | [map/operations/CwbbV3Scores.md](map/operations/CwbbV3Scores.md) |
| `GolfV2` | 23 | [map/operations/GolfV2.md](map/operations/GolfV2.md) |
| `GolfV3Headshots` | 1 | [map/operations/GolfV3Headshots.md](map/operations/GolfV3Headshots.md) |
| `GolfV3Odds` | 21 | [map/operations/GolfV3Odds.md](map/operations/GolfV3Odds.md) |
| `GolfV3RotoBallerPremiumNews` | 2 | [map/operations/GolfV3RotoBallerPremiumNews.md](map/operations/GolfV3RotoBallerPremiumNews.md) |
| `MlbV3Headshots` | 1 | [map/operations/MlbV3Headshots.md](map/operations/MlbV3Headshots.md) |
| `MlbV3Odds` | 34 | [map/operations/MlbV3Odds.md](map/operations/MlbV3Odds.md) |
| `MlbV3PlayByPlay` | 3 | [map/operations/MlbV3PlayByPlay.md](map/operations/MlbV3PlayByPlay.md) |
| `MlbV3Projections` | 8 | [map/operations/MlbV3Projections.md](map/operations/MlbV3Projections.md) |
| `MlbV3RotoBallerPremiumNews` | 2 | [map/operations/MlbV3RotoBallerPremiumNews.md](map/operations/MlbV3RotoBallerPremiumNews.md) |
| `MlbV3Scores` | 26 | [map/operations/MlbV3Scores.md](map/operations/MlbV3Scores.md) |
| `MlbV3Stats` | 17 | [map/operations/MlbV3Stats.md](map/operations/MlbV3Stats.md) |
| `MmaV3Odds` | 10 | [map/operations/MmaV3Odds.md](map/operations/MmaV3Odds.md) |
| `MmaV3Scores` | 6 | [map/operations/MmaV3Scores.md](map/operations/MmaV3Scores.md) |
| `MmaV3Stats` | 4 | [map/operations/MmaV3Stats.md](map/operations/MmaV3Stats.md) |
| `NascarV2` | 13 | [map/operations/NascarV2.md](map/operations/NascarV2.md) |
| `NascarV3Odds` | 10 | [map/operations/NascarV3Odds.md](map/operations/NascarV3Odds.md) |
| `NbaV3Headshots` | 1 | [map/operations/NbaV3Headshots.md](map/operations/NbaV3Headshots.md) |
| `NbaV3Odds` | 34 | [map/operations/NbaV3Odds.md](map/operations/NbaV3Odds.md) |
| `NbaV3PlayByPlay` | 3 | [map/operations/NbaV3PlayByPlay.md](map/operations/NbaV3PlayByPlay.md) |
| `NbaV3Projections` | 6 | [map/operations/NbaV3Projections.md](map/operations/NbaV3Projections.md) |
| `NbaV3RotoBallerPremiumNews` | 2 | [map/operations/NbaV3RotoBallerPremiumNews.md](map/operations/NbaV3RotoBallerPremiumNews.md) |
| `NbaV3Scores` | 27 | [map/operations/NbaV3Scores.md](map/operations/NbaV3Scores.md) |
| `NbaV3Stats` | 14 | [map/operations/NbaV3Stats.md](map/operations/NbaV3Stats.md) |
| `NflV3Headshots` | 1 | [map/operations/NflV3Headshots.md](map/operations/NflV3Headshots.md) |
| `NflV3Odds` | 34 | [map/operations/NflV3Odds.md](map/operations/NflV3Odds.md) |
| `NflV3PlayByPlay` | 6 | [map/operations/NflV3PlayByPlay.md](map/operations/NflV3PlayByPlay.md) |
| `NflV3Projections` | 13 | [map/operations/NflV3Projections.md](map/operations/NflV3Projections.md) |
| `NflV3RotoBallerPremiumNews` | 3 | [map/operations/NflV3RotoBallerPremiumNews.md](map/operations/NflV3RotoBallerPremiumNews.md) |
| `NflV3Scores` | 44 | [map/operations/NflV3Scores.md](map/operations/NflV3Scores.md) |
| `NflV3Stats` | 34 | [map/operations/NflV3Stats.md](map/operations/NflV3Stats.md) |
| `NhlV3Headshots` | 1 | [map/operations/NhlV3Headshots.md](map/operations/NhlV3Headshots.md) |
| `NhlV3Odds` | 34 | [map/operations/NhlV3Odds.md](map/operations/NhlV3Odds.md) |
| `NhlV3PlayByPlay` | 3 | [map/operations/NhlV3PlayByPlay.md](map/operations/NhlV3PlayByPlay.md) |
| `NhlV3Projections` | 4 | [map/operations/NhlV3Projections.md](map/operations/NhlV3Projections.md) |
| `NhlV3RotoBallerPremiumNews` | 2 | [map/operations/NhlV3RotoBallerPremiumNews.md](map/operations/NhlV3RotoBallerPremiumNews.md) |
| `NhlV3Scores` | 27 | [map/operations/NhlV3Scores.md](map/operations/NhlV3Scores.md) |
| `NhlV3Stats` | 14 | [map/operations/NhlV3Stats.md](map/operations/NhlV3Stats.md) |
| `SoccerV4Headshots` | 1 | [map/operations/SoccerV4Headshots.md](map/operations/SoccerV4Headshots.md) |
| `SoccerV4Odds` | 28 | [map/operations/SoccerV4Odds.md](map/operations/SoccerV4Odds.md) |
| `SoccerV4Projections` | 4 | [map/operations/SoccerV4Projections.md](map/operations/SoccerV4Projections.md) |
| `SoccerV4Scores` | 21 | [map/operations/SoccerV4Scores.md](map/operations/SoccerV4Scores.md) |
| `SoccerV4Stats` | 11 | [map/operations/SoccerV4Stats.md](map/operations/SoccerV4Stats.md) |
| `WnbaV3Scores` | 40 | [map/operations/WnbaV3Scores.md](map/operations/WnbaV3Scores.md) |
<!-- /crawler:ops-table -->

---

## Models

<!-- gen:models-table -->
| Group | Count | Page |
|---|---:|---|
| Records (plain `record` data models) | 406 | [`Area` … `EventOdds`](map/models/records-1-Ar-Ev.md) · [`FantasyDefenseGame` … `Game12`](map/models/records-2-Fa-Ga.md) · [`Game13` … `Game52`](map/models/records-3-Ga-Ga.md) · [`Game53` … `OpponentSeason1`](map/models/records-4-Ga-Op.md) · [`OpponentSeason2` … `PlayerGame2`](map/models/records-5-Op-Pl.md) · [`PlayerGame3` … `PlayerGameProjection4`](map/models/records-6-Pl-Pl.md) · [`PlayerGameRedZone` … `PlayerSeason8`](map/models/records-7-Pl-Pl.md) · [`PlayerSeasonProjection` … `Schedule1`](map/models/records-8-Pl-Sc.md) · [`ScheduleBasic` … `Standing4`](map/models/records-9-Sc-St.md) · [`StartingGoaltenders` … `TeamGame7`](map/models/records-10-St-Te.md) · [`TeamGameTrends` … `Venue`](map/models/records-11-Te-Ve.md) |
| Unions (`OneOf` / `AnyOf`) — variant factories + `TryGet…` | 0 + 0 | [map/models/unions.md](map/models/unions.md) |
| Enums (`StringEnum<T>` / `IntEnum<T>`) — literal C# member names + wire values | 5 | [map/models/enums.md](map/models/enums.md) |
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
| Client & options (root) | `Sportsdata` |
| Operation controllers (`Api/`) | `Sportsdata.Api` |
| Records (`Models/`) | `Sportsdata.Models` |
| Enums (`Models/Enums/`) | `Sportsdata.Models.Enums` |
| Error classes (`Errors/`) | `Sportsdata.Errors` |
<!-- /gen:namespaces -->

---

## Servers & auth

<!-- crawler:servers-auth -->
**Auth.** The scheme(s) this API uses surface as credentials properties on `SportsdataClientOptions` (source: `SportsdataClientOptions.cs`) — set them before constructing the client; load `dotnet-authentication` for the wiring:

| Property | Type | Notes (from the source XML docs) |
|---|---|---|
| `ApiKeyHeader` | `string?` | — |
| `ApiKeyQuery` | `string?` | — |

**Environments.** `options.Environment` is a `ServerEnvironment` (`Servers/ServerEnvironment.cs`) with members: `ServerEnvironment.Production`. Base-URL templates and override points live under `Servers/` and `options.Server`.
<!-- /crawler:servers-auth -->
