# CoreApi — operations

Accessor: `client.CoreApi` · Source: `Api/CoreApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetCoreApiversions
- **HTTP**: `GET /api/` (Default)
- **Signature**: `GetCoreApiversions(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IoK8SApimachineryPkgApisMetaV1Apiversions`
- **Error**: `SdkException<GetCoreApiversionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
