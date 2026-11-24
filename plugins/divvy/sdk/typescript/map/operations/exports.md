<!-- Generated file — do not edit; regenerated with the SDK. -->

# Exports — operations

Accessor: `client.exports` · Source: `src/resources/exports.ts` · 2 operations · Request and error types: namespace `Exports`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `divvy`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getDownloadLink

- **Signature**: `getDownloadLink(request: Exports.GetDownloadLinkRequest, options?: RequestOptions): ApiPromise<ExportDownloadLinkResponseDto, Exports.GetDownloadLinkError>`
- **Wire**: `GET /v3/exports/{exportId}/download-link`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ExportDownloadLinkResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Exports.GetDownloadLinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Exports.GetDownloadLinkRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `exportId` | `path` | `number` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExportDownloadLinkResponseDto` | `exportDownloadLinkResponseDtoSchema` | `src/models/export-download-link-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listExports

- **Signature**: `listExports(request?: Exports.ListExportsRequest, options?: RequestOptions): ApiPromise<ListResponseDtoExportResponseDto, Exports.ListExportsError>`
- **Wire**: `GET /v3/exports`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseDtoExportResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Exports.ListExportsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Exports.ListExportsRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `max` | `query` | `number` | no |
| `filters` | `query` | `string` | no |
| `page` | `query` | `string` | no |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListResponseDtoExportResponseDto` | `listResponseDtoExportResponseDtoSchema` | `src/models/list-response-dto-export-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

