from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .classifications1_bill_v3_credit_memos_api import (
    Classifications1BillV3CreditMemosApi,
    Classifications1BillV3CreditMemosApiDict,
)
from .create_credit_memo_line_item_dto import CreateCreditMemoLineItemDto, CreateCreditMemoLineItemDtoDict


class CreateCreditMemoRequestDto(SdkBaseModel):
    """Create a credit memo"""

    customer_id: str = Field(alias="customerId")
    """BILL-generated ID of the customer. The value begins with ``0cu``."""

    reference_number: str = Field(alias="referenceNumber")
    """User-generated credit memo number. This value can be in your chosen number scheme."""

    credit_date: Date = Field(alias="creditDate")
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
    credit_memo_line_items: list[CreateCreditMemoLineItemDto] = Field(alias="creditMemoLineItems")
    """Credit memo line item information"""


class CreateCreditMemoRequestDtoDict(TypedDict):
    customer_id: str
    reference_number: str
    credit_date: Date
    description: NotRequired[str]
    sales_tax_item_id: NotRequired[str]
    pay_to_chart_of_account_id: NotRequired[str]
    pay_to_bank_account_id: NotRequired[str]
    classifications: NotRequired[Classifications1BillV3CreditMemosApiDict]
    credit_memo_line_items: list[CreateCreditMemoLineItemDtoDict]
