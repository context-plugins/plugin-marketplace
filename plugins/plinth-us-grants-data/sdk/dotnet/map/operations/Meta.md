<!-- Generated file — do not edit; regenerated with the SDK. -->

# Meta — operations

Accessor: `client.Meta` · Source: `src/PlinthUsGrantsData/Api/Meta.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetMeta

- **Signature**: `GetMeta(GetMetaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `jurisdiction` ← `Jurisdiction`
- **Returns**: `MetaResponse`
- **Error**: `ApiException<GetMetaError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetMetaRequest` | `src/PlinthUsGrantsData/Requests/Meta/GetMetaRequest.cs` |
| `Jurisdiction` | `src/PlinthUsGrantsData/Models/AnyOf/Jurisdiction.cs` |
| `MetaResponse` | `src/PlinthUsGrantsData/Models/MetaResponse.cs` |
| `GetMetaError` | `src/PlinthUsGrantsData/Errors/GetMetaError.cs` |
| `HttpValidationError` | `src/PlinthUsGrantsData/Models/HttpValidationError.cs` |

