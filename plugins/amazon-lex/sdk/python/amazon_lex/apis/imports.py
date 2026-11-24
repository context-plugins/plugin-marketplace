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
from ..errors.delete_import_error import DeleteImportErrorBody, delete_import_error_mapper
from ..errors.describe_import_error import DescribeImportErrorBody, describe_import_error_mapper
from ..errors.list_imports_error import ListImportsErrorBody, list_imports_error_mapper
from ..errors.start_import_error import StartImportErrorBody, start_import_error_mapper
from ..models.delete_import_request import DeleteImportRequest, DeleteImportRequestDict
from ..models.delete_import_response import DeleteImportResponse
from ..models.describe_import_response import DescribeImportResponse
from ..models.list_imports_request import ListImportsRequest, ListImportsRequestDict
from ..models.list_imports_response import ListImportsResponse
from ..models.start_import_request import StartImportRequest, StartImportRequestDict
from ..models.start_import_response import StartImportResponse
from ..server.server import Server


class Imports:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ImportsWithRawResponse(client, server, auth)

    def delete_import(
        self,
        import_id: str,
        *,
        body: DeleteImportRequest | DeleteImportRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DeleteImportResponse:
        """Removes a previous import and the associated file stored in an S3 bucket.

        Args:
            import_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException PreconditionFailedException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | PreconditionFailedException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(self._with_raw_response.delete_import(import_id, body=body, request_options=request_options))

    def describe_import(
        self, import_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> DescribeImportResponse:
        """Gets information about a specific import.

        Args:
            import_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(self._with_raw_response.describe_import(import_id, request_options=request_options))

    def list_imports(
        self,
        *,
        body: ListImportsRequest | ListImportsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListImportsResponse:
        """Lists the imports for a bot, bot locale, or custom vocabulary. Imports are kept in the list for 7 days.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ThrottlingException | InternalServerException | RawError``."""
        return unwrap(self._with_raw_response.list_imports(body=body, request_options=request_options))

    def start_import(
        self,
        *,
        body: StartImportRequest | StartImportRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> StartImportResponse:
        """Starts importing a bot, bot locale, or custom vocabulary from a zip archive that you uploaded to an S3
        bucket.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException ResourceNotFoundException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | ResourceNotFoundException | ConflictException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(self._with_raw_response.start_import(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> ImportsWithRawResponse:
        return self._with_raw_response


class AsyncImports:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncImportsWithRawResponse(client, server, auth)

    async def delete_import(
        self,
        import_id: str,
        *,
        body: DeleteImportRequest | DeleteImportRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DeleteImportResponse:
        """Removes a previous import and the associated file stored in an S3 bucket.

        Args:
            import_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException PreconditionFailedException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | PreconditionFailedException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_import(import_id, body=body, request_options=request_options)
        )

    async def describe_import(
        self, import_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DescribeImportResponse:
        """Gets information about a specific import.

        Args:
            import_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(await self._with_raw_response.describe_import(import_id, request_options=request_options))

    async def list_imports(
        self,
        *,
        body: ListImportsRequest | ListImportsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListImportsResponse:
        """Lists the imports for a bot, bot locale, or custom vocabulary. Imports are kept in the list for 7 days.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ThrottlingException | InternalServerException | RawError``."""
        return unwrap(await self._with_raw_response.list_imports(body=body, request_options=request_options))

    async def start_import(
        self,
        *,
        body: StartImportRequest | StartImportRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> StartImportResponse:
        """Starts importing a bot, bot locale, or custom vocabulary from a zip archive that you uploaded to an S3
        bucket.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException ResourceNotFoundException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | ResourceNotFoundException | ConflictException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(await self._with_raw_response.start_import(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncImportsWithRawResponse:
        return self._with_raw_response


class ImportsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_import(
        self,
        import_id: str,
        *,
        body: DeleteImportRequest | DeleteImportRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DeleteImportResponse, DeleteImportErrorBody]:
        """Removes a previous import and the associated file stored in an S3 bucket.

        Args:
            import_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/imports/{importId}"),
            path_params=[param[str]("importId", import_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteImportRequest | DeleteImportRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[DeleteImportResponse],
            error_mapper=delete_import_error_mapper,
            request_options=request_options,
        )

    def describe_import(
        self, import_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DescribeImportResponse, DescribeImportErrorBody]:
        """Gets information about a specific import.

        Args:
            import_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/imports/{importId}"),
            path_params=[param[str]("importId", import_id)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[DescribeImportResponse],
            error_mapper=describe_import_error_mapper,
            request_options=request_options,
        )

    def list_imports(
        self,
        *,
        body: ListImportsRequest | ListImportsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListImportsResponse, ListImportsErrorBody]:
        """Lists the imports for a bot, bot locale, or custom vocabulary. Imports are kept in the list for 7 days.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/imports"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListImportsRequest | ListImportsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListImportsResponse],
            error_mapper=list_imports_error_mapper,
            request_options=request_options,
        )

    def start_import(
        self,
        *,
        body: StartImportRequest | StartImportRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[StartImportResponse, StartImportErrorBody]:
        """Starts importing a bot, bot locale, or custom vocabulary from a zip archive that you uploaded to an S3
        bucket.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/imports"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[StartImportRequest | StartImportRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[StartImportResponse],
            error_mapper=start_import_error_mapper,
            request_options=request_options,
        )


class AsyncImportsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_import(
        self,
        import_id: str,
        *,
        body: DeleteImportRequest | DeleteImportRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DeleteImportResponse, DeleteImportErrorBody]:
        """Removes a previous import and the associated file stored in an S3 bucket.

        Args:
            import_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/imports/{importId}"),
            path_params=[param[str]("importId", import_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteImportRequest | DeleteImportRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[DeleteImportResponse],
            error_mapper=delete_import_error_mapper,
            request_options=request_options,
        )

    async def describe_import(
        self, import_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DescribeImportResponse, DescribeImportErrorBody]:
        """Gets information about a specific import.

        Args:
            import_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/imports/{importId}"),
            path_params=[param[str]("importId", import_id)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[DescribeImportResponse],
            error_mapper=describe_import_error_mapper,
            request_options=request_options,
        )

    async def list_imports(
        self,
        *,
        body: ListImportsRequest | ListImportsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListImportsResponse, ListImportsErrorBody]:
        """Lists the imports for a bot, bot locale, or custom vocabulary. Imports are kept in the list for 7 days.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/imports"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListImportsRequest | ListImportsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListImportsResponse],
            error_mapper=list_imports_error_mapper,
            request_options=request_options,
        )

    async def start_import(
        self,
        *,
        body: StartImportRequest | StartImportRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[StartImportResponse, StartImportErrorBody]:
        """Starts importing a bot, bot locale, or custom vocabulary from a zip archive that you uploaded to an S3
        bucket.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/imports"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[StartImportRequest | StartImportRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[StartImportResponse],
            error_mapper=start_import_error_mapper,
            request_options=request_options,
        )
