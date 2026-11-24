<!-- Generated file — do not edit; regenerated with the SDK. -->

# ComposerInsightsBeta — operations

Accessor: `client.composer_insights_beta` · Source: `doi_t/apis/composer_insights_beta.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.composer_insights_beta.list_composer_recipe_results

- **Route**: `GET /insights/v2/recipes/{recipeId}/results`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_composer_recipe_results(recipe_id: int, *, max_results: int | None = 50, page_token: str | None = None, sort_by: SortBy1OrStr | None = SortBy1.DETECTION_TIME, sort_order: SortOrderOrStr | None = SortOrder.DESC, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `recipe_id`
- **Params**: `recipe_id` — path `recipeId` · `max_results` — query `maxResults` · `page_token` — query `pageToken` · `sort_by` — query `sortBy` · `sort_order` — query `sortOrder` · `filter_` — query `filter`
- **Returns (parsed)**: `ComposerRecipeResultList`
- **Returns (raw)**: `ApiResult[ComposerRecipeResultList, ListComposerRecipeResultsErrorBody]`
- **Error**: `ListComposerRecipeResultsErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SortBy1OrStr` | `doi_t/models/enums/sort_by1.py` |
| `SortOrderOrStr` | `doi_t/models/enums/sort_order.py` |
| `ComposerRecipeResultList` | `doi_t/models/composer_recipe_result_list.py` |
| `ListComposerRecipeResultsErrorBody` | `doi_t/errors/list_composer_recipe_results_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

### client.composer_insights_beta.list_composer_recipes

- **Route**: `GET /insights/v2/recipes`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_composer_recipes(*, max_results: int | None = 50, page_token: str | None = None, sort_by: SortByDoiTComposerInsightsBetaApiOrStr | None = SortByDoiTComposerInsightsBetaApi.SEVERITY, sort_order: SortOrderOrStr | None = SortOrder.DESC, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_results` — query `maxResults` · `page_token` — query `pageToken` · `sort_by` — query `sortBy` · `sort_order` — query `sortOrder` · `filter_` — query `filter`
- **Returns (parsed)**: `ComposerRecipeList`
- **Returns (raw)**: `ApiResult[ComposerRecipeList, ListComposerRecipesErrorBody]`
- **Error**: `ListComposerRecipesErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SortByDoiTComposerInsightsBetaApiOrStr` | `doi_t/models/enums/sort_by_doi_t_composer_insights_beta_api.py` |
| `SortOrderOrStr` | `doi_t/models/enums/sort_order.py` |
| `ComposerRecipeList` | `doi_t/models/composer_recipe_list.py` |
| `ListComposerRecipesErrorBody` | `doi_t/errors/list_composer_recipes_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

