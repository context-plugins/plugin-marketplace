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
from ..errors.get_dataset_error import GetDatasetErrorBody, get_dataset_error_mapper
from ..errors.get_library_error import GetLibraryErrorBody, get_library_error_mapper
from ..errors.list_libraries_error import ListLibrariesErrorBody, list_libraries_error_mapper
from ..models.dataset_detail import DatasetDetail
from ..models.library_detail import LibraryDetail
from ..models.library_list import LibraryList
from ..server.server import Server


class Libraries:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = LibrariesWithRawResponse(client, server, auth)

    def get_dataset(self, id_: int, *, request_options: RequestOptionsOrDict | None = None) -> DatasetDetail:
        """Returns a dataset + a reference to its parent library, in a single response. Saves a round-trip when you have
        a dataset ID from a search result and need its context.

        Args:
            id_: Numeric dataset ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Dataset + parent library reference

        Raises:
            ApiError: Missing or invalid API key No active subscription (paid endpoint requires a subscription) Endpoint
                not available on the caller's plan Dataset not found, or private and caller is not a member of the
                parent library Monthly quota exhausted (response includes ``usage: { current, limit }``) ``error`` is
                ``ApiErrorBody | RawError``."""
        return unwrap(self._with_raw_response.get_dataset(id_, request_options=request_options))

    def get_library(self, slug: str, *, request_options: RequestOptionsOrDict | None = None) -> LibraryDetail:
        """Returns one library + the datasets the calling user can see. Public datasets are always returned;
        workspace-scoped datasets are returned only to members.

        Args:
            slug: Library slug (e.g. ``audioscrape``)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Library + visible datasets

        Raises:
            ApiError: Missing or invalid API key No active subscription (paid endpoint requires a subscription) Endpoint
                not available on the caller's plan Library not found (or private and caller not a member) Monthly quota
                exhausted (response includes ``usage: { current, limit }``) ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(self._with_raw_response.get_library(slug, request_options=request_options))

    def list_libraries(self, *, request_options: RequestOptionsOrDict | None = None) -> LibraryList:
        """Returns every public library on Audioscrape, ordered by subscriber count. The ``is_subscribed`` field on each
        entry tells you whether the calling user is already a member.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            All public libraries

        Raises:
            ApiError: Missing or invalid API key No active subscription (paid endpoint requires a subscription) Endpoint
                not available on the caller's plan Monthly quota exhausted (response includes ``usage: { current, limit
                }``) ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(self._with_raw_response.list_libraries(request_options=request_options))

    @property
    def with_raw_response(self) -> LibrariesWithRawResponse:
        return self._with_raw_response


class AsyncLibraries:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncLibrariesWithRawResponse(client, server, auth)

    async def get_dataset(self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None) -> DatasetDetail:
        """Returns a dataset + a reference to its parent library, in a single response. Saves a round-trip when you have
        a dataset ID from a search result and need its context.

        Args:
            id_: Numeric dataset ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Dataset + parent library reference

        Raises:
            ApiError: Missing or invalid API key No active subscription (paid endpoint requires a subscription) Endpoint
                not available on the caller's plan Dataset not found, or private and caller is not a member of the
                parent library Monthly quota exhausted (response includes ``usage: { current, limit }``) ``error`` is
                ``ApiErrorBody | RawError``."""
        return unwrap(await self._with_raw_response.get_dataset(id_, request_options=request_options))

    async def get_library(
        self, slug: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> LibraryDetail:
        """Returns one library + the datasets the calling user can see. Public datasets are always returned;
        workspace-scoped datasets are returned only to members.

        Args:
            slug: Library slug (e.g. ``audioscrape``)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Library + visible datasets

        Raises:
            ApiError: Missing or invalid API key No active subscription (paid endpoint requires a subscription) Endpoint
                not available on the caller's plan Library not found (or private and caller not a member) Monthly quota
                exhausted (response includes ``usage: { current, limit }``) ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(await self._with_raw_response.get_library(slug, request_options=request_options))

    async def list_libraries(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> LibraryList:
        """Returns every public library on Audioscrape, ordered by subscriber count. The ``is_subscribed`` field on each
        entry tells you whether the calling user is already a member.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            All public libraries

        Raises:
            ApiError: Missing or invalid API key No active subscription (paid endpoint requires a subscription) Endpoint
                not available on the caller's plan Monthly quota exhausted (response includes ``usage: { current, limit
                }``) ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(await self._with_raw_response.list_libraries(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncLibrariesWithRawResponse:
        return self._with_raw_response


class LibrariesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_dataset(
        self, id_: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DatasetDetail, GetDatasetErrorBody]:
        """Returns a dataset + a reference to its parent library, in a single response. Saves a round-trip when you have
        a dataset ID from a search result and need its context.

        Args:
            id_: Numeric dataset ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/datasets/{id}"),
            path_params=[param[int]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[DatasetDetail],
            error_mapper=get_dataset_error_mapper,
            request_options=request_options,
        )

    def get_library(
        self, slug: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[LibraryDetail, GetLibraryErrorBody]:
        """Returns one library + the datasets the calling user can see. Public datasets are always returned;
        workspace-scoped datasets are returned only to members.

        Args:
            slug: Library slug (e.g. ``audioscrape``)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/libraries/{slug}"),
            path_params=[param[str]("slug", slug)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[LibraryDetail],
            error_mapper=get_library_error_mapper,
            request_options=request_options,
        )

    def list_libraries(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[LibraryList, ListLibrariesErrorBody]:
        """Returns every public library on Audioscrape, ordered by subscriber count. The ``is_subscribed`` field on each
        entry tells you whether the calling user is already a member.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/libraries"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[LibraryList],
            error_mapper=list_libraries_error_mapper,
            request_options=request_options,
        )


class AsyncLibrariesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_dataset(
        self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DatasetDetail, GetDatasetErrorBody]:
        """Returns a dataset + a reference to its parent library, in a single response. Saves a round-trip when you have
        a dataset ID from a search result and need its context.

        Args:
            id_: Numeric dataset ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/datasets/{id}"),
            path_params=[param[int]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[DatasetDetail],
            error_mapper=get_dataset_error_mapper,
            request_options=request_options,
        )

    async def get_library(
        self, slug: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[LibraryDetail, GetLibraryErrorBody]:
        """Returns one library + the datasets the calling user can see. Public datasets are always returned;
        workspace-scoped datasets are returned only to members.

        Args:
            slug: Library slug (e.g. ``audioscrape``)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/libraries/{slug}"),
            path_params=[param[str]("slug", slug)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[LibraryDetail],
            error_mapper=get_library_error_mapper,
            request_options=request_options,
        )

    async def list_libraries(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[LibraryList, ListLibrariesErrorBody]:
        """Returns every public library on Audioscrape, ordered by subscriber count. The ``is_subscribed`` field on each
        entry tells you whether the calling user is already a member.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/libraries"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[LibraryList],
            error_mapper=list_libraries_error_mapper,
            request_options=request_options,
        )
