<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomerPortals — operations

Accessor: `client.CustomerPortals` · Source: `src/Paid/Api/CustomerPortals.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateCustomerPortal

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `CreateCustomerPortal(CreateCustomerPortalOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Returns**: `CustomerPortal`
- **Error**: `ApiException<CreateCustomerPortalError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCustomerPortalOperationRequest` | `src/Paid/Requests/CustomerPortals/CreateCustomerPortalOperationRequest.cs` |
| `CreateCustomerPortalRequest` | `src/Paid/Models/CreateCustomerPortalRequest.cs` |
| `CustomerPortal` | `src/Paid/Models/CustomerPortal.cs` |
| `CreateCustomerPortalError` | `src/Paid/Errors/CreateCustomerPortalError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

