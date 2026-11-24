<!-- Generated file — do not edit; regenerated with the SDK. -->

# Checkouts — operations

Accessor: `client.checkouts` · Source: `paid/apis/checkouts.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.checkouts.archive_checkout

- **Route**: `DELETE /checkouts/{id}`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def archive_checkout(id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `authorization`
- **Params**: `id_` — path `id` · `authorization` — header `Authorization`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, ArchiveCheckoutErrorBody]`
- **Error**: `ArchiveCheckoutErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ArchiveCheckoutErrorBody` | `paid/errors/archive_checkout_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.checkouts.create_checkout

- **Route**: `POST /checkouts/`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def create_checkout(authorization: str, *, body: CreateCheckoutRequest | CreateCheckoutRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `Checkout`
- **Returns (raw)**: `ApiResult[Checkout, CreateCheckoutErrorBody]`
- **Error**: `CreateCheckoutErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateCheckoutRequest` | `paid/models/create_checkout_request.py` |
| `CreateCheckoutRequestDict` | `paid/models/create_checkout_request.py` |
| `Checkout` | `paid/models/checkout.py` |
| `CreateCheckoutErrorBody` | `paid/errors/create_checkout_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.checkouts.get_checkout

- **Route**: `GET /checkouts/{id}`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def get_checkout(id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `authorization`
- **Params**: `id_` — path `id` · `authorization` — header `Authorization`
- **Returns (parsed)**: `CheckoutDetails`
- **Returns (raw)**: `ApiResult[CheckoutDetails, GetCheckoutErrorBody]`
- **Error**: `GetCheckoutErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CheckoutDetails` | `paid/models/checkout_details.py` |
| `GetCheckoutErrorBody` | `paid/errors/get_checkout_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.checkouts.list_checkouts

- **Route**: `GET /checkouts/`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def list_checkouts(authorization: str, *, limit: int | None = 10, offset: int | None = None, status: CheckoutsGetParametersStatusOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `limit` — query · `offset` — query · `status` — query · `authorization` — header `Authorization`
- **Returns (parsed)**: `CheckoutListResponse`
- **Returns (raw)**: `ApiResult[CheckoutListResponse, ListCheckoutsErrorBody]`
- **Error**: `ListCheckoutsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CheckoutsGetParametersStatusOrStr` | `paid/models/enums/checkouts_get_parameters_status.py` |
| `CheckoutListResponse` | `paid/models/checkout_list_response.py` |
| `ListCheckoutsErrorBody` | `paid/errors/list_checkouts_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

