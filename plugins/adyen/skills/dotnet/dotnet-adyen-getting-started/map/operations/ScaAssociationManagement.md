# ScaAssociationManagement — operations

Accessor: `client.ScaAssociationManagement` · Source: `Api/ScaAssociationManagement.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteScaAssociations
- **HTTP**: `DELETE /scaAssociations` (Default13 (balanceplatform-api-test))
- **Notes**: Deletes one or more SCA associations for a device.
- **Signature**: `DeleteScaAssociations(string wwwAuthenticate, RemoveAssociationRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteScaAssociationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [401, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetScaAssociations
- **HTTP**: `GET /scaAssociations` (Default13 (balanceplatform-api-test))
- **Notes**: Returns a paginated list of the SCA devices associated with a specific entity.
- **Signature**: `GetScaAssociations(ScaEntityType entityType, string entityId, int pageSize, int pageNumber, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `entityType` ← `entityType`, `entityId` ← `entityId`, `pageSize` ← `pageSize`, `pageNumber` ← `pageNumber`
- **Returns**: `ListAssociationsResponse`
- **Error**: `SdkException<GetScaAssociationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchScaAssociations
- **HTTP**: `PATCH /scaAssociations` (Default13 (balanceplatform-api-test))
- **Notes**: Approves a previously created association that is in a pending state.
- **Signature**: `PatchScaAssociations(string wwwAuthenticate, ApproveAssociationRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ApproveAssociationResponse`
- **Error**: `SdkException<PatchScaAssociationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [401, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
