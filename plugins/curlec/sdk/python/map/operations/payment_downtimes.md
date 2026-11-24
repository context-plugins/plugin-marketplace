<!-- Generated file — do not edit; regenerated with the SDK. -->

# PaymentDowntimes — operations

Accessor: `client.payment_downtimes` · Source: `curlec/apis/payment_downtimes.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.payment_downtimes.fetch_payment_downtime

- **Route**: `GET /payments/downtimes/{id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def fetch_payment_downtime(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `PaymentDowntime`
- **Returns (raw)**: `ApiResult[PaymentDowntime, FetchPaymentDowntimeErrorBody]`
- **Error**: `FetchPaymentDowntimeErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaymentDowntime` | `curlec/models/payment_downtime.py` |
| `FetchPaymentDowntimeErrorBody` | `curlec/errors/fetch_payment_downtime_error.py` |
| `Error` | `curlec/models/error.py` |

### client.payment_downtimes.fetch_payment_downtimes

- **Route**: `GET /payments/downtimes`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def fetch_payment_downtimes(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `PaymentsDowntimesResponse`
- **Returns (raw)**: `ApiResult[PaymentsDowntimesResponse, FetchPaymentDowntimesErrorBody]`
- **Error**: `FetchPaymentDowntimesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaymentsDowntimesResponse` | `curlec/models/payments_downtimes_response.py` |
| `FetchPaymentDowntimesErrorBody` | `curlec/errors/fetch_payment_downtimes_error.py` |
| `Error` | `curlec/models/error.py` |

