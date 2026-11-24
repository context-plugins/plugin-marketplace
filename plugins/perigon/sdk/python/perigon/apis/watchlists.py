from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_watchlist_error import CreateWatchlistErrorBody, create_watchlist_error_mapper
from ..errors.delete_watchlist_error import DeleteWatchlistErrorBody, delete_watchlist_error_mapper
from ..errors.get_watchlist_error import GetWatchlistErrorBody, get_watchlist_error_mapper
from ..errors.list_watchlists_error import ListWatchlistsErrorBody, list_watchlists_error_mapper
from ..errors.resolve_watchlists_error import ResolveWatchlistsErrorBody, resolve_watchlists_error_mapper
from ..errors.update_watchlist_error import UpdateWatchlistErrorBody, update_watchlist_error_mapper
from ..models.create_watchlist_params import CreateWatchlistParams, CreateWatchlistParamsDict
from ..models.enums.nulls import NullsOrStr
from ..models.enums.sort_order import SortOrderOrStr
from ..models.enums.watchlist_sort_by import WatchlistSortByOrStr
from ..models.update_watchlist_params import UpdateWatchlistParams, UpdateWatchlistParamsDict
from ..models.watchlist_list_result import WatchlistListResult
from ..models.watchlist_resolve_result import WatchlistResolveResult
from ..models.watchlist_result import WatchlistResult
from ..server.server import Server


