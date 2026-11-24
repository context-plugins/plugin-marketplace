<!-- Generated file — do not edit; regenerated with the SDK. -->

# Alerts — operations

Accessor: `client.alerts` · Source: `src/resources/alerts.ts` · 6 operations · Request and error types: namespace `Alerts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createAlert

- **Signature**: `createAlert(request: Alerts.CreateAlertRequest, options?: RequestOptions): ApiPromise<Alert, Alerts.CreateAlertError>`
- **Wire**: `POST /analytics/v1/alerts`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Alert`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Alerts.CreateAlertError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Alerts.CreateAlertRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AlertRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AlertRequest` | `alertRequestSchema` | `src/models/alert-request.ts` |
| `Alert` | `alertSchema` | `src/models/alert.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteAlert

- **Signature**: `deleteAlert(request: Alerts.DeleteAlertRequest, options?: RequestOptions): ApiPromise<undefined, Alerts.DeleteAlertError>`
- **Wire**: `DELETE /analytics/v1/alerts/{id}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Alerts.DeleteAlertError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Alerts.DeleteAlertRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getAlert

- **Signature**: `getAlert(request: Alerts.GetAlertRequest, options?: RequestOptions): ApiPromise<Alert, Alerts.GetAlertError>`
- **Wire**: `GET /analytics/v1/alerts/{id}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Alert`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Alerts.GetAlertError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Alerts.GetAlertRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Alert` | `alertSchema` | `src/models/alert.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listAlertSlackChannels

- **Signature**: `listAlertSlackChannels(request?: Alerts.ListAlertSlackChannelsRequest, options?: RequestOptions): ApiPromise<AlertSlackChannelList, Alerts.ListAlertSlackChannelsError>`
- **Wire**: `GET /analytics/v1/alerts/slack-channels`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AlertSlackChannelList`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Alerts.ListAlertSlackChannelsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Alerts.ListAlertSlackChannelsRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `nameContains` | `query` | `string` | no | — |
| `maxResults` | `query` | `number` | no | `50` |
| `pageToken` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `AlertSlackChannelList` | `alertSlackChannelListSchema` | `src/models/alert-slack-channel-list.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listAlerts

- **Signature**: `listAlerts(request?: Alerts.ListAlertsRequest, options?: RequestOptions): ApiPromise<ExternalAlertList, Alerts.ListAlertsError>`
- **Wire**: `GET /analytics/v1/alerts`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ExternalAlertList`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Alerts.ListAlertsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Alerts.ListAlertsRequest` (6):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `sortBy` | `query` | `SortBy` | no | — |
| `sortOrder` | `query` | `SortOrder` | no | — |
| `maxResults` | `query` | `number` | no | `50` |
| `pageToken` | `query` | `string` | no | — |
| `filter` | `query` | `string` | no | — |
| `nameContains` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortBy` | `sortBySchema` | `src/models/sort-by.ts` |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `ExternalAlertList` | `externalAlertListSchema` | `src/models/external-alert-list.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateAlert

- **Signature**: `updateAlert(request: Alerts.UpdateAlertRequest, options?: RequestOptions): ApiPromise<Alert, Alerts.UpdateAlertError>`
- **Wire**: `PATCH /analytics/v1/alerts/{id}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Alert`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Alerts.UpdateAlertError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error409"` [409] no body · `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Alerts.UpdateAlertRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `AlertUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AlertUpdateRequest` | `alertUpdateRequestSchema` | `src/models/alert-update-request.ts` |
| `Alert` | `alertSchema` | `src/models/alert.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

