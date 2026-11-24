<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebsiteVisits — operations

Accessor: `client.website_visits` · Source: `lusha/apis/website_visits.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.website_visits.get_website_visits

- **Route**: `POST /v3/companies/website-visits`
- **Auth**: `api_key_auth`
- **Signature**: `def get_website_visits(body: WebsiteVisitsRequest | WebsiteVisitsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `WebsiteVisitsResponse`
- **Returns (raw)**: `ApiResult[WebsiteVisitsResponse, GetWebsiteVisitsErrorBody]`
- **Error**: `GetWebsiteVisitsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 402, 403, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WebsiteVisitsRequest` | `lusha/models/website_visits_request.py` |
| `WebsiteVisitsRequestDict` | `lusha/models/website_visits_request.py` |
| `WebsiteVisitsResponse` | `lusha/models/website_visits_response.py` |
| `GetWebsiteVisitsErrorBody` | `lusha/errors/get_website_visits_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

