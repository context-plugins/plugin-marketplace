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
from ..errors.domain_reputation_error import DomainReputationErrorBody, domain_reputation_error_mapper
from ..models.domain_reputation_response import DomainReputationResponse
from ..models.enums.format import Format, FormatOrStr
from ..server.server import Server


class DomainReputation:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DomainReputationWithRawResponse(client, server, auth)

    def domain_reputation(
        self,
        domain_name: str,
        *,
        format_: FormatOrStr | None = Format.JSON,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DomainReputationResponse:
        """Real-time domain threat assessment. Returns risk verdict, trust score, DGA analysis, threat intelligence
        matches, and security signals. 1 credit.

        Args:
            domain_name: The domain name to assess
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Invalid API key Not found Too many requests ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.domain_reputation(domain_name, format_=format_, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> DomainReputationWithRawResponse:
        return self._with_raw_response


class AsyncDomainReputation:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDomainReputationWithRawResponse(client, server, auth)

    async def domain_reputation(
        self,
        domain_name: str,
        *,
        format_: FormatOrStr | None = Format.JSON,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DomainReputationResponse:
        """Real-time domain threat assessment. Returns risk verdict, trust score, DGA analysis, threat intelligence
        matches, and security signals. 1 credit.

        Args:
            domain_name: The domain name to assess
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Invalid API key Not found Too many requests ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.domain_reputation(
                domain_name, format_=format_, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncDomainReputationWithRawResponse:
        return self._with_raw_response


class DomainReputationWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def domain_reputation(
        self,
        domain_name: str,
        *,
        format_: FormatOrStr | None = Format.JSON,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DomainReputationResponse, DomainReputationErrorBody]:
        """Real-time domain threat assessment. Returns risk verdict, trust score, DGA analysis, threat intelligence
        matches, and security signals. 1 credit.

        Args:
            domain_name: The domain name to assess
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/domain/security"),
            query_params=[param[str]("domainName", domain_name), param[FormatOrStr | None]("format", format_)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[DomainReputationResponse],
            error_mapper=domain_reputation_error_mapper,
            request_options=request_options,
        )


class AsyncDomainReputationWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def domain_reputation(
        self,
        domain_name: str,
        *,
        format_: FormatOrStr | None = Format.JSON,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DomainReputationResponse, DomainReputationErrorBody]:
        """Real-time domain threat assessment. Returns risk verdict, trust score, DGA analysis, threat intelligence
        matches, and security signals. 1 credit.

        Args:
            domain_name: The domain name to assess
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/domain/security"),
            query_params=[param[str]("domainName", domain_name), param[FormatOrStr | None]("format", format_)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[DomainReputationResponse],
            error_mapper=domain_reputation_error_mapper,
            request_options=request_options,
        )
