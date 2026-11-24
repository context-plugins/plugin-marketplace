<!-- Generated file — do not edit; regenerated with the SDK. -->

# Signups — operations

Accessor: `client.Signups` · Source: `src/Hightouch/Api/Signups.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateSignup

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateSignup(CreateSignupOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `SignupsResponse`
- **Error**: `ApiException<CreateSignupError>` — **Case A (typed)**
- **Error accessors**: `TryGetSignupErrorResponse([NotNullWhen(true)] out SignupErrorResponse? value)` [400, 404, 409, 502] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403] · `TryGetSignupsResponse1([NotNullWhen(true)] out SignupsResponse1? value)` [422] · `TryGetInternalServerError([NotNullWhen(true)] out InternalServerError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateSignupOperationRequest` | `src/Hightouch/Requests/Signups/CreateSignupOperationRequest.cs` |
| `CreateSignupRequest` | `src/Hightouch/Models/CreateSignupRequest.cs` |
| `SignupsResponse` | `src/Hightouch/Models/AnyOf/SignupsResponse.cs` |
| `CreateSignupError` | `src/Hightouch/Errors/CreateSignupError.cs` |
| `SignupErrorResponse` | `src/Hightouch/Models/SignupErrorResponse.cs` |
| `SignupsResponse1` | `src/Hightouch/Models/AnyOf/SignupsResponse1.cs` |
| `InternalServerError` | `src/Hightouch/Models/Enums/InternalServerError.cs` |

