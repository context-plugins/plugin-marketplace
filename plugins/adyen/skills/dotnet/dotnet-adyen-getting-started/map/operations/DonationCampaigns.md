# DonationCampaigns — operations

Accessor: `client.DonationCampaigns` · Source: `Api/DonationCampaigns.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteCompaniesCompanyIdCampaignManagementDonationCampaignId
- **HTTP**: `DELETE /companies/{companyId}/campaignManagement/{donationCampaignId}` (Default9 (management-test))
- **Notes**: Removes the donation campaign specified in the path. This request is only allowed if the campaign has the status inactive . To make this request, your API credential must have the following role : * Management API—Campaign Management read and write
- **Signature**: `DeleteCompaniesCompanyIdCampaignManagementDonationCampaignId(string companyId, string donationCampaignId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteCompaniesCompanyIdCampaignManagementDonationCampaignIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderId
- **HTTP**: `GET /companies/{companyId}/campaignManagement/accountHolders/{accountHolderId}` (Default9 (management-test))
- **Notes**: Returns a paginated list of donation campaigns associated with the account holder specified in the path. You can filter the list by campaign status. To make this request, your API credential must have one of the following roles : * Management API—Campaign Management read * Management API—Campaign Management read and write
- **Signature**: `GetCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderId(string companyId, string accountHolderId, string? status, int? pageNumber = 1, int? pageSize = 10, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `status` — nullable, no default → **must pass explicitly**
  - defaults: `pageNumber` = 1, `pageSize` = 10, `requestOptions` = null
- **Query params (wire ← C#)**: `status` ← `status`, `pageNumber` ← `pageNumber`, `pageSize` ← `pageSize`
- **Returns**: `ListDonationCampaignsResponse`
- **Error**: `SdkException<GetCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchCompaniesCompanyIdCampaignManagementDonationCampaignId
- **HTTP**: `PATCH /companies/{companyId}/campaignManagement/{donationCampaignId}` (Default9 (management-test))
- **Notes**: Updates the properties of the donation campaign specified in the path. Note the following restrictions: You cannot use a PATCH request to update the campaign status. To activate or end a campaign, make a POST request to the `/campaignManagement/{campaignId}/status/{status}` endpoint. You get a validation error if you add account holders that are not compatible with the nonprofit. To make this request, your API credential must have the following role : * Management API—Campaign Management read and write
- **Signature**: `PatchCompaniesCompanyIdCampaignManagementDonationCampaignId(string companyId, string donationCampaignId, DonationCampaignUpdate? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `DonationCampaign1`
- **Error**: `SdkException<PatchCompaniesCompanyIdCampaignManagementDonationCampaignIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostCompaniesCompanyIdCampaignManagement
- **HTTP**: `POST /companies/{companyId}/campaignManagement` (Default9 (management-test))
- **Notes**: Creates a new donation campaign, to give shoppers the option to donate to a nonprofit organization when making a payment. A campaign can be for online payments, in-person payments, or both online and in-person payments. To make this request, your API credential must have the following role : * Management API—Campaign Management read and write
- **Signature**: `PostCompaniesCompanyIdCampaignManagement(string companyId, DonationCampaignRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `DonationCampaign1`
- **Error**: `SdkException<PostCompaniesCompanyIdCampaignManagementError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostCompaniesCompanyIdCampaignManagementDonationCampaignIdStatusStatus
- **HTTP**: `POST /companies/{companyId}/campaignManagement/{donationCampaignId}/status/{status}` (Default9 (management-test))
- **Notes**: Starts or stops the donation campaign specified in the path, by providing a path parameter. Use the path parameter activate to start an inactive campaign, or end to stop an active campaign. Other status transitions are not allowed. To make this request, your API credential must have the following role : * Management API—Campaign Management read and write
- **Signature**: `PostCompaniesCompanyIdCampaignManagementDonationCampaignIdStatusStatus(string companyId, string donationCampaignId, CampaignStatusTransition status, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DonationCampaign1`
- **Error**: `SdkException<PostCompaniesCompanyIdCampaignManagementDonationCampaignIdStatusStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostCompaniesCompanyIdNonprofits
- **HTTP**: `POST /companies/{companyId}/nonprofits` (Default9 (management-test))
- **Notes**: Returns a list of supported nonprofit organizations to choose from when creating a donation campaign. The list only contains nonprofits that are compatible with all the account holders specified in the request.
- **Signature**: `PostCompaniesCompanyIdNonprofits(string companyId, string? searchTerm, int? pageNumber, IReadOnlyList<string>? goal, ListNonprofitsRequest? body, int? pageSize = 10, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`searchTerm` … `body`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `pageSize` = 10, `requestOptions` = null
- **Query params (wire ← C#)**: `searchTerm` ← `searchTerm`, `pageNumber` ← `pageNumber`, `pageSize` ← `pageSize`, `goal` ← `goal`
- **Returns**: `ListNonprofitsResponse`
- **Error**: `SdkException<PostCompaniesCompanyIdNonprofitsError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
