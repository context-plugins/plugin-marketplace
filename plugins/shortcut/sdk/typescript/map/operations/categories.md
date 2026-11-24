<!-- Generated file — do not edit; regenerated with the SDK. -->

# Categories — operations

Accessor: `client.categories` · Source: `src/resources/categories.ts` · 7 operations · Request and error types: namespace `Categories`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `shortcut`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createCategory

- **Signature**: `createCategory(request: Categories.CreateCategoryRequest, options?: RequestOptions): ApiPromise<Category, Categories.CreateCategoryError>`
- **Wire**: `POST /api/v3/categories`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Category`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Categories.CreateCategoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Categories.CreateCategoryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateCategory` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateCategory` | `createCategorySchema` | `src/models/create-category.ts` |
| `Category` | `categorySchema` | `src/models/category.ts` |

### deleteCategory

- **Signature**: `deleteCategory(request: Categories.DeleteCategoryRequest, options?: RequestOptions): ApiPromise<undefined, Categories.DeleteCategoryError>`
- **Wire**: `DELETE /api/v3/categories/{category-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Categories.DeleteCategoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Categories.DeleteCategoryRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `categoryPublicId` | `path` | `category-public-id` | `number` | yes |

### getCategory

- **Signature**: `getCategory(request: Categories.GetCategoryRequest, options?: RequestOptions): ApiPromise<Category, Categories.GetCategoryError>`
- **Wire**: `GET /api/v3/categories/{category-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Category`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Categories.GetCategoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Categories.GetCategoryRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `categoryPublicId` | `path` | `category-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Category` | `categorySchema` | `src/models/category.ts` |

### listCategories

- **Signature**: `listCategories(options?: RequestOptions): ApiPromise<Category[], Categories.ListCategoriesError>`
- **Wire**: `GET /api/v3/categories`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Category[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Categories.ListCategoriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `Category` | `categorySchema` | `src/models/category.ts` |

### listCategoryMilestones

- **Signature**: `listCategoryMilestones(request: Categories.ListCategoryMilestonesRequest, options?: RequestOptions): ApiPromise<Milestone[], Categories.ListCategoryMilestonesError>`
- **Wire**: `GET /api/v3/categories/{category-public-id}/milestones`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Milestone[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Categories.ListCategoryMilestonesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Categories.ListCategoryMilestonesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `categoryPublicId` | `path` | `category-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Milestone` | `milestoneSchema` | `src/models/milestone.ts` |

### listCategoryObjectives

- **Signature**: `listCategoryObjectives(request: Categories.ListCategoryObjectivesRequest, options?: RequestOptions): ApiPromise<Milestone[], Categories.ListCategoryObjectivesError>`
- **Wire**: `GET /api/v3/categories/{category-public-id}/objectives`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Milestone[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Categories.ListCategoryObjectivesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Categories.ListCategoryObjectivesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `categoryPublicId` | `path` | `category-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Milestone` | `milestoneSchema` | `src/models/milestone.ts` |

### updateCategory

- **Signature**: `updateCategory(request: Categories.UpdateCategoryRequest, options?: RequestOptions): ApiPromise<Category, Categories.UpdateCategoryError>`
- **Wire**: `PUT /api/v3/categories/{category-public-id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Category`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Categories.UpdateCategoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Categories.UpdateCategoryRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `categoryPublicId` | `path` | `category-public-id` | `number` | yes |
| `body` | `body` | — | `UpdateCategory` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateCategory` | `updateCategorySchema` | `src/models/update-category.ts` |
| `Category` | `categorySchema` | `src/models/category.ts` |

