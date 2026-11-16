<!-- Generated file — do not edit; regenerated with the SDK. -->

# FinixApiReferenceClient — operations

Accessor: `client` · Source: `src/FinixApiReference/FinixApiReferenceClient.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateIdentityVerification

- **Auth**: `options.BasicAuth`
- **Signature**: `CreateIdentityVerification(CreateIdentityVerificationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IdentityId`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateIdentityVerificationError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateIdentityVerificationRequest` | `src/FinixApiReference/Requests/CreateIdentityVerificationRequest.cs` |
| `CreateIdentityVerificationError` | `src/FinixApiReference/Errors/CreateIdentityVerificationError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

