<!-- Generated file — do not edit; regenerated with the SDK. -->

# Troubleshooting — operations

Accessor: `client.troubleshooting` · Source: `src/resources/troubleshooting.ts` · 9 operations · Request and error types: namespace `Troubleshooting`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `glean-indexing-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### betaGetDatasourceStatus

- **Signature**: `betaGetDatasourceStatus(request: Troubleshooting.BetaGetDatasourceStatusRequest, options?: RequestOptions): ApiPromise<DebugDatasourceStatusResponse, Troubleshooting.BetaGetDatasourceStatusError>`
- **Wire**: `POST /api/index/v1/debug/{datasource}/status`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DebugDatasourceStatusResponse`
- **Error**: `GleanIndexingApiError` with `kind: "api"`, an instance of `Troubleshooting.BetaGetDatasourceStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Troubleshooting.BetaGetDatasourceStatusRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `datasource` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DebugDatasourceStatusResponse` | `debugDatasourceStatusResponseSchema` | `src/models/debug-datasource-status-response.ts` |

### betaGetDocumentInformation

- **Signature**: `betaGetDocumentInformation(request: Troubleshooting.BetaGetDocumentInformationRequest, options?: RequestOptions): ApiPromise<DebugDocumentResponse, Troubleshooting.BetaGetDocumentInformationError>`
- **Wire**: `POST /api/index/v1/debug/{datasource}/document`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DebugDocumentResponse`
- **Error**: `GleanIndexingApiError` with `kind: "api"`, an instance of `Troubleshooting.BetaGetDocumentInformationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Troubleshooting.BetaGetDocumentInformationRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `datasource` | `path` | `string` | yes |
| `body` | `body` | `DebugDocumentRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DebugDocumentRequest` | `debugDocumentRequestSchema` | `src/models/debug-document-request.ts` |
| `DebugDocumentResponse` | `debugDocumentResponseSchema` | `src/models/debug-document-response.ts` |

### betaGetDocumentLifecycleEvents

- **Signature**: `betaGetDocumentLifecycleEvents(request: Troubleshooting.BetaGetDocumentLifecycleEventsRequest, options?: RequestOptions): ApiPromise<DebugDocumentLifecycleResponse, Troubleshooting.BetaGetDocumentLifecycleEventsError>`
- **Wire**: `POST /api/index/v1/debug/{datasource}/document/events`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DebugDocumentLifecycleResponse`
- **Error**: `GleanIndexingApiError` with `kind: "api"`, an instance of `Troubleshooting.BetaGetDocumentLifecycleEventsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Troubleshooting.BetaGetDocumentLifecycleEventsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `datasource` | `path` | `string` | yes |
| `body` | `body` | `DebugDocumentLifecycleRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DebugDocumentLifecycleRequest` | `debugDocumentLifecycleRequestSchema` | `src/models/debug-document-lifecycle-request.ts` |
| `DebugDocumentLifecycleResponse` | `debugDocumentLifecycleResponseSchema` | `src/models/debug-document-lifecycle-response.ts` |

### betaGetInformationOfABatchOfDocuments

- **Signature**: `betaGetInformationOfABatchOfDocuments(request: Troubleshooting.BetaGetInformationOfABatchOfDocumentsRequest, options?: RequestOptions): ApiPromise<DebugDocumentsResponse, Troubleshooting.BetaGetInformationOfABatchOfDocumentsError>`
- **Wire**: `POST /api/index/v1/debug/{datasource}/documents`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DebugDocumentsResponse`
- **Error**: `GleanIndexingApiError` with `kind: "api"`, an instance of `Troubleshooting.BetaGetInformationOfABatchOfDocumentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Troubleshooting.BetaGetInformationOfABatchOfDocumentsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `datasource` | `path` | `string` | yes |
| `body` | `body` | `DebugDocumentsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DebugDocumentsRequest` | `debugDocumentsRequestSchema` | `src/models/debug-documents-request.ts` |
| `DebugDocumentsResponse` | `debugDocumentsResponseSchema` | `src/models/debug-documents-response.ts` |

