from __future__ import annotations

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
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..errors.payouts_show_error import PayoutsShowErrorBody, payouts_show_error_mapper
from ..models.payout_resource import PayoutResource
from ..models.v1_payouts_response import V1PayoutsResponse
from ..server.server import Server


class Payouts:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PayoutsWithRawResponse(client, server, auth)

    def payouts_index(self, *, request_options: RequestOptionsOrDict | None = None) -> V1PayoutsResponse:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated set of ``PayoutResource``

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.payouts_index(request_options=request_options))

    def payouts_show(self, payout: str, *, request_options: RequestOptionsOrDict | None = None) -> PayoutResource:
        """Send a ``GET`` request.

        Args:
            payout: The payout number
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``PayoutResource``

        Raises:
            ApiError: Authorization error Not found ``error`` is ``AuthorizationException1 | ModelNotFoundException1 |
                RawError``."""
        return unwrap(self._with_raw_response.payouts_show(payout, request_options=request_options))

    @property
    def with_raw_response(self) -> PayoutsWithRawResponse:
        return self._with_raw_response


class AsyncPayouts:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPayoutsWithRawResponse(client, server, auth)

    async def payouts_index(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> V1PayoutsResponse:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated set of ``PayoutResource``

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.payouts_index(request_options=request_options))

    async def payouts_show(
        self, payout: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PayoutResource:
        """Send a ``GET`` request.

        Args:
            payout: The payout number
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``PayoutResource``

        Raises:
            ApiError: Authorization error Not found ``error`` is ``AuthorizationException1 | ModelNotFoundException1 |
                RawError``."""
        return unwrap(await self._with_raw_response.payouts_show(payout, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncPayoutsWithRawResponse:
        return self._with_raw_response


class PayoutsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def payouts_index(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1PayoutsResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/payouts"),
            auth_scheme=self._auth.http,
            decoder=json_decoder[V1PayoutsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def payouts_show(
        self, payout: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PayoutResource, PayoutsShowErrorBody]:
        """Send a ``GET`` request.

        Args:
            payout: The payout number
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/payouts/{payout}"),
            path_params=[param[str]("payout", payout)],
            auth_scheme=self._auth.http,
            decoder=json_decoder[PayoutResource],
            error_mapper=payouts_show_error_mapper,
            request_options=request_options,
        )


class AsyncPayoutsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def payouts_index(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1PayoutsResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/payouts"),
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[V1PayoutsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def payouts_show(
        self, payout: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PayoutResource, PayoutsShowErrorBody]:
        """Send a ``GET`` request.

        Args:
            payout: The payout number
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/payouts/{payout}"),
            path_params=[param[str]("payout", payout)],
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[PayoutResource],
            error_mapper=payouts_show_error_mapper,
            request_options=request_options,
        )
