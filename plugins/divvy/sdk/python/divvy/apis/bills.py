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
from ..errors.archive_bill_error import ArchiveBillErrorBody, archive_bill_error_mapper
from ..errors.create_bill_error import CreateBillErrorBody, create_bill_error_mapper
from ..errors.create_bulk_bills_error import CreateBulkBillsErrorBody, create_bulk_bills_error_mapper
from ..errors.get_bill_error import GetBillErrorBody, get_bill_error_mapper
from ..errors.list_bills_error import ListBillsErrorBody, list_bills_error_mapper
from ..errors.record_payment_error import RecordPaymentErrorBody, record_payment_error_mapper
from ..errors.replace_bill_error import ReplaceBillErrorBody, replace_bill_error_mapper
from ..errors.restore_bill_error import RestoreBillErrorBody, restore_bill_error_mapper
from ..errors.update_bill_error import UpdateBillErrorBody, update_bill_error_mapper
from ..models.bill_create_request_dto import BillCreateRequestDto, BillCreateRequestDtoDict
from ..models.bill_read_response_dto import BillReadResponseDto
from ..models.bill_replace_request_dto import BillReplaceRequestDto, BillReplaceRequestDtoDict
from ..models.bill_response_dto import BillResponseDto
from ..models.bill_update_request_dto import BillUpdateRequestDto, BillUpdateRequestDtoDict
from ..models.bill_without_approvers_response_dto import BillWithoutApproversResponseDto
from ..models.list_bill_response_dto import ListBillResponseDto
from ..models.record_payment_request_dto import RecordPaymentRequestDto, RecordPaymentRequestDtoDict
from ..models.record_payment_response_dto import RecordPaymentResponseDto
from ..server.server import Server


