<!-- Generated file — do not edit; regenerated with the SDK. -->

# BuyingGroup — operations

Accessor: `client.BuyingGroup` · Source: `src/Lusha/Api/BuyingGroup.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetContactsBuyingGroup

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetContactsBuyingGroup(GetContactsBuyingGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V3BuyingGroupResponse`
- **Error**: `ApiException<GetContactsBuyingGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 402, 403, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetContactsBuyingGroupRequest` | `src/Lusha/Requests/BuyingGroup/GetContactsBuyingGroupRequest.cs` |
| `V3BuyingGroupRequest` | `src/Lusha/Models/V3BuyingGroupRequest.cs` |
| `V3BuyingGroupResponse` | `src/Lusha/Models/V3BuyingGroupResponse.cs` |
| `GetContactsBuyingGroupError` | `src/Lusha/Errors/GetContactsBuyingGroupError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

