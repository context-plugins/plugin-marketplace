# DeviceRoleController — operations

Accessor: `client.DeviceRoleController` · Source: `Api/DeviceRoleController.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetAclrulesByVendorId
- **HTTP**: `GET /api/v1/device-roles/vendor` (ImpServer (imp))
- **Notes**: This API allows the user to get the access control rules defined for them.
- **Signature**: `GetAclrulesByVendorId(string vendorId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `VendorID` ← `vendorId`
- **Returns**: `IReadOnlyList<DeviceRole>`
- **Error**: `SdkException<GetAclrulesByVendorIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
