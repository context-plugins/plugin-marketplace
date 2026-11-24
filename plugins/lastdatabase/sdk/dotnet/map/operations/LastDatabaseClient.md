<!-- Generated file — do not edit; regenerated with the SDK. -->

# LastDatabaseClient — operations

Accessor: `client` · Source: `src/LastDatabase/LastDatabaseClient.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SearchLeads

- **Auth**: `options.BearerAuth`
- **Signature**: `SearchLeads(SearchLeadsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `type` ← `Type`, `country` ← `Country`, `city` ← `City`, `industry` ← `Industry`, `keyword` ← `Keyword`, `limit` ← `Limit`
- **Returns**: `LeadSearchResponse`
- **Error**: `ApiException<SearchLeadsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchLeadsRequest` | `src/LastDatabase/Requests/SearchLeadsRequest.cs` |
| `TypeEnum` | `src/LastDatabase/Models/Enums/TypeEnum.cs` |
| `LeadSearchResponse` | `src/LastDatabase/Models/LeadSearchResponse.cs` |
| `SearchLeadsError` | `src/LastDatabase/Errors/SearchLeadsError.cs` |
| `ErrorResponseModel` | `src/LastDatabase/Models/ErrorResponseModel.cs` |

