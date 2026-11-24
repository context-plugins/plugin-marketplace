from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .accounting_integration_transaction import AccountingIntegrationTransaction, AccountingIntegrationTransactionDict
from .currency_data1 import CurrencyData1, CurrencyData1Dict
from .custom_field_dto import CustomFieldDto, CustomFieldDtoDict
from .enums.card_type import CardTypeOrStr
from .enums.dispute_status_type import DisputeStatusTypeOrStr
from .enums.program_network_type import ProgramNetworkTypeOrStr
from .enums.receipt_status_type_bill_v3_transactions_api import ReceiptStatusTypeBillV3TransactionsApiOrStr
from .enums.receipt_sync_status_type import ReceiptSyncStatusTypeOrStr
from .enums.transaction_status_tag_type import TransactionStatusTagTypeOrStr
from .enums.transaction_type_bill_v3_transactions_api import TransactionTypeBillV3TransactionsApiOrStr
from .merchant_location import MerchantLocation, MerchantLocationDict
from .receipt_image import ReceiptImage, ReceiptImageDict
from .review import Review, ReviewDict
from .reviewer import Reviewer, ReviewerDict


class TransactionResponseDto(SdkBaseModel):
    """Transactions response."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the transaction"""

    uuid: Optional[str] = UNSET
    """BILL-generated UUID of the transaction"""

    child_transaction_ids: Optional[list[str]] = Field(default=UNSET, alias="childTransactionIds")
    """BILL-generated IDs of child transactions associated with the current transaction"""

    child_transaction_uuids: Optional[list[str]] = Field(default=UNSET, alias="childTransactionUuids")
    """BILL-generated IDs of child transactions associated with the current transaction"""

    is_locked: Optional[bool] = Field(default=UNSET, alias="isLocked")
    """Set as ``true`` if the transaction is locked"""

    is_reconciled: Optional[bool] = Field(default=UNSET, alias="isReconciled")
    """Set as ``true`` if the transaction is reconciled"""

    transaction_type: Optional[TransactionTypeBillV3TransactionsApiOrStr] = Field(
        default=UNSET, alias="transactionType"
    )
    parent_transaction_id: Optional[str] = Field(default=UNSET, alias="parentTransactionId")
    """BILL-generated ID of the parent transaction. This field is set on child transactions when a parent transaction is
    split."""

    user_id: Optional[str] = Field(default=UNSET, alias="userId")
    """BILL-generated ID of the user who created the transaction"""

    user_uuid: Optional[str] = Field(default=UNSET, alias="userUuid")
    """BILL-generated UUID of the user who created the transaction"""

    user_name: Optional[str] = Field(default=UNSET, alias="userName")
    """Display name of the user who created the transaction"""

    raw_merchant_name: Optional[str] = Field(default=UNSET, alias="rawMerchantName")
    """Raw merchant name for the transaction"""

    merchant_name: Optional[str] = Field(default=UNSET, alias="merchantName")
    """Readable (cleaned) merchant name for the transaction"""

    budget_id: Optional[str] = Field(default=UNSET, alias="budgetId")
    """BILL-generated ID of the budget linked with the transaction"""

    budget_uuid: Optional[str] = Field(default=UNSET, alias="budgetUuid")
    """BILL-generated UUID of the budget linked with the transaction"""

    budget_name: Optional[str] = Field(default=UNSET, alias="budgetName")
    """Name of the budget linked with the transaction"""

    parent_budget_uuid: Optional[str] = Field(default=UNSET, alias="parentBudgetUuid")
    """BILL-generated UUID of the parent budget linked with the transaction"""

    original_auth_transaction_id: Optional[str] = Field(default=UNSET, alias="originalAuthTransactionId")
    """BILL-generated ID of the originating authorization transaction"""

    original_auth_transaction_uuid: Optional[str] = Field(default=UNSET, alias="originalAuthTransactionUuid")
    """BILL-generated UUID of the originating authorization transaction.

    After a transaction is authorized, it is set as cleared when it is complete. The ``originalAuthTransactionUuid``
    ties the cleared transaction to the authorized transaction. The value is ``null`` when the transaction is not
    authorized."""

    is_credit: Optional[bool] = Field(default=UNSET, alias="isCredit")
    """Set as ``true`` if the transaction is a credit"""

    currency_data: Optional[CurrencyData1] = Field(default=UNSET, alias="currencyData")
    receipt_required: Optional[bool] = Field(default=UNSET, alias="receiptRequired")
    """Set as ``true`` if a receipt is required to complete the transaction"""

    review_required: Optional[bool] = Field(default=UNSET, alias="reviewRequired")
    """Set as ``true`` if a review is required to complete the transaction"""

    status: Optional[TransactionStatusTagTypeOrStr] = UNSET
    occurred_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="occurredTime")
    """Created date and time"""

    updated_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedTime")
    """Updated date and time"""

    authorized_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="authorizedTime")
    """Transaction authorized date and time"""

    complete: Optional[bool] = UNSET
    """Set as ``true`` if the transaction has all the required fields completed"""

    points_awarded: Optional[int] = Field(default=UNSET, alias="pointsAwarded")
    """Points awarded for the transaction. This value is ``0`` until the transaction is cleared.

    **Note**: Only ``ADMIN`` users can view any awarded points."""

    custom_fields: Optional[list[CustomFieldDto]] = Field(default=UNSET, alias="customFields")
    """Transaction custom fields information"""

    receipts: Optional[list[ReceiptImage]] = UNSET
    """List of receipts attached to the transaction"""

    network: Optional[ProgramNetworkTypeOrStr] = UNSET
    is_parent: Optional[bool] = Field(default=UNSET, alias="isParent")
    """Set as ``true`` if the transaction is the parent of another transaction"""

    reviews: Optional[list[Review]] = UNSET
    """Transaction review information"""

    amount: Optional[float] = UNSET
    """Transaction amount including fees.

    When ``amount`` is negative, the transaction is a reversal or refund.
    * **Reversal**: For a reversal (cancel before funds are settled), ``transactionType`` is set as ``AUTHORIZATION``
        and ``amount`` is a negative value.
    * **Refund**: For a refund (cancel after funds are settled), ``transactionType`` is set as ``CLEAR`` and ``amount``
        is a negative value."""

    transacted_amount: Optional[float] = Field(default=UNSET, alias="transactedAmount")
    """Transaction amount not including fees"""

    fees: Optional[float] = UNSET
    """Sum of transaction fees (including ``foreignExchangeFee``)"""

    foreign_exchange_fee: Optional[float] = Field(default=UNSET, alias="foreignExchangeFee")
    """Foreign exchange fee for the transaction (if any)"""

    receipt_status: Optional[ReceiptStatusTypeBillV3TransactionsApiOrStr] = Field(default=UNSET, alias="receiptStatus")
    matched_clear_transaction_id: Optional[str] = Field(default=UNSET, alias="matchedClearTransactionId")
    """BILL-generated ID of the cleared transaction. Use this ID to identify the transaction after it is cleared."""

    matched_clear_transaction_uuid: Optional[str] = Field(default=UNSET, alias="matchedClearTransactionUuid")
    """BILL-generated UUID of the cleared transaction. Use this ID to identify the transaction after it is cleared."""

    accounting_integration_transactions: Optional[list[AccountingIntegrationTransaction]] = Field(
        default=UNSET, alias="accountingIntegrationTransactions"
    )
    """Accounting system integration information"""

    reviewers: Optional[list[Reviewer]] = UNSET
    """Transaction reviewers information"""

    card_id: Optional[str] = Field(default=UNSET, alias="cardId")
    """BILL-generated ID of the card used to make the transaction"""

    card_uuid: Optional[str] = Field(default=UNSET, alias="cardUuid")
    """BILL-generated UUID of the card used to make the transaction"""

    card_last_four: Optional[str] = Field(default=UNSET, alias="cardLastFour")
    """Last four digits of the card number used to make the transaction"""

    card_type: Optional[CardTypeOrStr] = Field(default=UNSET, alias="cardType")
    receipt_sync_status: Optional[ReceiptSyncStatusTypeOrStr] = Field(default=UNSET, alias="receiptSyncStatus")
    merchant_category_code: Optional[str] = Field(default=UNSET, alias="merchantCategoryCode")
    """Merchant category code"""

    decline_reason: Optional[str] = Field(default=UNSET, alias="declineReason")
    """Human-readable transaction decline reason. This field is available when ``transactionType`` is set as
    ``DECLINE``."""

    decline_internal_reason_code: Optional[str] = Field(default=UNSET, alias="declineInternalReasonCode")
    """Transaction decline reason code. This field is available when ``transactionType`` is set as ``DECLINE``."""

    card_present: Optional[bool] = Field(default=UNSET, alias="cardPresent")
    """Set as ``true`` if a physical card was present for the transaction"""

    merchant_location: Optional[MerchantLocation] = Field(default=UNSET, alias="merchantLocation")
    dispute_status: Optional[DisputeStatusTypeOrStr] = Field(default=UNSET, alias="disputeStatus")


