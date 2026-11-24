<!-- Generated file — do not edit; regenerated with the SDK. -->

# ItemCategories — operations

Accessor: `client.itemCategories` · Source: `src/resources/item-categories.ts` · 1 operation · Request and error types: namespace `ItemCategories`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `microsoft-dynamics-nav`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listItemCategories

- **Signature**: `listItemCategories(request: ItemCategories.ListItemCategoriesRequest, options?: RequestOptions): ApiPromise<CompaniesApiItemCategoriesResponse, ItemCategories.ListItemCategoriesError>`
- **Wire**: `GET /companies({company_id})/itemCategories`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompaniesApiItemCategoriesResponse`
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `ItemCategories.ListItemCategoriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ItemCategories.ListItemCategoriesRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `top` | `query` | `$top` | `number` | no |
| `skip` | `query` | `$skip` | `number` | no |
| `filter` | `query` | `$filter` | `string` | no |
| `select` | `query` | `$select` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesApiItemCategoriesResponse` | `companiesApiItemCategoriesResponseSchema` | `src/models/companies-api-item-categories-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

