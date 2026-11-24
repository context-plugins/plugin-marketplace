from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.search_documents_error import SearchDocumentsErrorBody, search_documents_error_mapper
from ..errors.search_epics_error import SearchEpicsErrorBody, search_epics_error_mapper
from ..errors.search_error import SearchErrorBody, search_error_mapper
from ..errors.search_iterations_error import SearchIterationsErrorBody, search_iterations_error_mapper
from ..errors.search_milestones_error import SearchMilestonesErrorBody, search_milestones_error_mapper
from ..errors.search_objectives_error import SearchObjectivesErrorBody, search_objectives_error_mapper
from ..errors.search_stories_error import SearchStoriesErrorBody, search_stories_error_mapper
from ..models.doc_search_results import DocSearchResults
from ..models.enums.detail import DetailOrStr
from ..models.enums.entity_type import EntityTypeOrStr
from ..models.epic_search_results import EpicSearchResults
from ..models.iteration_search_results import IterationSearchResults
from ..models.objective_search_results import ObjectiveSearchResults
from ..models.search_results import SearchResults
from ..models.story_search_results import StorySearchResults
from ..server.server import Server


class Search:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SearchWithRawResponse(client, server, auth)

    def search(
        self,
        query: str,
        *,
        page_size: int | None = None,
        detail: DetailOrStr | None = None,
        next_: str | None = None,
        entity_types: list[EntityTypeOrStr] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SearchResults:
        """Search lets you search Epics and Stories based on desired parameters. Since ordering of the results can
        change over time (due to search ranking decay, new Epics and Stories being created), the ``next`` value from the
        previous response can be used as the path and query string for the next page to ensure stable ordering.

        Args:
            query: See our help center article on `search operators
                <https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators>`__
            page_size: The number of search results to include in a page. Minimum of 1 and maximum of 250.
            detail: The amount of detail included in each result item. "full" will include all descriptions and comments
                and more fields on related items such as pull requests, branches and tasks. "slim" omits larger fulltext
                fields such as descriptions and comments and only references related items by id. The default is "full".
            next_: The next page token.
            entity_types: A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration,
                objective, story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: **Either:** (1) Schema mismatch **or** (2) Maximum of 1000 search results exceeded Resource does
                not exist Unprocessable ``error`` is ``MaxSearchResultsExceededError | RawError``."""
        return unwrap(
            self._with_raw_response.search(
                query,
                page_size=page_size,
                detail=detail,
                next_=next_,
                entity_types=entity_types,
                request_options=request_options,
            ),
        )

    def search_documents(
        self,
        title: str,
        *,
        archived: bool | None = None,
        created_by_me: bool | None = None,
        followed_by_me: bool | None = None,
        page_size: int | None = None,
        next_: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DocSearchResults:
        """Search Documents lets you search Documents based on desired parameters. Supports structured filters: title,
        archived, created_by_me, followed_by_me.

        Args:
            title: Search text to match against document titles. Supports fuzzy matching. Required.
            archived: When true, find archived documents. When false, find non-archived documents.
            created_by_me: When true, find documents created by the current user. When false, find documents NOT created
                by current user.
            followed_by_me: When true, find documents that the current user is following. When false, find documents NOT
                followed.
            page_size: The number of search results to include in a page. Minimum of 1 and maximum of 250.
            next_: The next page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: **Either:** (1) Schema mismatch **or** (2) Maximum of 1000 search results exceeded Resource does
                not exist Unprocessable ``error`` is ``MaxSearchResultsExceededError | DisabledFeatureError |
                RawError``."""
        return unwrap(
            self._with_raw_response.search_documents(
                title,
                archived=archived,
                created_by_me=created_by_me,
                followed_by_me=followed_by_me,
                page_size=page_size,
                next_=next_,
                request_options=request_options,
            ),
        )

    def search_epics(
        self,
        query: str,
        *,
        page_size: int | None = None,
        detail: DetailOrStr | None = None,
        next_: str | None = None,
        entity_types: list[EntityTypeOrStr] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EpicSearchResults:
        """Search Epics lets you search Epics based on desired parameters. Since ordering of stories can change over
        time (due to search ranking decay, new Epics being created), the ``next`` value from the previous response can
        be used as the path and query string for the next page to ensure stable ordering.

        Args:
            query: See our help center article on `search operators
                <https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators>`__
            page_size: The number of search results to include in a page. Minimum of 1 and maximum of 250.
            detail: The amount of detail included in each result item. "full" will include all descriptions and comments
                and more fields on related items such as pull requests, branches and tasks. "slim" omits larger fulltext
                fields such as descriptions and comments and only references related items by id. The default is "full".
            next_: The next page token.
            entity_types: A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration,
                objective, story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: **Either:** (1) Schema mismatch **or** (2) Maximum of 1000 search results exceeded Resource does
                not exist Unprocessable ``error`` is ``MaxSearchResultsExceededError | RawError``."""
        return unwrap(
            self._with_raw_response.search_epics(
                query,
                page_size=page_size,
                detail=detail,
                next_=next_,
                entity_types=entity_types,
                request_options=request_options,
            ),
        )

    def search_iterations(
        self,
        query: str,
        *,
        page_size: int | None = None,
        detail: DetailOrStr | None = None,
        next_: str | None = None,
        entity_types: list[EntityTypeOrStr] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> IterationSearchResults:
        """Search Iterations lets you search Iterations based on desired parameters. Since ordering of results can
        change over time (due to search ranking decay, new Iterations being created), the ``next`` value from the
        previous response can be used as the path and query string for the next page to ensure stable ordering.

        Args:
            query: See our help center article on `search operators
                <https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators>`__
            page_size: The number of search results to include in a page. Minimum of 1 and maximum of 250.
            detail: The amount of detail included in each result item. "full" will include all descriptions and comments
                and more fields on related items such as pull requests, branches and tasks. "slim" omits larger fulltext
                fields such as descriptions and comments and only references related items by id. The default is "full".
            next_: The next page token.
            entity_types: A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration,
                objective, story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: **Either:** (1) Schema mismatch **or** (2) Maximum of 1000 search results exceeded Resource does
                not exist Unprocessable ``error`` is ``MaxSearchResultsExceededError | RawError``."""
        return unwrap(
            self._with_raw_response.search_iterations(
                query,
                page_size=page_size,
                detail=detail,
                next_=next_,
                entity_types=entity_types,
                request_options=request_options,
            ),
        )

    def search_milestones(
        self,
        query: str,
        *,
        page_size: int | None = None,
        detail: DetailOrStr | None = None,
        next_: str | None = None,
        entity_types: list[EntityTypeOrStr] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ObjectiveSearchResults:
        """Search Milestones lets you search Milestones based on desired parameters. Since ordering of results can
        change over time (due to search ranking decay, new Milestones being created), the ``next`` value from the
        previous response can be used as the path and query string for the next page to ensure stable ordering.

        Args:
            query: See our help center article on `search operators
                <https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators>`__
            page_size: The number of search results to include in a page. Minimum of 1 and maximum of 250.
            detail: The amount of detail included in each result item. "full" will include all descriptions and comments
                and more fields on related items such as pull requests, branches and tasks. "slim" omits larger fulltext
                fields such as descriptions and comments and only references related items by id. The default is "full".
            next_: The next page token.
            entity_types: A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration,
                objective, story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: **Either:** (1) Schema mismatch **or** (2) Maximum of 1000 search results exceeded Resource does
                not exist Unprocessable ``error`` is ``MaxSearchResultsExceededError | RawError``."""
        return unwrap(
            self._with_raw_response.search_milestones(
                query,
                page_size=page_size,
                detail=detail,
                next_=next_,
                entity_types=entity_types,
                request_options=request_options,
            ),
        )

    def search_objectives(
        self,
        query: str,
        *,
        page_size: int | None = None,
        detail: DetailOrStr | None = None,
        next_: str | None = None,
        entity_types: list[EntityTypeOrStr] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ObjectiveSearchResults:
        """Search Objectives lets you search Objectives based on desired parameters. Since ordering of results can
        change over time (due to search ranking decay, new Objectives being created), the ``next`` value from the
        previous response can be used as the path and query string for the next page to ensure stable ordering.

        Args:
            query: See our help center article on `search operators
                <https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators>`__
            page_size: The number of search results to include in a page. Minimum of 1 and maximum of 250.
            detail: The amount of detail included in each result item. "full" will include all descriptions and comments
                and more fields on related items such as pull requests, branches and tasks. "slim" omits larger fulltext
                fields such as descriptions and comments and only references related items by id. The default is "full".
            next_: The next page token.
            entity_types: A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration,
                objective, story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: **Either:** (1) Schema mismatch **or** (2) Maximum of 1000 search results exceeded Resource does
                not exist Unprocessable ``error`` is ``MaxSearchResultsExceededError | RawError``."""
        return unwrap(
            self._with_raw_response.search_objectives(
                query,
                page_size=page_size,
                detail=detail,
                next_=next_,
                entity_types=entity_types,
                request_options=request_options,
            ),
        )

    def search_stories(
        self,
        query: str,
        *,
        page_size: int | None = None,
        detail: DetailOrStr | None = None,
        next_: str | None = None,
        entity_types: list[EntityTypeOrStr] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> StorySearchResults:
        """Search Stories lets you search Stories based on desired parameters. Since ordering of stories can change over
        time (due to search ranking decay, new stories being created), the ``next`` value from the previous response can
        be used as the path and query string for the next page to ensure stable ordering.

        Args:
            query: See our help center article on `search operators
                <https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators>`__
            page_size: The number of search results to include in a page. Minimum of 1 and maximum of 250.
            detail: The amount of detail included in each result item. "full" will include all descriptions and comments
                and more fields on related items such as pull requests, branches and tasks. "slim" omits larger fulltext
                fields such as descriptions and comments and only references related items by id. The default is "full".
            next_: The next page token.
            entity_types: A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration,
                objective, story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: **Either:** (1) Schema mismatch **or** (2) Maximum of 1000 search results exceeded Resource does
                not exist Unprocessable ``error`` is ``MaxSearchResultsExceededError | RawError``."""
        return unwrap(
            self._with_raw_response.search_stories(
                query,
                page_size=page_size,
                detail=detail,
                next_=next_,
                entity_types=entity_types,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> SearchWithRawResponse:
        return self._with_raw_response


class AsyncSearch:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSearchWithRawResponse(client, server, auth)

    async def search(
        self,
        query: str,
        *,
        page_size: int | None = None,
        detail: DetailOrStr | None = None,
        next_: str | None = None,
        entity_types: list[EntityTypeOrStr] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SearchResults:
        """Search lets you search Epics and Stories based on desired parameters. Since ordering of the results can
        change over time (due to search ranking decay, new Epics and Stories being created), the ``next`` value from the
        previous response can be used as the path and query string for the next page to ensure stable ordering.

        Args:
            query: See our help center article on `search operators
                <https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators>`__
            page_size: The number of search results to include in a page. Minimum of 1 and maximum of 250.
            detail: The amount of detail included in each result item. "full" will include all descriptions and comments
                and more fields on related items such as pull requests, branches and tasks. "slim" omits larger fulltext
                fields such as descriptions and comments and only references related items by id. The default is "full".
            next_: The next page token.
            entity_types: A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration,
                objective, story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: **Either:** (1) Schema mismatch **or** (2) Maximum of 1000 search results exceeded Resource does
                not exist Unprocessable ``error`` is ``MaxSearchResultsExceededError | RawError``."""
        return unwrap(
            await self._with_raw_response.search(
                query,
                page_size=page_size,
                detail=detail,
                next_=next_,
                entity_types=entity_types,
                request_options=request_options,
            ),
        )

    async def search_documents(
        self,
        title: str,
        *,
        archived: bool | None = None,
        created_by_me: bool | None = None,
        followed_by_me: bool | None = None,
        page_size: int | None = None,
        next_: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DocSearchResults:
        """Search Documents lets you search Documents based on desired parameters. Supports structured filters: title,
        archived, created_by_me, followed_by_me.

        Args:
            title: Search text to match against document titles. Supports fuzzy matching. Required.
            archived: When true, find archived documents. When false, find non-archived documents.
            created_by_me: When true, find documents created by the current user. When false, find documents NOT created
                by current user.
            followed_by_me: When true, find documents that the current user is following. When false, find documents NOT
                followed.
            page_size: The number of search results to include in a page. Minimum of 1 and maximum of 250.
            next_: The next page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: **Either:** (1) Schema mismatch **or** (2) Maximum of 1000 search results exceeded Resource does
                not exist Unprocessable ``error`` is ``MaxSearchResultsExceededError | DisabledFeatureError |
                RawError``."""
        return unwrap(
            await self._with_raw_response.search_documents(
                title,
                archived=archived,
                created_by_me=created_by_me,
                followed_by_me=followed_by_me,
                page_size=page_size,
                next_=next_,
                request_options=request_options,
            ),
        )

    async def search_epics(
        self,
        query: str,
        *,
        page_size: int | None = None,
        detail: DetailOrStr | None = None,
        next_: str | None = None,
        entity_types: list[EntityTypeOrStr] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EpicSearchResults:
        """Search Epics lets you search Epics based on desired parameters. Since ordering of stories can change over
        time (due to search ranking decay, new Epics being created), the ``next`` value from the previous response can
        be used as the path and query string for the next page to ensure stable ordering.

        Args:
            query: See our help center article on `search operators
                <https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators>`__
            page_size: The number of search results to include in a page. Minimum of 1 and maximum of 250.
            detail: The amount of detail included in each result item. "full" will include all descriptions and comments
                and more fields on related items such as pull requests, branches and tasks. "slim" omits larger fulltext
                fields such as descriptions and comments and only references related items by id. The default is "full".
            next_: The next page token.
            entity_types: A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration,
                objective, story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: **Either:** (1) Schema mismatch **or** (2) Maximum of 1000 search results exceeded Resource does
                not exist Unprocessable ``error`` is ``MaxSearchResultsExceededError | RawError``."""
        return unwrap(
            await self._with_raw_response.search_epics(
                query,
                page_size=page_size,
                detail=detail,
                next_=next_,
                entity_types=entity_types,
                request_options=request_options,
            ),
        )

    async def search_iterations(
        self,
        query: str,
        *,
        page_size: int | None = None,
        detail: DetailOrStr | None = None,
        next_: str | None = None,
        entity_types: list[EntityTypeOrStr] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> IterationSearchResults:
        """Search Iterations lets you search Iterations based on desired parameters. Since ordering of results can
        change over time (due to search ranking decay, new Iterations being created), the ``next`` value from the
        previous response can be used as the path and query string for the next page to ensure stable ordering.

        Args:
            query: See our help center article on `search operators
                <https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators>`__
            page_size: The number of search results to include in a page. Minimum of 1 and maximum of 250.
            detail: The amount of detail included in each result item. "full" will include all descriptions and comments
                and more fields on related items such as pull requests, branches and tasks. "slim" omits larger fulltext
                fields such as descriptions and comments and only references related items by id. The default is "full".
            next_: The next page token.
            entity_types: A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration,
                objective, story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: **Either:** (1) Schema mismatch **or** (2) Maximum of 1000 search results exceeded Resource does
                not exist Unprocessable ``error`` is ``MaxSearchResultsExceededError | RawError``."""
        return unwrap(
            await self._with_raw_response.search_iterations(
                query,
                page_size=page_size,
                detail=detail,
                next_=next_,
                entity_types=entity_types,
                request_options=request_options,
            ),
        )

    async def search_milestones(
        self,
        query: str,
        *,
        page_size: int | None = None,
        detail: DetailOrStr | None = None,
        next_: str | None = None,
        entity_types: list[EntityTypeOrStr] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ObjectiveSearchResults:
        """Search Milestones lets you search Milestones based on desired parameters. Since ordering of results can
        change over time (due to search ranking decay, new Milestones being created), the ``next`` value from the
        previous response can be used as the path and query string for the next page to ensure stable ordering.

        Args:
            query: See our help center article on `search operators
                <https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators>`__
            page_size: The number of search results to include in a page. Minimum of 1 and maximum of 250.
            detail: The amount of detail included in each result item. "full" will include all descriptions and comments
                and more fields on related items such as pull requests, branches and tasks. "slim" omits larger fulltext
                fields such as descriptions and comments and only references related items by id. The default is "full".
            next_: The next page token.
            entity_types: A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration,
                objective, story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: **Either:** (1) Schema mismatch **or** (2) Maximum of 1000 search results exceeded Resource does
                not exist Unprocessable ``error`` is ``MaxSearchResultsExceededError | RawError``."""
        return unwrap(
            await self._with_raw_response.search_milestones(
                query,
                page_size=page_size,
                detail=detail,
                next_=next_,
                entity_types=entity_types,
                request_options=request_options,
            ),
        )

    async def search_objectives(
        self,
        query: str,
        *,
        page_size: int | None = None,
        detail: DetailOrStr | None = None,
        next_: str | None = None,
        entity_types: list[EntityTypeOrStr] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ObjectiveSearchResults:
        """Search Objectives lets you search Objectives based on desired parameters. Since ordering of results can
        change over time (due to search ranking decay, new Objectives being created), the ``next`` value from the
        previous response can be used as the path and query string for the next page to ensure stable ordering.

        Args:
            query: See our help center article on `search operators
                <https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators>`__
            page_size: The number of search results to include in a page. Minimum of 1 and maximum of 250.
            detail: The amount of detail included in each result item. "full" will include all descriptions and comments
                and more fields on related items such as pull requests, branches and tasks. "slim" omits larger fulltext
                fields such as descriptions and comments and only references related items by id. The default is "full".
            next_: The next page token.
            entity_types: A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration,
                objective, story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: **Either:** (1) Schema mismatch **or** (2) Maximum of 1000 search results exceeded Resource does
                not exist Unprocessable ``error`` is ``MaxSearchResultsExceededError | RawError``."""
        return unwrap(
            await self._with_raw_response.search_objectives(
                query,
                page_size=page_size,
                detail=detail,
                next_=next_,
                entity_types=entity_types,
                request_options=request_options,
            ),
        )

    async def search_stories(
        self,
        query: str,
        *,
        page_size: int | None = None,
        detail: DetailOrStr | None = None,
        next_: str | None = None,
        entity_types: list[EntityTypeOrStr] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> StorySearchResults:
        """Search Stories lets you search Stories based on desired parameters. Since ordering of stories can change over
        time (due to search ranking decay, new stories being created), the ``next`` value from the previous response can
        be used as the path and query string for the next page to ensure stable ordering.

        Args:
            query: See our help center article on `search operators
                <https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators>`__
            page_size: The number of search results to include in a page. Minimum of 1 and maximum of 250.
            detail: The amount of detail included in each result item. "full" will include all descriptions and comments
                and more fields on related items such as pull requests, branches and tasks. "slim" omits larger fulltext
                fields such as descriptions and comments and only references related items by id. The default is "full".
            next_: The next page token.
            entity_types: A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration,
                objective, story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: **Either:** (1) Schema mismatch **or** (2) Maximum of 1000 search results exceeded Resource does
                not exist Unprocessable ``error`` is ``MaxSearchResultsExceededError | RawError``."""
        return unwrap(
            await self._with_raw_response.search_stories(
                query,
                page_size=page_size,
                detail=detail,
                next_=next_,
                entity_types=entity_types,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncSearchWithRawResponse:
        return self._with_raw_response


class SearchWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def search(
        self,
        query: str,
        *,
        page_size: int | None = None,
        detail: DetailOrStr | None = None,
        next_: str | None = None,
        entity_types: list[EntityTypeOrStr] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SearchResults, SearchErrorBody]:
        """Search lets you search Epics and Stories based on desired parameters. Since ordering of the results can
        change over time (due to search ranking decay, new Epics and Stories being created), the ``next`` value from the
        previous response can be used as the path and query string for the next page to ensure stable ordering.

        Args:
            query: See our help center article on `search operators
                <https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators>`__
            page_size: The number of search results to include in a page. Minimum of 1 and maximum of 250.
            detail: The amount of detail included in each result item. "full" will include all descriptions and comments
                and more fields on related items such as pull requests, branches and tasks. "slim" omits larger fulltext
                fields such as descriptions and comments and only references related items by id. The default is "full".
            next_: The next page token.
            entity_types: A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration,
                objective, story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/search"),
            query_params=[
                param[str]("query", query),
                param[int | None]("page_size", page_size),
                param[DetailOrStr | None]("detail", detail),
                param[str | None]("next", next_),
                param[list[EntityTypeOrStr] | None]("entity_types", entity_types),
            ],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[SearchResults],
            error_mapper=search_error_mapper,
            request_options=request_options,
        )

    def search_documents(
        self,
        title: str,
        *,
        archived: bool | None = None,
        created_by_me: bool | None = None,
        followed_by_me: bool | None = None,
        page_size: int | None = None,
        next_: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DocSearchResults, SearchDocumentsErrorBody]:
        """Search Documents lets you search Documents based on desired parameters. Supports structured filters: title,
        archived, created_by_me, followed_by_me.

        Args:
            title: Search text to match against document titles. Supports fuzzy matching. Required.
            archived: When true, find archived documents. When false, find non-archived documents.
            created_by_me: When true, find documents created by the current user. When false, find documents NOT created
                by current user.
            followed_by_me: When true, find documents that the current user is following. When false, find documents NOT
                followed.
            page_size: The number of search results to include in a page. Minimum of 1 and maximum of 250.
            next_: The next page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/search/documents"),
            query_params=[
                param[str]("title", title),
                param[bool | None]("archived", archived),
                param[bool | None]("created_by_me", created_by_me),
                param[bool | None]("followed_by_me", followed_by_me),
                param[int | None]("page_size", page_size),
                param[str | None]("next", next_),
            ],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[DocSearchResults],
            error_mapper=search_documents_error_mapper,
            request_options=request_options,
        )

    def search_epics(
        self,
        query: str,
        *,
        page_size: int | None = None,
        detail: DetailOrStr | None = None,
        next_: str | None = None,
        entity_types: list[EntityTypeOrStr] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EpicSearchResults, SearchEpicsErrorBody]:
        """Search Epics lets you search Epics based on desired parameters. Since ordering of stories can change over
        time (due to search ranking decay, new Epics being created), the ``next`` value from the previous response can
        be used as the path and query string for the next page to ensure stable ordering.

        Args:
            query: See our help center article on `search operators
                <https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators>`__
            page_size: The number of search results to include in a page. Minimum of 1 and maximum of 250.
            detail: The amount of detail included in each result item. "full" will include all descriptions and comments
                and more fields on related items such as pull requests, branches and tasks. "slim" omits larger fulltext
                fields such as descriptions and comments and only references related items by id. The default is "full".
            next_: The next page token.
            entity_types: A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration,
                objective, story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/search/epics"),
            query_params=[
                param[str]("query", query),
                param[int | None]("page_size", page_size),
                param[DetailOrStr | None]("detail", detail),
                param[str | None]("next", next_),
                param[list[EntityTypeOrStr] | None]("entity_types", entity_types),
            ],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[EpicSearchResults],
            error_mapper=search_epics_error_mapper,
            request_options=request_options,
        )

    def search_iterations(
        self,
        query: str,
        *,
        page_size: int | None = None,
        detail: DetailOrStr | None = None,
        next_: str | None = None,
        entity_types: list[EntityTypeOrStr] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[IterationSearchResults, SearchIterationsErrorBody]:
        """Search Iterations lets you search Iterations based on desired parameters. Since ordering of results can
        change over time (due to search ranking decay, new Iterations being created), the ``next`` value from the
        previous response can be used as the path and query string for the next page to ensure stable ordering.

        Args:
            query: See our help center article on `search operators
                <https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators>`__
            page_size: The number of search results to include in a page. Minimum of 1 and maximum of 250.
            detail: The amount of detail included in each result item. "full" will include all descriptions and comments
                and more fields on related items such as pull requests, branches and tasks. "slim" omits larger fulltext
                fields such as descriptions and comments and only references related items by id. The default is "full".
            next_: The next page token.
            entity_types: A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration,
                objective, story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/search/iterations"),
            query_params=[
                param[str]("query", query),
                param[int | None]("page_size", page_size),
                param[DetailOrStr | None]("detail", detail),
                param[str | None]("next", next_),
                param[list[EntityTypeOrStr] | None]("entity_types", entity_types),
            ],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[IterationSearchResults],
            error_mapper=search_iterations_error_mapper,
            request_options=request_options,
        )

    def search_milestones(
        self,
        query: str,
        *,
        page_size: int | None = None,
        detail: DetailOrStr | None = None,
        next_: str | None = None,
        entity_types: list[EntityTypeOrStr] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ObjectiveSearchResults, SearchMilestonesErrorBody]:
        """Search Milestones lets you search Milestones based on desired parameters. Since ordering of results can
        change over time (due to search ranking decay, new Milestones being created), the ``next`` value from the
        previous response can be used as the path and query string for the next page to ensure stable ordering.

        Args:
            query: See our help center article on `search operators
                <https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators>`__
            page_size: The number of search results to include in a page. Minimum of 1 and maximum of 250.
            detail: The amount of detail included in each result item. "full" will include all descriptions and comments
                and more fields on related items such as pull requests, branches and tasks. "slim" omits larger fulltext
                fields such as descriptions and comments and only references related items by id. The default is "full".
            next_: The next page token.
            entity_types: A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration,
                objective, story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/search/milestones"),
            query_params=[
                param[str]("query", query),
                param[int | None]("page_size", page_size),
                param[DetailOrStr | None]("detail", detail),
                param[str | None]("next", next_),
                param[list[EntityTypeOrStr] | None]("entity_types", entity_types),
            ],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[ObjectiveSearchResults],
            error_mapper=search_milestones_error_mapper,
            request_options=request_options,
        )

    def search_objectives(
        self,
        query: str,
        *,
        page_size: int | None = None,
        detail: DetailOrStr | None = None,
        next_: str | None = None,
        entity_types: list[EntityTypeOrStr] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ObjectiveSearchResults, SearchObjectivesErrorBody]:
        """Search Objectives lets you search Objectives based on desired parameters. Since ordering of results can
        change over time (due to search ranking decay, new Objectives being created), the ``next`` value from the
        previous response can be used as the path and query string for the next page to ensure stable ordering.

        Args:
            query: See our help center article on `search operators
                <https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators>`__
            page_size: The number of search results to include in a page. Minimum of 1 and maximum of 250.
            detail: The amount of detail included in each result item. "full" will include all descriptions and comments
                and more fields on related items such as pull requests, branches and tasks. "slim" omits larger fulltext
                fields such as descriptions and comments and only references related items by id. The default is "full".
            next_: The next page token.
            entity_types: A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration,
                objective, story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/search/objectives"),
            query_params=[
                param[str]("query", query),
                param[int | None]("page_size", page_size),
                param[DetailOrStr | None]("detail", detail),
                param[str | None]("next", next_),
                param[list[EntityTypeOrStr] | None]("entity_types", entity_types),
            ],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[ObjectiveSearchResults],
            error_mapper=search_objectives_error_mapper,
            request_options=request_options,
        )

    def search_stories(
        self,
        query: str,
        *,
        page_size: int | None = None,
        detail: DetailOrStr | None = None,
        next_: str | None = None,
        entity_types: list[EntityTypeOrStr] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[StorySearchResults, SearchStoriesErrorBody]:
        """Search Stories lets you search Stories based on desired parameters. Since ordering of stories can change over
        time (due to search ranking decay, new stories being created), the ``next`` value from the previous response can
        be used as the path and query string for the next page to ensure stable ordering.

        Args:
            query: See our help center article on `search operators
                <https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators>`__
            page_size: The number of search results to include in a page. Minimum of 1 and maximum of 250.
            detail: The amount of detail included in each result item. "full" will include all descriptions and comments
                and more fields on related items such as pull requests, branches and tasks. "slim" omits larger fulltext
                fields such as descriptions and comments and only references related items by id. The default is "full".
            next_: The next page token.
            entity_types: A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration,
                objective, story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/search/stories"),
            query_params=[
                param[str]("query", query),
                param[int | None]("page_size", page_size),
                param[DetailOrStr | None]("detail", detail),
                param[str | None]("next", next_),
                param[list[EntityTypeOrStr] | None]("entity_types", entity_types),
            ],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[StorySearchResults],
            error_mapper=search_stories_error_mapper,
            request_options=request_options,
        )


class AsyncSearchWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def search(
        self,
        query: str,
        *,
        page_size: int | None = None,
        detail: DetailOrStr | None = None,
        next_: str | None = None,
        entity_types: list[EntityTypeOrStr] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SearchResults, SearchErrorBody]:
        """Search lets you search Epics and Stories based on desired parameters. Since ordering of the results can
        change over time (due to search ranking decay, new Epics and Stories being created), the ``next`` value from the
        previous response can be used as the path and query string for the next page to ensure stable ordering.

        Args:
            query: See our help center article on `search operators
                <https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators>`__
            page_size: The number of search results to include in a page. Minimum of 1 and maximum of 250.
            detail: The amount of detail included in each result item. "full" will include all descriptions and comments
                and more fields on related items such as pull requests, branches and tasks. "slim" omits larger fulltext
                fields such as descriptions and comments and only references related items by id. The default is "full".
            next_: The next page token.
            entity_types: A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration,
                objective, story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/search"),
            query_params=[
                param[str]("query", query),
                param[int | None]("page_size", page_size),
                param[DetailOrStr | None]("detail", detail),
                param[str | None]("next", next_),
                param[list[EntityTypeOrStr] | None]("entity_types", entity_types),
            ],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[SearchResults],
            error_mapper=search_error_mapper,
            request_options=request_options,
        )

    async def search_documents(
        self,
        title: str,
        *,
        archived: bool | None = None,
        created_by_me: bool | None = None,
        followed_by_me: bool | None = None,
        page_size: int | None = None,
        next_: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DocSearchResults, SearchDocumentsErrorBody]:
        """Search Documents lets you search Documents based on desired parameters. Supports structured filters: title,
        archived, created_by_me, followed_by_me.

        Args:
            title: Search text to match against document titles. Supports fuzzy matching. Required.
            archived: When true, find archived documents. When false, find non-archived documents.
            created_by_me: When true, find documents created by the current user. When false, find documents NOT created
                by current user.
            followed_by_me: When true, find documents that the current user is following. When false, find documents NOT
                followed.
            page_size: The number of search results to include in a page. Minimum of 1 and maximum of 250.
            next_: The next page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/search/documents"),
            query_params=[
                param[str]("title", title),
                param[bool | None]("archived", archived),
                param[bool | None]("created_by_me", created_by_me),
                param[bool | None]("followed_by_me", followed_by_me),
                param[int | None]("page_size", page_size),
                param[str | None]("next", next_),
            ],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[DocSearchResults],
            error_mapper=search_documents_error_mapper,
            request_options=request_options,
        )

    async def search_epics(
        self,
        query: str,
        *,
        page_size: int | None = None,
        detail: DetailOrStr | None = None,
        next_: str | None = None,
        entity_types: list[EntityTypeOrStr] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EpicSearchResults, SearchEpicsErrorBody]:
        """Search Epics lets you search Epics based on desired parameters. Since ordering of stories can change over
        time (due to search ranking decay, new Epics being created), the ``next`` value from the previous response can
        be used as the path and query string for the next page to ensure stable ordering.

        Args:
            query: See our help center article on `search operators
                <https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators>`__
            page_size: The number of search results to include in a page. Minimum of 1 and maximum of 250.
            detail: The amount of detail included in each result item. "full" will include all descriptions and comments
                and more fields on related items such as pull requests, branches and tasks. "slim" omits larger fulltext
                fields such as descriptions and comments and only references related items by id. The default is "full".
            next_: The next page token.
            entity_types: A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration,
                objective, story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/search/epics"),
            query_params=[
                param[str]("query", query),
                param[int | None]("page_size", page_size),
                param[DetailOrStr | None]("detail", detail),
                param[str | None]("next", next_),
                param[list[EntityTypeOrStr] | None]("entity_types", entity_types),
            ],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[EpicSearchResults],
            error_mapper=search_epics_error_mapper,
            request_options=request_options,
        )

    async def search_iterations(
        self,
        query: str,
        *,
        page_size: int | None = None,
        detail: DetailOrStr | None = None,
        next_: str | None = None,
        entity_types: list[EntityTypeOrStr] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[IterationSearchResults, SearchIterationsErrorBody]:
        """Search Iterations lets you search Iterations based on desired parameters. Since ordering of results can
        change over time (due to search ranking decay, new Iterations being created), the ``next`` value from the
        previous response can be used as the path and query string for the next page to ensure stable ordering.

        Args:
            query: See our help center article on `search operators
                <https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators>`__
            page_size: The number of search results to include in a page. Minimum of 1 and maximum of 250.
            detail: The amount of detail included in each result item. "full" will include all descriptions and comments
                and more fields on related items such as pull requests, branches and tasks. "slim" omits larger fulltext
                fields such as descriptions and comments and only references related items by id. The default is "full".
            next_: The next page token.
            entity_types: A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration,
                objective, story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/search/iterations"),
            query_params=[
                param[str]("query", query),
                param[int | None]("page_size", page_size),
                param[DetailOrStr | None]("detail", detail),
                param[str | None]("next", next_),
                param[list[EntityTypeOrStr] | None]("entity_types", entity_types),
            ],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[IterationSearchResults],
            error_mapper=search_iterations_error_mapper,
            request_options=request_options,
        )

    async def search_milestones(
        self,
        query: str,
        *,
        page_size: int | None = None,
        detail: DetailOrStr | None = None,
        next_: str | None = None,
        entity_types: list[EntityTypeOrStr] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ObjectiveSearchResults, SearchMilestonesErrorBody]:
        """Search Milestones lets you search Milestones based on desired parameters. Since ordering of results can
        change over time (due to search ranking decay, new Milestones being created), the ``next`` value from the
        previous response can be used as the path and query string for the next page to ensure stable ordering.

        Args:
            query: See our help center article on `search operators
                <https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators>`__
            page_size: The number of search results to include in a page. Minimum of 1 and maximum of 250.
            detail: The amount of detail included in each result item. "full" will include all descriptions and comments
                and more fields on related items such as pull requests, branches and tasks. "slim" omits larger fulltext
                fields such as descriptions and comments and only references related items by id. The default is "full".
            next_: The next page token.
            entity_types: A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration,
                objective, story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/search/milestones"),
            query_params=[
                param[str]("query", query),
                param[int | None]("page_size", page_size),
                param[DetailOrStr | None]("detail", detail),
                param[str | None]("next", next_),
                param[list[EntityTypeOrStr] | None]("entity_types", entity_types),
            ],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[ObjectiveSearchResults],
            error_mapper=search_milestones_error_mapper,
            request_options=request_options,
        )

    async def search_objectives(
        self,
        query: str,
        *,
        page_size: int | None = None,
        detail: DetailOrStr | None = None,
        next_: str | None = None,
        entity_types: list[EntityTypeOrStr] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ObjectiveSearchResults, SearchObjectivesErrorBody]:
        """Search Objectives lets you search Objectives based on desired parameters. Since ordering of results can
        change over time (due to search ranking decay, new Objectives being created), the ``next`` value from the
        previous response can be used as the path and query string for the next page to ensure stable ordering.

        Args:
            query: See our help center article on `search operators
                <https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators>`__
            page_size: The number of search results to include in a page. Minimum of 1 and maximum of 250.
            detail: The amount of detail included in each result item. "full" will include all descriptions and comments
                and more fields on related items such as pull requests, branches and tasks. "slim" omits larger fulltext
                fields such as descriptions and comments and only references related items by id. The default is "full".
            next_: The next page token.
            entity_types: A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration,
                objective, story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/search/objectives"),
            query_params=[
                param[str]("query", query),
                param[int | None]("page_size", page_size),
                param[DetailOrStr | None]("detail", detail),
                param[str | None]("next", next_),
                param[list[EntityTypeOrStr] | None]("entity_types", entity_types),
            ],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[ObjectiveSearchResults],
            error_mapper=search_objectives_error_mapper,
            request_options=request_options,
        )

    async def search_stories(
        self,
        query: str,
        *,
        page_size: int | None = None,
        detail: DetailOrStr | None = None,
        next_: str | None = None,
        entity_types: list[EntityTypeOrStr] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[StorySearchResults, SearchStoriesErrorBody]:
        """Search Stories lets you search Stories based on desired parameters. Since ordering of stories can change over
        time (due to search ranking decay, new stories being created), the ``next`` value from the previous response can
        be used as the path and query string for the next page to ensure stable ordering.

        Args:
            query: See our help center article on `search operators
                <https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators>`__
            page_size: The number of search results to include in a page. Minimum of 1 and maximum of 250.
            detail: The amount of detail included in each result item. "full" will include all descriptions and comments
                and more fields on related items such as pull requests, branches and tasks. "slim" omits larger fulltext
                fields such as descriptions and comments and only references related items by id. The default is "full".
            next_: The next page token.
            entity_types: A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration,
                objective, story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/search/stories"),
            query_params=[
                param[str]("query", query),
                param[int | None]("page_size", page_size),
                param[DetailOrStr | None]("detail", detail),
                param[str | None]("next", next_),
                param[list[EntityTypeOrStr] | None]("entity_types", entity_types),
            ],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[StorySearchResults],
            error_mapper=search_stories_error_mapper,
            request_options=request_options,
        )
