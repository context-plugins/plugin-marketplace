<!-- Generated file — do not edit; regenerated with the SDK. -->

# Processes — operations

Accessor: `client.processes` · Source: `src/resources/processes.ts` · 1 operation · Request and error types: namespace `Processes`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `ui-path`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listProcesses

- **Signature**: `listProcesses(request?: Processes.ListProcessesRequest, options?: RequestOptions): ApiPromise<ODataProcessCollection, Processes.ListProcessesError>`
- **Wire**: `GET /odata/Processes`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ODataProcessCollection`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Processes.ListProcessesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Processes.ListProcessesRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `filter` | `query` | `$filter` | `string` | no |
| `orderby` | `query` | `$orderby` | `string` | no |
| `top` | `query` | `$top` | `number` | no |
| `skip` | `query` | `$skip` | `number` | no |
| `xUipathOrganizationUnitId` | `header` | `X-UIPATH-OrganizationUnitId` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ODataProcessCollection` | `oDataProcessCollectionSchema` | `src/models/odata-process-collection.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

