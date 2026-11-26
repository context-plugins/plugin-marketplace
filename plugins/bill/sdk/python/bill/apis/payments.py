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
from ..errors.cancel_payment_error import CancelPaymentErrorBody, cancel_payment_error_mapper
from ..errors.create_bulk_payment_error import CreateBulkPaymentErrorBody, create_bulk_payment_error_mapper
from ..errors.create_mass_payment_error import CreateMassPaymentErrorBody, create_mass_payment_error_mapper
from ..errors.create_payment_error import CreatePaymentErrorBody, create_payment_error_mapper
from ..errors.get_check_image_data_error import GetCheckImageDataErrorBody, get_check_image_data_error_mapper
from ..errors.get_exchange_rate_error import GetExchangeRateErrorBody, get_exchange_rate_error_mapper
from ..errors.get_exchange_rates_error import GetExchangeRatesErrorBody, get_exchange_rates_error_mapper
from ..errors.get_mass_payment_error import GetMassPaymentErrorBody, get_mass_payment_error_mapper
from ..errors.get_payment_error import GetPaymentErrorBody, get_payment_error_mapper
from ..errors.list_payment_options_error import ListPaymentOptionsErrorBody, list_payment_options_error_mapper
from ..errors.list_payments_error import ListPaymentsErrorBody, list_payments_error_mapper
from ..errors.void_payment_error import VoidPaymentErrorBody, void_payment_error_mapper
from ..models.bulk_payment_request_dto import BulkPaymentRequestDto, BulkPaymentRequestDtoDict
from ..models.bulk_payment_response_dto import BulkPaymentResponseDto
from ..models.check_image_data_response_dto import CheckImageDataResponseDto
from ..models.exchange_rate_request_dto import ExchangeRateRequestDto, ExchangeRateRequestDtoDict
from ..models.exchange_rate_response_dto import ExchangeRateResponseDto
from ..models.exchange_rates_response_dto import ExchangeRatesResponseDto
from ..models.list_payment_response_dto import ListPaymentResponseDto
from ..models.mass_payment_details_response_dto import MassPaymentDetailsResponseDto
from ..models.mass_payment_response_dto import MassPaymentResponseDto
from ..models.payment_options_response_dto import PaymentOptionsResponseDto
from ..models.payment_request_dto import PaymentRequestDto, PaymentRequestDtoDict
from ..models.payment_response_dto import PaymentResponseDto
from ..models.void_request_dto import VoidRequestDto, VoidRequestDtoDict
from ..server.server import Server


