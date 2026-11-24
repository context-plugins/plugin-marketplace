<!-- Generated file — do not edit; regenerated with the SDK. -->

# Pledges — operations

Accessor: `client.Pledges` · Source: `src/Givebutter/Api/Pledges.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PledgesIndex

- **Auth**: `options.Http`
- **Signature**: `PledgesIndex(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `V1PledgesResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `V1PledgesResponse` | `src/Givebutter/Models/V1PledgesResponse.cs` |

### PledgesShow

- **Auth**: `options.Http`
- **Signature**: `PledgesShow(PledgesShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Pledge`
- **Returns**: `PledgeResource`
- **Error**: `ApiException<PledgesShowError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthorizationException1([NotNullWhen(true)] out AuthorizationException1? value)` [403] · `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PledgesShowRequest` | `src/Givebutter/Requests/Pledges/PledgesShowRequest.cs` |
| `PledgeResource` | `src/Givebutter/Models/PledgeResource.cs` |
| `PledgesShowError` | `src/Givebutter/Errors/PledgesShowError.cs` |
| `AuthorizationException1` | `src/Givebutter/Models/AuthorizationException1.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |

