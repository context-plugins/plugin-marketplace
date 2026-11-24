<!-- Generated file — do not edit; regenerated with the SDK. -->

# EdgeDb — operations

Accessor: `client.edge_db` · Source: `dev_cycle/apis/edge_db.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.edge_db.patch_v1_edgedb_by_user_id

- **Route**: `PATCH /v1/edgedb/{user_id}`
- **Server**: `default_dev_cycle_bucketing_bucketing_api`
- **Signature**: `def patch_v1_edgedb_by_user_id(user_id: str, body: UserDataEdgeDb | UserDataEdgeDbDict, *, sdk_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`, `body`
- **Params**: `user_id` — path · `sdk_key` — query `sdkKey` · `body` — JSON body
- **Returns (parsed)**: `EdgeDbApiResponse`
- **Returns (raw)**: `ApiResult[EdgeDbApiResponse, PatchV1EdgedbByUserIdErrorBody]`
- **Error**: `PatchV1EdgedbByUserIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UserDataEdgeDb` | `dev_cycle/models/user_data_edge_db.py` |
| `UserDataEdgeDbDict` | `dev_cycle/models/user_data_edge_db.py` |
| `EdgeDbApiResponse` | `dev_cycle/models/edge_db_api_response.py` |
| `PatchV1EdgedbByUserIdErrorBody` | `dev_cycle/errors/patch_v1_edgedb_by_user_id_error.py` |
| `ErrorResponse` | `dev_cycle/models/error_response.py` |

