<!-- Generated file — do not edit; regenerated with the SDK. -->

# PerfectScaleForCommitmentsAws — operations

Accessor: `client.perfect_scale_for_commitments_aws` · Source: `doi_t/apis/perfect_scale_for_commitments_aws.py` · 10 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.perfect_scale_for_commitments_aws.get_aws_member_account

- **Route**: `GET /ps4commitments/v1/aws/organizations/{managementAccountId}/member-accounts/{memberAccountId}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_aws_member_account(management_account_id: str, member_account_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `management_account_id`, `member_account_id`
- **Params**: `management_account_id` — path `managementAccountId` · `member_account_id` — path `memberAccountId` · `x_tenant_id` — header `X-Tenant-Id`
- **Returns (parsed)**: `AwsMemberAccountDetail`
- **Returns (raw)**: `ApiResult[AwsMemberAccountDetail, GetAwsMemberAccountErrorBody]`
- **Error**: `GetAwsMemberAccountErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AwsMemberAccountDetail` | `doi_t/models/aws_member_account_detail.py` |
| `GetAwsMemberAccountErrorBody` | `doi_t/errors/get_aws_member_account_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

### client.perfect_scale_for_commitments_aws.get_aws_organization

- **Route**: `GET /ps4commitments/v1/aws/organizations/{managementAccountId}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_aws_organization(management_account_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `management_account_id`
- **Params**: `management_account_id` — path `managementAccountId` · `x_tenant_id` — header `X-Tenant-Id`
- **Returns (parsed)**: `AwsOrganizationDetail`
- **Returns (raw)**: `ApiResult[AwsOrganizationDetail, GetAwsOrganizationErrorBody]`
- **Error**: `GetAwsOrganizationErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AwsOrganizationDetail` | `doi_t/models/aws_organization_detail.py` |
| `GetAwsOrganizationErrorBody` | `doi_t/errors/get_aws_organization_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

### client.perfect_scale_for_commitments_aws.get_aws_recommendation

- **Route**: `GET /ps4commitments/v1/aws/organizations/{managementAccountId}/recommendations/{serviceId}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_aws_recommendation(management_account_id: str, service_id: ServiceIdOrStr, *, granularity: GranularityOrStr | None = Granularity.DAY, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `management_account_id`, `service_id`
- **Params**: `management_account_id` — path `managementAccountId` · `service_id` — path `serviceId` · `granularity` — query · `x_tenant_id` — header `X-Tenant-Id`
- **Returns (parsed)**: `AwsRecommendationWithEligibleSpend`
- **Returns (raw)**: `ApiResult[AwsRecommendationWithEligibleSpend, GetAwsRecommendationErrorBody]`
- **Error**: `GetAwsRecommendationErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ServiceIdOrStr` | `doi_t/models/enums/service_id.py` |
| `GranularityOrStr` | `doi_t/models/enums/granularity.py` |
| `AwsRecommendationWithEligibleSpend` | `doi_t/models/aws_recommendation_with_eligible_spend.py` |
| `GetAwsRecommendationErrorBody` | `doi_t/errors/get_aws_recommendation_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

### client.perfect_scale_for_commitments_aws.list_aws_member_accounts

