<!-- Generated file — do not edit; regenerated with the SDK. -->

# Campaigns — operations

Accessor: `client.Campaigns` · Source: `src/Justtrack/Api/Campaigns.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PostManagementV1Campaign

- **Server group**: `DefaultManagementAppPartnerConnectionApi`
- **Auth**: `options.ApiKeyAuth`
- **Signature**: `PostManagementV1Campaign(PostManagementV1CampaignRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `CampaignOutput`
- **Error**: `ApiException<PostManagementV1CampaignError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostManagementV1CampaignRequest` | `src/Justtrack/Requests/Campaigns/PostManagementV1CampaignRequest.cs` |
| `CreateCampaignRequest` | `src/Justtrack/Models/CreateCampaignRequest.cs` |
| `CampaignOutput` | `src/Justtrack/Models/CampaignOutput.cs` |
| `PostManagementV1CampaignError` | `src/Justtrack/Errors/PostManagementV1CampaignError.cs` |
| `ErrorResponseModel` | `src/Justtrack/Models/ErrorResponseModel.cs` |

### PostManagementV1Campaigns

- **Server group**: `DefaultManagementAppPartnerConnectionApi`
- **Auth**: `options.ApiKeyAuth`
- **Signature**: `PostManagementV1Campaigns(PostManagementV1CampaignsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `CampaignOutput`
- **Error**: `ApiException<PostManagementV1CampaignsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostManagementV1CampaignsRequest` | `src/Justtrack/Requests/Campaigns/PostManagementV1CampaignsRequest.cs` |
| `ListCampaignsRequest` | `src/Justtrack/Models/ListCampaignsRequest.cs` |
| `CampaignOutput` | `src/Justtrack/Models/CampaignOutput.cs` |
| `PostManagementV1CampaignsError` | `src/Justtrack/Errors/PostManagementV1CampaignsError.cs` |
| `ErrorResponseModel` | `src/Justtrack/Models/ErrorResponseModel.cs` |

