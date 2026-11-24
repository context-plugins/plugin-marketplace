<!-- Generated file — do not edit; regenerated with the SDK. -->

# OrganizationExports — operations

Accessor: `client.organizationExports` · Source: `src/resources/organization-exports.ts` · 2 operations · Request and error types: namespace `OrganizationExports`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `asana`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createOrganizationExport

- **Signature**: `createOrganizationExport(request: OrganizationExports.CreateOrganizationExportRequest, options?: RequestOptions): ApiPromise<OrganizationExportsResponse, OrganizationExports.CreateOrganizationExportError>`
- **Wire**: `POST /organization_exports`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OrganizationExportsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `OrganizationExports.CreateOrganizationExportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OrganizationExports.CreateOrganizationExportRequest` (5):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |
| `body` | `body` | — | `OrganizationExportsRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrganizationExportsRequest` | `organizationExportsRequestSchema` | `src/models/organization-exports-request.ts` |
| `OrganizationExportsResponse` | `organizationExportsResponseSchema` | `src/models/organization-exports-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getOrganizationExport

- **Signature**: `getOrganizationExport(request: OrganizationExports.GetOrganizationExportRequest, options?: RequestOptions): ApiPromise<OrganizationExportsResponse, OrganizationExports.GetOrganizationExportError>`
- **Wire**: `GET /organization_exports/{organization_export_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OrganizationExportsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `OrganizationExports.GetOrganizationExportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OrganizationExports.GetOrganizationExportRequest` (3):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `organizationExportGid` | `path` | `organization_export_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrganizationExportsResponse` | `organizationExportsResponseSchema` | `src/models/organization-exports-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