class Bills:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = BillsWithRawResponse(client, server)

    def archive_bill(
        self,
        bill_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BillWithoutApproversResponseDto:
        """Archive an existing bill. In the response, the ``archived`` field is set as ``true``.

        You can restore an archived bill with ``POST /v3/bills/{billId}/restore``. There is no change when you archive
        an archived bill.

        Args:
            bill_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive a bill response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.archive_bill(
                bill_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def create_bill(
        self,
        body: BillCreateRequestDto | BillCreateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BillResponseDto:
        """Create a new bill.

        See Bills in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a bill response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.create_bill(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def create_bulk_bills(
        self,
        body: list[BillCreateRequestDto | BillCreateRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[BillWithoutApproversResponseDto]:
        """Create multiple bills with one API request. You can create up to 100 bills with one ``POST /v3/bills/bulk``
        request.

        Bulk bill creation at BILL follow a set of rules.
        * **Successful response**: In your bulk bill creation request, all your bills must be successfully created for a
            successful response. If any bill creation is not successful, the entire request fails and none of the bills
            in the request are created.
        * **You can create bills for multiple vendors**: You can create bills for one vendor or for multiple vendors
            with one ``POST /v3/bills/bulk`` request.

        See Bills in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create multiple bills response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.create_bulk_bills(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def get_bill(
        self,
        bill_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BillReadResponseDto:
        """Get details about an existing bill.

        Args:
            bill_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get bill details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_bill(
                bill_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def list_bills(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListBillResponseDto:
        """Get a list of bill objects. By default, you get 20 results on one page of results. Set ``max`` in your
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
            Get list of bills response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_bills(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    def record_payment(
        self,
        body: RecordPaymentRequestDto | RecordPaymentRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RecordPaymentResponseDto:
        """Record an offline AP payment made to a vendor.

        An offline payment is a payment made outside the BILL system. BILL simply applies the recorded payment amount to
        one or more bills for the vendor. BILL does not process the payment or transfer funds to the vendor when you
        record an AP payment with this endpoint.

        Use ``POST /v3/payments`` to create a payment with the BILL system. When you pay with ``POST /v3/payments``,
        BILL processes the payment and transfers funds from your BILL organization funding account to the vendor.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Record AP payment response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.record_payment(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def replace_bill(
        self,
        bill_id: str,
        body: BillReplaceRequestDto | BillReplaceRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BillResponseDto:
        """Update the number of line items in a bill. You can also update other bill details.

        You can use the PUT operation to add, remove, or replace the number of line items in a bill. A set of rules
        apply with the PUT operation.
        * When you add a new line item, a new line item ``id`` is generated in the bill.
        * When you omit an existing line item ``id``, the line item is removed from the bill.

        Args:
            bill_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Replace a bill response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.replace_bill(
                bill_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def restore_bill(
        self,
        bill_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BillWithoutApproversResponseDto:
        """Restore an archived bill. In the response, the ``archived`` field is set as ``false``.

        You can perform any valid BILL operation on restored bills. There is no change when you restore a restored bill.

        Args:
            bill_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore an archived bill response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.restore_bill(
                bill_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def update_bill(
        self,
        bill_id: str,
        body: BillUpdateRequestDto | BillUpdateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BillResponseDto:
        """Update details about a bill line item. You can also update other bill details.

        You can use the PATCH operation to modify line item details, such as ``amount`` and ``description``. The bill
        line item ``id`` does not change with a PATCH operation.

        Args:
            bill_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a bill response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.update_bill(
                bill_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> BillsWithRawResponse:
        return self._with_raw_response


class AsyncBills:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncBillsWithRawResponse(client, server)

    async def archive_bill(
        self,
        bill_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BillWithoutApproversResponseDto:
        """Archive an existing bill. In the response, the ``archived`` field is set as ``true``.

        You can restore an archived bill with ``POST /v3/bills/{billId}/restore``. There is no change when you archive
        an archived bill.

        Args:
            bill_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive a bill response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.archive_bill(
                bill_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def create_bill(
        self,
        body: BillCreateRequestDto | BillCreateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BillResponseDto:
        """Create a new bill.

        See Bills in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a bill response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.create_bill(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def create_bulk_bills(
        self,
        body: list[BillCreateRequestDto | BillCreateRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[BillWithoutApproversResponseDto]:
        """Create multiple bills with one API request. You can create up to 100 bills with one ``POST /v3/bills/bulk``
        request.

        Bulk bill creation at BILL follow a set of rules.
        * **Successful response**: In your bulk bill creation request, all your bills must be successfully created for a
            successful response. If any bill creation is not successful, the entire request fails and none of the bills
            in the request are created.
        * **You can create bills for multiple vendors**: You can create bills for one vendor or for multiple vendors
            with one ``POST /v3/bills/bulk`` request.

        See Bills in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create multiple bills response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.create_bulk_bills(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def get_bill(
        self,
        bill_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BillReadResponseDto:
        """Get details about an existing bill.

        Args:
            bill_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get bill details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_bill(
                bill_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def list_bills(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListBillResponseDto:
        """Get a list of bill objects. By default, you get 20 results on one page of results. Set ``max`` in your
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
            Get list of bills response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_bills(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    async def record_payment(
        self,
        body: RecordPaymentRequestDto | RecordPaymentRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RecordPaymentResponseDto:
        """Record an offline AP payment made to a vendor.

        An offline payment is a payment made outside the BILL system. BILL simply applies the recorded payment amount to
        one or more bills for the vendor. BILL does not process the payment or transfer funds to the vendor when you
        record an AP payment with this endpoint.

        Use ``POST /v3/payments`` to create a payment with the BILL system. When you pay with ``POST /v3/payments``,
        BILL processes the payment and transfers funds from your BILL organization funding account to the vendor.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Record AP payment response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.record_payment(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def replace_bill(
        self,
        bill_id: str,
        body: BillReplaceRequestDto | BillReplaceRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BillResponseDto:
        """Update the number of line items in a bill. You can also update other bill details.

        You can use the PUT operation to add, remove, or replace the number of line items in a bill. A set of rules
        apply with the PUT operation.
        * When you add a new line item, a new line item ``id`` is generated in the bill.
        * When you omit an existing line item ``id``, the line item is removed from the bill.

        Args:
            bill_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Replace a bill response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.replace_bill(
                bill_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def restore_bill(
        self,
        bill_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BillWithoutApproversResponseDto:
        """Restore an archived bill. In the response, the ``archived`` field is set as ``false``.

        You can perform any valid BILL operation on restored bills. There is no change when you restore a restored bill.

        Args:
            bill_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore an archived bill response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.restore_bill(
                bill_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def update_bill(
        self,
        bill_id: str,
        body: BillUpdateRequestDto | BillUpdateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BillResponseDto:
        """Update details about a bill line item. You can also update other bill details.

        You can use the PATCH operation to modify line item details, such as ``amount`` and ``description``. The bill
        line item ``id`` does not change with a PATCH operation.

        Args:
            bill_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a bill response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.update_bill(
                bill_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncBillsWithRawResponse:
        return self._with_raw_response


class BillsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def archive_bill(
        self,
        bill_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BillWithoutApproversResponseDto, ArchiveBillErrorBody]:
        """Archive an existing bill. In the response, the ``archived`` field is set as ``true``.

        You can restore an archived bill with ``POST /v3/bills/{billId}/restore``. There is no change when you archive
        an archived bill.

        Args:
            bill_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/bills/{billId}/archive"),
            path_params=[param[str]("billId", bill_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[BillWithoutApproversResponseDto],
            error_mapper=archive_bill_error_mapper,
            request_options=request_options,
        )

    def create_bill(
        self,
        body: BillCreateRequestDto | BillCreateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BillResponseDto, CreateBillErrorBody]:
        """Create a new bill.

        See Bills in the Guides section for more information, sample requests, and responses.

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
            url_template=self._server.default("/v3/bills"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[BillCreateRequestDto | BillCreateRequestDtoDict](body),
            decoder=json_decoder[BillResponseDto],
            error_mapper=create_bill_error_mapper,
            request_options=request_options,
        )

    def create_bulk_bills(
        self,
        body: list[BillCreateRequestDto | BillCreateRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[BillWithoutApproversResponseDto], CreateBulkBillsErrorBody]:
        """Create multiple bills with one API request. You can create up to 100 bills with one ``POST /v3/bills/bulk``
        request.

        Bulk bill creation at BILL follow a set of rules.
        * **Successful response**: In your bulk bill creation request, all your bills must be successfully created for a
            successful response. If any bill creation is not successful, the entire request fails and none of the bills
            in the request are created.
        * **You can create bills for multiple vendors**: You can create bills for one vendor or for multiple vendors
            with one ``POST /v3/bills/bulk`` request.

        See Bills in the Guides section for more information, sample requests, and responses.

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
            url_template=self._server.default("/v3/bills/bulk"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[list[BillCreateRequestDto | BillCreateRequestDtoDict]](body),
            decoder=json_decoder[list[BillWithoutApproversResponseDto]],
            error_mapper=create_bulk_bills_error_mapper,
            request_options=request_options,
        )

    def get_bill(
        self,
        bill_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BillReadResponseDto, GetBillErrorBody]:
        """Get details about an existing bill.

        Args:
            bill_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/bills/{billId}"),
            path_params=[param[str]("billId", bill_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[BillReadResponseDto],
            error_mapper=get_bill_error_mapper,
            request_options=request_options,
        )

    def list_bills(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListBillResponseDto, ListBillsErrorBody]:
        """Get a list of bill objects. By default, you get 20 results on one page of results. Set ``max`` in your
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
            url_template=self._server.default("/v3/bills"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[ListBillResponseDto],
            error_mapper=list_bills_error_mapper,
            request_options=request_options,
        )

    def record_payment(
        self,
        body: RecordPaymentRequestDto | RecordPaymentRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RecordPaymentResponseDto, RecordPaymentErrorBody]:
        """Record an offline AP payment made to a vendor.

        An offline payment is a payment made outside the BILL system. BILL simply applies the recorded payment amount to
        one or more bills for the vendor. BILL does not process the payment or transfer funds to the vendor when you
        record an AP payment with this endpoint.

        Use ``POST /v3/payments`` to create a payment with the BILL system. When you pay with ``POST /v3/payments``,
        BILL processes the payment and transfers funds from your BILL organization funding account to the vendor.

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
            url_template=self._server.default("/v3/bills/record-payment"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[RecordPaymentRequestDto | RecordPaymentRequestDtoDict](body),
            decoder=json_decoder[RecordPaymentResponseDto],
            error_mapper=record_payment_error_mapper,
            request_options=request_options,
        )

    def replace_bill(
        self,
        bill_id: str,
        body: BillReplaceRequestDto | BillReplaceRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BillResponseDto, ReplaceBillErrorBody]:
        """Update the number of line items in a bill. You can also update other bill details.

        You can use the PUT operation to add, remove, or replace the number of line items in a bill. A set of rules
        apply with the PUT operation.
        * When you add a new line item, a new line item ``id`` is generated in the bill.
        * When you omit an existing line item ``id``, the line item is removed from the bill.

        Args:
            bill_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v3/bills/{billId}"),
            path_params=[param[str]("billId", bill_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[BillReplaceRequestDto | BillReplaceRequestDtoDict](body),
            decoder=json_decoder[BillResponseDto],
            error_mapper=replace_bill_error_mapper,
            request_options=request_options,
        )

    def restore_bill(
        self,
        bill_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BillWithoutApproversResponseDto, RestoreBillErrorBody]:
        """Restore an archived bill. In the response, the ``archived`` field is set as ``false``.

        You can perform any valid BILL operation on restored bills. There is no change when you restore a restored bill.

        Args:
            bill_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/bills/{billId}/restore"),
            path_params=[param[str]("billId", bill_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[BillWithoutApproversResponseDto],
            error_mapper=restore_bill_error_mapper,
            request_options=request_options,
        )

    def update_bill(
        self,
        bill_id: str,
        body: BillUpdateRequestDto | BillUpdateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BillResponseDto, UpdateBillErrorBody]:
        """Update details about a bill line item. You can also update other bill details.

        You can use the PATCH operation to modify line item details, such as ``amount`` and ``description``. The bill
        line item ``id`` does not change with a PATCH operation.

        Args:
            bill_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/bills/{billId}"),
            path_params=[param[str]("billId", bill_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[BillUpdateRequestDto | BillUpdateRequestDtoDict](body),
            decoder=json_decoder[BillResponseDto],
            error_mapper=update_bill_error_mapper,
            request_options=request_options,
        )


class AsyncBillsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def archive_bill(
        self,
        bill_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BillWithoutApproversResponseDto, ArchiveBillErrorBody]:
        """Archive an existing bill. In the response, the ``archived`` field is set as ``true``.

        You can restore an archived bill with ``POST /v3/bills/{billId}/restore``. There is no change when you archive
        an archived bill.

        Args:
            bill_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/bills/{billId}/archive"),
            path_params=[param[str]("billId", bill_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[BillWithoutApproversResponseDto],
            error_mapper=archive_bill_error_mapper,
            request_options=request_options,
        )

    async def create_bill(
        self,
        body: BillCreateRequestDto | BillCreateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BillResponseDto, CreateBillErrorBody]:
        """Create a new bill.

        See Bills in the Guides section for more information, sample requests, and responses.

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
            url_template=self._server.default("/v3/bills"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[BillCreateRequestDto | BillCreateRequestDtoDict](body),
            decoder=async_json_decoder[BillResponseDto],
            error_mapper=create_bill_error_mapper,
            request_options=request_options,
        )

    async def create_bulk_bills(
        self,
        body: list[BillCreateRequestDto | BillCreateRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[BillWithoutApproversResponseDto], CreateBulkBillsErrorBody]:
        """Create multiple bills with one API request. You can create up to 100 bills with one ``POST /v3/bills/bulk``
        request.

        Bulk bill creation at BILL follow a set of rules.
        * **Successful response**: In your bulk bill creation request, all your bills must be successfully created for a
            successful response. If any bill creation is not successful, the entire request fails and none of the bills
            in the request are created.
        * **You can create bills for multiple vendors**: You can create bills for one vendor or for multiple vendors
            with one ``POST /v3/bills/bulk`` request.

        See Bills in the Guides section for more information, sample requests, and responses.

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
            url_template=self._server.default("/v3/bills/bulk"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[list[BillCreateRequestDto | BillCreateRequestDtoDict]](body),
            decoder=async_json_decoder[list[BillWithoutApproversResponseDto]],
            error_mapper=create_bulk_bills_error_mapper,
            request_options=request_options,
        )

    async def get_bill(
        self,
        bill_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BillReadResponseDto, GetBillErrorBody]:
        """Get details about an existing bill.

        Args:
            bill_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/bills/{billId}"),
            path_params=[param[str]("billId", bill_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[BillReadResponseDto],
            error_mapper=get_bill_error_mapper,
            request_options=request_options,
        )

    async def list_bills(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListBillResponseDto, ListBillsErrorBody]:
        """Get a list of bill objects. By default, you get 20 results on one page of results. Set ``max`` in your
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
            url_template=self._server.default("/v3/bills"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[ListBillResponseDto],
            error_mapper=list_bills_error_mapper,
            request_options=request_options,
        )

    async def record_payment(
        self,
        body: RecordPaymentRequestDto | RecordPaymentRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RecordPaymentResponseDto, RecordPaymentErrorBody]:
        """Record an offline AP payment made to a vendor.

        An offline payment is a payment made outside the BILL system. BILL simply applies the recorded payment amount to
        one or more bills for the vendor. BILL does not process the payment or transfer funds to the vendor when you
        record an AP payment with this endpoint.

        Use ``POST /v3/payments`` to create a payment with the BILL system. When you pay with ``POST /v3/payments``,
        BILL processes the payment and transfers funds from your BILL organization funding account to the vendor.

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
            url_template=self._server.default("/v3/bills/record-payment"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[RecordPaymentRequestDto | RecordPaymentRequestDtoDict](body),
            decoder=async_json_decoder[RecordPaymentResponseDto],
            error_mapper=record_payment_error_mapper,
            request_options=request_options,
        )

    async def replace_bill(
        self,
        bill_id: str,
        body: BillReplaceRequestDto | BillReplaceRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BillResponseDto, ReplaceBillErrorBody]:
        """Update the number of line items in a bill. You can also update other bill details.

        You can use the PUT operation to add, remove, or replace the number of line items in a bill. A set of rules
        apply with the PUT operation.
        * When you add a new line item, a new line item ``id`` is generated in the bill.
        * When you omit an existing line item ``id``, the line item is removed from the bill.

        Args:
            bill_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v3/bills/{billId}"),
            path_params=[param[str]("billId", bill_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[BillReplaceRequestDto | BillReplaceRequestDtoDict](body),
            decoder=async_json_decoder[BillResponseDto],
            error_mapper=replace_bill_error_mapper,
            request_options=request_options,
        )

    async def restore_bill(
        self,
        bill_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BillWithoutApproversResponseDto, RestoreBillErrorBody]:
        """Restore an archived bill. In the response, the ``archived`` field is set as ``false``.

        You can perform any valid BILL operation on restored bills. There is no change when you restore a restored bill.

        Args:
            bill_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/bills/{billId}/restore"),
            path_params=[param[str]("billId", bill_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[BillWithoutApproversResponseDto],
            error_mapper=restore_bill_error_mapper,
            request_options=request_options,
        )

    async def update_bill(
        self,
        bill_id: str,
        body: BillUpdateRequestDto | BillUpdateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BillResponseDto, UpdateBillErrorBody]:
        """Update details about a bill line item. You can also update other bill details.

        You can use the PATCH operation to modify line item details, such as ``amount`` and ``description``. The bill
        line item ``id`` does not change with a PATCH operation.

        Args:
            bill_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/bills/{billId}"),
            path_params=[param[str]("billId", bill_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[BillUpdateRequestDto | BillUpdateRequestDtoDict](body),
            decoder=async_json_decoder[BillResponseDto],
            error_mapper=update_bill_error_mapper,
            request_options=request_options,
        )
