<!-- Generated file — do not edit; regenerated with the SDK. -->

# Versions — operations

Accessor: `client.versions` · Source: `salesforce_service_cloud/apis/versions.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.versions.get_api_versions

- **Route**: `GET /versions`
- **Server**: `default`
- **Signature**: `def get_api_versions(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `SupportedVersions`
- **Returns (raw)**: `ApiResult[SupportedVersions, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `SupportedVersions` | `salesforce_service_cloud/models/supported_versions.py` |