class Watchlists:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = WatchlistsWithRawResponse(client, server, auth)

    def create_watchlist(
        self,
        body: CreateWatchlistParams | CreateWatchlistParamsDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> WatchlistResult:
        """Create a new watchlist under the organization associated with the API key. A watchlist can contain up to 100
        combined people and companies.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.create_watchlist(body, request_options=request_options))

    def delete_watchlist(self, id_: int, *, request_options: RequestOptionsOrDict | None = None) -> WatchlistResult:
        """Delete a watchlist owned by the organization associated with the API key. A watchlist cannot be deleted if it
        is attached to active monitors.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.delete_watchlist(id_, request_options=request_options))

    def get_watchlist(self, id_: int, *, request_options: RequestOptionsOrDict | None = None) -> WatchlistResult:
        """Retrieve a watchlist by ID. Only returns watchlists owned by the organization associated with the API key.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_watchlist(id_, request_options=request_options))

    def list_watchlists(
        self,
        sort_by: WatchlistSortByOrStr,
        sort_order: SortOrderOrStr,
        *,
        name: str | None = None,
        page: int | None = 0,
        size: int | None = 10,
        nulls: NullsOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> WatchlistListResult:
        """List watchlists owned by the organization associated with the API key, as well as publicly visible
        watchlists. Supports filtering by name.

        Args:
            sort_by: Value sent with the request.
            sort_order: Required direction used to sort results. Accepts asc or desc.
            name: Filter watchlists by name (case-insensitive, partial match)
            page: Zero-based page number to retrieve. Defaults to 0.
            size: Number of results per page. Must be between 1 and 100; defaults to 10.
            nulls: Placement of null values in sorted results. Accepts first or last.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_watchlists(
                sort_by, sort_order, name=name, page=page, size=size, nulls=nulls, request_options=request_options
            ),
        )

    def resolve_watchlists(
        self, *, name: list[str] | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> WatchlistResolveResult:
        """Resolve watchlists by name. For each name, returns the organization's private watchlist if one exists,
        otherwise falls back to the matching public watchlist.

        Args:
            name: Watchlist names to resolve (max 100)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.resolve_watchlists(name=name, request_options=request_options))

    def update_watchlist(
        self,
        id_: int,
        body: UpdateWatchlistParams | UpdateWatchlistParamsDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> WatchlistResult:
        """Partially update a watchlist owned by the organization associated with the API key. Only provided fields will
        be updated.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.update_watchlist(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> WatchlistsWithRawResponse:
        return self._with_raw_response


class AsyncWatchlists:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncWatchlistsWithRawResponse(client, server, auth)

    async def create_watchlist(
        self,
        body: CreateWatchlistParams | CreateWatchlistParamsDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> WatchlistResult:
        """Create a new watchlist under the organization associated with the API key. A watchlist can contain up to 100
        combined people and companies.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.create_watchlist(body, request_options=request_options))

    async def delete_watchlist(
        self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> WatchlistResult:
        """Delete a watchlist owned by the organization associated with the API key. A watchlist cannot be deleted if it
        is attached to active monitors.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.delete_watchlist(id_, request_options=request_options))

    async def get_watchlist(
        self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> WatchlistResult:
        """Retrieve a watchlist by ID. Only returns watchlists owned by the organization associated with the API key.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_watchlist(id_, request_options=request_options))

    async def list_watchlists(
        self,
        sort_by: WatchlistSortByOrStr,
        sort_order: SortOrderOrStr,
        *,
        name: str | None = None,
        page: int | None = 0,
        size: int | None = 10,
        nulls: NullsOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> WatchlistListResult:
        """List watchlists owned by the organization associated with the API key, as well as publicly visible
        watchlists. Supports filtering by name.

        Args:
            sort_by: Value sent with the request.
            sort_order: Required direction used to sort results. Accepts asc or desc.
            name: Filter watchlists by name (case-insensitive, partial match)
            page: Zero-based page number to retrieve. Defaults to 0.
            size: Number of results per page. Must be between 1 and 100; defaults to 10.
            nulls: Placement of null values in sorted results. Accepts first or last.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_watchlists(
                sort_by, sort_order, name=name, page=page, size=size, nulls=nulls, request_options=request_options
            ),
        )

    async def resolve_watchlists(
        self, *, name: list[str] | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> WatchlistResolveResult:
        """Resolve watchlists by name. For each name, returns the organization's private watchlist if one exists,
        otherwise falls back to the matching public watchlist.

        Args:
            name: Watchlist names to resolve (max 100)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.resolve_watchlists(name=name, request_options=request_options))

    async def update_watchlist(
        self,
        id_: int,
        body: UpdateWatchlistParams | UpdateWatchlistParamsDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> WatchlistResult:
        """Partially update a watchlist owned by the organization associated with the API key. Only provided fields will
        be updated.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.update_watchlist(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncWatchlistsWithRawResponse:
        return self._with_raw_response


class WatchlistsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_watchlist(
        self,
        body: CreateWatchlistParams | CreateWatchlistParamsDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[WatchlistResult, CreateWatchlistErrorBody]:
        """Create a new watchlist under the organization associated with the API key. A watchlist can contain up to 100
        combined people and companies.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/api/watchlists"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateWatchlistParams | CreateWatchlistParamsDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[WatchlistResult],
            error_mapper=create_watchlist_error_mapper,
            request_options=request_options,
        )

    def delete_watchlist(
        self, id_: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WatchlistResult, DeleteWatchlistErrorBody]:
        """Delete a watchlist owned by the organization associated with the API key. A watchlist cannot be deleted if it
        is attached to active monitors.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/api/watchlists/{id}"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[WatchlistResult],
            error_mapper=delete_watchlist_error_mapper,
            request_options=request_options,
        )

    def get_watchlist(
        self, id_: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WatchlistResult, GetWatchlistErrorBody]:
        """Retrieve a watchlist by ID. Only returns watchlists owned by the organization associated with the API key.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/api/watchlists/{id}"),
            path_params=[param[int]("id", id_)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[WatchlistResult],
            error_mapper=get_watchlist_error_mapper,
            request_options=request_options,
        )

    def list_watchlists(
        self,
        sort_by: WatchlistSortByOrStr,
        sort_order: SortOrderOrStr,
        *,
        name: str | None = None,
        page: int | None = 0,
        size: int | None = 10,
        nulls: NullsOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[WatchlistListResult, ListWatchlistsErrorBody]:
        """List watchlists owned by the organization associated with the API key, as well as publicly visible
        watchlists. Supports filtering by name.

        Args:
            sort_by: Value sent with the request.
            sort_order: Required direction used to sort results. Accepts asc or desc.
            name: Filter watchlists by name (case-insensitive, partial match)
            page: Zero-based page number to retrieve. Defaults to 0.
            size: Number of results per page. Must be between 1 and 100; defaults to 10.
            nulls: Placement of null values in sorted results. Accepts first or last.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/api/watchlists"),
            query_params=[
                param[WatchlistSortByOrStr]("sortBy", sort_by),
                param[SortOrderOrStr]("sortOrder", sort_order),
                param[str | None]("name", name),
                param[int | None]("page", page),
                param[int | None]("size", size),
                param[NullsOrStr | None]("nulls", nulls),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[WatchlistListResult],
            error_mapper=list_watchlists_error_mapper,
            request_options=request_options,
        )

    def resolve_watchlists(
        self, *, name: list[str] | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WatchlistResolveResult, ResolveWatchlistsErrorBody]:
        """Resolve watchlists by name. For each name, returns the organization's private watchlist if one exists,
        otherwise falls back to the matching public watchlist.

        Args:
            name: Watchlist names to resolve (max 100)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/api/watchlists/resolve"),
            query_params=[param[list[str] | None]("name", name)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[WatchlistResolveResult],
            error_mapper=resolve_watchlists_error_mapper,
            request_options=request_options,
        )

    def update_watchlist(
        self,
        id_: int,
        body: UpdateWatchlistParams | UpdateWatchlistParamsDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[WatchlistResult, UpdateWatchlistErrorBody]:
        """Partially update a watchlist owned by the organization associated with the API key. Only provided fields will
        be updated.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/api/watchlists/{id}"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateWatchlistParams | UpdateWatchlistParamsDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[WatchlistResult],
            error_mapper=update_watchlist_error_mapper,
            request_options=request_options,
        )


class AsyncWatchlistsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_watchlist(
        self,
        body: CreateWatchlistParams | CreateWatchlistParamsDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[WatchlistResult, CreateWatchlistErrorBody]:
        """Create a new watchlist under the organization associated with the API key. A watchlist can contain up to 100
        combined people and companies.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/api/watchlists"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateWatchlistParams | CreateWatchlistParamsDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[WatchlistResult],
            error_mapper=create_watchlist_error_mapper,
            request_options=request_options,
        )

    async def delete_watchlist(
        self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WatchlistResult, DeleteWatchlistErrorBody]:
        """Delete a watchlist owned by the organization associated with the API key. A watchlist cannot be deleted if it
        is attached to active monitors.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/api/watchlists/{id}"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[WatchlistResult],
            error_mapper=delete_watchlist_error_mapper,
            request_options=request_options,
        )

    async def get_watchlist(
        self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WatchlistResult, GetWatchlistErrorBody]:
        """Retrieve a watchlist by ID. Only returns watchlists owned by the organization associated with the API key.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/api/watchlists/{id}"),
            path_params=[param[int]("id", id_)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[WatchlistResult],
            error_mapper=get_watchlist_error_mapper,
            request_options=request_options,
        )

    async def list_watchlists(
        self,
        sort_by: WatchlistSortByOrStr,
        sort_order: SortOrderOrStr,
        *,
        name: str | None = None,
        page: int | None = 0,
        size: int | None = 10,
        nulls: NullsOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[WatchlistListResult, ListWatchlistsErrorBody]:
        """List watchlists owned by the organization associated with the API key, as well as publicly visible
        watchlists. Supports filtering by name.

        Args:
            sort_by: Value sent with the request.
            sort_order: Required direction used to sort results. Accepts asc or desc.
            name: Filter watchlists by name (case-insensitive, partial match)
            page: Zero-based page number to retrieve. Defaults to 0.
            size: Number of results per page. Must be between 1 and 100; defaults to 10.
            nulls: Placement of null values in sorted results. Accepts first or last.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/api/watchlists"),
            query_params=[
                param[WatchlistSortByOrStr]("sortBy", sort_by),
                param[SortOrderOrStr]("sortOrder", sort_order),
                param[str | None]("name", name),
                param[int | None]("page", page),
                param[int | None]("size", size),
                param[NullsOrStr | None]("nulls", nulls),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[WatchlistListResult],
            error_mapper=list_watchlists_error_mapper,
            request_options=request_options,
        )

    async def resolve_watchlists(
        self, *, name: list[str] | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WatchlistResolveResult, ResolveWatchlistsErrorBody]:
        """Resolve watchlists by name. For each name, returns the organization's private watchlist if one exists,
        otherwise falls back to the matching public watchlist.

        Args:
            name: Watchlist names to resolve (max 100)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/api/watchlists/resolve"),
            query_params=[param[list[str] | None]("name", name)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[WatchlistResolveResult],
            error_mapper=resolve_watchlists_error_mapper,
            request_options=request_options,
        )

    async def update_watchlist(
        self,
        id_: int,
        body: UpdateWatchlistParams | UpdateWatchlistParamsDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[WatchlistResult, UpdateWatchlistErrorBody]:
        """Partially update a watchlist owned by the organization associated with the API key. Only provided fields will
        be updated.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/api/watchlists/{id}"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateWatchlistParams | UpdateWatchlistParamsDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[WatchlistResult],
            error_mapper=update_watchlist_error_mapper,
            request_options=request_options,
        )
