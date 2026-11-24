<!-- Generated file — do not edit; regenerated with the SDK. -->

# Extensions — operations

Accessor: `client.extensions` · Source: `src/resources/extensions.ts` · 4 operations · Request and error types: namespace `Extensions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `browser-use`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteExtensionExtensionsExtensionIdDelete

- **Signature**: `deleteExtensionExtensionsExtensionIdDelete(request: Extensions.DeleteExtensionExtensionsExtensionIdDeleteRequest, options?: RequestOptions): ApiPromise<undefined, Extensions.DeleteExtensionExtensionsExtensionIdDeleteError>`
- **Wire**: `DELETE /extensions/{extension_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Extensions.DeleteExtensionExtensionsExtensionIdDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error503"` [503] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Extensions.DeleteExtensionExtensionsExtensionIdDeleteRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `extensionId` | `path` | `extension_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getExtensionExtensionsExtensionIdGet

- **Signature**: `getExtensionExtensionsExtensionIdGet(request: Extensions.GetExtensionExtensionsExtensionIdGetRequest, options?: RequestOptions): ApiPromise<ExtensionView, Extensions.GetExtensionExtensionsExtensionIdGetError>`
- **Wire**: `GET /extensions/{extension_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ExtensionView`
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Extensions.GetExtensionExtensionsExtensionIdGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Extensions.GetExtensionExtensionsExtensionIdGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `extensionId` | `path` | `extension_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExtensionView` | `extensionViewSchema` | `src/models/extension-view.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listExtensionsExtensionsGet

- **Signature**: `listExtensionsExtensionsGet(request?: Extensions.ListExtensionsExtensionsGetRequest, options?: RequestOptions): ApiPromise<ExtensionListResponse, Extensions.ListExtensionsExtensionsGetError>`
- **Wire**: `GET /extensions`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ExtensionListResponse`
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Extensions.ListExtensionsExtensionsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Extensions.ListExtensionsExtensionsGetRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `pageSize` | `query` | `number` | no | `10` |
| `pageNumber` | `query` | `number` | no | `1` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExtensionListResponse` | `extensionListResponseSchema` | `src/models/extension-list-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### uploadExtensionExtensionsPost

- **Signature**: `uploadExtensionExtensionsPost(request: Extensions.UploadExtensionExtensionsPostRequest, options?: RequestOptions): ApiPromise<ExtensionView, Extensions.UploadExtensionExtensionsPostError>`
- **Wire**: `POST /extensions`
- **Auth**: `apiKeyHeader`
- **Request body**: `multipart/form-data` — every field marked `form`. `file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ExtensionView`
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Extensions.UploadExtensionExtensionsPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error413"` [413] no body · `"error422"` [422] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Extensions.UploadExtensionExtensionsPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `file` | `form` | `FileInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExtensionView` | `extensionViewSchema` | `src/models/extension-view.ts` |

