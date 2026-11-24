<!-- Generated file — do not edit; regenerated with the SDK. -->

# CampaignTickets — operations

Accessor: `client.CampaignTickets` · Source: `src/Givebutter/Api/CampaignTickets.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CampaignsItemsTicketsIndex

- **Auth**: `options.Http`
- **Signature**: `CampaignsItemsTicketsIndex(CampaignsItemsTicketsIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Campaign`
- **Returns**: `V1CampaignsItemsTicketsResponse`
- **Error**: `ApiException<CampaignsItemsTicketsIndexError>` — **Case A (typed)**
- **Error accessors**: `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CampaignsItemsTicketsIndexRequest` | `src/Givebutter/Requests/CampaignTickets/CampaignsItemsTicketsIndexRequest.cs` |
| `V1CampaignsItemsTicketsResponse` | `src/Givebutter/Models/V1CampaignsItemsTicketsResponse.cs` |
| `CampaignsItemsTicketsIndexError` | `src/Givebutter/Errors/CampaignsItemsTicketsIndexError.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |

### CampaignsItemsTicketsShow

- **Auth**: `options.Http`
- **Signature**: `CampaignsItemsTicketsShow(CampaignsItemsTicketsShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Campaign`, `TicketId`
- **Returns**: `CampaignItemTicketResource`
- **Error**: `ApiException<CampaignsItemsTicketsShowError>` — **Case A (typed)**
- **Error accessors**: `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CampaignsItemsTicketsShowRequest` | `src/Givebutter/Requests/CampaignTickets/CampaignsItemsTicketsShowRequest.cs` |
| `CampaignItemTicketResource` | `src/Givebutter/Models/CampaignItemTicketResource.cs` |
| `CampaignsItemsTicketsShowError` | `src/Givebutter/Errors/CampaignsItemsTicketsShowError.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |

### CampaignsItemsTicketsStore

- **Auth**: `options.Http`
- **Signature**: `CampaignsItemsTicketsStore(CampaignsItemsTicketsStoreRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Campaign`, `Body`
- **Returns**: `CampaignItemTicketResource`
- **Error**: `ApiException<CampaignsItemsTicketsStoreError>` — **Case A (typed)**
- **Error accessors**: `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetValidationException1([NotNullWhen(true)] out ValidationException1? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CampaignsItemsTicketsStoreRequest` | `src/Givebutter/Requests/CampaignTickets/CampaignsItemsTicketsStoreRequest.cs` |
| `StoreCampaignItemTicketRequest` | `src/Givebutter/Models/StoreCampaignItemTicketRequest.cs` |
| `CampaignItemTicketResource` | `src/Givebutter/Models/CampaignItemTicketResource.cs` |
| `CampaignsItemsTicketsStoreError` | `src/Givebutter/Errors/CampaignsItemsTicketsStoreError.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |
| `ValidationException1` | `src/Givebutter/Models/ValidationException1.cs` |

