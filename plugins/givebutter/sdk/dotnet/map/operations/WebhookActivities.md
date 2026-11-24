<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhookActivities — operations

Accessor: `client.WebhookActivities` · Source: `src/Givebutter/Api/WebhookActivities.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### WebhooksActivitiesIndex

- **Auth**: `options.Http`
- **Signature**: `WebhooksActivitiesIndex(WebhooksActivitiesIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Webhook`
- **Returns**: `V1WebhooksActivitiesResponse`
- **Error**: `ApiException<WebhooksActivitiesIndexError>` — **Case A (typed)**
- **Error accessors**: `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WebhooksActivitiesIndexRequest` | `src/Givebutter/Requests/WebhookActivities/WebhooksActivitiesIndexRequest.cs` |
| `V1WebhooksActivitiesResponse` | `src/Givebutter/Models/V1WebhooksActivitiesResponse.cs` |
| `WebhooksActivitiesIndexError` | `src/Givebutter/Errors/WebhooksActivitiesIndexError.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |

### WebhooksActivitiesShow

- **Auth**: `options.Http`
- **Signature**: `WebhooksActivitiesShow(WebhooksActivitiesShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Webhook`, `Activity`
- **Returns**: `WebhookActivityResource`
- **Error**: `ApiException<WebhooksActivitiesShowError>` — **Case A (typed)**
- **Error accessors**: `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WebhooksActivitiesShowRequest` | `src/Givebutter/Requests/WebhookActivities/WebhooksActivitiesShowRequest.cs` |
| `WebhookActivityResource` | `src/Givebutter/Models/WebhookActivityResource.cs` |
| `WebhooksActivitiesShowError` | `src/Givebutter/Errors/WebhooksActivitiesShowError.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |

