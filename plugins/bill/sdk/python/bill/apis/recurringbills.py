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
from ..errors.archive_recurring_bill_error import ArchiveRecurringBillErrorBody, archive_recurring_bill_error_mapper
from ..errors.create_recurring_bill_error import CreateRecurringBillErrorBody, create_recurring_bill_error_mapper
from ..errors.get_recurring_bill_error import GetRecurringBillErrorBody, get_recurring_bill_error_mapper
from ..errors.list_recurring_bills_error import ListRecurringBillsErrorBody, list_recurring_bills_error_mapper
from ..errors.replace_recurring_bill_error import ReplaceRecurringBillErrorBody, replace_recurring_bill_error_mapper
from ..errors.restore_recurring_bill_error import RestoreRecurringBillErrorBody, restore_recurring_bill_error_mapper
from ..errors.update_recurring_bill_error import UpdateRecurringBillErrorBody, update_recurring_bill_error_mapper
from ..models.list_recurring_bill_response_dto import ListRecurringBillResponseDto
from ..models.recurring_bill_create_request_dto import RecurringBillCreateRequestDto, RecurringBillCreateRequestDtoDict
from ..models.recurring_bill_read_response_dto import RecurringBillReadResponseDto
from ..models.recurring_bill_replace_request_dto import (
    RecurringBillReplaceRequestDto,
    RecurringBillReplaceRequestDtoDict,
)
from ..models.recurring_bill_response_dto import RecurringBillResponseDto
from ..models.recurring_bill_update_request_dto import RecurringBillUpdateRequestDto, RecurringBillUpdateRequestDtoDict
from ..server.server import Server


class Recurringbills:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = RecurringbillsWithRawResponse(client, server)

    def archive_recurring_bill(
        self,
        recurring_bill_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RecurringBillResponseDto:
        """Archive a recurring bill. In the response, the ``archived`` field is set as ``true``.

        You can restore an archived recurring bill with ``POST /v3/recurringbills/{recurringbillId}/restore``. There is
        no change when you archive an archived recurring bill.

        When a recurring bill is modified, all future bills are automatically changed.

        Args:
            recurring_bill_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive a recurring bill response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.archive_recurring_bill(
                recurring_bill_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def create_recurring_bill(
        self,
        body: RecurringBillCreateRequestDto | RecurringBillCreateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RecurringBillResponseDto:
        """Create a recurring bill.

        See Recurring bills in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a recurring bill response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.create_recurring_bill(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def get_recurring_bill(
        self,
        recurring_bill_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RecurringBillReadResponseDto:
        """Get details about an existing recurring bill.

        Args:
            recurring_bill_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get recurring bill details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_recurring_bill(
                recurring_bill_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def list_recurring_bills(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListRecurringBillResponseDto:
        """Get a list of recurring bill objects. By default, you get 20 results on one page of results. Set ``max`` in
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
            Get list of recurring bills response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_recurring_bills(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    def replace_recurring_bill(
        self,
        recurring_bill_id: str,
        body: RecurringBillReplaceRequestDto | RecurringBillReplaceRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RecurringBillResponseDto:
        """Update the number of line items in a recurring bill. You can also update other recurring bill details.

        You can use the PUT operation to add, remove, or replace the number of line items in a recurring bill. A set of
        rules apply with the PUT operation.
        * When you add a new line item, a new line item ``id`` is generated in the bill.
        * When you omit an existing line item ``id``, the line item is removed from the bill.

        When a recurring bill is modified, all future bills are automatically changed.

        Args:
            recurring_bill_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Replace a recurring bill response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.replace_recurring_bill(
                recurring_bill_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def restore_recurring_bill(
        self,
        recurring_bill_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RecurringBillResponseDto:
        """Restore an archived recurring bill. In the response, the ``archived`` field is set as ``false``.

        You can perform any valid BILL operation on restored recurring bills. There is no change when you restore a
        restored recurring bill.

        When a recurring bill is modified, all future bills are automatically changed.

        Args:
            recurring_bill_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore an archived recurring bill response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.restore_recurring_bill(
                recurring_bill_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def update_recurring_bill(
        self,
        recurring_bill_id: str,
        body: RecurringBillUpdateRequestDto | RecurringBillUpdateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RecurringBillResponseDto:
        """Update details about a recurring bill line item. You can also update other recurring bill details.

        You can use the PATCH operation to modify line item details, such as amount and description. The recurring bill
        line item ``id`` does not change with a PATCH operation.

        When a recurring bill is modified, all future bills are automatically changed.

        Args:
            recurring_bill_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a recurring bill response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.update_recurring_bill(
                recurring_bill_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> RecurringbillsWithRawResponse:
        return self._with_raw_response


class AsyncRecurringbills:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncRecurringbillsWithRawResponse(client, server)

    async def archive_recurring_bill(
        self,
        recurring_bill_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RecurringBillResponseDto:
        """Archive a recurring bill. In the response, the ``archived`` field is set as ``true``.

        You can restore an archived recurring bill with ``POST /v3/recurringbills/{recurringbillId}/restore``. There is
        no change when you archive an archived recurring bill.

        When a recurring bill is modified, all future bills are automatically changed.

        Args:
            recurring_bill_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive a recurring bill response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.archive_recurring_bill(
                recurring_bill_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def create_recurring_bill(
        self,
        body: RecurringBillCreateRequestDto | RecurringBillCreateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RecurringBillResponseDto:
        """Create a recurring bill.

        See Recurring bills in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a recurring bill response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.create_recurring_bill(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def get_recurring_bill(
        self,
        recurring_bill_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RecurringBillReadResponseDto:
        """Get details about an existing recurring bill.

        Args:
            recurring_bill_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get recurring bill details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_recurring_bill(
                recurring_bill_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def list_recurring_bills(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListRecurringBillResponseDto:
        """Get a list of recurring bill objects. By default, you get 20 results on one page of results. Set ``max`` in
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
            Get list of recurring bills response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_recurring_bills(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    async def replace_recurring_bill(
        self,
        recurring_bill_id: str,
        body: RecurringBillReplaceRequestDto | RecurringBillReplaceRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RecurringBillResponseDto:
        """Update the number of line items in a recurring bill. You can also update other recurring bill details.

        You can use the PUT operation to add, remove, or replace the number of line items in a recurring bill. A set of
        rules apply with the PUT operation.
        * When you add a new line item, a new line item ``id`` is generated in the bill.
        * When you omit an existing line item ``id``, the line item is removed from the bill.

        When a recurring bill is modified, all future bills are automatically changed.

        Args:
            recurring_bill_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Replace a recurring bill response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.replace_recurring_bill(
                recurring_bill_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def restore_recurring_bill(
        self,
        recurring_bill_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RecurringBillResponseDto:
        """Restore an archived recurring bill. In the response, the ``archived`` field is set as ``false``.

        You can perform any valid BILL operation on restored recurring bills. There is no change when you restore a
        restored recurring bill.

        When a recurring bill is modified, all future bills are automatically changed.

        Args:
            recurring_bill_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore an archived recurring bill response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.restore_recurring_bill(
                recurring_bill_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def update_recurring_bill(
        self,
        recurring_bill_id: str,
        body: RecurringBillUpdateRequestDto | RecurringBillUpdateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RecurringBillResponseDto:
        """Update details about a recurring bill line item. You can also update other recurring bill details.

        You can use the PATCH operation to modify line item details, such as amount and description. The recurring bill
        line item ``id`` does not change with a PATCH operation.

        When a recurring bill is modified, all future bills are automatically changed.

        Args:
            recurring_bill_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a recurring bill response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.update_recurring_bill(
                recurring_bill_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncRecurringbillsWithRawResponse:
        return self._with_raw_response


class RecurringbillsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def archive_recurring_bill(
        self,
        recurring_bill_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RecurringBillResponseDto, ArchiveRecurringBillErrorBody]:
        """Archive a recurring bill. In the response, the ``archived`` field is set as ``true``.

        You can restore an archived recurring bill with ``POST /v3/recurringbills/{recurringbillId}/restore``. There is
        no change when you archive an archived recurring bill.

        When a recurring bill is modified, all future bills are automatically changed.

        Args:
            recurring_bill_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/recurringbills/{recurringBillId}/archive"),
            path_params=[param[str]("recurringBillId", recurring_bill_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[RecurringBillResponseDto],
            error_mapper=archive_recurring_bill_error_mapper,
            request_options=request_options,
        )

    def create_recurring_bill(
        self,
        body: RecurringBillCreateRequestDto | RecurringBillCreateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RecurringBillResponseDto, CreateRecurringBillErrorBody]:
        """Create a recurring bill.

        See Recurring bills in the Guides section for more information, sample requests, and responses.

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
            url_template=self._server.default("/v3/recurringbills"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[RecurringBillCreateRequestDto | RecurringBillCreateRequestDtoDict](body),
            decoder=json_decoder[RecurringBillResponseDto],
            error_mapper=create_recurring_bill_error_mapper,
            request_options=request_options,
        )

    def get_recurring_bill(
        self,
        recurring_bill_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RecurringBillReadResponseDto, GetRecurringBillErrorBody]:
        """Get details about an existing recurring bill.

        Args:
            recurring_bill_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/recurringbills/{recurringBillId}"),
            path_params=[param[str]("recurringBillId", recurring_bill_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[RecurringBillReadResponseDto],
            error_mapper=get_recurring_bill_error_mapper,
            request_options=request_options,
        )

    def list_recurring_bills(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListRecurringBillResponseDto, ListRecurringBillsErrorBody]:
        """Get a list of recurring bill objects. By default, you get 20 results on one page of results. Set ``max`` in
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
            url_template=self._server.default("/v3/recurringbills"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[ListRecurringBillResponseDto],
            error_mapper=list_recurring_bills_error_mapper,
            request_options=request_options,
        )

    def replace_recurring_bill(
        self,
        recurring_bill_id: str,
        body: RecurringBillReplaceRequestDto | RecurringBillReplaceRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RecurringBillResponseDto, ReplaceRecurringBillErrorBody]:
        """Update the number of line items in a recurring bill. You can also update other recurring bill details.

        You can use the PUT operation to add, remove, or replace the number of line items in a recurring bill. A set of
        rules apply with the PUT operation.
        * When you add a new line item, a new line item ``id`` is generated in the bill.
        * When you omit an existing line item ``id``, the line item is removed from the bill.

        When a recurring bill is modified, all future bills are automatically changed.

        Args:
            recurring_bill_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v3/recurringbills/{recurringBillId}"),
            path_params=[param[str]("recurringBillId", recurring_bill_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[RecurringBillReplaceRequestDto | RecurringBillReplaceRequestDtoDict](body),
            decoder=json_decoder[RecurringBillResponseDto],
            error_mapper=replace_recurring_bill_error_mapper,
            request_options=request_options,
        )

    def restore_recurring_bill(
        self,
        recurring_bill_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RecurringBillResponseDto, RestoreRecurringBillErrorBody]:
        """Restore an archived recurring bill. In the response, the ``archived`` field is set as ``false``.

        You can perform any valid BILL operation on restored recurring bills. There is no change when you restore a
        restored recurring bill.

        When a recurring bill is modified, all future bills are automatically changed.

        Args:
            recurring_bill_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/recurringbills/{recurringBillId}/restore"),
            path_params=[param[str]("recurringBillId", recurring_bill_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[RecurringBillResponseDto],
            error_mapper=restore_recurring_bill_error_mapper,
            request_options=request_options,
        )

    def update_recurring_bill(
        self,
        recurring_bill_id: str,
        body: RecurringBillUpdateRequestDto | RecurringBillUpdateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RecurringBillResponseDto, UpdateRecurringBillErrorBody]:
        """Update details about a recurring bill line item. You can also update other recurring bill details.

        You can use the PATCH operation to modify line item details, such as amount and description. The recurring bill
        line item ``id`` does not change with a PATCH operation.

        When a recurring bill is modified, all future bills are automatically changed.

        Args:
            recurring_bill_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/recurringbills/{recurringBillId}"),
            path_params=[param[str]("recurringBillId", recurring_bill_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[RecurringBillUpdateRequestDto | RecurringBillUpdateRequestDtoDict](body),
            decoder=json_decoder[RecurringBillResponseDto],
            error_mapper=update_recurring_bill_error_mapper,
            request_options=request_options,
        )


class AsyncRecurringbillsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def archive_recurring_bill(
        self,
        recurring_bill_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RecurringBillResponseDto, ArchiveRecurringBillErrorBody]:
        """Archive a recurring bill. In the response, the ``archived`` field is set as ``true``.

        You can restore an archived recurring bill with ``POST /v3/recurringbills/{recurringbillId}/restore``. There is
        no change when you archive an archived recurring bill.

        When a recurring bill is modified, all future bills are automatically changed.

        Args:
            recurring_bill_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/recurringbills/{recurringBillId}/archive"),
            path_params=[param[str]("recurringBillId", recurring_bill_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[RecurringBillResponseDto],
            error_mapper=archive_recurring_bill_error_mapper,
            request_options=request_options,
        )

    async def create_recurring_bill(
        self,
        body: RecurringBillCreateRequestDto | RecurringBillCreateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RecurringBillResponseDto, CreateRecurringBillErrorBody]:
        """Create a recurring bill.

        See Recurring bills in the Guides section for more information, sample requests, and responses.

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
            url_template=self._server.default("/v3/recurringbills"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[RecurringBillCreateRequestDto | RecurringBillCreateRequestDtoDict](body),
            decoder=async_json_decoder[RecurringBillResponseDto],
            error_mapper=create_recurring_bill_error_mapper,
            request_options=request_options,
        )

    async def get_recurring_bill(
        self,
        recurring_bill_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RecurringBillReadResponseDto, GetRecurringBillErrorBody]:
        """Get details about an existing recurring bill.

        Args:
            recurring_bill_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/recurringbills/{recurringBillId}"),
            path_params=[param[str]("recurringBillId", recurring_bill_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[RecurringBillReadResponseDto],
            error_mapper=get_recurring_bill_error_mapper,
            request_options=request_options,
        )

    async def list_recurring_bills(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListRecurringBillResponseDto, ListRecurringBillsErrorBody]:
        """Get a list of recurring bill objects. By default, you get 20 results on one page of results. Set ``max`` in
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
            url_template=self._server.default("/v3/recurringbills"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[ListRecurringBillResponseDto],
            error_mapper=list_recurring_bills_error_mapper,
            request_options=request_options,
        )

    async def replace_recurring_bill(
        self,
        recurring_bill_id: str,
        body: RecurringBillReplaceRequestDto | RecurringBillReplaceRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RecurringBillResponseDto, ReplaceRecurringBillErrorBody]:
        """Update the number of line items in a recurring bill. You can also update other recurring bill details.

        You can use the PUT operation to add, remove, or replace the number of line items in a recurring bill. A set of
        rules apply with the PUT operation.
        * When you add a new line item, a new line item ``id`` is generated in the bill.
        * When you omit an existing line item ``id``, the line item is removed from the bill.

        When a recurring bill is modified, all future bills are automatically changed.

        Args:
            recurring_bill_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v3/recurringbills/{recurringBillId}"),
            path_params=[param[str]("recurringBillId", recurring_bill_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[RecurringBillReplaceRequestDto | RecurringBillReplaceRequestDtoDict](body),
            decoder=async_json_decoder[RecurringBillResponseDto],
            error_mapper=replace_recurring_bill_error_mapper,
            request_options=request_options,
        )

    async def restore_recurring_bill(
        self,
        recurring_bill_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RecurringBillResponseDto, RestoreRecurringBillErrorBody]:
        """Restore an archived recurring bill. In the response, the ``archived`` field is set as ``false``.

        You can perform any valid BILL operation on restored recurring bills. There is no change when you restore a
        restored recurring bill.

        When a recurring bill is modified, all future bills are automatically changed.

        Args:
            recurring_bill_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/recurringbills/{recurringBillId}/restore"),
            path_params=[param[str]("recurringBillId", recurring_bill_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[RecurringBillResponseDto],
            error_mapper=restore_recurring_bill_error_mapper,
            request_options=request_options,
        )

    async def update_recurring_bill(
        self,
        recurring_bill_id: str,
        body: RecurringBillUpdateRequestDto | RecurringBillUpdateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RecurringBillResponseDto, UpdateRecurringBillErrorBody]:
        """Update details about a recurring bill line item. You can also update other recurring bill details.

        You can use the PATCH operation to modify line item details, such as amount and description. The recurring bill
        line item ``id`` does not change with a PATCH operation.

        When a recurring bill is modified, all future bills are automatically changed.

        Args:
            recurring_bill_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/recurringbills/{recurringBillId}"),
            path_params=[param[str]("recurringBillId", recurring_bill_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[RecurringBillUpdateRequestDto | RecurringBillUpdateRequestDtoDict](body),
            decoder=async_json_decoder[RecurringBillResponseDto],
            error_mapper=update_recurring_bill_error_mapper,
            request_options=request_options,
        )
