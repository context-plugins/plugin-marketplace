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
from ..errors.create_export_error import CreateExportErrorBody, create_export_error_mapper
from ..errors.delete_export_error import DeleteExportErrorBody, delete_export_error_mapper
from ..errors.describe_export_error import DescribeExportErrorBody, describe_export_error_mapper
from ..errors.get_export_error import GetExportErrorBody, get_export_error_mapper
from ..errors.list_exports_error import ListExportsErrorBody, list_exports_error_mapper
from ..errors.update_export_error import UpdateExportErrorBody, update_export_error_mapper
from ..models.create_export_request import CreateExportRequest, CreateExportRequestDict
from ..models.create_export_response import CreateExportResponse
from ..models.delete_export_request import DeleteExportRequest, DeleteExportRequestDict
from ..models.delete_export_response import DeleteExportResponse
from ..models.describe_export_response import DescribeExportResponse
from ..models.get_export_response import GetExportResponse
from ..models.list_exports_request import ListExportsRequest, ListExportsRequestDict
from ..models.list_exports_response import ListExportsResponse
from ..models.update_export_request import UpdateExportRequest, UpdateExportRequestDict
from ..models.update_export_response import UpdateExportResponse
from ..server.server import Server


class Exports:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ExportsWithRawResponse(client, server, auth)

    def create_export(
        self,
        *,
        body: CreateExportRequest | CreateExportRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreateExportResponse:
        """Creates a zip archive containing the contents of a bot or a bot locale. The archive contains a directory
        structure that contains JSON files that define the bot. You can create an archive that contains the complete
        definition of a bot, or you can specify that the archive contain only the definition of a single bot locale. For
        more information about exporting bots, and about the structure of the export archive, see Importing and
        exporting bots

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
        return unwrap(self._with_raw_response.create_export(body=body, request_options=request_options))

    def delete_export(
        self,
        export_id: str,
        *,
        body: DeleteExportRequest | DeleteExportRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DeleteExportResponse:
        """Removes a previous export and the associated files stored in an S3 bucket.

        Args:
            export_id: Value sent with the request.
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
        return unwrap(self._with_raw_response.delete_export(export_id, body=body, request_options=request_options))

    def describe_export(
        self, export_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> DescribeExportResponse:
        """Gets information about a specific export.

        Args:
            export_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(self._with_raw_response.describe_export(export_id, request_options=request_options))

    def get_export(self, *, request_options: RequestOptionsOrDict | None = None) -> GetExportResponse:
        """Exports the contents of a Amazon Lex resource in a specified format.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``BadRequestException | NotFoundException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(self._with_raw_response.get_export(request_options=request_options))

    def list_exports(
        self,
        *,
        body: ListExportsRequest | ListExportsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListExportsResponse:
        """Lists the exports for a bot, bot locale, or custom vocabulary. Exports are kept in the list for 7 days.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ThrottlingException | InternalServerException | RawError``."""
        return unwrap(self._with_raw_response.list_exports(body=body, request_options=request_options))

    def update_export(
        self,
        export_id: str,
        *,
        body: UpdateExportRequest | UpdateExportRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> UpdateExportResponse:
        """Updates the password used to protect an export zip archive. The password is not required. If you don't supply
        a password, Amazon Lex generates a zip file that is not protected by a password. This is the archive that is
        available at the pre-signed S3 URL provided by the DescribeExport operation.

        Args:
            export_id: Value sent with the request.
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
        return unwrap(self._with_raw_response.update_export(export_id, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> ExportsWithRawResponse:
        return self._with_raw_response


class AsyncExports:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncExportsWithRawResponse(client, server, auth)

    async def create_export(
        self,
        *,
        body: CreateExportRequest | CreateExportRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreateExportResponse:
        """Creates a zip archive containing the contents of a bot or a bot locale. The archive contains a directory
        structure that contains JSON files that define the bot. You can create an archive that contains the complete
        definition of a bot, or you can specify that the archive contain only the definition of a single bot locale. For
        more information about exporting bots, and about the structure of the export archive, see Importing and
        exporting bots

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
        return unwrap(await self._with_raw_response.create_export(body=body, request_options=request_options))

    async def delete_export(
        self,
        export_id: str,
        *,
        body: DeleteExportRequest | DeleteExportRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DeleteExportResponse:
        """Removes a previous export and the associated files stored in an S3 bucket.

        Args:
            export_id: Value sent with the request.
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
            await self._with_raw_response.delete_export(export_id, body=body, request_options=request_options)
        )

    async def describe_export(
        self, export_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DescribeExportResponse:
        """Gets information about a specific export.

        Args:
            export_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(await self._with_raw_response.describe_export(export_id, request_options=request_options))

    async def get_export(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> GetExportResponse:
        """Exports the contents of a Amazon Lex resource in a specified format.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``BadRequestException | NotFoundException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(await self._with_raw_response.get_export(request_options=request_options))

    async def list_exports(
        self,
        *,
        body: ListExportsRequest | ListExportsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListExportsResponse:
        """Lists the exports for a bot, bot locale, or custom vocabulary. Exports are kept in the list for 7 days.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ThrottlingException | InternalServerException | RawError``."""
        return unwrap(await self._with_raw_response.list_exports(body=body, request_options=request_options))

    async def update_export(
        self,
        export_id: str,
        *,
        body: UpdateExportRequest | UpdateExportRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> UpdateExportResponse:
        """Updates the password used to protect an export zip archive. The password is not required. If you don't supply
        a password, Amazon Lex generates a zip file that is not protected by a password. This is the archive that is
        available at the pre-signed S3 URL provided by the DescribeExport operation.

        Args:
            export_id: Value sent with the request.
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
        return unwrap(
            await self._with_raw_response.update_export(export_id, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncExportsWithRawResponse:
        return self._with_raw_response


class ExportsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_export(
        self,
        *,
        body: CreateExportRequest | CreateExportRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateExportResponse, CreateExportErrorBody]:
        """Creates a zip archive containing the contents of a bot or a bot locale. The archive contains a directory
        structure that contains JSON files that define the bot. You can create an archive that contains the complete
        definition of a bot, or you can specify that the archive contain only the definition of a single bot locale. For
        more information about exporting bots, and about the structure of the export archive, see Importing and
        exporting bots

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_exports_api("/exports"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateExportRequest | CreateExportRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[CreateExportResponse],
            error_mapper=create_export_error_mapper,
            request_options=request_options,
        )

    def delete_export(
        self,
        export_id: str,
        *,
        body: DeleteExportRequest | DeleteExportRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DeleteExportResponse, DeleteExportErrorBody]:
        """Removes a previous export and the associated files stored in an S3 bucket.

        Args:
            export_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_exports_api("/exports/{exportId}"),
            path_params=[param[str]("exportId", export_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteExportRequest | DeleteExportRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[DeleteExportResponse],
            error_mapper=delete_export_error_mapper,
            request_options=request_options,
        )

    def describe_export(
        self, export_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DescribeExportResponse, DescribeExportErrorBody]:
        """Gets information about a specific export.

        Args:
            export_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_exports_api("/exports/{exportId}"),
            path_params=[param[str]("exportId", export_id)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[DescribeExportResponse],
            error_mapper=describe_export_error_mapper,
            request_options=request_options,
        )

    def get_export(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetExportResponse, GetExportErrorBody]:
        """Exports the contents of a Amazon Lex resource in a specified format.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_exports_api("/exports"),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetExportResponse],
            error_mapper=get_export_error_mapper,
            request_options=request_options,
        )

    def list_exports(
        self,
        *,
        body: ListExportsRequest | ListExportsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListExportsResponse, ListExportsErrorBody]:
        """Lists the exports for a bot, bot locale, or custom vocabulary. Exports are kept in the list for 7 days.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_exports_api("/exports"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListExportsRequest | ListExportsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListExportsResponse],
            error_mapper=list_exports_error_mapper,
            request_options=request_options,
        )

    def update_export(
        self,
        export_id: str,
        *,
        body: UpdateExportRequest | UpdateExportRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateExportResponse, UpdateExportErrorBody]:
        """Updates the password used to protect an export zip archive. The password is not required. If you don't supply
        a password, Amazon Lex generates a zip file that is not protected by a password. This is the archive that is
        available at the pre-signed S3 URL provided by the DescribeExport operation.

        Args:
            export_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_exports_api("/exports/{exportId}"),
            path_params=[param[str]("exportId", export_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateExportRequest | UpdateExportRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[UpdateExportResponse],
            error_mapper=update_export_error_mapper,
            request_options=request_options,
        )


class AsyncExportsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_export(
        self,
        *,
        body: CreateExportRequest | CreateExportRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateExportResponse, CreateExportErrorBody]:
        """Creates a zip archive containing the contents of a bot or a bot locale. The archive contains a directory
        structure that contains JSON files that define the bot. You can create an archive that contains the complete
        definition of a bot, or you can specify that the archive contain only the definition of a single bot locale. For
        more information about exporting bots, and about the structure of the export archive, see Importing and
        exporting bots

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_exports_api("/exports"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateExportRequest | CreateExportRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[CreateExportResponse],
            error_mapper=create_export_error_mapper,
            request_options=request_options,
        )

    async def delete_export(
        self,
        export_id: str,
        *,
        body: DeleteExportRequest | DeleteExportRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DeleteExportResponse, DeleteExportErrorBody]:
        """Removes a previous export and the associated files stored in an S3 bucket.

        Args:
            export_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_exports_api("/exports/{exportId}"),
            path_params=[param[str]("exportId", export_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteExportRequest | DeleteExportRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[DeleteExportResponse],
            error_mapper=delete_export_error_mapper,
            request_options=request_options,
        )

    async def describe_export(
        self, export_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DescribeExportResponse, DescribeExportErrorBody]:
        """Gets information about a specific export.

        Args:
            export_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_exports_api("/exports/{exportId}"),
            path_params=[param[str]("exportId", export_id)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[DescribeExportResponse],
            error_mapper=describe_export_error_mapper,
            request_options=request_options,
        )

    async def get_export(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetExportResponse, GetExportErrorBody]:
        """Exports the contents of a Amazon Lex resource in a specified format.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_exports_api("/exports"),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetExportResponse],
            error_mapper=get_export_error_mapper,
            request_options=request_options,
        )

    async def list_exports(
        self,
        *,
        body: ListExportsRequest | ListExportsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListExportsResponse, ListExportsErrorBody]:
        """Lists the exports for a bot, bot locale, or custom vocabulary. Exports are kept in the list for 7 days.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_exports_api("/exports"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListExportsRequest | ListExportsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListExportsResponse],
            error_mapper=list_exports_error_mapper,
            request_options=request_options,
        )

    async def update_export(
        self,
        export_id: str,
        *,
        body: UpdateExportRequest | UpdateExportRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateExportResponse, UpdateExportErrorBody]:
        """Updates the password used to protect an export zip archive. The password is not required. If you don't supply
        a password, Amazon Lex generates a zip file that is not protected by a password. This is the archive that is
        available at the pre-signed S3 URL provided by the DescribeExport operation.

        Args:
            export_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_exports_api("/exports/{exportId}"),
            path_params=[param[str]("exportId", export_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateExportRequest | UpdateExportRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[UpdateExportResponse],
            error_mapper=update_export_error_mapper,
            request_options=request_options,
        )
