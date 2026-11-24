<!-- Generated file — do not edit; regenerated with the SDK. -->

# StoplightClient — ungrouped operations

Accessor: `client` (the client itself) · Source: `src/client.ts` · 5 operations · Request and error types: namespace `StoplightClient`

Operations the spec leaves untagged are methods on the client rather than on a resource, so there is no accessor property to go through. The request type still lives in a namespace merged onto the exported class, so you write `StoplightClient.GetVersionsVersionIdExportFormatRequest`.

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `stoplight`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getVersionsVersionIdExportFormat

- **Signature**: `getVersionsVersionIdExportFormat(request: StoplightClient.GetVersionsVersionIdExportFormatRequest, options?: RequestOptions): ApiPromise<unknown, StoplightClient.GetVersionsVersionIdExportFormatError>`
- **Wire**: `GET /versions/{versionId}/export/{format}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `unknown` — a bare `application/json` unknown; the success type *is* the unknown
- **Error**: `StoplightError` with `kind: "api"`, an instance of `StoplightClient.GetVersionsVersionIdExportFormatError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] `Record<string, unknown>` · `"error404"` [404] `Record<string, unknown>` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `StoplightClient.GetVersionsVersionIdExportFormatRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `versionId` | `path` | `string` | yes | — |
| `format` | `path` | `Format` | no | `Format.OasJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |

### postVersionsPublishAnon

- **Signature**: `postVersionsPublishAnon(request?: StoplightClient.PostVersionsPublishAnonRequest, options?: RequestOptions): ApiPromise<VersionsPublishAnonResponse, StoplightClient.PostVersionsPublishAnonError>`
- **Wire**: `POST /versions/publish/anon`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VersionsPublishAnonResponse`
- **Error**: `StoplightError` with `kind: "api"`, an instance of `StoplightClient.PostVersionsPublishAnonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Record<string, unknown>` · `"error401"` [401] `Record<string, unknown>` · `"error404"` [404] `Record<string, unknown>` · `"error500"` [500] `Record<string, unknown>` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `StoplightClient.PostVersionsPublishAnonRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `VersionsPublishAnonRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VersionsPublishAnonRequest` | `versionsPublishAnonRequestSchema` | `src/models/versions-publish-anon-request.ts` |
| `VersionsPublishAnonResponse` | `versionsPublishAnonResponseSchema` | `src/models/versions-publish-anon-response.ts` |

### postVersionsVersionIdPublish

- **Signature**: `postVersionsVersionIdPublish(request: StoplightClient.PostVersionsVersionIdPublishRequest, options?: RequestOptions): ApiPromise<VersionsPublishResponse, StoplightClient.PostVersionsVersionIdPublishError>`
- **Wire**: `POST /versions/{versionId}/publish`
- **Auth**: `authorization`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VersionsPublishResponse`
- **Error**: `StoplightError` with `kind: "api"`, an instance of `StoplightClient.PostVersionsVersionIdPublishError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] `Record<string, unknown>` · `"error404"` [404] `Record<string, unknown>` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `StoplightClient.PostVersionsVersionIdPublishRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `versionId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VersionsPublishResponse` | `versionsPublishResponseSchema` | `src/models/versions-publish-response.ts` |

### putVersionsVersionIdImport

- **Signature**: `putVersionsVersionIdImport(request: StoplightClient.PutVersionsVersionIdImportRequest, options?: RequestOptions): ApiPromise<VersionsImportResponse, StoplightClient.PutVersionsVersionIdImportError>`
- **Wire**: `PUT /versions/{versionId}/import`
- **Auth**: `authorization`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VersionsImportResponse`
- **Error**: `StoplightError` with `kind: "api"`, an instance of `StoplightClient.PutVersionsVersionIdImportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] `Record<string, unknown>` · `"error404"` [404] `Record<string, unknown>` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `StoplightClient.PutVersionsVersionIdImportRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `versionId` | `path` | `string` | yes |
| `body` | `body` | `VersionsImportRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VersionsImportRequest` | `versionsImportRequestSchema` | `src/models/versions-import-request.ts` |
| `VersionsImportResponse` | `versionsImportResponseSchema` | `src/models/versions-import-response.ts` |

### putVersionsVersionIdUnpublish

- **Signature**: `putVersionsVersionIdUnpublish(request: StoplightClient.PutVersionsVersionIdUnpublishRequest, options?: RequestOptions): ApiPromise<VersionsUnpublishResponse, StoplightClient.PutVersionsVersionIdUnpublishError>`
- **Wire**: `PUT /versions/{versionId}/unpublish`
- **Auth**: `authorization`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VersionsUnpublishResponse`
- **Error**: `StoplightError` with `kind: "api"`, an instance of `StoplightClient.PutVersionsVersionIdUnpublishError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] `Record<string, unknown>` · `"error404"` [404] `Record<string, unknown>` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `StoplightClient.PutVersionsVersionIdUnpublishRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `versionId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VersionsUnpublishResponse` | `versionsUnpublishResponseSchema` | `src/models/versions-unpublish-response.ts` |

