from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .replace_vendor_credit_line_item_dto import ReplaceVendorCreditLineItemDto, ReplaceVendorCreditLineItemDtoDict


class ReplaceVendorCreditRequestDto(SdkBaseModel):
    """Replace a vendor credit"""

    vendor_id: str = Field(alias="vendorId")
    """BILL-generated ID of the vendor. The value begins with ``009``."""

    reference_number: str = Field(alias="referenceNumber")
    """User-generated vendor credit number. This value can be in your chosen number scheme."""

    credit_date: Date = Field(alias="creditDate")
    """Vendor credit issued date. This value is in the ``yyyy-MM-dd`` format."""

    description: Optional[str] = UNSET
    """Vendor credit description"""

    apply_to_chart_of_account_id: Optional[str] = Field(default=UNSET, alias="applyToChartOfAccountId")
    """BILL-generated ID of the chart of accounts used when the vendor credit is applied to a bill payment. The value
    begins with ``0ca``."""

    apply_to_bank_account_id: Optional[str] = Field(default=UNSET, alias="applyToBankAccountId")
    """BILL-generated ID of the bank account used when the vendor credit is applied to a bill payment. The value begins
    with ``bac``.

    **Note**: You can set only one of ``applyToChartOfAccountId`` or ``applyToBankAccountId``."""

    vendor_credit_line_items: list[ReplaceVendorCreditLineItemDto] = Field(alias="vendorCreditLineItems")
    """Vendor credit line item information"""


class ReplaceVendorCreditRequestDtoDict(TypedDict):
    vendor_id: str
    reference_number: str
    credit_date: Date
    description: NotRequired[str]
    apply_to_chart_of_account_id: NotRequired[str]
    apply_to_bank_account_id: NotRequired[str]
    vendor_credit_line_items: list[ReplaceVendorCreditLineItemDtoDict]
