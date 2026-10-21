<!-- Generated file — do not edit; regenerated with the SDK. -->

# GroupsApi — operations

Accessor: `client.groupsApi` · Source: `src/resources/groups-api.ts` · 8 operations · Request and error types: namespace `GroupsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cribl-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createProductsGroupsByProduct

- **Signature**: `createProductsGroupsByProduct(request: GroupsApi.CreateProductsGroupsByProductRequest, options?: RequestOptions): ApiPromise<CountedConfigGroup, GroupsApi.CreateProductsGroupsByProductError>`
- **Wire**: `POST /products/{product}/groups`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedConfigGroup`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `GroupsApi.CreateProductsGroupsByProductError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [401] `Error` · `"error409"` [409] no body · `"restApiJsonError"` [429] `RestApiJsonError` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsApi.CreateProductsGroupsByProductRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `product` | `path` | `ProductsCore` | yes |
| `body` | `body` | `GroupCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProductsCore` | `productsCoreSchema` | `src/models/products-core.ts` |
| `GroupCreateRequest` | `groupCreateRequestSchema` | `src/models/group-create-request.ts` |
| `CountedConfigGroup` | `countedConfigGroupSchema` | `src/models/counted-config-group.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `RestApiJsonError` | `restApiJsonErrorSchema` | `src/models/rest-api-json-error.ts` |

### deleteProductsGroupsByProductAndId

- **Signature**: `deleteProductsGroupsByProductAndId(request: GroupsApi.DeleteProductsGroupsByProductAndIdRequest, options?: RequestOptions): ApiPromise<CountedConfigGroup, GroupsApi.DeleteProductsGroupsByProductAndIdError>`
- **Wire**: `DELETE /products/{product}/groups/{id}`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedConfigGroup`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `GroupsApi.DeleteProductsGroupsByProductAndIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsApi.DeleteProductsGroupsByProductAndIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `product` | `path` | `ProductsCore` | yes |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProductsCore` | `productsCoreSchema` | `src/models/products-core.ts` |
| `CountedConfigGroup` | `countedConfigGroupSchema` | `src/models/counted-config-group.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getProductsGroupsAclByProductAndId

- **Signature**: `getProductsGroupsAclByProductAndId(request: GroupsApi.GetProductsGroupsAclByProductAndIdRequest, options?: RequestOptions): ApiPromise<CountedUserAccessControlList, GroupsApi.GetProductsGroupsAclByProductAndIdError>`
- **Wire**: `GET /products/{product}/groups/{id}/acl`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CountedUserAccessControlList`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `GroupsApi.GetProductsGroupsAclByProductAndIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error404"` [404] no body · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsApi.GetProductsGroupsAclByProductAndIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `product` | `path` | `ProductsCore` | yes |
| `id` | `path` | `string` | yes |
| `type` | `query` | `RbacResource` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProductsCore` | `productsCoreSchema` | `src/models/products-core.ts` |
| `RbacResource` | `rbacResourceSchema` | `src/models/rbac-resource.ts` |
| `CountedUserAccessControlList` | `countedUserAccessControlListSchema` | `src/models/counted-user-access-control-list.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getProductsGroupsByProduct

- **Signature**: `getProductsGroupsByProduct(request: GroupsApi.GetProductsGroupsByProductRequest, options?: RequestOptions): ApiPromise<PaginatedConfigGroup, GroupsApi.GetProductsGroupsByProductError>`
- **Wire**: `GET /products/{product}/groups`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedConfigGroup`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `GroupsApi.GetProductsGroupsByProductError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsApi.GetProductsGroupsByProductRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `product` | `path` | `ProductsCore` | yes |
| `fields` | `query` | `string` | no |
| `limit` | `query` | `number` | no |
| `offset` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProductsCore` | `productsCoreSchema` | `src/models/products-core.ts` |
| `PaginatedConfigGroup` | `paginatedConfigGroupSchema` | `src/models/paginated-config-group.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getProductsGroupsByProductAndId

- **Signature**: `getProductsGroupsByProductAndId(request: GroupsApi.GetProductsGroupsByProductAndIdRequest, options?: RequestOptions): ApiPromise<CountedConfigGroup, GroupsApi.GetProductsGroupsByProductAndIdError>`
- **Wire**: `GET /products/{product}/groups/{id}`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CountedConfigGroup`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `GroupsApi.GetProductsGroupsByProductAndIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error404"` [404] no body · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsApi.GetProductsGroupsByProductAndIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `product` | `path` | `ProductsCore` | yes |
| `id` | `path` | `string` | yes |
| `fields` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProductsCore` | `productsCoreSchema` | `src/models/products-core.ts` |
| `CountedConfigGroup` | `countedConfigGroupSchema` | `src/models/counted-config-group.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getProductsGroupsConfigVersionByProductAndId

- **Signature**: `getProductsGroupsConfigVersionByProductAndId(request: GroupsApi.GetProductsGroupsConfigVersionByProductAndIdRequest, options?: RequestOptions): ApiPromise<CountedString, GroupsApi.GetProductsGroupsConfigVersionByProductAndIdError>`
- **Wire**: `GET /products/{product}/groups/{id}/configVersion`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CountedString`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `GroupsApi.GetProductsGroupsConfigVersionByProductAndIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsApi.GetProductsGroupsConfigVersionByProductAndIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `product` | `path` | `ProductsCore` | yes |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProductsCore` | `productsCoreSchema` | `src/models/products-core.ts` |
| `CountedString` | `countedStringSchema` | `src/models/counted-string.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateProductsGroupsByProductAndId

- **Signature**: `updateProductsGroupsByProductAndId(request: GroupsApi.UpdateProductsGroupsByProductAndIdRequest, options?: RequestOptions): ApiPromise<CountedConfigGroup, GroupsApi.UpdateProductsGroupsByProductAndIdError>`
- **Wire**: `PATCH /products/{product}/groups/{id}`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedConfigGroup`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `GroupsApi.UpdateProductsGroupsByProductAndIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsApi.UpdateProductsGroupsByProductAndIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `product` | `path` | `ProductsCore` | yes |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ConfigGroup` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProductsCore` | `productsCoreSchema` | `src/models/products-core.ts` |
| `ConfigGroup` | `configGroupSchema` | `src/models/config-group.ts` |
| `CountedConfigGroup` | `countedConfigGroupSchema` | `src/models/counted-config-group.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateProductsGroupsDeployByProductAndId

- **Signature**: `updateProductsGroupsDeployByProductAndId(request: GroupsApi.UpdateProductsGroupsDeployByProductAndIdRequest, options?: RequestOptions): ApiPromise<CountedConfigGroup, GroupsApi.UpdateProductsGroupsDeployByProductAndIdError>`
- **Wire**: `PATCH /products/{product}/groups/{id}/deploy`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedConfigGroup`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `GroupsApi.UpdateProductsGroupsDeployByProductAndIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsApi.UpdateProductsGroupsDeployByProductAndIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `product` | `path` | `ProductsCore` | yes |
| `id` | `path` | `string` | yes |
| `body` | `body` | `DeployRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProductsCore` | `productsCoreSchema` | `src/models/products-core.ts` |
| `DeployRequest` | `deployRequestSchema` | `src/models/deploy-request.ts` |
| `CountedConfigGroup` | `countedConfigGroupSchema` | `src/models/counted-config-group.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

