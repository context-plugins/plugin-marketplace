<!-- Generated file — do not edit; regenerated with the SDK. -->

# PerfectScaleForCommitmentsAws — operations

Accessor: `client.PerfectScaleForCommitmentsAws` · Source: `src/DoiT/Api/PerfectScaleForCommitmentsAws.cs` · 10 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetAwsMemberAccount

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetAwsMemberAccount(GetAwsMemberAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ManagementAccountId`, `MemberAccountId`
- **Returns**: `AwsMemberAccountDetail`
- **Error**: `ApiException<GetAwsMemberAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAwsMemberAccountRequest` | `src/DoiT/Requests/PerfectScaleForCommitmentsAws/GetAwsMemberAccountRequest.cs` |
| `AwsMemberAccountDetail` | `src/DoiT/Models/AwsMemberAccountDetail.cs` |
| `GetAwsMemberAccountError` | `src/DoiT/Errors/GetAwsMemberAccountError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

### GetAwsOrganization

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetAwsOrganization(GetAwsOrganizationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ManagementAccountId`
- **Returns**: `AwsOrganizationDetail`
- **Error**: `ApiException<GetAwsOrganizationError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAwsOrganizationRequest` | `src/DoiT/Requests/PerfectScaleForCommitmentsAws/GetAwsOrganizationRequest.cs` |
| `AwsOrganizationDetail` | `src/DoiT/Models/AwsOrganizationDetail.cs` |
| `GetAwsOrganizationError` | `src/DoiT/Errors/GetAwsOrganizationError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

### GetAwsRecommendation

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetAwsRecommendation(GetAwsRecommendationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ManagementAccountId`, `ServiceId`
- **Query params (wire ← C#)**: `granularity` ← `Granularity`
- **Returns**: `AwsRecommendationWithEligibleSpend`
- **Error**: `ApiException<GetAwsRecommendationError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAwsRecommendationRequest` | `src/DoiT/Requests/PerfectScaleForCommitmentsAws/GetAwsRecommendationRequest.cs` |
| `ServiceId` | `src/DoiT/Models/Enums/ServiceId.cs` |
| `Granularity` | `src/DoiT/Models/Enums/Granularity.cs` |
| `AwsRecommendationWithEligibleSpend` | `src/DoiT/Models/AwsRecommendationWithEligibleSpend.cs` |
| `GetAwsRecommendationError` | `src/DoiT/Errors/GetAwsRecommendationError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

### ListAwsMemberAccounts

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListAwsMemberAccounts(ListAwsMemberAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ManagementAccountId`
- **Query params (wire ← C#)**: `pageToken` ← `PageToken`, `maxResults` ← `MaxResults`
- **Returns**: `Ps4CommitmentsV1AwsOrganizationsMemberAccountsResponse`
- **Error**: `ApiException<ListAwsMemberAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListAwsMemberAccountsRequest` | `src/DoiT/Requests/PerfectScaleForCommitmentsAws/ListAwsMemberAccountsRequest.cs` |
| `Ps4CommitmentsV1AwsOrganizationsMemberAccountsResponse` | `src/DoiT/Models/Ps4CommitmentsV1AwsOrganizationsMemberAccountsResponse.cs` |
| `ListAwsMemberAccountsError` | `src/DoiT/Errors/ListAwsMemberAccountsError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

### ListAwsOrganizations

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListAwsOrganizations(ListAwsOrganizationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `pageToken` ← `PageToken`, `maxResults` ← `MaxResults`
- **Returns**: `Ps4CommitmentsV1AwsOrganizationsResponse`
- **Error**: `ApiException<ListAwsOrganizationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListAwsOrganizationsRequest` | `src/DoiT/Requests/PerfectScaleForCommitmentsAws/ListAwsOrganizationsRequest.cs` |
| `Ps4CommitmentsV1AwsOrganizationsResponse` | `src/DoiT/Models/Ps4CommitmentsV1AwsOrganizationsResponse.cs` |
| `ListAwsOrganizationsError` | `src/DoiT/Errors/ListAwsOrganizationsError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

### ListAwsOrganizationsSettings

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListAwsOrganizationsSettings(ListAwsOrganizationsSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `pageToken` ← `PageToken`, `maxResults` ← `MaxResults`
- **Returns**: `Ps4CommitmentsV1AwsSettingsResponse`
- **Error**: `ApiException<ListAwsOrganizationsSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListAwsOrganizationsSettingsRequest` | `src/DoiT/Requests/PerfectScaleForCommitmentsAws/ListAwsOrganizationsSettingsRequest.cs` |
| `Ps4CommitmentsV1AwsSettingsResponse` | `src/DoiT/Models/Ps4CommitmentsV1AwsSettingsResponse.cs` |
| `ListAwsOrganizationsSettingsError` | `src/DoiT/Errors/ListAwsOrganizationsSettingsError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

### ListAwsPlannedPurchases

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListAwsPlannedPurchases(ListAwsPlannedPurchasesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ManagementAccountId`
- **Query params (wire ← C#)**: `service` ← `Service`, `pageToken` ← `PageToken`, `maxResults` ← `MaxResults`
- **Returns**: `Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse`
- **Error**: `ApiException<ListAwsPlannedPurchasesError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListAwsPlannedPurchasesRequest` | `src/DoiT/Requests/PerfectScaleForCommitmentsAws/ListAwsPlannedPurchasesRequest.cs` |
| `Service2` | `src/DoiT/Models/Enums/Service2.cs` |
| `Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse` | `src/DoiT/Models/Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse.cs` |
| `ListAwsPlannedPurchasesError` | `src/DoiT/Errors/ListAwsPlannedPurchasesError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

### ListAwsRecommendations

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListAwsRecommendations(ListAwsRecommendationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ManagementAccountId`
- **Returns**: `AwsRecommendations`
- **Error**: `ApiException<ListAwsRecommendationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListAwsRecommendationsRequest` | `src/DoiT/Requests/PerfectScaleForCommitmentsAws/ListAwsRecommendationsRequest.cs` |
| `AwsRecommendations` | `src/DoiT/Models/AwsRecommendations.cs` |
| `ListAwsRecommendationsError` | `src/DoiT/Errors/ListAwsRecommendationsError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

### ListAwsReservedInstances

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListAwsReservedInstances(ListAwsReservedInstancesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ManagementAccountId`
- **Query params (wire ← C#)**: `status` ← `Status`, `instanceType` ← `InstanceType`, `instanceFamily` ← `InstanceFamily`, `region` ← `Region`, `offeringClass` ← `OfferingClass`, `pageToken` ← `PageToken`, `maxResults` ← `MaxResults`
- **Returns**: `Ps4CommitmentsV1AwsOrganizationsReservedInstancesResponse`
- **Error**: `ApiException<ListAwsReservedInstancesError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListAwsReservedInstancesRequest` | `src/DoiT/Requests/PerfectScaleForCommitmentsAws/ListAwsReservedInstancesRequest.cs` |
| `Status3` | `src/DoiT/Models/Enums/Status3.cs` |
| `OfferingClass1` | `src/DoiT/Models/Enums/OfferingClass1.cs` |
| `Ps4CommitmentsV1AwsOrganizationsReservedInstancesResponse` | `src/DoiT/Models/Ps4CommitmentsV1AwsOrganizationsReservedInstancesResponse.cs` |
| `ListAwsReservedInstancesError` | `src/DoiT/Errors/ListAwsReservedInstancesError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

### ListAwsSavingsPlans

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListAwsSavingsPlans(ListAwsSavingsPlansRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ManagementAccountId`
- **Query params (wire ← C#)**: `type` ← `Type`, `status` ← `Status`, `pageToken` ← `PageToken`, `maxResults` ← `MaxResults`
- **Returns**: `Ps4CommitmentsV1AwsOrganizationsSavingsPlansResponse`
- **Error**: `ApiException<ListAwsSavingsPlansError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListAwsSavingsPlansRequest` | `src/DoiT/Requests/PerfectScaleForCommitmentsAws/ListAwsSavingsPlansRequest.cs` |
| `TypeDoiTPerfectScaleForCommitmentsAwsApi` | `src/DoiT/Models/Enums/TypeDoiTPerfectScaleForCommitmentsAwsApi.cs` |
| `Status2` | `src/DoiT/Models/Enums/Status2.cs` |
| `Ps4CommitmentsV1AwsOrganizationsSavingsPlansResponse` | `src/DoiT/Models/Ps4CommitmentsV1AwsOrganizationsSavingsPlansResponse.cs` |
| `ListAwsSavingsPlansError` | `src/DoiT/Errors/ListAwsSavingsPlansError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