### betaGetUserInformation

- **Signature**: `betaGetUserInformation(request: Troubleshooting.BetaGetUserInformationRequest, options?: RequestOptions): ApiPromise<DebugUserResponse, Troubleshooting.BetaGetUserInformationError>`
- **Wire**: `POST /api/index/v1/debug/{datasource}/user`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DebugUserResponse`
- **Error**: `GleanIndexingApiError` with `kind: "api"`, an instance of `Troubleshooting.BetaGetUserInformationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Troubleshooting.BetaGetUserInformationRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `datasource` | `path` | `string` | yes |
| `body` | `body` | `DebugUserRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DebugUserRequest` | `debugUserRequestSchema` | `src/models/debug-user-request.ts` |
| `DebugUserResponse` | `debugUserResponseSchema` | `src/models/debug-user-response.ts` |

### checkDocumentAccess

- **Signature**: `checkDocumentAccess(request: Troubleshooting.CheckDocumentAccessRequestParams, options?: RequestOptions): ApiPromise<CheckDocumentAccessResponse, Troubleshooting.CheckDocumentAccessError>`
- **Wire**: `POST /api/index/v1/checkdocumentaccess`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CheckDocumentAccessResponse`
- **Error**: `GleanIndexingApiError` with `kind: "api"`, an instance of `Troubleshooting.CheckDocumentAccessError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Troubleshooting.CheckDocumentAccessRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CheckDocumentAccessRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CheckDocumentAccessRequest` | `checkDocumentAccessRequestSchema` | `src/models/check-document-access-request.ts` |
| `CheckDocumentAccessResponse` | `checkDocumentAccessResponseSchema` | `src/models/check-document-access-response.ts` |

### getDocumentCount

- **Signature**: `getDocumentCount(request: Troubleshooting.GetDocumentCountRequestParams, options?: RequestOptions): ApiPromise<GetDocumentCountResponse, Troubleshooting.GetDocumentCountError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /api/index/v1/getdocumentcount`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetDocumentCountResponse`
- **Error**: `GleanIndexingApiError` with `kind: "api"`, an instance of `Troubleshooting.GetDocumentCountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Troubleshooting.GetDocumentCountRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GetDocumentCountRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetDocumentCountRequest` | `getDocumentCountRequestSchema` | `src/models/get-document-count-request.ts` |
| `GetDocumentCountResponse` | `getDocumentCountResponseSchema` | `src/models/get-document-count-response.ts` |

### getDocumentUploadAndIndexingStatus

- **Signature**: `getDocumentUploadAndIndexingStatus(request: Troubleshooting.GetDocumentUploadAndIndexingStatusRequest, options?: RequestOptions): ApiPromise<GetDocumentStatusResponse, Troubleshooting.GetDocumentUploadAndIndexingStatusError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /api/index/v1/getdocumentstatus`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetDocumentStatusResponse`
- **Error**: `GleanIndexingApiError` with `kind: "api"`, an instance of `Troubleshooting.GetDocumentUploadAndIndexingStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Troubleshooting.GetDocumentUploadAndIndexingStatusRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GetDocumentStatusRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetDocumentStatusRequest` | `getDocumentStatusRequestSchema` | `src/models/get-document-status-request.ts` |
| `GetDocumentStatusResponse` | `getDocumentStatusResponseSchema` | `src/models/get-document-status-response.ts` |

### getUserCount

- **Signature**: `getUserCount(request: Troubleshooting.GetUserCountRequestParams, options?: RequestOptions): ApiPromise<GetUserCountResponse, Troubleshooting.GetUserCountError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /api/index/v1/getusercount`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetUserCountResponse`
- **Error**: `GleanIndexingApiError` with `kind: "api"`, an instance of `Troubleshooting.GetUserCountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Troubleshooting.GetUserCountRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GetUserCountRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetUserCountRequest` | `getUserCountRequestSchema` | `src/models/get-user-count-request.ts` |
| `GetUserCountResponse` | `getUserCountResponseSchema` | `src/models/get-user-count-response.ts` |

