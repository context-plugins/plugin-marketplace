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
from ..errors.create_refund_error import CreateRefundErrorBody, create_refund_error_mapper
from ..errors.fetch_all_refunds_error import FetchAllRefundsErrorBody, fetch_all_refunds_error_mapper
from ..errors.fetch_payment_refund_error import FetchPaymentRefundErrorBody, fetch_payment_refund_error_mapper
from ..errors.fetch_payment_refunds_error import FetchPaymentRefundsErrorBody, fetch_payment_refunds_error_mapper
from ..errors.fetch_refund_error import FetchRefundErrorBody, fetch_refund_error_mapper
from ..errors.update_refund_error import UpdateRefundErrorBody, update_refund_error_mapper
from ..models.payments_refund_request import PaymentsRefundRequest, PaymentsRefundRequestDict
from ..models.payments_refunds_response import PaymentsRefundsResponse
from ..models.refund_razorpay_refunds_api import RefundRazorpayRefundsApi
from ..models.refunds_request import RefundsRequest, RefundsRequestDict
from ..models.refunds_response import RefundsResponse
from ..server.server import Server


class Refunds:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = RefundsWithRawResponse(client, server, auth)

    def create_refund(
        self,
        id_: str,
        *,
        body: PaymentsRefundRequest | PaymentsRefundRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RefundRazorpayRefundsApi:
        """Initiate a full or partial refund for a captured payment. Use speed=normal (default, 5-7 business days) or
        speed=optimum for instant refund (falls back to normal if unavailable). Use the X-Refund-Idempotency header with
        a unique key (>=10 chars) to safely retry without duplicate refunds.

        Args:
            id_: Payment ID to refund (pay_*). Payment must be captured.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Refund initiated.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_refund(id_, body=body, request_options=request_options))

    def fetch_all_refunds(
        self,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RefundsResponse:
        """Retrieve a paginated list of all refunds across payments. Maximum 100 per call.

        Args:
            from_: Unix timestamp (seconds). Fetch records created on or after this time.
            to: Unix timestamp (seconds). Fetch records created on or before this time.
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Collection of refunds.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.fetch_all_refunds(
                from_=from_, to=to, count=count, skip=skip, request_options=request_options
            ),
        )

    def fetch_payment_refund(
        self, payment_id: str, refund_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> RefundRazorpayRefundsApi:
        """Retrieve a specific refund by its ID scoped to a particular payment.

        Args:
            payment_id: Payment ID (pay_*).
            refund_id: Refund ID (rfnd_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Refund details.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.fetch_payment_refund(payment_id, refund_id, request_options=request_options)
        )

    def fetch_payment_refunds(
        self,
        payment_id: str,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaymentsRefundsResponse:
        """Retrieve all refunds issued against a specific payment.

        Args:
            payment_id: Payment ID (pay_*).
            from_: Unix timestamp (seconds). Fetch records created on or after this time.
            to: Unix timestamp (seconds). Fetch records created on or before this time.
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Collection of refunds for the payment.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.fetch_payment_refunds(
                payment_id, from_=from_, to=to, count=count, skip=skip, request_options=request_options
            ),
        )

    def fetch_refund(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> RefundRazorpayRefundsApi:
        """Retrieve full details and current status of a specific refund.

        Args:
            id_: Refund ID (rfnd_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Refund details.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.fetch_refund(id_, request_options=request_options))

    def update_refund(
        self,
        id_: str,
        body: RefundsRequest | RefundsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RefundRazorpayRefundsApi:
        """Update the notes field of a refund. Only notes can be modified.

        Args:
            id_: Refund ID (rfnd_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated refund.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.update_refund(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> RefundsWithRawResponse:
        return self._with_raw_response


class AsyncRefunds:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncRefundsWithRawResponse(client, server, auth)

    async def create_refund(
        self,
        id_: str,
        *,
        body: PaymentsRefundRequest | PaymentsRefundRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RefundRazorpayRefundsApi:
        """Initiate a full or partial refund for a captured payment. Use speed=normal (default, 5-7 business days) or
        speed=optimum for instant refund (falls back to normal if unavailable). Use the X-Refund-Idempotency header with
        a unique key (>=10 chars) to safely retry without duplicate refunds.

        Args:
            id_: Payment ID to refund (pay_*). Payment must be captured.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Refund initiated.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.create_refund(id_, body=body, request_options=request_options))

    async def fetch_all_refunds(
        self,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RefundsResponse:
        """Retrieve a paginated list of all refunds across payments. Maximum 100 per call.

        Args:
            from_: Unix timestamp (seconds). Fetch records created on or after this time.
            to: Unix timestamp (seconds). Fetch records created on or before this time.
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Collection of refunds.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.fetch_all_refunds(
                from_=from_, to=to, count=count, skip=skip, request_options=request_options
            ),
        )

    async def fetch_payment_refund(
        self, payment_id: str, refund_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> RefundRazorpayRefundsApi:
        """Retrieve a specific refund by its ID scoped to a particular payment.

        Args:
            payment_id: Payment ID (pay_*).
            refund_id: Refund ID (rfnd_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Refund details.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.fetch_payment_refund(payment_id, refund_id, request_options=request_options)
        )

    async def fetch_payment_refunds(
        self,
        payment_id: str,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaymentsRefundsResponse:
        """Retrieve all refunds issued against a specific payment.

        Args:
            payment_id: Payment ID (pay_*).
            from_: Unix timestamp (seconds). Fetch records created on or after this time.
            to: Unix timestamp (seconds). Fetch records created on or before this time.
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Collection of refunds for the payment.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.fetch_payment_refunds(
                payment_id, from_=from_, to=to, count=count, skip=skip, request_options=request_options
            ),
        )

    async def fetch_refund(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> RefundRazorpayRefundsApi:
        """Retrieve full details and current status of a specific refund.

        Args:
            id_: Refund ID (rfnd_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Refund details.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.fetch_refund(id_, request_options=request_options))

    async def update_refund(
        self,
        id_: str,
        body: RefundsRequest | RefundsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RefundRazorpayRefundsApi:
        """Update the notes field of a refund. Only notes can be modified.

        Args:
            id_: Refund ID (rfnd_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated refund.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.update_refund(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncRefundsWithRawResponse:
        return self._with_raw_response


class RefundsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_refund(
        self,
        id_: str,
        *,
        body: PaymentsRefundRequest | PaymentsRefundRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RefundRazorpayRefundsApi, CreateRefundErrorBody]:
        """Initiate a full or partial refund for a captured payment. Use speed=normal (default, 5-7 business days) or
        speed=optimum for instant refund (falls back to normal if unavailable). Use the X-Refund-Idempotency header with
        a unique key (>=10 chars) to safely retry without duplicate refunds.

        Args:
            id_: Payment ID to refund (pay_*). Payment must be captured.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/payments/{id}/refund"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PaymentsRefundRequest | PaymentsRefundRequestDict | None](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[RefundRazorpayRefundsApi],
            error_mapper=create_refund_error_mapper,
            request_options=request_options,
        )

    def fetch_all_refunds(
        self,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RefundsResponse, FetchAllRefundsErrorBody]:
        """Retrieve a paginated list of all refunds across payments. Maximum 100 per call.

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
            url_template=self._server.default("/refunds"),
            query_params=[
                param[int | None]("from", from_),
                param[int | None]("to", to),
                param[int | None]("count", count),
                param[int | None]("skip", skip),
            ],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[RefundsResponse],
            error_mapper=fetch_all_refunds_error_mapper,
            request_options=request_options,
        )

    def fetch_payment_refund(
        self, payment_id: str, refund_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[RefundRazorpayRefundsApi, FetchPaymentRefundErrorBody]:
        """Retrieve a specific refund by its ID scoped to a particular payment.

        Args:
            payment_id: Payment ID (pay_*).
            refund_id: Refund ID (rfnd_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/payments/{payment_id}/refunds/{refund_id}"),
            path_params=[param[str]("payment_id", payment_id), param[str]("refund_id", refund_id)],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[RefundRazorpayRefundsApi],
            error_mapper=fetch_payment_refund_error_mapper,
            request_options=request_options,
        )

    def fetch_payment_refunds(
        self,
        payment_id: str,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaymentsRefundsResponse, FetchPaymentRefundsErrorBody]:
        """Retrieve all refunds issued against a specific payment.

        Args:
            payment_id: Payment ID (pay_*).
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
            url_template=self._server.default("/payments/{payment_id}/refunds"),
            path_params=[param[str]("payment_id", payment_id)],
            query_params=[
                param[int | None]("from", from_),
                param[int | None]("to", to),
                param[int | None]("count", count),
                param[int | None]("skip", skip),
            ],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[PaymentsRefundsResponse],
            error_mapper=fetch_payment_refunds_error_mapper,
            request_options=request_options,
        )

    def fetch_refund(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[RefundRazorpayRefundsApi, FetchRefundErrorBody]:
        """Retrieve full details and current status of a specific refund.

        Args:
            id_: Refund ID (rfnd_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/refunds/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[RefundRazorpayRefundsApi],
            error_mapper=fetch_refund_error_mapper,
            request_options=request_options,
        )

    def update_refund(
        self,
        id_: str,
        body: RefundsRequest | RefundsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RefundRazorpayRefundsApi, UpdateRefundErrorBody]:
        """Update the notes field of a refund. Only notes can be modified.

        Args:
            id_: Refund ID (rfnd_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/refunds/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RefundsRequest | RefundsRequestDict](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[RefundRazorpayRefundsApi],
            error_mapper=update_refund_error_mapper,
            request_options=request_options,
        )


class AsyncRefundsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_refund(
        self,
        id_: str,
        *,
        body: PaymentsRefundRequest | PaymentsRefundRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RefundRazorpayRefundsApi, CreateRefundErrorBody]:
        """Initiate a full or partial refund for a captured payment. Use speed=normal (default, 5-7 business days) or
        speed=optimum for instant refund (falls back to normal if unavailable). Use the X-Refund-Idempotency header with
        a unique key (>=10 chars) to safely retry without duplicate refunds.

        Args:
            id_: Payment ID to refund (pay_*). Payment must be captured.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/payments/{id}/refund"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PaymentsRefundRequest | PaymentsRefundRequestDict | None](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[RefundRazorpayRefundsApi],
            error_mapper=create_refund_error_mapper,
            request_options=request_options,
        )

    async def fetch_all_refunds(
        self,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RefundsResponse, FetchAllRefundsErrorBody]:
        """Retrieve a paginated list of all refunds across payments. Maximum 100 per call.

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
            url_template=self._server.default("/refunds"),
            query_params=[
                param[int | None]("from", from_),
                param[int | None]("to", to),
                param[int | None]("count", count),
                param[int | None]("skip", skip),
            ],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[RefundsResponse],
            error_mapper=fetch_all_refunds_error_mapper,
            request_options=request_options,
        )

    async def fetch_payment_refund(
        self, payment_id: str, refund_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[RefundRazorpayRefundsApi, FetchPaymentRefundErrorBody]:
        """Retrieve a specific refund by its ID scoped to a particular payment.

        Args:
            payment_id: Payment ID (pay_*).
            refund_id: Refund ID (rfnd_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/payments/{payment_id}/refunds/{refund_id}"),
            path_params=[param[str]("payment_id", payment_id), param[str]("refund_id", refund_id)],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[RefundRazorpayRefundsApi],
            error_mapper=fetch_payment_refund_error_mapper,
            request_options=request_options,
        )

    async def fetch_payment_refunds(
        self,
        payment_id: str,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaymentsRefundsResponse, FetchPaymentRefundsErrorBody]:
        """Retrieve all refunds issued against a specific payment.

        Args:
            payment_id: Payment ID (pay_*).
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
            url_template=self._server.default("/payments/{payment_id}/refunds"),
            path_params=[param[str]("payment_id", payment_id)],
            query_params=[
                param[int | None]("from", from_),
                param[int | None]("to", to),
                param[int | None]("count", count),
                param[int | None]("skip", skip),
            ],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[PaymentsRefundsResponse],
            error_mapper=fetch_payment_refunds_error_mapper,
            request_options=request_options,
        )

    async def fetch_refund(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[RefundRazorpayRefundsApi, FetchRefundErrorBody]:
        """Retrieve full details and current status of a specific refund.

        Args:
            id_: Refund ID (rfnd_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/refunds/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[RefundRazorpayRefundsApi],
            error_mapper=fetch_refund_error_mapper,
            request_options=request_options,
        )

    async def update_refund(
        self,
        id_: str,
        body: RefundsRequest | RefundsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RefundRazorpayRefundsApi, UpdateRefundErrorBody]:
        """Update the notes field of a refund. Only notes can be modified.

        Args:
            id_: Refund ID (rfnd_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/refunds/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RefundsRequest | RefundsRequestDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[RefundRazorpayRefundsApi],
            error_mapper=update_refund_error_mapper,
            request_options=request_options,
        )
