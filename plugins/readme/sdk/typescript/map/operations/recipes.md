<!-- Generated file — do not edit; regenerated with the SDK. -->

# Recipes — operations

Accessor: `client.recipes` · Source: `src/resources/recipes.ts` · 5 operations · Request types: namespace `Recipes`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `read-me`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteRecipesBySlug

- **Server**: `defaultReadMeApiKeysApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteRecipesBySlug(request: Recipes.DeleteRecipesBySlugRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /recipes/{slug}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ReadMeError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Recipes.DeleteRecipesBySlugRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `slug` | `path` | `string` | yes |

### getRecipes

- **Server**: `defaultReadMeApiKeysApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getRecipes(options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /recipes`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ReadMeError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### getRecipesBySlug

- **Server**: `defaultReadMeApiKeysApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getRecipesBySlug(request: Recipes.GetRecipesBySlugRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /recipes/{slug}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ReadMeError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Recipes.GetRecipesBySlugRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `slug` | `path` | `string` | yes |

### postRecipes

- **Server**: `defaultReadMeApiKeysApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postRecipes(options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `POST /recipes`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ReadMeError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### putRecipesBySlug

- **Server**: `defaultReadMeApiKeysApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `putRecipesBySlug(request: Recipes.PutRecipesBySlugRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `PUT /recipes/{slug}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ReadMeError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Recipes.PutRecipesBySlugRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `slug` | `path` | `string` | yes |

