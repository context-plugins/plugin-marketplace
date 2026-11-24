<!-- Generated file — do not edit; regenerated with the SDK. -->

# ChangeFeed — operations

Accessor: `client.change_feed` · Source: `common_elements/apis/change_feed.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.change_feed.changes

- **Route**: `GET /api/v1/changes`
- **Auth**: `bearer_auth`
- **Signature**: `def changes(*, kind: str | None = None, state: str | None = None, county: str | None = None, subtype: str | None = None, since: str | None = None, until: str | None = None, min_units: float | None = None, max_units: float | None = None, min_magnitude: float | None = None, limit: float | None = None, offset: float | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `kind` — query · `state` — query · `county` — query · `subtype` — query · `since` — query · `until` — query · `min_units` — query · `max_units` — query · `min_magnitude` — query · `limit` — query · `offset` — query
- **Returns (parsed)**: `ApiV1ChangesResponse`
- **Returns (raw)**: `ApiResult[ApiV1ChangesResponse, ChangesErrorBody]`
- **Error**: `ChangesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ChangesResponse` | `common_elements/models/api_v1_changes_response.py` |
| `ChangesErrorBody` | `common_elements/errors/changes_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.change_feed.changes_summary

- **Route**: `GET /api/v1/changes/summary`
- **Auth**: `bearer_auth`
- **Signature**: `def changes_summary(*, since: str | None = None, state: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `since` — query · `state` — query
- **Returns (parsed)**: `ApiV1ChangesSummaryResponse`
- **Returns (raw)**: `ApiResult[ApiV1ChangesSummaryResponse, ChangesSummaryErrorBody]`
- **Error**: `ChangesSummaryErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ChangesSummaryResponse` | `common_elements/models/api_v1_changes_summary_response.py` |
| `ChangesSummaryErrorBody` | `common_elements/errors/changes_summary_error.py` |
| `Error` | `common_elements/models/error.py` |

