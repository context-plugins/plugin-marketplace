<!-- Generated file — do not edit; regenerated with the SDK. -->

# Service — operations

Accessor: `client.service` · Source: `sapling/apis/service.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.service.sapling_liveness

- **Route**: `GET /api/v1/liveness`
- **Signature**: `def sapling_liveness(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ApiV1LivenessResponse`
- **Returns (raw)**: `ApiResult[ApiV1LivenessResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV1LivenessResponse` | `sapling/models/api_v1_liveness_response.py` |

### client.service.sapling_version

- **Route**: `GET /api/v1/version`
- **Signature**: `def sapling_version(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ApiV1VersionResponse`
- **Returns (raw)**: `ApiResult[ApiV1VersionResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV1VersionResponse` | `sapling/models/api_v1_version_response.py` |

