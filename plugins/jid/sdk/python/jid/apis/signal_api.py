from __future__ import annotations

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.signal_error import SignalErrorBody, signal_error_mapper
from ..models.v1_signal_response import V1SignalResponse
from ..server.server import Server


class SignalApi:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = SignalApiWithRawResponse(client, server)

    def signal(self, *, tz: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1SignalResponse:
        """Called from the visitor's browser by https://jid.com/s/1.js. Jid reads the connection's country, region, city
        and network type itself and returns an HMAC-signed token (never the IP) for the form to forward to /v1/qualify
        or /v1/screen as ``signal``. No key, CORS open, never cached, rate-limited per IP. See https://jid.com/signals.

        Args:
            tz: Browser IANA time zone
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Token

        Raises:
            ApiError: Error ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.signal(tz=tz, request_options=request_options))

    @property
    def with_raw_response(self) -> SignalApiWithRawResponse:
        return self._with_raw_response


class AsyncSignalApi:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncSignalApiWithRawResponse(client, server)

    async def signal(
        self, *, tz: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1SignalResponse:
        """Called from the visitor's browser by https://jid.com/s/1.js. Jid reads the connection's country, region, city
        and network type itself and returns an HMAC-signed token (never the IP) for the form to forward to /v1/qualify
        or /v1/screen as ``signal``. No key, CORS open, never cached, rate-limited per IP. See https://jid.com/signals.

        Args:
            tz: Browser IANA time zone
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Token

        Raises:
            ApiError: Error ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.signal(tz=tz, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncSignalApiWithRawResponse:
        return self._with_raw_response


class SignalApiWithRawResponse(BaseRawResponse[RawClient, Server]):
    def signal(
        self, *, tz: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1SignalResponse, SignalErrorBody]:
        """Called from the visitor's browser by https://jid.com/s/1.js. Jid reads the connection's country, region, city
        and network type itself and returns an HMAC-signed token (never the IP) for the form to forward to /v1/qualify
        or /v1/screen as ``signal``. No key, CORS open, never cached, rate-limited per IP. See https://jid.com/signals.

        Args:
            tz: Browser IANA time zone
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/signal"),
            query_params=[param[str | None]("tz", tz)],
            decoder=json_decoder[V1SignalResponse],
            error_mapper=signal_error_mapper,
            request_options=request_options,
        )


class AsyncSignalApiWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def signal(
        self, *, tz: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1SignalResponse, SignalErrorBody]:
        """Called from the visitor's browser by https://jid.com/s/1.js. Jid reads the connection's country, region, city
        and network type itself and returns an HMAC-signed token (never the IP) for the form to forward to /v1/qualify
        or /v1/screen as ``signal``. No key, CORS open, never cached, rate-limited per IP. See https://jid.com/signals.

        Args:
            tz: Browser IANA time zone
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/signal"),
            query_params=[param[str | None]("tz", tz)],
            decoder=async_json_decoder[V1SignalResponse],
            error_mapper=signal_error_mapper,
            request_options=request_options,
        )
