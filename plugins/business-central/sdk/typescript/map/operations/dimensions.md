<!-- Generated file — do not edit; regenerated with the SDK. -->

# Dimensions — operations

Accessor: `client.dimensions` · Source: `src/resources/dimensions.ts` · 1 operation · Request and error types: namespace `Dimensions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dynamics-365-business-central`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listDimensions

- **Signature**: `listDimensions(request: Dimensions.ListDimensionsRequest, options?: RequestOptions): ApiPromise<CompaniesApiDimensionsResponse, Dimensions.ListDimensionsError>`
- **Wire**: `GET /companies({company_id})/dimensions`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompaniesApiDimensionsResponse`
- **Error**: `Dynamics365BusinessCentralError` with `kind: "api"`, an instance of `Dimensions.ListDimensionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Dimensions.ListDimensionsRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `top` | `query` | `$top` | `number` | no |
| `skip` | `query` | `$skip` | `number` | no |
| `filter` | `query` | `$filter` | `string` | no |
| `select` | `query` | `$select` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesApiDimensionsResponse` | `companiesApiDimensionsResponseSchema` | `src/models/companies-api-dimensions-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

