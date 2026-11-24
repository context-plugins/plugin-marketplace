<!-- Generated file — do not edit; regenerated with the SDK. -->

# Wikipedia — operations

Accessor: `client.wikipedia` · Source: `perigon/apis/wikipedia.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.wikipedia.search_wikipedia

- **Route**: `GET /v1/wikipedia/all`
- **Auth**: `api_key_auth`
- **Signature**: `def search_wikipedia(*, q: str | None = None, title: str | None = None, summary: str | None = None, text: str | None = None, reference: str | None = None, id_: list[str] | None = None, wiki_page_id: list[int] | None = None, wiki_revision_id: list[int] | None = None, wiki_code: list[str] | None = None, wiki_namespace: list[int] | None = None, wikidata_id: list[str] | None = None, wikidata_instance_of_id: list[str] | None = None, wikidata_instance_of_label: list[str] | None = None, category: list[str] | None = None, section_id: list[str] | None = None, wiki_revision_from: RFC3339DateTime | None = None, wiki_revision_to: RFC3339DateTime | None = None, scraped_at_from: RFC3339DateTime | None = None, scraped_at_to: RFC3339DateTime | None = None, pageviews_from: int | None = None, pageviews_to: int | None = None, with_pageviews: bool | None = None, show_num_results: bool | None = None, page: int | None = None, size: int | None = None, sort_by: SortByPerigonWikipediaApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `q` — query · `title` — query · `summary` — query · `text` — query · `reference` — query · `id_` — query `id` · `wiki_page_id` — query `wikiPageId` · `wiki_revision_id` — query `wikiRevisionId` · `wiki_code` — query `wikiCode` · `wiki_namespace` — query `wikiNamespace` · `wikidata_id` — query `wikidataId` · `wikidata_instance_of_id` — query `wikidataInstanceOfId` · `wikidata_instance_of_label` — query `wikidataInstanceOfLabel` · `category` — query · `section_id` — query `sectionId` · `wiki_revision_from` — query `wikiRevisionFrom` · `wiki_revision_to` — query `wikiRevisionTo` · `scraped_at_from` — query `scrapedAtFrom` · `scraped_at_to` — query `scrapedAtTo` · `pageviews_from` — query `pageviewsFrom` · `pageviews_to` — query `pageviewsTo` · `with_pageviews` — query `withPageviews` · `show_num_results` — query `showNumResults` · `page` — query · `size` — query · `sort_by` — query `sortBy`
- **Returns (parsed)**: `WikipediaSearchResult`
- **Returns (raw)**: `ApiResult[WikipediaSearchResult, SearchWikipediaErrorBody]`
- **Error**: `SearchWikipediaErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SortByPerigonWikipediaApiOrStr` | `perigon/models/enums/sort_by_perigon_wikipedia_api.py` |
| `WikipediaSearchResult` | `perigon/models/wikipedia_search_result.py` |
| `SearchWikipediaErrorBody` | `perigon/errors/search_wikipedia_error.py` |
| `ErrorResponse` | `perigon/models/error_response.py` |

### client.wikipedia.vector_search_wikipedia

- **Route**: `POST /v1/vector/wikipedia/all`
- **Auth**: `api_key_auth`
- **Signature**: `def vector_search_wikipedia(body: WikipediaSearchParams | WikipediaSearchParamsDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `WikipediaVectorSearchResult`
- **Returns (raw)**: `ApiResult[WikipediaVectorSearchResult, VectorSearchWikipediaErrorBody]`
- **Error**: `VectorSearchWikipediaErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WikipediaSearchParams` | `perigon/models/wikipedia_search_params.py` |
| `WikipediaSearchParamsDict` | `perigon/models/wikipedia_search_params.py` |
| `WikipediaVectorSearchResult` | `perigon/models/wikipedia_vector_search_result.py` |
| `VectorSearchWikipediaErrorBody` | `perigon/errors/vector_search_wikipedia_error.py` |
| `ErrorResponse` | `perigon/models/error_response.py` |

