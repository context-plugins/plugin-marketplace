from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AllSchemes,
    AnySchemes,
    ApiResult,
    AsyncAllSchemes,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_folder_error import CreateFolderErrorBody, create_folder_error_mapper
from ..errors.delete_folder_error import DeleteFolderErrorBody, delete_folder_error_mapper
from ..errors.get_folder_error import GetFolderErrorBody, get_folder_error_mapper
from ..errors.list_folders_error import ListFoldersErrorBody, list_folders_error_mapper
from ..errors.update_folder_error import UpdateFolderErrorBody, update_folder_error_mapper
from ..models.analytics_v1_folders_response import AnalyticsV1FoldersResponse
from ..models.create_folder_request import CreateFolderRequest, CreateFolderRequestDict
from ..models.folder import Folder
from ..models.update_folder_request import UpdateFolderRequest, UpdateFolderRequestDict
from ..server.server import Server


class Folders:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = FoldersWithRawResponse(client, server, auth)

    def create_folder(
        self,
        body: CreateFolderRequest | CreateFolderRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Folder:
        """Creates a new Cloud Analytics folder.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created - The folder was created.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.create_folder(body, request_options=request_options))

    def delete_folder(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Deletes the specified folder. All nested folders will be deleted. Any reports or allocations contained in the
        folder are moved to the root.

        Args:
            id_: Folder ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content - Folder deleted.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.delete_folder(id_, request_options=request_options))

    def get_folder(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Folder:
        """Returns the specified Cloud Analytics folder.

        Args:
            id_: Folder ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Folder returned.

        Raises:
            ApiError: Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Not Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_folder(id_, request_options=request_options))

    def list_folders(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AnalyticsV1FoldersResponse:
        """Returns Cloud Analytics folders the current customer has access to. Folders are returned in id-ascending
        order.

        Args:
            max_results: The maximum number of results to return in a single page. Use the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - The request succeeded.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.list_folders(
                max_results=max_results, page_token=page_token, request_options=request_options
            ),
        )

    def update_folder(
        self,
        id_: str,
        body: UpdateFolderRequest | UpdateFolderRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Folder:
        """Updates the specified folder. All fields are optional. To reparent the folder, set ``parentFolderId`` to the
        target folder ID (use "root" for the top level). If a sibling at the target has the same name, the folder is
        auto-renamed. To move reports or allocations into or out of a folder, update the item's ``folderId`` field via
        the report or allocation PATCH endpoint.

        Args:
            id_: Folder ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Folder updated.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.update_folder(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> FoldersWithRawResponse:
        return self._with_raw_response


class AsyncFolders:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncFoldersWithRawResponse(client, server, auth)

    async def create_folder(
        self,
        body: CreateFolderRequest | CreateFolderRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Folder:
        """Creates a new Cloud Analytics folder.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created - The folder was created.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.create_folder(body, request_options=request_options))

    async def delete_folder(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Deletes the specified folder. All nested folders will be deleted. Any reports or allocations contained in the
        folder are moved to the root.

        Args:
            id_: Folder ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content - Folder deleted.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.delete_folder(id_, request_options=request_options))

    async def get_folder(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Folder:
        """Returns the specified Cloud Analytics folder.

        Args:
            id_: Folder ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Folder returned.

        Raises:
            ApiError: Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Not Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_folder(id_, request_options=request_options))

    async def list_folders(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AnalyticsV1FoldersResponse:
        """Returns Cloud Analytics folders the current customer has access to. Folders are returned in id-ascending
        order.

        Args:
            max_results: The maximum number of results to return in a single page. Use the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - The request succeeded.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.list_folders(
                max_results=max_results, page_token=page_token, request_options=request_options
            ),
        )

    async def update_folder(
        self,
        id_: str,
        body: UpdateFolderRequest | UpdateFolderRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Folder:
        """Updates the specified folder. All fields are optional. To reparent the folder, set ``parentFolderId`` to the
        target folder ID (use "root" for the top level). If a sibling at the target has the same name, the folder is
        auto-renamed. To move reports or allocations into or out of a folder, update the item's ``folderId`` field via
        the report or allocation PATCH endpoint.

        Args:
            id_: Folder ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Folder updated.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.update_folder(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncFoldersWithRawResponse:
        return self._with_raw_response


class FoldersWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_folder(
        self,
        body: CreateFolderRequest | CreateFolderRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Folder, CreateFolderErrorBody]:
        """Creates a new Cloud Analytics folder.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/analytics/v1/folders"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateFolderRequest | CreateFolderRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[Folder],
            error_mapper=create_folder_error_mapper,
            request_options=request_options,
        )

    def delete_folder(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteFolderErrorBody]:
        """Deletes the specified folder. All nested folders will be deleted. Any reports or allocations contained in the
        folder are moved to the root.

        Args:
            id_: Folder ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/analytics/v1/folders/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=empty_response,
            error_mapper=delete_folder_error_mapper,
            request_options=request_options,
        )

    def get_folder(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Folder, GetFolderErrorBody]:
        """Returns the specified Cloud Analytics folder.

        Args:
            id_: Folder ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/folders/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[Folder],
            error_mapper=get_folder_error_mapper,
            request_options=request_options,
        )

    def list_folders(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AnalyticsV1FoldersResponse, ListFoldersErrorBody]:
        """Returns Cloud Analytics folders the current customer has access to. Folders are returned in id-ascending
        order.

        Args:
            max_results: The maximum number of results to return in a single page. Use the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/folders"),
            query_params=[param[int | None]("maxResults", max_results), param[str | None]("pageToken", page_token)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[AnalyticsV1FoldersResponse],
            error_mapper=list_folders_error_mapper,
            request_options=request_options,
        )

    def update_folder(
        self,
        id_: str,
        body: UpdateFolderRequest | UpdateFolderRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Folder, UpdateFolderErrorBody]:
        """Updates the specified folder. All fields are optional. To reparent the folder, set ``parentFolderId`` to the
        target folder ID (use "root" for the top level). If a sibling at the target has the same name, the folder is
        auto-renamed. To move reports or allocations into or out of a folder, update the item's ``folderId`` field via
        the report or allocation PATCH endpoint.

        Args:
            id_: Folder ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/analytics/v1/folders/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateFolderRequest | UpdateFolderRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[Folder],
            error_mapper=update_folder_error_mapper,
            request_options=request_options,
        )


class AsyncFoldersWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_folder(
        self,
        body: CreateFolderRequest | CreateFolderRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Folder, CreateFolderErrorBody]:
        """Creates a new Cloud Analytics folder.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/analytics/v1/folders"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateFolderRequest | CreateFolderRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[Folder],
            error_mapper=create_folder_error_mapper,
            request_options=request_options,
        )

    async def delete_folder(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteFolderErrorBody]:
        """Deletes the specified folder. All nested folders will be deleted. Any reports or allocations contained in the
        folder are moved to the root.

        Args:
            id_: Folder ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/analytics/v1/folders/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_empty_response,
            error_mapper=delete_folder_error_mapper,
            request_options=request_options,
        )

    async def get_folder(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Folder, GetFolderErrorBody]:
        """Returns the specified Cloud Analytics folder.

        Args:
            id_: Folder ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/folders/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[Folder],
            error_mapper=get_folder_error_mapper,
            request_options=request_options,
        )

    async def list_folders(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AnalyticsV1FoldersResponse, ListFoldersErrorBody]:
        """Returns Cloud Analytics folders the current customer has access to. Folders are returned in id-ascending
        order.

        Args:
            max_results: The maximum number of results to return in a single page. Use the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/folders"),
            query_params=[param[int | None]("maxResults", max_results), param[str | None]("pageToken", page_token)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[AnalyticsV1FoldersResponse],
            error_mapper=list_folders_error_mapper,
            request_options=request_options,
        )

    async def update_folder(
        self,
        id_: str,
        body: UpdateFolderRequest | UpdateFolderRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Folder, UpdateFolderErrorBody]:
        """Updates the specified folder. All fields are optional. To reparent the folder, set ``parentFolderId`` to the
        target folder ID (use "root" for the top level). If a sibling at the target has the same name, the folder is
        auto-renamed. To move reports or allocations into or out of a folder, update the item's ``folderId`` field via
        the report or allocation PATCH endpoint.

        Args:
            id_: Folder ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/analytics/v1/folders/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateFolderRequest | UpdateFolderRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[Folder],
            error_mapper=update_folder_error_mapper,
            request_options=request_options,
        )
