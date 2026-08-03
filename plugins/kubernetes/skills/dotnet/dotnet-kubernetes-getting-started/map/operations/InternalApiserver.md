# InternalApiserver — operations

Accessor: `client.InternalApiserver` · Source: `Api/InternalApiserver.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetInternalApiserverApigroup
- **HTTP**: `GET /apis/internal.apiserver.k8s.io/` (Default)
- **Signature**: `GetInternalApiserverApigroup(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IoK8SApimachineryPkgApisMetaV1Apigroup`
- **Error**: `SdkException<GetInternalApiserverApigroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
