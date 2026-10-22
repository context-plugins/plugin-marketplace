<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomMetadata — operations

Accessor: `client.customMetadata` · Source: `src/resources/custom-metadata.ts` · 5 operations · Request and error types: namespace `CustomMetadata`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `glean-indexing-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addOrUpdateCustomMetadata

- **Signature**: `addOrUpdateCustomMetadata(request: CustomMetadata.AddOrUpdateCustomMetadataRequest, options?: RequestOptions): ApiPromise<SuccessResponse, CustomMetadata.AddOrUpdateCustomMetadataError>`
- **Wire**: `PUT /rest/api/index/document/{docId}/custom-metadata/{groupName}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SuccessResponse`
- **Error**: `GleanIndexingApiError` with `kind: "api"`, an instance of `CustomMetadata.AddOrUpdateCustomMetadataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorInfoResponse"` [400] `ErrorInfoResponse` · `"errorInfoResponse2"` [401] `ErrorInfoResponse` · `"errorInfoResponse3"` [404] `ErrorInfoResponse` · `"errorInfoResponse4"` [429] `ErrorInfoResponse` · `"errorInfoResponse5"` [500] `ErrorInfoResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomMetadata.AddOrUpdateCustomMetadataRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `groupName` | `path` | `string` | yes |
| `body` | `body` | `CustomMetadataPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomMetadataPutRequest` | `customMetadataPutRequestSchema` | `src/models/custom-metadata-put-request.ts` |
| `SuccessResponse` | `successResponseSchema` | `src/models/success-response.ts` |
| `ErrorInfoResponse` | `errorInfoResponseSchema` | `src/models/error-info-response.ts` |

### createOrUpdateMetadataSchema

- **Signature**: `createOrUpdateMetadataSchema(request: CustomMetadata.CreateOrUpdateMetadataSchemaRequest, options?: RequestOptions): ApiPromise<SuccessResponse, CustomMetadata.CreateOrUpdateMetadataSchemaError>`
- **Wire**: `PUT /rest/api/index/custom-metadata/schema/{groupName}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SuccessResponse`
- **Error**: `GleanIndexingApiError` with `kind: "api"`, an instance of `CustomMetadata.CreateOrUpdateMetadataSchemaError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorInfoResponse"` [400] `ErrorInfoResponse` · `"errorInfoResponse2"` [401] `ErrorInfoResponse` · `"errorInfoResponse3"` [409] `ErrorInfoResponse` · `"errorInfoResponse4"` [429] `ErrorInfoResponse` · `"errorInfoResponse5"` [500] `ErrorInfoResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomMetadata.CreateOrUpdateMetadataSchemaRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `groupName` | `path` | `string` | yes |
| `body` | `body` | `CustomMetadataSchema` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomMetadataSchema` | `customMetadataSchemaSchema` | `src/models/custom-metadata-schema.ts` |
| `SuccessResponse` | `successResponseSchema` | `src/models/success-response.ts` |
| `ErrorInfoResponse` | `errorInfoResponseSchema` | `src/models/error-info-response.ts` |

### removeCustomMetadata

- **Signature**: `removeCustomMetadata(request: CustomMetadata.RemoveCustomMetadataRequest, options?: RequestOptions): ApiPromise<SuccessResponse, CustomMetadata.RemoveCustomMetadataError>`
- **Wire**: `DELETE /rest/api/index/document/{docId}/custom-metadata/{groupName}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SuccessResponse`
- **Error**: `GleanIndexingApiError` with `kind: "api"`, an instance of `CustomMetadata.RemoveCustomMetadataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorInfoResponse"` [400] `ErrorInfoResponse` · `"errorInfoResponse2"` [401] `ErrorInfoResponse` · `"errorInfoResponse3"` [404] `ErrorInfoResponse` · `"errorInfoResponse4"` [429] `ErrorInfoResponse` · `"errorInfoResponse5"` [500] `ErrorInfoResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomMetadata.RemoveCustomMetadataRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `groupName` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SuccessResponse` | `successResponseSchema` | `src/models/success-response.ts` |
| `ErrorInfoResponse` | `errorInfoResponseSchema` | `src/models/error-info-response.ts` |

### removeMetadataSchema

- **Signature**: `removeMetadataSchema(request: CustomMetadata.RemoveMetadataSchemaRequest, options?: RequestOptions): ApiPromise<SuccessResponse, CustomMetadata.RemoveMetadataSchemaError>`
- **Wire**: `DELETE /rest/api/index/custom-metadata/schema/{groupName}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SuccessResponse`
- **Error**: `GleanIndexingApiError` with `kind: "api"`, an instance of `CustomMetadata.RemoveMetadataSchemaError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorInfoResponse"` [400] `ErrorInfoResponse` · `"errorInfoResponse2"` [401] `ErrorInfoResponse` · `"errorInfoResponse3"` [404] `ErrorInfoResponse` · `"errorInfoResponse4"` [429] `ErrorInfoResponse` · `"errorInfoResponse5"` [500] `ErrorInfoResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomMetadata.RemoveMetadataSchemaRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `groupName` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SuccessResponse` | `successResponseSchema` | `src/models/success-response.ts` |
| `ErrorInfoResponse` | `errorInfoResponseSchema` | `src/models/error-info-response.ts` |

### retrieveMetadataSchema

- **Signature**: `retrieveMetadataSchema(request: CustomMetadata.RetrieveMetadataSchemaRequest, options?: RequestOptions): ApiPromise<CustomMetadataSchema, CustomMetadata.RetrieveMetadataSchemaError>`
- **Wire**: `GET /rest/api/index/custom-metadata/schema/{groupName}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomMetadataSchema`
- **Error**: `GleanIndexingApiError` with `kind: "api"`, an instance of `CustomMetadata.RetrieveMetadataSchemaError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorInfoResponse"` [401] `ErrorInfoResponse` · `"errorInfoResponse2"` [404] `ErrorInfoResponse` · `"errorInfoResponse3"` [429] `ErrorInfoResponse` · `"errorInfoResponse4"` [500] `ErrorInfoResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomMetadata.RetrieveMetadataSchemaRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `groupName` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomMetadataSchema` | `customMetadataSchemaSchema` | `src/models/custom-metadata-schema.ts` |
| `ErrorInfoResponse` | `errorInfoResponseSchema` | `src/models/error-info-response.ts` |

