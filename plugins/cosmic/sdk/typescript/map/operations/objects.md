<!-- Generated file — do not edit; regenerated with the SDK. -->

# Objects — operations

Accessor: `client.objects` · Source: `src/resources/objects.ts` · 6 operations · Request and error types: namespace `Objects`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cosmic`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### batchObjects

- **Signature**: `batchObjects(request: Objects.BatchObjectsRequest, options?: RequestOptions): ApiPromise<BatchResponse, Objects.BatchObjectsError>`
- **Wire**: `POST /buckets/{slug}/objects/batch`
- **Auth**: `writeKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BatchResponse`
- **Error**: `CosmicError` with `kind: "api"`, an instance of `Objects.BatchObjectsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [402] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Objects.BatchObjectsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `slug` | `path` | `string` | yes |
| `body` | `body` | `BatchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchRequest` | `batchRequestSchema` | `src/models/batch-request.ts` |
| `BatchResponse` | `batchResponseSchema` | `src/models/batch-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createObject

- **Signature**: `createObject(request: Objects.CreateObjectRequest, options?: RequestOptions): ApiPromise<ObjectResponse, Objects.CreateObjectError>`
- **Wire**: `POST /buckets/{slug}/objects`
- **Auth**: `writeKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ObjectResponse`
- **Error**: `CosmicError` with `kind: "api"`, an instance of `Objects.CreateObjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [402] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Objects.CreateObjectRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `slug` | `path` | `string` | yes |
| `body` | `body` | `ObjectCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ObjectCreate` | `objectCreateSchema` | `src/models/object-create.ts` |
| `ObjectResponse` | `objectResponseSchema` | `src/models/object-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteObject

- **Signature**: `deleteObject(request: Objects.DeleteObjectRequest, options?: RequestOptions): ApiPromise<MessageResponse, Objects.DeleteObjectError>`
- **Wire**: `DELETE /buckets/{slug}/objects/{object_id}`
- **Auth**: `writeKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MessageResponse`
- **Error**: `CosmicError` with `kind: "api"`, an instance of `Objects.DeleteObjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [402] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Objects.DeleteObjectRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `slug` | `path` | — | `string` | yes | — |
| `objectId` | `path` | `object_id` | `string` | yes | — |
| `triggerWebhook` | `query` | `trigger_webhook` | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getObject

- **Signature**: `getObject(request: Objects.GetObjectRequest, options?: RequestOptions): ApiPromise<ObjectResponse, Objects.GetObjectError>`
- **Wire**: `GET /buckets/{slug}/objects/{object_id}`
- **Auth**: `readKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ObjectResponse`
- **Error**: `CosmicError` with `kind: "api"`, an instance of `Objects.GetObjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [402] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Objects.GetObjectRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `slug` | `path` | — | `string` | yes | — |
| `objectId` | `path` | `object_id` | `string` | yes | — |
| `readKey` | `query` | `read_key` | `string` | no | — |
| `previewToken` | `query` | `preview_token` | `string` | no | — |
| `props` | `query` | — | `string` | no | — |
| `status` | `query` | — | `Status4` | no | `Status4.Published` |
| `depth` | `query` | — | `number` | no | `0` |
| `useCache` | `query` | — | `boolean` | no | `true` |
| `pretty` | `query` | — | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Status4` | `status4Schema` | `src/models/status4.ts` |
| `ObjectResponse` | `objectResponseSchema` | `src/models/object-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listObjects

- **Signature**: `listObjects(request: Objects.ListObjectsRequest, options?: RequestOptions): ApiPromise<ObjectListResponse, Objects.ListObjectsError>`
- **Wire**: `GET /buckets/{slug}/objects`
- **Auth**: `readKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ObjectListResponse`
- **Error**: `CosmicError` with `kind: "api"`, an instance of `Objects.ListObjectsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [402] `Error` · `"error4"` [404] `Error` · `"error5"` [413] `Error` · `"error6"` [429] `Error` · `"error7"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Objects.ListObjectsRequest` (13):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `slug` | `path` | — | `string` | yes | — |
| `readKey` | `query` | `read_key` | `string` | no | — |
| `previewToken` | `query` | `preview_token` | `string` | no | — |
| `query` | `query` | — | `string` | no | — |
| `props` | `query` | — | `string` | no | — |
| `status` | `query` | — | `Status4` | no | `Status4.Published` |
| `sort` | `query` | — | `string` | no | `"-order"` |
| `limit` | `query` | — | `number` | no | `1000` |
| `skip` | `query` | — | `number` | no | `0` |
| `depth` | `query` | — | `number` | no | `0` |
| `after` | `query` | — | `string` | no | — |
| `useCache` | `query` | — | `boolean` | no | `true` |
| `pretty` | `query` | — | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Status4` | `status4Schema` | `src/models/status4.ts` |
| `ObjectListResponse` | `objectListResponseSchema` | `src/models/object-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateObject

- **Signature**: `updateObject(request: Objects.UpdateObjectRequest, options?: RequestOptions): ApiPromise<ObjectResponse, Objects.UpdateObjectError>`
- **Wire**: `PATCH /buckets/{slug}/objects/{object_id}`
- **Auth**: `writeKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ObjectResponse`
- **Error**: `CosmicError` with `kind: "api"`, an instance of `Objects.UpdateObjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [402] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Objects.UpdateObjectRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `slug` | `path` | — | `string` | yes |
| `objectId` | `path` | `object_id` | `string` | yes |
| `body` | `body` | — | `ObjectUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ObjectUpdate` | `objectUpdateSchema` | `src/models/object-update.ts` |
| `ObjectResponse` | `objectResponseSchema` | `src/models/object-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

