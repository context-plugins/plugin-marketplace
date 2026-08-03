# ScaAssociationManagement — operations

Accessor: `client.ScaAssociationManagement` · Source: `Api/ScaAssociationManagement.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteScaAssociations
- **HTTP**: `DELETE /scaAssociations` (Default (balanceplatform-api-test))
- **Notes**: Deletes one or more SCA associations for a device.
- **Signature**: `DeleteScaAssociations(string wwwAuthenticate, ContentType3 contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteScaAssociationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetScaAssociations401Error1(out ScaAssociations401Error1)` [401] · `TryGetScaAssociations403Error1(out ScaAssociations403Error1)` [403] · `TryGetScaAssociations500Error1(out ScaAssociations500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetScaAssociations
- **HTTP**: `GET /scaAssociations` (Default (balanceplatform-api-test))
- **Notes**: Returns a paginated list of the SCA devices associated with a specific entity.
- **Signature**: `GetScaAssociations(ScaEntityType5 entityType, string entityId, int pageSize, int pageNumber, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `entityType` ← `entityType`, `entityId` ← `entityId`, `pageSize` ← `pageSize`, `pageNumber` ← `pageNumber`
- **Returns**: `ListAssociationsResponse`
- **Error**: `SdkException<GetScaAssociationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetScaAssociations400Error1(out ScaAssociations400Error1)` [400] · `TryGetScaAssociations401Error1(out ScaAssociations401Error1)` [401] · `TryGetScaAssociations403Error1(out ScaAssociations403Error1)` [403] · `TryGetScaAssociations500Error1(out ScaAssociations500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchScaAssociations
- **HTTP**: `PATCH /scaAssociations` (Default (balanceplatform-api-test))
- **Notes**: Approves a previously created association that is in a pending state.
- **Signature**: `PatchScaAssociations(string wwwAuthenticate, ApproveAssociationRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ApproveAssociationResponse`
- **Error**: `SdkException<PatchScaAssociationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetScaAssociations401Error1(out ScaAssociations401Error1)` [401] · `TryGetScaAssociations403Error1(out ScaAssociations403Error1)` [403] · `TryGetScaAssociations500Error1(out ScaAssociations500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
