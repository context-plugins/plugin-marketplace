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
from ..errors.ip_whois_error import IpWhoisErrorBody, ip_whois_error_mapper
from ..models.enums.format import Format, FormatOrStr
from ..models.ip_whois_response import IpWhoisResponse
from ..server.server import Server


class IpWhois:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = IpWhoisWithRawResponse(client, server, auth)

    def ip_whois(
        self, ip: str, *, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None
    ) -> IpWhoisResponse:
        """WHOIS for an IP address. 1 credit.

        Args:
            ip: Value sent with the request.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.ip_whois(ip, format_=format_, request_options=request_options))

    @property
    def with_raw_response(self) -> IpWhoisWithRawResponse:
        return self._with_raw_response


class AsyncIpWhois:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncIpWhoisWithRawResponse(client, server, auth)

    async def ip_whois(
        self,
        ip: str,
        *,
        format_: FormatOrStr | None = Format.JSON,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> IpWhoisResponse:
        """WHOIS for an IP address. 1 credit.

        Args:
            ip: Value sent with the request.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.ip_whois(ip, format_=format_, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncIpWhoisWithRawResponse:
        return self._with_raw_response


class IpWhoisWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def ip_whois(
        self, ip: str, *, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[IpWhoisResponse, IpWhoisErrorBody]:
        """WHOIS for an IP address. 1 credit.

        Args:
            ip: Value sent with the request.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1.0/ip-whois"),
            query_params=[param[str]("ip", ip), param[FormatOrStr | None]("format", format_)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[IpWhoisResponse],
            error_mapper=ip_whois_error_mapper,
            request_options=request_options,
        )


class AsyncIpWhoisWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def ip_whois(
        self,
        ip: str,
        *,
        format_: FormatOrStr | None = Format.JSON,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[IpWhoisResponse, IpWhoisErrorBody]:
        """WHOIS for an IP address. 1 credit.

        Args:
            ip: Value sent with the request.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1.0/ip-whois"),
            query_params=[param[str]("ip", ip), param[FormatOrStr | None]("format", format_)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[IpWhoisResponse],
            error_mapper=ip_whois_error_mapper,
            request_options=request_options,
        )
