# FlowcontrolApiserver — operations

Accessor: `client.FlowcontrolApiserver` · Source: `Api/FlowcontrolApiserver.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetFlowcontrolApiserverApigroup
- **HTTP**: `GET /apis/flowcontrol.apiserver.k8s.io/` (Default)
- **Signature**: `GetFlowcontrolApiserverApigroup(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IoK8SApimachineryPkgApisMetaV1Apigroup`
- **Error**: `SdkException<GetFlowcontrolApiserverApigroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
