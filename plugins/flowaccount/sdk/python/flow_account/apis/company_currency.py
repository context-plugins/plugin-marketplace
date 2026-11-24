from __future__ import annotations

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
    file_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..server.server import Server


class CompanyCurrency:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CompanyCurrencyWithRawResponse(client, server, auth)

    def company_currency_get_company_currencies(
        self, culture: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> FileResponse:
        """Send a ``GET`` request.

        Args:
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A ``FileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.company_currency_get_company_currencies(culture, request_options=request_options)
        )

    def company_currency_get_list(
        self, culture: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> FileResponse:
        """Send a ``GET`` request.

        Args:
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A ``FileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.company_currency_get_list(culture, request_options=request_options))

    @property
    def with_raw_response(self) -> CompanyCurrencyWithRawResponse:
        return self._with_raw_response


class AsyncCompanyCurrency:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCompanyCurrencyWithRawResponse(client, server, auth)

    async def company_currency_get_company_currencies(
        self, culture: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """Send a ``GET`` request.

        Args:
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``AsyncFileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.company_currency_get_company_currencies(
                culture, request_options=request_options
            ),
        )

    async def company_currency_get_list(
        self, culture: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """Send a ``GET`` request.

        Args:
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``AsyncFileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.company_currency_get_list(culture, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncCompanyCurrencyWithRawResponse:
        return self._with_raw_response


class CompanyCurrencyWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def company_currency_get_company_currencies(
        self, culture: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{culture}/company-currency/currency"),
            path_params=[param[str]("culture", culture)],
            auth_scheme=self._auth.bearer,
            decoder=file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def company_currency_get_list(
        self, culture: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{culture}/company-currency"),
            path_params=[param[str]("culture", culture)],
            auth_scheme=self._auth.bearer,
            decoder=file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncCompanyCurrencyWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def company_currency_get_company_currencies(
        self, culture: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{culture}/company-currency/currency"),
            path_params=[param[str]("culture", culture)],
            auth_scheme=self._auth.bearer,
            decoder=async_file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def company_currency_get_list(
        self, culture: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{culture}/company-currency"),
            path_params=[param[str]("culture", culture)],
            auth_scheme=self._auth.bearer,
            decoder=async_file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )
