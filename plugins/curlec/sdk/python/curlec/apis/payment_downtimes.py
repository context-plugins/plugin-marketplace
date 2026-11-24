from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
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
from ..errors.fetch_payment_downtime_error import FetchPaymentDowntimeErrorBody, fetch_payment_downtime_error_mapper
from ..errors.fetch_payment_downtimes_error import FetchPaymentDowntimesErrorBody, fetch_payment_downtimes_error_mapper
from ..models.payment_downtime import PaymentDowntime
from ..models.payments_downtimes_response import PaymentsDowntimesResponse
from ..server.server import Server


class PaymentDowntimes:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PaymentDowntimesWithRawResponse(client, server, auth)

    def fetch_payment_downtime(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaymentDowntime:
        """Retrieve details of a specific payment downtime event.

        Args:
            id_: Downtime identifier.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Downtime details.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.fetch_payment_downtime(id_, request_options=request_options))

    def fetch_payment_downtimes(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaymentsDowntimesResponse:
        """Retrieve current and upcoming payment method downtimes for cards, netbanking, and UPI. Use to surface
        degraded methods in checkout UI.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Collection of active and scheduled downtimes.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Rate limit exceeded. Implement
                exponential backoff with jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.fetch_payment_downtimes(request_options=request_options))

    @property
    def with_raw_response(self) -> PaymentDowntimesWithRawResponse:
        return self._with_raw_response


class AsyncPaymentDowntimes:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPaymentDowntimesWithRawResponse(client, server, auth)

    async def fetch_payment_downtime(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaymentDowntime:
        """Retrieve details of a specific payment downtime event.

        Args:
            id_: Downtime identifier.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Downtime details.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.fetch_payment_downtime(id_, request_options=request_options))

    async def fetch_payment_downtimes(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaymentsDowntimesResponse:
        """Retrieve current and upcoming payment method downtimes for cards, netbanking, and UPI. Use to surface
        degraded methods in checkout UI.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Collection of active and scheduled downtimes.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Rate limit exceeded. Implement
                exponential backoff with jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.fetch_payment_downtimes(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncPaymentDowntimesWithRawResponse:
        return self._with_raw_response


class PaymentDowntimesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def fetch_payment_downtime(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaymentDowntime, FetchPaymentDowntimeErrorBody]:
        """Retrieve details of a specific payment downtime event.

        Args:
            id_: Downtime identifier.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/payments/downtimes/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[PaymentDowntime],
            error_mapper=fetch_payment_downtime_error_mapper,
            request_options=request_options,
        )

    def fetch_payment_downtimes(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaymentsDowntimesResponse, FetchPaymentDowntimesErrorBody]:
        """Retrieve current and upcoming payment method downtimes for cards, netbanking, and UPI. Use to surface
        degraded methods in checkout UI.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/payments/downtimes"),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[PaymentsDowntimesResponse],
            error_mapper=fetch_payment_downtimes_error_mapper,
            request_options=request_options,
        )


class AsyncPaymentDowntimesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def fetch_payment_downtime(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaymentDowntime, FetchPaymentDowntimeErrorBody]:
        """Retrieve details of a specific payment downtime event.

        Args:
            id_: Downtime identifier.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/payments/downtimes/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[PaymentDowntime],
            error_mapper=fetch_payment_downtime_error_mapper,
            request_options=request_options,
        )

    async def fetch_payment_downtimes(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaymentsDowntimesResponse, FetchPaymentDowntimesErrorBody]:
        """Retrieve current and upcoming payment method downtimes for cards, netbanking, and UPI. Use to surface
        degraded methods in checkout UI.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/payments/downtimes"),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[PaymentsDowntimesResponse],
            error_mapper=fetch_payment_downtimes_error_mapper,
            request_options=request_options,
        )
