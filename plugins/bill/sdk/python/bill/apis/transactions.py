from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.add_transaction_receipt_error import AddTransactionReceiptErrorBody, add_transaction_receipt_error_mapper
from ..errors.create_receipt_upload_url_error import (
    CreateReceiptUploadUrlErrorBody,
    create_receipt_upload_url_error_mapper,
)
from ..errors.delete_transaction_receipt_error import (
    DeleteTransactionReceiptErrorBody,
    delete_transaction_receipt_error_mapper,
)
from ..errors.get_transaction_error import GetTransactionErrorBody, get_transaction_error_mapper
from ..errors.list_transaction_custom_field_values_error import (
    ListTransactionCustomFieldValuesErrorBody,
    list_transaction_custom_field_values_error_mapper,
)
from ..errors.list_transaction_custom_fields_error import (
    ListTransactionCustomFieldsErrorBody,
    list_transaction_custom_fields_error_mapper,
)
from ..errors.list_transactions_error import ListTransactionsErrorBody, list_transactions_error_mapper
from ..errors.three_ds_challenge_error import ThreeDsChallengeErrorBody, three_ds_challenge_error_mapper
from ..errors.update_transaction_custom_fields_error import (
    UpdateTransactionCustomFieldsErrorBody,
    update_transaction_custom_fields_error_mapper,
)
from ..errors.update_transaction_error import UpdateTransactionErrorBody, update_transaction_error_mapper
from ..models.bulk_update_tx_custom_field_request_dto import (
    BulkUpdateTxCustomFieldRequestDto,
    BulkUpdateTxCustomFieldRequestDtoDict,
)
from ..models.list_transaction_custom_field_response_dto import ListTransactionCustomFieldResponseDto
from ..models.pagination_response_dto_custom_field_value_dto import PaginationResponseDtoCustomFieldValueDto
from ..models.pagination_response_dto_transaction_response_dto import PaginationResponseDtoTransactionResponseDto
from ..models.receipt_image import ReceiptImage
from ..models.reimbursement_image_upload_url_response_dto import ReimbursementImageUploadUrlResponseDto
from ..models.spend_status_dto import SpendStatusDto
from ..models.three_ds_request_dto import ThreeDsRequestDto, ThreeDsRequestDtoDict
from ..models.three_ds_response_dto import ThreeDsResponseDto
from ..models.transaction_receipt_request_dto import TransactionReceiptRequestDto, TransactionReceiptRequestDtoDict
from ..models.transaction_response_dto import TransactionResponseDto
from ..models.update_tx_request_dto import UpdateTxRequestDto, UpdateTxRequestDtoDict
from ..server.server import Server


