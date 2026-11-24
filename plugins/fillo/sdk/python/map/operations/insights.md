<!-- Generated file — do not edit; regenerated with the SDK. -->

# Insights — operations

Accessor: `client.insights` · Source: `fillo/apis/insights.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.insights.get_form_insights

- **Route**: `GET /api/v1/manage/forms/{form}/insights`
- **Auth**: `bearer_auth`
- **Signature**: `def get_form_insights(form: str, *, range_: RangeOrStr | None = None, q: str | None = None, source: str | None = None, respondent: str | None = None, where: list[str] | None = None, by: str | None = None, op: OpOrStr | None = None, eq: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `form`
- **Params**: `form` — path · `range_` — query `range` · `q` — query · `source` — query · `respondent` — query · `where` — query · `by` — query · `op` — query · `eq` — query
- **Returns (parsed)**: `FormInsights`
- **Returns (raw)**: `ApiResult[FormInsights, GetFormInsightsErrorBody]`
- **Error**: `GetFormInsightsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RangeOrStr` | `fillo/models/enums/range.py` |
| `OpOrStr` | `fillo/models/enums/op.py` |
| `FormInsights` | `fillo/models/form_insights.py` |
| `GetFormInsightsErrorBody` | `fillo/errors/get_form_insights_error.py` |
| `Error` | `fillo/models/error.py` |

