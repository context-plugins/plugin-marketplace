<!-- Generated file — do not edit; regenerated with the SDK. -->

# Categories — operations

Accessor: `client.categories` · Source: `src/resources/categories.ts` · 1 operation · Request and error types: namespace `Categories`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `nordic-financial-news`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiV1Categories

- **Signature**: `getApiV1Categories(request?: Categories.GetApiV1CategoriesRequest, options?: RequestOptions): ApiPromise<ApiV1CategoriesResponse, Categories.GetApiV1CategoriesError>`
- **Wire**: `GET /api/v1/categories`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1CategoriesResponse`
- **Error**: `NordicFinancialNewsError` with `kind: "api"`, an instance of `Categories.GetApiV1CategoriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error304"` [304] no body · `"problemDetails"` [401] `ProblemDetails` · `"problemDetails2"` [403] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Categories.GetApiV1CategoriesRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |
| `fields` | `query` | — | `string` | no |
| `ifNoneMatch` | `header` | `If-None-Match` | `string` | no |
| `ifModifiedSince` | `header` | `If-Modified-Since` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1CategoriesResponse` | `apiV1CategoriesResponseSchema` | `src/models/api-v1-categories-response.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

