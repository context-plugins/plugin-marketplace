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
from ..errors.bulk_ip_reputation_error import BulkIpReputationErrorBody, bulk_ip_reputation_error_mapper
from ..errors.ip_reputation_error import IpReputationErrorBody, ip_reputation_error_mapper
from ..models.ip_reputation_response import IpReputationResponse
from ..models.v10_security_request import V10SecurityRequest, V10SecurityRequestDict
from ..server.server import Server


class IpReputation:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = IpReputationWithRawResponse(client, server, auth)

    def bulk_ip_reputation(
        self, body: V10SecurityRequest | V10SecurityRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> list[IpReputationResponse]:
        """Up to 100 IPs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.bulk_ip_reputation(body, request_options=request_options))

    def ip_reputation(self, ip: str, *, request_options: RequestOptionsOrDict | None = None) -> IpReputationResponse:
        """Threat intel for IP — VPN, proxy, Tor, bots. 1 credit.

        Args:
            ip: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.ip_reputation(ip, request_options=request_options))

    @property
    def with_raw_response(self) -> IpReputationWithRawResponse:
        return self._with_raw_response


class AsyncIpReputation:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncIpReputationWithRawResponse(client, server, auth)

    async def bulk_ip_reputation(
        self,
        body: V10SecurityRequest | V10SecurityRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[IpReputationResponse]:
        """Up to 100 IPs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.bulk_ip_reputation(body, request_options=request_options))

    async def ip_reputation(
        self, ip: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> IpReputationResponse:
        """Threat intel for IP — VPN, proxy, Tor, bots. 1 credit.

        Args:
            ip: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.ip_reputation(ip, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncIpReputationWithRawResponse:
        return self._with_raw_response


class IpReputationWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def bulk_ip_reputation(
        self, body: V10SecurityRequest | V10SecurityRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[IpReputationResponse], BulkIpReputationErrorBody]:
        """Up to 100 IPs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1.0/security"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V10SecurityRequest | V10SecurityRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[list[IpReputationResponse]],
            error_mapper=bulk_ip_reputation_error_mapper,
            request_options=request_options,
        )

    def ip_reputation(
        self, ip: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[IpReputationResponse, IpReputationErrorBody]:
        """Threat intel for IP — VPN, proxy, Tor, bots. 1 credit.

        Args:
            ip: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1.0/security"),
            query_params=[param[str]("ip", ip)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[IpReputationResponse],
            error_mapper=ip_reputation_error_mapper,
            request_options=request_options,
        )


class AsyncIpReputationWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def bulk_ip_reputation(
        self,
        body: V10SecurityRequest | V10SecurityRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[IpReputationResponse], BulkIpReputationErrorBody]:
        """Up to 100 IPs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1.0/security"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V10SecurityRequest | V10SecurityRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[list[IpReputationResponse]],
            error_mapper=bulk_ip_reputation_error_mapper,
            request_options=request_options,
        )

    async def ip_reputation(
        self, ip: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[IpReputationResponse, IpReputationErrorBody]:
        """Threat intel for IP — VPN, proxy, Tor, bots. 1 credit.

        Args:
            ip: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1.0/security"),
            query_params=[param[str]("ip", ip)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[IpReputationResponse],
            error_mapper=ip_reputation_error_mapper,
            request_options=request_options,
        )
