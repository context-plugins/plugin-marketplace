<!-- Generated file — do not edit; regenerated with the SDK. -->

# PackageDependencies — operations

Accessor: `client.package_dependencies` · Source: `atlassian_compass/apis/package_dependencies.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.package_dependencies.delete_lock_file

- **Route**: `DELETE /compass/v1/package_dependencies/lock_file/{componentId}/{sourceId}`
- **Auth**: `basic_auth`
- **Signature**: `def delete_lock_file(component_id: str, source_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `component_id`, `source_id`
- **Params**: `component_id` — path `componentId` · `source_id` — path `sourceId`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteLockFileErrorBody]`
- **Error**: `DeleteLockFileErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteLockFileErrorBody` | `atlassian_compass/errors/delete_lock_file_error.py` |

### client.package_dependencies.upload_lock_file

- **Route**: `PUT /compass/v1/package_dependencies/lock_file`
- **Auth**: `basic_auth`
- **Signature**: `def upload_lock_file(source_id: str, base_source_url: str, component_id: str, file: FileInput, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `source_id`, `base_source_url`, `component_id`, `file`
- **Params**: `source_id` — query `sourceId` · `base_source_url` — query `baseSourceUrl` · `component_id` — query `componentId` · `file` — multipart file
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UploadLockFileErrorBody]`
- **Error**: `UploadLockFileErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `UploadLockFileErrorBody` | `atlassian_compass/errors/upload_lock_file_error.py` |

