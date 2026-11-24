<!-- Generated file — do not edit; regenerated with the SDK. -->

# Robots — operations

Accessor: `client.robots` · Source: `src/resources/robots.ts` · 1 operation · Request and error types: namespace `Robots`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `ui-path`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listRobots

- **Signature**: `listRobots(request?: Robots.ListRobotsRequest, options?: RequestOptions): ApiPromise<ODataRobotCollection, Robots.ListRobotsError>`
- **Wire**: `GET /odata/Robots`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ODataRobotCollection`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Robots.ListRobotsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Robots.ListRobotsRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `filter` | `query` | `$filter` | `string` | no |
| `orderby` | `query` | `$orderby` | `string` | no |
| `top` | `query` | `$top` | `number` | no |
| `skip` | `query` | `$skip` | `number` | no |
| `xUipathOrganizationUnitId` | `header` | `X-UIPATH-OrganizationUnitId` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ODataRobotCollection` | `oDataRobotCollectionSchema` | `src/models/odata-robot-collection.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

