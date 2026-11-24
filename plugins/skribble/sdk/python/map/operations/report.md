<!-- Generated file — do not edit; regenerated with the SDK. -->

# Report — operations

Accessor: `client.report` · Source: `skribble/apis/report.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.report.get_activities_signatures_by_business

- **Route**: `GET /activities/signatures`
- **Auth**: `bearer`
- **Server**: `default_skribble_report_api`
- **Signature**: `def get_activities_signatures_by_business(start_date: Date, end_date: Date, *, page: float | None = 1.0, size: float | None = 25.0, sort: SortOrStr | None = Sort.DESC, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `start_date`, `end_date`
- **Params**: `start_date` — query · `end_date` — query · `page` — query · `size` — query · `sort` — query
- **Returns (parsed)**: `ActivitiesSignaturesByBusinessResponse`
- **Returns (raw)**: `ApiResult[ActivitiesSignaturesByBusinessResponse, GetActivitiesSignaturesByBusinessErrorBody]`
- **Error**: `GetActivitiesSignaturesByBusinessErrorBody` — **Case A (typed)**
- **Error arms**: `Problem` [400, 401, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SortOrStr` | `skribble/models/enums/sort.py` |
| `ActivitiesSignaturesByBusinessResponse` | `skribble/models/activities_signatures_by_business_response.py` |
| `GetActivitiesSignaturesByBusinessErrorBody` | `skribble/errors/get_activities_signatures_by_business_error.py` |
| `Problem` | `skribble/models/problem.py` |

