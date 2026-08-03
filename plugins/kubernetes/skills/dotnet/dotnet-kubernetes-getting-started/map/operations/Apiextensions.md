# Apiextensions — operations

Accessor: `client.Apiextensions` · Source: `Api/Apiextensions.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetApiextensionsApigroup
- **HTTP**: `GET /apis/apiextensions.k8s.io/` (Default)
- **Signature**: `GetApiextensionsApigroup(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IoK8SApimachineryPkgApisMetaV1Apigroup`
- **Error**: `SdkException<GetApiextensionsApigroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
