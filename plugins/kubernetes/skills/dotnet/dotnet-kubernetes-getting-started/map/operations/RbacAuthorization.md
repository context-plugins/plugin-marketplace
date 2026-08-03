# RbacAuthorization — operations

Accessor: `client.RbacAuthorization` · Source: `Api/RbacAuthorization.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetRbacAuthorizationApigroup
- **HTTP**: `GET /apis/rbac.authorization.k8s.io/` (Default)
- **Signature**: `GetRbacAuthorizationApigroup(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IoK8SApimachineryPkgApisMetaV1Apigroup`
- **Error**: `SdkException<GetRbacAuthorizationApigroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
