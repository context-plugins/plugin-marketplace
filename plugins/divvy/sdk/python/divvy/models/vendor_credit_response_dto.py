from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, RFC3339DateTime, SdkBaseModel
from .enums.credit_status_dto import CreditStatusDtoOrStr
from .vendor_credit_line_item_response_dto import VendorCreditLineItemResponseDto, VendorCreditLineItemResponseDtoDict


class VendorCreditResponseDto(SdkBaseModel):
    """VendorCredit response Dto."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the vendor credit. The value begins with ``vcr``."""

    vendor_id: Optional[str] = Field(default=UNSET, alias="vendorId")
    """BILL-generated ID of the vendor. The value begins with ``009``."""

    reference_number: Optional[str] = Field(default=UNSET, alias="referenceNumber")
    """User-generated vendor credit number. This value can be in your chosen number scheme."""

    credit_date: Optional[Date] = Field(default=UNSET, alias="creditDate")
    """Vendor credit issued date. This value is in the ``yyyy-MM-dd`` format."""

    description: Optional[str] = UNSET
    """Vendor credit description"""

    archived: Optional[bool] = UNSET
    """Set as ``true`` if the vendor credit is archived"""

    apply_to_chart_of_account_id: Optional[str] = Field(default=UNSET, alias="applyToChartOfAccountId")
    """BILL-generated ID of the chart of accounts used when the vendor credit is applied to a bill payment. The value
    begins with ``0ca``."""

    apply_to_bank_account_id: Optional[str] = Field(default=UNSET, alias="applyToBankAccountId")
    """BILL-generated ID of the bank account used when the vendor credit is applied to a bill payment. The value begins
    with ``bac``.

    **Note**: You can set only one of ``applyToChartOfAccountId`` or ``applyToBankAccountId``."""

    amount: Optional[float] = UNSET
    """Vendor credit amount"""

    applied_amount: Optional[float] = Field(default=UNSET, alias="appliedAmount")
    """Vendor credit amount applied to invoices"""

    status: Optional[CreditStatusDtoOrStr] = UNSET
    created_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdTime")
    """Vendor credit created time"""

    updated_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedTime")
    """Vendor credit updated time"""

    vendor_credit_line_items: Optional[list[VendorCreditLineItemResponseDto]] = Field(
        default=UNSET, alias="vendorCreditLineItems"
    )
    """Vendor credit line item information"""


class VendorCreditResponseDtoDict(TypedDict):
    id: NotRequired[str]
    vendor_id: NotRequired[str]
    reference_number: NotRequired[str]
    credit_date: NotRequired[Date]
    description: NotRequired[str]
    archived: NotRequired[bool]
    apply_to_chart_of_account_id: NotRequired[str]
    apply_to_bank_account_id: NotRequired[str]
    amount: NotRequired[float]
    applied_amount: NotRequired[float]
    status: NotRequired[CreditStatusDtoOrStr]
    created_time: NotRequired[RFC3339DateTime]
    updated_time: NotRequired[RFC3339DateTime]
    vendor_credit_line_items: NotRequired[list[VendorCreditLineItemResponseDtoDict]]
