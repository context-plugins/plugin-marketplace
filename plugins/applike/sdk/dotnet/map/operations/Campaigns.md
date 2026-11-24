<!-- Generated file — do not edit; regenerated with the SDK. -->

# Campaigns — operations

Accessor: `client.Campaigns` · Source: `src/Applike/Api/Campaigns.cs` · 2 operations

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
| `PostManagementV1CampaignRequest` | `src/Applike/Requests/Campaigns/PostManagementV1CampaignRequest.cs` |
| `CreateCampaignRequest` | `src/Applike/Models/CreateCampaignRequest.cs` |
| `CampaignOutput` | `src/Applike/Models/CampaignOutput.cs` |
| `PostManagementV1CampaignError` | `src/Applike/Errors/PostManagementV1CampaignError.cs` |
| `ErrorResponseModel` | `src/Applike/Models/ErrorResponseModel.cs` |

### PostManagementV1Campaigns

- **Server group**: `DefaultManagementAppPartnerConnectionApi`
- **Auth**: `options.ApiKeyAuth`
- **Signature**: `PostManagementV1Campaigns(PostManagementV1CampaignsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `CampaignOutput`
- **Error**: `ApiException<PostManagementV1CampaignsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostManagementV1CampaignsRequest` | `src/Applike/Requests/Campaigns/PostManagementV1CampaignsRequest.cs` |
| `ListCampaignsRequest` | `src/Applike/Models/ListCampaignsRequest.cs` |
| `CampaignOutput` | `src/Applike/Models/CampaignOutput.cs` |
| `PostManagementV1CampaignsError` | `src/Applike/Errors/PostManagementV1CampaignsError.cs` |
| `ErrorResponseModel` | `src/Applike/Models/ErrorResponseModel.cs` |

