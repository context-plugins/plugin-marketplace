<!-- Generated file — do not edit; regenerated with the SDK. -->

# ComposerInsightsBeta — operations

Accessor: `client.composerInsightsBeta` · Source: `src/resources/composer-insights-beta.ts` · 2 operations · Request and error types: namespace `ComposerInsightsBeta`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listComposerRecipeResults

- **Signature**: `listComposerRecipeResults(request: ComposerInsightsBeta.ListComposerRecipeResultsRequest, options?: RequestOptions): ApiPromise<ComposerRecipeResultList, ComposerInsightsBeta.ListComposerRecipeResultsError>`
- **Wire**: `GET /insights/v2/recipes/{recipeId}/results`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ComposerRecipeResultList`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `ComposerInsightsBeta.ListComposerRecipeResultsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"problemDetails5"` [500] `ProblemDetails` · `"problemDetails6"` [503] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ComposerInsightsBeta.ListComposerRecipeResultsRequest` (6):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `recipeId` | `path` | `number` | yes | — |
| `maxResults` | `query` | `number` | no | `50` |
| `pageToken` | `query` | `string` | no | — |
| `sortBy` | `query` | `SortBy1` | no | `SortBy1.DetectionTime` |
| `sortOrder` | `query` | `SortOrder` | no | `SortOrder.Desc` |
| `filter` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortBy1` | `sortBy1Schema` | `src/models/sort-by1.ts` |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `ComposerRecipeResultList` | `composerRecipeResultListSchema` | `src/models/composer-recipe-result-list.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### listComposerRecipes

- **Signature**: `listComposerRecipes(request?: ComposerInsightsBeta.ListComposerRecipesRequest, options?: RequestOptions): ApiPromise<ComposerRecipeList, ComposerInsightsBeta.ListComposerRecipesError>`
- **Wire**: `GET /insights/v2/recipes`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ComposerRecipeList`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `ComposerInsightsBeta.ListComposerRecipesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"problemDetails5"` [500] `ProblemDetails` · `"problemDetails6"` [503] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ComposerInsightsBeta.ListComposerRecipesRequest` (5):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `maxResults` | `query` | `number` | no | `50` |
| `pageToken` | `query` | `string` | no | — |
| `sortBy` | `query` | `SortByDoiTComposerInsightsBetaApi` | no | `SortByDoiTComposerInsightsBetaApi.Severity` |
| `sortOrder` | `query` | `SortOrder` | no | `SortOrder.Desc` |
| `filter` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortByDoiTComposerInsightsBetaApi` | `sortByDoiTComposerInsightsBetaApiSchema` | `src/models/sort-by-doi-tcomposer-insights-beta-api.ts` |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `ComposerRecipeList` | `composerRecipeListSchema` | `src/models/composer-recipe-list.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

