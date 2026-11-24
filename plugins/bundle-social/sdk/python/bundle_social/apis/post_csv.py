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
    async_json_decoder,
    file_part,
    json_decoder,
    multipart_body,
    param,
    unwrap,
)
from ..errors.post_csv_create_error import PostCsvCreateErrorBody, post_csv_create_error_mapper
from ..errors.post_csv_get_by_id_error import PostCsvGetByIdErrorBody, post_csv_get_by_id_error_mapper
from ..errors.post_csv_get_list_error import PostCsvGetListErrorBody, post_csv_get_list_error_mapper
from ..errors.post_csv_get_rows_error import PostCsvGetRowsErrorBody, post_csv_get_rows_error_mapper
from ..errors.post_csv_get_status_error import PostCsvGetStatusErrorBody, post_csv_get_status_error_mapper
from ..models.api_v1_post_csv_import_response import ApiV1PostCsvImportResponse
from ..models.api_v1_post_csv_import_response1 import ApiV1PostCsvImportResponse1
from ..models.api_v1_post_csv_import_rows_response import ApiV1PostCsvImportRowsResponse
from ..models.api_v1_post_csv_import_status_response import ApiV1PostCsvImportStatusResponse
from ..models.enums.status4_bundle_social_post_csv_api import Status4BundleSocialPostCsvApiOrStr
from ..server.server import Server


