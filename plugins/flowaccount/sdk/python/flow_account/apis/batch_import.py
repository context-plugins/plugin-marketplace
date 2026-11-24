from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncFileResponse,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    FileResponse,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_file_decoder,
    async_json_decoder,
    file_decoder,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.batch_history import BatchHistory
from ..models.batch_import_metadata import BatchImportMetadata
from ..models.batch_import_payload import BatchImportPayload, BatchImportPayloadDict
from ..models.batch_import_retry import BatchImportRetry, BatchImportRetryDict
from ..models.batch_status import BatchStatus
from ..models.custom_template import CustomTemplate, CustomTemplateDict
from ..models.enums.batch_import_status import BatchImportStatusOrInt
from ..server.server import Server


class BatchImport:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = BatchImportWithRawResponse(client, server, auth)

    def batch_import_delete_custom_template(
        self, template_id: str | None, culture: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> FileResponse:
        """Send a ``DELETE`` request.

        Args:
            template_id: Value sent with the request.
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A ``FileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.batch_import_delete_custom_template(
                template_id, culture, request_options=request_options
            ),
        )

    def batch_import_generate_bacth_id_metadata(
        self, culture: str, *, file_name: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> BatchImportMetadata:
        """Send a ``GET`` request.

        Args:
            culture: Value sent with the request.
            file_name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``BatchImportMetadata`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.batch_import_generate_bacth_id_metadata(
                culture, file_name=file_name, request_options=request_options
            ),
        )

    def batch_import_get_batch_s3_data(
        self, batch_id: str | None, culture: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> FileResponse:
        """Send a ``GET`` request.

        Args:
            batch_id: Value sent with the request.
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A ``FileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.batch_import_get_batch_s3_data(batch_id, culture, request_options=request_options)
        )

    def batch_import_get_custom_template(
        self, template_id: str | None, culture: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> FileResponse:
        """Send a ``GET`` request.

        Args:
            template_id: Value sent with the request.
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A ``FileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.batch_import_get_custom_template(
                template_id, culture, request_options=request_options
            ),
        )

    def batch_import_get_orgingal_file(
        self, batch_id: str | None, culture: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> FileResponse:
        """Send a ``GET`` request.

        Args:
            batch_id: Value sent with the request.
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A ``FileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.batch_import_get_orgingal_file(batch_id, culture, request_options=request_options)
        )

    def batch_import_get_presign(
        self,
        culture: str,
        body: BatchImportPayload | BatchImportPayloadDict,
        *,
        id_: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FileResponse:
        """Send a ``POST`` request.

        Args:
            culture: Value sent with the request.
            body: The request body.
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A ``FileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.batch_import_get_presign(culture, body, id_=id_, request_options=request_options)
        )

    def batch_import_mark_viewed(
        self,
        culture: str,
        body: int,
        *,
        user_id: int | None = None,
        batch_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> bool:
        """Send a ``POST`` request.

        Args:
            culture: Value sent with the request.
            body: The request body.
            user_id: Value sent with the request.
            batch_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``bool`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.batch_import_mark_viewed(
                culture, body, user_id=user_id, batch_id=batch_id, request_options=request_options
            ),
        )

    def batch_import_query_batch(
        self,
        culture: str,
        body: str,
        *,
        status: BatchImportStatusOrInt | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BatchStatus:
        """Send a ``POST`` request.

        Args:
            culture: Value sent with the request.
            body: The request body.
            status: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``BatchStatus`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.batch_import_query_batch(
                culture, body, status=status, request_options=request_options
            ),
        )

    def batch_import_query_batch_history(
        self, culture: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> BatchHistory:
        """Send a ``POST`` request.

        Args:
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``BatchHistory`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.batch_import_query_batch_history(culture, request_options=request_options)
        )

    def batch_import_retry_simple_documents(
        self,
        culture: str,
        body: BatchImportRetry | BatchImportRetryDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> bool:
        """Send a ``POST`` request.

        Args:
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``bool`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.batch_import_retry_simple_documents(culture, body, request_options=request_options)
        )

    def batch_import_upsert_custom_template(
        self,
        culture: str,
        body: CustomTemplate | CustomTemplateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FileResponse:
        """Send a ``POST`` request.

        Args:
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A ``FileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.batch_import_upsert_custom_template(culture, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> BatchImportWithRawResponse:
        return self._with_raw_response


class AsyncBatchImport:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncBatchImportWithRawResponse(client, server, auth)

    async def batch_import_delete_custom_template(
        self, template_id: str | None, culture: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """Send a ``DELETE`` request.

        Args:
            template_id: Value sent with the request.
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``AsyncFileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.batch_import_delete_custom_template(
                template_id, culture, request_options=request_options
            ),
        )

    async def batch_import_generate_bacth_id_metadata(
        self, culture: str, *, file_name: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> BatchImportMetadata:
        """Send a ``GET`` request.

        Args:
            culture: Value sent with the request.
            file_name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``BatchImportMetadata`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.batch_import_generate_bacth_id_metadata(
                culture, file_name=file_name, request_options=request_options
            ),
        )

    async def batch_import_get_batch_s3_data(
        self, batch_id: str | None, culture: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """Send a ``GET`` request.

        Args:
            batch_id: Value sent with the request.
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``AsyncFileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.batch_import_get_batch_s3_data(
                batch_id, culture, request_options=request_options
            ),
        )

    async def batch_import_get_custom_template(
        self, template_id: str | None, culture: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """Send a ``GET`` request.

        Args:
            template_id: Value sent with the request.
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``AsyncFileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.batch_import_get_custom_template(
                template_id, culture, request_options=request_options
            ),
        )

    async def batch_import_get_orgingal_file(
        self, batch_id: str | None, culture: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """Send a ``GET`` request.

        Args:
            batch_id: Value sent with the request.
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``AsyncFileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.batch_import_get_orgingal_file(
                batch_id, culture, request_options=request_options
            ),
        )

    async def batch_import_get_presign(
        self,
        culture: str,
        body: BatchImportPayload | BatchImportPayloadDict,
        *,
        id_: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AsyncFileResponse:
        """Send a ``POST`` request.

        Args:
            culture: Value sent with the request.
            body: The request body.
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``AsyncFileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.batch_import_get_presign(
                culture, body, id_=id_, request_options=request_options
            ),
        )

    async def batch_import_mark_viewed(
        self,
        culture: str,
        body: int,
        *,
        user_id: int | None = None,
        batch_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> bool:
        """Send a ``POST`` request.

        Args:
            culture: Value sent with the request.
            body: The request body.
            user_id: Value sent with the request.
            batch_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``bool`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.batch_import_mark_viewed(
                culture, body, user_id=user_id, batch_id=batch_id, request_options=request_options
            ),
        )

    async def batch_import_query_batch(
        self,
        culture: str,
        body: str,
        *,
        status: BatchImportStatusOrInt | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BatchStatus:
        """Send a ``POST`` request.

        Args:
            culture: Value sent with the request.
            body: The request body.
            status: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``BatchStatus`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.batch_import_query_batch(
                culture, body, status=status, request_options=request_options
            ),
        )

    async def batch_import_query_batch_history(
        self, culture: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> BatchHistory:
        """Send a ``POST`` request.

        Args:
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``BatchHistory`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.batch_import_query_batch_history(culture, request_options=request_options)
        )

    async def batch_import_retry_simple_documents(
        self,
        culture: str,
        body: BatchImportRetry | BatchImportRetryDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> bool:
        """Send a ``POST`` request.

        Args:
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``bool`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.batch_import_retry_simple_documents(
                culture, body, request_options=request_options
            ),
        )

    async def batch_import_upsert_custom_template(
        self,
        culture: str,
        body: CustomTemplate | CustomTemplateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AsyncFileResponse:
        """Send a ``POST`` request.

        Args:
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``AsyncFileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.batch_import_upsert_custom_template(
                culture, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncBatchImportWithRawResponse:
        return self._with_raw_response


class BatchImportWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def batch_import_delete_custom_template(
        self, template_id: str | None, culture: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, RawError]:
        """Send a ``DELETE`` request.

        Args:
            template_id: Value sent with the request.
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/{culture}/cash-invoices/custom-template/{templateId}"),
            path_params=[param[str | None]("templateId", template_id), param[str]("culture", culture)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer,
            decoder=file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def batch_import_generate_bacth_id_metadata(
        self, culture: str, *, file_name: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BatchImportMetadata, RawError]:
        """Send a ``GET`` request.

        Args:
            culture: Value sent with the request.
            file_name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{culture}/cash-invoices/batch-metadata"),
            path_params=[param[str]("culture", culture)],
            query_params=[param[str | None]("fileName", file_name)],
            auth_scheme=self._auth.bearer,
            decoder=json_decoder[BatchImportMetadata],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def batch_import_get_batch_s3_data(
        self, batch_id: str | None, culture: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            batch_id: Value sent with the request.
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{culture}/cash-invoices/get-batch-s3-data/{batchId}"),
            path_params=[param[str | None]("batchId", batch_id), param[str]("culture", culture)],
            auth_scheme=self._auth.bearer,
            decoder=file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def batch_import_get_custom_template(
        self, template_id: str | None, culture: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            template_id: Value sent with the request.
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{culture}/cash-invoices/custom-template/{templateId}"),
            path_params=[param[str | None]("templateId", template_id), param[str]("culture", culture)],
            auth_scheme=self._auth.bearer,
            decoder=file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def batch_import_get_orgingal_file(
        self, batch_id: str | None, culture: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            batch_id: Value sent with the request.
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{culture}/cash-invoices/get-batch-import-org-file/{batchId}"),
            path_params=[param[str | None]("batchId", batch_id), param[str]("culture", culture)],
            auth_scheme=self._auth.bearer,
            decoder=file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def batch_import_get_presign(
        self,
        culture: str,
        body: BatchImportPayload | BatchImportPayloadDict,
        *,
        id_: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FileResponse, RawError]:
        """Send a ``POST`` request.

        Args:
            culture: Value sent with the request.
            body: The request body.
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{culture}/cash-invoices/get-presign-for-upload-simpledoc"),
            path_params=[param[str]("culture", culture)],
            query_params=[param[int | None]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BatchImportPayload | BatchImportPayloadDict](body),
            auth_scheme=self._auth.bearer,
            decoder=file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def batch_import_mark_viewed(
        self,
        culture: str,
        body: int,
        *,
        user_id: int | None = None,
        batch_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[bool, RawError]:
        """Send a ``POST`` request.

        Args:
            culture: Value sent with the request.
            body: The request body.
            user_id: Value sent with the request.
            batch_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{culture}/cash-invoices/mark-viewed"),
            path_params=[param[str]("culture", culture)],
            query_params=[param[int | None]("userId", user_id), param[str | None]("batchId", batch_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[int](body),
            auth_scheme=self._auth.bearer,
            decoder=json_decoder[bool],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def batch_import_query_batch(
        self,
        culture: str,
        body: str,
        *,
        status: BatchImportStatusOrInt | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BatchStatus, RawError]:
        """Send a ``POST`` request.

        Args:
            culture: Value sent with the request.
            body: The request body.
            status: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{culture}/cash-invoices/query-batch"),
            path_params=[param[str]("culture", culture)],
            query_params=[param[BatchImportStatusOrInt | None]("status", status)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[str](body),
            auth_scheme=self._auth.bearer,
            decoder=json_decoder[BatchStatus],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def batch_import_query_batch_history(
        self, culture: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BatchHistory, RawError]:
        """Send a ``POST`` request.

        Args:
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{culture}/cash-invoices/batch-import-history"),
            path_params=[param[str]("culture", culture)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer,
            decoder=json_decoder[BatchHistory],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def batch_import_retry_simple_documents(
        self,
        culture: str,
        body: BatchImportRetry | BatchImportRetryDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[bool, RawError]:
        """Send a ``POST`` request.

        Args:
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{culture}/cash-invoices/retry-simple-documents"),
            path_params=[param[str]("culture", culture)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BatchImportRetry | BatchImportRetryDict](body),
            auth_scheme=self._auth.bearer,
            decoder=json_decoder[bool],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def batch_import_upsert_custom_template(
        self,
        culture: str,
        body: CustomTemplate | CustomTemplateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FileResponse, RawError]:
        """Send a ``POST`` request.

        Args:
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{culture}/cash-invoices/custom-template"),
            path_params=[param[str]("culture", culture)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CustomTemplate | CustomTemplateDict](body),
            auth_scheme=self._auth.bearer,
            decoder=file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncBatchImportWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def batch_import_delete_custom_template(
        self, template_id: str | None, culture: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, RawError]:
        """Send a ``DELETE`` request.

        Args:
            template_id: Value sent with the request.
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/{culture}/cash-invoices/custom-template/{templateId}"),
            path_params=[param[str | None]("templateId", template_id), param[str]("culture", culture)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer,
            decoder=async_file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def batch_import_generate_bacth_id_metadata(
        self, culture: str, *, file_name: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BatchImportMetadata, RawError]:
        """Send a ``GET`` request.

        Args:
            culture: Value sent with the request.
            file_name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{culture}/cash-invoices/batch-metadata"),
            path_params=[param[str]("culture", culture)],
            query_params=[param[str | None]("fileName", file_name)],
            auth_scheme=self._auth.bearer,
            decoder=async_json_decoder[BatchImportMetadata],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def batch_import_get_batch_s3_data(
        self, batch_id: str | None, culture: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            batch_id: Value sent with the request.
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{culture}/cash-invoices/get-batch-s3-data/{batchId}"),
            path_params=[param[str | None]("batchId", batch_id), param[str]("culture", culture)],
            auth_scheme=self._auth.bearer,
            decoder=async_file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def batch_import_get_custom_template(
        self, template_id: str | None, culture: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            template_id: Value sent with the request.
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{culture}/cash-invoices/custom-template/{templateId}"),
            path_params=[param[str | None]("templateId", template_id), param[str]("culture", culture)],
            auth_scheme=self._auth.bearer,
            decoder=async_file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def batch_import_get_orgingal_file(
        self, batch_id: str | None, culture: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            batch_id: Value sent with the request.
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{culture}/cash-invoices/get-batch-import-org-file/{batchId}"),
            path_params=[param[str | None]("batchId", batch_id), param[str]("culture", culture)],
            auth_scheme=self._auth.bearer,
            decoder=async_file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def batch_import_get_presign(
        self,
        culture: str,
        body: BatchImportPayload | BatchImportPayloadDict,
        *,
        id_: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AsyncFileResponse, RawError]:
        """Send a ``POST`` request.

        Args:
            culture: Value sent with the request.
            body: The request body.
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{culture}/cash-invoices/get-presign-for-upload-simpledoc"),
            path_params=[param[str]("culture", culture)],
            query_params=[param[int | None]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BatchImportPayload | BatchImportPayloadDict](body),
            auth_scheme=self._auth.bearer,
            decoder=async_file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def batch_import_mark_viewed(
        self,
        culture: str,
        body: int,
        *,
        user_id: int | None = None,
        batch_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[bool, RawError]:
        """Send a ``POST`` request.

        Args:
            culture: Value sent with the request.
            body: The request body.
            user_id: Value sent with the request.
            batch_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{culture}/cash-invoices/mark-viewed"),
            path_params=[param[str]("culture", culture)],
            query_params=[param[int | None]("userId", user_id), param[str | None]("batchId", batch_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[int](body),
            auth_scheme=self._auth.bearer,
            decoder=async_json_decoder[bool],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def batch_import_query_batch(
        self,
        culture: str,
        body: str,
        *,
        status: BatchImportStatusOrInt | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BatchStatus, RawError]:
        """Send a ``POST`` request.

        Args:
            culture: Value sent with the request.
            body: The request body.
            status: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{culture}/cash-invoices/query-batch"),
            path_params=[param[str]("culture", culture)],
            query_params=[param[BatchImportStatusOrInt | None]("status", status)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[str](body),
            auth_scheme=self._auth.bearer,
            decoder=async_json_decoder[BatchStatus],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def batch_import_query_batch_history(
        self, culture: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BatchHistory, RawError]:
        """Send a ``POST`` request.

        Args:
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{culture}/cash-invoices/batch-import-history"),
            path_params=[param[str]("culture", culture)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer,
            decoder=async_json_decoder[BatchHistory],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def batch_import_retry_simple_documents(
        self,
        culture: str,
        body: BatchImportRetry | BatchImportRetryDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[bool, RawError]:
        """Send a ``POST`` request.

        Args:
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{culture}/cash-invoices/retry-simple-documents"),
            path_params=[param[str]("culture", culture)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BatchImportRetry | BatchImportRetryDict](body),
            auth_scheme=self._auth.bearer,
            decoder=async_json_decoder[bool],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def batch_import_upsert_custom_template(
        self,
        culture: str,
        body: CustomTemplate | CustomTemplateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AsyncFileResponse, RawError]:
        """Send a ``POST`` request.

        Args:
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{culture}/cash-invoices/custom-template"),
            path_params=[param[str]("culture", culture)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CustomTemplate | CustomTemplateDict](body),
            auth_scheme=self._auth.bearer,
            decoder=async_file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )
