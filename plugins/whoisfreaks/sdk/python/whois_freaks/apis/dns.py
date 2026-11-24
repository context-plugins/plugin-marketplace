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
from ..errors.dns_bulk_error import DnsBulkErrorBody, dns_bulk_error_mapper
from ..errors.dns_historical_error import DnsHistoricalErrorBody, dns_historical_error_mapper
from ..errors.dns_live_error import DnsLiveErrorBody, dns_live_error_mapper
from ..errors.dns_reverse_error import DnsReverseErrorBody, dns_reverse_error_mapper
from ..models.bulk_dns_response import BulkDnsResponse
from ..models.dns_response import DnsResponse
from ..models.enums.format import Format, FormatOrStr
from ..models.enums.type import TypeOrStr
from ..models.historical_dns_response import HistoricalDnsResponse
from ..models.reverse_dns_response import ReverseDnsResponse
from ..models.v20_dns_bulk_live_request import V20DnsBulkLiveRequest, V20DnsBulkLiveRequestDict
from ..server.server import Server


class Dns:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DnsWithRawResponse(client, server, auth)

    def dns_bulk(
        self,
        body: V20DnsBulkLiveRequest | V20DnsBulkLiveRequestDict,
        *,
        type_: str = "all",
        format_: FormatOrStr | None = Format.JSON,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BulkDnsResponse:
        """Up to 100 domains + 100 IPs in one request.

        Args:
            body: The request body.
            type_: Value sent with the request.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.dns_bulk(body, type_=type_, format_=format_, request_options=request_options)
        )

    def dns_historical(
        self,
        domain_name: str,
        *,
        type_: str = "all",
        page: int | None = 1,
        format_: FormatOrStr | None = Format.JSON,
        request_options: RequestOptionsOrDict | None = None,
    ) -> HistoricalDnsResponse:
        """All historical DNS records. 2 credits per page (100 records/page).

        Args:
            domain_name: Value sent with the request.
            type_: Value sent with the request.
            page: Value sent with the request.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.dns_historical(
                domain_name, type_=type_, page=page, format_=format_, request_options=request_options
            ),
        )

    def dns_live(
        self,
        *,
        type_: str = "all",
        domain_name: str | None = None,
        ip_address: str | None = None,
        format_: FormatOrStr | None = Format.JSON,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DnsResponse:
        """Real-time DNS record lookup. 1 credit per query.

        Args:
            type_: all or comma-separated: A,MX,NS,TXT,SOA,SPF,AAAA,CNAME
            domain_name: Value sent with the request.
            ip_address: Use for PTR lookups
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Invalid API key Too many requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.dns_live(
                type_=type_,
                domain_name=domain_name,
                ip_address=ip_address,
                format_=format_,
                request_options=request_options,
            ),
        )

    def dns_reverse(
        self,
        value: str,
        type_: TypeOrStr,
        *,
        exact: bool | None = True,
        page: int | None = 1,
        format_: FormatOrStr | None = Format.JSON,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ReverseDnsResponse:
        """Search domains by IP or DNS value. 5 credits per page.

        Args:
            value: IP, CIDR, or record value
            type_: Value sent with the request.
            exact: Value sent with the request.
            page: Value sent with the request.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.dns_reverse(
                value, type_, exact=exact, page=page, format_=format_, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> DnsWithRawResponse:
        return self._with_raw_response


class AsyncDns:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDnsWithRawResponse(client, server, auth)

    async def dns_bulk(
        self,
        body: V20DnsBulkLiveRequest | V20DnsBulkLiveRequestDict,
        *,
        type_: str = "all",
        format_: FormatOrStr | None = Format.JSON,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BulkDnsResponse:
        """Up to 100 domains + 100 IPs in one request.

        Args:
            body: The request body.
            type_: Value sent with the request.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.dns_bulk(body, type_=type_, format_=format_, request_options=request_options)
        )

    async def dns_historical(
        self,
        domain_name: str,
        *,
        type_: str = "all",
        page: int | None = 1,
        format_: FormatOrStr | None = Format.JSON,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> HistoricalDnsResponse:
        """All historical DNS records. 2 credits per page (100 records/page).

        Args:
            domain_name: Value sent with the request.
            type_: Value sent with the request.
            page: Value sent with the request.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.dns_historical(
                domain_name, type_=type_, page=page, format_=format_, request_options=request_options
            ),
        )

    async def dns_live(
        self,
        *,
        type_: str = "all",
        domain_name: str | None = None,
        ip_address: str | None = None,
        format_: FormatOrStr | None = Format.JSON,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DnsResponse:
        """Real-time DNS record lookup. 1 credit per query.

        Args:
            type_: all or comma-separated: A,MX,NS,TXT,SOA,SPF,AAAA,CNAME
            domain_name: Value sent with the request.
            ip_address: Use for PTR lookups
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Invalid API key Too many requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.dns_live(
                type_=type_,
                domain_name=domain_name,
                ip_address=ip_address,
                format_=format_,
                request_options=request_options,
            ),
        )

    async def dns_reverse(
        self,
        value: str,
        type_: TypeOrStr,
        *,
        exact: bool | None = True,
        page: int | None = 1,
        format_: FormatOrStr | None = Format.JSON,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ReverseDnsResponse:
        """Search domains by IP or DNS value. 5 credits per page.

        Args:
            value: IP, CIDR, or record value
            type_: Value sent with the request.
            exact: Value sent with the request.
            page: Value sent with the request.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.dns_reverse(
                value, type_, exact=exact, page=page, format_=format_, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncDnsWithRawResponse:
        return self._with_raw_response


class DnsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def dns_bulk(
        self,
        body: V20DnsBulkLiveRequest | V20DnsBulkLiveRequestDict,
        *,
        type_: str = "all",
        format_: FormatOrStr | None = Format.JSON,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BulkDnsResponse, DnsBulkErrorBody]:
        """Up to 100 domains + 100 IPs in one request.

        Args:
            body: The request body.
            type_: Value sent with the request.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2.0/dns/bulk/live"),
            query_params=[param[str]("type", type_), param[FormatOrStr | None]("format", format_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V20DnsBulkLiveRequest | V20DnsBulkLiveRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[BulkDnsResponse],
            error_mapper=dns_bulk_error_mapper,
            request_options=request_options,
        )

    def dns_historical(
        self,
        domain_name: str,
        *,
        type_: str = "all",
        page: int | None = 1,
        format_: FormatOrStr | None = Format.JSON,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[HistoricalDnsResponse, DnsHistoricalErrorBody]:
        """All historical DNS records. 2 credits per page (100 records/page).

        Args:
            domain_name: Value sent with the request.
            type_: Value sent with the request.
            page: Value sent with the request.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2.0/dns/historical"),
            query_params=[
                param[str]("domainName", domain_name),
                param[str]("type", type_),
                param[int | None]("page", page),
                param[FormatOrStr | None]("format", format_),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[HistoricalDnsResponse],
            error_mapper=dns_historical_error_mapper,
            request_options=request_options,
        )

    def dns_live(
        self,
        *,
        type_: str = "all",
        domain_name: str | None = None,
        ip_address: str | None = None,
        format_: FormatOrStr | None = Format.JSON,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DnsResponse, DnsLiveErrorBody]:
        """Real-time DNS record lookup. 1 credit per query.

        Args:
            type_: all or comma-separated: A,MX,NS,TXT,SOA,SPF,AAAA,CNAME
            domain_name: Value sent with the request.
            ip_address: Use for PTR lookups
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2.0/dns/live"),
            query_params=[
                param[str]("type", type_),
                param[str | None]("domainName", domain_name),
                param[str | None]("ipAddress", ip_address),
                param[FormatOrStr | None]("format", format_),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[DnsResponse],
            error_mapper=dns_live_error_mapper,
            request_options=request_options,
        )

    def dns_reverse(
        self,
        value: str,
        type_: TypeOrStr,
        *,
        exact: bool | None = True,
        page: int | None = 1,
        format_: FormatOrStr | None = Format.JSON,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ReverseDnsResponse, DnsReverseErrorBody]:
        """Search domains by IP or DNS value. 5 credits per page.

        Args:
            value: IP, CIDR, or record value
            type_: Value sent with the request.
            exact: Value sent with the request.
            page: Value sent with the request.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2.1/dns/reverse"),
            query_params=[
                param[str]("value", value),
                param[TypeOrStr]("type", type_),
                param[bool | None]("exact", exact),
                param[int | None]("page", page),
                param[FormatOrStr | None]("format", format_),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ReverseDnsResponse],
            error_mapper=dns_reverse_error_mapper,
            request_options=request_options,
        )


class AsyncDnsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def dns_bulk(
        self,
        body: V20DnsBulkLiveRequest | V20DnsBulkLiveRequestDict,
        *,
        type_: str = "all",
        format_: FormatOrStr | None = Format.JSON,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BulkDnsResponse, DnsBulkErrorBody]:
        """Up to 100 domains + 100 IPs in one request.

        Args:
            body: The request body.
            type_: Value sent with the request.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2.0/dns/bulk/live"),
            query_params=[param[str]("type", type_), param[FormatOrStr | None]("format", format_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V20DnsBulkLiveRequest | V20DnsBulkLiveRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[BulkDnsResponse],
            error_mapper=dns_bulk_error_mapper,
            request_options=request_options,
        )

    async def dns_historical(
        self,
        domain_name: str,
        *,
        type_: str = "all",
        page: int | None = 1,
        format_: FormatOrStr | None = Format.JSON,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[HistoricalDnsResponse, DnsHistoricalErrorBody]:
        """All historical DNS records. 2 credits per page (100 records/page).

        Args:
            domain_name: Value sent with the request.
            type_: Value sent with the request.
            page: Value sent with the request.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2.0/dns/historical"),
            query_params=[
                param[str]("domainName", domain_name),
                param[str]("type", type_),
                param[int | None]("page", page),
                param[FormatOrStr | None]("format", format_),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[HistoricalDnsResponse],
            error_mapper=dns_historical_error_mapper,
            request_options=request_options,
        )

    async def dns_live(
        self,
        *,
        type_: str = "all",
        domain_name: str | None = None,
        ip_address: str | None = None,
        format_: FormatOrStr | None = Format.JSON,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DnsResponse, DnsLiveErrorBody]:
        """Real-time DNS record lookup. 1 credit per query.

        Args:
            type_: all or comma-separated: A,MX,NS,TXT,SOA,SPF,AAAA,CNAME
            domain_name: Value sent with the request.
            ip_address: Use for PTR lookups
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2.0/dns/live"),
            query_params=[
                param[str]("type", type_),
                param[str | None]("domainName", domain_name),
                param[str | None]("ipAddress", ip_address),
                param[FormatOrStr | None]("format", format_),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[DnsResponse],
            error_mapper=dns_live_error_mapper,
            request_options=request_options,
        )

    async def dns_reverse(
        self,
        value: str,
        type_: TypeOrStr,
        *,
        exact: bool | None = True,
        page: int | None = 1,
        format_: FormatOrStr | None = Format.JSON,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ReverseDnsResponse, DnsReverseErrorBody]:
        """Search domains by IP or DNS value. 5 credits per page.

        Args:
            value: IP, CIDR, or record value
            type_: Value sent with the request.
            exact: Value sent with the request.
            page: Value sent with the request.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2.1/dns/reverse"),
            query_params=[
                param[str]("value", value),
                param[TypeOrStr]("type", type_),
                param[bool | None]("exact", exact),
                param[int | None]("page", page),
                param[FormatOrStr | None]("format", format_),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ReverseDnsResponse],
            error_mapper=dns_reverse_error_mapper,
            request_options=request_options,
        )
