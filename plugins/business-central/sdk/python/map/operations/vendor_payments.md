<!-- Generated file — do not edit; regenerated with the SDK. -->

# VendorPayments — operations

Accessor: `client.vendor_payments` · Source: `dynamics_365_business_central/apis/vendor_payments.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.vendor_payments.list_vendor_payment_journals

- **Route**: `GET /companies({company_id})/vendorPaymentJournals`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default`
- **Signature**: `def list_vendor_payment_journals(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, select: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`
- **Params**: `company_id` — path · `top` — query `$top` · `skip` — query `$skip` · `filter_` — query `$filter` · `select` — query `$select`
- **Returns (parsed)**: `CompaniesApiVendorPaymentJournalsResponse`
- **Returns (raw)**: `ApiResult[CompaniesApiVendorPaymentJournalsResponse, ListVendorPaymentJournalsErrorBody]`
- **Error**: `ListVendorPaymentJournalsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompaniesApiVendorPaymentJournalsResponse` | `dynamics_365_business_central/models/companies_api_vendor_payment_journals_response.py` |
| `ListVendorPaymentJournalsErrorBody` | `dynamics_365_business_central/errors/list_vendor_payment_journals_error.py` |
| `ErrorResponse` | `dynamics_365_business_central/models/error_response.py` |

