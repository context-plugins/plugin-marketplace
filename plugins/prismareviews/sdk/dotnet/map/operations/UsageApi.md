<!-- Generated file — do not edit; regenerated with the SDK. -->

# UsageApi — operations

Accessor: `client.UsageApi` · Source: `src/PrismaReviews/Api/UsageApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetUsage

- **Auth**: `options.ApiKey`
- **Signature**: `GetUsage(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `Usage`
- **Error**: `ApiException<GetUsageError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Usage` | `src/PrismaReviews/Models/Usage.cs` |
| `GetUsageError` | `src/PrismaReviews/Errors/GetUsageError.cs` |
| `Error` | `src/PrismaReviews/Models/Error.cs` |

