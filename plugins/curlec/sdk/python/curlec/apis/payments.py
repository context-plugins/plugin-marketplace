from __future__ import annotations

from uuid import UUID, uuid4

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
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.capture_payment_error import CapturePaymentErrorBody, capture_payment_error_mapper
from ..errors.fetch_all_payments_error import FetchAllPaymentsErrorBody, fetch_all_payments_error_mapper
from ..errors.fetch_payment_error import FetchPaymentErrorBody, fetch_payment_error_mapper
from ..errors.update_payment_error import UpdatePaymentErrorBody, update_payment_error_mapper
from ..models.payment_razorpay_payments_api import PaymentRazorpayPaymentsApi
from ..models.payments_capture_request import PaymentsCaptureRequest, PaymentsCaptureRequestDict
from ..models.payments_request import PaymentsRequest, PaymentsRequestDict
from ..models.payments_response import PaymentsResponse
from ..server.server import Server


class Payments:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PaymentsWithRawResponse(client, server, auth)

    def capture_payment(
        self,
        id_: str,
        body: PaymentsCaptureRequest | PaymentsCaptureRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaymentRazorpayPaymentsApi:
        """Capture an authorized payment to collect funds. Must be called within the capture window (default 5 days).
        Amount must exactly equal authorized amount unless partial capture is enabled.

        Args:
            id_: Payment ID (pay_*). Must be in 'authorized' status.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Payment captured. Status changes to 'captured'.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.capture_payment(id_, body, request_options=request_options))

    def fetch_all_payments(
        self,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaymentsResponse:
        """Retrieve a paginated list of payments. Maximum 100 per call.

        Args:
            from_: Unix timestamp (seconds). Fetch records created on or after this time.
            to: Unix timestamp (seconds). Fetch records created on or before this time.
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Collection of payments.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.fetch_all_payments(
                from_=from_, to=to, count=count, skip=skip, request_options=request_options
            ),
        )

    def fetch_payment(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaymentRazorpayPaymentsApi:
        """Retrieve full details and current status of a specific payment. Always re-fetch before acting — status can
        change.

        Args:
            id_: Payment ID (pay_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Payment details.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.fetch_payment(id_, request_options=request_options))

    def update_payment(
        self,
        id_: str,
        body: PaymentsRequest | PaymentsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaymentRazorpayPaymentsApi:
        """Update the notes field of a payment. Only notes can be modified.

        Args:
            id_: Payment ID (pay_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated payment.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.update_payment(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> PaymentsWithRawResponse:
        return self._with_raw_response


class AsyncPayments:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPaymentsWithRawResponse(client, server, auth)

    async def capture_payment(
        self,
        id_: str,
        body: PaymentsCaptureRequest | PaymentsCaptureRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaymentRazorpayPaymentsApi:
        """Capture an authorized payment to collect funds. Must be called within the capture window (default 5 days).
        Amount must exactly equal authorized amount unless partial capture is enabled.

        Args:
            id_: Payment ID (pay_*). Must be in 'authorized' status.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Payment captured. Status changes to 'captured'.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.capture_payment(id_, body, request_options=request_options))

    async def fetch_all_payments(
        self,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaymentsResponse:
        """Retrieve a paginated list of payments. Maximum 100 per call.

        Args:
            from_: Unix timestamp (seconds). Fetch records created on or after this time.
            to: Unix timestamp (seconds). Fetch records created on or before this time.
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Collection of payments.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.fetch_all_payments(
                from_=from_, to=to, count=count, skip=skip, request_options=request_options
            ),
        )

    async def fetch_payment(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaymentRazorpayPaymentsApi:
        """Retrieve full details and current status of a specific payment. Always re-fetch before acting — status can
        change.

        Args:
            id_: Payment ID (pay_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Payment details.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.fetch_payment(id_, request_options=request_options))

    async def update_payment(
        self,
        id_: str,
        body: PaymentsRequest | PaymentsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaymentRazorpayPaymentsApi:
        """Update the notes field of a payment. Only notes can be modified.

        Args:
            id_: Payment ID (pay_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated payment.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.update_payment(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncPaymentsWithRawResponse:
        return self._with_raw_response


class PaymentsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def capture_payment(
        self,
        id_: str,
        body: PaymentsCaptureRequest | PaymentsCaptureRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaymentRazorpayPaymentsApi, CapturePaymentErrorBody]:
        """Capture an authorized payment to collect funds. Must be called within the capture window (default 5 days).
        Amount must exactly equal authorized amount unless partial capture is enabled.

        Args:
            id_: Payment ID (pay_*). Must be in 'authorized' status.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/payments/{id}/capture"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PaymentsCaptureRequest | PaymentsCaptureRequestDict](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[PaymentRazorpayPaymentsApi],
            error_mapper=capture_payment_error_mapper,
            request_options=request_options,
        )

    def fetch_all_payments(
        self,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaymentsResponse, FetchAllPaymentsErrorBody]:
        """Retrieve a paginated list of payments. Maximum 100 per call.

        Args:
            from_: Unix timestamp (seconds). Fetch records created on or after this time.
            to: Unix timestamp (seconds). Fetch records created on or before this time.
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/payments"),
            query_params=[
                param[int | None]("from", from_),
                param[int | None]("to", to),
                param[int | None]("count", count),
                param[int | None]("skip", skip),
            ],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[PaymentsResponse],
            error_mapper=fetch_all_payments_error_mapper,
            request_options=request_options,
        )

    def fetch_payment(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaymentRazorpayPaymentsApi, FetchPaymentErrorBody]:
        """Retrieve full details and current status of a specific payment. Always re-fetch before acting — status can
        change.

        Args:
            id_: Payment ID (pay_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/payments/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[PaymentRazorpayPaymentsApi],
            error_mapper=fetch_payment_error_mapper,
            request_options=request_options,
        )

    def update_payment(
        self,
        id_: str,
        body: PaymentsRequest | PaymentsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaymentRazorpayPaymentsApi, UpdatePaymentErrorBody]:
        """Update the notes field of a payment. Only notes can be modified.

        Args:
            id_: Payment ID (pay_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/payments/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PaymentsRequest | PaymentsRequestDict](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[PaymentRazorpayPaymentsApi],
            error_mapper=update_payment_error_mapper,
            request_options=request_options,
        )


class AsyncPaymentsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def capture_payment(
        self,
        id_: str,
        body: PaymentsCaptureRequest | PaymentsCaptureRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaymentRazorpayPaymentsApi, CapturePaymentErrorBody]:
        """Capture an authorized payment to collect funds. Must be called within the capture window (default 5 days).
        Amount must exactly equal authorized amount unless partial capture is enabled.

        Args:
            id_: Payment ID (pay_*). Must be in 'authorized' status.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/payments/{id}/capture"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PaymentsCaptureRequest | PaymentsCaptureRequestDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[PaymentRazorpayPaymentsApi],
            error_mapper=capture_payment_error_mapper,
            request_options=request_options,
        )

    async def fetch_all_payments(
        self,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaymentsResponse, FetchAllPaymentsErrorBody]:
        """Retrieve a paginated list of payments. Maximum 100 per call.

        Args:
            from_: Unix timestamp (seconds). Fetch records created on or after this time.
            to: Unix timestamp (seconds). Fetch records created on or before this time.
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/payments"),
            query_params=[
                param[int | None]("from", from_),
                param[int | None]("to", to),
                param[int | None]("count", count),
                param[int | None]("skip", skip),
            ],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[PaymentsResponse],
            error_mapper=fetch_all_payments_error_mapper,
            request_options=request_options,
        )

    async def fetch_payment(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaymentRazorpayPaymentsApi, FetchPaymentErrorBody]:
        """Retrieve full details and current status of a specific payment. Always re-fetch before acting — status can
        change.

        Args:
            id_: Payment ID (pay_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/payments/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[PaymentRazorpayPaymentsApi],
            error_mapper=fetch_payment_error_mapper,
            request_options=request_options,
        )

    async def update_payment(
        self,
        id_: str,
        body: PaymentsRequest | PaymentsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaymentRazorpayPaymentsApi, UpdatePaymentErrorBody]:
        """Update the notes field of a payment. Only notes can be modified.

        Args:
            id_: Payment ID (pay_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/payments/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PaymentsRequest | PaymentsRequestDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[PaymentRazorpayPaymentsApi],
            error_mapper=update_payment_error_mapper,
            request_options=request_options,
        )
