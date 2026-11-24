from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_signals_error import CreateSignalsErrorBody, create_signals_error_mapper
from ..models.bulk_signals_request import BulkSignalsRequest, BulkSignalsRequestDict
from ..models.bulk_signals_response import BulkSignalsResponse
from ..server.server import Server


class Signals:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = SignalsWithRawResponse(client, server)

    def create_signals(
        self,
        authorization: str,
        *,
        body: BulkSignalsRequest | BulkSignalsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BulkSignalsResponse:
        """Create multiple signals (usage events) in a single request. Each signal must include a customer attribution
        (either customerId or externalCustomerId) and a product attribution (either productId or externalProductId).

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.create_signals(authorization, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> SignalsWithRawResponse:
        return self._with_raw_response


class AsyncSignals:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncSignalsWithRawResponse(client, server)

    async def create_signals(
        self,
        authorization: str,
        *,
        body: BulkSignalsRequest | BulkSignalsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BulkSignalsResponse:
        """Create multiple signals (usage events) in a single request. Each signal must include a customer attribution
        (either customerId or externalCustomerId) and a product attribution (either productId or externalProductId).

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.create_signals(authorization, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncSignalsWithRawResponse:
        return self._with_raw_response


class SignalsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def create_signals(
        self,
        authorization: str,
        *,
        body: BulkSignalsRequest | BulkSignalsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BulkSignalsResponse, CreateSignalsErrorBody]:
        """Create multiple signals (usage events) in a single request. Each signal must include a customer attribution
        (either customerId or externalCustomerId) and a product attribution (either productId or externalProductId).

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_reference_analytics_experimental_api("/signals/bulk"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BulkSignalsRequest | BulkSignalsRequestDict | None](body),
            decoder=json_decoder[BulkSignalsResponse],
            error_mapper=create_signals_error_mapper,
            request_options=request_options,
        )


class AsyncSignalsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def create_signals(
        self,
        authorization: str,
        *,
        body: BulkSignalsRequest | BulkSignalsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BulkSignalsResponse, CreateSignalsErrorBody]:
        """Create multiple signals (usage events) in a single request. Each signal must include a customer attribution
        (either customerId or externalCustomerId) and a product attribution (either productId or externalProductId).

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_reference_analytics_experimental_api("/signals/bulk"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BulkSignalsRequest | BulkSignalsRequestDict | None](body),
            decoder=async_json_decoder[BulkSignalsResponse],
            error_mapper=create_signals_error_mapper,
            request_options=request_options,
        )
