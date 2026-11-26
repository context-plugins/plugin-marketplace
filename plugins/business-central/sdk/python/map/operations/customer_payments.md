<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomerPayments — operations

Accessor: `client.customer_payments` · Source: `dynamics_365_business_central/apis/customer_payments.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.customer_payments.list_customer_payment_journals

- **Route**: `GET /companies({company_id})/customerPaymentJournals`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default`
- **Signature**: `def list_customer_payment_journals(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, select: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`
- **Params**: `company_id` — path · `top` — query `$top` · `skip` — query `$skip` · `filter_` — query `$filter` · `select` — query `$select`
- **Returns (parsed)**: `CompaniesApiCustomerPaymentJournalsResponse`
- **Returns (raw)**: `ApiResult[CompaniesApiCustomerPaymentJournalsResponse, ListCustomerPaymentJournalsErrorBody]`
- **Error**: `ListCustomerPaymentJournalsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompaniesApiCustomerPaymentJournalsResponse` | `dynamics_365_business_central/models/companies_api_customer_payment_journals_response.py` |
| `ListCustomerPaymentJournalsErrorBody` | `dynamics_365_business_central/errors/list_customer_payment_journals_error.py` |
| `ErrorResponse` | `dynamics_365_business_central/models/error_response.py` |

