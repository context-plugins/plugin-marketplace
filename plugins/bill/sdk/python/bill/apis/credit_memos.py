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
from ..errors.archive_credit_memo_error import ArchiveCreditMemoErrorBody, archive_credit_memo_error_mapper
from ..errors.bulk_archive_credit_memo_error import (
    BulkArchiveCreditMemoErrorBody,
    bulk_archive_credit_memo_error_mapper,
)
from ..errors.bulk_create_credit_memo_error import BulkCreateCreditMemoErrorBody, bulk_create_credit_memo_error_mapper
from ..errors.bulk_replace_credit_memo_error import (
    BulkReplaceCreditMemoErrorBody,
    bulk_replace_credit_memo_error_mapper,
)
from ..errors.bulk_restore_credit_memo_error import (
    BulkRestoreCreditMemoErrorBody,
    bulk_restore_credit_memo_error_mapper,
)
from ..errors.bulk_update_credit_memo_error import BulkUpdateCreditMemoErrorBody, bulk_update_credit_memo_error_mapper
from ..errors.create_credit_memo_error import CreateCreditMemoErrorBody, create_credit_memo_error_mapper
from ..errors.get_credit_memo_error import GetCreditMemoErrorBody, get_credit_memo_error_mapper
from ..errors.list_credit_memos_error import ListCreditMemosErrorBody, list_credit_memos_error_mapper
from ..errors.replace_credit_memo_error import ReplaceCreditMemoErrorBody, replace_credit_memo_error_mapper
from ..errors.restore_credit_memo_error import RestoreCreditMemoErrorBody, restore_credit_memo_error_mapper
from ..errors.update_credit_memo_error import UpdateCreditMemoErrorBody, update_credit_memo_error_mapper
from ..models.create_credit_memo_request_dto import CreateCreditMemoRequestDto, CreateCreditMemoRequestDtoDict
from ..models.credit_memo_bulk_response_dto import CreditMemoBulkResponseDto
from ..models.credit_memo_response_dto import CreditMemoResponseDto
from ..models.credit_memo_with_usage_response_dto import CreditMemoWithUsageResponseDto
from ..models.list_response_dto_credit_memo_with_usage_response_dto import ListResponseDtoCreditMemoWithUsageResponseDto
from ..models.replace_credit_memo_request_dto import ReplaceCreditMemoRequestDto, ReplaceCreditMemoRequestDtoDict
from ..models.replace_credit_memo_with_id_request_dto import (
    ReplaceCreditMemoWithIdRequestDto,
    ReplaceCreditMemoWithIdRequestDtoDict,
)
from ..models.update_credit_memo_request_dto import UpdateCreditMemoRequestDto, UpdateCreditMemoRequestDtoDict
from ..models.update_credit_memo_with_id_request_dto import (
    UpdateCreditMemoWithIdRequestDto,
    UpdateCreditMemoWithIdRequestDtoDict,
)
from ..server.server import Server


