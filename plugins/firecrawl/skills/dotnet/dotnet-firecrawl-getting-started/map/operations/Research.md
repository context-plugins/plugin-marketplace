# Research — operations

Accessor: `client.Research` · Source: `Api/Research.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetDeepResearchStatus
- **HTTP**: `GET /deep-research/{id}` (Default (api))
- **Signature**: `GetDeepResearchStatus(Guid id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeepResearchResponse1`
- **Error**: `SdkException<GetDeepResearchStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetDeepResearch404Error1(out DeepResearch404Error1)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### StartDeepResearch
- **HTTP**: `POST /deep-research` (Default (api))
- **Signature**: `StartDeepResearch(DeepResearchRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeepResearchResponse`
- **Error**: `SdkException<StartDeepResearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetDeepResearch400Error1(out DeepResearch400Error1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
