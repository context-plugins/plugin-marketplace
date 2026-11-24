<!-- Generated file — do not edit; regenerated with the SDK. -->

# Schedules — operations

Accessor: `client.schedules` · Source: `deliverd/apis/schedules.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.schedules.delete_api_v1_schedules_by_id

- **Route**: `DELETE /api/v1/schedules/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def delete_api_v1_schedules_by_id(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteApiV1SchedulesByIdErrorBody]`
- **Error**: `DeleteApiV1SchedulesByIdErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteApiV1SchedulesByIdErrorBody` | `deliverd/errors/delete_api_v1_schedules_by_id_error.py` |

### client.schedules.get_api_v1_schedules

- **Route**: `GET /api/v1/schedules`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_schedules(*, due: DueOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `due` — query
- **Returns (parsed)**: `ApiV1SchedulesResponse`
- **Returns (raw)**: `ApiResult[ApiV1SchedulesResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `DueOrStr` | `deliverd/models/enums/due.py` |
| `ApiV1SchedulesResponse` | `deliverd/models/api_v1_schedules_response.py` |

### client.schedules.patch_api_v1_schedules_by_id

- **Route**: `PATCH /api/v1/schedules/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def patch_api_v1_schedules_by_id(id_: str, *, body: ApiV1SchedulesRequest1 | ApiV1SchedulesRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `ApiV1SchedulesResponse1`
- **Returns (raw)**: `ApiResult[ApiV1SchedulesResponse1, PatchApiV1SchedulesByIdErrorBody]`
- **Error**: `PatchApiV1SchedulesByIdErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1SchedulesRequest1` | `deliverd/models/api_v1_schedules_request1.py` |
| `ApiV1SchedulesRequest1Dict` | `deliverd/models/api_v1_schedules_request1.py` |
| `ApiV1SchedulesResponse1` | `deliverd/models/api_v1_schedules_response1.py` |
| `PatchApiV1SchedulesByIdErrorBody` | `deliverd/errors/patch_api_v1_schedules_by_id_error.py` |

### client.schedules.post_api_v1_schedules

- **Route**: `POST /api/v1/schedules`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_schedules(*, body: ApiV1SchedulesRequest | ApiV1SchedulesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1SchedulesResponse1`
- **Returns (raw)**: `ApiResult[ApiV1SchedulesResponse1, PostApiV1SchedulesErrorBody]`
- **Error**: `PostApiV1SchedulesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 404, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1SchedulesRequest` | `deliverd/models/api_v1_schedules_request.py` |
| `ApiV1SchedulesRequestDict` | `deliverd/models/api_v1_schedules_request.py` |
| `ApiV1SchedulesResponse1` | `deliverd/models/api_v1_schedules_response1.py` |
| `PostApiV1SchedulesErrorBody` | `deliverd/errors/post_api_v1_schedules_error.py` |

