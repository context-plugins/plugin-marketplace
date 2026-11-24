from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.complete_data_file_v2_data_file_id_complete_post_error import (
    CompleteDataFileV2DataFileIdCompletePostErrorBody,
    complete_data_file_v2_data_file_id_complete_post_error_mapper,
)
from ..errors.create_data_file_v2_data_post_error import (
    CreateDataFileV2DataPostErrorBody,
    create_data_file_v2_data_post_error_mapper,
)
from ..errors.delete_data_file_v2_data_file_id_delete_error import (
    DeleteDataFileV2DataFileIdDeleteErrorBody,
    delete_data_file_v2_data_file_id_delete_error_mapper,
)
from ..errors.delete_data_files_v2_data_delete_post_error import (
    DeleteDataFilesV2DataDeletePostErrorBody,
    delete_data_files_v2_data_delete_post_error_mapper,
)
from ..errors.download_data_file_v2_data_file_id_download_get_error import (
    DownloadDataFileV2DataFileIdDownloadGetErrorBody,
    download_data_file_v2_data_file_id_download_get_error_mapper,
)
from ..errors.get_data_file_storage_usage_v2_data_usage_get_error import (
    GetDataFileStorageUsageV2DataUsageGetErrorBody,
    get_data_file_storage_usage_v2_data_usage_get_error_mapper,
)
from ..errors.get_data_file_v2_data_file_id_get_error import (
    GetDataFileV2DataFileIdGetErrorBody,
    get_data_file_v2_data_file_id_get_error_mapper,
)
from ..errors.list_data_file_groups_v2_data_groups_get_error import (
    ListDataFileGroupsV2DataGroupsGetErrorBody,
    list_data_file_groups_v2_data_groups_get_error_mapper,
)
from ..errors.list_data_files_v2_data_get_error import (
    ListDataFilesV2DataGetErrorBody,
    list_data_files_v2_data_get_error_mapper,
)
from ..errors.update_data_file_v2_data_file_id_patch_error import (
    UpdateDataFileV2DataFileIdPatchErrorBody,
    update_data_file_v2_data_file_id_patch_error_mapper,
)
from ..models.data_file_create_request import DataFileCreateRequest, DataFileCreateRequestDict
from ..models.data_file_download_response import DataFileDownloadResponse
from ..models.data_file_group_list_response import DataFileGroupListResponse
from ..models.data_file_ids_request import DataFileIdsRequest, DataFileIdsRequestDict
from ..models.data_file_list_response import DataFileListResponse
from ..models.data_file_response import DataFileResponse
from ..models.data_file_storage_usage_response import DataFileStorageUsageResponse
from ..models.data_file_update_request import DataFileUpdateRequest, DataFileUpdateRequestDict
from ..models.data_file_upload_response import DataFileUploadResponse
from ..models.enums.scope3 import Scope3, Scope3OrStr
from ..server.server import Server


