<!-- Generated file — do not edit; regenerated with the SDK. -->

# Benchmarks — operations

Accessor: `client.Benchmarks` · Source: `src/DynamicFeed/Api/Benchmarks.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### BenchmarksBenchmarksGet

- **Signature**: `BenchmarksBenchmarksGet(BenchmarksBenchmarksGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `window_hours` ← `WindowHours`
- **Returns**: `object`
- **Error**: `ApiException<BenchmarksBenchmarksGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BenchmarksBenchmarksGetRequest` | `src/DynamicFeed/Requests/Benchmarks/BenchmarksBenchmarksGetRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `BenchmarksBenchmarksGetError` | `src/DynamicFeed/Errors/BenchmarksBenchmarksGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### BenchmarksHistoryBenchmarksHistoryGet

- **Signature**: `BenchmarksHistoryBenchmarksHistoryGet(BenchmarksHistoryBenchmarksHistoryGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `provider` ← `Provider`, `days` ← `Days`
- **Returns**: `object`
- **Error**: `ApiException<BenchmarksHistoryBenchmarksHistoryGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BenchmarksHistoryBenchmarksHistoryGetRequest` | `src/DynamicFeed/Requests/Benchmarks/BenchmarksHistoryBenchmarksHistoryGetRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `BenchmarksHistoryBenchmarksHistoryGetError` | `src/DynamicFeed/Errors/BenchmarksHistoryBenchmarksHistoryGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

