<!-- Generated file — do not edit; regenerated with the SDK. -->

# PerfectScaleForCommitmentsGcp — operations

Accessor: `client.PerfectScaleForCommitmentsGcp` · Source: `src/DoiT/Api/PerfectScaleForCommitmentsGcp.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetGcpBillingAccount

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetGcpBillingAccount(GetGcpBillingAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BillingAccountId`
- **Returns**: `GcpBillingAccountDetail`
- **Error**: `ApiException<GetGcpBillingAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGcpBillingAccountRequest` | `src/DoiT/Requests/PerfectScaleForCommitmentsGcp/GetGcpBillingAccountRequest.cs` |
| `GcpBillingAccountDetail` | `src/DoiT/Models/GcpBillingAccountDetail.cs` |
| `GetGcpBillingAccountError` | `src/DoiT/Errors/GetGcpBillingAccountError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

### GetGcpRecommendation

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetGcpRecommendation(GetGcpRecommendationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BillingAccountId`, `GcpService`
- **Query params (wire ← C#)**: `region` ← `Region`, `granularity` ← `Granularity`
- **Returns**: `GcpRecommendationWithEligibleSpend`
- **Error**: `ApiException<GetGcpRecommendationError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGcpRecommendationRequest` | `src/DoiT/Requests/PerfectScaleForCommitmentsGcp/GetGcpRecommendationRequest.cs` |
| `GcpService` | `src/DoiT/Models/Enums/GcpService.cs` |
| `Granularity` | `src/DoiT/Models/Enums/Granularity.cs` |
| `GcpRecommendationWithEligibleSpend` | `src/DoiT/Models/GcpRecommendationWithEligibleSpend.cs` |
| `GetGcpRecommendationError` | `src/DoiT/Errors/GetGcpRecommendationError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

### ListGcpBillingAccounts

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListGcpBillingAccounts(ListGcpBillingAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `pageToken` ← `PageToken`, `maxResults` ← `MaxResults`
- **Returns**: `Ps4CommitmentsV1GcpBillingAccountsResponse`
- **Error**: `ApiException<ListGcpBillingAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListGcpBillingAccountsRequest` | `src/DoiT/Requests/PerfectScaleForCommitmentsGcp/ListGcpBillingAccountsRequest.cs` |
| `Ps4CommitmentsV1GcpBillingAccountsResponse` | `src/DoiT/Models/Ps4CommitmentsV1GcpBillingAccountsResponse.cs` |
| `ListGcpBillingAccountsError` | `src/DoiT/Errors/ListGcpBillingAccountsError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

### ListGcpBillingAccountsSettings

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListGcpBillingAccountsSettings(ListGcpBillingAccountsSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `pageToken` ← `PageToken`, `maxResults` ← `MaxResults`
- **Returns**: `Ps4CommitmentsV1GcpSettingsResponse`
- **Error**: `ApiException<ListGcpBillingAccountsSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListGcpBillingAccountsSettingsRequest` | `src/DoiT/Requests/PerfectScaleForCommitmentsGcp/ListGcpBillingAccountsSettingsRequest.cs` |
| `Ps4CommitmentsV1GcpSettingsResponse` | `src/DoiT/Models/Ps4CommitmentsV1GcpSettingsResponse.cs` |
| `ListGcpBillingAccountsSettingsError` | `src/DoiT/Errors/ListGcpBillingAccountsSettingsError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

### ListGcpPlannedPurchases

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListGcpPlannedPurchases(ListGcpPlannedPurchasesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BillingAccountId`
- **Query params (wire ← C#)**: `gcp_service` ← `GcpService`, `region` ← `Region`, `pageToken` ← `PageToken`, `maxResults` ← `MaxResults`
- **Returns**: `Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse`
- **Error**: `ApiException<ListGcpPlannedPurchasesError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListGcpPlannedPurchasesRequest` | `src/DoiT/Requests/PerfectScaleForCommitmentsGcp/ListGcpPlannedPurchasesRequest.cs` |
| `GcpService` | `src/DoiT/Models/Enums/GcpService.cs` |
| `Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse` | `src/DoiT/Models/Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse.cs` |
| `ListGcpPlannedPurchasesError` | `src/DoiT/Errors/ListGcpPlannedPurchasesError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

### ListGcpRecommendations

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListGcpRecommendations(ListGcpRecommendationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BillingAccountId`
- **Query params (wire ← C#)**: `gcp_service` ← `GcpService`, `region` ← `Region`
- **Returns**: `Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse`
- **Error**: `ApiException<ListGcpRecommendationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListGcpRecommendationsRequest` | `src/DoiT/Requests/PerfectScaleForCommitmentsGcp/ListGcpRecommendationsRequest.cs` |
| `GcpService` | `src/DoiT/Models/Enums/GcpService.cs` |
| `Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse` | `src/DoiT/Models/Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse.cs` |
| `ListGcpRecommendationsError` | `src/DoiT/Errors/ListGcpRecommendationsError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

### ListGcpResourceCuds

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListGcpResourceCuds(ListGcpResourceCudsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BillingAccountId`
- **Query params (wire ← C#)**: `status` ← `Status`, `pageToken` ← `PageToken`, `maxResults` ← `MaxResults`
- **Returns**: `Ps4CommitmentsV1GcpBillingAccountsResourceBasedResponse`
- **Error**: `ApiException<ListGcpResourceCudsError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListGcpResourceCudsRequest` | `src/DoiT/Requests/PerfectScaleForCommitmentsGcp/ListGcpResourceCudsRequest.cs` |
| `Status2DoiTPerfectScaleForCommitmentsGcpApi` | `src/DoiT/Models/Enums/Status2DoiTPerfectScaleForCommitmentsGcpApi.cs` |
| `Ps4CommitmentsV1GcpBillingAccountsResourceBasedResponse` | `src/DoiT/Models/Ps4CommitmentsV1GcpBillingAccountsResourceBasedResponse.cs` |
| `ListGcpResourceCudsError` | `src/DoiT/Errors/ListGcpResourceCudsError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

### ListGcpSpendCuds

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListGcpSpendCuds(ListGcpSpendCudsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BillingAccountId`
- **Query params (wire ← C#)**: `status` ← `Status`, `gcp_service` ← `GcpService`, `region` ← `Region`, `pageToken` ← `PageToken`, `maxResults` ← `MaxResults`
- **Returns**: `Ps4CommitmentsV1GcpBillingAccountsSpendBasedResponse`
- **Error**: `ApiException<ListGcpSpendCudsError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListGcpSpendCudsRequest` | `src/DoiT/Requests/PerfectScaleForCommitmentsGcp/ListGcpSpendCudsRequest.cs` |
| `Status2DoiTPerfectScaleForCommitmentsGcpApi` | `src/DoiT/Models/Enums/Status2DoiTPerfectScaleForCommitmentsGcpApi.cs` |
| `GcpService` | `src/DoiT/Models/Enums/GcpService.cs` |
| `Ps4CommitmentsV1GcpBillingAccountsSpendBasedResponse` | `src/DoiT/Models/Ps4CommitmentsV1GcpBillingAccountsSpendBasedResponse.cs` |
| `ListGcpSpendCudsError` | `src/DoiT/Errors/ListGcpSpendCudsError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