class Transactions:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = TransactionsWithRawResponse(client, server)

    def add_transaction_receipt(
        self,
        transaction_id: str,
        body: TransactionReceiptRequestDto | TransactionReceiptRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[ReceiptImage]:
        """Add a receipt to an existing transaction.

        In the request, use the same upload ``url`` that you used to upload the receipt image. See Create a transaction
        upload URL to learn about creating a transaction image upload URL.

        Args:
            transaction_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Add a transaction receipt response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.add_transaction_receipt(
                transaction_id, body, api_token=api_token, request_options=request_options
            ),
        )

    def create_receipt_upload_url(
        self, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ReimbursementImageUploadUrlResponseDto:
        """Create a transaction image upload URL.

        From the response, use the upload ``url`` to upload a receipt image for the transaction. For example, to upload
        a JPEG image, use the following ``curl`` command. To upload a PNG image, set the content type as ``image/png``.

        ```
        curl '{upload_url}' -H 'Content-Type: image/jpeg' --upload-file {file_name_with_extension}
        ```

        **Note**: BILL supports JPG and PNG file formats for transaction images.

        See Transactions in the Guides section for more information, sample requests, and responses.

        Args:
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a transaction upload URL response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.create_receipt_upload_url(api_token=api_token, request_options=request_options)
        )

    def delete_transaction_receipt(
        self,
        transaction_id: str,
        receipt_id: str,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Delete a receipt from an existing transaction. A deleted receipt cannot be restored. The deleted receipt is
        not available in the transaction details.

        Args:
            transaction_id: Value sent with the request.
            receipt_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Delete a transaction receipt response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.delete_transaction_receipt(
                transaction_id, receipt_id, api_token=api_token, request_options=request_options
            ),
        )

    def get_transaction(
        self,
        transaction_id: str,
        *,
        show_custom_field_ids: str | None = None,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TransactionResponseDto:
        """Get details about an existing transaction.

        In the response, you get information about transactions, reversals, and refunds.
        * **Transaction**: For a standard transaction, the ``transactionType`` is set as ``AUTHORIZATION`` or
            ``DECLINE``. The status is updated to ``CLEAR`` once BILL moves the money from the funding account. The
            ``CLEAR`` transactions receive a new ID and reference to the original ``AUTHORIZATION`` transaction via the
            ``originalAuthTransactionUuid`` field.
        * **Reversal**: For a reversal (a cancellation before funds are settled), the ``transactionType`` remains
            ``AUTHORIZATION``, but the ``amount`` is typically a negative value.
        * **Refund**: For a refund (a cancellation after funds are settled), the ``transactionType`` is set to ``CLEAR``
            and the ``amount`` is a negative value.

        Args:
            transaction_id: Value sent with the request.
            show_custom_field_ids: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get transaction details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_transaction(
                transaction_id,
                show_custom_field_ids=show_custom_field_ids,
                api_token=api_token,
                request_options=request_options,
            ),
        )

    def list_transaction_custom_field_values(
        self,
        transaction_id: str,
        custom_field_id: str,
        *,
        max_: int | None = None,
        next_page: str | None = None,
        prev_page: str | None = None,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginationResponseDtoCustomFieldValueDto:
        """Get a list of custom field value objects applied to an existing transaction. By default, you get 20 results
        on one page of results. Set ``max`` in your request to get up to 100 results on one page.

        Args:
            transaction_id: Value sent with the request.
            custom_field_id: Value sent with the request.
            max_: Value sent with the request.
            next_page: Value sent with the request.
            prev_page: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of transaction custom field value response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_transaction_custom_field_values(
                transaction_id,
                custom_field_id,
                max_=max_,
                next_page=next_page,
                prev_page=prev_page,
                api_token=api_token,
                request_options=request_options,
            ),
        )

    def list_transaction_custom_fields(
        self,
        transaction_id: str,
        *,
        filters: str | None = None,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListTransactionCustomFieldResponseDto:
        """Get a list of custom field objects applied to an existing transaction.

        Args:
            transaction_id: Value sent with the request.
            filters: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of transaction custom fields response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_transaction_custom_fields(
                transaction_id, filters=filters, api_token=api_token, request_options=request_options
            ),
        )

    def list_transactions(
        self,
        *,
        max_: int | None = None,
        next_page: str | None = None,
        prev_page: str | None = None,
        sort: str | None = None,
        filters: str | None = None,
        show_custom_field_ids: str | None = None,
        include_receipts: bool | None = None,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginationResponseDtoTransactionResponseDto:
        """Get a list of transaction objects. By default, you get 20 results on one page of results. Set ``max`` in your
        request to get up to 50 results on one page.

        In the response, you get information about transactions, reversals, and refunds.
        * **Transaction**: For a standard transaction, the ``transactionType`` is set as ``AUTHORIZATION`` or
            ``DECLINE``. The status is updated to ``CLEAR`` once BILL moves the money from the funding account. The
            ``CLEAR`` transactions receive a new ID and reference to the original ``AUTHORIZATION`` transaction via the
            ``originalAuthTransactionUuid`` field.
        * **Reversal**: For a reversal (a cancellation before funds are settled), the ``transactionType`` remains
            ``AUTHORIZATION``, but the ``amount`` is typically a negative value.
        * **Refund**: For a refund (a cancellation after funds are settled), the ``transactionType`` is set to ``CLEAR``
            and the ``amount`` is a negative value.

        **Note**: Only parent transactions are available in the response.

        Args:
            max_: Value sent with the request.
            next_page: Value sent with the request.
            prev_page: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            show_custom_field_ids: Value sent with the request.
            include_receipts: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of transactions response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_transactions(
                max_=max_,
                next_page=next_page,
                prev_page=prev_page,
                sort=sort,
                filters=filters,
                show_custom_field_ids=show_custom_field_ids,
                include_receipts=include_receipts,
                api_token=api_token,
                request_options=request_options,
            ),
        )

    def three_ds_challenge(
        self,
        acs_transaction_id: str,
        body: ThreeDsRequestDto | ThreeDsRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ThreeDsResponseDto:
        """Accept or reject a transaction 3D Secure (3DS) challenge.

        When a transaction is created, a 3DS challenge may trigger to verify the identity of the cardholder. Use this
        endpoint to approve or deny the transaction. The Spend & Expense user must have the ``ADMIN`` user role to
        perform this operation.

        Subscribe to the ``spend.three-ds-challenge.created`` event to get a webhook notification when a 3DS challenge
        is triggered for a transaction. See Spend & Expense 3DS challenge notification payload for more information.

        See 3-D Secure - BILL Spend & Expense in the BILL Help Center to learn more about 3D Secure at BILL.

        Args:
            acs_transaction_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Accept or reject a transaction response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.three_ds_challenge(
                acs_transaction_id, body, api_token=api_token, request_options=request_options
            ),
        )

    def update_transaction(
        self,
        transaction_id: str,
        body: UpdateTxRequestDto | UpdateTxRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TransactionResponseDto:
        """Update the budget for an existing transaction.

        Args:
            transaction_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a transaction response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.update_transaction(
                transaction_id, body, api_token=api_token, request_options=request_options
            ),
        )

    def update_transaction_custom_fields(
        self,
        transaction_id: str,
        body: BulkUpdateTxCustomFieldRequestDto | BulkUpdateTxCustomFieldRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SpendStatusDto:
        """Update details about custom fields and their values applied to an existing transaction.

        You cannot update custom fields in a locked transaction. When a transaction is locked, ``isLocked`` is set as
        ``true``. You can get information about your transactions with ``GET /v3/spend/transactions`` or `GET
        /v3/spend/transactions/{transactionId}.

        See Lock or unlock custom fields for a transaction in the BILL Help Center for more information.

        Args:
            transaction_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update transaction custom fields response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.update_transaction_custom_fields(
                transaction_id, body, api_token=api_token, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> TransactionsWithRawResponse:
        return self._with_raw_response


class AsyncTransactions:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncTransactionsWithRawResponse(client, server)

    async def add_transaction_receipt(
        self,
        transaction_id: str,
        body: TransactionReceiptRequestDto | TransactionReceiptRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[ReceiptImage]:
        """Add a receipt to an existing transaction.

        In the request, use the same upload ``url`` that you used to upload the receipt image. See Create a transaction
        upload URL to learn about creating a transaction image upload URL.

        Args:
            transaction_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Add a transaction receipt response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.add_transaction_receipt(
                transaction_id, body, api_token=api_token, request_options=request_options
            ),
        )

    async def create_receipt_upload_url(
        self, *, api_token: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ReimbursementImageUploadUrlResponseDto:
        """Create a transaction image upload URL.

        From the response, use the upload ``url`` to upload a receipt image for the transaction. For example, to upload
        a JPEG image, use the following ``curl`` command. To upload a PNG image, set the content type as ``image/png``.

        ```
        curl '{upload_url}' -H 'Content-Type: image/jpeg' --upload-file {file_name_with_extension}
        ```

        **Note**: BILL supports JPG and PNG file formats for transaction images.

        See Transactions in the Guides section for more information, sample requests, and responses.

        Args:
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a transaction upload URL response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.create_receipt_upload_url(
                api_token=api_token, request_options=request_options
            ),
        )

    async def delete_transaction_receipt(
        self,
        transaction_id: str,
        receipt_id: str,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Delete a receipt from an existing transaction. A deleted receipt cannot be restored. The deleted receipt is
        not available in the transaction details.

        Args:
            transaction_id: Value sent with the request.
            receipt_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Delete a transaction receipt response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_transaction_receipt(
                transaction_id, receipt_id, api_token=api_token, request_options=request_options
            ),
        )

    async def get_transaction(
        self,
        transaction_id: str,
        *,
        show_custom_field_ids: str | None = None,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TransactionResponseDto:
        """Get details about an existing transaction.

        In the response, you get information about transactions, reversals, and refunds.
        * **Transaction**: For a standard transaction, the ``transactionType`` is set as ``AUTHORIZATION`` or
            ``DECLINE``. The status is updated to ``CLEAR`` once BILL moves the money from the funding account. The
            ``CLEAR`` transactions receive a new ID and reference to the original ``AUTHORIZATION`` transaction via the
            ``originalAuthTransactionUuid`` field.
        * **Reversal**: For a reversal (a cancellation before funds are settled), the ``transactionType`` remains
            ``AUTHORIZATION``, but the ``amount`` is typically a negative value.
        * **Refund**: For a refund (a cancellation after funds are settled), the ``transactionType`` is set to ``CLEAR``
            and the ``amount`` is a negative value.

        Args:
            transaction_id: Value sent with the request.
            show_custom_field_ids: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get transaction details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_transaction(
                transaction_id,
                show_custom_field_ids=show_custom_field_ids,
                api_token=api_token,
                request_options=request_options,
            ),
        )

    async def list_transaction_custom_field_values(
        self,
        transaction_id: str,
        custom_field_id: str,
        *,
        max_: int | None = None,
        next_page: str | None = None,
        prev_page: str | None = None,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginationResponseDtoCustomFieldValueDto:
        """Get a list of custom field value objects applied to an existing transaction. By default, you get 20 results
        on one page of results. Set ``max`` in your request to get up to 100 results on one page.

        Args:
            transaction_id: Value sent with the request.
            custom_field_id: Value sent with the request.
            max_: Value sent with the request.
            next_page: Value sent with the request.
            prev_page: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of transaction custom field value response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_transaction_custom_field_values(
                transaction_id,
                custom_field_id,
                max_=max_,
                next_page=next_page,
                prev_page=prev_page,
                api_token=api_token,
                request_options=request_options,
            ),
        )

    async def list_transaction_custom_fields(
        self,
        transaction_id: str,
        *,
        filters: str | None = None,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListTransactionCustomFieldResponseDto:
        """Get a list of custom field objects applied to an existing transaction.

        Args:
            transaction_id: Value sent with the request.
            filters: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of transaction custom fields response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_transaction_custom_fields(
                transaction_id, filters=filters, api_token=api_token, request_options=request_options
            ),
        )

    async def list_transactions(
        self,
        *,
        max_: int | None = None,
        next_page: str | None = None,
        prev_page: str | None = None,
        sort: str | None = None,
        filters: str | None = None,
        show_custom_field_ids: str | None = None,
        include_receipts: bool | None = None,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginationResponseDtoTransactionResponseDto:
        """Get a list of transaction objects. By default, you get 20 results on one page of results. Set ``max`` in your
        request to get up to 50 results on one page.

        In the response, you get information about transactions, reversals, and refunds.
        * **Transaction**: For a standard transaction, the ``transactionType`` is set as ``AUTHORIZATION`` or
            ``DECLINE``. The status is updated to ``CLEAR`` once BILL moves the money from the funding account. The
            ``CLEAR`` transactions receive a new ID and reference to the original ``AUTHORIZATION`` transaction via the
            ``originalAuthTransactionUuid`` field.
        * **Reversal**: For a reversal (a cancellation before funds are settled), the ``transactionType`` remains
            ``AUTHORIZATION``, but the ``amount`` is typically a negative value.
        * **Refund**: For a refund (a cancellation after funds are settled), the ``transactionType`` is set to ``CLEAR``
            and the ``amount`` is a negative value.

        **Note**: Only parent transactions are available in the response.

        Args:
            max_: Value sent with the request.
            next_page: Value sent with the request.
            prev_page: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            show_custom_field_ids: Value sent with the request.
            include_receipts: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of transactions response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_transactions(
                max_=max_,
                next_page=next_page,
                prev_page=prev_page,
                sort=sort,
                filters=filters,
                show_custom_field_ids=show_custom_field_ids,
                include_receipts=include_receipts,
                api_token=api_token,
                request_options=request_options,
            ),
        )

    async def three_ds_challenge(
        self,
        acs_transaction_id: str,
        body: ThreeDsRequestDto | ThreeDsRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ThreeDsResponseDto:
        """Accept or reject a transaction 3D Secure (3DS) challenge.

        When a transaction is created, a 3DS challenge may trigger to verify the identity of the cardholder. Use this
        endpoint to approve or deny the transaction. The Spend & Expense user must have the ``ADMIN`` user role to
        perform this operation.

        Subscribe to the ``spend.three-ds-challenge.created`` event to get a webhook notification when a 3DS challenge
        is triggered for a transaction. See Spend & Expense 3DS challenge notification payload for more information.

        See 3-D Secure - BILL Spend & Expense in the BILL Help Center to learn more about 3D Secure at BILL.

        Args:
            acs_transaction_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Accept or reject a transaction response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.three_ds_challenge(
                acs_transaction_id, body, api_token=api_token, request_options=request_options
            ),
        )

    async def update_transaction(
        self,
        transaction_id: str,
        body: UpdateTxRequestDto | UpdateTxRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TransactionResponseDto:
        """Update the budget for an existing transaction.

        Args:
            transaction_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a transaction response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.update_transaction(
                transaction_id, body, api_token=api_token, request_options=request_options
            ),
        )

    async def update_transaction_custom_fields(
        self,
        transaction_id: str,
        body: BulkUpdateTxCustomFieldRequestDto | BulkUpdateTxCustomFieldRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SpendStatusDto:
        """Update details about custom fields and their values applied to an existing transaction.

        You cannot update custom fields in a locked transaction. When a transaction is locked, ``isLocked`` is set as
        ``true``. You can get information about your transactions with ``GET /v3/spend/transactions`` or `GET
        /v3/spend/transactions/{transactionId}.

        See Lock or unlock custom fields for a transaction in the BILL Help Center for more information.

        Args:
            transaction_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update transaction custom fields response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.update_transaction_custom_fields(
                transaction_id, body, api_token=api_token, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncTransactionsWithRawResponse:
        return self._with_raw_response


class TransactionsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def add_transaction_receipt(
        self,
        transaction_id: str,
        body: TransactionReceiptRequestDto | TransactionReceiptRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[ReceiptImage], AddTransactionReceiptErrorBody]:
        """Add a receipt to an existing transaction.

        In the request, use the same upload ``url`` that you used to upload the receipt image. See Create a transaction
        upload URL to learn about creating a transaction image upload URL.

        Args:
            transaction_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/spend/transactions/{transactionId}/receipts"),
            path_params=[param[str]("transactionId", transaction_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TransactionReceiptRequestDto | TransactionReceiptRequestDtoDict](body),
            decoder=json_decoder[list[ReceiptImage]],
            error_mapper=add_transaction_receipt_error_mapper,
            request_options=request_options,
        )

    def create_receipt_upload_url(
        self, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ReimbursementImageUploadUrlResponseDto, CreateReceiptUploadUrlErrorBody]:
        """Create a transaction image upload URL.

        From the response, use the upload ``url`` to upload a receipt image for the transaction. For example, to upload
        a JPEG image, use the following ``curl`` command. To upload a PNG image, set the content type as ``image/png``.

        ```
        curl '{upload_url}' -H 'Content-Type: image/jpeg' --upload-file {file_name_with_extension}
        ```

        **Note**: BILL supports JPG and PNG file formats for transaction images.

        See Transactions in the Guides section for more information, sample requests, and responses.

        Args:
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/spend/transactions/receipt-upload-url"),
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[ReimbursementImageUploadUrlResponseDto],
            error_mapper=create_receipt_upload_url_error_mapper,
            request_options=request_options,
        )

    def delete_transaction_receipt(
        self,
        transaction_id: str,
        receipt_id: str,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteTransactionReceiptErrorBody]:
        """Delete a receipt from an existing transaction. A deleted receipt cannot be restored. The deleted receipt is
        not available in the transaction details.

        Args:
            transaction_id: Value sent with the request.
            receipt_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v3/spend/transactions/{transactionId}/receipts/{receiptId}"),
            path_params=[param[str]("transactionId", transaction_id), param[str]("receiptId", receipt_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            decoder=empty_response,
            error_mapper=delete_transaction_receipt_error_mapper,
            request_options=request_options,
        )

    def get_transaction(
        self,
        transaction_id: str,
        *,
        show_custom_field_ids: str | None = None,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TransactionResponseDto, GetTransactionErrorBody]:
        """Get details about an existing transaction.

        In the response, you get information about transactions, reversals, and refunds.
        * **Transaction**: For a standard transaction, the ``transactionType`` is set as ``AUTHORIZATION`` or
            ``DECLINE``. The status is updated to ``CLEAR`` once BILL moves the money from the funding account. The
            ``CLEAR`` transactions receive a new ID and reference to the original ``AUTHORIZATION`` transaction via the
            ``originalAuthTransactionUuid`` field.
        * **Reversal**: For a reversal (a cancellation before funds are settled), the ``transactionType`` remains
            ``AUTHORIZATION``, but the ``amount`` is typically a negative value.
        * **Refund**: For a refund (a cancellation after funds are settled), the ``transactionType`` is set to ``CLEAR``
            and the ``amount`` is a negative value.

        Args:
            transaction_id: Value sent with the request.
            show_custom_field_ids: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/spend/transactions/{transactionId}"),
            path_params=[param[str]("transactionId", transaction_id)],
            query_params=[param[str | None]("showCustomFieldIds", show_custom_field_ids)],
            headers=[param[str | None]("apiToken", api_token)],
            decoder=json_decoder[TransactionResponseDto],
            error_mapper=get_transaction_error_mapper,
            request_options=request_options,
        )

    def list_transaction_custom_field_values(
        self,
        transaction_id: str,
        custom_field_id: str,
        *,
        max_: int | None = None,
        next_page: str | None = None,
        prev_page: str | None = None,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginationResponseDtoCustomFieldValueDto, ListTransactionCustomFieldValuesErrorBody]:
        """Get a list of custom field value objects applied to an existing transaction. By default, you get 20 results
        on one page of results. Set ``max`` in your request to get up to 100 results on one page.

        Args:
            transaction_id: Value sent with the request.
            custom_field_id: Value sent with the request.
            max_: Value sent with the request.
            next_page: Value sent with the request.
            prev_page: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v3/spend/transactions/{transactionId}/custom-fields/{customFieldId}/values"
            ),
            path_params=[param[str]("transactionId", transaction_id), param[str]("customFieldId", custom_field_id)],
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("nextPage", next_page),
                param[str | None]("prevPage", prev_page),
            ],
            headers=[param[str | None]("apiToken", api_token)],
            decoder=json_decoder[PaginationResponseDtoCustomFieldValueDto],
            error_mapper=list_transaction_custom_field_values_error_mapper,
            request_options=request_options,
        )

    def list_transaction_custom_fields(
        self,
        transaction_id: str,
        *,
        filters: str | None = None,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListTransactionCustomFieldResponseDto, ListTransactionCustomFieldsErrorBody]:
        """Get a list of custom field objects applied to an existing transaction.

        Args:
            transaction_id: Value sent with the request.
            filters: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/spend/transactions/{transactionId}/custom-fields"),
            path_params=[param[str]("transactionId", transaction_id)],
            query_params=[param[str | None]("filters", filters)],
            headers=[param[str | None]("apiToken", api_token)],
            decoder=json_decoder[ListTransactionCustomFieldResponseDto],
            error_mapper=list_transaction_custom_fields_error_mapper,
            request_options=request_options,
        )

    def list_transactions(
        self,
        *,
        max_: int | None = None,
        next_page: str | None = None,
        prev_page: str | None = None,
        sort: str | None = None,
        filters: str | None = None,
        show_custom_field_ids: str | None = None,
        include_receipts: bool | None = None,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginationResponseDtoTransactionResponseDto, ListTransactionsErrorBody]:
        """Get a list of transaction objects. By default, you get 20 results on one page of results. Set ``max`` in your
        request to get up to 50 results on one page.

        In the response, you get information about transactions, reversals, and refunds.
        * **Transaction**: For a standard transaction, the ``transactionType`` is set as ``AUTHORIZATION`` or
            ``DECLINE``. The status is updated to ``CLEAR`` once BILL moves the money from the funding account. The
            ``CLEAR`` transactions receive a new ID and reference to the original ``AUTHORIZATION`` transaction via the
            ``originalAuthTransactionUuid`` field.
        * **Reversal**: For a reversal (a cancellation before funds are settled), the ``transactionType`` remains
            ``AUTHORIZATION``, but the ``amount`` is typically a negative value.
        * **Refund**: For a refund (a cancellation after funds are settled), the ``transactionType`` is set to ``CLEAR``
            and the ``amount`` is a negative value.

        **Note**: Only parent transactions are available in the response.

        Args:
            max_: Value sent with the request.
            next_page: Value sent with the request.
            prev_page: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            show_custom_field_ids: Value sent with the request.
            include_receipts: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/spend/transactions"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("nextPage", next_page),
                param[str | None]("prevPage", prev_page),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("showCustomFieldIds", show_custom_field_ids),
                param[bool | None]("includeReceipts", include_receipts),
            ],
            headers=[param[str | None]("apiToken", api_token)],
            decoder=json_decoder[PaginationResponseDtoTransactionResponseDto],
            error_mapper=list_transactions_error_mapper,
            request_options=request_options,
        )

    def three_ds_challenge(
        self,
        acs_transaction_id: str,
        body: ThreeDsRequestDto | ThreeDsRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ThreeDsResponseDto, ThreeDsChallengeErrorBody]:
        """Accept or reject a transaction 3D Secure (3DS) challenge.

        When a transaction is created, a 3DS challenge may trigger to verify the identity of the cardholder. Use this
        endpoint to approve or deny the transaction. The Spend & Expense user must have the ``ADMIN`` user role to
        perform this operation.

        Subscribe to the ``spend.three-ds-challenge.created`` event to get a webhook notification when a 3DS challenge
        is triggered for a transaction. See Spend & Expense 3DS challenge notification payload for more information.

        See 3-D Secure - BILL Spend & Expense in the BILL Help Center to learn more about 3D Secure at BILL.

        Args:
            acs_transaction_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/spend/transactions/{acsTransactionId}/3ds-challenge"),
            path_params=[param[str]("acsTransactionId", acs_transaction_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ThreeDsRequestDto | ThreeDsRequestDtoDict](body),
            decoder=json_decoder[ThreeDsResponseDto],
            error_mapper=three_ds_challenge_error_mapper,
            request_options=request_options,
        )

    def update_transaction(
        self,
        transaction_id: str,
        body: UpdateTxRequestDto | UpdateTxRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TransactionResponseDto, UpdateTransactionErrorBody]:
        """Update the budget for an existing transaction.

        Args:
            transaction_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v3/spend/transactions/{transactionId}"),
            path_params=[param[str]("transactionId", transaction_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateTxRequestDto | UpdateTxRequestDtoDict](body),
            decoder=json_decoder[TransactionResponseDto],
            error_mapper=update_transaction_error_mapper,
            request_options=request_options,
        )

    def update_transaction_custom_fields(
        self,
        transaction_id: str,
        body: BulkUpdateTxCustomFieldRequestDto | BulkUpdateTxCustomFieldRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SpendStatusDto, UpdateTransactionCustomFieldsErrorBody]:
        """Update details about custom fields and their values applied to an existing transaction.

        You cannot update custom fields in a locked transaction. When a transaction is locked, ``isLocked`` is set as
        ``true``. You can get information about your transactions with ``GET /v3/spend/transactions`` or `GET
        /v3/spend/transactions/{transactionId}.

        See Lock or unlock custom fields for a transaction in the BILL Help Center for more information.

        Args:
            transaction_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v3/spend/transactions/{transactionId}/custom-fields"),
            path_params=[param[str]("transactionId", transaction_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BulkUpdateTxCustomFieldRequestDto | BulkUpdateTxCustomFieldRequestDtoDict](body),
            decoder=json_decoder[SpendStatusDto],
            error_mapper=update_transaction_custom_fields_error_mapper,
            request_options=request_options,
        )


class AsyncTransactionsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def add_transaction_receipt(
        self,
        transaction_id: str,
        body: TransactionReceiptRequestDto | TransactionReceiptRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[ReceiptImage], AddTransactionReceiptErrorBody]:
        """Add a receipt to an existing transaction.

        In the request, use the same upload ``url`` that you used to upload the receipt image. See Create a transaction
        upload URL to learn about creating a transaction image upload URL.

        Args:
            transaction_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/spend/transactions/{transactionId}/receipts"),
            path_params=[param[str]("transactionId", transaction_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TransactionReceiptRequestDto | TransactionReceiptRequestDtoDict](body),
            decoder=async_json_decoder[list[ReceiptImage]],
            error_mapper=add_transaction_receipt_error_mapper,
            request_options=request_options,
        )

    async def create_receipt_upload_url(
        self, *, api_token: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ReimbursementImageUploadUrlResponseDto, CreateReceiptUploadUrlErrorBody]:
        """Create a transaction image upload URL.

        From the response, use the upload ``url`` to upload a receipt image for the transaction. For example, to upload
        a JPEG image, use the following ``curl`` command. To upload a PNG image, set the content type as ``image/png``.

        ```
        curl '{upload_url}' -H 'Content-Type: image/jpeg' --upload-file {file_name_with_extension}
        ```

        **Note**: BILL supports JPG and PNG file formats for transaction images.

        See Transactions in the Guides section for more information, sample requests, and responses.

        Args:
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/spend/transactions/receipt-upload-url"),
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[ReimbursementImageUploadUrlResponseDto],
            error_mapper=create_receipt_upload_url_error_mapper,
            request_options=request_options,
        )

    async def delete_transaction_receipt(
        self,
        transaction_id: str,
        receipt_id: str,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteTransactionReceiptErrorBody]:
        """Delete a receipt from an existing transaction. A deleted receipt cannot be restored. The deleted receipt is
        not available in the transaction details.

        Args:
            transaction_id: Value sent with the request.
            receipt_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v3/spend/transactions/{transactionId}/receipts/{receiptId}"),
            path_params=[param[str]("transactionId", transaction_id), param[str]("receiptId", receipt_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_empty_response,
            error_mapper=delete_transaction_receipt_error_mapper,
            request_options=request_options,
        )

    async def get_transaction(
        self,
        transaction_id: str,
        *,
        show_custom_field_ids: str | None = None,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TransactionResponseDto, GetTransactionErrorBody]:
        """Get details about an existing transaction.

        In the response, you get information about transactions, reversals, and refunds.
        * **Transaction**: For a standard transaction, the ``transactionType`` is set as ``AUTHORIZATION`` or
            ``DECLINE``. The status is updated to ``CLEAR`` once BILL moves the money from the funding account. The
            ``CLEAR`` transactions receive a new ID and reference to the original ``AUTHORIZATION`` transaction via the
            ``originalAuthTransactionUuid`` field.
        * **Reversal**: For a reversal (a cancellation before funds are settled), the ``transactionType`` remains
            ``AUTHORIZATION``, but the ``amount`` is typically a negative value.
        * **Refund**: For a refund (a cancellation after funds are settled), the ``transactionType`` is set to ``CLEAR``
            and the ``amount`` is a negative value.

        Args:
            transaction_id: Value sent with the request.
            show_custom_field_ids: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/spend/transactions/{transactionId}"),
            path_params=[param[str]("transactionId", transaction_id)],
            query_params=[param[str | None]("showCustomFieldIds", show_custom_field_ids)],
            headers=[param[str | None]("apiToken", api_token)],
            decoder=async_json_decoder[TransactionResponseDto],
            error_mapper=get_transaction_error_mapper,
            request_options=request_options,
        )

    async def list_transaction_custom_field_values(
        self,
        transaction_id: str,
        custom_field_id: str,
        *,
        max_: int | None = None,
        next_page: str | None = None,
        prev_page: str | None = None,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginationResponseDtoCustomFieldValueDto, ListTransactionCustomFieldValuesErrorBody]:
        """Get a list of custom field value objects applied to an existing transaction. By default, you get 20 results
        on one page of results. Set ``max`` in your request to get up to 100 results on one page.

        Args:
            transaction_id: Value sent with the request.
            custom_field_id: Value sent with the request.
            max_: Value sent with the request.
            next_page: Value sent with the request.
            prev_page: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v3/spend/transactions/{transactionId}/custom-fields/{customFieldId}/values"
            ),
            path_params=[param[str]("transactionId", transaction_id), param[str]("customFieldId", custom_field_id)],
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("nextPage", next_page),
                param[str | None]("prevPage", prev_page),
            ],
            headers=[param[str | None]("apiToken", api_token)],
            decoder=async_json_decoder[PaginationResponseDtoCustomFieldValueDto],
            error_mapper=list_transaction_custom_field_values_error_mapper,
            request_options=request_options,
        )

    async def list_transaction_custom_fields(
        self,
        transaction_id: str,
        *,
        filters: str | None = None,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListTransactionCustomFieldResponseDto, ListTransactionCustomFieldsErrorBody]:
        """Get a list of custom field objects applied to an existing transaction.

        Args:
            transaction_id: Value sent with the request.
            filters: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/spend/transactions/{transactionId}/custom-fields"),
            path_params=[param[str]("transactionId", transaction_id)],
            query_params=[param[str | None]("filters", filters)],
            headers=[param[str | None]("apiToken", api_token)],
            decoder=async_json_decoder[ListTransactionCustomFieldResponseDto],
            error_mapper=list_transaction_custom_fields_error_mapper,
            request_options=request_options,
        )

    async def list_transactions(
        self,
        *,
        max_: int | None = None,
        next_page: str | None = None,
        prev_page: str | None = None,
        sort: str | None = None,
        filters: str | None = None,
        show_custom_field_ids: str | None = None,
        include_receipts: bool | None = None,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginationResponseDtoTransactionResponseDto, ListTransactionsErrorBody]:
        """Get a list of transaction objects. By default, you get 20 results on one page of results. Set ``max`` in your
        request to get up to 50 results on one page.

        In the response, you get information about transactions, reversals, and refunds.
        * **Transaction**: For a standard transaction, the ``transactionType`` is set as ``AUTHORIZATION`` or
            ``DECLINE``. The status is updated to ``CLEAR`` once BILL moves the money from the funding account. The
            ``CLEAR`` transactions receive a new ID and reference to the original ``AUTHORIZATION`` transaction via the
            ``originalAuthTransactionUuid`` field.
        * **Reversal**: For a reversal (a cancellation before funds are settled), the ``transactionType`` remains
            ``AUTHORIZATION``, but the ``amount`` is typically a negative value.
        * **Refund**: For a refund (a cancellation after funds are settled), the ``transactionType`` is set to ``CLEAR``
            and the ``amount`` is a negative value.

        **Note**: Only parent transactions are available in the response.

        Args:
            max_: Value sent with the request.
            next_page: Value sent with the request.
            prev_page: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            show_custom_field_ids: Value sent with the request.
            include_receipts: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/spend/transactions"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("nextPage", next_page),
                param[str | None]("prevPage", prev_page),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("showCustomFieldIds", show_custom_field_ids),
                param[bool | None]("includeReceipts", include_receipts),
            ],
            headers=[param[str | None]("apiToken", api_token)],
            decoder=async_json_decoder[PaginationResponseDtoTransactionResponseDto],
            error_mapper=list_transactions_error_mapper,
            request_options=request_options,
        )

    async def three_ds_challenge(
        self,
        acs_transaction_id: str,
        body: ThreeDsRequestDto | ThreeDsRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ThreeDsResponseDto, ThreeDsChallengeErrorBody]:
        """Accept or reject a transaction 3D Secure (3DS) challenge.

        When a transaction is created, a 3DS challenge may trigger to verify the identity of the cardholder. Use this
        endpoint to approve or deny the transaction. The Spend & Expense user must have the ``ADMIN`` user role to
        perform this operation.

        Subscribe to the ``spend.three-ds-challenge.created`` event to get a webhook notification when a 3DS challenge
        is triggered for a transaction. See Spend & Expense 3DS challenge notification payload for more information.

        See 3-D Secure - BILL Spend & Expense in the BILL Help Center to learn more about 3D Secure at BILL.

        Args:
            acs_transaction_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/spend/transactions/{acsTransactionId}/3ds-challenge"),
            path_params=[param[str]("acsTransactionId", acs_transaction_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ThreeDsRequestDto | ThreeDsRequestDtoDict](body),
            decoder=async_json_decoder[ThreeDsResponseDto],
            error_mapper=three_ds_challenge_error_mapper,
            request_options=request_options,
        )

    async def update_transaction(
        self,
        transaction_id: str,
        body: UpdateTxRequestDto | UpdateTxRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TransactionResponseDto, UpdateTransactionErrorBody]:
        """Update the budget for an existing transaction.

        Args:
            transaction_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v3/spend/transactions/{transactionId}"),
            path_params=[param[str]("transactionId", transaction_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateTxRequestDto | UpdateTxRequestDtoDict](body),
            decoder=async_json_decoder[TransactionResponseDto],
            error_mapper=update_transaction_error_mapper,
            request_options=request_options,
        )

    async def update_transaction_custom_fields(
        self,
        transaction_id: str,
        body: BulkUpdateTxCustomFieldRequestDto | BulkUpdateTxCustomFieldRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SpendStatusDto, UpdateTransactionCustomFieldsErrorBody]:
        """Update details about custom fields and their values applied to an existing transaction.

        You cannot update custom fields in a locked transaction. When a transaction is locked, ``isLocked`` is set as
        ``true``. You can get information about your transactions with ``GET /v3/spend/transactions`` or `GET
        /v3/spend/transactions/{transactionId}.

        See Lock or unlock custom fields for a transaction in the BILL Help Center for more information.

        Args:
            transaction_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v3/spend/transactions/{transactionId}/custom-fields"),
            path_params=[param[str]("transactionId", transaction_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BulkUpdateTxCustomFieldRequestDto | BulkUpdateTxCustomFieldRequestDtoDict](body),
            decoder=async_json_decoder[SpendStatusDto],
            error_mapper=update_transaction_custom_fields_error_mapper,
            request_options=request_options,
        )
