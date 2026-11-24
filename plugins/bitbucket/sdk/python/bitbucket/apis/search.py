from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
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
from ..errors.search_account_error import SearchAccountErrorBody, search_account_error_mapper
from ..errors.search_team_error import SearchTeamErrorBody, search_team_error_mapper
from ..errors.search_workspace_error import SearchWorkspaceErrorBody, search_workspace_error_mapper
from ..models.search_result_page import SearchResultPage
from ..server.server import Server


class Search:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SearchWithRawResponse(client, server, auth)

    def search_account(
        self,
        selected_user: str,
        search_query: str,
        *,
        page: int | None = 1,
        pagelen: int | None = 10,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SearchResultPage:
        """Search for code in the repositories of the specified user.

        Note that searches can match in the file's text (``content_matches``), the path (``path_matches``), or both.

        You can use the same syntax for the search query as in the UI. E.g. to search for "foo" only within the
        repository "demo", use the query parameter ``search_query=foo+repo:demo``.

        Similar to other APIs, you can request more fields using a ``fields`` query parameter. E.g. to get some more
        information about the repository of matched files, use the query parameter
        ``search_query=foo&fields=%2Bvalues.file.commit.repository`` (the ``%2B`` is a URL-encoded ``+``).

        Args:
            selected_user: Either the UUID of the account surrounded by curly-braces, for example ``{account UUID}``, OR
                an Atlassian Account ID.
            search_query: The search query
            page: Which page of the search results to retrieve
            pagelen: How many search results to retrieve per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful search

        Raises:
            ApiError: If the search request was invalid due to one of the following reasons: * the specified type of
                target account doesn''t match the actual account type; * malformed pagination properties; * missing or
                malformed search query, in the latter case an error key will be returned in ``error.data.key`` property.
                Search is not enabled for the requested user, navigate to https://bitbucket.org/search to turn it on Too
                many requests, try again later ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.search_account(
                selected_user, search_query, page=page, pagelen=pagelen, request_options=request_options
            ),
        )

    def search_team(
        self,
        username: str,
        search_query: str,
        *,
        page: int | None = 1,
        pagelen: int | None = 10,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SearchResultPage:
        """Search for code in the repositories of the specified team.

        Note that searches can match in the file's text (``content_matches``), the path (``path_matches``), or both.

        You can use the same syntax for the search query as in the UI. E.g. to search for "foo" only within the
        repository "demo", use the query parameter ``search_query=foo+repo:demo``.

        Similar to other APIs, you can request more fields using a ``fields`` query parameter. E.g. to get some more
        information about the repository of matched files, use the query parameter
        ``search_query=foo&fields=%2Bvalues.file.commit.repository`` (the ``%2B`` is a URL-encoded ``+``).

        Try ``fields=%2Bvalues.*.*.*.*`` to get an idea what's possible.

        Args:
            username: The account to search in; either the username or the UUID in curly braces
            search_query: The search query
            page: Which page of the search results to retrieve
            pagelen: How many search results to retrieve per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful search

        Raises:
            ApiError: If the search request was invalid due to one of the following reasons: * the specified type of
                target account doesn''t match the actual account type; * malformed pagination properties; * missing or
                malformed search query, in the latter case an error key will be returned in ``error.data.key`` property.
                Search is not enabled for the requested team, navigate to https://bitbucket.org/search to turn it on Too
                many requests, try again later ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.search_team(
                username, search_query, page=page, pagelen=pagelen, request_options=request_options
            ),
        )

    def search_workspace(
        self,
        workspace: str,
        search_query: str,
        *,
        page: int | None = 1,
        pagelen: int | None = 10,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SearchResultPage:
        """Search for code in the repositories of the specified workspace.

        Note that searches can match in the file's text (``content_matches``), the path (``path_matches``), or both.

        You can use the same syntax for the search query as in the UI. E.g. to search for "foo" only within the
        repository "demo", use the query parameter ``search_query=foo+repo:demo``.

        Similar to other APIs, you can request more fields using a ``fields`` query parameter. E.g. to get some more
        information about the repository of matched files, use the query parameter
        ``search_query=foo&fields=%2Bvalues.file.commit.repository`` (the ``%2B`` is a URL-encoded ``+``).

        Try ``fields=%2Bvalues.*.*.*.*`` to get an idea what's possible.

        Args:
            workspace: The workspace to search in; either the slug or the UUID in curly braces
            search_query: The search query
            page: Which page of the search results to retrieve
            pagelen: How many search results to retrieve per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful search

        Raises:
            ApiError: If the search request was invalid due to one of the following reasons: * the specified type of
                target account doesn''t match the actual account type; * malformed pagination properties; * missing or
                malformed search query, in the latter case an error key will be returned in ``error.data.key`` property.
                Search is not enabled for the requested workspace, navigate to https://bitbucket.org/search to turn it
                on Too many requests, try again later ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.search_workspace(
                workspace, search_query, page=page, pagelen=pagelen, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> SearchWithRawResponse:
        return self._with_raw_response


class AsyncSearch:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSearchWithRawResponse(client, server, auth)

    async def search_account(
        self,
        selected_user: str,
        search_query: str,
        *,
        page: int | None = 1,
        pagelen: int | None = 10,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SearchResultPage:
        """Search for code in the repositories of the specified user.

        Note that searches can match in the file's text (``content_matches``), the path (``path_matches``), or both.

        You can use the same syntax for the search query as in the UI. E.g. to search for "foo" only within the
        repository "demo", use the query parameter ``search_query=foo+repo:demo``.

        Similar to other APIs, you can request more fields using a ``fields`` query parameter. E.g. to get some more
        information about the repository of matched files, use the query parameter
        ``search_query=foo&fields=%2Bvalues.file.commit.repository`` (the ``%2B`` is a URL-encoded ``+``).

        Args:
            selected_user: Either the UUID of the account surrounded by curly-braces, for example ``{account UUID}``, OR
                an Atlassian Account ID.
            search_query: The search query
            page: Which page of the search results to retrieve
            pagelen: How many search results to retrieve per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful search

        Raises:
            ApiError: If the search request was invalid due to one of the following reasons: * the specified type of
                target account doesn''t match the actual account type; * malformed pagination properties; * missing or
                malformed search query, in the latter case an error key will be returned in ``error.data.key`` property.
                Search is not enabled for the requested user, navigate to https://bitbucket.org/search to turn it on Too
                many requests, try again later ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.search_account(
                selected_user, search_query, page=page, pagelen=pagelen, request_options=request_options
            ),
        )

    async def search_team(
        self,
        username: str,
        search_query: str,
        *,
        page: int | None = 1,
        pagelen: int | None = 10,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SearchResultPage:
        """Search for code in the repositories of the specified team.

        Note that searches can match in the file's text (``content_matches``), the path (``path_matches``), or both.

        You can use the same syntax for the search query as in the UI. E.g. to search for "foo" only within the
        repository "demo", use the query parameter ``search_query=foo+repo:demo``.

        Similar to other APIs, you can request more fields using a ``fields`` query parameter. E.g. to get some more
        information about the repository of matched files, use the query parameter
        ``search_query=foo&fields=%2Bvalues.file.commit.repository`` (the ``%2B`` is a URL-encoded ``+``).

        Try ``fields=%2Bvalues.*.*.*.*`` to get an idea what's possible.

        Args:
            username: The account to search in; either the username or the UUID in curly braces
            search_query: The search query
            page: Which page of the search results to retrieve
            pagelen: How many search results to retrieve per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful search

        Raises:
            ApiError: If the search request was invalid due to one of the following reasons: * the specified type of
                target account doesn''t match the actual account type; * malformed pagination properties; * missing or
                malformed search query, in the latter case an error key will be returned in ``error.data.key`` property.
                Search is not enabled for the requested team, navigate to https://bitbucket.org/search to turn it on Too
                many requests, try again later ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.search_team(
                username, search_query, page=page, pagelen=pagelen, request_options=request_options
            ),
        )

    async def search_workspace(
        self,
        workspace: str,
        search_query: str,
        *,
        page: int | None = 1,
        pagelen: int | None = 10,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SearchResultPage:
        """Search for code in the repositories of the specified workspace.

        Note that searches can match in the file's text (``content_matches``), the path (``path_matches``), or both.

        You can use the same syntax for the search query as in the UI. E.g. to search for "foo" only within the
        repository "demo", use the query parameter ``search_query=foo+repo:demo``.

        Similar to other APIs, you can request more fields using a ``fields`` query parameter. E.g. to get some more
        information about the repository of matched files, use the query parameter
        ``search_query=foo&fields=%2Bvalues.file.commit.repository`` (the ``%2B`` is a URL-encoded ``+``).

        Try ``fields=%2Bvalues.*.*.*.*`` to get an idea what's possible.

        Args:
            workspace: The workspace to search in; either the slug or the UUID in curly braces
            search_query: The search query
            page: Which page of the search results to retrieve
            pagelen: How many search results to retrieve per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful search

        Raises:
            ApiError: If the search request was invalid due to one of the following reasons: * the specified type of
                target account doesn''t match the actual account type; * malformed pagination properties; * missing or
                malformed search query, in the latter case an error key will be returned in ``error.data.key`` property.
                Search is not enabled for the requested workspace, navigate to https://bitbucket.org/search to turn it
                on Too many requests, try again later ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.search_workspace(
                workspace, search_query, page=page, pagelen=pagelen, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncSearchWithRawResponse:
        return self._with_raw_response


class SearchWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def search_account(
        self,
        selected_user: str,
        search_query: str,
        *,
        page: int | None = 1,
        pagelen: int | None = 10,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SearchResultPage, SearchAccountErrorBody]:
        """Search for code in the repositories of the specified user.

        Note that searches can match in the file's text (``content_matches``), the path (``path_matches``), or both.

        You can use the same syntax for the search query as in the UI. E.g. to search for "foo" only within the
        repository "demo", use the query parameter ``search_query=foo+repo:demo``.

        Similar to other APIs, you can request more fields using a ``fields`` query parameter. E.g. to get some more
        information about the repository of matched files, use the query parameter
        ``search_query=foo&fields=%2Bvalues.file.commit.repository`` (the ``%2B`` is a URL-encoded ``+``).

        Args:
            selected_user: Either the UUID of the account surrounded by curly-braces, for example ``{account UUID}``, OR
                an Atlassian Account ID.
            search_query: The search query
            page: Which page of the search results to retrieve
            pagelen: How many search results to retrieve per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{selected_user}/search/code"),
            path_params=[param[str]("selected_user", selected_user)],
            query_params=[
                param[str]("search_query", search_query),
                param[int | None]("page", page),
                param[int | None]("pagelen", pagelen),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[SearchResultPage],
            error_mapper=search_account_error_mapper,
            request_options=request_options,
        )

    def search_team(
        self,
        username: str,
        search_query: str,
        *,
        page: int | None = 1,
        pagelen: int | None = 10,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SearchResultPage, SearchTeamErrorBody]:
        """Search for code in the repositories of the specified team.

        Note that searches can match in the file's text (``content_matches``), the path (``path_matches``), or both.

        You can use the same syntax for the search query as in the UI. E.g. to search for "foo" only within the
        repository "demo", use the query parameter ``search_query=foo+repo:demo``.

        Similar to other APIs, you can request more fields using a ``fields`` query parameter. E.g. to get some more
        information about the repository of matched files, use the query parameter
        ``search_query=foo&fields=%2Bvalues.file.commit.repository`` (the ``%2B`` is a URL-encoded ``+``).

        Try ``fields=%2Bvalues.*.*.*.*`` to get an idea what's possible.

        Args:
            username: The account to search in; either the username or the UUID in curly braces
            search_query: The search query
            page: Which page of the search results to retrieve
            pagelen: How many search results to retrieve per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/teams/{username}/search/code"),
            path_params=[param[str]("username", username)],
            query_params=[
                param[str]("search_query", search_query),
                param[int | None]("page", page),
                param[int | None]("pagelen", pagelen),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[SearchResultPage],
            error_mapper=search_team_error_mapper,
            request_options=request_options,
        )

    def search_workspace(
        self,
        workspace: str,
        search_query: str,
        *,
        page: int | None = 1,
        pagelen: int | None = 10,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SearchResultPage, SearchWorkspaceErrorBody]:
        """Search for code in the repositories of the specified workspace.

        Note that searches can match in the file's text (``content_matches``), the path (``path_matches``), or both.

        You can use the same syntax for the search query as in the UI. E.g. to search for "foo" only within the
        repository "demo", use the query parameter ``search_query=foo+repo:demo``.

        Similar to other APIs, you can request more fields using a ``fields`` query parameter. E.g. to get some more
        information about the repository of matched files, use the query parameter
        ``search_query=foo&fields=%2Bvalues.file.commit.repository`` (the ``%2B`` is a URL-encoded ``+``).

        Try ``fields=%2Bvalues.*.*.*.*`` to get an idea what's possible.

        Args:
            workspace: The workspace to search in; either the slug or the UUID in curly braces
            search_query: The search query
            page: Which page of the search results to retrieve
            pagelen: How many search results to retrieve per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/{workspace}/search/code"),
            path_params=[param[str]("workspace", workspace)],
            query_params=[
                param[str]("search_query", search_query),
                param[int | None]("page", page),
                param[int | None]("pagelen", pagelen),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[SearchResultPage],
            error_mapper=search_workspace_error_mapper,
            request_options=request_options,
        )


class AsyncSearchWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def search_account(
        self,
        selected_user: str,
        search_query: str,
        *,
        page: int | None = 1,
        pagelen: int | None = 10,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SearchResultPage, SearchAccountErrorBody]:
        """Search for code in the repositories of the specified user.

        Note that searches can match in the file's text (``content_matches``), the path (``path_matches``), or both.

        You can use the same syntax for the search query as in the UI. E.g. to search for "foo" only within the
        repository "demo", use the query parameter ``search_query=foo+repo:demo``.

        Similar to other APIs, you can request more fields using a ``fields`` query parameter. E.g. to get some more
        information about the repository of matched files, use the query parameter
        ``search_query=foo&fields=%2Bvalues.file.commit.repository`` (the ``%2B`` is a URL-encoded ``+``).

        Args:
            selected_user: Either the UUID of the account surrounded by curly-braces, for example ``{account UUID}``, OR
                an Atlassian Account ID.
            search_query: The search query
            page: Which page of the search results to retrieve
            pagelen: How many search results to retrieve per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{selected_user}/search/code"),
            path_params=[param[str]("selected_user", selected_user)],
            query_params=[
                param[str]("search_query", search_query),
                param[int | None]("page", page),
                param[int | None]("pagelen", pagelen),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[SearchResultPage],
            error_mapper=search_account_error_mapper,
            request_options=request_options,
        )

    async def search_team(
        self,
        username: str,
        search_query: str,
        *,
        page: int | None = 1,
        pagelen: int | None = 10,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SearchResultPage, SearchTeamErrorBody]:
        """Search for code in the repositories of the specified team.

        Note that searches can match in the file's text (``content_matches``), the path (``path_matches``), or both.

        You can use the same syntax for the search query as in the UI. E.g. to search for "foo" only within the
        repository "demo", use the query parameter ``search_query=foo+repo:demo``.

        Similar to other APIs, you can request more fields using a ``fields`` query parameter. E.g. to get some more
        information about the repository of matched files, use the query parameter
        ``search_query=foo&fields=%2Bvalues.file.commit.repository`` (the ``%2B`` is a URL-encoded ``+``).

        Try ``fields=%2Bvalues.*.*.*.*`` to get an idea what's possible.

        Args:
            username: The account to search in; either the username or the UUID in curly braces
            search_query: The search query
            page: Which page of the search results to retrieve
            pagelen: How many search results to retrieve per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/teams/{username}/search/code"),
            path_params=[param[str]("username", username)],
            query_params=[
                param[str]("search_query", search_query),
                param[int | None]("page", page),
                param[int | None]("pagelen", pagelen),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[SearchResultPage],
            error_mapper=search_team_error_mapper,
            request_options=request_options,
        )

    async def search_workspace(
        self,
        workspace: str,
        search_query: str,
        *,
        page: int | None = 1,
        pagelen: int | None = 10,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SearchResultPage, SearchWorkspaceErrorBody]:
        """Search for code in the repositories of the specified workspace.

        Note that searches can match in the file's text (``content_matches``), the path (``path_matches``), or both.

        You can use the same syntax for the search query as in the UI. E.g. to search for "foo" only within the
        repository "demo", use the query parameter ``search_query=foo+repo:demo``.

        Similar to other APIs, you can request more fields using a ``fields`` query parameter. E.g. to get some more
        information about the repository of matched files, use the query parameter
        ``search_query=foo&fields=%2Bvalues.file.commit.repository`` (the ``%2B`` is a URL-encoded ``+``).

        Try ``fields=%2Bvalues.*.*.*.*`` to get an idea what's possible.

        Args:
            workspace: The workspace to search in; either the slug or the UUID in curly braces
            search_query: The search query
            page: Which page of the search results to retrieve
            pagelen: How many search results to retrieve per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/{workspace}/search/code"),
            path_params=[param[str]("workspace", workspace)],
            query_params=[
                param[str]("search_query", search_query),
                param[int | None]("page", page),
                param[int | None]("pagelen", pagelen),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[SearchResultPage],
            error_mapper=search_workspace_error_mapper,
            request_options=request_options,
        )
