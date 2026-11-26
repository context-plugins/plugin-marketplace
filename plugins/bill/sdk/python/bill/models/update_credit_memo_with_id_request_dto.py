from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .classifications1_bill_v3_credit_memos_api import (
    Classifications1BillV3CreditMemosApi,
    Classifications1BillV3CreditMemosApiDict,
)
from .update_credit_memo_line_item_dto import UpdateCreditMemoLineItemDto, UpdateCreditMemoLineItemDtoDict


class UpdateCreditMemoWithIdRequestDto(SdkBaseModel):
    """Update CreditMemo with id request Dto."""

    id: str
    """BILL-generated ID of the credit memo. The value begins with ``ccr``."""

    customer_id: Optional[str] = Field(default=UNSET, alias="customerId")
    """BILL-generated ID of the customer. The value begins with ``0cu``."""

    reference_number: Optional[str] = Field(default=UNSET, alias="referenceNumber")
    """User-generated credit memo number. This value can be in your chosen number scheme."""

    credit_date: Optional[Date] = Field(default=UNSET, alias="creditDate")
    """Credit memo issued date. This value is in the ``yyyy-MM-dd`` format."""

    description: Optional[str] = UNSET
    """Credit memo description"""

    sales_tax_item_id: Optional[str] = Field(default=UNSET, alias="salesTaxItemId")
    """BILL-generated ID of the ``SALES_TAX`` item. The value begins with ``0ii``. The tax rate is applied to all the
    credit memo line items set as taxable.

    You can set up a ``SALES_TAX`` percentage item with ``POST /v3/classifications/items``."""

    pay_to_chart_of_account_id: Optional[str] = Field(default=UNSET, alias="payToChartOfAccountId")
    """BILL-generated ID of the chart of accounts used when the credit memo is applied to an invoice payment. The value
    begins with ``0ca``."""

    pay_to_bank_account_id: Optional[str] = Field(default=UNSET, alias="payToBankAccountId")
    """BILL-generated ID of the bank account used when the credit memo is applied to an invoice payment. The value
    begins with ``bac``.

    **Note**: You can set only one of ``payToChartOfAccountId`` or ``payToBankAccountId``."""

    classifications: Optional[Classifications1BillV3CreditMemosApi] = UNSET
    credit_memo_line_items: Optional[list[UpdateCreditMemoLineItemDto]] = Field(
        default=UNSET, alias="creditMemoLineItems"
    )
    """Credit memo line item information"""


class UpdateCreditMemoWithIdRequestDtoDict(TypedDict):
    id: str
    customer_id: NotRequired[str]
    reference_number: NotRequired[str]
    credit_date: NotRequired[Date]
    description: NotRequired[str]
    sales_tax_item_id: NotRequired[str]
    pay_to_chart_of_account_id: NotRequired[str]
    pay_to_bank_account_id: NotRequired[str]
    classifications: NotRequired[Classifications1BillV3CreditMemosApiDict]
    credit_memo_line_items: NotRequired[list[UpdateCreditMemoLineItemDtoDict]]
