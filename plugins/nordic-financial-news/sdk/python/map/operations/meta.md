<!-- Generated file — do not edit; regenerated with the SDK. -->

# Meta — operations

Accessor: `client.meta` · Source: `nordic_financial_news/apis/meta.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.meta.get_api_v1_meta

- **Route**: `GET /api/v1/meta`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_meta(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ApiV1MetaResponse`
- **Returns (raw)**: `ApiResult[ApiV1MetaResponse, GetApiV1MetaErrorBody]`
- **Error**: `GetApiV1MetaErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1MetaResponse` | `nordic_financial_news/models/api_v1_meta_response.py` |
| `GetApiV1MetaErrorBody` | `nordic_financial_news/errors/get_api_v1_meta_error.py` |
| `ProblemDetails` | `nordic_financial_news/models/problem_details.py` |

