<!-- Generated file — do not edit; regenerated with the SDK. -->

# Meta — operations

Accessor: `client.Meta` · Source: `src/NordicFinancialNews/Api/Meta.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiV1Meta

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1Meta(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MetaResponse`
- **Error**: `ApiException<GetApiV1MetaError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApiV1MetaResponse` | `src/NordicFinancialNews/Models/ApiV1MetaResponse.cs` |
| `GetApiV1MetaError` | `src/NordicFinancialNews/Errors/GetApiV1MetaError.cs` |
| `ProblemDetails` | `src/NordicFinancialNews/Models/ProblemDetails.cs` |

