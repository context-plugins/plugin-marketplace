<!-- Generated file — do not edit; regenerated with the SDK. -->

# ObjectTypes — operations

Accessor: `client.objectTypes` · Source: `src/resources/object-types.ts` · 5 operations · Request and error types: namespace `ObjectTypes`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cosmic`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createObjectType

- **Signature**: `createObjectType(request: ObjectTypes.CreateObjectTypeRequest, options?: RequestOptions): ApiPromise<ObjectTypeResponse, ObjectTypes.CreateObjectTypeError>`
- **Wire**: `POST /buckets/{slug}/object-types`
- **Auth**: `writeKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ObjectTypeResponse`
- **Error**: `CosmicError` with `kind: "api"`, an instance of `ObjectTypes.CreateObjectTypeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [402] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ObjectTypes.CreateObjectTypeRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `slug` | `path` | `string` | yes |
| `body` | `body` | `ObjectTypeCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ObjectTypeCreate` | `objectTypeCreateSchema` | `src/models/object-type-create.ts` |
| `ObjectTypeResponse` | `objectTypeResponseSchema` | `src/models/object-type-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteObjectType

- **Signature**: `deleteObjectType(request: ObjectTypes.DeleteObjectTypeRequest, options?: RequestOptions): ApiPromise<MessageResponse, ObjectTypes.DeleteObjectTypeError>`
- **Wire**: `DELETE /buckets/{slug}/object-types/{type_slug}`
- **Auth**: `writeKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MessageResponse`
- **Error**: `CosmicError` with `kind: "api"`, an instance of `ObjectTypes.DeleteObjectTypeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [402] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ObjectTypes.DeleteObjectTypeRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `slug` | `path` | — | `string` | yes | — |
| `typeSlug` | `path` | `type_slug` | `string` | yes | — |
| `triggerWebhook` | `query` | `trigger_webhook` | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getObjectType

- **Signature**: `getObjectType(request: ObjectTypes.GetObjectTypeRequest, options?: RequestOptions): ApiPromise<ObjectTypeResponse, ObjectTypes.GetObjectTypeError>`
- **Wire**: `GET /buckets/{slug}/object-types/{type_slug}`
- **Auth**: `readKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ObjectTypeResponse`
- **Error**: `CosmicError` with `kind: "api"`, an instance of `ObjectTypes.GetObjectTypeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [402] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ObjectTypes.GetObjectTypeRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `slug` | `path` | — | `string` | yes | — |
| `typeSlug` | `path` | `type_slug` | `string` | yes | — |
| `readKey` | `query` | `read_key` | `string` | no | — |
| `pretty` | `query` | — | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ObjectTypeResponse` | `objectTypeResponseSchema` | `src/models/object-type-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listObjectTypes

- **Signature**: `listObjectTypes(request: ObjectTypes.ListObjectTypesRequest, options?: RequestOptions): ApiPromise<ObjectTypeListResponse, ObjectTypes.ListObjectTypesError>`
- **Wire**: `GET /buckets/{slug}/object-types`
- **Auth**: `readKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ObjectTypeListResponse`
- **Error**: `CosmicError` with `kind: "api"`, an instance of `ObjectTypes.ListObjectTypesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [402] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ObjectTypes.ListObjectTypesRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `slug` | `path` | — | `string` | yes | — |
| `readKey` | `query` | `read_key` | `string` | no | — |
| `pretty` | `query` | — | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ObjectTypeListResponse` | `objectTypeListResponseSchema` | `src/models/object-type-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateObjectType

- **Signature**: `updateObjectType(request: ObjectTypes.UpdateObjectTypeRequest, options?: RequestOptions): ApiPromise<ObjectTypeResponse, ObjectTypes.UpdateObjectTypeError>`
- **Wire**: `PATCH /buckets/{slug}/object-types/{type_slug}`
- **Auth**: `writeKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ObjectTypeResponse`
- **Error**: `CosmicError` with `kind: "api"`, an instance of `ObjectTypes.UpdateObjectTypeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [402] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ObjectTypes.UpdateObjectTypeRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `slug` | `path` | — | `string` | yes |
| `typeSlug` | `path` | `type_slug` | `string` | yes |
| `body` | `body` | — | `ObjectTypeUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ObjectTypeUpdate` | `objectTypeUpdateSchema` | `src/models/object-type-update.ts` |
| `ObjectTypeResponse` | `objectTypeResponseSchema` | `src/models/object-type-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

