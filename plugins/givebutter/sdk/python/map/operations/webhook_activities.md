<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhookActivities — operations

Accessor: `client.webhook_activities` · Source: `givebutter/apis/webhook_activities.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.webhook_activities.webhooks_activities_index

- **Route**: `GET /v1/webhooks/{webhook}/activities`
- **Auth**: `http`
- **Signature**: `def webhooks_activities_index(webhook: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `webhook`
- **Params**: `webhook` — path
- **Returns (parsed)**: `V1WebhooksActivitiesResponse`
- **Returns (raw)**: `ApiResult[V1WebhooksActivitiesResponse, WebhooksActivitiesIndexErrorBody]`
- **Error**: `WebhooksActivitiesIndexErrorBody` — **Case A (typed)**
- **Error arms**: `ModelNotFoundException1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1WebhooksActivitiesResponse` | `givebutter/models/v1_webhooks_activities_response.py` |
| `WebhooksActivitiesIndexErrorBody` | `givebutter/errors/webhooks_activities_index_error.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |

### client.webhook_activities.webhooks_activities_show

- **Route**: `GET /v1/webhooks/{webhook}/activities/{activity}`
- **Auth**: `http`
- **Signature**: `def webhooks_activities_show(webhook: str, activity: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `webhook`, `activity`
- **Params**: `webhook` — path · `activity` — path
- **Returns (parsed)**: `WebhookActivityResource`
- **Returns (raw)**: `ApiResult[WebhookActivityResource, WebhooksActivitiesShowErrorBody]`
- **Error**: `WebhooksActivitiesShowErrorBody` — **Case A (typed)**
- **Error arms**: `ModelNotFoundException1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WebhookActivityResource` | `givebutter/models/webhook_activity_resource.py` |
| `WebhooksActivitiesShowErrorBody` | `givebutter/errors/webhooks_activities_show_error.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |

