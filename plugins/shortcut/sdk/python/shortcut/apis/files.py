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
from ..errors.delete_file_error import DeleteFileErrorBody, delete_file_error_mapper
from ..errors.get_file_error import GetFileErrorBody, get_file_error_mapper
from ..errors.list_files_error import ListFilesErrorBody, list_files_error_mapper
from ..errors.update_file_error import UpdateFileErrorBody, update_file_error_mapper
from ..errors.upload_files_error import UploadFilesErrorBody, upload_files_error_mapper
from ..models.update_file import UpdateFile, UpdateFileDict
from ..models.uploaded_file import UploadedFile
from ..server.server import Server


class Files:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = FilesWithRawResponse(client, server, auth)

    def delete_file(self, file_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Delete File deletes a previously uploaded file.

        Args:
            file_public_id: The File’s unique ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_file(file_public_id, request_options=request_options))

    def get_file(self, file_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> UploadedFile:
        """Get File returns information about the selected UploadedFile.

        Args:
            file_public_id: The File’s unique ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_file(file_public_id, request_options=request_options))

    def list_files(self, *, request_options: RequestOptionsOrDict | None = None) -> list[UploadedFile]:
        """List Files returns a list of all UploadedFiles in the workspace.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_files(request_options=request_options))

    def update_file(
        self,
        file_public_id: int,
        body: UpdateFile | UpdateFileDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> UploadedFile:
        """Update File updates the properties of an UploadedFile (but not its content).

        Args:
            file_public_id: The unique ID assigned to the file in Shortcut.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.update_file(file_public_id, body, request_options=request_options))

    def upload_files(
        self,
        file0: FileInput,
        *,
        story_id: int | None = None,
        file1: FileInput | None = None,
        file2: FileInput | None = None,
        file3: FileInput | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[UploadedFile]:
        """Upload Files uploads one or many files and optionally associates them with a story. Use the
        multipart/form-data content-type to upload. Each ``file`` key should contain a separate file. Each
        UploadedFile's name comes from the Content-Disposition header "filename" directive for that field.

        Args:
            file0: A file upload. At least one is required.
            story_id: The story ID that these files will be associated with.
            file1: Optional additional files.
            file2: Optional additional files.
            file3: Optional additional files.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.upload_files(
                file0, story_id=story_id, file1=file1, file2=file2, file3=file3, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> FilesWithRawResponse:
        return self._with_raw_response


class AsyncFiles:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncFilesWithRawResponse(client, server, auth)

    async def delete_file(
        self, file_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Delete File deletes a previously uploaded file.

        Args:
            file_public_id: The File’s unique ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_file(file_public_id, request_options=request_options))

    async def get_file(
        self, file_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> UploadedFile:
        """Get File returns information about the selected UploadedFile.

        Args:
            file_public_id: The File’s unique ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_file(file_public_id, request_options=request_options))

    async def list_files(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> list[UploadedFile]:
        """List Files returns a list of all UploadedFiles in the workspace.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_files(request_options=request_options))

    async def update_file(
        self,
        file_public_id: int,
        body: UpdateFile | UpdateFileDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> UploadedFile:
        """Update File updates the properties of an UploadedFile (but not its content).

        Args:
            file_public_id: The unique ID assigned to the file in Shortcut.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.update_file(file_public_id, body, request_options=request_options))

    async def upload_files(
        self,
        file0: AsyncFileInput,
        *,
        story_id: int | None = None,
        file1: AsyncFileInput | None = None,
        file2: AsyncFileInput | None = None,
        file3: AsyncFileInput | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[UploadedFile]:
        """Upload Files uploads one or many files and optionally associates them with a story. Use the
        multipart/form-data content-type to upload. Each ``file`` key should contain a separate file. Each
        UploadedFile's name comes from the Content-Disposition header "filename" directive for that field.

        Args:
            file0: A file upload. At least one is required.
            story_id: The story ID that these files will be associated with.
            file1: Optional additional files.
            file2: Optional additional files.
            file3: Optional additional files.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.upload_files(
                file0, story_id=story_id, file1=file1, file2=file2, file3=file3, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncFilesWithRawResponse:
        return self._with_raw_response


class FilesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_file(
        self, file_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteFileErrorBody]:
        """Delete File deletes a previously uploaded file.

        Args:
            file_public_id: The File’s unique ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v3/files/{file-public-id}"),
            path_params=[param[int]("file-public-id", file_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=empty_response,
            error_mapper=delete_file_error_mapper,
            request_options=request_options,
        )

    def get_file(
        self, file_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[UploadedFile, GetFileErrorBody]:
        """Get File returns information about the selected UploadedFile.

        Args:
            file_public_id: The File’s unique ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/files/{file-public-id}"),
            path_params=[param[int]("file-public-id", file_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[UploadedFile],
            error_mapper=get_file_error_mapper,
            request_options=request_options,
        )

    def list_files(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[UploadedFile], ListFilesErrorBody]:
        """List Files returns a list of all UploadedFiles in the workspace.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/files"),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[list[UploadedFile]],
            error_mapper=list_files_error_mapper,
            request_options=request_options,
        )

    def update_file(
        self,
        file_public_id: int,
        body: UpdateFile | UpdateFileDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[UploadedFile, UpdateFileErrorBody]:
        """Update File updates the properties of an UploadedFile (but not its content).

        Args:
            file_public_id: The unique ID assigned to the file in Shortcut.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/files/{file-public-id}"),
            path_params=[param[int]("file-public-id", file_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateFile | UpdateFileDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[UploadedFile],
            error_mapper=update_file_error_mapper,
            request_options=request_options,
        )

    def upload_files(
        self,
        file0: FileInput,
        *,
        story_id: int | None = None,
        file1: FileInput | None = None,
        file2: FileInput | None = None,
        file3: FileInput | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[UploadedFile], UploadFilesErrorBody]:
        """Upload Files uploads one or many files and optionally associates them with a story. Use the
        multipart/form-data content-type to upload. Each ``file`` key should contain a separate file. Each
        UploadedFile's name comes from the Content-Disposition header "filename" directive for that field.

        Args:
            file0: A file upload. At least one is required.
            story_id: The story ID that these files will be associated with.
            file1: Optional additional files.
            file2: Optional additional files.
            file3: Optional additional files.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/files"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(
                file_part("file0", file0),
                param[int | None]("story_id", story_id),
                file_part("file1", file1) if file1 is not None else None,
                file_part("file2", file2) if file2 is not None else None,
                file_part("file3", file3) if file3 is not None else None,
            ),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[list[UploadedFile]],
            error_mapper=upload_files_error_mapper,
            request_options=request_options,
        )


class AsyncFilesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_file(
        self, file_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteFileErrorBody]:
        """Delete File deletes a previously uploaded file.

        Args:
            file_public_id: The File’s unique ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v3/files/{file-public-id}"),
            path_params=[param[int]("file-public-id", file_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=async_empty_response,
            error_mapper=delete_file_error_mapper,
            request_options=request_options,
        )

    async def get_file(
        self, file_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[UploadedFile, GetFileErrorBody]:
        """Get File returns information about the selected UploadedFile.

        Args:
            file_public_id: The File’s unique ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/files/{file-public-id}"),
            path_params=[param[int]("file-public-id", file_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[UploadedFile],
            error_mapper=get_file_error_mapper,
            request_options=request_options,
        )

    async def list_files(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[UploadedFile], ListFilesErrorBody]:
        """List Files returns a list of all UploadedFiles in the workspace.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/files"),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[list[UploadedFile]],
            error_mapper=list_files_error_mapper,
            request_options=request_options,
        )

    async def update_file(
        self,
        file_public_id: int,
        body: UpdateFile | UpdateFileDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[UploadedFile, UpdateFileErrorBody]:
        """Update File updates the properties of an UploadedFile (but not its content).

        Args:
            file_public_id: The unique ID assigned to the file in Shortcut.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/files/{file-public-id}"),
            path_params=[param[int]("file-public-id", file_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateFile | UpdateFileDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[UploadedFile],
            error_mapper=update_file_error_mapper,
            request_options=request_options,
        )

    async def upload_files(
        self,
        file0: AsyncFileInput,
        *,
        story_id: int | None = None,
        file1: AsyncFileInput | None = None,
        file2: AsyncFileInput | None = None,
        file3: AsyncFileInput | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[UploadedFile], UploadFilesErrorBody]:
        """Upload Files uploads one or many files and optionally associates them with a story. Use the
        multipart/form-data content-type to upload. Each ``file`` key should contain a separate file. Each
        UploadedFile's name comes from the Content-Disposition header "filename" directive for that field.

        Args:
            file0: A file upload. At least one is required.
            story_id: The story ID that these files will be associated with.
            file1: Optional additional files.
            file2: Optional additional files.
            file3: Optional additional files.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/files"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(
                file_part("file0", file0),
                param[int | None]("story_id", story_id),
                file_part("file1", file1) if file1 is not None else None,
                file_part("file2", file2) if file2 is not None else None,
                file_part("file3", file3) if file3 is not None else None,
            ),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[list[UploadedFile]],
            error_mapper=upload_files_error_mapper,
            request_options=request_options,
        )
