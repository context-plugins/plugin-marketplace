<!-- Generated file — do not edit; regenerated with the SDK. -->

# FeatureOptIn — operations

Accessor: `client.feature_opt_in` · Source: `dev_cycle/apis/feature_opt_in.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.feature_opt_in.get_v1_opt_in_config

- **Route**: `GET /v1/optInConfig`
- **Server**: `default_dev_cycle_bucketing_bucketing_api`
- **Signature**: `def get_v1_opt_in_config(user_id: str, *, sdk_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`
- **Params**: `user_id` — query · `sdk_key` — query `sdkKey`
- **Returns (parsed)**: `OptInConfigResponse`
- **Returns (raw)**: `ApiResult[OptInConfigResponse, GetV1OptInConfigErrorBody]`
- **Error**: `GetV1OptInConfigErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OptInConfigResponse` | `dev_cycle/models/opt_in_config_response.py` |
| `GetV1OptInConfigErrorBody` | `dev_cycle/errors/get_v1_opt_in_config_error.py` |
| `ErrorResponse` | `dev_cycle/models/error_response.py` |

### client.feature_opt_in.put_v1_opt_ins_by_user_id

- **Route**: `PUT /v1/optIns/{user_id}`
- **Server**: `default_dev_cycle_bucketing_bucketing_api`
- **Signature**: `def put_v1_opt_ins_by_user_id(user_id: str, body: dict[str, bool], *, sdk_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`, `body`
- **Params**: `user_id` — path · `sdk_key` — query `sdkKey` · `body` — JSON body
- **Returns (parsed)**: `V1OptInsResponse`
- **Returns (raw)**: `ApiResult[V1OptInsResponse, PutV1OptInsByUserIdErrorBody]`
- **Error**: `PutV1OptInsByUserIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1OptInsResponse` | `dev_cycle/models/v1_opt_ins_response.py` |
| `PutV1OptInsByUserIdErrorBody` | `dev_cycle/errors/put_v1_opt_ins_by_user_id_error.py` |
| `ErrorResponse` | `dev_cycle/models/error_response.py` |

