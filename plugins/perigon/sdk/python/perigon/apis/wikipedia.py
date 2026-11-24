from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    RFC3339DateTime,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.search_wikipedia_error import SearchWikipediaErrorBody, search_wikipedia_error_mapper
from ..errors.vector_search_wikipedia_error import VectorSearchWikipediaErrorBody, vector_search_wikipedia_error_mapper
from ..models.enums.sort_by_perigon_wikipedia_api import SortByPerigonWikipediaApiOrStr
from ..models.wikipedia_search_params import WikipediaSearchParams, WikipediaSearchParamsDict
from ..models.wikipedia_search_result import WikipediaSearchResult
from ..models.wikipedia_vector_search_result import WikipediaVectorSearchResult
from ..server.server import Server


class Wikipedia:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = WikipediaWithRawResponse(client, server, auth)

    def search_wikipedia(
        self,
        *,
        q: str | None = None,
        title: str | None = None,
        summary: str | None = None,
        text: str | None = None,
        reference: str | None = None,
        id_: list[str] | None = None,
        wiki_page_id: list[int] | None = None,
        wiki_revision_id: list[int] | None = None,
        wiki_code: list[str] | None = None,
        wiki_namespace: list[int] | None = None,
        wikidata_id: list[str] | None = None,
        wikidata_instance_of_id: list[str] | None = None,
        wikidata_instance_of_label: list[str] | None = None,
        category: list[str] | None = None,
        section_id: list[str] | None = None,
        wiki_revision_from: RFC3339DateTime | None = None,
        wiki_revision_to: RFC3339DateTime | None = None,
        scraped_at_from: RFC3339DateTime | None = None,
        scraped_at_to: RFC3339DateTime | None = None,
        pageviews_from: int | None = None,
        pageviews_to: int | None = None,
        with_pageviews: bool | None = None,
        show_num_results: bool | None = None,
        page: int | None = None,
        size: int | None = None,
        sort_by: SortByPerigonWikipediaApiOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> WikipediaSearchResult:
        """Search and filter all Wikipedia pages available via the Perigon API. The result includes a list of individual
        pages that were matched to your specific criteria.

        Args:
            q: String. Primary search query for filtering pages based on their title, summary, and content. Supports
                Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible
                searching.
            title: String. Search specifically within page titles. Supports Boolean operators, exact phrases with
                quotes, and wildcards for matching title variations.
            summary: String. Search specifically within page summary. Supports Boolean operators, exact phrases with
                quotes, and wildcards for matching title variations.
            text: String. Search specifically within the page's content (across all sections). Supports Boolean
                operators, exact phrases with quotes, and wildcards for matching title variations.
            reference: String. Search specifically across page's references. Supports Boolean operators, exact phrases
                with quotes, and wildcards for matching title variations.
            id_: String Array. Retrieve specific pages by their unique Perigon identifiers. Multiple IDs can be provided
                to return a collection of specific pages.
            wiki_page_id: Integer Array. Retrieve specific pages by their Wikipedia identifiers. These are unique only
                in a combination with ``wikiCode`` parameter. Multiple IDs can be provided to return a collection of
                specific pages.
            wiki_revision_id: Integer Array. Retrieve specific pages by their Wikipedia revision identifiers. These are
                unique only in a combination with ``wikiCode`` parameter. Multiple IDs can be provided to return a
                collection of specific pages. This ID changes each time a page is edited.
            wiki_code: String Array. Retrieve pages only from specified wiki projects. Currently, the only accepted
                value is ``enwiki``.
            wiki_namespace: Integer Array. Retrieve pages only from specified wiki namespace. Currently, only the main
                namespace (0) is available.
            wikidata_id: String Array. Retrieve pages by the ids corresponding to their Wikidata entities.
            wikidata_instance_of_id: String Array. Retrieve all pages whose Wikidata entities are instances of these
                provided ids.
            wikidata_instance_of_label: String Array. Retrieve all pages whose Wikidata entities are instances of these
                ids (provided as labels).
            category: String Array. Retrieve all pages for specified categories.
            section_id: String Array. Retrieve pages containing provided section ids. Each section ID is unique.
            wiki_revision_from: Date. Retrieve pages modified after this date. Accepts ISO 8601 format (e.g.,
                2023-03-01T00:00:00) or yyyy-mm-dd format.
            wiki_revision_to: Date. Retrieve pages modified before this date. Accepts ISO 8601 format (e.g.,
                2023-03-01T00:00:00) or yyyy-mm-dd format.
            scraped_at_from: Date. Retrieve pages scraped after this date. Accepts ISO 8601 format (e.g.,
                2023-03-01T00:00:00) or yyyy-mm-dd format.
            scraped_at_to: Date. Retrieve pages scraped before this date. Accepts ISO 8601 format (e.g.,
                2023-03-01T00:00:00) or yyyy-mm-dd format.
            pageviews_from: Integer. Retrieve pages with the average number of views per day higher than the provided
                value.
            pageviews_to: Integer. Retrieve pages with the average number of views per day lower than the provided
                value.
            with_pageviews: Boolean. Retrieve pages that have any viewership statistics available for them. If ``false``
                (the default) - return all pages.
            show_num_results: Boolean. Whether to show the total number of all matched pages. Default value is false
                which makes queries a bit more efficient but also counts up to 10000 pages.
            page: Integer. The specific page of results to retrieve in the paginated response. Starts at 0.
            size: Integer. The number of articles to return per page in the paginated response.
            sort_by: String. Determines the Wikipedia page sorting order. Options include relevance (default),
                revisionTsDesc (recently edited first), revisionTsAsc (recently edited last), pageViewsDesc (highest
                viewership first), pageViewsAsc (highest viewership last), scrapedAtDesc (recently scraped first),
                scrapedAtAsc (recently scraped last).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.search_wikipedia(
                q=q,
                title=title,
                summary=summary,
                text=text,
                reference=reference,
                id_=id_,
                wiki_page_id=wiki_page_id,
                wiki_revision_id=wiki_revision_id,
                wiki_code=wiki_code,
                wiki_namespace=wiki_namespace,
                wikidata_id=wikidata_id,
                wikidata_instance_of_id=wikidata_instance_of_id,
                wikidata_instance_of_label=wikidata_instance_of_label,
                category=category,
                section_id=section_id,
                wiki_revision_from=wiki_revision_from,
                wiki_revision_to=wiki_revision_to,
                scraped_at_from=scraped_at_from,
                scraped_at_to=scraped_at_to,
                pageviews_from=pageviews_from,
                pageviews_to=pageviews_to,
                with_pageviews=with_pageviews,
                show_num_results=show_num_results,
                page=page,
                size=size,
                sort_by=sort_by,
                request_options=request_options,
            ),
        )

    def vector_search_wikipedia(
        self,
        body: WikipediaSearchParams | WikipediaSearchParamsDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> WikipediaVectorSearchResult:
        """Perform a natural language search over Wikipedia pages using semantic relevance. The result includes a list
        of page sections most closely matched to your query intent.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.vector_search_wikipedia(body, request_options=request_options))

    @property
    def with_raw_response(self) -> WikipediaWithRawResponse:
        return self._with_raw_response


