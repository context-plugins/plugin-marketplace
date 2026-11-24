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
from ..errors.bulk_domain_availability_v2_error import (
    BulkDomainAvailabilityV2ErrorBody,
    bulk_domain_availability_v2_error_mapper,
)
from ..errors.domain_availability_v2_error import DomainAvailabilityV2ErrorBody, domain_availability_v2_error_mapper
from ..models.bulk_domain_availability_request import BulkDomainAvailabilityRequest, BulkDomainAvailabilityRequestDict
from ..models.bulk_domain_availability_response import BulkDomainAvailabilityResponse
from ..models.domain_availability_response import DomainAvailabilityResponse
from ..models.enums.format import Format, FormatOrStr
from ..server.server import Server


class DomainAvailability:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DomainAvailabilityWithRawResponse(client, server, auth)

    def bulk_domain_availability_v2(
        self,
        body: BulkDomainAvailabilityRequest | BulkDomainAvailabilityRequestDict,
        *,
        domain: str | None = None,
        format_: FormatOrStr | None = Format.JSON,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BulkDomainAvailabilityResponse:
        """Two bulk modes. Mode 1: POST domainNames array. Mode 2: POST tld array plus domain query param. Max 100
        domains per request. 1 credit per domain checked.

        Args:
            body: The request body.
            domain: Required for TLD-mode bulk check (base domain).
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Invalid API key Too many requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.bulk_domain_availability_v2(
                body, domain=domain, format_=format_, request_options=request_options
            ),
        )

    def domain_availability_v2(
        self,
        domain: str,
        *,
        sug: bool | None = False,
        count: int | None = 5,
        format_: FormatOrStr | None = Format.JSON,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DomainAvailabilityResponse:
        """Check availability of a single domain and optionally get suggestions across multiple TLDs. 1 credit per
        domain checked. sug=false checks only the queried domain; sug=true returns up to ``count`` (max 100) TLD
        suggestions.

        Args:
            domain: The domain name to check
            sug: Whether to return TLD suggestions alongside the queried domain.
            count: Number of TLD suggestions to return when sug=true. Maximum is 100.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Invalid API key Too many requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.domain_availability_v2(
                domain, sug=sug, count=count, format_=format_, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> DomainAvailabilityWithRawResponse:
        return self._with_raw_response


class AsyncDomainAvailability:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDomainAvailabilityWithRawResponse(client, server, auth)

    async def bulk_domain_availability_v2(
        self,
        body: BulkDomainAvailabilityRequest | BulkDomainAvailabilityRequestDict,
        *,
        domain: str | None = None,
        format_: FormatOrStr | None = Format.JSON,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BulkDomainAvailabilityResponse:
        """Two bulk modes. Mode 1: POST domainNames array. Mode 2: POST tld array plus domain query param. Max 100
        domains per request. 1 credit per domain checked.

        Args:
            body: The request body.
            domain: Required for TLD-mode bulk check (base domain).
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Invalid API key Too many requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.bulk_domain_availability_v2(
                body, domain=domain, format_=format_, request_options=request_options
            ),
        )

    async def domain_availability_v2(
        self,
        domain: str,
        *,
        sug: bool | None = False,
        count: int | None = 5,
        format_: FormatOrStr | None = Format.JSON,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DomainAvailabilityResponse:
        """Check availability of a single domain and optionally get suggestions across multiple TLDs. 1 credit per
        domain checked. sug=false checks only the queried domain; sug=true returns up to ``count`` (max 100) TLD
        suggestions.

        Args:
            domain: The domain name to check
            sug: Whether to return TLD suggestions alongside the queried domain.
            count: Number of TLD suggestions to return when sug=true. Maximum is 100.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Invalid API key Too many requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.domain_availability_v2(
                domain, sug=sug, count=count, format_=format_, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncDomainAvailabilityWithRawResponse:
        return self._with_raw_response


class DomainAvailabilityWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def bulk_domain_availability_v2(
        self,
        body: BulkDomainAvailabilityRequest | BulkDomainAvailabilityRequestDict,
        *,
        domain: str | None = None,
        format_: FormatOrStr | None = Format.JSON,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BulkDomainAvailabilityResponse, BulkDomainAvailabilityV2ErrorBody]:
        """Two bulk modes. Mode 1: POST domainNames array. Mode 2: POST tld array plus domain query param. Max 100
        domains per request. 1 credit per domain checked.

        Args:
            body: The request body.
            domain: Required for TLD-mode bulk check (base domain).
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2.0/domain/availability"),
            query_params=[param[str | None]("domain", domain), param[FormatOrStr | None]("format", format_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BulkDomainAvailabilityRequest | BulkDomainAvailabilityRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[BulkDomainAvailabilityResponse],
            error_mapper=bulk_domain_availability_v2_error_mapper,
            request_options=request_options,
        )

    def domain_availability_v2(
        self,
        domain: str,
        *,
        sug: bool | None = False,
        count: int | None = 5,
        format_: FormatOrStr | None = Format.JSON,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DomainAvailabilityResponse, DomainAvailabilityV2ErrorBody]:
        """Check availability of a single domain and optionally get suggestions across multiple TLDs. 1 credit per
        domain checked. sug=false checks only the queried domain; sug=true returns up to ``count`` (max 100) TLD
        suggestions.

        Args:
            domain: The domain name to check
            sug: Whether to return TLD suggestions alongside the queried domain.
            count: Number of TLD suggestions to return when sug=true. Maximum is 100.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2.0/domain/availability"),
            query_params=[
                param[str]("domain", domain),
                param[bool | None]("sug", sug),
                param[int | None]("count", count),
                param[FormatOrStr | None]("format", format_),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[DomainAvailabilityResponse],
            error_mapper=domain_availability_v2_error_mapper,
            request_options=request_options,
        )


class AsyncDomainAvailabilityWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def bulk_domain_availability_v2(
        self,
        body: BulkDomainAvailabilityRequest | BulkDomainAvailabilityRequestDict,
        *,
        domain: str | None = None,
        format_: FormatOrStr | None = Format.JSON,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BulkDomainAvailabilityResponse, BulkDomainAvailabilityV2ErrorBody]:
        """Two bulk modes. Mode 1: POST domainNames array. Mode 2: POST tld array plus domain query param. Max 100
        domains per request. 1 credit per domain checked.

        Args:
            body: The request body.
            domain: Required for TLD-mode bulk check (base domain).
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2.0/domain/availability"),
            query_params=[param[str | None]("domain", domain), param[FormatOrStr | None]("format", format_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BulkDomainAvailabilityRequest | BulkDomainAvailabilityRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[BulkDomainAvailabilityResponse],
            error_mapper=bulk_domain_availability_v2_error_mapper,
            request_options=request_options,
        )

    async def domain_availability_v2(
        self,
        domain: str,
        *,
        sug: bool | None = False,
        count: int | None = 5,
        format_: FormatOrStr | None = Format.JSON,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DomainAvailabilityResponse, DomainAvailabilityV2ErrorBody]:
        """Check availability of a single domain and optionally get suggestions across multiple TLDs. 1 credit per
        domain checked. sug=false checks only the queried domain; sug=true returns up to ``count`` (max 100) TLD
        suggestions.

        Args:
            domain: The domain name to check
            sug: Whether to return TLD suggestions alongside the queried domain.
            count: Number of TLD suggestions to return when sug=true. Maximum is 100.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2.0/domain/availability"),
            query_params=[
                param[str]("domain", domain),
                param[bool | None]("sug", sug),
                param[int | None]("count", count),
                param[FormatOrStr | None]("format", format_),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[DomainAvailabilityResponse],
            error_mapper=domain_availability_v2_error_mapper,
            request_options=request_options,
        )