class CreditMemos:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = CreditMemosWithRawResponse(client, server)

    def archive_credit_memo(
        self,
        credit_memo_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreditMemoResponseDto:
        """Archive an existing credit memo. In the response, the ``archived`` field is set as ``true``.

        You can restore an archived credit memo with ``POST /v3/credit-memos/{creditMemoId}/restore``. There is no
        change when you archive an archived credit memo.

        Args:
            credit_memo_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive a credit memo response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.archive_credit_memo(
                credit_memo_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def bulk_archive_credit_memo(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreditMemoBulkResponseDto:
        """Archive multiple credit memos with one API request. In the response, the ``archived`` field for each object
        is set as ``true``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive multiple credit memos response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.bulk_archive_credit_memo(
                ids, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def bulk_create_credit_memo(
        self,
        body: list[CreateCreditMemoRequestDto | CreateCreditMemoRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreditMemoBulkResponseDto:
        """Create multiple credit memos with one API request. You can create up to 50 credit memos with one ``POST
        /v3/credit-memos/bulk`` request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create multiple credit memos response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.bulk_create_credit_memo(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def bulk_replace_credit_memo(
        self,
        body: list[ReplaceCreditMemoWithIdRequestDto | ReplaceCreditMemoWithIdRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreditMemoBulkResponseDto:
        """Update the number of line items in multiple credit memos with one API request. You can also update other
        details for each credit memo.

        You can use the PUT operation to add, remove, or replace the number of line items in a credit memo. A set of
        rules apply with the PUT operation.
        * When you add a new line item, a new line item ``id`` is generated in the credit memo.
        * When you omit an existing line item ``id``, the line item is removed from the credit memo.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Replace multiple credit memos response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.bulk_replace_credit_memo(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def bulk_restore_credit_memo(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreditMemoBulkResponseDto:
        """Restore multiple credit memos with one API request. In the response, the ``archived`` field for each object
        is set as ``false``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore multiple credit memos response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.bulk_restore_credit_memo(
                ids, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def bulk_update_credit_memo(
        self,
        body: list[UpdateCreditMemoWithIdRequestDto | UpdateCreditMemoWithIdRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreditMemoBulkResponseDto:
        """Update details about line items in multiple credit memos with one API request. You can also update other
        credit memo details.

        You can use the PATCH operation to modify line item details, such as ``amount``, ``quantity``, and
        ``description``. The credit memo line item ``id`` does not change with a PATCH operation.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update multiple credit memos response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.bulk_update_credit_memo(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def create_credit_memo(
        self,
        body: CreateCreditMemoRequestDto | CreateCreditMemoRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreditMemoResponseDto:
        """Create a new credit memo.

        With a credit memo, you can adjust the invoice amount owed by a customer.

        See Credit memos in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a credit memo response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.create_credit_memo(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def get_credit_memo(
        self,
        credit_memo_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreditMemoWithUsageResponseDto:
        """Get details about an existing credit memo.

        Args:
            credit_memo_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get credit memo details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_credit_memo(
                credit_memo_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def list_credit_memos(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListResponseDtoCreditMemoWithUsageResponseDto:
        """Get a list of credit memo objects. By default, you get 20 results on one page of results. Set ``max`` in your
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
            Get list of credit memos response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_credit_memos(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    def replace_credit_memo(
        self,
        credit_memo_id: str,
        body: ReplaceCreditMemoRequestDto | ReplaceCreditMemoRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreditMemoResponseDto:
        """Update the number of line items in a credit memo. You can also update other credit memo details.

        You can use the PUT operation to add, remove, or replace the number of line items in a credit memo. A set of
        rules apply with the PUT operation.
        * When you add a new line item, a new line item ``id`` is generated in the credit memo.
        * When you omit an existing line item ``id``, the line item is removed from the credit memo.

        Args:
            credit_memo_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Replace a credit memo response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.replace_credit_memo(
                credit_memo_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def restore_credit_memo(
        self,
        credit_memo_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreditMemoResponseDto:
        """Restore an archived credit memo. In the response, the ``archived`` field is set as ``false``.

        You can perform any valid BILL operation on restored credit memos. There is no change when you restore a
        restored credit memo.

        Args:
            credit_memo_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore a credit memo response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.restore_credit_memo(
                credit_memo_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def update_credit_memo(
        self,
        credit_memo_id: str,
        body: UpdateCreditMemoRequestDto | UpdateCreditMemoRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreditMemoResponseDto:
        """Update details about a credit memo line item. You can also update other credit memo line item details.

        You can use the PATCH operation to modify line item details, such as ``amount``, ``quantity``, and
        ``description``. The credit memo line item ``id`` does not change with a PATCH operation.

        Args:
            credit_memo_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a credit memo response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.update_credit_memo(
                credit_memo_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> CreditMemosWithRawResponse:
        return self._with_raw_response


class AsyncCreditMemos:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncCreditMemosWithRawResponse(client, server)

    async def archive_credit_memo(
        self,
        credit_memo_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreditMemoResponseDto:
        """Archive an existing credit memo. In the response, the ``archived`` field is set as ``true``.

        You can restore an archived credit memo with ``POST /v3/credit-memos/{creditMemoId}/restore``. There is no
        change when you archive an archived credit memo.

        Args:
            credit_memo_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive a credit memo response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.archive_credit_memo(
                credit_memo_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def bulk_archive_credit_memo(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreditMemoBulkResponseDto:
        """Archive multiple credit memos with one API request. In the response, the ``archived`` field for each object
        is set as ``true``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive multiple credit memos response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.bulk_archive_credit_memo(
                ids, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def bulk_create_credit_memo(
        self,
        body: list[CreateCreditMemoRequestDto | CreateCreditMemoRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreditMemoBulkResponseDto:
        """Create multiple credit memos with one API request. You can create up to 50 credit memos with one ``POST
        /v3/credit-memos/bulk`` request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create multiple credit memos response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.bulk_create_credit_memo(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def bulk_replace_credit_memo(
        self,
        body: list[ReplaceCreditMemoWithIdRequestDto | ReplaceCreditMemoWithIdRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreditMemoBulkResponseDto:
        """Update the number of line items in multiple credit memos with one API request. You can also update other
        details for each credit memo.

        You can use the PUT operation to add, remove, or replace the number of line items in a credit memo. A set of
        rules apply with the PUT operation.
        * When you add a new line item, a new line item ``id`` is generated in the credit memo.
        * When you omit an existing line item ``id``, the line item is removed from the credit memo.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Replace multiple credit memos response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.bulk_replace_credit_memo(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def bulk_restore_credit_memo(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreditMemoBulkResponseDto:
        """Restore multiple credit memos with one API request. In the response, the ``archived`` field for each object
        is set as ``false``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore multiple credit memos response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.bulk_restore_credit_memo(
                ids, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def bulk_update_credit_memo(
        self,
        body: list[UpdateCreditMemoWithIdRequestDto | UpdateCreditMemoWithIdRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreditMemoBulkResponseDto:
        """Update details about line items in multiple credit memos with one API request. You can also update other
        credit memo details.

        You can use the PATCH operation to modify line item details, such as ``amount``, ``quantity``, and
        ``description``. The credit memo line item ``id`` does not change with a PATCH operation.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update multiple credit memos response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.bulk_update_credit_memo(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def create_credit_memo(
        self,
        body: CreateCreditMemoRequestDto | CreateCreditMemoRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreditMemoResponseDto:
        """Create a new credit memo.

        With a credit memo, you can adjust the invoice amount owed by a customer.

        See Credit memos in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a credit memo response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.create_credit_memo(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def get_credit_memo(
        self,
        credit_memo_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreditMemoWithUsageResponseDto:
        """Get details about an existing credit memo.

        Args:
            credit_memo_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get credit memo details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_credit_memo(
                credit_memo_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def list_credit_memos(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListResponseDtoCreditMemoWithUsageResponseDto:
        """Get a list of credit memo objects. By default, you get 20 results on one page of results. Set ``max`` in your
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
            Get list of credit memos response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_credit_memos(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    async def replace_credit_memo(
        self,
        credit_memo_id: str,
        body: ReplaceCreditMemoRequestDto | ReplaceCreditMemoRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreditMemoResponseDto:
        """Update the number of line items in a credit memo. You can also update other credit memo details.

        You can use the PUT operation to add, remove, or replace the number of line items in a credit memo. A set of
        rules apply with the PUT operation.
        * When you add a new line item, a new line item ``id`` is generated in the credit memo.
        * When you omit an existing line item ``id``, the line item is removed from the credit memo.

        Args:
            credit_memo_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Replace a credit memo response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.replace_credit_memo(
                credit_memo_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def restore_credit_memo(
        self,
        credit_memo_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreditMemoResponseDto:
        """Restore an archived credit memo. In the response, the ``archived`` field is set as ``false``.

        You can perform any valid BILL operation on restored credit memos. There is no change when you restore a
        restored credit memo.

        Args:
            credit_memo_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore a credit memo response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.restore_credit_memo(
                credit_memo_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def update_credit_memo(
        self,
        credit_memo_id: str,
        body: UpdateCreditMemoRequestDto | UpdateCreditMemoRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreditMemoResponseDto:
        """Update details about a credit memo line item. You can also update other credit memo line item details.

        You can use the PATCH operation to modify line item details, such as ``amount``, ``quantity``, and
        ``description``. The credit memo line item ``id`` does not change with a PATCH operation.

        Args:
            credit_memo_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a credit memo response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.update_credit_memo(
                credit_memo_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncCreditMemosWithRawResponse:
        return self._with_raw_response


class CreditMemosWithRawResponse(BaseRawResponse[RawClient, Server]):
    def archive_credit_memo(
        self,
        credit_memo_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreditMemoResponseDto, ArchiveCreditMemoErrorBody]:
        """Archive an existing credit memo. In the response, the ``archived`` field is set as ``true``.

        You can restore an archived credit memo with ``POST /v3/credit-memos/{creditMemoId}/restore``. There is no
        change when you archive an archived credit memo.

        Args:
            credit_memo_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/credit-memos/{creditMemoId}/archive"),
            path_params=[param[str]("creditMemoId", credit_memo_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[CreditMemoResponseDto],
            error_mapper=archive_credit_memo_error_mapper,
            request_options=request_options,
        )

    def bulk_archive_credit_memo(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreditMemoBulkResponseDto, BulkArchiveCreditMemoErrorBody]:
        """Archive multiple credit memos with one API request. In the response, the ``archived`` field for each object
        is set as ``true``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/credit-memos/bulk/archive"),
            query_params=[param[str]("ids", ids)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[CreditMemoBulkResponseDto],
            error_mapper=bulk_archive_credit_memo_error_mapper,
            request_options=request_options,
        )

    def bulk_create_credit_memo(
        self,
        body: list[CreateCreditMemoRequestDto | CreateCreditMemoRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreditMemoBulkResponseDto, BulkCreateCreditMemoErrorBody]:
        """Create multiple credit memos with one API request. You can create up to 50 credit memos with one ``POST
        /v3/credit-memos/bulk`` request.

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
            url_template=self._server.default("/v3/credit-memos/bulk"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[list[CreateCreditMemoRequestDto | CreateCreditMemoRequestDtoDict]](body),
            decoder=json_decoder[CreditMemoBulkResponseDto],
            error_mapper=bulk_create_credit_memo_error_mapper,
            request_options=request_options,
        )

    def bulk_replace_credit_memo(
        self,
        body: list[ReplaceCreditMemoWithIdRequestDto | ReplaceCreditMemoWithIdRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreditMemoBulkResponseDto, BulkReplaceCreditMemoErrorBody]:
        """Update the number of line items in multiple credit memos with one API request. You can also update other
        details for each credit memo.

        You can use the PUT operation to add, remove, or replace the number of line items in a credit memo. A set of
        rules apply with the PUT operation.
        * When you add a new line item, a new line item ``id`` is generated in the credit memo.
        * When you omit an existing line item ``id``, the line item is removed from the credit memo.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v3/credit-memos/bulk"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[list[ReplaceCreditMemoWithIdRequestDto | ReplaceCreditMemoWithIdRequestDtoDict]](body),
            decoder=json_decoder[CreditMemoBulkResponseDto],
            error_mapper=bulk_replace_credit_memo_error_mapper,
            request_options=request_options,
        )

    def bulk_restore_credit_memo(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreditMemoBulkResponseDto, BulkRestoreCreditMemoErrorBody]:
        """Restore multiple credit memos with one API request. In the response, the ``archived`` field for each object
        is set as ``false``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/credit-memos/bulk/restore"),
            query_params=[param[str]("ids", ids)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[CreditMemoBulkResponseDto],
            error_mapper=bulk_restore_credit_memo_error_mapper,
            request_options=request_options,
        )

    def bulk_update_credit_memo(
        self,
        body: list[UpdateCreditMemoWithIdRequestDto | UpdateCreditMemoWithIdRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreditMemoBulkResponseDto, BulkUpdateCreditMemoErrorBody]:
        """Update details about line items in multiple credit memos with one API request. You can also update other
        credit memo details.

        You can use the PATCH operation to modify line item details, such as ``amount``, ``quantity``, and
        ``description``. The credit memo line item ``id`` does not change with a PATCH operation.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/credit-memos/bulk"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[list[UpdateCreditMemoWithIdRequestDto | UpdateCreditMemoWithIdRequestDtoDict]](body),
            decoder=json_decoder[CreditMemoBulkResponseDto],
            error_mapper=bulk_update_credit_memo_error_mapper,
            request_options=request_options,
        )

    def create_credit_memo(
        self,
        body: CreateCreditMemoRequestDto | CreateCreditMemoRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreditMemoResponseDto, CreateCreditMemoErrorBody]:
        """Create a new credit memo.

        With a credit memo, you can adjust the invoice amount owed by a customer.

        See Credit memos in the Guides section for more information, sample requests, and responses.

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
            url_template=self._server.default("/v3/credit-memos"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[CreateCreditMemoRequestDto | CreateCreditMemoRequestDtoDict](body),
            decoder=json_decoder[CreditMemoResponseDto],
            error_mapper=create_credit_memo_error_mapper,
            request_options=request_options,
        )

    def get_credit_memo(
        self,
        credit_memo_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreditMemoWithUsageResponseDto, GetCreditMemoErrorBody]:
        """Get details about an existing credit memo.

        Args:
            credit_memo_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/credit-memos/{creditMemoId}"),
            path_params=[param[str]("creditMemoId", credit_memo_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[CreditMemoWithUsageResponseDto],
            error_mapper=get_credit_memo_error_mapper,
            request_options=request_options,
        )

    def list_credit_memos(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoCreditMemoWithUsageResponseDto, ListCreditMemosErrorBody]:
        """Get a list of credit memo objects. By default, you get 20 results on one page of results. Set ``max`` in your
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
            url_template=self._server.default("/v3/credit-memos"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[ListResponseDtoCreditMemoWithUsageResponseDto],
            error_mapper=list_credit_memos_error_mapper,
            request_options=request_options,
        )

    def replace_credit_memo(
        self,
        credit_memo_id: str,
        body: ReplaceCreditMemoRequestDto | ReplaceCreditMemoRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreditMemoResponseDto, ReplaceCreditMemoErrorBody]:
        """Update the number of line items in a credit memo. You can also update other credit memo details.

        You can use the PUT operation to add, remove, or replace the number of line items in a credit memo. A set of
        rules apply with the PUT operation.
        * When you add a new line item, a new line item ``id`` is generated in the credit memo.
        * When you omit an existing line item ``id``, the line item is removed from the credit memo.

        Args:
            credit_memo_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v3/credit-memos/{creditMemoId}"),
            path_params=[param[str]("creditMemoId", credit_memo_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[ReplaceCreditMemoRequestDto | ReplaceCreditMemoRequestDtoDict](body),
            decoder=json_decoder[CreditMemoResponseDto],
            error_mapper=replace_credit_memo_error_mapper,
            request_options=request_options,
        )

    def restore_credit_memo(
        self,
        credit_memo_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreditMemoResponseDto, RestoreCreditMemoErrorBody]:
        """Restore an archived credit memo. In the response, the ``archived`` field is set as ``false``.

        You can perform any valid BILL operation on restored credit memos. There is no change when you restore a
        restored credit memo.

        Args:
            credit_memo_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/credit-memos/{creditMemoId}/restore"),
            path_params=[param[str]("creditMemoId", credit_memo_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[CreditMemoResponseDto],
            error_mapper=restore_credit_memo_error_mapper,
            request_options=request_options,
        )

    def update_credit_memo(
        self,
        credit_memo_id: str,
        body: UpdateCreditMemoRequestDto | UpdateCreditMemoRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreditMemoResponseDto, UpdateCreditMemoErrorBody]:
        """Update details about a credit memo line item. You can also update other credit memo line item details.

        You can use the PATCH operation to modify line item details, such as ``amount``, ``quantity``, and
        ``description``. The credit memo line item ``id`` does not change with a PATCH operation.

        Args:
            credit_memo_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/credit-memos/{creditMemoId}"),
            path_params=[param[str]("creditMemoId", credit_memo_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[UpdateCreditMemoRequestDto | UpdateCreditMemoRequestDtoDict](body),
            decoder=json_decoder[CreditMemoResponseDto],
            error_mapper=update_credit_memo_error_mapper,
            request_options=request_options,
        )


class AsyncCreditMemosWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def archive_credit_memo(
        self,
        credit_memo_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreditMemoResponseDto, ArchiveCreditMemoErrorBody]:
        """Archive an existing credit memo. In the response, the ``archived`` field is set as ``true``.

        You can restore an archived credit memo with ``POST /v3/credit-memos/{creditMemoId}/restore``. There is no
        change when you archive an archived credit memo.

        Args:
            credit_memo_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/credit-memos/{creditMemoId}/archive"),
            path_params=[param[str]("creditMemoId", credit_memo_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[CreditMemoResponseDto],
            error_mapper=archive_credit_memo_error_mapper,
            request_options=request_options,
        )

    async def bulk_archive_credit_memo(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreditMemoBulkResponseDto, BulkArchiveCreditMemoErrorBody]:
        """Archive multiple credit memos with one API request. In the response, the ``archived`` field for each object
        is set as ``true``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/credit-memos/bulk/archive"),
            query_params=[param[str]("ids", ids)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[CreditMemoBulkResponseDto],
            error_mapper=bulk_archive_credit_memo_error_mapper,
            request_options=request_options,
        )

    async def bulk_create_credit_memo(
        self,
        body: list[CreateCreditMemoRequestDto | CreateCreditMemoRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreditMemoBulkResponseDto, BulkCreateCreditMemoErrorBody]:
        """Create multiple credit memos with one API request. You can create up to 50 credit memos with one ``POST
        /v3/credit-memos/bulk`` request.

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
            url_template=self._server.default("/v3/credit-memos/bulk"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[list[CreateCreditMemoRequestDto | CreateCreditMemoRequestDtoDict]](body),
            decoder=async_json_decoder[CreditMemoBulkResponseDto],
            error_mapper=bulk_create_credit_memo_error_mapper,
            request_options=request_options,
        )

    async def bulk_replace_credit_memo(
        self,
        body: list[ReplaceCreditMemoWithIdRequestDto | ReplaceCreditMemoWithIdRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreditMemoBulkResponseDto, BulkReplaceCreditMemoErrorBody]:
        """Update the number of line items in multiple credit memos with one API request. You can also update other
        details for each credit memo.

        You can use the PUT operation to add, remove, or replace the number of line items in a credit memo. A set of
        rules apply with the PUT operation.
        * When you add a new line item, a new line item ``id`` is generated in the credit memo.
        * When you omit an existing line item ``id``, the line item is removed from the credit memo.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v3/credit-memos/bulk"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[list[ReplaceCreditMemoWithIdRequestDto | ReplaceCreditMemoWithIdRequestDtoDict]](body),
            decoder=async_json_decoder[CreditMemoBulkResponseDto],
            error_mapper=bulk_replace_credit_memo_error_mapper,
            request_options=request_options,
        )

    async def bulk_restore_credit_memo(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreditMemoBulkResponseDto, BulkRestoreCreditMemoErrorBody]:
        """Restore multiple credit memos with one API request. In the response, the ``archived`` field for each object
        is set as ``false``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/credit-memos/bulk/restore"),
            query_params=[param[str]("ids", ids)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[CreditMemoBulkResponseDto],
            error_mapper=bulk_restore_credit_memo_error_mapper,
            request_options=request_options,
        )

    async def bulk_update_credit_memo(
        self,
        body: list[UpdateCreditMemoWithIdRequestDto | UpdateCreditMemoWithIdRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreditMemoBulkResponseDto, BulkUpdateCreditMemoErrorBody]:
        """Update details about line items in multiple credit memos with one API request. You can also update other
        credit memo details.

        You can use the PATCH operation to modify line item details, such as ``amount``, ``quantity``, and
        ``description``. The credit memo line item ``id`` does not change with a PATCH operation.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/credit-memos/bulk"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[list[UpdateCreditMemoWithIdRequestDto | UpdateCreditMemoWithIdRequestDtoDict]](body),
            decoder=async_json_decoder[CreditMemoBulkResponseDto],
            error_mapper=bulk_update_credit_memo_error_mapper,
            request_options=request_options,
        )

    async def create_credit_memo(
        self,
        body: CreateCreditMemoRequestDto | CreateCreditMemoRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreditMemoResponseDto, CreateCreditMemoErrorBody]:
        """Create a new credit memo.

        With a credit memo, you can adjust the invoice amount owed by a customer.

        See Credit memos in the Guides section for more information, sample requests, and responses.

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
            url_template=self._server.default("/v3/credit-memos"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[CreateCreditMemoRequestDto | CreateCreditMemoRequestDtoDict](body),
            decoder=async_json_decoder[CreditMemoResponseDto],
            error_mapper=create_credit_memo_error_mapper,
            request_options=request_options,
        )

    async def get_credit_memo(
        self,
        credit_memo_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreditMemoWithUsageResponseDto, GetCreditMemoErrorBody]:
        """Get details about an existing credit memo.

        Args:
            credit_memo_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/credit-memos/{creditMemoId}"),
            path_params=[param[str]("creditMemoId", credit_memo_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[CreditMemoWithUsageResponseDto],
            error_mapper=get_credit_memo_error_mapper,
            request_options=request_options,
        )

    async def list_credit_memos(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoCreditMemoWithUsageResponseDto, ListCreditMemosErrorBody]:
        """Get a list of credit memo objects. By default, you get 20 results on one page of results. Set ``max`` in your
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
            url_template=self._server.default("/v3/credit-memos"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[ListResponseDtoCreditMemoWithUsageResponseDto],
            error_mapper=list_credit_memos_error_mapper,
            request_options=request_options,
        )

    async def replace_credit_memo(
        self,
        credit_memo_id: str,
        body: ReplaceCreditMemoRequestDto | ReplaceCreditMemoRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreditMemoResponseDto, ReplaceCreditMemoErrorBody]:
        """Update the number of line items in a credit memo. You can also update other credit memo details.

        You can use the PUT operation to add, remove, or replace the number of line items in a credit memo. A set of
        rules apply with the PUT operation.
        * When you add a new line item, a new line item ``id`` is generated in the credit memo.
        * When you omit an existing line item ``id``, the line item is removed from the credit memo.

        Args:
            credit_memo_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v3/credit-memos/{creditMemoId}"),
            path_params=[param[str]("creditMemoId", credit_memo_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[ReplaceCreditMemoRequestDto | ReplaceCreditMemoRequestDtoDict](body),
            decoder=async_json_decoder[CreditMemoResponseDto],
            error_mapper=replace_credit_memo_error_mapper,
            request_options=request_options,
        )

    async def restore_credit_memo(
        self,
        credit_memo_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreditMemoResponseDto, RestoreCreditMemoErrorBody]:
        """Restore an archived credit memo. In the response, the ``archived`` field is set as ``false``.

        You can perform any valid BILL operation on restored credit memos. There is no change when you restore a
        restored credit memo.

        Args:
            credit_memo_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/credit-memos/{creditMemoId}/restore"),
            path_params=[param[str]("creditMemoId", credit_memo_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[CreditMemoResponseDto],
            error_mapper=restore_credit_memo_error_mapper,
            request_options=request_options,
        )

    async def update_credit_memo(
        self,
        credit_memo_id: str,
        body: UpdateCreditMemoRequestDto | UpdateCreditMemoRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreditMemoResponseDto, UpdateCreditMemoErrorBody]:
        """Update details about a credit memo line item. You can also update other credit memo line item details.

        You can use the PATCH operation to modify line item details, such as ``amount``, ``quantity``, and
        ``description``. The credit memo line item ``id`` does not change with a PATCH operation.

        Args:
            credit_memo_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/credit-memos/{creditMemoId}"),
            path_params=[param[str]("creditMemoId", credit_memo_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[UpdateCreditMemoRequestDto | UpdateCreditMemoRequestDtoDict](body),
            decoder=async_json_decoder[CreditMemoResponseDto],
            error_mapper=update_credit_memo_error_mapper,
            request_options=request_options,
        )
