<!-- Generated file — do not edit; regenerated with the SDK. -->

# BillingAndCredits — operations

Accessor: `client.billing_and_credits` · Source: `skribble/apis/billing_and_credits.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.billing_and_credits.get_billing_credits_infos

- **Route**: `GET /billing/credits/infos`
- **Server**: `default_skribble_additional_information_api`
- **Signature**: `def get_billing_credits_infos(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `BillingCreditInfos`
- **Returns (raw)**: `ApiResult[BillingCreditInfos, GetBillingCreditsInfosErrorBody]`
- **Error**: `GetBillingCreditsInfosErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemSkribbleAdditionalInformationApi` [400, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BillingCreditInfos` | `skribble/models/billing_credit_infos.py` |
| `GetBillingCreditsInfosErrorBody` | `skribble/errors/get_billing_credits_infos_error.py` |
| `ProblemSkribbleAdditionalInformationApi` | `skribble/models/problem_skribble_additional_information_api.py` |

### client.billing_and_credits.get_billing_credits_invoiced

- **Route**: `GET /billing/credits/invoiced`
- **Auth**: `bearer`
- **Server**: `default_skribble_additional_information_api`
- **Signature**: `def get_billing_credits_invoiced(*, period: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `period` — query
- **Returns (parsed)**: `BillingCreditUsage`
- **Returns (raw)**: `ApiResult[BillingCreditUsage, GetBillingCreditsInvoicedErrorBody]`
- **Error**: `GetBillingCreditsInvoicedErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemSkribbleAdditionalInformationApi` [400, 401, 403, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BillingCreditUsage` | `skribble/models/billing_credit_usage.py` |
| `GetBillingCreditsInvoicedErrorBody` | `skribble/errors/get_billing_credits_invoiced_error.py` |
| `ProblemSkribbleAdditionalInformationApi` | `skribble/models/problem_skribble_additional_information_api.py` |

### client.billing_and_credits.get_billing_credits_usage

- **Route**: `GET /billing/credits/usage`
- **Auth**: `bearer`
- **Server**: `default_skribble_additional_information_api`
- **Signature**: `def get_billing_credits_usage(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `BillingCreditUsage`
- **Returns (raw)**: `ApiResult[BillingCreditUsage, GetBillingCreditsUsageErrorBody]`
- **Error**: `GetBillingCreditsUsageErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemSkribbleAdditionalInformationApi` [400, 401, 403, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BillingCreditUsage` | `skribble/models/billing_credit_usage.py` |
| `GetBillingCreditsUsageErrorBody` | `skribble/errors/get_billing_credits_usage_error.py` |
| `ProblemSkribbleAdditionalInformationApi` | `skribble/models/problem_skribble_additional_information_api.py` |