class TransactionResponseDtoDict(TypedDict):
    id: NotRequired[str]
    uuid: NotRequired[str]
    child_transaction_ids: NotRequired[list[str]]
    child_transaction_uuids: NotRequired[list[str]]
    is_locked: NotRequired[bool]
    is_reconciled: NotRequired[bool]
    transaction_type: NotRequired[TransactionTypeBillV3TransactionsApiOrStr]
    parent_transaction_id: NotRequired[str]
    user_id: NotRequired[str]
    user_uuid: NotRequired[str]
    user_name: NotRequired[str]
    raw_merchant_name: NotRequired[str]
    merchant_name: NotRequired[str]
    budget_id: NotRequired[str]
    budget_uuid: NotRequired[str]
    budget_name: NotRequired[str]
    parent_budget_uuid: NotRequired[str]
    original_auth_transaction_id: NotRequired[str]
    original_auth_transaction_uuid: NotRequired[str]
    is_credit: NotRequired[bool]
    currency_data: NotRequired[CurrencyData1Dict]
    receipt_required: NotRequired[bool]
    review_required: NotRequired[bool]
    status: NotRequired[TransactionStatusTagTypeOrStr]
    occurred_time: NotRequired[RFC3339DateTime]
    updated_time: NotRequired[RFC3339DateTime]
    authorized_time: NotRequired[RFC3339DateTime]
    complete: NotRequired[bool]
    points_awarded: NotRequired[int]
    custom_fields: NotRequired[list[CustomFieldDtoDict]]
    receipts: NotRequired[list[ReceiptImageDict]]
    network: NotRequired[ProgramNetworkTypeOrStr]
    is_parent: NotRequired[bool]
    reviews: NotRequired[list[ReviewDict]]
    amount: NotRequired[float]
    transacted_amount: NotRequired[float]
    fees: NotRequired[float]
    foreign_exchange_fee: NotRequired[float]
    receipt_status: NotRequired[ReceiptStatusTypeBillV3TransactionsApiOrStr]
    matched_clear_transaction_id: NotRequired[str]
    matched_clear_transaction_uuid: NotRequired[str]
    accounting_integration_transactions: NotRequired[list[AccountingIntegrationTransactionDict]]
    reviewers: NotRequired[list[ReviewerDict]]
    card_id: NotRequired[str]
    card_uuid: NotRequired[str]
    card_last_four: NotRequired[str]
    card_type: NotRequired[CardTypeOrStr]
    receipt_sync_status: NotRequired[ReceiptSyncStatusTypeOrStr]
    merchant_category_code: NotRequired[str]
    decline_reason: NotRequired[str]
    decline_internal_reason_code: NotRequired[str]
    card_present: NotRequired[bool]
    merchant_location: NotRequired[MerchantLocationDict]
    dispute_status: NotRequired[DisputeStatusTypeOrStr]
