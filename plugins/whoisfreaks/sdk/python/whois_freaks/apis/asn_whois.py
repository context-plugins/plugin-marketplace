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
from ..errors.asn_whois_error import AsnWhoisErrorBody, asn_whois_error_mapper
from ..models.asn_whois_response import AsnWhoisResponse
from ..models.enums.format import Format, FormatOrStr
from ..server.server import Server


class AsnWhois:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AsnWhoisWithRawResponse(client, server, auth)

    def asn_whois(
        self,
        asn: str,
        *,
        format_: FormatOrStr | None = Format.JSON,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AsnWhoisResponse:
        """WHOIS for an ASN. 1 credit.

        Args:
            asn: Value sent with the request.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.asn_whois(asn, format_=format_, request_options=request_options))

    @property
    def with_raw_response(self) -> AsnWhoisWithRawResponse:
        return self._with_raw_response


class AsyncAsnWhois:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAsnWhoisWithRawResponse(client, server, auth)

    async def asn_whois(
        self,
        asn: str,
        *,
        format_: FormatOrStr | None = Format.JSON,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AsnWhoisResponse:
        """WHOIS for an ASN. 1 credit.

        Args:
            asn: Value sent with the request.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.asn_whois(asn, format_=format_, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAsnWhoisWithRawResponse:
        return self._with_raw_response


class AsnWhoisWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def asn_whois(
        self,
        asn: str,
        *,
        format_: FormatOrStr | None = Format.JSON,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AsnWhoisResponse, AsnWhoisErrorBody]:
        """WHOIS for an ASN. 1 credit.

        Args:
            asn: Value sent with the request.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2.0/asn-whois"),
            query_params=[param[str]("asn", asn), param[FormatOrStr | None]("format", format_)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[AsnWhoisResponse],
            error_mapper=asn_whois_error_mapper,
            request_options=request_options,
        )


class AsyncAsnWhoisWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def asn_whois(
        self,
        asn: str,
        *,
        format_: FormatOrStr | None = Format.JSON,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AsnWhoisResponse, AsnWhoisErrorBody]:
        """WHOIS for an ASN. 1 credit.

        Args:
            asn: Value sent with the request.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2.0/asn-whois"),
            query_params=[param[str]("asn", asn), param[FormatOrStr | None]("format", format_)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[AsnWhoisResponse],
            error_mapper=asn_whois_error_mapper,
            request_options=request_options,
        )
