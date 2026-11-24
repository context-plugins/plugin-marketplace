<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhookActivities — operations

Accessor: `client.webhookActivities` · Source: `src/resources/webhook-activities.ts` · 2 operations · Request and error types: namespace `WebhookActivities`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `givebutter`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### webhooksActivitiesIndex

- **Signature**: `webhooksActivitiesIndex(request: WebhookActivities.WebhooksActivitiesIndexRequest, options?: RequestOptions): ApiPromise<V1WebhooksActivitiesResponse, WebhookActivities.WebhooksActivitiesIndexError>`
- **Wire**: `GET /v1/webhooks/{webhook}/activities`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1WebhooksActivitiesResponse`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `WebhookActivities.WebhooksActivitiesIndexError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WebhookActivities.WebhooksActivitiesIndexRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `webhook` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1WebhooksActivitiesResponse` | `v1WebhooksActivitiesResponseSchema` | `src/models/v1-webhooks-activities-response.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |

### webhooksActivitiesShow

- **Signature**: `webhooksActivitiesShow(request: WebhookActivities.WebhooksActivitiesShowRequest, options?: RequestOptions): ApiPromise<WebhookActivityResource, WebhookActivities.WebhooksActivitiesShowError>`
- **Wire**: `GET /v1/webhooks/{webhook}/activities/{activity}`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WebhookActivityResource`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `WebhookActivities.WebhooksActivitiesShowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WebhookActivities.WebhooksActivitiesShowRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `webhook` | `path` | `string` | yes |
| `activity` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WebhookActivityResource` | `webhookActivityResourceSchema` | `src/models/webhook-activity-resource.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |

