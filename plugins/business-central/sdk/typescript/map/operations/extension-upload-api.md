<!-- Generated file — do not edit; regenerated with the SDK. -->

# ExtensionUploadApi — operations

Accessor: `client.extensionUploadApi` · Source: `src/resources/extension-upload-api.ts` · 3 operations · Request and error types: namespace `ExtensionUploadApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dynamics-365-business-central`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createExtensionUpload

- **Server**: `defaultBusinessCentralAutomationApiV20CompaniesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createExtensionUpload(request: ExtensionUploadApi.CreateExtensionUploadRequest, options?: RequestOptions): ApiPromise<ExtensionUpload, ExtensionUploadApi.CreateExtensionUploadError>`
- **Wire**: `POST /companies({company_id})/extensionUpload`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ExtensionUpload`
- **Error**: `Dynamics365BusinessCentralError` with `kind: "api"`, an instance of `ExtensionUploadApi.CreateExtensionUploadError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ExtensionUploadApi.CreateExtensionUploadRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `body` | `body` | — | `ExtensionUploadCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExtensionUploadCreate` | `extensionUploadCreateSchema` | `src/models/extension-upload-create.ts` |
| `ExtensionUpload` | `extensionUploadSchema` | `src/models/extension-upload.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### installUploadedExtension

- **Server**: `defaultBusinessCentralAutomationApiV20CompaniesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `installUploadedExtension(request: ExtensionUploadApi.InstallUploadedExtensionRequest, options?: RequestOptions): ApiPromise<undefined, ExtensionUploadApi.InstallUploadedExtensionError>`
- **Wire**: `POST /companies({company_id})/extensionUpload({extensionUpload_id})/Microsoft.NAV.upload`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `Dynamics365BusinessCentralError` with `kind: "api"`, an instance of `ExtensionUploadApi.InstallUploadedExtensionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ExtensionUploadApi.InstallUploadedExtensionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `extensionUploadId` | `path` | `extensionUpload_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### uploadExtensionFile

- **Server**: `defaultBusinessCentralAutomationApiV20CompaniesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `uploadExtensionFile(request: ExtensionUploadApi.UploadExtensionFileRequest, options?: RequestOptions): ApiPromise<undefined, ExtensionUploadApi.UploadExtensionFileError>`
- **Wire**: `PATCH /companies({company_id})/extensionUpload({extensionUpload_id})/extensionContent`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/octet-stream` — the `body` field, sent as raw bytes with no schema over them. That media type is what the SDK declares; a value carrying its own wins outright
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `Dynamics365BusinessCentralError` with `kind: "api"`, an instance of `ExtensionUploadApi.UploadExtensionFileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ExtensionUploadApi.UploadExtensionFileRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `extensionUploadId` | `path` | `extensionUpload_id` | `string` | yes |
| `ifMatch` | `header` | `If-Match` | `string` | yes |
| `body` | `body` | — | `FileInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

