from __future__ import annotations

from uuid import UUID

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_infos_format_error import GetInfosFormatErrorBody, get_infos_format_error_mapper
from ..errors.get_infos_signers_error import GetInfosSignersErrorBody, get_infos_signers_error_mapper
from ..errors.get_infos_validation_error import GetInfosValidationErrorBody, get_infos_validation_error_mapper
from ..models.format_infos_response import FormatInfosResponse
from ..models.signer import Signer
from ..models.validation_infos_response import ValidationInfosResponse
from ..server.server import Server


class AdditionalInformation:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AdditionalInformationWithRawResponse(client, server, auth)

    def get_infos_format(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> FormatInfosResponse:
        """Send a ``GET`` request.

        Args:
            id_: The 'id' provided by the validate operation
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error Service
                unavailable ``error`` is ``ProblemSkribbleAdditionalInformationApi | RawError``."""
        return unwrap(self._with_raw_response.get_infos_format(id_, request_options=request_options))

    def get_infos_signers(self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> list[Signer]:
        """Additional information about the people who signed the document. The query parameter is the id from the
        validation endpoint.

        Args:
            id_: The 'id' provided by the validate operation
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error Service
                unavailable ``error`` is ``ProblemSkribbleAdditionalInformationApi | RawError``."""
        return unwrap(self._with_raw_response.get_infos_signers(id_, request_options=request_options))

    def get_infos_validation(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ValidationInfosResponse:
        """Send a ``GET`` request.

        Args:
            id_: The 'id' provided by the validate operation
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error Service
                unavailable ``error`` is ``ProblemSkribbleAdditionalInformationApi | RawError``."""
        return unwrap(self._with_raw_response.get_infos_validation(id_, request_options=request_options))

    @property
    def with_raw_response(self) -> AdditionalInformationWithRawResponse:
        return self._with_raw_response


class AsyncAdditionalInformation:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAdditionalInformationWithRawResponse(client, server, auth)

    async def get_infos_format(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> FormatInfosResponse:
        """Send a ``GET`` request.

        Args:
            id_: The 'id' provided by the validate operation
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error Service
                unavailable ``error`` is ``ProblemSkribbleAdditionalInformationApi | RawError``."""
        return unwrap(await self._with_raw_response.get_infos_format(id_, request_options=request_options))

    async def get_infos_signers(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[Signer]:
        """Additional information about the people who signed the document. The query parameter is the id from the
        validation endpoint.

        Args:
            id_: The 'id' provided by the validate operation
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error Service
                unavailable ``error`` is ``ProblemSkribbleAdditionalInformationApi | RawError``."""
        return unwrap(await self._with_raw_response.get_infos_signers(id_, request_options=request_options))

    async def get_infos_validation(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ValidationInfosResponse:
        """Send a ``GET`` request.

        Args:
            id_: The 'id' provided by the validate operation
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error Service
                unavailable ``error`` is ``ProblemSkribbleAdditionalInformationApi | RawError``."""
        return unwrap(await self._with_raw_response.get_infos_validation(id_, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAdditionalInformationWithRawResponse:
        return self._with_raw_response


class AdditionalInformationWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_infos_format(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FormatInfosResponse, GetInfosFormatErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: The 'id' provided by the validate operation
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_additional_information_api("/infos/{id}/format"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer,
            decoder=json_decoder[FormatInfosResponse],
            error_mapper=get_infos_format_error_mapper,
            request_options=request_options,
        )

    def get_infos_signers(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[Signer], GetInfosSignersErrorBody]:
        """Additional information about the people who signed the document. The query parameter is the id from the
        validation endpoint.

        Args:
            id_: The 'id' provided by the validate operation
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_additional_information_api("/infos/{id}/signers"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer,
            decoder=json_decoder[list[Signer]],
            error_mapper=get_infos_signers_error_mapper,
            request_options=request_options,
        )

    def get_infos_validation(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ValidationInfosResponse, GetInfosValidationErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: The 'id' provided by the validate operation
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_additional_information_api("/infos/{id}/validation"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer,
            decoder=json_decoder[ValidationInfosResponse],
            error_mapper=get_infos_validation_error_mapper,
            request_options=request_options,
        )


class AsyncAdditionalInformationWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_infos_format(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[FormatInfosResponse, GetInfosFormatErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: The 'id' provided by the validate operation
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_additional_information_api("/infos/{id}/format"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer,
            decoder=async_json_decoder[FormatInfosResponse],
            error_mapper=get_infos_format_error_mapper,
            request_options=request_options,
        )

    async def get_infos_signers(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[Signer], GetInfosSignersErrorBody]:
        """Additional information about the people who signed the document. The query parameter is the id from the
        validation endpoint.

        Args:
            id_: The 'id' provided by the validate operation
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_additional_information_api("/infos/{id}/signers"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer,
            decoder=async_json_decoder[list[Signer]],
            error_mapper=get_infos_signers_error_mapper,
            request_options=request_options,
        )

    async def get_infos_validation(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ValidationInfosResponse, GetInfosValidationErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: The 'id' provided by the validate operation
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_additional_information_api("/infos/{id}/validation"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer,
            decoder=async_json_decoder[ValidationInfosResponse],
            error_mapper=get_infos_validation_error_mapper,
            request_options=request_options,
        )
