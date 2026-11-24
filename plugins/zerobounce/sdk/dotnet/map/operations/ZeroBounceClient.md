<!-- Generated file — do not edit; regenerated with the SDK. -->

# ZeroBounceClient — operations

Accessor: `client` · Source: `src/ZeroBounce/ZeroBounceClient.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Validate

- **Signature**: `Validate(ValidateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ValidateEmailResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ValidateRequest` | `src/ZeroBounce/Requests/ValidateRequest.cs` |
| `ValidateEmailRequest` | `src/ZeroBounce/Models/ValidateEmailRequest.cs` |
| `ValidateEmailResponse` | `src/ZeroBounce/Models/ValidateEmailResponse.cs` |

### ValidateBatch

- **Signature**: `ValidateBatch(ValidateBatchOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `IReadOnlyList<ValidateEmailResponse>`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ValidateBatchOperationRequest` | `src/ZeroBounce/Requests/ValidateBatchOperationRequest.cs` |
| `ValidateBatchRequest` | `src/ZeroBounce/Models/ValidateBatchRequest.cs` |
| `ValidateEmailResponse` | `src/ZeroBounce/Models/ValidateEmailResponse.cs` |

