<!-- Generated file — do not edit; regenerated with the SDK. -->

# Schedules — operations

Accessor: `client.schedules` · Source: `src/resources/schedules.ts` · 1 operation · Request and error types: namespace `Schedules`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `ui-path`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listSchedules

- **Signature**: `listSchedules(request?: Schedules.ListSchedulesRequest, options?: RequestOptions): ApiPromise<ODataScheduleCollection, Schedules.ListSchedulesError>`
- **Wire**: `GET /odata/ProcessSchedules`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ODataScheduleCollection`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Schedules.ListSchedulesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Schedules.ListSchedulesRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `filter` | `query` | `$filter` | `string` | no |
| `top` | `query` | `$top` | `number` | no |
| `skip` | `query` | `$skip` | `number` | no |
| `xUipathOrganizationUnitId` | `header` | `X-UIPATH-OrganizationUnitId` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ODataScheduleCollection` | `oDataScheduleCollectionSchema` | `src/models/odata-schedule-collection.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

