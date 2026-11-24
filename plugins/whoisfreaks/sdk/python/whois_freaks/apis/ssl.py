from __future__ import annotations

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
from ..errors.ssl_lookup_error import SslLookupErrorBody, ssl_lookup_error_mapper
from ..models.enums.format import Format, FormatOrStr
from ..models.ssl_response import SslResponse
from ..server.server import Server


class Ssl:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SslWithRawResponse(client, server, auth)

    def ssl_lookup(
        self,
        domain_name: str,
        *,
        chain: bool | None = False,
        ssl_raw: bool | None = False,
        format_: FormatOrStr | None = Format.JSON,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SslResponse:
        """Real-time SSL cert with optional chain.

        Args:
            domain_name: Value sent with the request.
            chain: Value sent with the request.
            ssl_raw: Value sent with the request.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.ssl_lookup(
                domain_name, chain=chain, ssl_raw=ssl_raw, format_=format_, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> SslWithRawResponse:
        return self._with_raw_response


class AsyncSsl:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSslWithRawResponse(client, server, auth)

    async def ssl_lookup(
        self,
        domain_name: str,
        *,
        chain: bool | None = False,
        ssl_raw: bool | None = False,
        format_: FormatOrStr | None = Format.JSON,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SslResponse:
        """Real-time SSL cert with optional chain.

        Args:
            domain_name: Value sent with the request.
            chain: Value sent with the request.
            ssl_raw: Value sent with the request.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.ssl_lookup(
                domain_name, chain=chain, ssl_raw=ssl_raw, format_=format_, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncSslWithRawResponse:
        return self._with_raw_response


class SslWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def ssl_lookup(
        self,
        domain_name: str,
        *,
        chain: bool | None = False,
        ssl_raw: bool | None = False,
        format_: FormatOrStr | None = Format.JSON,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SslResponse, SslLookupErrorBody]:
        """Real-time SSL cert with optional chain.

        Args:
            domain_name: Value sent with the request.
            chain: Value sent with the request.
            ssl_raw: Value sent with the request.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1.0/ssl/live"),
            query_params=[
                param[str]("domainName", domain_name),
                param[bool | None]("chain", chain),
                param[bool | None]("sslRaw", ssl_raw),
                param[FormatOrStr | None]("format", format_),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[SslResponse],
            error_mapper=ssl_lookup_error_mapper,
            request_options=request_options,
        )


class AsyncSslWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def ssl_lookup(
        self,
        domain_name: str,
        *,
        chain: bool | None = False,
        ssl_raw: bool | None = False,
        format_: FormatOrStr | None = Format.JSON,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SslResponse, SslLookupErrorBody]:
        """Real-time SSL cert with optional chain.

        Args:
            domain_name: Value sent with the request.
            chain: Value sent with the request.
            ssl_raw: Value sent with the request.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1.0/ssl/live"),
            query_params=[
                param[str]("domainName", domain_name),
                param[bool | None]("chain", chain),
                param[bool | None]("sslRaw", ssl_raw),
                param[FormatOrStr | None]("format", format_),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[SslResponse],
            error_mapper=ssl_lookup_error_mapper,
            request_options=request_options,
        )
