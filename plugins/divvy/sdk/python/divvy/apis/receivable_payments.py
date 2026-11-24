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
from ..errors.charge_customer_error import ChargeCustomerErrorBody, charge_customer_error_mapper
from ..errors.get_receivable_payment_error import GetReceivablePaymentErrorBody, get_receivable_payment_error_mapper
from ..errors.list_receivable_payments_error import (
    ListReceivablePaymentsErrorBody,
    list_receivable_payments_error_mapper,
)
from ..models.charge_customer_request_dto import ChargeCustomerRequestDto, ChargeCustomerRequestDtoDict
from ..models.list_response_dto_receivable_payment_response_dto import ListResponseDtoReceivablePaymentResponseDto
from ..models.receivable_payment_response_dto import ReceivablePaymentResponseDto
from ..server.server import Server


class ReceivablePayments:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = ReceivablePaymentsWithRawResponse(client, server)

    def charge_customer(
        self,
        body: ChargeCustomerRequestDto | ChargeCustomerRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ReceivablePaymentResponseDto:
        """Charge a customer for one or more invoices.

        Charging a customer follows a set of rules.
        * **Customer authorization**: The customer ``authorizedToCharge`` field must be set as ``true`` for you to
            charge the customer for invoices. Set charge customer authorization with ``POST
            /v3/customers/{customerId}/charge-authorization``.
        * **Customer bank account**: A customer bank account is required for you to charge a customer. Create a customer
            bank account with ``POST /v3/customers/{customerId}/bank-accounts``.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Charge a customer response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.charge_customer(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def get_receivable_payment(
        self,
        received_payment_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ReceivablePaymentResponseDto:
        """Get details about an existing received payment.

        Args:
            received_payment_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get received payment details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_receivable_payment(
                received_payment_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def list_receivable_payments(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListResponseDtoReceivablePaymentResponseDto:
        """Get a list of received payment objects. By default, you get 20 results on one page of results. Set ``max`` in
        your request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of received payments response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_receivable_payments(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> ReceivablePaymentsWithRawResponse:
        return self._with_raw_response


class AsyncReceivablePayments:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncReceivablePaymentsWithRawResponse(client, server)

    async def charge_customer(
        self,
        body: ChargeCustomerRequestDto | ChargeCustomerRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ReceivablePaymentResponseDto:
        """Charge a customer for one or more invoices.

        Charging a customer follows a set of rules.
        * **Customer authorization**: The customer ``authorizedToCharge`` field must be set as ``true`` for you to
            charge the customer for invoices. Set charge customer authorization with ``POST
            /v3/customers/{customerId}/charge-authorization``.
        * **Customer bank account**: A customer bank account is required for you to charge a customer. Create a customer
            bank account with ``POST /v3/customers/{customerId}/bank-accounts``.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Charge a customer response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.charge_customer(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def get_receivable_payment(
        self,
        received_payment_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ReceivablePaymentResponseDto:
        """Get details about an existing received payment.

        Args:
            received_payment_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get received payment details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_receivable_payment(
                received_payment_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def list_receivable_payments(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListResponseDtoReceivablePaymentResponseDto:
        """Get a list of received payment objects. By default, you get 20 results on one page of results. Set ``max`` in
        your request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of received payments response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_receivable_payments(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncReceivablePaymentsWithRawResponse:
        return self._with_raw_response


class ReceivablePaymentsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def charge_customer(
        self,
        body: ChargeCustomerRequestDto | ChargeCustomerRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ReceivablePaymentResponseDto, ChargeCustomerErrorBody]:
        """Charge a customer for one or more invoices.

        Charging a customer follows a set of rules.
        * **Customer authorization**: The customer ``authorizedToCharge`` field must be set as ``true`` for you to
            charge the customer for invoices. Set charge customer authorization with ``POST
            /v3/customers/{customerId}/charge-authorization``.
        * **Customer bank account**: A customer bank account is required for you to charge a customer. Create a customer
            bank account with ``POST /v3/customers/{customerId}/bank-accounts``.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/receivable-payments"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[ChargeCustomerRequestDto | ChargeCustomerRequestDtoDict](body),
            decoder=json_decoder[ReceivablePaymentResponseDto],
            error_mapper=charge_customer_error_mapper,
            request_options=request_options,
        )

    def get_receivable_payment(
        self,
        received_payment_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ReceivablePaymentResponseDto, GetReceivablePaymentErrorBody]:
        """Get details about an existing received payment.

        Args:
            received_payment_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/receivable-payments/{receivedPaymentId}"),
            path_params=[param[str]("receivedPaymentId", received_payment_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[ReceivablePaymentResponseDto],
            error_mapper=get_receivable_payment_error_mapper,
            request_options=request_options,
        )

    def list_receivable_payments(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoReceivablePaymentResponseDto, ListReceivablePaymentsErrorBody]:
        """Get a list of received payment objects. By default, you get 20 results on one page of results. Set ``max`` in
        your request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/receivable-payments"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[ListResponseDtoReceivablePaymentResponseDto],
            error_mapper=list_receivable_payments_error_mapper,
            request_options=request_options,
        )


class AsyncReceivablePaymentsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def charge_customer(
        self,
        body: ChargeCustomerRequestDto | ChargeCustomerRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ReceivablePaymentResponseDto, ChargeCustomerErrorBody]:
        """Charge a customer for one or more invoices.

        Charging a customer follows a set of rules.
        * **Customer authorization**: The customer ``authorizedToCharge`` field must be set as ``true`` for you to
            charge the customer for invoices. Set charge customer authorization with ``POST
            /v3/customers/{customerId}/charge-authorization``.
        * **Customer bank account**: A customer bank account is required for you to charge a customer. Create a customer
            bank account with ``POST /v3/customers/{customerId}/bank-accounts``.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/receivable-payments"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[ChargeCustomerRequestDto | ChargeCustomerRequestDtoDict](body),
            decoder=async_json_decoder[ReceivablePaymentResponseDto],
            error_mapper=charge_customer_error_mapper,
            request_options=request_options,
        )

    async def get_receivable_payment(
        self,
        received_payment_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ReceivablePaymentResponseDto, GetReceivablePaymentErrorBody]:
        """Get details about an existing received payment.

        Args:
            received_payment_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/receivable-payments/{receivedPaymentId}"),
            path_params=[param[str]("receivedPaymentId", received_payment_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[ReceivablePaymentResponseDto],
            error_mapper=get_receivable_payment_error_mapper,
            request_options=request_options,
        )

    async def list_receivable_payments(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoReceivablePaymentResponseDto, ListReceivablePaymentsErrorBody]:
        """Get a list of received payment objects. By default, you get 20 results on one page of results. Set ``max`` in
        your request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/receivable-payments"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[ListResponseDtoReceivablePaymentResponseDto],
            error_mapper=list_receivable_payments_error_mapper,
            request_options=request_options,
        )