class AsyncWikipedia:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncWikipediaWithRawResponse(client, server, auth)

    async def search_wikipedia(
        self,
        *,
        q: str | None = None,
        title: str | None = None,
        summary: str | None = None,
        text: str | None = None,
        reference: str | None = None,
        id_: list[str] | None = None,
        wiki_page_id: list[int] | None = None,
        wiki_revision_id: list[int] | None = None,
        wiki_code: list[str] | None = None,
        wiki_namespace: list[int] | None = None,
        wikidata_id: list[str] | None = None,
        wikidata_instance_of_id: list[str] | None = None,
        wikidata_instance_of_label: list[str] | None = None,
        category: list[str] | None = None,
        section_id: list[str] | None = None,
        wiki_revision_from: RFC3339DateTime | None = None,
        wiki_revision_to: RFC3339DateTime | None = None,
        scraped_at_from: RFC3339DateTime | None = None,
        scraped_at_to: RFC3339DateTime | None = None,
        pageviews_from: int | None = None,
        pageviews_to: int | None = None,
        with_pageviews: bool | None = None,
        show_num_results: bool | None = None,
        page: int | None = None,
        size: int | None = None,
        sort_by: SortByPerigonWikipediaApiOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> WikipediaSearchResult:
        """Search and filter all Wikipedia pages available via the Perigon API. The result includes a list of individual
        pages that were matched to your specific criteria.

        Args:
            q: String. Primary search query for filtering pages based on their title, summary, and content. Supports
                Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible
                searching.
            title: String. Search specifically within page titles. Supports Boolean operators, exact phrases with
                quotes, and wildcards for matching title variations.
            summary: String. Search specifically within page summary. Supports Boolean operators, exact phrases with
                quotes, and wildcards for matching title variations.
            text: String. Search specifically within the page's content (across all sections). Supports Boolean
                operators, exact phrases with quotes, and wildcards for matching title variations.
            reference: String. Search specifically across page's references. Supports Boolean operators, exact phrases
                with quotes, and wildcards for matching title variations.
            id_: String Array. Retrieve specific pages by their unique Perigon identifiers. Multiple IDs can be provided
                to return a collection of specific pages.
            wiki_page_id: Integer Array. Retrieve specific pages by their Wikipedia identifiers. These are unique only
                in a combination with ``wikiCode`` parameter. Multiple IDs can be provided to return a collection of
                specific pages.
            wiki_revision_id: Integer Array. Retrieve specific pages by their Wikipedia revision identifiers. These are
                unique only in a combination with ``wikiCode`` parameter. Multiple IDs can be provided to return a
                collection of specific pages. This ID changes each time a page is edited.
            wiki_code: String Array. Retrieve pages only from specified wiki projects. Currently, the only accepted
                value is ``enwiki``.
            wiki_namespace: Integer Array. Retrieve pages only from specified wiki namespace. Currently, only the main
                namespace (0) is available.
            wikidata_id: String Array. Retrieve pages by the ids corresponding to their Wikidata entities.
            wikidata_instance_of_id: String Array. Retrieve all pages whose Wikidata entities are instances of these
                provided ids.
            wikidata_instance_of_label: String Array. Retrieve all pages whose Wikidata entities are instances of these
                ids (provided as labels).
            category: String Array. Retrieve all pages for specified categories.
            section_id: String Array. Retrieve pages containing provided section ids. Each section ID is unique.
            wiki_revision_from: Date. Retrieve pages modified after this date. Accepts ISO 8601 format (e.g.,
                2023-03-01T00:00:00) or yyyy-mm-dd format.
            wiki_revision_to: Date. Retrieve pages modified before this date. Accepts ISO 8601 format (e.g.,
                2023-03-01T00:00:00) or yyyy-mm-dd format.
            scraped_at_from: Date. Retrieve pages scraped after this date. Accepts ISO 8601 format (e.g.,
                2023-03-01T00:00:00) or yyyy-mm-dd format.
            scraped_at_to: Date. Retrieve pages scraped before this date. Accepts ISO 8601 format (e.g.,
                2023-03-01T00:00:00) or yyyy-mm-dd format.
            pageviews_from: Integer. Retrieve pages with the average number of views per day higher than the provided
                value.
            pageviews_to: Integer. Retrieve pages with the average number of views per day lower than the provided
                value.
            with_pageviews: Boolean. Retrieve pages that have any viewership statistics available for them. If ``false``
                (the default) - return all pages.
            show_num_results: Boolean. Whether to show the total number of all matched pages. Default value is false
                which makes queries a bit more efficient but also counts up to 10000 pages.
            page: Integer. The specific page of results to retrieve in the paginated response. Starts at 0.
            size: Integer. The number of articles to return per page in the paginated response.
            sort_by: String. Determines the Wikipedia page sorting order. Options include relevance (default),
                revisionTsDesc (recently edited first), revisionTsAsc (recently edited last), pageViewsDesc (highest
                viewership first), pageViewsAsc (highest viewership last), scrapedAtDesc (recently scraped first),
                scrapedAtAsc (recently scraped last).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.search_wikipedia(
                q=q,
                title=title,
                summary=summary,
                text=text,
                reference=reference,
                id_=id_,
                wiki_page_id=wiki_page_id,
                wiki_revision_id=wiki_revision_id,
                wiki_code=wiki_code,
                wiki_namespace=wiki_namespace,
                wikidata_id=wikidata_id,
                wikidata_instance_of_id=wikidata_instance_of_id,
                wikidata_instance_of_label=wikidata_instance_of_label,
                category=category,
                section_id=section_id,
                wiki_revision_from=wiki_revision_from,
                wiki_revision_to=wiki_revision_to,
                scraped_at_from=scraped_at_from,
                scraped_at_to=scraped_at_to,
                pageviews_from=pageviews_from,
                pageviews_to=pageviews_to,
                with_pageviews=with_pageviews,
                show_num_results=show_num_results,
                page=page,
                size=size,
                sort_by=sort_by,
                request_options=request_options,
            ),
        )

    async def vector_search_wikipedia(
        self,
        body: WikipediaSearchParams | WikipediaSearchParamsDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> WikipediaVectorSearchResult:
        """Perform a natural language search over Wikipedia pages using semantic relevance. The result includes a list
        of page sections most closely matched to your query intent.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.vector_search_wikipedia(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncWikipediaWithRawResponse:
        return self._with_raw_response


class WikipediaWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def search_wikipedia(
        self,
        *,
        q: str | None = None,
        title: str | None = None,
        summary: str | None = None,
        text: str | None = None,
        reference: str | None = None,
        id_: list[str] | None = None,
        wiki_page_id: list[int] | None = None,
        wiki_revision_id: list[int] | None = None,
        wiki_code: list[str] | None = None,
        wiki_namespace: list[int] | None = None,
        wikidata_id: list[str] | None = None,
        wikidata_instance_of_id: list[str] | None = None,
        wikidata_instance_of_label: list[str] | None = None,
        category: list[str] | None = None,
        section_id: list[str] | None = None,
        wiki_revision_from: RFC3339DateTime | None = None,
        wiki_revision_to: RFC3339DateTime | None = None,
        scraped_at_from: RFC3339DateTime | None = None,
        scraped_at_to: RFC3339DateTime | None = None,
        pageviews_from: int | None = None,
        pageviews_to: int | None = None,
        with_pageviews: bool | None = None,
        show_num_results: bool | None = None,
        page: int | None = None,
        size: int | None = None,
        sort_by: SortByPerigonWikipediaApiOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[WikipediaSearchResult, SearchWikipediaErrorBody]:
        """Search and filter all Wikipedia pages available via the Perigon API. The result includes a list of individual
        pages that were matched to your specific criteria.

        Args:
            q: String. Primary search query for filtering pages based on their title, summary, and content. Supports
                Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible
                searching.
            title: String. Search specifically within page titles. Supports Boolean operators, exact phrases with
                quotes, and wildcards for matching title variations.
            summary: String. Search specifically within page summary. Supports Boolean operators, exact phrases with
                quotes, and wildcards for matching title variations.
            text: String. Search specifically within the page's content (across all sections). Supports Boolean
                operators, exact phrases with quotes, and wildcards for matching title variations.
            reference: String. Search specifically across page's references. Supports Boolean operators, exact phrases
                with quotes, and wildcards for matching title variations.
            id_: String Array. Retrieve specific pages by their unique Perigon identifiers. Multiple IDs can be provided
                to return a collection of specific pages.
            wiki_page_id: Integer Array. Retrieve specific pages by their Wikipedia identifiers. These are unique only
                in a combination with ``wikiCode`` parameter. Multiple IDs can be provided to return a collection of
                specific pages.
            wiki_revision_id: Integer Array. Retrieve specific pages by their Wikipedia revision identifiers. These are
                unique only in a combination with ``wikiCode`` parameter. Multiple IDs can be provided to return a
                collection of specific pages. This ID changes each time a page is edited.
            wiki_code: String Array. Retrieve pages only from specified wiki projects. Currently, the only accepted
                value is ``enwiki``.
            wiki_namespace: Integer Array. Retrieve pages only from specified wiki namespace. Currently, only the main
                namespace (0) is available.
            wikidata_id: String Array. Retrieve pages by the ids corresponding to their Wikidata entities.
            wikidata_instance_of_id: String Array. Retrieve all pages whose Wikidata entities are instances of these
                provided ids.
            wikidata_instance_of_label: String Array. Retrieve all pages whose Wikidata entities are instances of these
                ids (provided as labels).
            category: String Array. Retrieve all pages for specified categories.
            section_id: String Array. Retrieve pages containing provided section ids. Each section ID is unique.
            wiki_revision_from: Date. Retrieve pages modified after this date. Accepts ISO 8601 format (e.g.,
                2023-03-01T00:00:00) or yyyy-mm-dd format.
            wiki_revision_to: Date. Retrieve pages modified before this date. Accepts ISO 8601 format (e.g.,
                2023-03-01T00:00:00) or yyyy-mm-dd format.
            scraped_at_from: Date. Retrieve pages scraped after this date. Accepts ISO 8601 format (e.g.,
                2023-03-01T00:00:00) or yyyy-mm-dd format.
            scraped_at_to: Date. Retrieve pages scraped before this date. Accepts ISO 8601 format (e.g.,
                2023-03-01T00:00:00) or yyyy-mm-dd format.
            pageviews_from: Integer. Retrieve pages with the average number of views per day higher than the provided
                value.
            pageviews_to: Integer. Retrieve pages with the average number of views per day lower than the provided
                value.
            with_pageviews: Boolean. Retrieve pages that have any viewership statistics available for them. If ``false``
                (the default) - return all pages.
            show_num_results: Boolean. Whether to show the total number of all matched pages. Default value is false
                which makes queries a bit more efficient but also counts up to 10000 pages.
            page: Integer. The specific page of results to retrieve in the paginated response. Starts at 0.
            size: Integer. The number of articles to return per page in the paginated response.
            sort_by: String. Determines the Wikipedia page sorting order. Options include relevance (default),
                revisionTsDesc (recently edited first), revisionTsAsc (recently edited last), pageViewsDesc (highest
                viewership first), pageViewsAsc (highest viewership last), scrapedAtDesc (recently scraped first),
                scrapedAtAsc (recently scraped last).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/wikipedia/all"),
            query_params=[
                param[str | None]("q", q),
                param[str | None]("title", title),
                param[str | None]("summary", summary),
                param[str | None]("text", text),
                param[str | None]("reference", reference),
                param[list[str] | None]("id", id_),
                param[list[int] | None]("wikiPageId", wiki_page_id),
                param[list[int] | None]("wikiRevisionId", wiki_revision_id),
                param[list[str] | None]("wikiCode", wiki_code),
                param[list[int] | None]("wikiNamespace", wiki_namespace),
                param[list[str] | None]("wikidataId", wikidata_id),
                param[list[str] | None]("wikidataInstanceOfId", wikidata_instance_of_id),
                param[list[str] | None]("wikidataInstanceOfLabel", wikidata_instance_of_label),
                param[list[str] | None]("category", category),
                param[list[str] | None]("sectionId", section_id),
                param[RFC3339DateTime | None]("wikiRevisionFrom", wiki_revision_from),
                param[RFC3339DateTime | None]("wikiRevisionTo", wiki_revision_to),
                param[RFC3339DateTime | None]("scrapedAtFrom", scraped_at_from),
                param[RFC3339DateTime | None]("scrapedAtTo", scraped_at_to),
                param[int | None]("pageviewsFrom", pageviews_from),
                param[int | None]("pageviewsTo", pageviews_to),
                param[bool | None]("withPageviews", with_pageviews),
                param[bool | None]("showNumResults", show_num_results),
                param[int | None]("page", page),
                param[int | None]("size", size),
                param[SortByPerigonWikipediaApiOrStr | None]("sortBy", sort_by),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[WikipediaSearchResult],
            error_mapper=search_wikipedia_error_mapper,
            request_options=request_options,
        )

    def vector_search_wikipedia(
        self,
        body: WikipediaSearchParams | WikipediaSearchParamsDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[WikipediaVectorSearchResult, VectorSearchWikipediaErrorBody]:
        """Perform a natural language search over Wikipedia pages using semantic relevance. The result includes a list
        of page sections most closely matched to your query intent.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/vector/wikipedia/all"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[WikipediaSearchParams | WikipediaSearchParamsDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[WikipediaVectorSearchResult],
            error_mapper=vector_search_wikipedia_error_mapper,
            request_options=request_options,
        )


class AsyncWikipediaWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def search_wikipedia(
        self,
        *,
        q: str | None = None,
        title: str | None = None,
        summary: str | None = None,
        text: str | None = None,
        reference: str | None = None,
        id_: list[str] | None = None,
        wiki_page_id: list[int] | None = None,
        wiki_revision_id: list[int] | None = None,
        wiki_code: list[str] | None = None,
        wiki_namespace: list[int] | None = None,
        wikidata_id: list[str] | None = None,
        wikidata_instance_of_id: list[str] | None = None,
        wikidata_instance_of_label: list[str] | None = None,
        category: list[str] | None = None,
        section_id: list[str] | None = None,
        wiki_revision_from: RFC3339DateTime | None = None,
        wiki_revision_to: RFC3339DateTime | None = None,
        scraped_at_from: RFC3339DateTime | None = None,
        scraped_at_to: RFC3339DateTime | None = None,
        pageviews_from: int | None = None,
        pageviews_to: int | None = None,
        with_pageviews: bool | None = None,
        show_num_results: bool | None = None,
        page: int | None = None,
        size: int | None = None,
        sort_by: SortByPerigonWikipediaApiOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[WikipediaSearchResult, SearchWikipediaErrorBody]:
        """Search and filter all Wikipedia pages available via the Perigon API. The result includes a list of individual
        pages that were matched to your specific criteria.

        Args:
            q: String. Primary search query for filtering pages based on their title, summary, and content. Supports
                Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible
                searching.
            title: String. Search specifically within page titles. Supports Boolean operators, exact phrases with
                quotes, and wildcards for matching title variations.
            summary: String. Search specifically within page summary. Supports Boolean operators, exact phrases with
                quotes, and wildcards for matching title variations.
            text: String. Search specifically within the page's content (across all sections). Supports Boolean
                operators, exact phrases with quotes, and wildcards for matching title variations.
            reference: String. Search specifically across page's references. Supports Boolean operators, exact phrases
                with quotes, and wildcards for matching title variations.
            id_: String Array. Retrieve specific pages by their unique Perigon identifiers. Multiple IDs can be provided
                to return a collection of specific pages.
            wiki_page_id: Integer Array. Retrieve specific pages by their Wikipedia identifiers. These are unique only
                in a combination with ``wikiCode`` parameter. Multiple IDs can be provided to return a collection of
                specific pages.
            wiki_revision_id: Integer Array. Retrieve specific pages by their Wikipedia revision identifiers. These are
                unique only in a combination with ``wikiCode`` parameter. Multiple IDs can be provided to return a
                collection of specific pages. This ID changes each time a page is edited.
            wiki_code: String Array. Retrieve pages only from specified wiki projects. Currently, the only accepted
                value is ``enwiki``.
            wiki_namespace: Integer Array. Retrieve pages only from specified wiki namespace. Currently, only the main
                namespace (0) is available.
            wikidata_id: String Array. Retrieve pages by the ids corresponding to their Wikidata entities.
            wikidata_instance_of_id: String Array. Retrieve all pages whose Wikidata entities are instances of these
                provided ids.
            wikidata_instance_of_label: String Array. Retrieve all pages whose Wikidata entities are instances of these
                ids (provided as labels).
            category: String Array. Retrieve all pages for specified categories.
            section_id: String Array. Retrieve pages containing provided section ids. Each section ID is unique.
            wiki_revision_from: Date. Retrieve pages modified after this date. Accepts ISO 8601 format (e.g.,
                2023-03-01T00:00:00) or yyyy-mm-dd format.
            wiki_revision_to: Date. Retrieve pages modified before this date. Accepts ISO 8601 format (e.g.,
                2023-03-01T00:00:00) or yyyy-mm-dd format.
            scraped_at_from: Date. Retrieve pages scraped after this date. Accepts ISO 8601 format (e.g.,
                2023-03-01T00:00:00) or yyyy-mm-dd format.
            scraped_at_to: Date. Retrieve pages scraped before this date. Accepts ISO 8601 format (e.g.,
                2023-03-01T00:00:00) or yyyy-mm-dd format.
            pageviews_from: Integer. Retrieve pages with the average number of views per day higher than the provided
                value.
            pageviews_to: Integer. Retrieve pages with the average number of views per day lower than the provided
                value.
            with_pageviews: Boolean. Retrieve pages that have any viewership statistics available for them. If ``false``
                (the default) - return all pages.
            show_num_results: Boolean. Whether to show the total number of all matched pages. Default value is false
                which makes queries a bit more efficient but also counts up to 10000 pages.
            page: Integer. The specific page of results to retrieve in the paginated response. Starts at 0.
            size: Integer. The number of articles to return per page in the paginated response.
            sort_by: String. Determines the Wikipedia page sorting order. Options include relevance (default),
                revisionTsDesc (recently edited first), revisionTsAsc (recently edited last), pageViewsDesc (highest
                viewership first), pageViewsAsc (highest viewership last), scrapedAtDesc (recently scraped first),
                scrapedAtAsc (recently scraped last).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/wikipedia/all"),
            query_params=[
                param[str | None]("q", q),
                param[str | None]("title", title),
                param[str | None]("summary", summary),
                param[str | None]("text", text),
                param[str | None]("reference", reference),
                param[list[str] | None]("id", id_),
                param[list[int] | None]("wikiPageId", wiki_page_id),
                param[list[int] | None]("wikiRevisionId", wiki_revision_id),
                param[list[str] | None]("wikiCode", wiki_code),
                param[list[int] | None]("wikiNamespace", wiki_namespace),
                param[list[str] | None]("wikidataId", wikidata_id),
                param[list[str] | None]("wikidataInstanceOfId", wikidata_instance_of_id),
                param[list[str] | None]("wikidataInstanceOfLabel", wikidata_instance_of_label),
                param[list[str] | None]("category", category),
                param[list[str] | None]("sectionId", section_id),
                param[RFC3339DateTime | None]("wikiRevisionFrom", wiki_revision_from),
                param[RFC3339DateTime | None]("wikiRevisionTo", wiki_revision_to),
                param[RFC3339DateTime | None]("scrapedAtFrom", scraped_at_from),
                param[RFC3339DateTime | None]("scrapedAtTo", scraped_at_to),
                param[int | None]("pageviewsFrom", pageviews_from),
                param[int | None]("pageviewsTo", pageviews_to),
                param[bool | None]("withPageviews", with_pageviews),
                param[bool | None]("showNumResults", show_num_results),
                param[int | None]("page", page),
                param[int | None]("size", size),
                param[SortByPerigonWikipediaApiOrStr | None]("sortBy", sort_by),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[WikipediaSearchResult],
            error_mapper=search_wikipedia_error_mapper,
            request_options=request_options,
        )

    async def vector_search_wikipedia(
        self,
        body: WikipediaSearchParams | WikipediaSearchParamsDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[WikipediaVectorSearchResult, VectorSearchWikipediaErrorBody]:
        """Perform a natural language search over Wikipedia pages using semantic relevance. The result includes a list
        of page sections most closely matched to your query intent.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/vector/wikipedia/all"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[WikipediaSearchParams | WikipediaSearchParamsDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[WikipediaVectorSearchResult],
            error_mapper=vector_search_wikipedia_error_mapper,
            request_options=request_options,
        )
