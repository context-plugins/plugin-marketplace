<!-- Generated file — do not edit; regenerated with the SDK. -->

# PaymentMethods — operations

Accessor: `client.payment_methods` · Source: `microsoft_dynamics_nav/apis/payment_methods.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.payment_methods.list_payment_methods

- **Route**: `GET /companies({company_id})/paymentMethods`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default`
- **Signature**: `def list_payment_methods(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, select: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`
- **Params**: `company_id` — path · `top` — query `$top` · `skip` — query `$skip` · `filter_` — query `$filter` · `select` — query `$select`
- **Returns (parsed)**: `CompaniesApiPaymentMethodsResponse`
- **Returns (raw)**: `ApiResult[CompaniesApiPaymentMethodsResponse, ListPaymentMethodsErrorBody]`
- **Error**: `ListPaymentMethodsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompaniesApiPaymentMethodsResponse` | `microsoft_dynamics_nav/models/companies_api_payment_methods_response.py` |
| `ListPaymentMethodsErrorBody` | `microsoft_dynamics_nav/errors/list_payment_methods_error.py` |
| `ErrorResponse` | `microsoft_dynamics_nav/models/error_response.py` |

