from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncFileInput,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    FileInput,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    async_json_decoder,
    empty_response,
    file_part,
    json_body,
    json_decoder,
    multipart_body,
    param,
    unwrap,
)
from ..errors.delete_a_file_manager_file_error import (
    DeleteAFileManagerFileErrorBody,
    delete_a_file_manager_file_error_mapper,
)
from ..errors.list_file_manager_files_error import ListFileManagerFilesErrorBody, list_file_manager_files_error_mapper
from ..errors.move_a_file_manager_file_error import MoveAFileManagerFileErrorBody, move_a_file_manager_file_error_mapper
from ..errors.overwrite_a_file_manager_file_error import (
    OverwriteAFileManagerFileErrorBody,
    overwrite_a_file_manager_file_error_mapper,
)
from ..errors.upload_single_file_error import UploadSingleFileErrorBody, upload_single_file_error_mapper
from ..models.enums.is_public import IsPublicOrStr
from ..models.enums.item_type import ItemTypeOrStr
from ..models.file_manager_file_request import FileManagerFileRequest, FileManagerFileRequestDict
from ..models.file_manager_move_request import FileManagerMoveRequest, FileManagerMoveRequestDict
from ..models.upload_file_response import UploadFileResponse
from ..server.server import Server


class FileManager:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = FileManagerWithRawResponse(client, server, auth)

    def delete_a_file_manager_file(
        self,
        body: FileManagerFileRequest | FileManagerFileRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Permanently delete a File Manager file or folder (folders delete their contents recursively).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Delete OK status

        Raises:
            ApiError: Invalid request ``error`` is ``FileManagerFile400Error1 | RawError``."""
        return unwrap(self._with_raw_response.delete_a_file_manager_file(body, request_options=request_options))

    def list_file_manager_files(
        self,
        *,
        parent_id: str | None = None,
        item_type: ItemTypeOrStr | None = None,
        search_query: str | None = None,
        page_index: int | None = None,
        page_size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """List files and folders in the File Manager. Omitting parentId lists every entry across all folders (use
        searchQuery/pagination to find one); pass a folder id to list that folder's direct children. Filter with
        itemType (directory, image, or file).

        Args:
            parent_id: OPTIONAL. Folder id to list the direct children of. Omit to list all entries across every folder.
            item_type: OPTIONAL. Filter by entry type.
            search_query: OPTIONAL. Case-insensitive filename filter.
            page_index: OPTIONAL. Zero-based page index (default 0).
            page_size: OPTIONAL. Page size (1-200).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List OK status

        Raises:
            ApiError: Invalid request ``error`` is ``FileManagerFiles400Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.list_file_manager_files(
                parent_id=parent_id,
                item_type=item_type,
                search_query=search_query,
                page_index=page_index,
                page_size=page_size,
                request_options=request_options,
            ),
        )

    def move_a_file_manager_file(
        self,
        body: FileManagerMoveRequest | FileManagerMoveRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Move a File Manager file or folder into another folder. Pass a null newParentId to move it to the root.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Move OK status

        Raises:
            ApiError: Invalid request ``error`` is ``FileManagerMove400Error1 | RawError``."""
        return unwrap(self._with_raw_response.move_a_file_manager_file(body, request_options=request_options))

    def overwrite_a_file_manager_file(
        self, file_id: str, file: FileInput, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Replace the contents of an existing File Manager file in place. The file keeps its id and public URL, so
        existing document embeds update automatically.

        Args:
            file_id: Id of the existing file to overwrite.
            file: New file contents.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Overwrite OK status

        Raises:
            ApiError: Invalid request ``error`` is ``FileManagerReplace400Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.overwrite_a_file_manager_file(file_id, file, request_options=request_options)
        )

    def upload_single_file(
        self,
        file: FileInput,
        *,
        is_public: IsPublicOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> UploadFileResponse:
        """Upload a single file to the File Manager

        Args:
            file: Open api file, .json or .yml or .yaml or .zip
            is_public: OPTIONAL. Whether the uploaded file is public or not regarding AWS link.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Upload OK status

        Raises:
            ApiError: Invalid request ``error`` is ``UploadFile400Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.upload_single_file(file, is_public=is_public, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> FileManagerWithRawResponse:
        return self._with_raw_response


class AsyncFileManager:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncFileManagerWithRawResponse(client, server, auth)

    async def delete_a_file_manager_file(
        self,
        body: FileManagerFileRequest | FileManagerFileRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Permanently delete a File Manager file or folder (folders delete their contents recursively).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Delete OK status

        Raises:
            ApiError: Invalid request ``error`` is ``FileManagerFile400Error1 | RawError``."""
        return unwrap(await self._with_raw_response.delete_a_file_manager_file(body, request_options=request_options))

    async def list_file_manager_files(
        self,
        *,
        parent_id: str | None = None,
        item_type: ItemTypeOrStr | None = None,
        search_query: str | None = None,
        page_index: int | None = None,
        page_size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """List files and folders in the File Manager. Omitting parentId lists every entry across all folders (use
        searchQuery/pagination to find one); pass a folder id to list that folder's direct children. Filter with
        itemType (directory, image, or file).

        Args:
            parent_id: OPTIONAL. Folder id to list the direct children of. Omit to list all entries across every folder.
            item_type: OPTIONAL. Filter by entry type.
            search_query: OPTIONAL. Case-insensitive filename filter.
            page_index: OPTIONAL. Zero-based page index (default 0).
            page_size: OPTIONAL. Page size (1-200).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List OK status

        Raises:
            ApiError: Invalid request ``error`` is ``FileManagerFiles400Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.list_file_manager_files(
                parent_id=parent_id,
                item_type=item_type,
                search_query=search_query,
                page_index=page_index,
                page_size=page_size,
                request_options=request_options,
            ),
        )

    async def move_a_file_manager_file(
        self,
        body: FileManagerMoveRequest | FileManagerMoveRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Move a File Manager file or folder into another folder. Pass a null newParentId to move it to the root.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Move OK status

        Raises:
            ApiError: Invalid request ``error`` is ``FileManagerMove400Error1 | RawError``."""
        return unwrap(await self._with_raw_response.move_a_file_manager_file(body, request_options=request_options))

    async def overwrite_a_file_manager_file(
        self, file_id: str, file: AsyncFileInput, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Replace the contents of an existing File Manager file in place. The file keeps its id and public URL, so
        existing document embeds update automatically.

        Args:
            file_id: Id of the existing file to overwrite.
            file: New file contents.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Overwrite OK status

        Raises:
            ApiError: Invalid request ``error`` is ``FileManagerReplace400Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.overwrite_a_file_manager_file(file_id, file, request_options=request_options)
        )

    async def upload_single_file(
        self,
        file: AsyncFileInput,
        *,
        is_public: IsPublicOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> UploadFileResponse:
        """Upload a single file to the File Manager

        Args:
            file: Open api file, .json or .yml or .yaml or .zip
            is_public: OPTIONAL. Whether the uploaded file is public or not regarding AWS link.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Upload OK status

        Raises:
            ApiError: Invalid request ``error`` is ``UploadFile400Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.upload_single_file(file, is_public=is_public, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncFileManagerWithRawResponse:
        return self._with_raw_response


class FileManagerWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_a_file_manager_file(
        self,
        body: FileManagerFileRequest | FileManagerFileRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteAFileManagerFileErrorBody]:
        """Permanently delete a File Manager file or folder (folders delete their contents recursively).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/file-manager/file"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[FileManagerFileRequest | FileManagerFileRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=delete_a_file_manager_file_error_mapper,
            request_options=request_options,
        )

    def list_file_manager_files(
        self,
        *,
        parent_id: str | None = None,
        item_type: ItemTypeOrStr | None = None,
        search_query: str | None = None,
        page_index: int | None = None,
        page_size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListFileManagerFilesErrorBody]:
        """List files and folders in the File Manager. Omitting parentId lists every entry across all folders (use
        searchQuery/pagination to find one); pass a folder id to list that folder's direct children. Filter with
        itemType (directory, image, or file).

        Args:
            parent_id: OPTIONAL. Folder id to list the direct children of. Omit to list all entries across every folder.
            item_type: OPTIONAL. Filter by entry type.
            search_query: OPTIONAL. Case-insensitive filename filter.
            page_index: OPTIONAL. Zero-based page index (default 0).
            page_size: OPTIONAL. Page size (1-200).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/file-manager/files"),
            query_params=[
                param[str | None]("parentId", parent_id),
                param[ItemTypeOrStr | None]("itemType", item_type),
                param[str | None]("searchQuery", search_query),
                param[int | None]("pageIndex", page_index),
                param[int | None]("pageSize", page_size),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=list_file_manager_files_error_mapper,
            request_options=request_options,
        )

    def move_a_file_manager_file(
        self,
        body: FileManagerMoveRequest | FileManagerMoveRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, MoveAFileManagerFileErrorBody]:
        """Move a File Manager file or folder into another folder. Pass a null newParentId to move it to the root.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/file-manager/move"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[FileManagerMoveRequest | FileManagerMoveRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=move_a_file_manager_file_error_mapper,
            request_options=request_options,
        )

    def overwrite_a_file_manager_file(
        self, file_id: str, file: FileInput, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, OverwriteAFileManagerFileErrorBody]:
        """Replace the contents of an existing File Manager file in place. The file keeps its id and public URL, so
        existing document embeds update automatically.

        Args:
            file_id: Id of the existing file to overwrite.
            file: New file contents.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/file-manager/replace"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(param[str]("fileId", file_id), file_part("file", file)),
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=overwrite_a_file_manager_file_error_mapper,
            request_options=request_options,
        )

    def upload_single_file(
        self,
        file: FileInput,
        *,
        is_public: IsPublicOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[UploadFileResponse, UploadSingleFileErrorBody]:
        """Upload a single file to the File Manager

        Args:
            file: Open api file, .json or .yml or .yaml or .zip
            is_public: OPTIONAL. Whether the uploaded file is public or not regarding AWS link.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/upload/file"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(file_part("file", file), param[IsPublicOrStr | None]("isPublic", is_public)),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[UploadFileResponse],
            error_mapper=upload_single_file_error_mapper,
            request_options=request_options,
        )


class AsyncFileManagerWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_a_file_manager_file(
        self,
        body: FileManagerFileRequest | FileManagerFileRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteAFileManagerFileErrorBody]:
        """Permanently delete a File Manager file or folder (folders delete their contents recursively).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/file-manager/file"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[FileManagerFileRequest | FileManagerFileRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=delete_a_file_manager_file_error_mapper,
            request_options=request_options,
        )

    async def list_file_manager_files(
        self,
        *,
        parent_id: str | None = None,
        item_type: ItemTypeOrStr | None = None,
        search_query: str | None = None,
        page_index: int | None = None,
        page_size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListFileManagerFilesErrorBody]:
        """List files and folders in the File Manager. Omitting parentId lists every entry across all folders (use
        searchQuery/pagination to find one); pass a folder id to list that folder's direct children. Filter with
        itemType (directory, image, or file).

        Args:
            parent_id: OPTIONAL. Folder id to list the direct children of. Omit to list all entries across every folder.
            item_type: OPTIONAL. Filter by entry type.
            search_query: OPTIONAL. Case-insensitive filename filter.
            page_index: OPTIONAL. Zero-based page index (default 0).
            page_size: OPTIONAL. Page size (1-200).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/file-manager/files"),
            query_params=[
                param[str | None]("parentId", parent_id),
                param[ItemTypeOrStr | None]("itemType", item_type),
                param[str | None]("searchQuery", search_query),
                param[int | None]("pageIndex", page_index),
                param[int | None]("pageSize", page_size),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=list_file_manager_files_error_mapper,
            request_options=request_options,
        )

    async def move_a_file_manager_file(
        self,
        body: FileManagerMoveRequest | FileManagerMoveRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, MoveAFileManagerFileErrorBody]:
        """Move a File Manager file or folder into another folder. Pass a null newParentId to move it to the root.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/file-manager/move"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[FileManagerMoveRequest | FileManagerMoveRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=move_a_file_manager_file_error_mapper,
            request_options=request_options,
        )

    async def overwrite_a_file_manager_file(
        self, file_id: str, file: AsyncFileInput, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, OverwriteAFileManagerFileErrorBody]:
        """Replace the contents of an existing File Manager file in place. The file keeps its id and public URL, so
        existing document embeds update automatically.

        Args:
            file_id: Id of the existing file to overwrite.
            file: New file contents.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/file-manager/replace"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(param[str]("fileId", file_id), file_part("file", file)),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=overwrite_a_file_manager_file_error_mapper,
            request_options=request_options,
        )

    async def upload_single_file(
        self,
        file: AsyncFileInput,
        *,
        is_public: IsPublicOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[UploadFileResponse, UploadSingleFileErrorBody]:
        """Upload a single file to the File Manager

        Args:
            file: Open api file, .json or .yml or .yaml or .zip
            is_public: OPTIONAL. Whether the uploaded file is public or not regarding AWS link.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/upload/file"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(file_part("file", file), param[IsPublicOrStr | None]("isPublic", is_public)),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[UploadFileResponse],
            error_mapper=upload_single_file_error_mapper,
            request_options=request_options,
        )
