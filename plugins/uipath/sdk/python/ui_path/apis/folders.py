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
from ..errors.list_folders_error import ListFoldersErrorBody, list_folders_error_mapper
from ..models.o_data_folder_collection import ODataFolderCollection
from ..server.server import Server


class Folders:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = FoldersWithRawResponse(client, server, auth)

    def list_folders(
        self,
        *,
        filter_: str | None = None,
        top: int | None = None,
        skip: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ODataFolderCollection:
        """Retrieves a list of organizational folders accessible to the authenticated user. Folders group automation
        resources such as processes, robots, assets, and queues. Each folder has a unique ID used in the
        X-UIPATH-OrganizationUnitId request header.

        Args:
            filter_: OData filter expression to narrow results (e.g., State eq 'Running')
            top: Maximum number of records to return (default 100, max 1000)
            skip: Number of records to skip for pagination
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of folders

        Raises:
            ApiError: The request lacks valid authentication credentials ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_folders(filter_=filter_, top=top, skip=skip, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> FoldersWithRawResponse:
        return self._with_raw_response


class AsyncFolders:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncFoldersWithRawResponse(client, server, auth)

    async def list_folders(
        self,
        *,
        filter_: str | None = None,
        top: int | None = None,
        skip: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ODataFolderCollection:
        """Retrieves a list of organizational folders accessible to the authenticated user. Folders group automation
        resources such as processes, robots, assets, and queues. Each folder has a unique ID used in the
        X-UIPATH-OrganizationUnitId request header.

        Args:
            filter_: OData filter expression to narrow results (e.g., State eq 'Running')
            top: Maximum number of records to return (default 100, max 1000)
            skip: Number of records to skip for pagination
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of folders

        Raises:
            ApiError: The request lacks valid authentication credentials ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_folders(
                filter_=filter_, top=top, skip=skip, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncFoldersWithRawResponse:
        return self._with_raw_response


class FoldersWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_folders(
        self,
        *,
        filter_: str | None = None,
        top: int | None = None,
        skip: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ODataFolderCollection, ListFoldersErrorBody]:
        """Retrieves a list of organizational folders accessible to the authenticated user. Folders group automation
        resources such as processes, robots, assets, and queues. Each folder has a unique ID used in the
        X-UIPATH-OrganizationUnitId request header.

        Args:
            filter_: OData filter expression to narrow results (e.g., State eq 'Running')
            top: Maximum number of records to return (default 100, max 1000)
            skip: Number of records to skip for pagination
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/odata/Folders"),
            query_params=[
                param[str | None]("$filter", filter_), param[int | None]("$top", top), param[int | None]("$skip", skip)
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ODataFolderCollection],
            error_mapper=list_folders_error_mapper,
            request_options=request_options,
        )


class AsyncFoldersWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_folders(
        self,
        *,
        filter_: str | None = None,
        top: int | None = None,
        skip: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ODataFolderCollection, ListFoldersErrorBody]:
        """Retrieves a list of organizational folders accessible to the authenticated user. Folders group automation
        resources such as processes, robots, assets, and queues. Each folder has a unique ID used in the
        X-UIPATH-OrganizationUnitId request header.

        Args:
            filter_: OData filter expression to narrow results (e.g., State eq 'Running')
            top: Maximum number of records to return (default 100, max 1000)
            skip: Number of records to skip for pagination
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/odata/Folders"),
            query_params=[
                param[str | None]("$filter", filter_), param[int | None]("$top", top), param[int | None]("$skip", skip)
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ODataFolderCollection],
            error_mapper=list_folders_error_mapper,
            request_options=request_options,
        )
