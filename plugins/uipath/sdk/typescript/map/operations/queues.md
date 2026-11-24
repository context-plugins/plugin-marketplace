<!-- Generated file — do not edit; regenerated with the SDK. -->

# Queues — operations

Accessor: `client.queues` · Source: `src/resources/queues.ts` · 2 operations · Request and error types: namespace `Queues`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `ui-path`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createQueue

- **Signature**: `createQueue(request: Queues.CreateQueueRequest, options?: RequestOptions): ApiPromise<QueueDefinition, Queues.CreateQueueError>`
- **Wire**: `POST /odata/QueueDefinitions`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `QueueDefinition`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Queues.CreateQueueError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Queues.CreateQueueRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xUipathOrganizationUnitId` | `header` | `X-UIPATH-OrganizationUnitId` | `number` | no |
| `body` | `body` | — | `QueueDefinition` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `QueueDefinition` | `queueDefinitionSchema` | `src/models/queue-definition.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listQueues

- **Signature**: `listQueues(request?: Queues.ListQueuesRequest, options?: RequestOptions): ApiPromise<ODataQueueDefinitionCollection, Queues.ListQueuesError>`
- **Wire**: `GET /odata/QueueDefinitions`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ODataQueueDefinitionCollection`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Queues.ListQueuesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Queues.ListQueuesRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `filter` | `query` | `$filter` | `string` | no |
| `top` | `query` | `$top` | `number` | no |
| `skip` | `query` | `$skip` | `number` | no |
| `xUipathOrganizationUnitId` | `header` | `X-UIPATH-OrganizationUnitId` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ODataQueueDefinitionCollection` | `oDataQueueDefinitionCollectionSchema` | `src/models/odata-queue-definition-collection.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

