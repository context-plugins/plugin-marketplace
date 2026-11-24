<!-- Generated file — do not edit; regenerated with the SDK. -->

# BillingExplainerApi — operations

Accessor: `client.billing_explainer_api` · Source: `doi_t/apis/billing_explainer_api.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.billing_explainer_api.get_billing_explainer_per_payer

- **Route**: `GET /billing/v1/billing-explainers/{invoiceMonth}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_billing_explainer_per_payer(invoice_month: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `invoice_month`
- **Params**: `invoice_month` — path `invoiceMonth` · `x_tenant_id` — header `X-Tenant-Id`
- **Returns (parsed)**: `BillingExplainerCustomer`
- **Returns (raw)**: `ApiResult[BillingExplainerCustomer, GetBillingExplainerPerPayerErrorBody]`
- **Error**: `GetBillingExplainerPerPayerErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BillingExplainerCustomer` | `doi_t/models/billing_explainer_customer.py` |
| `GetBillingExplainerPerPayerErrorBody` | `doi_t/errors/get_billing_explainer_per_payer_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

### client.billing_explainer_api.get_entity_invoice_explainer

- **Route**: `GET /billing/v1/billing-profiles/{billingProfileId}/billing-explainers/{invoiceNumber}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_entity_invoice_explainer(billing_profile_id: str, invoice_number: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `billing_profile_id`, `invoice_number`
- **Params**: `billing_profile_id` — path `billingProfileId` · `invoice_number` — path `invoiceNumber` · `x_tenant_id` — header `X-Tenant-Id`
- **Returns (parsed)**: `EntityInvoiceExplainer`
- **Returns (raw)**: `ApiResult[EntityInvoiceExplainer, GetEntityInvoiceExplainerErrorBody]`
- **Error**: `GetEntityInvoiceExplainerErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EntityInvoiceExplainer` | `doi_t/models/entity_invoice_explainer.py` |
| `GetEntityInvoiceExplainerErrorBody` | `doi_t/errors/get_entity_invoice_explainer_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

