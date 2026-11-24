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
from ..errors.create_folder_error import CreateFolderErrorBody, create_folder_error_mapper
from ..errors.delete_folder_error import DeleteFolderErrorBody, delete_folder_error_mapper
from ..errors.list_folders_error import ListFoldersErrorBody, list_folders_error_mapper
from ..errors.update_folder_error import UpdateFolderErrorBody, update_folder_error_mapper
from ..models.folder_schema import FolderSchema
from ..models.folders_request import FoldersRequest, FoldersRequestDict
from ..models.folders_request1 import FoldersRequest1, FoldersRequest1Dict
from ..models.folders_response import FoldersResponse
from ..server.server import Server


class Folders:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = FoldersWithRawResponse(client, server, auth)

    def create_folder(
        self,
        *,
        body: FoldersRequest | FoldersRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FolderSchema:
        """Create a folder for the authenticated workspace.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created folder

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(self._with_raw_response.create_folder(body=body, request_options=request_options))

    def delete_folder(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> FoldersResponse:
        """Delete a folder from the workspace. All existing links will still work, but they will no longer be associated
        with this folder.

        Args:
            id_: The ID of the folder to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deleted folder ID.

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(self._with_raw_response.delete_folder(id_, request_options=request_options))

    def list_folders(
        self,
        *,
        search: str | None = None,
        page: float | None = 1.0,
        page_size: float | None = 50.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[FolderSchema]:
        """Retrieve a list of folders for the authenticated workspace.

        Args:
            search: The search term to filter the folders by.
            page: The page number for pagination.
            page_size: The number of items per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of folders

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(
            self._with_raw_response.list_folders(
                search=search, page=page, page_size=page_size, request_options=request_options
            ),
        )

    def update_folder(
        self,
        id_: str,
        *,
        body: FoldersRequest1 | FoldersRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FolderSchema:
        """Update a folder in the workspace.

        Args:
            id_: The ID of the folder to update.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated folder.

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(self._with_raw_response.update_folder(id_, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> FoldersWithRawResponse:
        return self._with_raw_response


class AsyncFolders:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncFoldersWithRawResponse(client, server, auth)

    async def create_folder(
        self,
        *,
        body: FoldersRequest | FoldersRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> FolderSchema:
        """Create a folder for the authenticated workspace.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created folder

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(await self._with_raw_response.create_folder(body=body, request_options=request_options))

    async def delete_folder(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> FoldersResponse:
        """Delete a folder from the workspace. All existing links will still work, but they will no longer be associated
        with this folder.

        Args:
            id_: The ID of the folder to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deleted folder ID.

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(await self._with_raw_response.delete_folder(id_, request_options=request_options))

    async def list_folders(
        self,
        *,
        search: str | None = None,
        page: float | None = 1.0,
        page_size: float | None = 50.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[FolderSchema]:
        """Retrieve a list of folders for the authenticated workspace.

        Args:
            search: The search term to filter the folders by.
            page: The page number for pagination.
            page_size: The number of items per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of folders

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(
            await self._with_raw_response.list_folders(
                search=search, page=page, page_size=page_size, request_options=request_options
            ),
        )

    async def update_folder(
        self,
        id_: str,
        *,
        body: FoldersRequest1 | FoldersRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> FolderSchema:
        """Update a folder in the workspace.

        Args:
            id_: The ID of the folder to update.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated folder.

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(await self._with_raw_response.update_folder(id_, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncFoldersWithRawResponse:
        return self._with_raw_response


class FoldersWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_folder(
        self,
        *,
        body: FoldersRequest | FoldersRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FolderSchema, CreateFolderErrorBody]:
        """Create a folder for the authenticated workspace.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/folders"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[FoldersRequest | FoldersRequestDict | None](body),
            auth_scheme=self._auth.token,
            decoder=json_decoder[FolderSchema],
            error_mapper=create_folder_error_mapper,
            request_options=request_options,
        )

    def delete_folder(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FoldersResponse, DeleteFolderErrorBody]:
        """Delete a folder from the workspace. All existing links will still work, but they will no longer be associated
        with this folder.

        Args:
            id_: The ID of the folder to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/folders/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.token,
            decoder=json_decoder[FoldersResponse],
            error_mapper=delete_folder_error_mapper,
            request_options=request_options,
        )

    def list_folders(
        self,
        *,
        search: str | None = None,
        page: float | None = 1.0,
        page_size: float | None = 50.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[FolderSchema], ListFoldersErrorBody]:
        """Retrieve a list of folders for the authenticated workspace.

        Args:
            search: The search term to filter the folders by.
            page: The page number for pagination.
            page_size: The number of items per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/folders"),
            query_params=[
                param[str | None]("search", search),
                param[float | None]("page", page),
                param[float | None]("pageSize", page_size),
            ],
            auth_scheme=self._auth.token,
            decoder=json_decoder[list[FolderSchema]],
            error_mapper=list_folders_error_mapper,
            request_options=request_options,
        )

    def update_folder(
        self,
        id_: str,
        *,
        body: FoldersRequest1 | FoldersRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FolderSchema, UpdateFolderErrorBody]:
        """Update a folder in the workspace.

        Args:
            id_: The ID of the folder to update.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/folders/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[FoldersRequest1 | FoldersRequest1Dict | None](body),
            auth_scheme=self._auth.token,
            decoder=json_decoder[FolderSchema],
            error_mapper=update_folder_error_mapper,
            request_options=request_options,
        )


class AsyncFoldersWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_folder(
        self,
        *,
        body: FoldersRequest | FoldersRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[FolderSchema, CreateFolderErrorBody]:
        """Create a folder for the authenticated workspace.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/folders"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[FoldersRequest | FoldersRequestDict | None](body),
            auth_scheme=self._auth.token,
            decoder=async_json_decoder[FolderSchema],
            error_mapper=create_folder_error_mapper,
            request_options=request_options,
        )

    async def delete_folder(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[FoldersResponse, DeleteFolderErrorBody]:
        """Delete a folder from the workspace. All existing links will still work, but they will no longer be associated
        with this folder.

        Args:
            id_: The ID of the folder to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/folders/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.token,
            decoder=async_json_decoder[FoldersResponse],
            error_mapper=delete_folder_error_mapper,
            request_options=request_options,
        )

    async def list_folders(
        self,
        *,
        search: str | None = None,
        page: float | None = 1.0,
        page_size: float | None = 50.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[FolderSchema], ListFoldersErrorBody]:
        """Retrieve a list of folders for the authenticated workspace.

        Args:
            search: The search term to filter the folders by.
            page: The page number for pagination.
            page_size: The number of items per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/folders"),
            query_params=[
                param[str | None]("search", search),
                param[float | None]("page", page),
                param[float | None]("pageSize", page_size),
            ],
            auth_scheme=self._auth.token,
            decoder=async_json_decoder[list[FolderSchema]],
            error_mapper=list_folders_error_mapper,
            request_options=request_options,
        )

    async def update_folder(
        self,
        id_: str,
        *,
        body: FoldersRequest1 | FoldersRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[FolderSchema, UpdateFolderErrorBody]:
        """Update a folder in the workspace.

        Args:
            id_: The ID of the folder to update.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/folders/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[FoldersRequest1 | FoldersRequest1Dict | None](body),
            auth_scheme=self._auth.token,
            decoder=async_json_decoder[FolderSchema],
            error_mapper=update_folder_error_mapper,
            request_options=request_options,
        )
