from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .payment_information import PaymentInformation, PaymentInformationDict
from .processing_options_bill_v3_recurringbills_api import (
    ProcessingOptionsBillV3RecurringbillsApi,
    ProcessingOptionsBillV3RecurringbillsApiDict,
)
from .recurring_bill_response_line_item import RecurringBillResponseLineItem, RecurringBillResponseLineItemDict
from .schedule1_bill_v3_recurringbills_api import Schedule1BillV3RecurringbillsApi, Schedule1BillV3RecurringbillsApiDict


class RecurringBillResponseDto(SdkBaseModel):
    """Recurring bills response."""

    id: str
    """BILL-generated ID of the recurring bill. The value begins with ``btp``."""

    archived: bool
    """Set as ``true`` if the recurring bill is archived"""

    vendor_id: str = Field(alias="vendorId")
    """BILL-generated ID of the vendor. The value begins with ``009``."""

    description: Optional[str] = UNSET
    """Recurring bill description"""

    bills_count: int = Field(alias="billsCount")
    """Number of bills generated from this recurring bill"""

    amount: Optional[float] = UNSET
    """Recurring bill total amount"""

    expired: bool
    """Set as ``true`` if the recurring bill is expired"""

    schedule: Schedule1BillV3RecurringbillsApi
    recurring_bill_line_items: list[RecurringBillResponseLineItem] = Field(alias="recurringBillLineItems")
    """Recurring bill line item information"""

    processing_options: Optional[ProcessingOptionsBillV3RecurringbillsApi] = Field(
        default=UNSET, alias="processingOptions"
    )
    payment_information: Optional[PaymentInformation] = Field(default=UNSET, alias="paymentInformation")
    created_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdTime")
    """Created date and time"""

    updated_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedTime")
    """Updated date and time"""


class RecurringBillResponseDtoDict(TypedDict):
    id: str
    archived: bool
    vendor_id: str
    description: NotRequired[str]
    bills_count: int
    amount: NotRequired[float]
    expired: bool
    schedule: Schedule1BillV3RecurringbillsApiDict
    recurring_bill_line_items: list[RecurringBillResponseLineItemDict]
    processing_options: NotRequired[ProcessingOptionsBillV3RecurringbillsApiDict]
    payment_information: NotRequired[PaymentInformationDict]
    created_time: NotRequired[RFC3339DateTime]
    updated_time: NotRequired[RFC3339DateTime]
