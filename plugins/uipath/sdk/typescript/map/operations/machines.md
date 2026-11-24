<!-- Generated file — do not edit; regenerated with the SDK. -->

# Machines — operations

Accessor: `client.machines` · Source: `src/resources/machines.ts` · 1 operation · Request and error types: namespace `Machines`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `ui-path`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listMachines

- **Signature**: `listMachines(request?: Machines.ListMachinesRequest, options?: RequestOptions): ApiPromise<ODataMachineCollection, Machines.ListMachinesError>`
- **Wire**: `GET /odata/Machines`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ODataMachineCollection`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Machines.ListMachinesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Machines.ListMachinesRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `filter` | `query` | `$filter` | `string` | no |
| `top` | `query` | `$top` | `number` | no |
| `skip` | `query` | `$skip` | `number` | no |
| `xUipathOrganizationUnitId` | `header` | `X-UIPATH-OrganizationUnitId` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ODataMachineCollection` | `oDataMachineCollectionSchema` | `src/models/odata-machine-collection.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

