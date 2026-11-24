<!-- Generated file — do not edit; regenerated with the SDK. -->

# Credit — operations

Accessor: `client.credit` · Source: `bundle_social/apis/credit.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.credit.credit_get_credit_balance

- **Route**: `GET /api/v1/billing/credits/balance`
- **Auth**: `api_key_auth`
- **Signature**: `def credit_get_credit_balance(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ApiV1BillingCreditsBalanceResponse`
- **Returns (raw)**: `ApiResult[ApiV1BillingCreditsBalanceResponse, CreditGetCreditBalanceErrorBody]`
- **Error**: `CreditGetCreditBalanceErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1BillingCreditsBalance400Error1` [400] · `ApiV1BillingCreditsBalance401Error1` [401] · `ApiV1BillingCreditsBalance403Error1` [403] · `ApiV1BillingCreditsBalance404Error1` [404] · `ApiV1BillingCreditsBalance429Error1` [429] · `ApiV1BillingCreditsBalance500Error1` [500] · `ApiV1BillingCreditsBalance502Error1` [502] · `ApiV1BillingCreditsBalance503Error1` [503] · `ApiV1BillingCreditsBalance504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1BillingCreditsBalanceResponse` | `bundle_social/models/api_v1_billing_credits_balance_response.py` |
| `CreditGetCreditBalanceErrorBody` | `bundle_social/errors/credit_get_credit_balance_error.py` |
| `ApiV1BillingCreditsBalance400Error1` | `bundle_social/models/api_v1_billing_credits_balance400_error1.py` |
| `ApiV1BillingCreditsBalance401Error1` | `bundle_social/models/api_v1_billing_credits_balance401_error1.py` |
| `ApiV1BillingCreditsBalance403Error1` | `bundle_social/models/api_v1_billing_credits_balance403_error1.py` |
| `ApiV1BillingCreditsBalance404Error1` | `bundle_social/models/api_v1_billing_credits_balance404_error1.py` |
| `ApiV1BillingCreditsBalance429Error1` | `bundle_social/models/api_v1_billing_credits_balance429_error1.py` |
| `ApiV1BillingCreditsBalance500Error1` | `bundle_social/models/api_v1_billing_credits_balance500_error1.py` |
| `ApiV1BillingCreditsBalance502Error1` | `bundle_social/models/api_v1_billing_credits_balance502_error1.py` |
| `ApiV1BillingCreditsBalance503Error1` | `bundle_social/models/api_v1_billing_credits_balance503_error1.py` |
| `ApiV1BillingCreditsBalance504Error1` | `bundle_social/models/api_v1_billing_credits_balance504_error1.py` |

### client.credit.credit_quote_billable_usage

- **Route**: `POST /api/v1/billing/billable-usage/quote`
- **Auth**: `api_key_auth`
- **Signature**: `def credit_quote_billable_usage(*, body: ApiV1BillingBillableUsageQuoteRequest | ApiV1BillingBillableUsageQuoteRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1BillingBillableUsageQuoteResponse`
- **Returns (raw)**: `ApiResult[ApiV1BillingBillableUsageQuoteResponse, CreditQuoteBillableUsageErrorBody]`
- **Error**: `CreditQuoteBillableUsageErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1BillingBillableUsageQuote400Error1` [400] · `ApiV1BillingBillableUsageQuote401Error1` [401] · `ApiV1BillingBillableUsageQuote403Error1` [403] · `ApiV1BillingBillableUsageQuote404Error1` [404] · `ApiV1BillingBillableUsageQuote429Error1` [429] · `ApiV1BillingBillableUsageQuote500Error1` [500] · `ApiV1BillingBillableUsageQuote502Error1` [502] · `ApiV1BillingBillableUsageQuote503Error1` [503] · `ApiV1BillingBillableUsageQuote504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1BillingBillableUsageQuoteRequest` | `bundle_social/models/api_v1_billing_billable_usage_quote_request.py` |
| `ApiV1BillingBillableUsageQuoteRequestDict` | `bundle_social/models/api_v1_billing_billable_usage_quote_request.py` |
| `ApiV1BillingBillableUsageQuoteResponse` | `bundle_social/models/api_v1_billing_billable_usage_quote_response.py` |
| `CreditQuoteBillableUsageErrorBody` | `bundle_social/errors/credit_quote_billable_usage_error.py` |
| `ApiV1BillingBillableUsageQuote400Error1` | `bundle_social/models/api_v1_billing_billable_usage_quote400_error1.py` |
| `ApiV1BillingBillableUsageQuote401Error1` | `bundle_social/models/api_v1_billing_billable_usage_quote401_error1.py` |
| `ApiV1BillingBillableUsageQuote403Error1` | `bundle_social/models/api_v1_billing_billable_usage_quote403_error1.py` |
| `ApiV1BillingBillableUsageQuote404Error1` | `bundle_social/models/api_v1_billing_billable_usage_quote404_error1.py` |
| `ApiV1BillingBillableUsageQuote429Error1` | `bundle_social/models/api_v1_billing_billable_usage_quote429_error1.py` |
| `ApiV1BillingBillableUsageQuote500Error1` | `bundle_social/models/api_v1_billing_billable_usage_quote500_error1.py` |
| `ApiV1BillingBillableUsageQuote502Error1` | `bundle_social/models/api_v1_billing_billable_usage_quote502_error1.py` |
| `ApiV1BillingBillableUsageQuote503Error1` | `bundle_social/models/api_v1_billing_billable_usage_quote503_error1.py` |
| `ApiV1BillingBillableUsageQuote504Error1` | `bundle_social/models/api_v1_billing_billable_usage_quote504_error1.py` |

