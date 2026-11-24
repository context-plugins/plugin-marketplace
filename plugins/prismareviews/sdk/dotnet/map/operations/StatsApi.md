<!-- Generated file — do not edit; regenerated with the SDK. -->

# StatsApi — operations

Accessor: `client.StatsApi` · Source: `src/PrismaReviews/Api/StatsApi.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetLocationStats

- **Auth**: `options.ApiKey`
- **Signature**: `GetLocationStats(GetLocationStatsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `since` ← `Since`, `until` ← `Until`
- **Returns**: `Stats`
- **Error**: `ApiException<GetLocationStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 422, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetLocationStatsRequest` | `src/PrismaReviews/Requests/StatsApi/GetLocationStatsRequest.cs` |
| `Since` | `src/PrismaReviews/Models/AnyOf/Since.cs` |
| `Until` | `src/PrismaReviews/Models/AnyOf/Until.cs` |
| `Stats` | `src/PrismaReviews/Models/Stats.cs` |
| `GetLocationStatsError` | `src/PrismaReviews/Errors/GetLocationStatsError.cs` |
| `Error` | `src/PrismaReviews/Models/Error.cs` |

### GetStats

- **Auth**: `options.ApiKey`
- **Signature**: `GetStats(GetStatsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `location_id` ← `LocationId`, `platform` ← `Platform`, `since` ← `Since`, `until` ← `Until`
- **Returns**: `Stats`
- **Error**: `ApiException<GetStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 422, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetStatsRequest` | `src/PrismaReviews/Requests/StatsApi/GetStatsRequest.cs` |
| `PlatformId` | `src/PrismaReviews/Models/Enums/PlatformId.cs` |
| `Since` | `src/PrismaReviews/Models/AnyOf/Since.cs` |
| `Until` | `src/PrismaReviews/Models/AnyOf/Until.cs` |
| `Stats` | `src/PrismaReviews/Models/Stats.cs` |
| `GetStatsError` | `src/PrismaReviews/Errors/GetStatsError.cs` |
| `Error` | `src/PrismaReviews/Models/Error.cs` |