class PostCsv:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PostCsvWithRawResponse(client, server, auth)

    def post_csv_create(
        self, *, file: FileInput | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1PostCsvImportResponse:
        """Upload CSV for async bulk post import.

        Args:
            file: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            201

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1PostCsvImport400Error1 |
                ApiV1PostCsvImport401Error1 | ApiV1PostCsvImport403Error1 | ApiV1PostCsvImport404Error1 |
                ApiV1PostCsvImport429Error1 | ApiV1PostCsvImport500Error1 | ApiV1PostCsvImport502Error1 |
                ApiV1PostCsvImport503Error1 | ApiV1PostCsvImport504Error1 | RawError``."""
        return unwrap(self._with_raw_response.post_csv_create(file=file, request_options=request_options))

    def post_csv_get_by_id(
        self, import_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1PostCsvImportResponse:
        """Retrieve a single CSV import with its summary counts and configuration.

        Args:
            import_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1PostCsvImport400Error1 |
                ApiV1PostCsvImport401Error1 | ApiV1PostCsvImport403Error1 | ApiV1PostCsvImport404Error1 |
                ApiV1PostCsvImport429Error1 | ApiV1PostCsvImport500Error1 | ApiV1PostCsvImport502Error1 |
                ApiV1PostCsvImport503Error1 | ApiV1PostCsvImport504Error1 | RawError``."""
        return unwrap(self._with_raw_response.post_csv_get_by_id(import_id, request_options=request_options))

    def post_csv_get_list(
        self,
        *,
        offset: float | None = 0.0,
        limit: float | None = 10.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1PostCsvImportResponse1:
        """List your team's bulk CSV post imports with pagination, so you can see what was uploaded and when.

        Args:
            offset: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1PostCsvImport400Error1 |
                ApiV1PostCsvImport401Error1 | ApiV1PostCsvImport403Error1 | ApiV1PostCsvImport404Error1 |
                ApiV1PostCsvImport429Error1 | ApiV1PostCsvImport500Error1 | ApiV1PostCsvImport502Error1 |
                ApiV1PostCsvImport503Error1 | ApiV1PostCsvImport504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.post_csv_get_list(offset=offset, limit=limit, request_options=request_options)
        )

    def post_csv_get_rows(
        self,
        import_id: str,
        *,
        status: Status4BundleSocialPostCsvApiOrStr | None = None,
        offset: float | None = 0.0,
        limit: float | None = 10.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1PostCsvImportRowsResponse:
        """List the per-row outcome of a CSV import with pagination, showing which rows created posts and which failed
        validation and why. Use it to report errors back to the person who uploaded the file.

        Args:
            import_id: Value sent with the request.
            status: Value sent with the request.
            offset: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1PostCsvImportRows400Error1 |
                ApiV1PostCsvImportRows401Error1 | ApiV1PostCsvImportRows403Error1 | ApiV1PostCsvImportRows404Error1 |
                ApiV1PostCsvImportRows429Error1 | ApiV1PostCsvImportRows500Error1 | ApiV1PostCsvImportRows502Error1 |
                ApiV1PostCsvImportRows503Error1 | ApiV1PostCsvImportRows504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.post_csv_get_rows(
                import_id, status=status, offset=offset, limit=limit, request_options=request_options
            ),
        )

    def post_csv_get_status(
        self, import_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1PostCsvImportStatusResponse:
        """Poll the progress of a bulk CSV post import, including how many rows are processed, succeeded, and failed.

        Args:
            import_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1PostCsvImportStatus400Error1 |
                ApiV1PostCsvImportStatus401Error1 | ApiV1PostCsvImportStatus403Error1 |
                ApiV1PostCsvImportStatus404Error1 | ApiV1PostCsvImportStatus429Error1 |
                ApiV1PostCsvImportStatus500Error1 | ApiV1PostCsvImportStatus502Error1 |
                ApiV1PostCsvImportStatus503Error1 | ApiV1PostCsvImportStatus504Error1 | RawError``."""
        return unwrap(self._with_raw_response.post_csv_get_status(import_id, request_options=request_options))

    @property
    def with_raw_response(self) -> PostCsvWithRawResponse:
        return self._with_raw_response


class AsyncPostCsv:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPostCsvWithRawResponse(client, server, auth)

    async def post_csv_create(
        self, *, file: AsyncFileInput | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1PostCsvImportResponse:
        """Upload CSV for async bulk post import.

        Args:
            file: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            201

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1PostCsvImport400Error1 |
                ApiV1PostCsvImport401Error1 | ApiV1PostCsvImport403Error1 | ApiV1PostCsvImport404Error1 |
                ApiV1PostCsvImport429Error1 | ApiV1PostCsvImport500Error1 | ApiV1PostCsvImport502Error1 |
                ApiV1PostCsvImport503Error1 | ApiV1PostCsvImport504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.post_csv_create(file=file, request_options=request_options))

    async def post_csv_get_by_id(
        self, import_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1PostCsvImportResponse:
        """Retrieve a single CSV import with its summary counts and configuration.

        Args:
            import_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1PostCsvImport400Error1 |
                ApiV1PostCsvImport401Error1 | ApiV1PostCsvImport403Error1 | ApiV1PostCsvImport404Error1 |
                ApiV1PostCsvImport429Error1 | ApiV1PostCsvImport500Error1 | ApiV1PostCsvImport502Error1 |
                ApiV1PostCsvImport503Error1 | ApiV1PostCsvImport504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.post_csv_get_by_id(import_id, request_options=request_options))

    async def post_csv_get_list(
        self,
        *,
        offset: float | None = 0.0,
        limit: float | None = 10.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1PostCsvImportResponse1:
        """List your team's bulk CSV post imports with pagination, so you can see what was uploaded and when.

        Args:
            offset: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1PostCsvImport400Error1 |
                ApiV1PostCsvImport401Error1 | ApiV1PostCsvImport403Error1 | ApiV1PostCsvImport404Error1 |
                ApiV1PostCsvImport429Error1 | ApiV1PostCsvImport500Error1 | ApiV1PostCsvImport502Error1 |
                ApiV1PostCsvImport503Error1 | ApiV1PostCsvImport504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.post_csv_get_list(offset=offset, limit=limit, request_options=request_options)
        )

    async def post_csv_get_rows(
        self,
        import_id: str,
        *,
        status: Status4BundleSocialPostCsvApiOrStr | None = None,
        offset: float | None = 0.0,
        limit: float | None = 10.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1PostCsvImportRowsResponse:
        """List the per-row outcome of a CSV import with pagination, showing which rows created posts and which failed
        validation and why. Use it to report errors back to the person who uploaded the file.

        Args:
            import_id: Value sent with the request.
            status: Value sent with the request.
            offset: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1PostCsvImportRows400Error1 |
                ApiV1PostCsvImportRows401Error1 | ApiV1PostCsvImportRows403Error1 | ApiV1PostCsvImportRows404Error1 |
                ApiV1PostCsvImportRows429Error1 | ApiV1PostCsvImportRows500Error1 | ApiV1PostCsvImportRows502Error1 |
                ApiV1PostCsvImportRows503Error1 | ApiV1PostCsvImportRows504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.post_csv_get_rows(
                import_id, status=status, offset=offset, limit=limit, request_options=request_options
            ),
        )

    async def post_csv_get_status(
        self, import_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1PostCsvImportStatusResponse:
        """Poll the progress of a bulk CSV post import, including how many rows are processed, succeeded, and failed.

        Args:
            import_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1PostCsvImportStatus400Error1 |
                ApiV1PostCsvImportStatus401Error1 | ApiV1PostCsvImportStatus403Error1 |
                ApiV1PostCsvImportStatus404Error1 | ApiV1PostCsvImportStatus429Error1 |
                ApiV1PostCsvImportStatus500Error1 | ApiV1PostCsvImportStatus502Error1 |
                ApiV1PostCsvImportStatus503Error1 | ApiV1PostCsvImportStatus504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.post_csv_get_status(import_id, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncPostCsvWithRawResponse:
        return self._with_raw_response


class PostCsvWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def post_csv_create(
        self, *, file: FileInput | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1PostCsvImportResponse, PostCsvCreateErrorBody]:
        """Upload CSV for async bulk post import.

        Args:
            file: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/post-csv-import/"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(file_part("file", file) if file is not None else None),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1PostCsvImportResponse],
            error_mapper=post_csv_create_error_mapper,
            request_options=request_options,
        )

    def post_csv_get_by_id(
        self, import_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1PostCsvImportResponse, PostCsvGetByIdErrorBody]:
        """Retrieve a single CSV import with its summary counts and configuration.

        Args:
            import_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/post-csv-import/{importId}"),
            path_params=[param[str]("importId", import_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1PostCsvImportResponse],
            error_mapper=post_csv_get_by_id_error_mapper,
            request_options=request_options,
        )

    def post_csv_get_list(
        self,
        *,
        offset: float | None = 0.0,
        limit: float | None = 10.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1PostCsvImportResponse1, PostCsvGetListErrorBody]:
        """List your team's bulk CSV post imports with pagination, so you can see what was uploaded and when.

        Args:
            offset: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/post-csv-import/"),
            query_params=[param[float | None]("offset", offset), param[float | None]("limit", limit)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1PostCsvImportResponse1],
            error_mapper=post_csv_get_list_error_mapper,
            request_options=request_options,
        )

    def post_csv_get_rows(
        self,
        import_id: str,
        *,
        status: Status4BundleSocialPostCsvApiOrStr | None = None,
        offset: float | None = 0.0,
        limit: float | None = 10.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1PostCsvImportRowsResponse, PostCsvGetRowsErrorBody]:
        """List the per-row outcome of a CSV import with pagination, showing which rows created posts and which failed
        validation and why. Use it to report errors back to the person who uploaded the file.

        Args:
            import_id: Value sent with the request.
            status: Value sent with the request.
            offset: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/post-csv-import/{importId}/rows"),
            path_params=[param[str]("importId", import_id)],
            query_params=[
                param[Status4BundleSocialPostCsvApiOrStr | None]("status", status),
                param[float | None]("offset", offset),
                param[float | None]("limit", limit),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1PostCsvImportRowsResponse],
            error_mapper=post_csv_get_rows_error_mapper,
            request_options=request_options,
        )

    def post_csv_get_status(
        self, import_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1PostCsvImportStatusResponse, PostCsvGetStatusErrorBody]:
        """Poll the progress of a bulk CSV post import, including how many rows are processed, succeeded, and failed.

        Args:
            import_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/post-csv-import/{importId}/status"),
            path_params=[param[str]("importId", import_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1PostCsvImportStatusResponse],
            error_mapper=post_csv_get_status_error_mapper,
            request_options=request_options,
        )


class AsyncPostCsvWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def post_csv_create(
        self, *, file: AsyncFileInput | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1PostCsvImportResponse, PostCsvCreateErrorBody]:
        """Upload CSV for async bulk post import.

        Args:
            file: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/post-csv-import/"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(file_part("file", file) if file is not None else None),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1PostCsvImportResponse],
            error_mapper=post_csv_create_error_mapper,
            request_options=request_options,
        )

    async def post_csv_get_by_id(
        self, import_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1PostCsvImportResponse, PostCsvGetByIdErrorBody]:
        """Retrieve a single CSV import with its summary counts and configuration.

        Args:
            import_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/post-csv-import/{importId}"),
            path_params=[param[str]("importId", import_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1PostCsvImportResponse],
            error_mapper=post_csv_get_by_id_error_mapper,
            request_options=request_options,
        )

    async def post_csv_get_list(
        self,
        *,
        offset: float | None = 0.0,
        limit: float | None = 10.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1PostCsvImportResponse1, PostCsvGetListErrorBody]:
        """List your team's bulk CSV post imports with pagination, so you can see what was uploaded and when.

        Args:
            offset: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/post-csv-import/"),
            query_params=[param[float | None]("offset", offset), param[float | None]("limit", limit)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1PostCsvImportResponse1],
            error_mapper=post_csv_get_list_error_mapper,
            request_options=request_options,
        )

    async def post_csv_get_rows(
        self,
        import_id: str,
        *,
        status: Status4BundleSocialPostCsvApiOrStr | None = None,
        offset: float | None = 0.0,
        limit: float | None = 10.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1PostCsvImportRowsResponse, PostCsvGetRowsErrorBody]:
        """List the per-row outcome of a CSV import with pagination, showing which rows created posts and which failed
        validation and why. Use it to report errors back to the person who uploaded the file.

        Args:
            import_id: Value sent with the request.
            status: Value sent with the request.
            offset: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/post-csv-import/{importId}/rows"),
            path_params=[param[str]("importId", import_id)],
            query_params=[
                param[Status4BundleSocialPostCsvApiOrStr | None]("status", status),
                param[float | None]("offset", offset),
                param[float | None]("limit", limit),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1PostCsvImportRowsResponse],
            error_mapper=post_csv_get_rows_error_mapper,
            request_options=request_options,
        )

    async def post_csv_get_status(
        self, import_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1PostCsvImportStatusResponse, PostCsvGetStatusErrorBody]:
        """Poll the progress of a bulk CSV post import, including how many rows are processed, succeeded, and failed.

        Args:
            import_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/post-csv-import/{importId}/status"),
            path_params=[param[str]("importId", import_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1PostCsvImportStatusResponse],
            error_mapper=post_csv_get_status_error_mapper,
            request_options=request_options,
        )
