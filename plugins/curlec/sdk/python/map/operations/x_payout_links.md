<!-- Generated file — do not edit; regenerated with the SDK. -->

# XPayoutLinks — operations

Accessor: `client.x_payout_links` · Source: `curlec/apis/x_payout_links.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.x_payout_links.cancel_payout_link

- **Route**: `POST /payout-links/{payout_link_id}/cancel`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def cancel_payout_link(payout_link_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `payout_link_id`
- **Params**: `payout_link_id` — path
- **Returns (parsed)**: `PayoutLink`
- **Returns (raw)**: `ApiResult[PayoutLink, CancelPayoutLinkErrorBody]`
- **Error**: `CancelPayoutLinkErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PayoutLink` | `curlec/models/payout_link.py` |
| `CancelPayoutLinkErrorBody` | `curlec/errors/cancel_payout_link_error.py` |
| `Error` | `curlec/models/error.py` |

### client.x_payout_links.create_payout_link

- **Route**: `POST /payout-links`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def create_payout_link(body: PayoutLinksRequest | PayoutLinksRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `PayoutLink`
- **Returns (raw)**: `ApiResult[PayoutLink, CreatePayoutLinkErrorBody]`
- **Error**: `CreatePayoutLinkErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PayoutLinksRequest` | `curlec/models/payout_links_request.py` |
| `PayoutLinksRequestDict` | `curlec/models/payout_links_request.py` |
| `PayoutLink` | `curlec/models/payout_link.py` |
| `CreatePayoutLinkErrorBody` | `curlec/errors/create_payout_link_error.py` |
| `Error` | `curlec/models/error.py` |

### client.x_payout_links.fetch_payout_link

- **Route**: `GET /payout-links/{payout_link_id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def fetch_payout_link(payout_link_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `payout_link_id`
- **Params**: `payout_link_id` — path
- **Returns (parsed)**: `PayoutLink`
- **Returns (raw)**: `ApiResult[PayoutLink, FetchPayoutLinkErrorBody]`
- **Error**: `FetchPayoutLinkErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PayoutLink` | `curlec/models/payout_link.py` |
| `FetchPayoutLinkErrorBody` | `curlec/errors/fetch_payout_link_error.py` |
| `Error` | `curlec/models/error.py` |

### client.x_payout_links.list_payout_links

- **Route**: `GET /payout-links`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def list_payout_links(*, contact_id: str | None = None, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `contact_id` — query · `from_` — query `from` · `to` — query · `count` — query · `skip` — query
- **Returns (parsed)**: `PayoutLinksResponse`
- **Returns (raw)**: `ApiResult[PayoutLinksResponse, ListPayoutLinksErrorBody]`
- **Error**: `ListPayoutLinksErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PayoutLinksResponse` | `curlec/models/payout_links_response.py` |
| `ListPayoutLinksErrorBody` | `curlec/errors/list_payout_links_error.py` |
| `Error` | `curlec/models/error.py` |

