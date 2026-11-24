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
from ..errors.bulk_geolocation_error import BulkGeolocationErrorBody, bulk_geolocation_error_mapper
from ..errors.geolocation_error import GeolocationErrorBody, geolocation_error_mapper
from ..models.geolocation_response import GeolocationResponse
from ..models.v10_geolocation_request import V10GeolocationRequest, V10GeolocationRequestDict
from ..server.server import Server


class Geolocation:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = GeolocationWithRawResponse(client, server, auth)

    def bulk_geolocation(
        self,
        body: V10GeolocationRequest | V10GeolocationRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[GeolocationResponse]:
        """Up to 100 IPs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.bulk_geolocation(body, request_options=request_options))

    def geolocation(self, ip: str, *, request_options: RequestOptionsOrDict | None = None) -> GeolocationResponse:
        """Get location, ASN, currency for an IP. 1 credit.

        Args:
            ip: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.geolocation(ip, request_options=request_options))

    @property
    def with_raw_response(self) -> GeolocationWithRawResponse:
        return self._with_raw_response


class AsyncGeolocation:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncGeolocationWithRawResponse(client, server, auth)

    async def bulk_geolocation(
        self,
        body: V10GeolocationRequest | V10GeolocationRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[GeolocationResponse]:
        """Up to 100 IPs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.bulk_geolocation(body, request_options=request_options))

    async def geolocation(
        self, ip: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GeolocationResponse:
        """Get location, ASN, currency for an IP. 1 credit.

        Args:
            ip: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.geolocation(ip, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncGeolocationWithRawResponse:
        return self._with_raw_response


class GeolocationWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def bulk_geolocation(
        self,
        body: V10GeolocationRequest | V10GeolocationRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[GeolocationResponse], BulkGeolocationErrorBody]:
        """Up to 100 IPs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1.0/geolocation"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V10GeolocationRequest | V10GeolocationRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[list[GeolocationResponse]],
            error_mapper=bulk_geolocation_error_mapper,
            request_options=request_options,
        )

    def geolocation(
        self, ip: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GeolocationResponse, GeolocationErrorBody]:
        """Get location, ASN, currency for an IP. 1 credit.

        Args:
            ip: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1.0/geolocation"),
            query_params=[param[str]("ip", ip)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[GeolocationResponse],
            error_mapper=geolocation_error_mapper,
            request_options=request_options,
        )


class AsyncGeolocationWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def bulk_geolocation(
        self,
        body: V10GeolocationRequest | V10GeolocationRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[GeolocationResponse], BulkGeolocationErrorBody]:
        """Up to 100 IPs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1.0/geolocation"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V10GeolocationRequest | V10GeolocationRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[list[GeolocationResponse]],
            error_mapper=bulk_geolocation_error_mapper,
            request_options=request_options,
        )

    async def geolocation(
        self, ip: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GeolocationResponse, GeolocationErrorBody]:
        """Get location, ASN, currency for an IP. 1 credit.

        Args:
            ip: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1.0/geolocation"),
            query_params=[param[str]("ip", ip)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[GeolocationResponse],
            error_mapper=geolocation_error_mapper,
            request_options=request_options,
        )