class Payments:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = PaymentsWithRawResponse(client, server)

    def cancel_payment(
        self,
        payment_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaymentResponseDto:
        """Cancel an existing payment.

        You can cancel a payment only when the payment ``singleStatus`` is ``SCHEDULED``. When BILL starts processing
        the payment, the payment ``singleStatus`` changes. At that point, you cannot cancel the payment. You can attempt
        to void the payment with ``POST /v3/payments/{paymentId}/void``.

        Args:
            payment_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Cancel a payment response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.cancel_payment(
                payment_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def create_bulk_payment(
        self,
        body: BulkPaymentRequestDto | BulkPaymentRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BulkPaymentResponseDto:
        """Create a request for paying multiple bills. You can pay up to 50 bills with one ``POST /v3/payments/bulk``
        request.

        Bulk payments at BILL follow a set of rules.
        * **Successful response**: In your bulk payment request, all your bill payments must be successful for a
            successful response. If any bill payment is not successful, the entire request fails and none of the bills
            in the request are paid.
        * **You can pay multiple vendors**: You can pay multiple vendors with one ``POST /v3/payments/bulk`` request. In
            this case, make sure that you do not set ``vendorId`` in your request.
        * **You can only pay existing bills**: When you create a single payment with ``POST /v3/payments``, you can set
            ``createBill`` as ``true`` in your request for creating a new bill for a vendor payment. In your bulk
            payment request, an existing ``billId`` is required for each bill to be paid.
        * **Vendors with ``"combinePayments": true``**: When you create a bulk payment for a vendor that has
            ``"combinePayments": true``, BILL combines payments for up to 35 bills in one ``payments`` response object,
            and then combines payments for the remaining bills in a second ``payments`` response object.

        See Get list of vendor payment options to get details about vendor payment options and payment process dates.

        **Note**: Creating a bulk payment requires an MFA-trusted API session. See MFA setup for information about the
        BILL MFA process.

        See Payments in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a bulk payment response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.create_bulk_payment(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def create_mass_payment(
        self,
        body: BulkPaymentRequestDto | BulkPaymentRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MassPaymentResponseDto:
        """Create a mass payment request for up to 2000 bills. BILL processes each payment in the mass payment request
        asynchronously.

        In the response, a BILL-generated payment batch ID is available. You can track the current status of each
        payment in a mass payment batch with ``GET /v3/payments/mass/{paymentBatchId}``.

        **Note**: Creating a mass payment requires an MFA-trusted API session. See MFA setup for information about the
        BILL MFA process.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a mass payment response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.create_mass_payment(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def create_payment(
        self,
        body: PaymentRequestDto | PaymentRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaymentResponseDto:
        """Create a payment.

        See Get list of vendor payment options to get details about vendor payment options and payment process dates.

        **Note**: Creating a payment requires an MFA-trusted API session. See MFA setup for information about the BILL
        MFA process.

        See Payments in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a payment response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.create_payment(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def get_check_image_data(
        self,
        payment_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CheckImageDataResponseDto:
        """Get an image of an existing check sent to a vendor.

        The check image is available when the vendor bank processes the check payment. BILL checks in with the bank
        every 30 minutes to get the check image. The image file format is determined by the vendor bank.

        From the response, use ``downloadLink`` in a GET request to download the front and back images of the check.

        ```
        curl '{downloadLink}' --header 'sessionId: {session_id}' --output {check_name}
        ```

        Args:
            payment_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get check image data response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_check_image_data(
                payment_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def get_exchange_rate(
        self,
        vendor_id: str,
        amount: float,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ExchangeRateResponseDto:
        """Get the current BILL exchange rate and exchange rate batch ID for paying an international vendor. When the
        vendor bill currency is not ``USD``, the exchange rate batch ID is required for creating a payment with ``POST
        /v3/payments`` or ``POST /v3/payments/bulk``.

        BILL maintains all ``exchangeRate`` values in a batch. When a batch expires, a new batch ID is generated and all
        ``exchangeRate`` values are updated in the new batch. Use this endpoint to get the current exchange rate and
        batch ID based on the payment amount and vendor bill currency.

        In production, a BILL batch is valid for a maximum of 20 minutes. response provides the timestamp when the
        current batch will expire. For example, if a batch has been active for 17 minutes when you get the
        ``exchangeRateBatchId``, ``expirationTime`` indicates that you have 3 minutes remaining (with ``POST
        /v3/payments`` or ``POST /v3/payments/bulk``).

        **Note**:
        * International vendor payment information is required for you to get the BILL exchange rate with this endpoint.
        * When the vendor bill currency is not ``USD``, the payment ``processDate`` **must be** the next US business
            day.

        Args:
            vendor_id: Value sent with the request.
            amount: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get BILL exchange rate response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_exchange_rate(
                vendor_id, amount, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def get_exchange_rates(
        self,
        body: list[ExchangeRateRequestDto | ExchangeRateRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ExchangeRatesResponseDto:
        """Get the current BILL exchange rate and exchange rate batch ID for multiple international vendors with one API
        request. When the vendor bill currency is not ``USD``, the exchange rate batch ID is required for creating a
        payment with ``POST /v3/payments`` or ``POST /v3/payments/bulk``.

        BILL maintains all ``exchangeRate`` values in a batch. When a batch expires, a new batch ID is generated and all
        ``exchangeRate`` values are updated in the new batch. Use this endpoint to get the current exchange rate and
        batch ID based on the payment amount and vendor bill currency.

        In production, a BILL batch is valid for a maximum of 20 minutes. response provides the timestamp when the
        current batch will expire. For example, if a batch has been active for 17 minutes when you get the
        ``exchangeRateBatchId``, ``expirationTime`` indicates that you have 3 minutes remaining (with ``POST
        /v3/payments`` or ``POST /v3/payments/bulk``).

        **Note**:
        * International vendor payment information is required for you to get BILL exchange rates with this endpoint.
        * When the vendor bill currency is not ``USD``, the payment ``processDate`` **must be** the next US business
            day.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get BILL exchange rates for multiple vendors response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_exchange_rates(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def get_mass_payment(
        self,
        payment_batch_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MassPaymentDetailsResponseDto:
        """Get details about an existing mass payment batch.

        In the response, you get the status of each payment in the mass payment batch. Each payment is either
        ``scheduled``, ``completed``, or ``failed``. In addition, you get the ``count`` for the total number of payments
        in the mass payments batch.

        **Note**: From the list of ``completed`` payments in the response, BILL begins processing payments based on the
        payment ``processDate``.

        Args:
            payment_batch_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get mass payment status response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_mass_payment(
                payment_batch_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def get_payment(
        self,
        payment_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaymentResponseDto:
        """Get details about an existing payment.

        Args:
            payment_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get payment details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_payment(
                payment_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def list_payment_options(
        self,
        vendor_id: str,
        amount: float,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaymentOptionsResponseDto:
        """Get a list of vendor payment options available based on the funding account options available in the
        signed-in user's BILL organization and on the payment methods accepted by a vendor.

        See Vendor payment options in the Guides section for more information, sample requests, and responses.

        Args:
            vendor_id: Value sent with the request.
            amount: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of vendor payment options response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_payment_options(
                vendor_id, amount, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def list_payments(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListPaymentResponseDto:
        """Get a list of payment objects. By default, you get 20 results on one page of results. Set ``max`` in your
        request to get up to 100 results on one page.

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
            Get list of payments response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_payments(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    def void_payment(
        self,
        payment_id: str,
        body: VoidRequestDto | VoidRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaymentResponseDto:
        """Void an existing payment.

        Void a bill payment that has started processing and cannot be canceled (with ``POST
        /v3/payments/{paymentId}/cancel``). You can attempt to void payments made both with BILL (online) and outside
        BILL (offline).

        ### Void a payment made with BILL (online)

        In your /``POST /v3/payments/{paymentId}/void`` request:
        * Set ``paymentId`` as the BILL-generated ID of the payment. The value begins with ``stp``.
        * Set ``type`` as the void payment request type
        * Set ``reason`` as the reason for voiding the payment

        See Can I cancel or void a Payables payment? in the BILL Help Center to learn about the BILL void payment
        process and timing in the production environment.

        Args:
            payment_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Void a payment response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.void_payment(
                payment_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> PaymentsWithRawResponse:
        return self._with_raw_response


class AsyncPayments:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncPaymentsWithRawResponse(client, server)

    async def cancel_payment(
        self,
        payment_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaymentResponseDto:
        """Cancel an existing payment.

        You can cancel a payment only when the payment ``singleStatus`` is ``SCHEDULED``. When BILL starts processing
        the payment, the payment ``singleStatus`` changes. At that point, you cannot cancel the payment. You can attempt
        to void the payment with ``POST /v3/payments/{paymentId}/void``.

        Args:
            payment_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Cancel a payment response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.cancel_payment(
                payment_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def create_bulk_payment(
        self,
        body: BulkPaymentRequestDto | BulkPaymentRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BulkPaymentResponseDto:
        """Create a request for paying multiple bills. You can pay up to 50 bills with one ``POST /v3/payments/bulk``
        request.

        Bulk payments at BILL follow a set of rules.
        * **Successful response**: In your bulk payment request, all your bill payments must be successful for a
            successful response. If any bill payment is not successful, the entire request fails and none of the bills
            in the request are paid.
        * **You can pay multiple vendors**: You can pay multiple vendors with one ``POST /v3/payments/bulk`` request. In
            this case, make sure that you do not set ``vendorId`` in your request.
        * **You can only pay existing bills**: When you create a single payment with ``POST /v3/payments``, you can set
            ``createBill`` as ``true`` in your request for creating a new bill for a vendor payment. In your bulk
            payment request, an existing ``billId`` is required for each bill to be paid.
        * **Vendors with ``"combinePayments": true``**: When you create a bulk payment for a vendor that has
            ``"combinePayments": true``, BILL combines payments for up to 35 bills in one ``payments`` response object,
            and then combines payments for the remaining bills in a second ``payments`` response object.

        See Get list of vendor payment options to get details about vendor payment options and payment process dates.

        **Note**: Creating a bulk payment requires an MFA-trusted API session. See MFA setup for information about the
        BILL MFA process.

        See Payments in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a bulk payment response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.create_bulk_payment(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def create_mass_payment(
        self,
        body: BulkPaymentRequestDto | BulkPaymentRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MassPaymentResponseDto:
        """Create a mass payment request for up to 2000 bills. BILL processes each payment in the mass payment request
        asynchronously.

        In the response, a BILL-generated payment batch ID is available. You can track the current status of each
        payment in a mass payment batch with ``GET /v3/payments/mass/{paymentBatchId}``.

        **Note**: Creating a mass payment requires an MFA-trusted API session. See MFA setup for information about the
        BILL MFA process.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a mass payment response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.create_mass_payment(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def create_payment(
        self,
        body: PaymentRequestDto | PaymentRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaymentResponseDto:
        """Create a payment.

        See Get list of vendor payment options to get details about vendor payment options and payment process dates.

        **Note**: Creating a payment requires an MFA-trusted API session. See MFA setup for information about the BILL
        MFA process.

        See Payments in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a payment response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.create_payment(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def get_check_image_data(
        self,
        payment_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CheckImageDataResponseDto:
        """Get an image of an existing check sent to a vendor.

        The check image is available when the vendor bank processes the check payment. BILL checks in with the bank
        every 30 minutes to get the check image. The image file format is determined by the vendor bank.

        From the response, use ``downloadLink`` in a GET request to download the front and back images of the check.

        ```
        curl '{downloadLink}' --header 'sessionId: {session_id}' --output {check_name}
        ```

        Args:
            payment_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get check image data response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_check_image_data(
                payment_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def get_exchange_rate(
        self,
        vendor_id: str,
        amount: float,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ExchangeRateResponseDto:
        """Get the current BILL exchange rate and exchange rate batch ID for paying an international vendor. When the
        vendor bill currency is not ``USD``, the exchange rate batch ID is required for creating a payment with ``POST
        /v3/payments`` or ``POST /v3/payments/bulk``.

        BILL maintains all ``exchangeRate`` values in a batch. When a batch expires, a new batch ID is generated and all
        ``exchangeRate`` values are updated in the new batch. Use this endpoint to get the current exchange rate and
        batch ID based on the payment amount and vendor bill currency.

        In production, a BILL batch is valid for a maximum of 20 minutes. response provides the timestamp when the
        current batch will expire. For example, if a batch has been active for 17 minutes when you get the
        ``exchangeRateBatchId``, ``expirationTime`` indicates that you have 3 minutes remaining (with ``POST
        /v3/payments`` or ``POST /v3/payments/bulk``).

        **Note**:
        * International vendor payment information is required for you to get the BILL exchange rate with this endpoint.
        * When the vendor bill currency is not ``USD``, the payment ``processDate`` **must be** the next US business
            day.

        Args:
            vendor_id: Value sent with the request.
            amount: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get BILL exchange rate response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_exchange_rate(
                vendor_id, amount, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def get_exchange_rates(
        self,
        body: list[ExchangeRateRequestDto | ExchangeRateRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ExchangeRatesResponseDto:
        """Get the current BILL exchange rate and exchange rate batch ID for multiple international vendors with one API
        request. When the vendor bill currency is not ``USD``, the exchange rate batch ID is required for creating a
        payment with ``POST /v3/payments`` or ``POST /v3/payments/bulk``.

        BILL maintains all ``exchangeRate`` values in a batch. When a batch expires, a new batch ID is generated and all
        ``exchangeRate`` values are updated in the new batch. Use this endpoint to get the current exchange rate and
        batch ID based on the payment amount and vendor bill currency.

        In production, a BILL batch is valid for a maximum of 20 minutes. response provides the timestamp when the
        current batch will expire. For example, if a batch has been active for 17 minutes when you get the
        ``exchangeRateBatchId``, ``expirationTime`` indicates that you have 3 minutes remaining (with ``POST
        /v3/payments`` or ``POST /v3/payments/bulk``).

        **Note**:
        * International vendor payment information is required for you to get BILL exchange rates with this endpoint.
        * When the vendor bill currency is not ``USD``, the payment ``processDate`` **must be** the next US business
            day.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get BILL exchange rates for multiple vendors response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_exchange_rates(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def get_mass_payment(
        self,
        payment_batch_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MassPaymentDetailsResponseDto:
        """Get details about an existing mass payment batch.

        In the response, you get the status of each payment in the mass payment batch. Each payment is either
        ``scheduled``, ``completed``, or ``failed``. In addition, you get the ``count`` for the total number of payments
        in the mass payments batch.

        **Note**: From the list of ``completed`` payments in the response, BILL begins processing payments based on the
        payment ``processDate``.

        Args:
            payment_batch_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get mass payment status response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_mass_payment(
                payment_batch_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def get_payment(
        self,
        payment_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaymentResponseDto:
        """Get details about an existing payment.

        Args:
            payment_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get payment details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_payment(
                payment_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def list_payment_options(
        self,
        vendor_id: str,
        amount: float,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaymentOptionsResponseDto:
        """Get a list of vendor payment options available based on the funding account options available in the
        signed-in user's BILL organization and on the payment methods accepted by a vendor.

        See Vendor payment options in the Guides section for more information, sample requests, and responses.

        Args:
            vendor_id: Value sent with the request.
            amount: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of vendor payment options response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_payment_options(
                vendor_id, amount, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def list_payments(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListPaymentResponseDto:
        """Get a list of payment objects. By default, you get 20 results on one page of results. Set ``max`` in your
        request to get up to 100 results on one page.

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
            Get list of payments response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_payments(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    async def void_payment(
        self,
        payment_id: str,
        body: VoidRequestDto | VoidRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaymentResponseDto:
        """Void an existing payment.

        Void a bill payment that has started processing and cannot be canceled (with ``POST
        /v3/payments/{paymentId}/cancel``). You can attempt to void payments made both with BILL (online) and outside
        BILL (offline).

        ### Void a payment made with BILL (online)

        In your /``POST /v3/payments/{paymentId}/void`` request:
        * Set ``paymentId`` as the BILL-generated ID of the payment. The value begins with ``stp``.
        * Set ``type`` as the void payment request type
        * Set ``reason`` as the reason for voiding the payment

        See Can I cancel or void a Payables payment? in the BILL Help Center to learn about the BILL void payment
        process and timing in the production environment.

        Args:
            payment_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Void a payment response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.void_payment(
                payment_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncPaymentsWithRawResponse:
        return self._with_raw_response


class PaymentsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def cancel_payment(
        self,
        payment_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaymentResponseDto, CancelPaymentErrorBody]:
        """Cancel an existing payment.

        You can cancel a payment only when the payment ``singleStatus`` is ``SCHEDULED``. When BILL starts processing
        the payment, the payment ``singleStatus`` changes. At that point, you cannot cancel the payment. You can attempt
        to void the payment with ``POST /v3/payments/{paymentId}/void``.

        Args:
            payment_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/payments/{paymentId}/cancel"),
            path_params=[param[str]("paymentId", payment_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[PaymentResponseDto],
            error_mapper=cancel_payment_error_mapper,
            request_options=request_options,
        )

    def create_bulk_payment(
        self,
        body: BulkPaymentRequestDto | BulkPaymentRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BulkPaymentResponseDto, CreateBulkPaymentErrorBody]:
        """Create a request for paying multiple bills. You can pay up to 50 bills with one ``POST /v3/payments/bulk``
        request.

        Bulk payments at BILL follow a set of rules.
        * **Successful response**: In your bulk payment request, all your bill payments must be successful for a
            successful response. If any bill payment is not successful, the entire request fails and none of the bills
            in the request are paid.
        * **You can pay multiple vendors**: You can pay multiple vendors with one ``POST /v3/payments/bulk`` request. In
            this case, make sure that you do not set ``vendorId`` in your request.
        * **You can only pay existing bills**: When you create a single payment with ``POST /v3/payments``, you can set
            ``createBill`` as ``true`` in your request for creating a new bill for a vendor payment. In your bulk
            payment request, an existing ``billId`` is required for each bill to be paid.
        * **Vendors with ``"combinePayments": true``**: When you create a bulk payment for a vendor that has
            ``"combinePayments": true``, BILL combines payments for up to 35 bills in one ``payments`` response object,
            and then combines payments for the remaining bills in a second ``payments`` response object.

        See Get list of vendor payment options to get details about vendor payment options and payment process dates.

        **Note**: Creating a bulk payment requires an MFA-trusted API session. See MFA setup for information about the
        BILL MFA process.

        See Payments in the Guides section for more information, sample requests, and responses.

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
            url_template=self._server.default("/v3/payments/bulk"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[BulkPaymentRequestDto | BulkPaymentRequestDtoDict](body),
            decoder=json_decoder[BulkPaymentResponseDto],
            error_mapper=create_bulk_payment_error_mapper,
            request_options=request_options,
        )

    def create_mass_payment(
        self,
        body: BulkPaymentRequestDto | BulkPaymentRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MassPaymentResponseDto, CreateMassPaymentErrorBody]:
        """Create a mass payment request for up to 2000 bills. BILL processes each payment in the mass payment request
        asynchronously.

        In the response, a BILL-generated payment batch ID is available. You can track the current status of each
        payment in a mass payment batch with ``GET /v3/payments/mass/{paymentBatchId}``.

        **Note**: Creating a mass payment requires an MFA-trusted API session. See MFA setup for information about the
        BILL MFA process.

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
            url_template=self._server.default("/v3/payments/mass"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[BulkPaymentRequestDto | BulkPaymentRequestDtoDict](body),
            decoder=json_decoder[MassPaymentResponseDto],
            error_mapper=create_mass_payment_error_mapper,
            request_options=request_options,
        )

    def create_payment(
        self,
        body: PaymentRequestDto | PaymentRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaymentResponseDto, CreatePaymentErrorBody]:
        """Create a payment.

        See Get list of vendor payment options to get details about vendor payment options and payment process dates.

        **Note**: Creating a payment requires an MFA-trusted API session. See MFA setup for information about the BILL
        MFA process.

        See Payments in the Guides section for more information, sample requests, and responses.

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
            url_template=self._server.default("/v3/payments"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[PaymentRequestDto | PaymentRequestDtoDict](body),
            decoder=json_decoder[PaymentResponseDto],
            error_mapper=create_payment_error_mapper,
            request_options=request_options,
        )

    def get_check_image_data(
        self,
        payment_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CheckImageDataResponseDto, GetCheckImageDataErrorBody]:
        """Get an image of an existing check sent to a vendor.

        The check image is available when the vendor bank processes the check payment. BILL checks in with the bank
        every 30 minutes to get the check image. The image file format is determined by the vendor bank.

        From the response, use ``downloadLink`` in a GET request to download the front and back images of the check.

        ```
        curl '{downloadLink}' --header 'sessionId: {session_id}' --output {check_name}
        ```

        Args:
            payment_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/payments/{paymentId}/check-image"),
            path_params=[param[str]("paymentId", payment_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[CheckImageDataResponseDto],
            error_mapper=get_check_image_data_error_mapper,
            request_options=request_options,
        )

    def get_exchange_rate(
        self,
        vendor_id: str,
        amount: float,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ExchangeRateResponseDto, GetExchangeRateErrorBody]:
        """Get the current BILL exchange rate and exchange rate batch ID for paying an international vendor. When the
        vendor bill currency is not ``USD``, the exchange rate batch ID is required for creating a payment with ``POST
        /v3/payments`` or ``POST /v3/payments/bulk``.

        BILL maintains all ``exchangeRate`` values in a batch. When a batch expires, a new batch ID is generated and all
        ``exchangeRate`` values are updated in the new batch. Use this endpoint to get the current exchange rate and
        batch ID based on the payment amount and vendor bill currency.

        In production, a BILL batch is valid for a maximum of 20 minutes. response provides the timestamp when the
        current batch will expire. For example, if a batch has been active for 17 minutes when you get the
        ``exchangeRateBatchId``, ``expirationTime`` indicates that you have 3 minutes remaining (with ``POST
        /v3/payments`` or ``POST /v3/payments/bulk``).

        **Note**:
        * International vendor payment information is required for you to get the BILL exchange rate with this endpoint.
        * When the vendor bill currency is not ``USD``, the payment ``processDate`` **must be** the next US business
            day.

        Args:
            vendor_id: Value sent with the request.
            amount: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/payments/exchange-rate"),
            query_params=[param[str]("vendorId", vendor_id), param[float]("amount", amount)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[ExchangeRateResponseDto],
            error_mapper=get_exchange_rate_error_mapper,
            request_options=request_options,
        )

    def get_exchange_rates(
        self,
        body: list[ExchangeRateRequestDto | ExchangeRateRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ExchangeRatesResponseDto, GetExchangeRatesErrorBody]:
        """Get the current BILL exchange rate and exchange rate batch ID for multiple international vendors with one API
        request. When the vendor bill currency is not ``USD``, the exchange rate batch ID is required for creating a
        payment with ``POST /v3/payments`` or ``POST /v3/payments/bulk``.

        BILL maintains all ``exchangeRate`` values in a batch. When a batch expires, a new batch ID is generated and all
        ``exchangeRate`` values are updated in the new batch. Use this endpoint to get the current exchange rate and
        batch ID based on the payment amount and vendor bill currency.

        In production, a BILL batch is valid for a maximum of 20 minutes. response provides the timestamp when the
        current batch will expire. For example, if a batch has been active for 17 minutes when you get the
        ``exchangeRateBatchId``, ``expirationTime`` indicates that you have 3 minutes remaining (with ``POST
        /v3/payments`` or ``POST /v3/payments/bulk``).

        **Note**:
        * International vendor payment information is required for you to get BILL exchange rates with this endpoint.
        * When the vendor bill currency is not ``USD``, the payment ``processDate`` **must be** the next US business
            day.

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
            url_template=self._server.default("/v3/payments/exchange-rate"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[list[ExchangeRateRequestDto | ExchangeRateRequestDtoDict]](body),
            decoder=json_decoder[ExchangeRatesResponseDto],
            error_mapper=get_exchange_rates_error_mapper,
            request_options=request_options,
        )

    def get_mass_payment(
        self,
        payment_batch_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MassPaymentDetailsResponseDto, GetMassPaymentErrorBody]:
        """Get details about an existing mass payment batch.

        In the response, you get the status of each payment in the mass payment batch. Each payment is either
        ``scheduled``, ``completed``, or ``failed``. In addition, you get the ``count`` for the total number of payments
        in the mass payments batch.

        **Note**: From the list of ``completed`` payments in the response, BILL begins processing payments based on the
        payment ``processDate``.

        Args:
            payment_batch_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/payments/mass/{paymentBatchId}"),
            path_params=[param[str]("paymentBatchId", payment_batch_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[MassPaymentDetailsResponseDto],
            error_mapper=get_mass_payment_error_mapper,
            request_options=request_options,
        )

    def get_payment(
        self,
        payment_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaymentResponseDto, GetPaymentErrorBody]:
        """Get details about an existing payment.

        Args:
            payment_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/payments/{paymentId}"),
            path_params=[param[str]("paymentId", payment_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[PaymentResponseDto],
            error_mapper=get_payment_error_mapper,
            request_options=request_options,
        )

    def list_payment_options(
        self,
        vendor_id: str,
        amount: float,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaymentOptionsResponseDto, ListPaymentOptionsErrorBody]:
        """Get a list of vendor payment options available based on the funding account options available in the
        signed-in user's BILL organization and on the payment methods accepted by a vendor.

        See Vendor payment options in the Guides section for more information, sample requests, and responses.

        Args:
            vendor_id: Value sent with the request.
            amount: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/payments/options"),
            query_params=[param[str]("vendorId", vendor_id), param[float]("amount", amount)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[PaymentOptionsResponseDto],
            error_mapper=list_payment_options_error_mapper,
            request_options=request_options,
        )

    def list_payments(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListPaymentResponseDto, ListPaymentsErrorBody]:
        """Get a list of payment objects. By default, you get 20 results on one page of results. Set ``max`` in your
        request to get up to 100 results on one page.

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
            url_template=self._server.default("/v3/payments"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[ListPaymentResponseDto],
            error_mapper=list_payments_error_mapper,
            request_options=request_options,
        )

    def void_payment(
        self,
        payment_id: str,
        body: VoidRequestDto | VoidRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaymentResponseDto, VoidPaymentErrorBody]:
        """Void an existing payment.

        Void a bill payment that has started processing and cannot be canceled (with ``POST
        /v3/payments/{paymentId}/cancel``). You can attempt to void payments made both with BILL (online) and outside
        BILL (offline).

        ### Void a payment made with BILL (online)

        In your /``POST /v3/payments/{paymentId}/void`` request:
        * Set ``paymentId`` as the BILL-generated ID of the payment. The value begins with ``stp``.
        * Set ``type`` as the void payment request type
        * Set ``reason`` as the reason for voiding the payment

        See Can I cancel or void a Payables payment? in the BILL Help Center to learn about the BILL void payment
        process and timing in the production environment.

        Args:
            payment_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/payments/{paymentId}/void"),
            path_params=[param[str]("paymentId", payment_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[VoidRequestDto | VoidRequestDtoDict](body),
            decoder=json_decoder[PaymentResponseDto],
            error_mapper=void_payment_error_mapper,
            request_options=request_options,
        )


class AsyncPaymentsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def cancel_payment(
        self,
        payment_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaymentResponseDto, CancelPaymentErrorBody]:
        """Cancel an existing payment.

        You can cancel a payment only when the payment ``singleStatus`` is ``SCHEDULED``. When BILL starts processing
        the payment, the payment ``singleStatus`` changes. At that point, you cannot cancel the payment. You can attempt
        to void the payment with ``POST /v3/payments/{paymentId}/void``.

        Args:
            payment_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/payments/{paymentId}/cancel"),
            path_params=[param[str]("paymentId", payment_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[PaymentResponseDto],
            error_mapper=cancel_payment_error_mapper,
            request_options=request_options,
        )

    async def create_bulk_payment(
        self,
        body: BulkPaymentRequestDto | BulkPaymentRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BulkPaymentResponseDto, CreateBulkPaymentErrorBody]:
        """Create a request for paying multiple bills. You can pay up to 50 bills with one ``POST /v3/payments/bulk``
        request.

        Bulk payments at BILL follow a set of rules.
        * **Successful response**: In your bulk payment request, all your bill payments must be successful for a
            successful response. If any bill payment is not successful, the entire request fails and none of the bills
            in the request are paid.
        * **You can pay multiple vendors**: You can pay multiple vendors with one ``POST /v3/payments/bulk`` request. In
            this case, make sure that you do not set ``vendorId`` in your request.
        * **You can only pay existing bills**: When you create a single payment with ``POST /v3/payments``, you can set
            ``createBill`` as ``true`` in your request for creating a new bill for a vendor payment. In your bulk
            payment request, an existing ``billId`` is required for each bill to be paid.
        * **Vendors with ``"combinePayments": true``**: When you create a bulk payment for a vendor that has
            ``"combinePayments": true``, BILL combines payments for up to 35 bills in one ``payments`` response object,
            and then combines payments for the remaining bills in a second ``payments`` response object.

        See Get list of vendor payment options to get details about vendor payment options and payment process dates.

        **Note**: Creating a bulk payment requires an MFA-trusted API session. See MFA setup for information about the
        BILL MFA process.

        See Payments in the Guides section for more information, sample requests, and responses.

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
            url_template=self._server.default("/v3/payments/bulk"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[BulkPaymentRequestDto | BulkPaymentRequestDtoDict](body),
            decoder=async_json_decoder[BulkPaymentResponseDto],
            error_mapper=create_bulk_payment_error_mapper,
            request_options=request_options,
        )

    async def create_mass_payment(
        self,
        body: BulkPaymentRequestDto | BulkPaymentRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MassPaymentResponseDto, CreateMassPaymentErrorBody]:
        """Create a mass payment request for up to 2000 bills. BILL processes each payment in the mass payment request
        asynchronously.

        In the response, a BILL-generated payment batch ID is available. You can track the current status of each
        payment in a mass payment batch with ``GET /v3/payments/mass/{paymentBatchId}``.

        **Note**: Creating a mass payment requires an MFA-trusted API session. See MFA setup for information about the
        BILL MFA process.

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
            url_template=self._server.default("/v3/payments/mass"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[BulkPaymentRequestDto | BulkPaymentRequestDtoDict](body),
            decoder=async_json_decoder[MassPaymentResponseDto],
            error_mapper=create_mass_payment_error_mapper,
            request_options=request_options,
        )

    async def create_payment(
        self,
        body: PaymentRequestDto | PaymentRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaymentResponseDto, CreatePaymentErrorBody]:
        """Create a payment.

        See Get list of vendor payment options to get details about vendor payment options and payment process dates.

        **Note**: Creating a payment requires an MFA-trusted API session. See MFA setup for information about the BILL
        MFA process.

        See Payments in the Guides section for more information, sample requests, and responses.

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
            url_template=self._server.default("/v3/payments"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[PaymentRequestDto | PaymentRequestDtoDict](body),
            decoder=async_json_decoder[PaymentResponseDto],
            error_mapper=create_payment_error_mapper,
            request_options=request_options,
        )

    async def get_check_image_data(
        self,
        payment_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CheckImageDataResponseDto, GetCheckImageDataErrorBody]:
        """Get an image of an existing check sent to a vendor.

        The check image is available when the vendor bank processes the check payment. BILL checks in with the bank
        every 30 minutes to get the check image. The image file format is determined by the vendor bank.

        From the response, use ``downloadLink`` in a GET request to download the front and back images of the check.

        ```
        curl '{downloadLink}' --header 'sessionId: {session_id}' --output {check_name}
        ```

        Args:
            payment_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/payments/{paymentId}/check-image"),
            path_params=[param[str]("paymentId", payment_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[CheckImageDataResponseDto],
            error_mapper=get_check_image_data_error_mapper,
            request_options=request_options,
        )

    async def get_exchange_rate(
        self,
        vendor_id: str,
        amount: float,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ExchangeRateResponseDto, GetExchangeRateErrorBody]:
        """Get the current BILL exchange rate and exchange rate batch ID for paying an international vendor. When the
        vendor bill currency is not ``USD``, the exchange rate batch ID is required for creating a payment with ``POST
        /v3/payments`` or ``POST /v3/payments/bulk``.

        BILL maintains all ``exchangeRate`` values in a batch. When a batch expires, a new batch ID is generated and all
        ``exchangeRate`` values are updated in the new batch. Use this endpoint to get the current exchange rate and
        batch ID based on the payment amount and vendor bill currency.

        In production, a BILL batch is valid for a maximum of 20 minutes. response provides the timestamp when the
        current batch will expire. For example, if a batch has been active for 17 minutes when you get the
        ``exchangeRateBatchId``, ``expirationTime`` indicates that you have 3 minutes remaining (with ``POST
        /v3/payments`` or ``POST /v3/payments/bulk``).

        **Note**:
        * International vendor payment information is required for you to get the BILL exchange rate with this endpoint.
        * When the vendor bill currency is not ``USD``, the payment ``processDate`` **must be** the next US business
            day.

        Args:
            vendor_id: Value sent with the request.
            amount: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/payments/exchange-rate"),
            query_params=[param[str]("vendorId", vendor_id), param[float]("amount", amount)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[ExchangeRateResponseDto],
            error_mapper=get_exchange_rate_error_mapper,
            request_options=request_options,
        )

    async def get_exchange_rates(
        self,
        body: list[ExchangeRateRequestDto | ExchangeRateRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ExchangeRatesResponseDto, GetExchangeRatesErrorBody]:
        """Get the current BILL exchange rate and exchange rate batch ID for multiple international vendors with one API
        request. When the vendor bill currency is not ``USD``, the exchange rate batch ID is required for creating a
        payment with ``POST /v3/payments`` or ``POST /v3/payments/bulk``.

        BILL maintains all ``exchangeRate`` values in a batch. When a batch expires, a new batch ID is generated and all
        ``exchangeRate`` values are updated in the new batch. Use this endpoint to get the current exchange rate and
        batch ID based on the payment amount and vendor bill currency.

        In production, a BILL batch is valid for a maximum of 20 minutes. response provides the timestamp when the
        current batch will expire. For example, if a batch has been active for 17 minutes when you get the
        ``exchangeRateBatchId``, ``expirationTime`` indicates that you have 3 minutes remaining (with ``POST
        /v3/payments`` or ``POST /v3/payments/bulk``).

        **Note**:
        * International vendor payment information is required for you to get BILL exchange rates with this endpoint.
        * When the vendor bill currency is not ``USD``, the payment ``processDate`` **must be** the next US business
            day.

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
            url_template=self._server.default("/v3/payments/exchange-rate"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[list[ExchangeRateRequestDto | ExchangeRateRequestDtoDict]](body),
            decoder=async_json_decoder[ExchangeRatesResponseDto],
            error_mapper=get_exchange_rates_error_mapper,
            request_options=request_options,
        )

    async def get_mass_payment(
        self,
        payment_batch_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MassPaymentDetailsResponseDto, GetMassPaymentErrorBody]:
        """Get details about an existing mass payment batch.

        In the response, you get the status of each payment in the mass payment batch. Each payment is either
        ``scheduled``, ``completed``, or ``failed``. In addition, you get the ``count`` for the total number of payments
        in the mass payments batch.

        **Note**: From the list of ``completed`` payments in the response, BILL begins processing payments based on the
        payment ``processDate``.

        Args:
            payment_batch_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/payments/mass/{paymentBatchId}"),
            path_params=[param[str]("paymentBatchId", payment_batch_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[MassPaymentDetailsResponseDto],
            error_mapper=get_mass_payment_error_mapper,
            request_options=request_options,
        )

    async def get_payment(
        self,
        payment_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaymentResponseDto, GetPaymentErrorBody]:
        """Get details about an existing payment.

        Args:
            payment_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/payments/{paymentId}"),
            path_params=[param[str]("paymentId", payment_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[PaymentResponseDto],
            error_mapper=get_payment_error_mapper,
            request_options=request_options,
        )

    async def list_payment_options(
        self,
        vendor_id: str,
        amount: float,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaymentOptionsResponseDto, ListPaymentOptionsErrorBody]:
        """Get a list of vendor payment options available based on the funding account options available in the
        signed-in user's BILL organization and on the payment methods accepted by a vendor.

        See Vendor payment options in the Guides section for more information, sample requests, and responses.

        Args:
            vendor_id: Value sent with the request.
            amount: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/payments/options"),
            query_params=[param[str]("vendorId", vendor_id), param[float]("amount", amount)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[PaymentOptionsResponseDto],
            error_mapper=list_payment_options_error_mapper,
            request_options=request_options,
        )

    async def list_payments(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListPaymentResponseDto, ListPaymentsErrorBody]:
        """Get a list of payment objects. By default, you get 20 results on one page of results. Set ``max`` in your
        request to get up to 100 results on one page.

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
            url_template=self._server.default("/v3/payments"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[ListPaymentResponseDto],
            error_mapper=list_payments_error_mapper,
            request_options=request_options,
        )

    async def void_payment(
        self,
        payment_id: str,
        body: VoidRequestDto | VoidRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaymentResponseDto, VoidPaymentErrorBody]:
        """Void an existing payment.

        Void a bill payment that has started processing and cannot be canceled (with ``POST
        /v3/payments/{paymentId}/cancel``). You can attempt to void payments made both with BILL (online) and outside
        BILL (offline).

        ### Void a payment made with BILL (online)

        In your /``POST /v3/payments/{paymentId}/void`` request:
        * Set ``paymentId`` as the BILL-generated ID of the payment. The value begins with ``stp``.
        * Set ``type`` as the void payment request type
        * Set ``reason`` as the reason for voiding the payment

        See Can I cancel or void a Payables payment? in the BILL Help Center to learn about the BILL void payment
        process and timing in the production environment.

        Args:
            payment_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/payments/{paymentId}/void"),
            path_params=[param[str]("paymentId", payment_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[VoidRequestDto | VoidRequestDtoDict](body),
            decoder=async_json_decoder[PaymentResponseDto],
            error_mapper=void_payment_error_mapper,
            request_options=request_options,
        )
