<!-- Generated file — do not edit; regenerated with the SDK. -->

# Webhooks — operations

Accessor: `client.webhooks` · Source: `src/resources/webhooks.ts` · 4 operations · Request and error types: namespace `Webhooks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `ui-path`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createWebhook

- **Signature**: `createWebhook(request: Webhooks.CreateWebhookRequest, options?: RequestOptions): ApiPromise<Webhook, Webhooks.CreateWebhookError>`
- **Wire**: `POST /odata/Webhooks`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Webhook`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Webhooks.CreateWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.CreateWebhookRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xUipathOrganizationUnitId` | `header` | `X-UIPATH-OrganizationUnitId` | `number` | no |
| `body` | `body` | — | `Webhook` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Webhook` | `webhookSchema` | `src/models/webhook.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteWebhook

- **Signature**: `deleteWebhook(request: Webhooks.DeleteWebhookRequest, options?: RequestOptions): ApiPromise<undefined, Webhooks.DeleteWebhookError>`
- **Wire**: `DELETE /odata/Webhooks({key})`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Webhooks.DeleteWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.DeleteWebhookRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `key` | `path` | — | `number` | yes |
| `xUipathOrganizationUnitId` | `header` | `X-UIPATH-OrganizationUnitId` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getWebhookEventTypes

- **Signature**: `getWebhookEventTypes(request?: Webhooks.GetWebhookEventTypesRequest, options?: RequestOptions): ApiPromise<OdataWebhooksUiPathServerConfigurationODataGetEventTypesResponse, Webhooks.GetWebhookEventTypesError>`
- **Wire**: `GET /odata/Webhooks/UiPath.Server.Configuration.OData.GetEventTypes()`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OdataWebhooksUiPathServerConfigurationODataGetEventTypesResponse`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Webhooks.GetWebhookEventTypesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.GetWebhookEventTypesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xUipathOrganizationUnitId` | `header` | `X-UIPATH-OrganizationUnitId` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OdataWebhooksUiPathServerConfigurationODataGetEventTypesResponse` | `odataWebhooksUiPathServerConfigurationODataGetEventTypesResponseSchema` | `src/models/odata-webhooks-ui-path-server-configuration-odata-get-event-types-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listWebhooks

- **Signature**: `listWebhooks(request?: Webhooks.ListWebhooksRequest, options?: RequestOptions): ApiPromise<ODataWebhookCollection, Webhooks.ListWebhooksError>`
- **Wire**: `GET /odata/Webhooks`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ODataWebhookCollection`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Webhooks.ListWebhooksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.ListWebhooksRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `filter` | `query` | `$filter` | `string` | no |
| `top` | `query` | `$top` | `number` | no |
| `skip` | `query` | `$skip` | `number` | no |
| `xUipathOrganizationUnitId` | `header` | `X-UIPATH-OrganizationUnitId` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ODataWebhookCollection` | `oDataWebhookCollectionSchema` | `src/models/odata-webhook-collection.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