- **Route**: `GET /ps4commitments/v1/aws/organizations/{managementAccountId}/member-accounts`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_aws_member_accounts(management_account_id: str, *, page_token: str | None = None, max_results: int | None = 50, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `management_account_id`
- **Params**: `management_account_id` — path `managementAccountId` · `page_token` — query `pageToken` · `max_results` — query `maxResults` · `x_tenant_id` — header `X-Tenant-Id`
- **Returns (parsed)**: `Ps4CommitmentsV1AwsOrganizationsMemberAccountsResponse`
- **Returns (raw)**: `ApiResult[Ps4CommitmentsV1AwsOrganizationsMemberAccountsResponse, ListAwsMemberAccountsErrorBody]`
- **Error**: `ListAwsMemberAccountsErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Ps4CommitmentsV1AwsOrganizationsMemberAccountsResponse` | `doi_t/models/ps4_commitments_v1_aws_organizations_member_accounts_response.py` |
| `ListAwsMemberAccountsErrorBody` | `doi_t/errors/list_aws_member_accounts_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

### client.perfect_scale_for_commitments_aws.list_aws_organizations

- **Route**: `GET /ps4commitments/v1/aws/organizations`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_aws_organizations(*, page_token: str | None = None, max_results: int | None = 50, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `page_token` — query `pageToken` · `max_results` — query `maxResults` · `x_tenant_id` — header `X-Tenant-Id`
- **Returns (parsed)**: `Ps4CommitmentsV1AwsOrganizationsResponse`
- **Returns (raw)**: `ApiResult[Ps4CommitmentsV1AwsOrganizationsResponse, ListAwsOrganizationsErrorBody]`
- **Error**: `ListAwsOrganizationsErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Ps4CommitmentsV1AwsOrganizationsResponse` | `doi_t/models/ps4_commitments_v1_aws_organizations_response.py` |
| `ListAwsOrganizationsErrorBody` | `doi_t/errors/list_aws_organizations_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

### client.perfect_scale_for_commitments_aws.list_aws_organizations_settings

- **Route**: `GET /ps4commitments/v1/aws/settings`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_aws_organizations_settings(*, page_token: str | None = None, max_results: int | None = 50, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `page_token` — query `pageToken` · `max_results` — query `maxResults` · `x_tenant_id` — header `X-Tenant-Id`
- **Returns (parsed)**: `Ps4CommitmentsV1AwsSettingsResponse`
- **Returns (raw)**: `ApiResult[Ps4CommitmentsV1AwsSettingsResponse, ListAwsOrganizationsSettingsErrorBody]`
- **Error**: `ListAwsOrganizationsSettingsErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Ps4CommitmentsV1AwsSettingsResponse` | `doi_t/models/ps4_commitments_v1_aws_settings_response.py` |
| `ListAwsOrganizationsSettingsErrorBody` | `doi_t/errors/list_aws_organizations_settings_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

### client.perfect_scale_for_commitments_aws.list_aws_planned_purchases

- **Route**: `GET /ps4commitments/v1/aws/organizations/{managementAccountId}/planned-purchases`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_aws_planned_purchases(management_account_id: str, *, service: Service2OrStr | None = None, page_token: str | None = None, max_results: int | None = 50, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `management_account_id`
- **Params**: `management_account_id` — path `managementAccountId` · `service` — query · `page_token` — query `pageToken` · `max_results` — query `maxResults` · `x_tenant_id` — header `X-Tenant-Id`
- **Returns (parsed)**: `Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse`
- **Returns (raw)**: `ApiResult[Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse, ListAwsPlannedPurchasesErrorBody]`
- **Error**: `ListAwsPlannedPurchasesErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Service2OrStr` | `doi_t/models/enums/service2.py` |
| `Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse` | `doi_t/models/ps4_commitments_v1_aws_organizations_planned_purchases_response.py` |
| `ListAwsPlannedPurchasesErrorBody` | `doi_t/errors/list_aws_planned_purchases_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

### client.perfect_scale_for_commitments_aws.list_aws_recommendations

- **Route**: `GET /ps4commitments/v1/aws/organizations/{managementAccountId}/recommendations`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_aws_recommendations(management_account_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `management_account_id`
- **Params**: `management_account_id` — path `managementAccountId` · `x_tenant_id` — header `X-Tenant-Id`
- **Returns (parsed)**: `AwsRecommendations`
- **Returns (raw)**: `ApiResult[AwsRecommendations, ListAwsRecommendationsErrorBody]`
- **Error**: `ListAwsRecommendationsErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AwsRecommendations` | `doi_t/models/aws_recommendations.py` |
| `ListAwsRecommendationsErrorBody` | `doi_t/errors/list_aws_recommendations_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

### client.perfect_scale_for_commitments_aws.list_aws_reserved_instances

- **Route**: `GET /ps4commitments/v1/aws/organizations/{managementAccountId}/reserved-instances`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_aws_reserved_instances(management_account_id: str, *, status: Status3OrStr | None = None, instance_type: str | None = None, instance_family: str | None = None, region: str | None = None, offering_class: OfferingClass1OrStr | None = None, page_token: str | None = None, max_results: int | None = 50, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `management_account_id`
- **Params**: `management_account_id` — path `managementAccountId` · `status` — query · `instance_type` — query `instanceType` · `instance_family` — query `instanceFamily` · `region` — query · `offering_class` — query `offeringClass` · `page_token` — query `pageToken` · `max_results` — query `maxResults` · `x_tenant_id` — header `X-Tenant-Id`
- **Returns (parsed)**: `Ps4CommitmentsV1AwsOrganizationsReservedInstancesResponse`
- **Returns (raw)**: `ApiResult[Ps4CommitmentsV1AwsOrganizationsReservedInstancesResponse, ListAwsReservedInstancesErrorBody]`
- **Error**: `ListAwsReservedInstancesErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Status3OrStr` | `doi_t/models/enums/status3.py` |
| `OfferingClass1OrStr` | `doi_t/models/enums/offering_class1.py` |
| `Ps4CommitmentsV1AwsOrganizationsReservedInstancesResponse` | `doi_t/models/ps4_commitments_v1_aws_organizations_reserved_instances_response.py` |
| `ListAwsReservedInstancesErrorBody` | `doi_t/errors/list_aws_reserved_instances_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

### client.perfect_scale_for_commitments_aws.list_aws_savings_plans

- **Route**: `GET /ps4commitments/v1/aws/organizations/{managementAccountId}/savings-plans`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_aws_savings_plans(management_account_id: str, *, type_: TypeDoiTPerfectScaleForCommitmentsAwsApiOrStr | None = None, status: Status2OrStr | None = None, page_token: str | None = None, max_results: int | None = 50, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `management_account_id`
- **Params**: `management_account_id` — path `managementAccountId` · `type_` — query `type` · `status` — query · `page_token` — query `pageToken` · `max_results` — query `maxResults` · `x_tenant_id` — header `X-Tenant-Id`
- **Returns (parsed)**: `Ps4CommitmentsV1AwsOrganizationsSavingsPlansResponse`
- **Returns (raw)**: `ApiResult[Ps4CommitmentsV1AwsOrganizationsSavingsPlansResponse, ListAwsSavingsPlansErrorBody]`
- **Error**: `ListAwsSavingsPlansErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TypeDoiTPerfectScaleForCommitmentsAwsApiOrStr` | `doi_t/models/enums/type_doi_t_perfect_scale_for_commitments_aws_api.py` |
| `Status2OrStr` | `doi_t/models/enums/status2.py` |
| `Ps4CommitmentsV1AwsOrganizationsSavingsPlansResponse` | `doi_t/models/ps4_commitments_v1_aws_organizations_savings_plans_response.py` |
| `ListAwsSavingsPlansErrorBody` | `doi_t/errors/list_aws_savings_plans_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

