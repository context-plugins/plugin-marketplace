# Storagemigration — operations

Accessor: `client.Storagemigration` · Source: `Api/Storagemigration.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetStoragemigrationApigroup
- **HTTP**: `GET /apis/storagemigration.k8s.io/` (Default)
- **Signature**: `GetStoragemigrationApigroup(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IoK8SApimachineryPkgApisMetaV1Apigroup`
- **Error**: `SdkException<GetStoragemigrationApigroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
