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
from ..errors.archive_recurring_invoice_error import (
    ArchiveRecurringInvoiceErrorBody,
    archive_recurring_invoice_error_mapper,
)
from ..errors.create_recurring_invoice_error import (
    CreateRecurringInvoiceErrorBody,
    create_recurring_invoice_error_mapper,
)
from ..errors.get_recurring_invoice_error import GetRecurringInvoiceErrorBody, get_recurring_invoice_error_mapper
from ..errors.list_recurring_invoices_error import ListRecurringInvoicesErrorBody, list_recurring_invoices_error_mapper
from ..errors.replace_recurring_invoice_error import (
    ReplaceRecurringInvoiceErrorBody,
    replace_recurring_invoice_error_mapper,
)
from ..errors.restore_recurring_invoice_error import (
    RestoreRecurringInvoiceErrorBody,
    restore_recurring_invoice_error_mapper,
)
from ..errors.update_recurring_invoice_error import (
    UpdateRecurringInvoiceErrorBody,
    update_recurring_invoice_error_mapper,
)
from ..models.create_recurring_invoice_request_dto import (
    CreateRecurringInvoiceRequestDto,
    CreateRecurringInvoiceRequestDtoDict,
)
from ..models.list_response_dto_recurring_invoice_response_dto import ListResponseDtoRecurringInvoiceResponseDto
from ..models.recurring_invoice_replace_request_dto import (
    RecurringInvoiceReplaceRequestDto,
    RecurringInvoiceReplaceRequestDtoDict,
)
from ..models.recurring_invoice_response_dto import RecurringInvoiceResponseDto
from ..models.update_recurring_invoice_request_dto import (
    UpdateRecurringInvoiceRequestDto,
    UpdateRecurringInvoiceRequestDtoDict,
)
from ..server.server import Server


