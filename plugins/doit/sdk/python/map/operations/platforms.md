<!-- Generated file — do not edit; regenerated with the SDK. -->

# Platforms — operations

Accessor: `client.platforms` · Source: `doi_t/apis/platforms.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.platforms.list_platforms

- **Route**: `GET /support/v1/metadata/platforms`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_platforms(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `SupportV1MetadataPlatformsResponse`
- **Returns (raw)**: `ApiResult[SupportV1MetadataPlatformsResponse, ListPlatformsErrorBody]`
- **Error**: `ListPlatformsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SupportV1MetadataPlatformsResponse` | `doi_t/models/support_v1_metadata_platforms_response.py` |
| `ListPlatformsErrorBody` | `doi_t/errors/list_platforms_error.py` |
| `Error` | `doi_t/models/error.py` |

