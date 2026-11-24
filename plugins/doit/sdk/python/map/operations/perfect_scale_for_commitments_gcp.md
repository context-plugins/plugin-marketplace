<!-- Generated file — do not edit; regenerated with the SDK. -->

# PerfectScaleForCommitmentsGcp — operations

Accessor: `client.perfect_scale_for_commitments_gcp` · Source: `doi_t/apis/perfect_scale_for_commitments_gcp.py` · 8 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.perfect_scale_for_commitments_gcp.get_gcp_billing_account

- **Route**: `GET /ps4commitments/v1/gcp/billing-accounts/{billingAccountId}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_gcp_billing_account(billing_account_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `billing_account_id`
- **Params**: `billing_account_id` — path `billingAccountId` · `x_tenant_id` — header `X-Tenant-Id`
- **Returns (parsed)**: `GcpBillingAccountDetail`
- **Returns (raw)**: `ApiResult[GcpBillingAccountDetail, GetGcpBillingAccountErrorBody]`
- **Error**: `GetGcpBillingAccountErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GcpBillingAccountDetail` | `doi_t/models/gcp_billing_account_detail.py` |
| `GetGcpBillingAccountErrorBody` | `doi_t/errors/get_gcp_billing_account_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

### client.perfect_scale_for_commitments_gcp.get_gcp_recommendation

- **Route**: `GET /ps4commitments/v1/gcp/billing-accounts/{billingAccountId}/recommendations/{gcp_service}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_gcp_recommendation(billing_account_id: str, gcp_service: GcpServiceOrStr, *, region: str | None = None, granularity: GranularityOrStr | None = Granularity.DAY, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `billing_account_id`, `gcp_service`
- **Params**: `billing_account_id` — path `billingAccountId` · `gcp_service` — path · `region` — query · `granularity` — query · `x_tenant_id` — header `X-Tenant-Id`
- **Returns (parsed)**: `GcpRecommendationWithEligibleSpend`
- **Returns (raw)**: `ApiResult[GcpRecommendationWithEligibleSpend, GetGcpRecommendationErrorBody]`
- **Error**: `GetGcpRecommendationErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GcpServiceOrStr` | `doi_t/models/enums/gcp_service.py` |
| `GranularityOrStr` | `doi_t/models/enums/granularity.py` |
| `GcpRecommendationWithEligibleSpend` | `doi_t/models/gcp_recommendation_with_eligible_spend.py` |
| `GetGcpRecommendationErrorBody` | `doi_t/errors/get_gcp_recommendation_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

### client.perfect_scale_for_commitments_gcp.list_gcp_billing_accounts

