<!-- Generated file — do not edit; regenerated with the SDK. -->

# Teams — operations

Accessor: `client.teams` · Source: `src/resources/teams.ts` · 1 operation · Request and error types: namespace `Teams`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cribl-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getProductsGroupsAclTeamsByProductAndId

- **Signature**: `getProductsGroupsAclTeamsByProductAndId(request: Teams.GetProductsGroupsAclTeamsByProductAndIdRequest, options?: RequestOptions): ApiPromise<CountedTeamAccessControlList, Teams.GetProductsGroupsAclTeamsByProductAndIdError>`
- **Wire**: `GET /products/{product}/groups/{id}/acl/teams`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CountedTeamAccessControlList`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Teams.GetProductsGroupsAclTeamsByProductAndIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Teams.GetProductsGroupsAclTeamsByProductAndIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `product` | `path` | `ProductsCore` | yes |
| `id` | `path` | `string` | yes |
| `type` | `query` | `RbacResource` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProductsCore` | `productsCoreSchema` | `src/models/products-core.ts` |
| `RbacResource` | `rbacResourceSchema` | `src/models/rbac-resource.ts` |
| `CountedTeamAccessControlList` | `countedTeamAccessControlListSchema` | `src/models/counted-team-access-control-list.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

