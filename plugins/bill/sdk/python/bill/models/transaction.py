from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .currency_data import CurrencyData, CurrencyDataDict
from .custom_field import CustomField, CustomFieldDict
from .enums.receipt_status_type import ReceiptStatusTypeOrStr
from .enums.transaction_type import TransactionTypeOrStr


class Transaction(SdkBaseModel):
    uuid: Optional[str] = UNSET
    fees: Optional[float] = UNSET
    foreign_exchange_fee: Optional[float] = Field(default=UNSET, alias="foreignExchangeFee")
    transaction_type: Optional[TransactionTypeOrStr] = Field(default=UNSET, alias="transactionType")
    """TransactionType."""

    parent_transaction_uuid: Optional[str] = Field(default=UNSET, alias="parentTransactionUuid")
    user_uuid: Optional[str] = Field(default=UNSET, alias="userUuid")
    raw_merchant_name: Optional[str] = Field(default=UNSET, alias="rawMerchantName")
    merchant_name: Optional[str] = Field(default=UNSET, alias="merchantName")
    budget_uuid: Optional[str] = Field(default=UNSET, alias="budgetUuid")
    original_auth_transaction_uuid: Optional[str] = Field(default=UNSET, alias="originalAuthTransactionUuid")
    occurred_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="occurredTime")
    updated_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedTime")
    authorized_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="authorizedTime")
    complete: Optional[bool] = UNSET
    custom_fields: Optional[list[CustomField]] = Field(default=UNSET, alias="customFields")
    currency_data: Optional[CurrencyData] = Field(default=UNSET, alias="currencyData")
    r"""CurrencyData class for Spend \& Expense Transactions."""

    amount: Optional[float] = UNSET
    receipt_status: Optional[ReceiptStatusTypeOrStr] = Field(default=UNSET, alias="receiptStatus")
    r"""ReceiptStatusType enum for Spend \& Expense Transactions."""

    card_uuid: Optional[str] = Field(default=UNSET, alias="cardUuid")
    company_uuid: Optional[str] = Field(default=UNSET, alias="companyUuid")
    merchant_category_code: Optional[str] = Field(default=UNSET, alias="merchantCategoryCode")
    decline_reason: Optional[str] = Field(default=UNSET, alias="declineReason")
    decline_internal_reason_code: Optional[str] = Field(default=UNSET, alias="declineInternalReasonCode")


class TransactionDict(TypedDict):
    uuid: NotRequired[str]
    fees: NotRequired[float]
    foreign_exchange_fee: NotRequired[float]
    transaction_type: NotRequired[TransactionTypeOrStr]
    parent_transaction_uuid: NotRequired[str]
    user_uuid: NotRequired[str]
    raw_merchant_name: NotRequired[str]
    merchant_name: NotRequired[str]
    budget_uuid: NotRequired[str]
    original_auth_transaction_uuid: NotRequired[str]
    occurred_time: NotRequired[RFC3339DateTime]
    updated_time: NotRequired[RFC3339DateTime]
    authorized_time: NotRequired[RFC3339DateTime]
    complete: NotRequired[bool]
    custom_fields: NotRequired[list[CustomFieldDict]]
    currency_data: NotRequired[CurrencyDataDict]
    amount: NotRequired[float]
    receipt_status: NotRequired[ReceiptStatusTypeOrStr]
    card_uuid: NotRequired[str]
    company_uuid: NotRequired[str]
    merchant_category_code: NotRequired[str]
    decline_reason: NotRequired[str]
    decline_internal_reason_code: NotRequired[str]
