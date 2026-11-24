<!-- Generated file — do not edit; regenerated with the SDK. -->

# FileUploads — operations

Accessor: `client.fileUploads` · Source: `src/resources/file-uploads.ts` · 1 operation · Request and error types: namespace `FileUploads`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `contentstack`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getProjectUploadUrl

- **Signature**: `getProjectUploadUrl(options?: RequestOptions): ApiPromise<UploadUrlResponse, FileUploads.GetProjectUploadUrlError>`
- **Wire**: `GET /projects/upload-url`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UploadUrlResponse`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `FileUploads.GetProjectUploadUrlError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `UploadUrlResponse` | `uploadUrlResponseSchema` | `src/models/upload-url-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

