<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccessControl — operations

Accessor: `client.AccessControl` · Source: `src/Archbee/Api/AccessControl.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### RequestMagicLinkAccess

- **Auth**: `options.BearerAuth`
- **Signature**: `RequestMagicLinkAccess(RequestMagicLinkAccessRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `AccessControlRequestResponse`
- **Error**: `ApiException<RequestMagicLinkAccessError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccessControlRequest400Error1([NotNullWhen(true)] out AccessControlRequest400Error1? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RequestMagicLinkAccessRequest` | `src/Archbee/Requests/AccessControl/RequestMagicLinkAccessRequest.cs` |
| `AccessControlRequestRequest` | `src/Archbee/Models/AccessControlRequestRequest.cs` |
| `AccessControlRequestResponse` | `src/Archbee/Models/AccessControlRequestResponse.cs` |
| `RequestMagicLinkAccessError` | `src/Archbee/Errors/RequestMagicLinkAccessError.cs` |
| `AccessControlRequest400Error1` | `src/Archbee/Models/AccessControlRequest400Error1.cs` |

