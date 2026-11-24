from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    Date,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.subdomains_error import SubdomainsErrorBody, subdomains_error_mapper
from ..models.enums.format import Format, FormatOrStr
from ..models.enums.status import StatusOrStr
from ..models.subdomains_response import SubdomainsResponse
from ..server.server import Server


class Subdomains:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SubdomainsWithRawResponse(client, server, auth)

    def subdomains(
        self,
        domain: str,
        *,
        after: Date | None = None,
        before: Date | None = None,
        status: StatusOrStr | None = None,
        page: int | None = 1,
        format_: FormatOrStr | None = Format.JSON,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SubdomainsResponse:
        """All subdomains including nested. 2 credits per query.

        Args:
            domain: Value sent with the request.
            after: Value sent with the request.
            before: Value sent with the request.
            status: Value sent with the request.
            page: Value sent with the request.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.subdomains(
                domain,
                after=after,
                before=before,
                status=status,
                page=page,
                format_=format_,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> SubdomainsWithRawResponse:
        return self._with_raw_response


class AsyncSubdomains:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSubdomainsWithRawResponse(client, server, auth)

    async def subdomains(
        self,
        domain: str,
        *,
        after: Date | None = None,
        before: Date | None = None,
        status: StatusOrStr | None = None,
        page: int | None = 1,
        format_: FormatOrStr | None = Format.JSON,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SubdomainsResponse:
        """All subdomains including nested. 2 credits per query.

        Args:
            domain: Value sent with the request.
            after: Value sent with the request.
            before: Value sent with the request.
            status: Value sent with the request.
            page: Value sent with the request.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.subdomains(
                domain,
                after=after,
                before=before,
                status=status,
                page=page,
                format_=format_,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncSubdomainsWithRawResponse:
        return self._with_raw_response


class SubdomainsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def subdomains(
        self,
        domain: str,
        *,
        after: Date | None = None,
        before: Date | None = None,
        status: StatusOrStr | None = None,
        page: int | None = 1,
        format_: FormatOrStr | None = Format.JSON,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SubdomainsResponse, SubdomainsErrorBody]:
        """All subdomains including nested. 2 credits per query.

        Args:
            domain: Value sent with the request.
            after: Value sent with the request.
            before: Value sent with the request.
            status: Value sent with the request.
            page: Value sent with the request.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1.0/subdomains"),
            query_params=[
                param[str]("domain", domain),
                param[Date | None]("after", after),
                param[Date | None]("before", before),
                param[StatusOrStr | None]("status", status),
                param[int | None]("page", page),
                param[FormatOrStr | None]("format", format_),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[SubdomainsResponse],
            error_mapper=subdomains_error_mapper,
            request_options=request_options,
        )


class AsyncSubdomainsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def subdomains(
        self,
        domain: str,
        *,
        after: Date | None = None,
        before: Date | None = None,
        status: StatusOrStr | None = None,
        page: int | None = 1,
        format_: FormatOrStr | None = Format.JSON,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SubdomainsResponse, SubdomainsErrorBody]:
        """All subdomains including nested. 2 credits per query.

        Args:
            domain: Value sent with the request.
            after: Value sent with the request.
            before: Value sent with the request.
            status: Value sent with the request.
            page: Value sent with the request.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1.0/subdomains"),
            query_params=[
                param[str]("domain", domain),
                param[Date | None]("after", after),
                param[Date | None]("before", before),
                param[StatusOrStr | None]("status", status),
                param[int | None]("page", page),
                param[FormatOrStr | None]("format", format_),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[SubdomainsResponse],
            error_mapper=subdomains_error_mapper,
            request_options=request_options,
        )
