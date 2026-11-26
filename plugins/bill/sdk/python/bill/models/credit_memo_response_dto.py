from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, RFC3339DateTime, SdkBaseModel
from .classifications1_bill_v3_credit_memos_api import (
    Classifications1BillV3CreditMemosApi,
    Classifications1BillV3CreditMemosApiDict,
)
from .credit_memo_line_item_response_dto import CreditMemoLineItemResponseDto, CreditMemoLineItemResponseDtoDict
from .enums.credit_status_dto import CreditStatusDtoOrStr


class CreditMemoResponseDto(SdkBaseModel):
    """CreditMemo response Dto."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the credit memo. The value begins with ``ccr``."""

    customer_id: Optional[str] = Field(default=UNSET, alias="customerId")
    """BILL-generated ID of the customer. The value begins with ``0cu``."""

    reference_number: Optional[str] = Field(default=UNSET, alias="referenceNumber")
    """User-generated credit memo number. This value can be in your chosen number scheme."""

    credit_date: Optional[Date] = Field(default=UNSET, alias="creditDate")
    """Credit memo issued date. This value is in the ``yyyy-MM-dd`` format."""

    description: Optional[str] = UNSET
    """Credit memo description"""

    archived: Optional[bool] = UNSET
    """Set as ``true`` if the credit memo is archived"""

    sales_tax_item_id: Optional[str] = Field(default=UNSET, alias="salesTaxItemId")
    """BILL-generated ID of the ``SALES_TAX`` item. The value begins with ``0ii``. The tax rate is applied to all the
    credit memo line items set as taxable."""

    pay_to_chart_of_account_id: Optional[str] = Field(default=UNSET, alias="payToChartOfAccountId")
    """BILL-generated ID of the chart of accounts used when the credit memo is applied to an invoice payment. The value
    begins with ``0ca``."""

    pay_to_bank_account_id: Optional[str] = Field(default=UNSET, alias="payToBankAccountId")
    """BILL-generated ID of the bank account used when the credit memo is applied to an invoice payment. The value
    begins with ``bac``."""

    amount: Optional[float] = UNSET
    """Credit memo amount"""

    applied_amount: Optional[float] = Field(default=UNSET, alias="appliedAmount")
    """Credit memo amount applied to invoices"""

    sales_tax_total: Optional[float] = Field(default=UNSET, alias="salesTaxTotal")
    """Credit memo sales tax amount. The value is set based on ``salesTaxItemId``."""

    sales_tax_percentage: Optional[float] = Field(default=UNSET, alias="salesTaxPercentage")
    """Credit memo sales tax percentage. The value is set based on ``salesTaxItemId``."""

    status: Optional[CreditStatusDtoOrStr] = UNSET
    created_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdTime")
    """Credit memo created time"""

    updated_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedTime")
    """Credit memo updated time"""

    credit_memo_line_items: Optional[list[CreditMemoLineItemResponseDto]] = Field(
        default=UNSET, alias="creditMemoLineItems"
    )
    """Credit memo line item information"""

    classifications: Optional[Classifications1BillV3CreditMemosApi] = UNSET


class CreditMemoResponseDtoDict(TypedDict):
    id: NotRequired[str]
    customer_id: NotRequired[str]
    reference_number: NotRequired[str]
    credit_date: NotRequired[Date]
    description: NotRequired[str]
    archived: NotRequired[bool]
    sales_tax_item_id: NotRequired[str]
    pay_to_chart_of_account_id: NotRequired[str]
    pay_to_bank_account_id: NotRequired[str]
    amount: NotRequired[float]
    applied_amount: NotRequired[float]
    sales_tax_total: NotRequired[float]
    sales_tax_percentage: NotRequired[float]
    status: NotRequired[CreditStatusDtoOrStr]
    created_time: NotRequired[RFC3339DateTime]
    updated_time: NotRequired[RFC3339DateTime]
    credit_memo_line_items: NotRequired[list[CreditMemoLineItemResponseDtoDict]]
    classifications: NotRequired[Classifications1BillV3CreditMemosApiDict]
