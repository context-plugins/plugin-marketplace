from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    Date,
    RawClient,
    RequestOptionsOrDict,
    RFC3339DateTime,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.close_payment_error import ClosePaymentErrorBody, close_payment_error_mapper
from ..errors.get_payment_error import GetPaymentErrorBody, get_payment_error_mapper
from ..errors.get_payments_error import GetPaymentsErrorBody, get_payments_error_mapper
from ..errors.post_payment_capture_error import PostPaymentCaptureErrorBody, post_payment_capture_error_mapper
from ..errors.post_payment_refund_error import PostPaymentRefundErrorBody, post_payment_refund_error_mapper
from ..errors.put_payment_error import PutPaymentErrorBody, put_payment_error_mapper
from ..models.api_v2_payments_request import ApiV2PaymentsRequest, ApiV2PaymentsRequestDict
from ..models.capture_request import CaptureRequest, CaptureRequestDict
from ..models.enums.status1_tabby_api_reference_payments_api import Status1TabbyApiReferencePaymentsApiOrStr
from ..models.payment_capture_response import PaymentCaptureResponse
from ..models.payment_close import PaymentClose
from ..models.payment_refund_response import PaymentRefundResponse
from ..models.payment_response import PaymentResponse
from ..models.payment_update import PaymentUpdate
from ..models.payments import Payments
from ..models.refund_request import RefundRequest, RefundRequestDict
from ..server.server import Server


class PaymentsApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PaymentsApiWithRawResponse(client, server, auth)

    def close_payment(self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> PaymentClose:
        """Closed is the final status of the payment. Your payment is going to be closed automatically if you capture
        the full amount of the payment. If an order is fully cancelled, please close the payment without capturing it -
        the customer will be refunded for all paid amount. If only a part of the order is delivered, please capture this
        part and close the payment – it will mean that another part of the order is not going to be delivered to the
        customer.

        Args:
            id_: ID of the payment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Payment object is returned.

        Raises:
            ApiError: One of the required fields is missing or request is not formatted correctly. The request cannot be
                authorized. You tried to perform an action which is forbidden. You are using an incorrect ID. Something
                bad happened. We're notified. ``error`` is ``Error400PaymentsClose | Error403 | Error404NoSuchPayment |
                str | RawError``."""
        return unwrap(self._with_raw_response.close_payment(id_, request_options=request_options))

    def get_payment(self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> PaymentResponse:
        """Retrieves the specified payment. Returns the entire payment object, including the payment Status, Captures
        and Refunds objects.

        Args:
            id_: ID of the payment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Payment object is returned.

        Raises:
            ApiError: One of the required fields is missing or request is not formatted correctly. The request cannot be
                authorized. You are using an incorrect ID. Something bad happened. We're notified. ``error`` is
                ``Error400PaymentsGet | Error401MissingBearer | Error404NoSuchPayment | str | RawError``."""
        return unwrap(self._with_raw_response.get_payment(id_, request_options=request_options))

    def get_payments(
        self,
        *,
        created_at_gte: Date | None = None,
        created_at_lte: RFC3339DateTime | None = None,
        limit: int | None = None,
        status: Status1TabbyApiReferencePaymentsApiOrStr | None = None,
        offset: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Payments:
        """Returns a list of success payments (``AUTHORIZED`` or ``CLOSED``) you’ve previously created. The payments are
        returned in sorted order, with the most recent payments appearing first. Each entry in the array is a separate
        payments object, including the status, any captures and any refunds. If no more payments are available, the
        resulting array will be empty. Payments might be filtered by creation date.

        Args:
            created_at_gte: This is a filter for the payment creation date, use it to get the list of payments where
                creation date >= created_at__gte. ISO 8601 date time format (greater than or equal to). No time should
                be provided, it starts at 00:00:00 be default. For example 2020-01-23 -> 2020-01-23T00:00:00Z.
            created_at_lte: This is a filter for the payment creation date, use it to get the list of payments where
                creation date <= created_at__lte. ISO 8601 date time format (less than or equal to). No time should be
                provided, it starts at 00:00:00 be default. For example 2020-01-23 -> 2020-01-23T00:00:00Z.
            limit: Limits the number of returned results.
            status: Filter the orders by specific statuses: - ``authorized``, ``closed`` and ``rejected`` belong to the
                API payment statuses; - ``new``, ``captured``, ``refunded`` and ``cancelled``` refer to the statuses on
                Tabby Merchant Dashboard; - If absent, all ``AUTHORIZED`` and ``CLOSED`` payments are returned.
            offset: The number of records into a dataset that you want to start, indexed at 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Returns a list of payments.

        Raises:
            ApiError: One of the required fields is missing or request is not formatted correctly. The request cannot be
                authorized. Something bad happened. We're notified. ``error`` is ``Error400Failed | Error403 | str |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_payments(
                created_at_gte=created_at_gte,
                created_at_lte=created_at_lte,
                limit=limit,
                status=status,
                offset=offset,
                request_options=request_options,
            ),
        )

    def post_payment_capture(
        self,
        id_: UUID,
        body: CaptureRequest | CaptureRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaymentCaptureResponse:
        """Send a Capture requests for Authorized payments only. If you capture the full payment amount, the payment
        will be automatically closed with full capture. If you capture partial amount, the payment will remain
        Authorized until the rest of the amount is captured or Close request sent.

        Args:
            id_: ID of the payment.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Payment object is returned.

        Raises:
            ApiError: One of the required fields is missing or request is not formatted correctly. The request cannot be
                authorized. You tried to perform an action which is forbidden. You are using an incorrect ID. Something
                bad happened. We're notified. ``error`` is ``Error400PaymentsCapture | Error403 | Error404NoSuchPayment
                | str | RawError``."""
        return unwrap(self._with_raw_response.post_payment_capture(id_, body, request_options=request_options))

    def post_payment_refund(
        self, id_: UUID, body: RefundRequest | RefundRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaymentRefundResponse:
        """Send a full or partial refund amount request. You can only refund the payment that has Closed status. By
        default refunds reflect instantly, which means Tabby initiates a refund through payment gateway.

        Args:
            id_: ID of the payment.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Payment object is returned.

        Raises:
            ApiError: One of the required fields is missing or request is not formatted correctly. The request cannot be
                authorized. You tried to perform an action which is forbidden. You are using an incorrect ID. Refund is
                unavailable. Something bad happened. We're notified. ``error`` is ``Error400PaymentsRefund | Error403 |
                Error404NoSuchPayment | Error400 | str | RawError``."""
        return unwrap(self._with_raw_response.post_payment_refund(id_, body, request_options=request_options))

    def put_payment(
        self,
        id_: UUID,
        body: ApiV2PaymentsRequest | ApiV2PaymentsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaymentUpdate:
        """Updates the reference_id. You can only use this endpoint to update this 1 field. If you send other fields in
        the request, they will simply be ignored by tabby. The payment to be updated can have a status of AUTHORIZED or
        CLOSED.

        Args:
            id_: ID of the payment.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Payment object is returned.

        Raises:
            ApiError: One of the required fields is missing or request is not formatted correctly. The request cannot be
                authorized. You tried to perform an action which is forbidden. You are using an incorrect ID. Something
                bad happened. We're notified. ``error`` is ``Error400PaymentsGet | Error403 | Error404NoSuchPayment |
                str | RawError``."""
        return unwrap(self._with_raw_response.put_payment(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> PaymentsApiWithRawResponse:
        return self._with_raw_response


class AsyncPaymentsApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPaymentsApiWithRawResponse(client, server, auth)

    async def close_payment(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaymentClose:
        """Closed is the final status of the payment. Your payment is going to be closed automatically if you capture
        the full amount of the payment. If an order is fully cancelled, please close the payment without capturing it -
        the customer will be refunded for all paid amount. If only a part of the order is delivered, please capture this
        part and close the payment – it will mean that another part of the order is not going to be delivered to the
        customer.

        Args:
            id_: ID of the payment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Payment object is returned.

        Raises:
            ApiError: One of the required fields is missing or request is not formatted correctly. The request cannot be
                authorized. You tried to perform an action which is forbidden. You are using an incorrect ID. Something
                bad happened. We're notified. ``error`` is ``Error400PaymentsClose | Error403 | Error404NoSuchPayment |
                str | RawError``."""
        return unwrap(await self._with_raw_response.close_payment(id_, request_options=request_options))

    async def get_payment(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaymentResponse:
        """Retrieves the specified payment. Returns the entire payment object, including the payment Status, Captures
        and Refunds objects.

        Args:
            id_: ID of the payment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Payment object is returned.

        Raises:
            ApiError: One of the required fields is missing or request is not formatted correctly. The request cannot be
                authorized. You are using an incorrect ID. Something bad happened. We're notified. ``error`` is
                ``Error400PaymentsGet | Error401MissingBearer | Error404NoSuchPayment | str | RawError``."""
        return unwrap(await self._with_raw_response.get_payment(id_, request_options=request_options))

    async def get_payments(
        self,
        *,
        created_at_gte: Date | None = None,
        created_at_lte: RFC3339DateTime | None = None,
        limit: int | None = None,
        status: Status1TabbyApiReferencePaymentsApiOrStr | None = None,
        offset: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Payments:
        """Returns a list of success payments (``AUTHORIZED`` or ``CLOSED``) you’ve previously created. The payments are
        returned in sorted order, with the most recent payments appearing first. Each entry in the array is a separate
        payments object, including the status, any captures and any refunds. If no more payments are available, the
        resulting array will be empty. Payments might be filtered by creation date.

        Args:
            created_at_gte: This is a filter for the payment creation date, use it to get the list of payments where
                creation date >= created_at__gte. ISO 8601 date time format (greater than or equal to). No time should
                be provided, it starts at 00:00:00 be default. For example 2020-01-23 -> 2020-01-23T00:00:00Z.
            created_at_lte: This is a filter for the payment creation date, use it to get the list of payments where
                creation date <= created_at__lte. ISO 8601 date time format (less than or equal to). No time should be
                provided, it starts at 00:00:00 be default. For example 2020-01-23 -> 2020-01-23T00:00:00Z.
            limit: Limits the number of returned results.
            status: Filter the orders by specific statuses: - ``authorized``, ``closed`` and ``rejected`` belong to the
                API payment statuses; - ``new``, ``captured``, ``refunded`` and ``cancelled``` refer to the statuses on
                Tabby Merchant Dashboard; - If absent, all ``AUTHORIZED`` and ``CLOSED`` payments are returned.
            offset: The number of records into a dataset that you want to start, indexed at 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Returns a list of payments.

        Raises:
            ApiError: One of the required fields is missing or request is not formatted correctly. The request cannot be
                authorized. Something bad happened. We're notified. ``error`` is ``Error400Failed | Error403 | str |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_payments(
                created_at_gte=created_at_gte,
                created_at_lte=created_at_lte,
                limit=limit,
                status=status,
                offset=offset,
                request_options=request_options,
            ),
        )

    async def post_payment_capture(
        self,
        id_: UUID,
        body: CaptureRequest | CaptureRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaymentCaptureResponse:
        """Send a Capture requests for Authorized payments only. If you capture the full payment amount, the payment
        will be automatically closed with full capture. If you capture partial amount, the payment will remain
        Authorized until the rest of the amount is captured or Close request sent.

        Args:
            id_: ID of the payment.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Payment object is returned.

        Raises:
            ApiError: One of the required fields is missing or request is not formatted correctly. The request cannot be
                authorized. You tried to perform an action which is forbidden. You are using an incorrect ID. Something
                bad happened. We're notified. ``error`` is ``Error400PaymentsCapture | Error403 | Error404NoSuchPayment
                | str | RawError``."""
        return unwrap(await self._with_raw_response.post_payment_capture(id_, body, request_options=request_options))

    async def post_payment_refund(
        self,
        id_: UUID,
        body: RefundRequest | RefundRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaymentRefundResponse:
        """Send a full or partial refund amount request. You can only refund the payment that has Closed status. By
        default refunds reflect instantly, which means Tabby initiates a refund through payment gateway.

        Args:
            id_: ID of the payment.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Payment object is returned.

        Raises:
            ApiError: One of the required fields is missing or request is not formatted correctly. The request cannot be
                authorized. You tried to perform an action which is forbidden. You are using an incorrect ID. Refund is
                unavailable. Something bad happened. We're notified. ``error`` is ``Error400PaymentsRefund | Error403 |
                Error404NoSuchPayment | Error400 | str | RawError``."""
        return unwrap(await self._with_raw_response.post_payment_refund(id_, body, request_options=request_options))

    async def put_payment(
        self,
        id_: UUID,
        body: ApiV2PaymentsRequest | ApiV2PaymentsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaymentUpdate:
        """Updates the reference_id. You can only use this endpoint to update this 1 field. If you send other fields in
        the request, they will simply be ignored by tabby. The payment to be updated can have a status of AUTHORIZED or
        CLOSED.

        Args:
            id_: ID of the payment.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Payment object is returned.

        Raises:
            ApiError: One of the required fields is missing or request is not formatted correctly. The request cannot be
                authorized. You tried to perform an action which is forbidden. You are using an incorrect ID. Something
                bad happened. We're notified. ``error`` is ``Error400PaymentsGet | Error403 | Error404NoSuchPayment |
                str | RawError``."""
        return unwrap(await self._with_raw_response.put_payment(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncPaymentsApiWithRawResponse:
        return self._with_raw_response


class PaymentsApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def close_payment(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaymentClose, ClosePaymentErrorBody]:
        """Closed is the final status of the payment. Your payment is going to be closed automatically if you capture
        the full amount of the payment. If an order is fully cancelled, please close the payment without capturing it -
        the customer will be refunded for all paid amount. If only a part of the order is delivered, please capture this
        part and close the payment – it will mean that another part of the order is not going to be delivered to the
        customer.

        Args:
            id_: ID of the payment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v2/payments/{id}/close"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[PaymentClose],
            error_mapper=close_payment_error_mapper,
            request_options=request_options,
        )

    def get_payment(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaymentResponse, GetPaymentErrorBody]:
        """Retrieves the specified payment. Returns the entire payment object, including the payment Status, Captures
        and Refunds objects.

        Args:
            id_: ID of the payment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/payments/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[PaymentResponse],
            error_mapper=get_payment_error_mapper,
            request_options=request_options,
        )

    def get_payments(
        self,
        *,
        created_at_gte: Date | None = None,
        created_at_lte: RFC3339DateTime | None = None,
        limit: int | None = None,
        status: Status1TabbyApiReferencePaymentsApiOrStr | None = None,
        offset: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Payments, GetPaymentsErrorBody]:
        """Returns a list of success payments (``AUTHORIZED`` or ``CLOSED``) you’ve previously created. The payments are
        returned in sorted order, with the most recent payments appearing first. Each entry in the array is a separate
        payments object, including the status, any captures and any refunds. If no more payments are available, the
        resulting array will be empty. Payments might be filtered by creation date.

        Args:
            created_at_gte: This is a filter for the payment creation date, use it to get the list of payments where
                creation date >= created_at__gte. ISO 8601 date time format (greater than or equal to). No time should
                be provided, it starts at 00:00:00 be default. For example 2020-01-23 -> 2020-01-23T00:00:00Z.
            created_at_lte: This is a filter for the payment creation date, use it to get the list of payments where
                creation date <= created_at__lte. ISO 8601 date time format (less than or equal to). No time should be
                provided, it starts at 00:00:00 be default. For example 2020-01-23 -> 2020-01-23T00:00:00Z.
            limit: Limits the number of returned results.
            status: Filter the orders by specific statuses: - ``authorized``, ``closed`` and ``rejected`` belong to the
                API payment statuses; - ``new``, ``captured``, ``refunded`` and ``cancelled``` refer to the statuses on
                Tabby Merchant Dashboard; - If absent, all ``AUTHORIZED`` and ``CLOSED`` payments are returned.
            offset: The number of records into a dataset that you want to start, indexed at 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/payments"),
            query_params=[
                param[Date | None]("created_at__gte", created_at_gte),
                param[RFC3339DateTime | None]("created_at__lte", created_at_lte),
                param[int | None]("limit", limit),
                param[Status1TabbyApiReferencePaymentsApiOrStr | None]("status", status),
                param[int | None]("offset", offset),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Payments],
            error_mapper=get_payments_error_mapper,
            request_options=request_options,
        )

    def post_payment_capture(
        self,
        id_: UUID,
        body: CaptureRequest | CaptureRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaymentCaptureResponse, PostPaymentCaptureErrorBody]:
        """Send a Capture requests for Authorized payments only. If you capture the full payment amount, the payment
        will be automatically closed with full capture. If you capture partial amount, the payment will remain
        Authorized until the rest of the amount is captured or Close request sent.

        Args:
            id_: ID of the payment.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v2/payments/{id}/captures"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CaptureRequest | CaptureRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[PaymentCaptureResponse],
            error_mapper=post_payment_capture_error_mapper,
            request_options=request_options,
        )

    def post_payment_refund(
        self, id_: UUID, body: RefundRequest | RefundRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaymentRefundResponse, PostPaymentRefundErrorBody]:
        """Send a full or partial refund amount request. You can only refund the payment that has Closed status. By
        default refunds reflect instantly, which means Tabby initiates a refund through payment gateway.

        Args:
            id_: ID of the payment.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v2/payments/{id}/refunds"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RefundRequest | RefundRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[PaymentRefundResponse],
            error_mapper=post_payment_refund_error_mapper,
            request_options=request_options,
        )

    def put_payment(
        self,
        id_: UUID,
        body: ApiV2PaymentsRequest | ApiV2PaymentsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaymentUpdate, PutPaymentErrorBody]:
        """Updates the reference_id. You can only use this endpoint to update this 1 field. If you send other fields in
        the request, they will simply be ignored by tabby. The payment to be updated can have a status of AUTHORIZED or
        CLOSED.

        Args:
            id_: ID of the payment.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v2/payments/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV2PaymentsRequest | ApiV2PaymentsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[PaymentUpdate],
            error_mapper=put_payment_error_mapper,
            request_options=request_options,
        )


class AsyncPaymentsApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def close_payment(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaymentClose, ClosePaymentErrorBody]:
        """Closed is the final status of the payment. Your payment is going to be closed automatically if you capture
        the full amount of the payment. If an order is fully cancelled, please close the payment without capturing it -
        the customer will be refunded for all paid amount. If only a part of the order is delivered, please capture this
        part and close the payment – it will mean that another part of the order is not going to be delivered to the
        customer.

        Args:
            id_: ID of the payment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v2/payments/{id}/close"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[PaymentClose],
            error_mapper=close_payment_error_mapper,
            request_options=request_options,
        )

    async def get_payment(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaymentResponse, GetPaymentErrorBody]:
        """Retrieves the specified payment. Returns the entire payment object, including the payment Status, Captures
        and Refunds objects.

        Args:
            id_: ID of the payment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/payments/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[PaymentResponse],
            error_mapper=get_payment_error_mapper,
            request_options=request_options,
        )

    async def get_payments(
        self,
        *,
        created_at_gte: Date | None = None,
        created_at_lte: RFC3339DateTime | None = None,
        limit: int | None = None,
        status: Status1TabbyApiReferencePaymentsApiOrStr | None = None,
        offset: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Payments, GetPaymentsErrorBody]:
        """Returns a list of success payments (``AUTHORIZED`` or ``CLOSED``) you’ve previously created. The payments are
        returned in sorted order, with the most recent payments appearing first. Each entry in the array is a separate
        payments object, including the status, any captures and any refunds. If no more payments are available, the
        resulting array will be empty. Payments might be filtered by creation date.

        Args:
            created_at_gte: This is a filter for the payment creation date, use it to get the list of payments where
                creation date >= created_at__gte. ISO 8601 date time format (greater than or equal to). No time should
                be provided, it starts at 00:00:00 be default. For example 2020-01-23 -> 2020-01-23T00:00:00Z.
            created_at_lte: This is a filter for the payment creation date, use it to get the list of payments where
                creation date <= created_at__lte. ISO 8601 date time format (less than or equal to). No time should be
                provided, it starts at 00:00:00 be default. For example 2020-01-23 -> 2020-01-23T00:00:00Z.
            limit: Limits the number of returned results.
            status: Filter the orders by specific statuses: - ``authorized``, ``closed`` and ``rejected`` belong to the
                API payment statuses; - ``new``, ``captured``, ``refunded`` and ``cancelled``` refer to the statuses on
                Tabby Merchant Dashboard; - If absent, all ``AUTHORIZED`` and ``CLOSED`` payments are returned.
            offset: The number of records into a dataset that you want to start, indexed at 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/payments"),
            query_params=[
                param[Date | None]("created_at__gte", created_at_gte),
                param[RFC3339DateTime | None]("created_at__lte", created_at_lte),
                param[int | None]("limit", limit),
                param[Status1TabbyApiReferencePaymentsApiOrStr | None]("status", status),
                param[int | None]("offset", offset),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Payments],
            error_mapper=get_payments_error_mapper,
            request_options=request_options,
        )

    async def post_payment_capture(
        self,
        id_: UUID,
        body: CaptureRequest | CaptureRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaymentCaptureResponse, PostPaymentCaptureErrorBody]:
        """Send a Capture requests for Authorized payments only. If you capture the full payment amount, the payment
        will be automatically closed with full capture. If you capture partial amount, the payment will remain
        Authorized until the rest of the amount is captured or Close request sent.

        Args:
            id_: ID of the payment.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v2/payments/{id}/captures"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CaptureRequest | CaptureRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[PaymentCaptureResponse],
            error_mapper=post_payment_capture_error_mapper,
            request_options=request_options,
        )

    async def post_payment_refund(
        self,
        id_: UUID,
        body: RefundRequest | RefundRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaymentRefundResponse, PostPaymentRefundErrorBody]:
        """Send a full or partial refund amount request. You can only refund the payment that has Closed status. By
        default refunds reflect instantly, which means Tabby initiates a refund through payment gateway.

        Args:
            id_: ID of the payment.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v2/payments/{id}/refunds"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RefundRequest | RefundRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[PaymentRefundResponse],
            error_mapper=post_payment_refund_error_mapper,
            request_options=request_options,
        )

    async def put_payment(
        self,
        id_: UUID,
        body: ApiV2PaymentsRequest | ApiV2PaymentsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaymentUpdate, PutPaymentErrorBody]:
        """Updates the reference_id. You can only use this endpoint to update this 1 field. If you send other fields in
        the request, they will simply be ignored by tabby. The payment to be updated can have a status of AUTHORIZED or
        CLOSED.

        Args:
            id_: ID of the payment.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v2/payments/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV2PaymentsRequest | ApiV2PaymentsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[PaymentUpdate],
            error_mapper=put_payment_error_mapper,
            request_options=request_options,
        )
