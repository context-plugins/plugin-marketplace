<!-- Generated file — do not edit; regenerated with the SDK. -->

# EventTypes — operations

Accessor: `client.event_types` · Source: `nordic_financial_news/apis/event_types.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.event_types.get_api_v1_event_types

- **Route**: `GET /api/v1/event_types`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_event_types(*, fields: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `fields` — query
- **Returns (parsed)**: `ApiV1EventTypesResponse`
- **Returns (raw)**: `ApiResult[ApiV1EventTypesResponse, GetApiV1EventTypesErrorBody]`
- **Error**: `GetApiV1EventTypesErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1EventTypesResponse` | `nordic_financial_news/models/api_v1_event_types_response.py` |
| `GetApiV1EventTypesErrorBody` | `nordic_financial_news/errors/get_api_v1_event_types_error.py` |
| `ProblemDetails` | `nordic_financial_news/models/problem_details.py` |

