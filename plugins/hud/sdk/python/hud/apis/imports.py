from __future__ import annotations

from typing import Any
from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.cancel_import_v2_imports_import_id_cancel_post_error import (
    CancelImportV2ImportsImportIdCancelPostErrorBody,
    cancel_import_v2_imports_import_id_cancel_post_error_mapper,
)
from ..errors.create_import_upload_v2_imports_uploads_post_error import (
    CreateImportUploadV2ImportsUploadsPostErrorBody,
    create_import_upload_v2_imports_uploads_post_error_mapper,
)
from ..errors.estimate_import_v2_imports_estimate_get_error import (
    EstimateImportV2ImportsEstimateGetErrorBody,
    estimate_import_v2_imports_estimate_get_error_mapper,
)
from ..errors.get_import_report_v2_imports_import_id_report_get_error import (
    GetImportReportV2ImportsImportIdReportGetErrorBody,
    get_import_report_v2_imports_import_id_report_get_error_mapper,
)
from ..errors.get_import_v2_imports_import_id_get_error import (
    GetImportV2ImportsImportIdGetErrorBody,
    get_import_v2_imports_import_id_get_error_mapper,
)
from ..errors.list_import_formats_v2_imports_formats_get_error import (
    ListImportFormatsV2ImportsFormatsGetErrorBody,
    list_import_formats_v2_imports_formats_get_error_mapper,
)
from ..errors.list_imports_v2_imports_get_error import (
    ListImportsV2ImportsGetErrorBody,
    list_imports_v2_imports_get_error_mapper,
)
from ..errors.start_import_v2_imports_post_error import (
    StartImportV2ImportsPostErrorBody,
    start_import_v2_imports_post_error_mapper,
)
from ..models.data_file_upload_response import DataFileUploadResponse
from ..models.enums.format import FormatOrStr
from ..models.import_create_request import ImportCreateRequest, ImportCreateRequestDict
from ..models.import_estimate_response import ImportEstimateResponse
from ..models.import_format_list_response import ImportFormatListResponse
from ..models.import_list_response import ImportListResponse
from ..models.import_response import ImportResponse
from ..models.import_upload_request import ImportUploadRequest, ImportUploadRequestDict
from ..server.server import Server


class Imports:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = ImportsWithRawResponse(client, server)

    def cancel_import_v2_imports_import_id_cancel_post(
        self, import_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ImportResponse:
        """Request cancellation of a live import; one that has ended is returned unchanged.

        Args:
            import_id: Value sent with the request.
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
            self._with_raw_response.cancel_import_v2_imports_import_id_cancel_post(
                import_id, request_options=request_options
            ),
        )

    def create_import_upload_v2_imports_uploads_post(
        self,
        body: ImportUploadRequest | ImportUploadRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DataFileUploadResponse:
        """Reserve a data file for a bundle and return a presigned PUT to upload its bytes.

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
            self._with_raw_response.create_import_upload_v2_imports_uploads_post(body, request_options=request_options)
        )

    def estimate_import_v2_imports_estimate_get(
        self, format_: FormatOrStr, file_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ImportEstimateResponse:
        """Estimate an import of a bundle; fails when the bundle cannot be imported.

        Args:
            format_: Value sent with the request.
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
            self._with_raw_response.estimate_import_v2_imports_estimate_get(
                format_, file_id, request_options=request_options
            ),
        )

    def get_import_report_v2_imports_import_id_report_get(
        self, import_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Return the report a completed or stopped import published, in its format's schema.

        Args:
            import_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Request exceeds a size limit Validation Error
                Rate limit exceeded; wait at least Retry-After seconds The server is at capacity; retry after
                Retry-After seconds ``error`` is ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_import_report_v2_imports_import_id_report_get(
                import_id, request_options=request_options
            ),
        )

    def get_import_v2_imports_import_id_get(
        self, import_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ImportResponse:
        """Fetch one import.

        Args:
            import_id: Value sent with the request.
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
            self._with_raw_response.get_import_v2_imports_import_id_get(import_id, request_options=request_options)
        )

    def list_import_formats_v2_imports_formats_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ImportFormatListResponse:
        """List the bundle formats available to import.

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
            self._with_raw_response.list_import_formats_v2_imports_formats_get(request_options=request_options)
        )

    def list_imports_v2_imports_get(
        self,
        *,
        format_: FormatOrStr | None = None,
        taskset_id: UUID | None = None,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ImportListResponse:
        """List the imports the caller can read, newest first.

        Team admins see every import on the team; other members see their own.

        Args:
            format_: Value sent with the request.
            taskset_id: Value sent with the request.
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
            self._with_raw_response.list_imports_v2_imports_get(
                format_=format_, taskset_id=taskset_id, limit=limit, offset=offset, request_options=request_options
            ),
        )

    def start_import_v2_imports_post(
        self,
        body: ImportCreateRequest | ImportCreateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ImportResponse:
        """Import an uploaded bundle into a taskset.

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
        return unwrap(self._with_raw_response.start_import_v2_imports_post(body, request_options=request_options))

    @property
    def with_raw_response(self) -> ImportsWithRawResponse:
        return self._with_raw_response


class AsyncImports:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncImportsWithRawResponse(client, server)

    async def cancel_import_v2_imports_import_id_cancel_post(
        self, import_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ImportResponse:
        """Request cancellation of a live import; one that has ended is returned unchanged.

        Args:
            import_id: Value sent with the request.
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
            await self._with_raw_response.cancel_import_v2_imports_import_id_cancel_post(
                import_id, request_options=request_options
            ),
        )

    async def create_import_upload_v2_imports_uploads_post(
        self,
        body: ImportUploadRequest | ImportUploadRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DataFileUploadResponse:
        """Reserve a data file for a bundle and return a presigned PUT to upload its bytes.

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
            await self._with_raw_response.create_import_upload_v2_imports_uploads_post(
                body, request_options=request_options
            ),
        )

    async def estimate_import_v2_imports_estimate_get(
        self, format_: FormatOrStr, file_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ImportEstimateResponse:
        """Estimate an import of a bundle; fails when the bundle cannot be imported.

        Args:
            format_: Value sent with the request.
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
            await self._with_raw_response.estimate_import_v2_imports_estimate_get(
                format_, file_id, request_options=request_options
            ),
        )

    async def get_import_report_v2_imports_import_id_report_get(
        self, import_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Return the report a completed or stopped import published, in its format's schema.

        Args:
            import_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Request exceeds a size limit Validation Error
                Rate limit exceeded; wait at least Retry-After seconds The server is at capacity; retry after
                Retry-After seconds ``error`` is ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_import_report_v2_imports_import_id_report_get(
                import_id, request_options=request_options
            ),
        )

    async def get_import_v2_imports_import_id_get(
        self, import_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ImportResponse:
        """Fetch one import.

        Args:
            import_id: Value sent with the request.
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
            await self._with_raw_response.get_import_v2_imports_import_id_get(
                import_id, request_options=request_options
            ),
        )

    async def list_import_formats_v2_imports_formats_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ImportFormatListResponse:
        """List the bundle formats available to import.

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
            await self._with_raw_response.list_import_formats_v2_imports_formats_get(request_options=request_options)
        )

    async def list_imports_v2_imports_get(
        self,
        *,
        format_: FormatOrStr | None = None,
        taskset_id: UUID | None = None,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ImportListResponse:
        """List the imports the caller can read, newest first.

        Team admins see every import on the team; other members see their own.

        Args:
            format_: Value sent with the request.
            taskset_id: Value sent with the request.
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
            await self._with_raw_response.list_imports_v2_imports_get(
                format_=format_, taskset_id=taskset_id, limit=limit, offset=offset, request_options=request_options
            ),
        )

    async def start_import_v2_imports_post(
        self,
        body: ImportCreateRequest | ImportCreateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ImportResponse:
        """Import an uploaded bundle into a taskset.

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
        return unwrap(await self._with_raw_response.start_import_v2_imports_post(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncImportsWithRawResponse:
        return self._with_raw_response


class ImportsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def cancel_import_v2_imports_import_id_cancel_post(
        self, import_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ImportResponse, CancelImportV2ImportsImportIdCancelPostErrorBody]:
        """Request cancellation of a live import; one that has ended is returned unchanged.

        Args:
            import_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/imports/{import_id}/cancel"),
            path_params=[param[UUID]("import_id", import_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[ImportResponse],
            error_mapper=cancel_import_v2_imports_import_id_cancel_post_error_mapper,
            request_options=request_options,
        )

    def create_import_upload_v2_imports_uploads_post(
        self,
        body: ImportUploadRequest | ImportUploadRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DataFileUploadResponse, CreateImportUploadV2ImportsUploadsPostErrorBody]:
        """Reserve a data file for a bundle and return a presigned PUT to upload its bytes.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/imports/uploads"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ImportUploadRequest | ImportUploadRequestDict](body),
            decoder=json_decoder[DataFileUploadResponse],
            error_mapper=create_import_upload_v2_imports_uploads_post_error_mapper,
            request_options=request_options,
        )

    def estimate_import_v2_imports_estimate_get(
        self, format_: FormatOrStr, file_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ImportEstimateResponse, EstimateImportV2ImportsEstimateGetErrorBody]:
        """Estimate an import of a bundle; fails when the bundle cannot be imported.

        Args:
            format_: Value sent with the request.
            file_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/imports/estimate"),
            query_params=[param[FormatOrStr]("format", format_), param[UUID]("file_id", file_id)],
            decoder=json_decoder[ImportEstimateResponse],
            error_mapper=estimate_import_v2_imports_estimate_get_error_mapper,
            request_options=request_options,
        )

    def get_import_report_v2_imports_import_id_report_get(
        self, import_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetImportReportV2ImportsImportIdReportGetErrorBody]:
        """Return the report a completed or stopped import published, in its format's schema.

        Args:
            import_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/imports/{import_id}/report"),
            path_params=[param[UUID]("import_id", import_id)],
            decoder=json_decoder[Any],
            error_mapper=get_import_report_v2_imports_import_id_report_get_error_mapper,
            request_options=request_options,
        )

    def get_import_v2_imports_import_id_get(
        self, import_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ImportResponse, GetImportV2ImportsImportIdGetErrorBody]:
        """Fetch one import.

        Args:
            import_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/imports/{import_id}"),
            path_params=[param[UUID]("import_id", import_id)],
            decoder=json_decoder[ImportResponse],
            error_mapper=get_import_v2_imports_import_id_get_error_mapper,
            request_options=request_options,
        )

    def list_import_formats_v2_imports_formats_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ImportFormatListResponse, ListImportFormatsV2ImportsFormatsGetErrorBody]:
        """List the bundle formats available to import.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/imports/formats"),
            decoder=json_decoder[ImportFormatListResponse],
            error_mapper=list_import_formats_v2_imports_formats_get_error_mapper,
            request_options=request_options,
        )

    def list_imports_v2_imports_get(
        self,
        *,
        format_: FormatOrStr | None = None,
        taskset_id: UUID | None = None,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ImportListResponse, ListImportsV2ImportsGetErrorBody]:
        """List the imports the caller can read, newest first.

        Team admins see every import on the team; other members see their own.

        Args:
            format_: Value sent with the request.
            taskset_id: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/imports"),
            query_params=[
                param[FormatOrStr | None]("format", format_),
                param[UUID | None]("taskset_id", taskset_id),
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
            ],
            decoder=json_decoder[ImportListResponse],
            error_mapper=list_imports_v2_imports_get_error_mapper,
            request_options=request_options,
        )

    def start_import_v2_imports_post(
        self,
        body: ImportCreateRequest | ImportCreateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ImportResponse, StartImportV2ImportsPostErrorBody]:
        """Import an uploaded bundle into a taskset.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/imports"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ImportCreateRequest | ImportCreateRequestDict](body),
            decoder=json_decoder[ImportResponse],
            error_mapper=start_import_v2_imports_post_error_mapper,
            request_options=request_options,
        )


class AsyncImportsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def cancel_import_v2_imports_import_id_cancel_post(
        self, import_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ImportResponse, CancelImportV2ImportsImportIdCancelPostErrorBody]:
        """Request cancellation of a live import; one that has ended is returned unchanged.

        Args:
            import_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/imports/{import_id}/cancel"),
            path_params=[param[UUID]("import_id", import_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[ImportResponse],
            error_mapper=cancel_import_v2_imports_import_id_cancel_post_error_mapper,
            request_options=request_options,
        )

    async def create_import_upload_v2_imports_uploads_post(
        self,
        body: ImportUploadRequest | ImportUploadRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DataFileUploadResponse, CreateImportUploadV2ImportsUploadsPostErrorBody]:
        """Reserve a data file for a bundle and return a presigned PUT to upload its bytes.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/imports/uploads"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ImportUploadRequest | ImportUploadRequestDict](body),
            decoder=async_json_decoder[DataFileUploadResponse],
            error_mapper=create_import_upload_v2_imports_uploads_post_error_mapper,
            request_options=request_options,
        )

    async def estimate_import_v2_imports_estimate_get(
        self, format_: FormatOrStr, file_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ImportEstimateResponse, EstimateImportV2ImportsEstimateGetErrorBody]:
        """Estimate an import of a bundle; fails when the bundle cannot be imported.

        Args:
            format_: Value sent with the request.
            file_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/imports/estimate"),
            query_params=[param[FormatOrStr]("format", format_), param[UUID]("file_id", file_id)],
            decoder=async_json_decoder[ImportEstimateResponse],
            error_mapper=estimate_import_v2_imports_estimate_get_error_mapper,
            request_options=request_options,
        )

    async def get_import_report_v2_imports_import_id_report_get(
        self, import_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetImportReportV2ImportsImportIdReportGetErrorBody]:
        """Return the report a completed or stopped import published, in its format's schema.

        Args:
            import_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/imports/{import_id}/report"),
            path_params=[param[UUID]("import_id", import_id)],
            decoder=async_json_decoder[Any],
            error_mapper=get_import_report_v2_imports_import_id_report_get_error_mapper,
            request_options=request_options,
        )

    async def get_import_v2_imports_import_id_get(
        self, import_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ImportResponse, GetImportV2ImportsImportIdGetErrorBody]:
        """Fetch one import.

        Args:
            import_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/imports/{import_id}"),
            path_params=[param[UUID]("import_id", import_id)],
            decoder=async_json_decoder[ImportResponse],
            error_mapper=get_import_v2_imports_import_id_get_error_mapper,
            request_options=request_options,
        )

    async def list_import_formats_v2_imports_formats_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ImportFormatListResponse, ListImportFormatsV2ImportsFormatsGetErrorBody]:
        """List the bundle formats available to import.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/imports/formats"),
            decoder=async_json_decoder[ImportFormatListResponse],
            error_mapper=list_import_formats_v2_imports_formats_get_error_mapper,
            request_options=request_options,
        )

    async def list_imports_v2_imports_get(
        self,
        *,
        format_: FormatOrStr | None = None,
        taskset_id: UUID | None = None,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ImportListResponse, ListImportsV2ImportsGetErrorBody]:
        """List the imports the caller can read, newest first.

        Team admins see every import on the team; other members see their own.

        Args:
            format_: Value sent with the request.
            taskset_id: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/imports"),
            query_params=[
                param[FormatOrStr | None]("format", format_),
                param[UUID | None]("taskset_id", taskset_id),
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
            ],
            decoder=async_json_decoder[ImportListResponse],
            error_mapper=list_imports_v2_imports_get_error_mapper,
            request_options=request_options,
        )

    async def start_import_v2_imports_post(
        self,
        body: ImportCreateRequest | ImportCreateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ImportResponse, StartImportV2ImportsPostErrorBody]:
        """Import an uploaded bundle into a taskset.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/imports"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ImportCreateRequest | ImportCreateRequestDict](body),
            decoder=async_json_decoder[ImportResponse],
            error_mapper=start_import_v2_imports_post_error_mapper,
            request_options=request_options,
        )
