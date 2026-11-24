<!-- Generated file — do not edit; regenerated with the SDK. -->

# Alerts — operations

Accessor: `client.alerts` · Source: `src/resources/alerts.ts` · 1 operation · Request and error types: namespace `Alerts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `ui-path`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listAlerts

- **Signature**: `listAlerts(request?: Alerts.ListAlertsRequest, options?: RequestOptions): ApiPromise<ODataAlertCollection, Alerts.ListAlertsError>`
- **Wire**: `GET /odata/Alerts`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ODataAlertCollection`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Alerts.ListAlertsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Alerts.ListAlertsRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `filter` | `query` | `$filter` | `string` | no |
| `orderby` | `query` | `$orderby` | `string` | no |
| `top` | `query` | `$top` | `number` | no |
| `skip` | `query` | `$skip` | `number` | no |
| `xUipathOrganizationUnitId` | `header` | `X-UIPATH-OrganizationUnitId` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ODataAlertCollection` | `oDataAlertCollectionSchema` | `src/models/odata-alert-collection.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