- **Route**: `GET /ps4commitments/v1/gcp/billing-accounts`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_gcp_billing_accounts(*, page_token: str | None = None, max_results: int | None = 50, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `page_token` — query `pageToken` · `max_results` — query `maxResults` · `x_tenant_id` — header `X-Tenant-Id`
- **Returns (parsed)**: `Ps4CommitmentsV1GcpBillingAccountsResponse`
- **Returns (raw)**: `ApiResult[Ps4CommitmentsV1GcpBillingAccountsResponse, ListGcpBillingAccountsErrorBody]`
- **Error**: `ListGcpBillingAccountsErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Ps4CommitmentsV1GcpBillingAccountsResponse` | `doi_t/models/ps4_commitments_v1_gcp_billing_accounts_response.py` |
| `ListGcpBillingAccountsErrorBody` | `doi_t/errors/list_gcp_billing_accounts_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

### client.perfect_scale_for_commitments_gcp.list_gcp_billing_accounts_settings

- **Route**: `GET /ps4commitments/v1/gcp/settings`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_gcp_billing_accounts_settings(*, page_token: str | None = None, max_results: int | None = 50, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `page_token` — query `pageToken` · `max_results` — query `maxResults` · `x_tenant_id` — header `X-Tenant-Id`
- **Returns (parsed)**: `Ps4CommitmentsV1GcpSettingsResponse`
- **Returns (raw)**: `ApiResult[Ps4CommitmentsV1GcpSettingsResponse, ListGcpBillingAccountsSettingsErrorBody]`
- **Error**: `ListGcpBillingAccountsSettingsErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Ps4CommitmentsV1GcpSettingsResponse` | `doi_t/models/ps4_commitments_v1_gcp_settings_response.py` |
| `ListGcpBillingAccountsSettingsErrorBody` | `doi_t/errors/list_gcp_billing_accounts_settings_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

### client.perfect_scale_for_commitments_gcp.list_gcp_planned_purchases

- **Route**: `GET /ps4commitments/v1/gcp/billing-accounts/{billingAccountId}/planned-purchases`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_gcp_planned_purchases(billing_account_id: str, *, gcp_service: GcpServiceOrStr | None = None, region: str | None = None, page_token: str | None = None, max_results: int | None = 50, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `billing_account_id`
- **Params**: `billing_account_id` — path `billingAccountId` · `gcp_service` — query · `region` — query · `page_token` — query `pageToken` · `max_results` — query `maxResults` · `x_tenant_id` — header `X-Tenant-Id`
- **Returns (parsed)**: `Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse`
- **Returns (raw)**: `ApiResult[Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse, ListGcpPlannedPurchasesErrorBody]`
- **Error**: `ListGcpPlannedPurchasesErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GcpServiceOrStr` | `doi_t/models/enums/gcp_service.py` |
| `Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse` | `doi_t/models/ps4_commitments_v1_gcp_billing_accounts_planned_purchases_response.py` |
| `ListGcpPlannedPurchasesErrorBody` | `doi_t/errors/list_gcp_planned_purchases_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

### client.perfect_scale_for_commitments_gcp.list_gcp_recommendations

- **Route**: `GET /ps4commitments/v1/gcp/billing-accounts/{billingAccountId}/recommendations`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_gcp_recommendations(billing_account_id: str, *, gcp_service: GcpServiceOrStr | None = None, region: str | None = None, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `billing_account_id`
- **Params**: `billing_account_id` — path `billingAccountId` · `gcp_service` — query · `region` — query · `x_tenant_id` — header `X-Tenant-Id`
- **Returns (parsed)**: `Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse`
- **Returns (raw)**: `ApiResult[Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse, ListGcpRecommendationsErrorBody]`
- **Error**: `ListGcpRecommendationsErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GcpServiceOrStr` | `doi_t/models/enums/gcp_service.py` |
| `Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse` | `doi_t/models/ps4_commitments_v1_gcp_billing_accounts_recommendations_response.py` |
| `ListGcpRecommendationsErrorBody` | `doi_t/errors/list_gcp_recommendations_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

### client.perfect_scale_for_commitments_gcp.list_gcp_resource_cuds

- **Route**: `GET /ps4commitments/v1/gcp/billing-accounts/{billingAccountId}/resource-based`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_gcp_resource_cuds(billing_account_id: str, *, status: Status2DoiTPerfectScaleForCommitmentsGcpApiOrStr | None = None, page_token: str | None = None, max_results: int | None = 50, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `billing_account_id`
- **Params**: `billing_account_id` — path `billingAccountId` · `status` — query · `page_token` — query `pageToken` · `max_results` — query `maxResults` · `x_tenant_id` — header `X-Tenant-Id`
- **Returns (parsed)**: `Ps4CommitmentsV1GcpBillingAccountsResourceBasedResponse`
- **Returns (raw)**: `ApiResult[Ps4CommitmentsV1GcpBillingAccountsResourceBasedResponse, ListGcpResourceCudsErrorBody]`
- **Error**: `ListGcpResourceCudsErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Status2DoiTPerfectScaleForCommitmentsGcpApiOrStr` | `doi_t/models/enums/status2_doi_t_perfect_scale_for_commitments_gcp_api.py` |
| `Ps4CommitmentsV1GcpBillingAccountsResourceBasedResponse` | `doi_t/models/ps4_commitments_v1_gcp_billing_accounts_resource_based_response.py` |
| `ListGcpResourceCudsErrorBody` | `doi_t/errors/list_gcp_resource_cuds_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

### client.perfect_scale_for_commitments_gcp.list_gcp_spend_cuds

- **Route**: `GET /ps4commitments/v1/gcp/billing-accounts/{billingAccountId}/spend-based`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_gcp_spend_cuds(billing_account_id: str, *, status: Status2DoiTPerfectScaleForCommitmentsGcpApiOrStr | None = None, gcp_service: GcpServiceOrStr | None = None, region: str | None = None, page_token: str | None = None, max_results: int | None = 50, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `billing_account_id`
- **Params**: `billing_account_id` — path `billingAccountId` · `status` — query · `gcp_service` — query · `region` — query · `page_token` — query `pageToken` · `max_results` — query `maxResults` · `x_tenant_id` — header `X-Tenant-Id`
- **Returns (parsed)**: `Ps4CommitmentsV1GcpBillingAccountsSpendBasedResponse`
- **Returns (raw)**: `ApiResult[Ps4CommitmentsV1GcpBillingAccountsSpendBasedResponse, ListGcpSpendCudsErrorBody]`
- **Error**: `ListGcpSpendCudsErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Status2DoiTPerfectScaleForCommitmentsGcpApiOrStr` | `doi_t/models/enums/status2_doi_t_perfect_scale_for_commitments_gcp_api.py` |
| `GcpServiceOrStr` | `doi_t/models/enums/gcp_service.py` |
| `Ps4CommitmentsV1GcpBillingAccountsSpendBasedResponse` | `doi_t/models/ps4_commitments_v1_gcp_billing_accounts_spend_based_response.py` |
| `ListGcpSpendCudsErrorBody` | `doi_t/errors/list_gcp_spend_cuds_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

