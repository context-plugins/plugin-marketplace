from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .payment_information import PaymentInformation, PaymentInformationDict
from .processing_options_bill_v3_recurringbills_api import (
    ProcessingOptionsBillV3RecurringbillsApi,
    ProcessingOptionsBillV3RecurringbillsApiDict,
)
from .recurring_bill_create_line_item import RecurringBillCreateLineItem, RecurringBillCreateLineItemDict
from .schedule_bill_v3_recurringbills_api import ScheduleBillV3RecurringbillsApi, ScheduleBillV3RecurringbillsApiDict


class RecurringBillCreateRequestDto(SdkBaseModel):
    """Create a recurring bill"""

    vendor_id: str = Field(alias="vendorId")
    """BILL-generated ID of the vendor. The value begins with ``009``."""

    description: Optional[str] = UNSET
    """User-generated invoice number. This value can be your chosen number scheme or bill due date."""

    schedule: ScheduleBillV3RecurringbillsApi
    recurring_bill_line_items: list[RecurringBillCreateLineItem] = Field(alias="recurringBillLineItems")
    """Recurring bill line item information"""

    processing_options: Optional[ProcessingOptionsBillV3RecurringbillsApi] = Field(
        default=UNSET, alias="processingOptions"
    )
    payment_information: Optional[PaymentInformation] = Field(default=UNSET, alias="paymentInformation")


class RecurringBillCreateRequestDtoDict(TypedDict):
    vendor_id: str
    description: NotRequired[str]
    schedule: ScheduleBillV3RecurringbillsApiDict
    recurring_bill_line_items: list[RecurringBillCreateLineItemDict]
    processing_options: NotRequired[ProcessingOptionsBillV3RecurringbillsApiDict]
    payment_information: NotRequired[PaymentInformationDict]
