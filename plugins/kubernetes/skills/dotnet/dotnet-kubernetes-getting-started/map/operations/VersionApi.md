# VersionApi — operations

Accessor: `client.VersionApi` · Source: `Api/VersionApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetCodeVersion
- **HTTP**: `GET /version/` (Default)
- **Signature**: `GetCodeVersion(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IoK8SApimachineryPkgVersionInfo`
- **Error**: `SdkException<GetCodeVersionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
