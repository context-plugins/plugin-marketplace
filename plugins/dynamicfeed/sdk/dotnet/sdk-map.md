<!-- Generated file — do not edit; regenerated with the SDK. -->

# SDK map — DynamicFeed (.NET)

> A generated table of contents for this SDK. Consult this map and its sub-pages to learn signatures, error types, and server/auth wiring **by lookup**. Model shapes and enum values are *not* duplicated here — the map names the file declaring each type; read the shape there. The compiler is the backstop: a wrong name fails to build.

|  |  |
| --- | --- |
| SDK display name | DynamicFeed |
| Root namespace | `DynamicFeed` |
| Target framework | `netstandard2.0` (C# `LangVersion 14`, `Nullable enable`) |
| API spec version | `1.0.0` |
| Generator | APIMatic |

Staleness check: the API spec version above changes when the SDK is regenerated from a new spec. If a lookup here fails to compile, trust the compiler and re-read the source file named in the row.

All `Source` paths on this map and its sub-pages are relative to the **SDK root** — the directory holding this file — never to the page that carries them; the project file is `src/DynamicFeed/DynamicFeed.csproj`. Open them as-is from the SDK root, from any page; if the SDK sits under a subdirectory of a larger repo, prefix that subdirectory.

---

## Getting a client

```csharp
var httpClient = new HttpClient();
// TODO: configure more client options here
var options = new DynamicFeedClientOptions { Environment = ServerEnvironment.Production };
var client = new DynamicFeedClient(httpClient, options);
```

DI alternative (`services.AddDynamicFeedClient`):

```csharp
services.AddDynamicFeedClient(options =>
{
    options.Environment = ServerEnvironment.Production;
    // TODO: configure more client options here
});
```

Every API group is a property on the client (e.g. `client.Advisories`). Source: `src/DynamicFeed/DynamicFeedClient.cs`. The only constructor is `DynamicFeedClient(HttpClient httpClient, DynamicFeedClientOptions options)`.

All `DynamicFeedClientOptions` properties (source: `src/DynamicFeed/DynamicFeedClientOptions.cs`):

| Property | Type |
| --- | --- |
| `Environment` | `ServerEnvironment` |
| `Retry` | `RetryOptions` |
| `Logging` | `LoggingOptions` |
| `TimeProvider` | `TimeProvider` |
| `Server` | `ServerOptions` |
| `StreamReadTimeout` | `TimeSpan?` |
| `Hooks` | `IReadOnlyList<SdkHook>` |

`ServerEnvironment` (source: `src/DynamicFeed/Servers/ServerEnvironment.cs`, namespace `DynamicFeed.Servers`)

`RetryOptions` members (namespace `DynamicFeed.Core.Configuration` — add `using DynamicFeed.Core.Configuration;`; source: `src/DynamicFeed/Core/Configuration/RetryOptions.cs`; all members are `required`, so build a full instance or start from `RetryOptions.Default()`):

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

Operations are **throw-based**. On an error status the SDK throws `ApiException<TError>` (`src/DynamicFeed/Core/Exceptions/ApiException.cs`, namespace `DynamicFeed.Core.Exceptions`) exposing `.Error` of type `TError` beside the `StatusCode`, `Headers` and `ContentType` of the response. There are two cases:

- **Case A — typed error.** `TError` is a generated `…Error : ApiError` class (namespace `DynamicFeed.Errors`) with status-specific `TryGet…(out …)` accessors (each returns `true` when that shape is present) plus the inherited `TryGetRawError([NotNullWhen(true)] out RawError? error)` fallback, and an exhaustive `Match` pair — `Match<TResult>(Func<T, TResult> on{Arm}…, Func<RawError, TResult> otherwise)` and its `Action` twin — with one `on…` arm per accessor, in the ordinal order of their names, and a required `otherwise` that receives the `RawError` of a status the operation does not declare. The operation blocks name the exact `TryGet…` methods and the HTTP status each maps to.
- **Case B — raw error.** `TError` is `RawError` (`src/DynamicFeed/Core/ErrorResponse/RawError.cs`, namespace `DynamicFeed.Core.ErrorResponse`): `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`.

⚠ Each of the three lives in its own namespace. `src/DynamicFeed/Core/` holds several namespaces, so a catch block naming `ApiException<T>`, a typed `{Operation}Error` and `RawError` together needs a `using` for each.

`ApiException<TError>` is one leaf of the `SdkException` family (`src/DynamicFeed/Core/Exceptions/SdkException.cs`): a request that produced no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match its declared type as `ResponseDeserializationException`, and a required credential that is not configured, or one that could not be applied, as `AuthSchemeException`. Every one of them names the failed call. The full table is in [README → Error Handling](README.md#error-handling).

Core error types (`src/DynamicFeed/Core/ErrorResponse/`) — public members with their **declared types**, verbatim from source:

| Type | Public members | Source |
| --- | --- | --- |
| `ApiError` — abstract base of the 112 typed error classes in `src/DynamicFeed/Errors/` | `TryGetRawError([NotNullWhen(true)] out RawError? error): bool` | `src/DynamicFeed/Core/ErrorResponse/ApiError.cs` |
| `RawError` | `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?` | `src/DynamicFeed/Core/ErrorResponse/RawError.cs` |

Every accessor over a reference-type payload, on a typed error and on a `OneOf`/`AnyOf` union alike, is `[NotNullWhen(true)] out T?`: read the value inside the `if`, where the compiler has narrowed it; a value-type payload (`long`, `JsonElement`) stays a bare `out`.

Typed-error payload shapes (the `out` types in each operation page's error-accessor cells) are ordinary records/unions — no special handling. The operation's **Type sources** table gives the file that declares each one; read field names, declared types, and JSON wire names there, as for any other model.

```csharp
try
{
    var response = await client.Advisories.AdvisoriesAdvisoriesGet(new AdvisoriesAdvisoriesGetRequest());
}
catch (ApiException<AdvisoriesAdvisoriesGetError> ex)
{
    // Case A — typed error
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // Handle 422
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

**No-throw (`…Result`) variants: absent across this SDK** — every operation is throw-only. Of **158 operations**, **112 are Case A (typed)** and **46 are Case B (raw)**.

---

## Operations — by controller (68 groups, 158 operations)

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
| `Advisories` | 2 | [map/operations/Advisories.md](map/operations/Advisories.md) |
| `Agent` | 61 | [map/operations/Agent.md](map/operations/Agent.md) |
| `AgentStats` | 1 | [map/operations/AgentStats.md](map/operations/AgentStats.md) |
| `AiModels` | 1 | [map/operations/AiModels.md](map/operations/AiModels.md) |
| `AirQuality` | 1 | [map/operations/AirQuality.md](map/operations/AirQuality.md) |
| `AirportDelays` | 1 | [map/operations/AirportDelays.md](map/operations/AirportDelays.md) |
| `Benchmarks` | 2 | [map/operations/Benchmarks.md](map/operations/Benchmarks.md) |
| `Billing` | 3 | [map/operations/Billing.md](map/operations/Billing.md) |
| `CarbonIntensity` | 1 | [map/operations/CarbonIntensity.md](map/operations/CarbonIntensity.md) |
| `China` | 1 | [map/operations/China.md](map/operations/China.md) |
| `Cite` | 1 | [map/operations/Cite.md](map/operations/Cite.md) |
| `Consensus` | 1 | [map/operations/Consensus.md](map/operations/Consensus.md) |
| `ConvertApi` | 1 | [map/operations/ConvertApi.md](map/operations/ConvertApi.md) |
| `Countdown` | 1 | [map/operations/Countdown.md](map/operations/Countdown.md) |
| `Dataset` | 8 | [map/operations/Dataset.md](map/operations/Dataset.md) |
| `Dev` | 3 | [map/operations/Dev.md](map/operations/Dev.md) |
| `Drought` | 1 | [map/operations/Drought.md](map/operations/Drought.md) |
| `DrugShortages` | 1 | [map/operations/DrugShortages.md](map/operations/DrugShortages.md) |
| `DynamicFeedLiveDataForAi` | 1 | [map/operations/DynamicFeedLiveDataForAi.md](map/operations/DynamicFeedLiveDataForAi.md) |
| `Earthquakes` | 1 | [map/operations/Earthquakes.md](map/operations/Earthquakes.md) |
| `Energy` | 1 | [map/operations/Energy.md](map/operations/Energy.md) |
| `ExploitedVulnerabilities` | 1 | [map/operations/ExploitedVulnerabilities.md](map/operations/ExploitedVulnerabilities.md) |
| `FederalRegister` | 1 | [map/operations/FederalRegister.md](map/operations/FederalRegister.md) |
| `Flights` | 1 | [map/operations/Flights.md](map/operations/Flights.md) |
| `Forecast` | 1 | [map/operations/Forecast.md](map/operations/Forecast.md) |
| `GlobalDisasters` | 1 | [map/operations/GlobalDisasters.md](map/operations/GlobalDisasters.md) |
| `GpsInterference` | 1 | [map/operations/GpsInterference.md](map/operations/GpsInterference.md) |
| `Health` | 1 | [map/operations/Health.md](map/operations/Health.md) |
| `History` | 1 | [map/operations/History.md](map/operations/History.md) |
| `Info` | 1 | [map/operations/Info.md](map/operations/Info.md) |
| `InternetOutages` | 1 | [map/operations/InternetOutages.md](map/operations/InternetOutages.md) |
| `Iss` | 1 | [map/operations/Iss.md](map/operations/Iss.md) |
| `Launches` | 1 | [map/operations/Launches.md](map/operations/Launches.md) |
| `Macro` | 1 | [map/operations/Macro.md](map/operations/Macro.md) |
| `MarketHours` | 1 | [map/operations/MarketHours.md](map/operations/MarketHours.md) |
| `ModelsApi` | 1 | [map/operations/ModelsApi.md](map/operations/ModelsApi.md) |
| `Movers` | 1 | [map/operations/Movers.md](map/operations/Movers.md) |
| `NaturalEvents` | 1 | [map/operations/NaturalEvents.md](map/operations/NaturalEvents.md) |
| `News` | 1 | [map/operations/News.md](map/operations/News.md) |
| `OrbitalDatacenters` | 1 | [map/operations/OrbitalDatacenters.md](map/operations/OrbitalDatacenters.md) |
| `Rates` | 1 | [map/operations/Rates.md](map/operations/Rates.md) |
| `RealityCheck` | 1 | [map/operations/RealityCheck.md](map/operations/RealityCheck.md) |
| `Recalls` | 1 | [map/operations/Recalls.md](map/operations/Recalls.md) |
| `Robot` | 10 | [map/operations/Robot.md](map/operations/Robot.md) |
| `Sanctions` | 1 | [map/operations/Sanctions.md](map/operations/Sanctions.md) |
| `Satellite` | 1 | [map/operations/Satellite.md](map/operations/Satellite.md) |
| `Satellites` | 1 | [map/operations/Satellites.md](map/operations/Satellites.md) |
| `SecFilings` | 1 | [map/operations/SecFilings.md](map/operations/SecFilings.md) |
| `Security` | 1 | [map/operations/Security.md](map/operations/Security.md) |
| `ServersApi` | 1 | [map/operations/ServersApi.md](map/operations/ServersApi.md) |
| `Shipping` | 1 | [map/operations/Shipping.md](map/operations/Shipping.md) |
| `Signals` | 1 | [map/operations/Signals.md](map/operations/Signals.md) |
| `Signup` | 1 | [map/operations/Signup.md](map/operations/Signup.md) |
| `SpaceWeather` | 1 | [map/operations/SpaceWeather.md](map/operations/SpaceWeather.md) |
| `Sports` | 2 | [map/operations/Sports.md](map/operations/Sports.md) |
| `Status` | 1 | [map/operations/Status.md](map/operations/Status.md) |
| `Tides` | 1 | [map/operations/Tides.md](map/operations/Tides.md) |
| `Time` | 1 | [map/operations/Time.md](map/operations/Time.md) |
| `TreasuryYields` | 1 | [map/operations/TreasuryYields.md](map/operations/TreasuryYields.md) |
| `Versions` | 1 | [map/operations/Versions.md](map/operations/Versions.md) |
| `Volcanoes` | 1 | [map/operations/Volcanoes.md](map/operations/Volcanoes.md) |
| `WaterLevels` | 1 | [map/operations/WaterLevels.md](map/operations/WaterLevels.md) |
| `Weather` | 3 | [map/operations/Weather.md](map/operations/Weather.md) |
| `WeatherAlerts` | 1 | [map/operations/WeatherAlerts.md](map/operations/WeatherAlerts.md) |
| `WhatsNew` | 1 | [map/operations/WhatsNew.md](map/operations/WhatsNew.md) |
| `Wildfires` | 1 | [map/operations/Wildfires.md](map/operations/Wildfires.md) |
| `WorldPulse` | 1 | [map/operations/WorldPulse.md](map/operations/WorldPulse.md) |
| `VerifiedFacts` | 6 | [map/operations/VerifiedFacts.md](map/operations/VerifiedFacts.md) |

---

## Models — where they live, how to build them

**Shapes live only in the source.** Every file under `src/DynamicFeed/Models/`, `src/DynamicFeed/Errors/` and `src/DynamicFeed/Requests/` declares exactly one public type, named after the file, and no two share a name — so a type name *is* its path. Take it from the operation's **Type sources** table, or build it from the kind's directory below. Never grep for a type.

| Group | Count | Directory (file = `<TypeName>.cs`) |
| --- | --- | --- |
| Records (plain `record` data models) | 4 | `src/DynamicFeed/Models/` |
| Unions (`AnyOf`) — variant factories + `TryGet…` + `Match` | 47 | `src/DynamicFeed/Models/AnyOf/` |
| Typed error classes (`: ApiError`, one per Case A operation) | 112 | `src/DynamicFeed/Errors/` |
| Request records (one per operation that takes input; never serialized) | 112 | `src/DynamicFeed/Requests/` — a controller's records sit in a folder named after it (an operation with several tags is filed under the first tag it declares) |

Conventions: records are immutable, `init`-only; `required` properties must be set in the object initializer; `T?` is optional. A field's wire name is its `[JsonPropertyName]` and often differs from the C# name (`AmountInCents` ↔ `amount_in_cents`) — read it off the property, don't derive it. `OneOf`/`AnyOf` unions wrap `Optional<T>` variants — build via static factory or implicit conversion, read one variant via `TryGet…(out …)` or branch over all of them with the generated `Match`, which takes one `on{Variant}` handler per variant in declaration order and then `otherwise`, which receives the raw `JsonElement` of a value the SDK could not place: unions are open on read, so an unrecognised discriminator value or a body no variant accepts lands in `TryGetUnknown(out JsonElement)` and re-serializes verbatim; pass handlers by name, and treat an added or moved variant as a breaking change; `AllOf` compositions are not unions — every constituent is a `required` property, so set them all, and those constituent properties carry no `[JsonPropertyName]` and have no wire name of their own, because the generated converter flattens each constituent's own fields directly into the one parent JSON object. Enums are **not** C# enums — use the static members, whose names are PascalCase even when the wire value isn't (`CollectionMethod.Invoice`, not `.invoice`); there is no public factory, so resolve a raw value with `TryGetKnownValue` and branch with the generated `Match`, whose `otherwise` arm receives any value the SDK does not declare.

Namespaces by content type (add `using` accordingly):

| Contents | Namespace |
| --- | --- |
| Client & options (root) | `DynamicFeed` |
| Operation controllers (`src/DynamicFeed/Api/`) | `DynamicFeed.Api` |
| Records (`src/DynamicFeed/Models/`) | `DynamicFeed.Models` |
| AnyOf unions (`src/DynamicFeed/Models/AnyOf/`) | `DynamicFeed.Models.AnyOf` |
| Error classes (`src/DynamicFeed/Errors/`) | `DynamicFeed.Errors` |
| Request records (`src/DynamicFeed/Requests/`) | `DynamicFeed.Requests` — plus `.<Controller>` for a controller's records (an operation with several tags is filed under the first tag it declares) |

---

## Servers & auth

**Auth — none.** The spec declares no security schemes; the client sends no credentials.

**Environments.** `options.Environment` selects the target environment (`src/DynamicFeed/Servers/ServerEnvironment.cs`):

| Environment | Value | Hosting |
| --- | --- | --- |
| `ServerEnvironment.Production` *(default)* | `production` | — |

**1 server group.** Base-URL templates and override points (`options.Server.…`):

| Group | `Production` base URL | Override point |
| --- | --- | --- |
| `Default` | `https://dynamicfeed.ai` | `options.Server.Default.Production.BaseUrl` |

Retry/resilience is configurable via `options.Retry` (`RetryOptions`, backed by Polly).

