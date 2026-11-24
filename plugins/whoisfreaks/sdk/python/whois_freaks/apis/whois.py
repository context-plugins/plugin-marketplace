from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..errors.bulk_whois_error import BulkWhoisErrorBody, bulk_whois_error_mapper
from ..errors.whois_live_error import WhoisLiveErrorBody, whois_live_error_mapper
from ..models.bulk_whois_response import BulkWhoisResponse
from ..models.enums.format import Format, FormatOrStr
from ..models.reverse_whois_response import ReverseWhoisResponse
from ..models.v20_bulkwhois_live_request import V20BulkwhoisLiveRequest, V20BulkwhoisLiveRequestDict
from ..models.whois_historical_response import WhoisHistoricalResponse
from ..models.whois_response import WhoisResponse
from ..server.server import Server


class Whois:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = WhoisWithRawResponse(client, server, auth)

    def bulk_whois(
        self,
        body: V20BulkwhoisLiveRequest | V20BulkwhoisLiveRequestDict,
        *,
        format_: FormatOrStr | None = Format.JSON,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BulkWhoisResponse:
        """Up to 100 domains in one request. 1 credit per successful domain.

        Args:
            body: The request body.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.bulk_whois(body, format_=format_, request_options=request_options))

    def whois_history(
        self,
        domain_name: str,
        *,
        page: int | None = None,
        format_: FormatOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> WhoisHistoricalResponse:
        """Send a ``GET`` request.

        Args:
            domain_name: Domain to fetch historical WHOIS records for
            page: Page number
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Historical WHOIS records

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.whois_history(
                domain_name, page=page, format_=format_, request_options=request_options
            ),
        )

    def whois_live(
        self,
        domain_name: str,
        *,
        format_: FormatOrStr | None = Format.JSON,
        request_options: RequestOptionsOrDict | None = None,
    ) -> WhoisResponse:
        """Real-time WHOIS lookup from authoritative servers. Cost 1 credit.

        Args:
            domain_name: Value sent with the request.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Invalid API key Not found Too many requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.whois_live(domain_name, format_=format_, request_options=request_options))

    def whois_reverse(
        self,
        keyword: str,
        *,
        page: int | None = None,
        format_: FormatOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ReverseWhoisResponse:
        """Send a ``GET`` request.

        Args:
            keyword: Keyword to search across WHOIS records
            page: Page number
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Reverse WHOIS results (paginated)

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.whois_reverse(keyword, page=page, format_=format_, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> WhoisWithRawResponse:
        return self._with_raw_response


class AsyncWhois:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncWhoisWithRawResponse(client, server, auth)

    async def bulk_whois(
        self,
        body: V20BulkwhoisLiveRequest | V20BulkwhoisLiveRequestDict,
        *,
        format_: FormatOrStr | None = Format.JSON,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BulkWhoisResponse:
        """Up to 100 domains in one request. 1 credit per successful domain.

        Args:
            body: The request body.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.bulk_whois(body, format_=format_, request_options=request_options))

    async def whois_history(
        self,
        domain_name: str,
        *,
        page: int | None = None,
        format_: FormatOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> WhoisHistoricalResponse:
        """Send a ``GET`` request.

        Args:
            domain_name: Domain to fetch historical WHOIS records for
            page: Page number
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Historical WHOIS records

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.whois_history(
                domain_name, page=page, format_=format_, request_options=request_options
            ),
        )

    async def whois_live(
        self,
        domain_name: str,
        *,
        format_: FormatOrStr | None = Format.JSON,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> WhoisResponse:
        """Real-time WHOIS lookup from authoritative servers. Cost 1 credit.

        Args:
            domain_name: Value sent with the request.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Invalid API key Not found Too many requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.whois_live(domain_name, format_=format_, request_options=request_options)
        )

    async def whois_reverse(
        self,
        keyword: str,
        *,
        page: int | None = None,
        format_: FormatOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ReverseWhoisResponse:
        """Send a ``GET`` request.

        Args:
            keyword: Keyword to search across WHOIS records
            page: Page number
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Reverse WHOIS results (paginated)

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.whois_reverse(
                keyword, page=page, format_=format_, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncWhoisWithRawResponse:
        return self._with_raw_response


class WhoisWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def bulk_whois(
        self,
        body: V20BulkwhoisLiveRequest | V20BulkwhoisLiveRequestDict,
        *,
        format_: FormatOrStr | None = Format.JSON,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BulkWhoisResponse, BulkWhoisErrorBody]:
        """Up to 100 domains in one request. 1 credit per successful domain.

        Args:
            body: The request body.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2.0/bulkwhois/live"),
            query_params=[param[FormatOrStr | None]("format", format_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V20BulkwhoisLiveRequest | V20BulkwhoisLiveRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[BulkWhoisResponse],
            error_mapper=bulk_whois_error_mapper,
            request_options=request_options,
        )

    def whois_history(
        self,
        domain_name: str,
        *,
        page: int | None = None,
        format_: FormatOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[WhoisHistoricalResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            domain_name: Domain to fetch historical WHOIS records for
            page: Page number
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2.0/whois/history"),
            query_params=[
                param[str]("domainName", domain_name),
                param[int | None]("page", page),
                param[FormatOrStr | None]("format", format_),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[WhoisHistoricalResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def whois_live(
        self,
        domain_name: str,
        *,
        format_: FormatOrStr | None = Format.JSON,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[WhoisResponse, WhoisLiveErrorBody]:
        """Real-time WHOIS lookup from authoritative servers. Cost 1 credit.

        Args:
            domain_name: Value sent with the request.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2.0/whois/live"),
            query_params=[param[str]("domainName", domain_name), param[FormatOrStr | None]("format", format_)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[WhoisResponse],
            error_mapper=whois_live_error_mapper,
            request_options=request_options,
        )

    def whois_reverse(
        self,
        keyword: str,
        *,
        page: int | None = None,
        format_: FormatOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ReverseWhoisResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            keyword: Keyword to search across WHOIS records
            page: Page number
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2.0/whois/reverse"),
            query_params=[
                param[str]("keyword", keyword),
                param[int | None]("page", page),
                param[FormatOrStr | None]("format", format_),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ReverseWhoisResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncWhoisWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def bulk_whois(
        self,
        body: V20BulkwhoisLiveRequest | V20BulkwhoisLiveRequestDict,
        *,
        format_: FormatOrStr | None = Format.JSON,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BulkWhoisResponse, BulkWhoisErrorBody]:
        """Up to 100 domains in one request. 1 credit per successful domain.

        Args:
            body: The request body.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2.0/bulkwhois/live"),
            query_params=[param[FormatOrStr | None]("format", format_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V20BulkwhoisLiveRequest | V20BulkwhoisLiveRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[BulkWhoisResponse],
            error_mapper=bulk_whois_error_mapper,
            request_options=request_options,
        )

    async def whois_history(
        self,
        domain_name: str,
        *,
        page: int | None = None,
        format_: FormatOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[WhoisHistoricalResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            domain_name: Domain to fetch historical WHOIS records for
            page: Page number
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2.0/whois/history"),
            query_params=[
                param[str]("domainName", domain_name),
                param[int | None]("page", page),
                param[FormatOrStr | None]("format", format_),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[WhoisHistoricalResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def whois_live(
        self,
        domain_name: str,
        *,
        format_: FormatOrStr | None = Format.JSON,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[WhoisResponse, WhoisLiveErrorBody]:
        """Real-time WHOIS lookup from authoritative servers. Cost 1 credit.

        Args:
            domain_name: Value sent with the request.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2.0/whois/live"),
            query_params=[param[str]("domainName", domain_name), param[FormatOrStr | None]("format", format_)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[WhoisResponse],
            error_mapper=whois_live_error_mapper,
            request_options=request_options,
        )

    async def whois_reverse(
        self,
        keyword: str,
        *,
        page: int | None = None,
        format_: FormatOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ReverseWhoisResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            keyword: Keyword to search across WHOIS records
            page: Page number
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2.0/whois/reverse"),
            query_params=[
                param[str]("keyword", keyword),
                param[int | None]("page", page),
                param[FormatOrStr | None]("format", format_),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ReverseWhoisResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
