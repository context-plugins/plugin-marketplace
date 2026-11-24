<!-- Generated file — do not edit; regenerated with the SDK. -->

# Campaigns — operations

Accessor: `client.Campaigns` · Source: `src/Hightouch/Api/Campaigns.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetSendStatuses

- **Auth**: `options.BearerAuth`
- **Signature**: `GetSendStatuses(GetSendStatusesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CampaignId`, `Body`
- **Returns**: `BatchSendStatusResponse`
- **Error**: `ApiException<GetSendStatusesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [422] · `TryGetInternalServerError([NotNullWhen(true)] out InternalServerError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSendStatusesRequest` | `src/Hightouch/Requests/Campaigns/GetSendStatusesRequest.cs` |
| `BatchSendStatusRequest` | `src/Hightouch/Models/BatchSendStatusRequest.cs` |
| `BatchSendStatusResponse` | `src/Hightouch/Models/BatchSendStatusResponse.cs` |
| `GetSendStatusesError` | `src/Hightouch/Errors/GetSendStatusesError.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |
| `InternalServerError` | `src/Hightouch/Models/Enums/InternalServerError.cs` |

### TriggerCampaign

- **Auth**: `options.BearerAuth`
- **Signature**: `TriggerCampaign(TriggerCampaignRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CampaignId`, `Body`
- **Returns**: `CampaignsTriggerResponse`
- **Error**: `ApiException<TriggerCampaignError>` — **Case A (typed)**
- **Error accessors**: `TryGetTriggerErrorResponse([NotNullWhen(true)] out TriggerErrorResponse? value)` [400, 404, 429] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [422] · `TryGetInternalServerError([NotNullWhen(true)] out InternalServerError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TriggerCampaignRequest` | `src/Hightouch/Requests/Campaigns/TriggerCampaignRequest.cs` |
| `StartCampaignRequest` | `src/Hightouch/Models/StartCampaignRequest.cs` |
| `CampaignsTriggerResponse` | `src/Hightouch/Models/AnyOf/CampaignsTriggerResponse.cs` |
| `TriggerCampaignError` | `src/Hightouch/Errors/TriggerCampaignError.cs` |
| `TriggerErrorResponse` | `src/Hightouch/Models/TriggerErrorResponse.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |
| `InternalServerError` | `src/Hightouch/Models/Enums/InternalServerError.cs` |

