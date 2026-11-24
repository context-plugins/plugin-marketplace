<!-- Generated file — do not edit; regenerated with the SDK. -->

# Permissions — operations

Accessor: `client.permissions` · Source: `amazon_sqs/apis/permissions.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.permissions.add_permission

- **Route**: `POST /#AddPermission`
- **Auth**: `sigv4`
- **Signature**: `def add_permission(x_amz_target: XAmzTargetAmazonSimpleQueueServicePermissionsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, AddPermissionErrorBody]`
- **Error**: `AddPermissionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAmazonSimpleQueueServicePermissionsApiOrStr` | `amazon_sqs/models/enums/x_amz_target_amazon_simple_queue_service_permissions_api.py` |
| `AddPermissionErrorBody` | `amazon_sqs/errors/add_permission_error.py` |

### client.permissions.remove_permission

- **Route**: `POST /#RemovePermission`
- **Auth**: `sigv4`
- **Signature**: `def remove_permission(x_amz_target: XAmzTarget1AmazonSimpleQueueServicePermissionsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RemovePermissionErrorBody]`
- **Error**: `RemovePermissionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AmazonSimpleQueueServicePermissionsApiOrStr` | `amazon_sqs/models/enums/x_amz_target1_amazon_simple_queue_service_permissions_api.py` |
| `RemovePermissionErrorBody` | `amazon_sqs/errors/remove_permission_error.py` |

