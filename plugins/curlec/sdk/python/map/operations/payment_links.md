<!-- Generated file — do not edit; regenerated with the SDK. -->

# PaymentLinks — operations

Accessor: `client.payment_links` · Source: `curlec/apis/payment_links.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.payment_links.cancel_payment_link

- **Route**: `POST /payment_links/{id}/cancel`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def cancel_payment_link(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `PaymentLink`
- **Returns (raw)**: `ApiResult[PaymentLink, CancelPaymentLinkErrorBody]`
- **Error**: `CancelPaymentLinkErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaymentLink` | `curlec/models/payment_link.py` |
| `CancelPaymentLinkErrorBody` | `curlec/errors/cancel_payment_link_error.py` |
| `Error` | `curlec/models/error.py` |

### client.payment_links.create_payment_link

- **Route**: `POST /payment_links`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def create_payment_link(body: PaymentLinksRequest | PaymentLinksRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `PaymentLink`
- **Returns (raw)**: `ApiResult[PaymentLink, CreatePaymentLinkErrorBody]`
- **Error**: `CreatePaymentLinkErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaymentLinksRequest` | `curlec/models/payment_links_request.py` |
| `PaymentLinksRequestDict` | `curlec/models/payment_links_request.py` |
| `PaymentLink` | `curlec/models/payment_link.py` |
| `CreatePaymentLinkErrorBody` | `curlec/errors/create_payment_link_error.py` |
| `Error` | `curlec/models/error.py` |

### client.payment_links.fetch_all_payment_links

- **Route**: `GET /payment_links`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def fetch_all_payment_links(*, payment_id: str | None = None, reference_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `payment_id` — query · `reference_id` — query
- **Returns (parsed)**: `PaymentLinksResponse`
- **Returns (raw)**: `ApiResult[PaymentLinksResponse, FetchAllPaymentLinksErrorBody]`
- **Error**: `FetchAllPaymentLinksErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaymentLinksResponse` | `curlec/models/payment_links_response.py` |
| `FetchAllPaymentLinksErrorBody` | `curlec/errors/fetch_all_payment_links_error.py` |
| `Error` | `curlec/models/error.py` |

### client.payment_links.fetch_payment_link

- **Route**: `GET /payment_links/{id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def fetch_payment_link(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `PaymentLink`
- **Returns (raw)**: `ApiResult[PaymentLink, FetchPaymentLinkErrorBody]`
- **Error**: `FetchPaymentLinkErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaymentLink` | `curlec/models/payment_link.py` |
| `FetchPaymentLinkErrorBody` | `curlec/errors/fetch_payment_link_error.py` |
| `Error` | `curlec/models/error.py` |

### client.payment_links.resend_payment_link_notification

- **Route**: `POST /payment_links/{id}/notify_by/{medium}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def resend_payment_link_notification(id_: str, medium: MediumOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `medium`
- **Params**: `id_` — path `id` · `medium` — path
- **Returns (parsed)**: `PaymentLinksNotifyByResponse`
- **Returns (raw)**: `ApiResult[PaymentLinksNotifyByResponse, ResendPaymentLinkNotificationErrorBody]`
- **Error**: `ResendPaymentLinkNotificationErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MediumOrStr` | `curlec/models/enums/medium.py` |
| `PaymentLinksNotifyByResponse` | `curlec/models/payment_links_notify_by_response.py` |
| `ResendPaymentLinkNotificationErrorBody` | `curlec/errors/resend_payment_link_notification_error.py` |
| `Error` | `curlec/models/error.py` |

### client.payment_links.update_payment_link

- **Route**: `PATCH /payment_links/{id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def update_payment_link(id_: str, body: PaymentLinksRequest1 | PaymentLinksRequest1Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `PaymentLink`
- **Returns (raw)**: `ApiResult[PaymentLink, UpdatePaymentLinkErrorBody]`
- **Error**: `UpdatePaymentLinkErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaymentLinksRequest1` | `curlec/models/payment_links_request1.py` |
| `PaymentLinksRequest1Dict` | `curlec/models/payment_links_request1.py` |
| `PaymentLink` | `curlec/models/payment_link.py` |
| `UpdatePaymentLinkErrorBody` | `curlec/errors/update_payment_link_error.py` |
| `Error` | `curlec/models/error.py` |

