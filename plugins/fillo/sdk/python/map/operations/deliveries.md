<!-- Generated file — do not edit; regenerated with the SDK. -->

# Deliveries — operations

Accessor: `client.deliveries` · Source: `fillo/apis/deliveries.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.deliveries.get_form_deliveries

- **Route**: `GET /api/v1/manage/forms/{form}/deliveries`
- **Auth**: `bearer_auth`
- **Signature**: `def get_form_deliveries(form: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `form`
- **Params**: `form` — path
- **Returns (parsed)**: `DeliveryHealth`
- **Returns (raw)**: `ApiResult[DeliveryHealth, GetFormDeliveriesErrorBody]`
- **Error**: `GetFormDeliveriesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeliveryHealth` | `fillo/models/delivery_health.py` |
| `GetFormDeliveriesErrorBody` | `fillo/errors/get_form_deliveries_error.py` |
| `Error` | `fillo/models/error.py` |

### client.deliveries.redeliver_form_responses

- **Route**: `POST /api/v1/manage/forms/{form}/deliveries/redeliver`
- **Auth**: `bearer_auth`
- **Signature**: `def redeliver_form_responses(form: str, body: ApiV1ManageFormsDeliveriesRedeliverRequest | ApiV1ManageFormsDeliveriesRedeliverRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `form`, `body`
- **Params**: `form` — path · `body` — JSON body
- **Returns (parsed)**: `ApiV1ManageFormsDeliveriesRedeliverResponse`
- **Returns (raw)**: `ApiResult[ApiV1ManageFormsDeliveriesRedeliverResponse, RedeliverFormResponsesErrorBody]`
- **Error**: `RedeliverFormResponsesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 413, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ManageFormsDeliveriesRedeliverRequest` | `fillo/models/api_v1_manage_forms_deliveries_redeliver_request.py` |
| `ApiV1ManageFormsDeliveriesRedeliverRequestDict` | `fillo/models/api_v1_manage_forms_deliveries_redeliver_request.py` |
| `ApiV1ManageFormsDeliveriesRedeliverResponse` | `fillo/models/api_v1_manage_forms_deliveries_redeliver_response.py` |
| `RedeliverFormResponsesErrorBody` | `fillo/errors/redeliver_form_responses_error.py` |
| `Error` | `fillo/models/error.py` |

### client.deliveries.retry_form_deliveries

- **Route**: `POST /api/v1/manage/forms/{form}/deliveries/retry`
- **Auth**: `bearer_auth`
- **Signature**: `def retry_form_deliveries(form: str, body: ApiV1ManageFormsDeliveriesRetryRequest | ApiV1ManageFormsDeliveriesRetryRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `form`, `body`
- **Params**: `form` — path · `body` — JSON body
- **Returns (parsed)**: `ApiV1ManageFormsDeliveriesRetryResponse`
- **Returns (raw)**: `ApiResult[ApiV1ManageFormsDeliveriesRetryResponse, RetryFormDeliveriesErrorBody]`
- **Error**: `RetryFormDeliveriesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 413, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ManageFormsDeliveriesRetryRequest` | `fillo/models/api_v1_manage_forms_deliveries_retry_request.py` |
| `ApiV1ManageFormsDeliveriesRetryRequestDict` | `fillo/models/api_v1_manage_forms_deliveries_retry_request.py` |
| `ApiV1ManageFormsDeliveriesRetryResponse` | `fillo/models/api_v1_manage_forms_deliveries_retry_response.py` |
| `RetryFormDeliveriesErrorBody` | `fillo/errors/retry_form_deliveries_error.py` |
| `Error` | `fillo/models/error.py` |