class Data:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = DataWithRawResponse(client, server)

    def complete_data_file_v2_data_file_id_complete_post(
        self, file_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> DataFileResponse:
        """Publish an uploaded data file, recording its stored size and type.

        Args:
            file_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.complete_data_file_v2_data_file_id_complete_post(
                file_id, request_options=request_options
            ),
        )

    def create_data_file_v2_data_post(
        self,
        body: DataFileCreateRequest | DataFileCreateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DataFileUploadResponse:
        """Reserve a data file and return a presigned PUT to upload its bytes.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(self._with_raw_response.create_data_file_v2_data_post(body, request_options=request_options))

    def delete_data_file_v2_data_file_id_delete(
        self, file_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Delete a data file and its stored object.

        Args:
            file_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.delete_data_file_v2_data_file_id_delete(file_id, request_options=request_options)
        )

    def delete_data_files_v2_data_delete_post(
        self, body: DataFileIdsRequest | DataFileIdsRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Delete data files and their stored objects. Fails if any id is unreadable or unwritable.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.delete_data_files_v2_data_delete_post(body, request_options=request_options)
        )

    def download_data_file_v2_data_file_id_download_get(
        self, file_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> DataFileDownloadResponse:
        """Presign an inline and an attachment link for a ready data file.

        Args:
            file_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.download_data_file_v2_data_file_id_download_get(
                file_id, request_options=request_options
            ),
        )

    def get_data_file_storage_usage_v2_data_usage_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> DataFileStorageUsageResponse:
        """Return current data-file storage use and the team's effective limits.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Rate limit exceeded; wait at least Retry-After
                seconds The server is at capacity; retry after Retry-After seconds ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_data_file_storage_usage_v2_data_usage_get(request_options=request_options)
        )

    def get_data_file_v2_data_file_id_get(
        self, file_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> DataFileResponse:
        """Fetch one data file's metadata.

        Args:
            file_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_data_file_v2_data_file_id_get(file_id, request_options=request_options)
        )

    def list_data_file_groups_v2_data_groups_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> DataFileGroupListResponse:
        """Summarise the readable folders so a browser can load their files on demand.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Rate limit exceeded; wait at least Retry-After
                seconds The server is at capacity; retry after Retry-After seconds ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(self._with_raw_response.list_data_file_groups_v2_data_groups_get(request_options=request_options))

    def list_data_files_v2_data_get(
        self,
        *,
        scope: Scope3OrStr | None = Scope3.ALL,
        membership_id: int | None = None,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DataFileListResponse:
        """List the data files the caller can read, optionally narrowed to one folder.

        Args:
            scope: Value sent with the request.
            membership_id: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.list_data_files_v2_data_get(
                scope=scope, membership_id=membership_id, limit=limit, offset=offset, request_options=request_options
            ),
        )

    def update_data_file_v2_data_file_id_patch(
        self,
        file_id: UUID,
        body: DataFileUpdateRequest | DataFileUpdateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DataFileResponse:
        """Rename a data file.

        Args:
            file_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.update_data_file_v2_data_file_id_patch(
                file_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> DataWithRawResponse:
        return self._with_raw_response


class AsyncData:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncDataWithRawResponse(client, server)

    async def complete_data_file_v2_data_file_id_complete_post(
        self, file_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DataFileResponse:
        """Publish an uploaded data file, recording its stored size and type.

        Args:
            file_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.complete_data_file_v2_data_file_id_complete_post(
                file_id, request_options=request_options
            ),
        )

    async def create_data_file_v2_data_post(
        self,
        body: DataFileCreateRequest | DataFileCreateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DataFileUploadResponse:
        """Reserve a data file and return a presigned PUT to upload its bytes.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.create_data_file_v2_data_post(body, request_options=request_options)
        )

    async def delete_data_file_v2_data_file_id_delete(
        self, file_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Delete a data file and its stored object.

        Args:
            file_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_data_file_v2_data_file_id_delete(
                file_id, request_options=request_options
            ),
        )

    async def delete_data_files_v2_data_delete_post(
        self,
        body: DataFileIdsRequest | DataFileIdsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Delete data files and their stored objects. Fails if any id is unreadable or unwritable.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_data_files_v2_data_delete_post(body, request_options=request_options)
        )

    async def download_data_file_v2_data_file_id_download_get(
        self, file_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DataFileDownloadResponse:
        """Presign an inline and an attachment link for a ready data file.

        Args:
            file_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.download_data_file_v2_data_file_id_download_get(
                file_id, request_options=request_options
            ),
        )

    async def get_data_file_storage_usage_v2_data_usage_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DataFileStorageUsageResponse:
        """Return current data-file storage use and the team's effective limits.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Rate limit exceeded; wait at least Retry-After
                seconds The server is at capacity; retry after Retry-After seconds ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_data_file_storage_usage_v2_data_usage_get(request_options=request_options)
        )

    async def get_data_file_v2_data_file_id_get(
        self, file_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DataFileResponse:
        """Fetch one data file's metadata.

        Args:
            file_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_data_file_v2_data_file_id_get(file_id, request_options=request_options)
        )

    async def list_data_file_groups_v2_data_groups_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DataFileGroupListResponse:
        """Summarise the readable folders so a browser can load their files on demand.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Rate limit exceeded; wait at least Retry-After
                seconds The server is at capacity; retry after Retry-After seconds ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.list_data_file_groups_v2_data_groups_get(request_options=request_options)
        )

    async def list_data_files_v2_data_get(
        self,
        *,
        scope: Scope3OrStr | None = Scope3.ALL,
        membership_id: int | None = None,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DataFileListResponse:
        """List the data files the caller can read, optionally narrowed to one folder.

        Args:
            scope: Value sent with the request.
            membership_id: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.list_data_files_v2_data_get(
                scope=scope, membership_id=membership_id, limit=limit, offset=offset, request_options=request_options
            ),
        )

    async def update_data_file_v2_data_file_id_patch(
        self,
        file_id: UUID,
        body: DataFileUpdateRequest | DataFileUpdateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DataFileResponse:
        """Rename a data file.

        Args:
            file_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.update_data_file_v2_data_file_id_patch(
                file_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncDataWithRawResponse:
        return self._with_raw_response


class DataWithRawResponse(BaseRawResponse[RawClient, Server]):
    def complete_data_file_v2_data_file_id_complete_post(
        self, file_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DataFileResponse, CompleteDataFileV2DataFileIdCompletePostErrorBody]:
        """Publish an uploaded data file, recording its stored size and type.

        Args:
            file_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/data/{file_id}/complete"),
            path_params=[param[UUID]("file_id", file_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[DataFileResponse],
            error_mapper=complete_data_file_v2_data_file_id_complete_post_error_mapper,
            request_options=request_options,
        )

    def create_data_file_v2_data_post(
        self,
        body: DataFileCreateRequest | DataFileCreateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DataFileUploadResponse, CreateDataFileV2DataPostErrorBody]:
        """Reserve a data file and return a presigned PUT to upload its bytes.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/data"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DataFileCreateRequest | DataFileCreateRequestDict](body),
            decoder=json_decoder[DataFileUploadResponse],
            error_mapper=create_data_file_v2_data_post_error_mapper,
            request_options=request_options,
        )

    def delete_data_file_v2_data_file_id_delete(
        self, file_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteDataFileV2DataFileIdDeleteErrorBody]:
        """Delete a data file and its stored object.

        Args:
            file_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v2/data/{file_id}"),
            path_params=[param[UUID]("file_id", file_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=empty_response,
            error_mapper=delete_data_file_v2_data_file_id_delete_error_mapper,
            request_options=request_options,
        )

    def delete_data_files_v2_data_delete_post(
        self, body: DataFileIdsRequest | DataFileIdsRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteDataFilesV2DataDeletePostErrorBody]:
        """Delete data files and their stored objects. Fails if any id is unreadable or unwritable.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/data/delete"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DataFileIdsRequest | DataFileIdsRequestDict](body),
            decoder=empty_response,
            error_mapper=delete_data_files_v2_data_delete_post_error_mapper,
            request_options=request_options,
        )

    def download_data_file_v2_data_file_id_download_get(
        self, file_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DataFileDownloadResponse, DownloadDataFileV2DataFileIdDownloadGetErrorBody]:
        """Presign an inline and an attachment link for a ready data file.

        Args:
            file_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/data/{file_id}/download"),
            path_params=[param[UUID]("file_id", file_id)],
            decoder=json_decoder[DataFileDownloadResponse],
            error_mapper=download_data_file_v2_data_file_id_download_get_error_mapper,
            request_options=request_options,
        )

    def get_data_file_storage_usage_v2_data_usage_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DataFileStorageUsageResponse, GetDataFileStorageUsageV2DataUsageGetErrorBody]:
        """Return current data-file storage use and the team's effective limits.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/data/usage"),
            decoder=json_decoder[DataFileStorageUsageResponse],
            error_mapper=get_data_file_storage_usage_v2_data_usage_get_error_mapper,
            request_options=request_options,
        )

    def get_data_file_v2_data_file_id_get(
        self, file_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DataFileResponse, GetDataFileV2DataFileIdGetErrorBody]:
        """Fetch one data file's metadata.

        Args:
            file_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/data/{file_id}"),
            path_params=[param[UUID]("file_id", file_id)],
            decoder=json_decoder[DataFileResponse],
            error_mapper=get_data_file_v2_data_file_id_get_error_mapper,
            request_options=request_options,
        )

    def list_data_file_groups_v2_data_groups_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DataFileGroupListResponse, ListDataFileGroupsV2DataGroupsGetErrorBody]:
        """Summarise the readable folders so a browser can load their files on demand.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/data/groups"),
            decoder=json_decoder[DataFileGroupListResponse],
            error_mapper=list_data_file_groups_v2_data_groups_get_error_mapper,
            request_options=request_options,
        )

    def list_data_files_v2_data_get(
        self,
        *,
        scope: Scope3OrStr | None = Scope3.ALL,
        membership_id: int | None = None,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DataFileListResponse, ListDataFilesV2DataGetErrorBody]:
        """List the data files the caller can read, optionally narrowed to one folder.

        Args:
            scope: Value sent with the request.
            membership_id: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/data"),
            query_params=[
                param[Scope3OrStr | None]("scope", scope),
                param[int | None]("membership_id", membership_id),
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
            ],
            decoder=json_decoder[DataFileListResponse],
            error_mapper=list_data_files_v2_data_get_error_mapper,
            request_options=request_options,
        )

    def update_data_file_v2_data_file_id_patch(
        self,
        file_id: UUID,
        body: DataFileUpdateRequest | DataFileUpdateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DataFileResponse, UpdateDataFileV2DataFileIdPatchErrorBody]:
        """Rename a data file.

        Args:
            file_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/data/{file_id}"),
            path_params=[param[UUID]("file_id", file_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DataFileUpdateRequest | DataFileUpdateRequestDict](body),
            decoder=json_decoder[DataFileResponse],
            error_mapper=update_data_file_v2_data_file_id_patch_error_mapper,
            request_options=request_options,
        )


class AsyncDataWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def complete_data_file_v2_data_file_id_complete_post(
        self, file_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DataFileResponse, CompleteDataFileV2DataFileIdCompletePostErrorBody]:
        """Publish an uploaded data file, recording its stored size and type.

        Args:
            file_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/data/{file_id}/complete"),
            path_params=[param[UUID]("file_id", file_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[DataFileResponse],
            error_mapper=complete_data_file_v2_data_file_id_complete_post_error_mapper,
            request_options=request_options,
        )

    async def create_data_file_v2_data_post(
        self,
        body: DataFileCreateRequest | DataFileCreateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DataFileUploadResponse, CreateDataFileV2DataPostErrorBody]:
        """Reserve a data file and return a presigned PUT to upload its bytes.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/data"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DataFileCreateRequest | DataFileCreateRequestDict](body),
            decoder=async_json_decoder[DataFileUploadResponse],
            error_mapper=create_data_file_v2_data_post_error_mapper,
            request_options=request_options,
        )

    async def delete_data_file_v2_data_file_id_delete(
        self, file_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteDataFileV2DataFileIdDeleteErrorBody]:
        """Delete a data file and its stored object.

        Args:
            file_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v2/data/{file_id}"),
            path_params=[param[UUID]("file_id", file_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_empty_response,
            error_mapper=delete_data_file_v2_data_file_id_delete_error_mapper,
            request_options=request_options,
        )

    async def delete_data_files_v2_data_delete_post(
        self,
        body: DataFileIdsRequest | DataFileIdsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteDataFilesV2DataDeletePostErrorBody]:
        """Delete data files and their stored objects. Fails if any id is unreadable or unwritable.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/data/delete"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DataFileIdsRequest | DataFileIdsRequestDict](body),
            decoder=async_empty_response,
            error_mapper=delete_data_files_v2_data_delete_post_error_mapper,
            request_options=request_options,
        )

    async def download_data_file_v2_data_file_id_download_get(
        self, file_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DataFileDownloadResponse, DownloadDataFileV2DataFileIdDownloadGetErrorBody]:
        """Presign an inline and an attachment link for a ready data file.

        Args:
            file_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/data/{file_id}/download"),
            path_params=[param[UUID]("file_id", file_id)],
            decoder=async_json_decoder[DataFileDownloadResponse],
            error_mapper=download_data_file_v2_data_file_id_download_get_error_mapper,
            request_options=request_options,
        )

    async def get_data_file_storage_usage_v2_data_usage_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DataFileStorageUsageResponse, GetDataFileStorageUsageV2DataUsageGetErrorBody]:
        """Return current data-file storage use and the team's effective limits.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/data/usage"),
            decoder=async_json_decoder[DataFileStorageUsageResponse],
            error_mapper=get_data_file_storage_usage_v2_data_usage_get_error_mapper,
            request_options=request_options,
        )

    async def get_data_file_v2_data_file_id_get(
        self, file_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DataFileResponse, GetDataFileV2DataFileIdGetErrorBody]:
        """Fetch one data file's metadata.

        Args:
            file_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/data/{file_id}"),
            path_params=[param[UUID]("file_id", file_id)],
            decoder=async_json_decoder[DataFileResponse],
            error_mapper=get_data_file_v2_data_file_id_get_error_mapper,
            request_options=request_options,
        )

    async def list_data_file_groups_v2_data_groups_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DataFileGroupListResponse, ListDataFileGroupsV2DataGroupsGetErrorBody]:
        """Summarise the readable folders so a browser can load their files on demand.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/data/groups"),
            decoder=async_json_decoder[DataFileGroupListResponse],
            error_mapper=list_data_file_groups_v2_data_groups_get_error_mapper,
            request_options=request_options,
        )

    async def list_data_files_v2_data_get(
        self,
        *,
        scope: Scope3OrStr | None = Scope3.ALL,
        membership_id: int | None = None,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DataFileListResponse, ListDataFilesV2DataGetErrorBody]:
        """List the data files the caller can read, optionally narrowed to one folder.

        Args:
            scope: Value sent with the request.
            membership_id: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/data"),
            query_params=[
                param[Scope3OrStr | None]("scope", scope),
                param[int | None]("membership_id", membership_id),
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
            ],
            decoder=async_json_decoder[DataFileListResponse],
            error_mapper=list_data_files_v2_data_get_error_mapper,
            request_options=request_options,
        )

    async def update_data_file_v2_data_file_id_patch(
        self,
        file_id: UUID,
        body: DataFileUpdateRequest | DataFileUpdateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DataFileResponse, UpdateDataFileV2DataFileIdPatchErrorBody]:
        """Rename a data file.

        Args:
            file_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/data/{file_id}"),
            path_params=[param[UUID]("file_id", file_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DataFileUpdateRequest | DataFileUpdateRequestDict](body),
            decoder=async_json_decoder[DataFileResponse],
            error_mapper=update_data_file_v2_data_file_id_patch_error_mapper,
            request_options=request_options,
        )
