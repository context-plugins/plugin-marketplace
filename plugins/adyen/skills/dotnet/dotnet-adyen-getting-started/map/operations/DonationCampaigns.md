<!-- Generated file — do not edit; regenerated with the SDK. -->

# DonationCampaigns — operations

Accessor: `client.DonationCampaigns` · Source: `Api/DonationCampaigns.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteCompaniesCompanyIdCampaignManagementDonationCampaignId
- **Server group**: `Default9`
- **Signature**: `DeleteCompaniesCompanyIdCampaignManagementDonationCampaignId(string companyId, string donationCampaignId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteCompaniesCompanyIdCampaignManagementDonationCampaignIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteCompaniesCompanyIdCampaignManagementDonationCampaignIdError` | `Errors/DeleteCompaniesCompanyIdCampaignManagementDonationCampaignIdError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### GetCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderId
- **Server group**: `Default9`
- **Signature**: `GetCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderId(string companyId, string accountHolderId, string? status, int? pageNumber = 1, int? pageSize = 10, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `status` — nullable, no default → **must pass explicitly**
  - defaults: `pageNumber` = `1`, `pageSize` = `10`
- **Query params (wire ← C#)**: `status` ← `status`, `pageNumber` ← `pageNumber`, `pageSize` ← `pageSize`
- **Returns**: `ListDonationCampaignsResponse`
- **Error**: `SdkException<GetCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ListDonationCampaignsResponse` | `Models/ListDonationCampaignsResponse.cs` |
| `GetCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderIdError` | `Errors/GetCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderIdError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### PatchCompaniesCompanyIdCampaignManagementDonationCampaignId
- **Server group**: `Default9`
- **Signature**: `PatchCompaniesCompanyIdCampaignManagementDonationCampaignId(string companyId, string donationCampaignId, DonationCampaignUpdate? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `DonationCampaign1`
- **Error**: `SdkException<PatchCompaniesCompanyIdCampaignManagementDonationCampaignIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DonationCampaignUpdate` | `Models/DonationCampaignUpdate.cs` |
| `DonationCampaign1` | `Models/DonationCampaign1.cs` |
| `PatchCompaniesCompanyIdCampaignManagementDonationCampaignIdError` | `Errors/PatchCompaniesCompanyIdCampaignManagementDonationCampaignIdError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### PostCompaniesCompanyIdCampaignManagement
- **Server group**: `Default9`
- **Signature**: `PostCompaniesCompanyIdCampaignManagement(string companyId, DonationCampaignRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `DonationCampaign1`
- **Error**: `SdkException<PostCompaniesCompanyIdCampaignManagementError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DonationCampaignRequest` | `Models/DonationCampaignRequest.cs` |
| `DonationCampaign1` | `Models/DonationCampaign1.cs` |
| `PostCompaniesCompanyIdCampaignManagementError` | `Errors/PostCompaniesCompanyIdCampaignManagementError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### PostCompaniesCompanyIdCampaignManagementDonationCampaignIdStatusStatus
- **Server group**: `Default9`
- **Signature**: `PostCompaniesCompanyIdCampaignManagementDonationCampaignIdStatusStatus(string companyId, string donationCampaignId, CampaignStatusTransition status, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `DonationCampaign1`
- **Error**: `SdkException<PostCompaniesCompanyIdCampaignManagementDonationCampaignIdStatusStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CampaignStatusTransition` | `Models/Enums/CampaignStatusTransition.cs` |
| `DonationCampaign1` | `Models/DonationCampaign1.cs` |
| `PostCompaniesCompanyIdCampaignManagementDonationCampaignIdStatusStatusError` | `Errors/PostCompaniesCompanyIdCampaignManagementDonationCampaignIdStatusStatusError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### PostCompaniesCompanyIdNonprofits
- **Server group**: `Default9`
- **Signature**: `PostCompaniesCompanyIdNonprofits(string companyId, string? searchTerm, int? pageNumber, IReadOnlyList<string>? goal, ListNonprofitsRequest? body, int? pageSize = 10, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`searchTerm` … `body`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `pageSize` = `10`
- **Query params (wire ← C#)**: `searchTerm` ← `searchTerm`, `pageNumber` ← `pageNumber`, `pageSize` ← `pageSize`, `goal` ← `goal`
- **Returns**: `ListNonprofitsResponse`
- **Error**: `SdkException<PostCompaniesCompanyIdNonprofitsError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ListNonprofitsRequest` | `Models/ListNonprofitsRequest.cs` |
| `ListNonprofitsResponse` | `Models/ListNonprofitsResponse.cs` |
| `PostCompaniesCompanyIdNonprofitsError` | `Errors/PostCompaniesCompanyIdNonprofitsError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

