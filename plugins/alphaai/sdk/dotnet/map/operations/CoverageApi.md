<!-- Generated file — do not edit; regenerated with the SDK. -->

# CoverageApi — operations

Accessor: `client.CoverageApi` · Source: `src/AlphaAi/Api/CoverageApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiCoverage

- **Auth**: `options.ApiKey`
- **Signature**: `GetApiCoverage(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `Coverage`
- **Error**: `ApiException<GetApiCoverageError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 429, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Coverage` | `src/AlphaAi/Models/Coverage.cs` |
| `GetApiCoverageError` | `src/AlphaAi/Errors/GetApiCoverageError.cs` |
| `Error` | `src/AlphaAi/Models/Error.cs` |

