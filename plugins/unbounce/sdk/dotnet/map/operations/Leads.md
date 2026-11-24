<!-- Generated file — do not edit; regenerated with the SDK. -->

# Leads — operations

Accessor: `client.Leads` · Source: `src/Unbounce/Api/Leads.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetLead

- **Auth**: `options.ApiKeyAuth` OR `options.Oauth2`
- **Signature**: `GetLead(GetLeadRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `LeadId`
- **Returns**: `Lead`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetLeadRequest` | `src/Unbounce/Requests/Leads/GetLeadRequest.cs` |
| `Lead` | `src/Unbounce/Models/Lead.cs` |

### GetLeadDeletionRequest

- **Auth**: `options.ApiKeyAuth` OR `options.Oauth2`
- **Signature**: `GetLeadDeletionRequest(GetLeadDeletionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PageId`, `LeadDeletionRequestId`
- **Returns**: `LeadDeletionRequest`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetLeadDeletionRequest` | `src/Unbounce/Requests/Leads/GetLeadDeletionRequest.cs` |
| `LeadDeletionRequest` | `src/Unbounce/Models/LeadDeletionRequest.cs` |

### GetLeadForPage

- **Auth**: `options.ApiKeyAuth` OR `options.Oauth2`
- **Signature**: `GetLeadForPage(GetLeadForPageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PageId`, `LeadId`
- **Returns**: `Lead`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetLeadForPageRequest` | `src/Unbounce/Requests/Leads/GetLeadForPageRequest.cs` |
| `Lead` | `src/Unbounce/Models/Lead.cs` |

### ListLeadDeletionRequests

- **Auth**: `options.ApiKeyAuth` OR `options.Oauth2`
- **Signature**: `ListLeadDeletionRequests(ListLeadDeletionRequestsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PageId`
- **Returns**: `PagesLeadDeletionRequestResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListLeadDeletionRequestsRequest` | `src/Unbounce/Requests/Leads/ListLeadDeletionRequestsRequest.cs` |
| `PagesLeadDeletionRequestResponse` | `src/Unbounce/Models/PagesLeadDeletionRequestResponse.cs` |

### ListLeadsForPage

- **Auth**: `options.ApiKeyAuth` OR `options.Oauth2`
- **Signature**: `ListLeadsForPage(ListLeadsForPageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PageId`
- **Returns**: `PagesLeadsResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListLeadsForPageRequest` | `src/Unbounce/Requests/Leads/ListLeadsForPageRequest.cs` |
| `PagesLeadsResponse` | `src/Unbounce/Models/PagesLeadsResponse.cs` |