class RecurringInvoices:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = RecurringInvoicesWithRawResponse(client, server)

    def archive_recurring_invoice(
        self,
        recurring_invoice_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RecurringInvoiceResponseDto:
        """Archive a recurring invoice. In the response, the ``archived`` field is set as ``true``.

        You can restore an archived recurring invoice with ``POST /v3/recurring-invoices/{recurringinvoiceId}/restore``.
        There is no change when you archive an archived recurring invoice.

        When a recurring invoice is modified, all future invoices are automatically changed.

        Args:
            recurring_invoice_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive a recurring invoice response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.archive_recurring_invoice(
                recurring_invoice_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def create_recurring_invoice(
        self,
        body: CreateRecurringInvoiceRequestDto | CreateRecurringInvoiceRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RecurringInvoiceResponseDto:
        """Create a recurring invoice.

        See Recurring invoices in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a recurring invoice response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.create_recurring_invoice(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def get_recurring_invoice(
        self,
        recurring_invoice_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RecurringInvoiceResponseDto:
        """Get details about an existing recurring invoice.

        Args:
            recurring_invoice_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get recurring invoice details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_recurring_invoice(
                recurring_invoice_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def list_recurring_invoices(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListResponseDtoRecurringInvoiceResponseDto:
        """Get a list of recurring invoice objects. By default, you get 20 results on one page of results. Set ``max``
        in your request to get up to 100 results on one page.

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
            Get list of recurring invoices response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_recurring_invoices(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    def replace_recurring_invoice(
        self,
        recurring_invoice_id: str,
        body: RecurringInvoiceReplaceRequestDto | RecurringInvoiceReplaceRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RecurringInvoiceResponseDto:
        """Update the number of line items in a recurring invoice. You can also update other recurring invoice details.

        You can use the PUT operation to add, remove, or replace the number of line items in a recurring invoice. A set
        of rules apply with the PUT operation.
        * When you add a new line item, a new line item ``id`` is generated in the invoice.
        * When you omit an existing line item ``id``, the line item is removed from the invoice.

        When a recurring invoice is modified, all future invoices are automatically changed.

        Args:
            recurring_invoice_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Replace a recurring invoice response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.replace_recurring_invoice(
                recurring_invoice_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def restore_recurring_invoice(
        self,
        recurring_invoice_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RecurringInvoiceResponseDto:
        """Restore an archived recurring invoice. In the response, the ``archived`` field is set as ``false``.

        You can perform any valid BILL operation on restored recurring invoices. There is no change when you restore a
        restored recurring invoice.

        When a recurring invoice is modified, all future invoices are automatically changed.

        Args:
            recurring_invoice_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore a recurring invoice response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.restore_recurring_invoice(
                recurring_invoice_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def update_recurring_invoice(
        self,
        recurring_invoice_id: str,
        body: UpdateRecurringInvoiceRequestDto | UpdateRecurringInvoiceRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RecurringInvoiceResponseDto:
        """Update details about a recurring invoice line item. You can also update other recurring invoice details.

        You can use the PATCH operation to modify line item details, such as amount and description. The recurring
        invoice line item ``id`` does not change with a PATCH operation.

        When a recurring invoice is modified, all future invoices are automatically changed.

        Args:
            recurring_invoice_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a recurring invoice response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.update_recurring_invoice(
                recurring_invoice_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> RecurringInvoicesWithRawResponse:
        return self._with_raw_response


class AsyncRecurringInvoices:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncRecurringInvoicesWithRawResponse(client, server)

    async def archive_recurring_invoice(
        self,
        recurring_invoice_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RecurringInvoiceResponseDto:
        """Archive a recurring invoice. In the response, the ``archived`` field is set as ``true``.

        You can restore an archived recurring invoice with ``POST /v3/recurring-invoices/{recurringinvoiceId}/restore``.
        There is no change when you archive an archived recurring invoice.

        When a recurring invoice is modified, all future invoices are automatically changed.

        Args:
            recurring_invoice_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive a recurring invoice response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.archive_recurring_invoice(
                recurring_invoice_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def create_recurring_invoice(
        self,
        body: CreateRecurringInvoiceRequestDto | CreateRecurringInvoiceRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RecurringInvoiceResponseDto:
        """Create a recurring invoice.

        See Recurring invoices in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a recurring invoice response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.create_recurring_invoice(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def get_recurring_invoice(
        self,
        recurring_invoice_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RecurringInvoiceResponseDto:
        """Get details about an existing recurring invoice.

        Args:
            recurring_invoice_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get recurring invoice details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_recurring_invoice(
                recurring_invoice_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def list_recurring_invoices(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListResponseDtoRecurringInvoiceResponseDto:
        """Get a list of recurring invoice objects. By default, you get 20 results on one page of results. Set ``max``
        in your request to get up to 100 results on one page.

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
            Get list of recurring invoices response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_recurring_invoices(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    async def replace_recurring_invoice(
        self,
        recurring_invoice_id: str,
        body: RecurringInvoiceReplaceRequestDto | RecurringInvoiceReplaceRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RecurringInvoiceResponseDto:
        """Update the number of line items in a recurring invoice. You can also update other recurring invoice details.

        You can use the PUT operation to add, remove, or replace the number of line items in a recurring invoice. A set
        of rules apply with the PUT operation.
        * When you add a new line item, a new line item ``id`` is generated in the invoice.
        * When you omit an existing line item ``id``, the line item is removed from the invoice.

        When a recurring invoice is modified, all future invoices are automatically changed.

        Args:
            recurring_invoice_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Replace a recurring invoice response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.replace_recurring_invoice(
                recurring_invoice_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def restore_recurring_invoice(
        self,
        recurring_invoice_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RecurringInvoiceResponseDto:
        """Restore an archived recurring invoice. In the response, the ``archived`` field is set as ``false``.

        You can perform any valid BILL operation on restored recurring invoices. There is no change when you restore a
        restored recurring invoice.

        When a recurring invoice is modified, all future invoices are automatically changed.

        Args:
            recurring_invoice_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore a recurring invoice response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.restore_recurring_invoice(
                recurring_invoice_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def update_recurring_invoice(
        self,
        recurring_invoice_id: str,
        body: UpdateRecurringInvoiceRequestDto | UpdateRecurringInvoiceRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RecurringInvoiceResponseDto:
        """Update details about a recurring invoice line item. You can also update other recurring invoice details.

        You can use the PATCH operation to modify line item details, such as amount and description. The recurring
        invoice line item ``id`` does not change with a PATCH operation.

        When a recurring invoice is modified, all future invoices are automatically changed.

        Args:
            recurring_invoice_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a recurring invoice response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.update_recurring_invoice(
                recurring_invoice_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncRecurringInvoicesWithRawResponse:
        return self._with_raw_response


class RecurringInvoicesWithRawResponse(BaseRawResponse[RawClient, Server]):
    def archive_recurring_invoice(
        self,
        recurring_invoice_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RecurringInvoiceResponseDto, ArchiveRecurringInvoiceErrorBody]:
        """Archive a recurring invoice. In the response, the ``archived`` field is set as ``true``.

        You can restore an archived recurring invoice with ``POST /v3/recurring-invoices/{recurringinvoiceId}/restore``.
        There is no change when you archive an archived recurring invoice.

        When a recurring invoice is modified, all future invoices are automatically changed.

        Args:
            recurring_invoice_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/recurring-invoices/{recurringInvoiceId}/archive"),
            path_params=[param[str]("recurringInvoiceId", recurring_invoice_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[RecurringInvoiceResponseDto],
            error_mapper=archive_recurring_invoice_error_mapper,
            request_options=request_options,
        )

    def create_recurring_invoice(
        self,
        body: CreateRecurringInvoiceRequestDto | CreateRecurringInvoiceRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RecurringInvoiceResponseDto, CreateRecurringInvoiceErrorBody]:
        """Create a recurring invoice.

        See Recurring invoices in the Guides section for more information, sample requests, and responses.

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
            url_template=self._server.default("/v3/recurring-invoices"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[CreateRecurringInvoiceRequestDto | CreateRecurringInvoiceRequestDtoDict](body),
            decoder=json_decoder[RecurringInvoiceResponseDto],
            error_mapper=create_recurring_invoice_error_mapper,
            request_options=request_options,
        )

    def get_recurring_invoice(
        self,
        recurring_invoice_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RecurringInvoiceResponseDto, GetRecurringInvoiceErrorBody]:
        """Get details about an existing recurring invoice.

        Args:
            recurring_invoice_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/recurring-invoices/{recurringInvoiceId}"),
            path_params=[param[str]("recurringInvoiceId", recurring_invoice_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[RecurringInvoiceResponseDto],
            error_mapper=get_recurring_invoice_error_mapper,
            request_options=request_options,
        )

    def list_recurring_invoices(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoRecurringInvoiceResponseDto, ListRecurringInvoicesErrorBody]:
        """Get a list of recurring invoice objects. By default, you get 20 results on one page of results. Set ``max``
        in your request to get up to 100 results on one page.

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
            url_template=self._server.default("/v3/recurring-invoices"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[ListResponseDtoRecurringInvoiceResponseDto],
            error_mapper=list_recurring_invoices_error_mapper,
            request_options=request_options,
        )

    def replace_recurring_invoice(
        self,
        recurring_invoice_id: str,
        body: RecurringInvoiceReplaceRequestDto | RecurringInvoiceReplaceRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RecurringInvoiceResponseDto, ReplaceRecurringInvoiceErrorBody]:
        """Update the number of line items in a recurring invoice. You can also update other recurring invoice details.

        You can use the PUT operation to add, remove, or replace the number of line items in a recurring invoice. A set
        of rules apply with the PUT operation.
        * When you add a new line item, a new line item ``id`` is generated in the invoice.
        * When you omit an existing line item ``id``, the line item is removed from the invoice.

        When a recurring invoice is modified, all future invoices are automatically changed.

        Args:
            recurring_invoice_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v3/recurring-invoices/{recurringInvoiceId}"),
            path_params=[param[str]("recurringInvoiceId", recurring_invoice_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[RecurringInvoiceReplaceRequestDto | RecurringInvoiceReplaceRequestDtoDict](body),
            decoder=json_decoder[RecurringInvoiceResponseDto],
            error_mapper=replace_recurring_invoice_error_mapper,
            request_options=request_options,
        )

    def restore_recurring_invoice(
        self,
        recurring_invoice_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RecurringInvoiceResponseDto, RestoreRecurringInvoiceErrorBody]:
        """Restore an archived recurring invoice. In the response, the ``archived`` field is set as ``false``.

        You can perform any valid BILL operation on restored recurring invoices. There is no change when you restore a
        restored recurring invoice.

        When a recurring invoice is modified, all future invoices are automatically changed.

        Args:
            recurring_invoice_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/recurring-invoices/{recurringInvoiceId}/restore"),
            path_params=[param[str]("recurringInvoiceId", recurring_invoice_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[RecurringInvoiceResponseDto],
            error_mapper=restore_recurring_invoice_error_mapper,
            request_options=request_options,
        )

    def update_recurring_invoice(
        self,
        recurring_invoice_id: str,
        body: UpdateRecurringInvoiceRequestDto | UpdateRecurringInvoiceRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RecurringInvoiceResponseDto, UpdateRecurringInvoiceErrorBody]:
        """Update details about a recurring invoice line item. You can also update other recurring invoice details.

        You can use the PATCH operation to modify line item details, such as amount and description. The recurring
        invoice line item ``id`` does not change with a PATCH operation.

        When a recurring invoice is modified, all future invoices are automatically changed.

        Args:
            recurring_invoice_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/recurring-invoices/{recurringInvoiceId}"),
            path_params=[param[str]("recurringInvoiceId", recurring_invoice_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[UpdateRecurringInvoiceRequestDto | UpdateRecurringInvoiceRequestDtoDict](body),
            decoder=json_decoder[RecurringInvoiceResponseDto],
            error_mapper=update_recurring_invoice_error_mapper,
            request_options=request_options,
        )


class AsyncRecurringInvoicesWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def archive_recurring_invoice(
        self,
        recurring_invoice_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RecurringInvoiceResponseDto, ArchiveRecurringInvoiceErrorBody]:
        """Archive a recurring invoice. In the response, the ``archived`` field is set as ``true``.

        You can restore an archived recurring invoice with ``POST /v3/recurring-invoices/{recurringinvoiceId}/restore``.
        There is no change when you archive an archived recurring invoice.

        When a recurring invoice is modified, all future invoices are automatically changed.

        Args:
            recurring_invoice_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/recurring-invoices/{recurringInvoiceId}/archive"),
            path_params=[param[str]("recurringInvoiceId", recurring_invoice_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[RecurringInvoiceResponseDto],
            error_mapper=archive_recurring_invoice_error_mapper,
            request_options=request_options,
        )

    async def create_recurring_invoice(
        self,
        body: CreateRecurringInvoiceRequestDto | CreateRecurringInvoiceRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RecurringInvoiceResponseDto, CreateRecurringInvoiceErrorBody]:
        """Create a recurring invoice.

        See Recurring invoices in the Guides section for more information, sample requests, and responses.

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
            url_template=self._server.default("/v3/recurring-invoices"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[CreateRecurringInvoiceRequestDto | CreateRecurringInvoiceRequestDtoDict](body),
            decoder=async_json_decoder[RecurringInvoiceResponseDto],
            error_mapper=create_recurring_invoice_error_mapper,
            request_options=request_options,
        )

    async def get_recurring_invoice(
        self,
        recurring_invoice_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RecurringInvoiceResponseDto, GetRecurringInvoiceErrorBody]:
        """Get details about an existing recurring invoice.

        Args:
            recurring_invoice_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/recurring-invoices/{recurringInvoiceId}"),
            path_params=[param[str]("recurringInvoiceId", recurring_invoice_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[RecurringInvoiceResponseDto],
            error_mapper=get_recurring_invoice_error_mapper,
            request_options=request_options,
        )

    async def list_recurring_invoices(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoRecurringInvoiceResponseDto, ListRecurringInvoicesErrorBody]:
        """Get a list of recurring invoice objects. By default, you get 20 results on one page of results. Set ``max``
        in your request to get up to 100 results on one page.

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
            url_template=self._server.default("/v3/recurring-invoices"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[ListResponseDtoRecurringInvoiceResponseDto],
            error_mapper=list_recurring_invoices_error_mapper,
            request_options=request_options,
        )

    async def replace_recurring_invoice(
        self,
        recurring_invoice_id: str,
        body: RecurringInvoiceReplaceRequestDto | RecurringInvoiceReplaceRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RecurringInvoiceResponseDto, ReplaceRecurringInvoiceErrorBody]:
        """Update the number of line items in a recurring invoice. You can also update other recurring invoice details.

        You can use the PUT operation to add, remove, or replace the number of line items in a recurring invoice. A set
        of rules apply with the PUT operation.
        * When you add a new line item, a new line item ``id`` is generated in the invoice.
        * When you omit an existing line item ``id``, the line item is removed from the invoice.

        When a recurring invoice is modified, all future invoices are automatically changed.

        Args:
            recurring_invoice_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v3/recurring-invoices/{recurringInvoiceId}"),
            path_params=[param[str]("recurringInvoiceId", recurring_invoice_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[RecurringInvoiceReplaceRequestDto | RecurringInvoiceReplaceRequestDtoDict](body),
            decoder=async_json_decoder[RecurringInvoiceResponseDto],
            error_mapper=replace_recurring_invoice_error_mapper,
            request_options=request_options,
        )

    async def restore_recurring_invoice(
        self,
        recurring_invoice_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RecurringInvoiceResponseDto, RestoreRecurringInvoiceErrorBody]:
        """Restore an archived recurring invoice. In the response, the ``archived`` field is set as ``false``.

        You can perform any valid BILL operation on restored recurring invoices. There is no change when you restore a
        restored recurring invoice.

        When a recurring invoice is modified, all future invoices are automatically changed.

        Args:
            recurring_invoice_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/recurring-invoices/{recurringInvoiceId}/restore"),
            path_params=[param[str]("recurringInvoiceId", recurring_invoice_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[RecurringInvoiceResponseDto],
            error_mapper=restore_recurring_invoice_error_mapper,
            request_options=request_options,
        )

    async def update_recurring_invoice(
        self,
        recurring_invoice_id: str,
        body: UpdateRecurringInvoiceRequestDto | UpdateRecurringInvoiceRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RecurringInvoiceResponseDto, UpdateRecurringInvoiceErrorBody]:
        """Update details about a recurring invoice line item. You can also update other recurring invoice details.

        You can use the PATCH operation to modify line item details, such as amount and description. The recurring
        invoice line item ``id`` does not change with a PATCH operation.

        When a recurring invoice is modified, all future invoices are automatically changed.

        Args:
            recurring_invoice_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/recurring-invoices/{recurringInvoiceId}"),
            path_params=[param[str]("recurringInvoiceId", recurring_invoice_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[UpdateRecurringInvoiceRequestDto | UpdateRecurringInvoiceRequestDtoDict](body),
            decoder=async_json_decoder[RecurringInvoiceResponseDto],
            error_mapper=update_recurring_invoice_error_mapper,
            request_options=request_options,
        )
