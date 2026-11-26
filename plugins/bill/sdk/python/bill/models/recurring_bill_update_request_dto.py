from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .payment_information import PaymentInformation, PaymentInformationDict
from .processing_options_bill_v3_recurringbills_api import (
    ProcessingOptionsBillV3RecurringbillsApi,
    ProcessingOptionsBillV3RecurringbillsApiDict,
)
from .recurring_bill_update_line_item import RecurringBillUpdateLineItem, RecurringBillUpdateLineItemDict
from .schedule_bill_v3_recurringbills_api import ScheduleBillV3RecurringbillsApi, ScheduleBillV3RecurringbillsApiDict


class RecurringBillUpdateRequestDto(SdkBaseModel):
    """Update a recurring bill"""

    vendor_id: Optional[str] = Field(default=UNSET, alias="vendorId")
    """BILL-generated ID of the vendor. The value begins with ``009``."""

    description: Optional[str] = UNSET
    """User-generated invoice number. This value can be your chosen number scheme or bill due date."""

    schedule: Optional[ScheduleBillV3RecurringbillsApi] = UNSET
    recurring_bill_line_items: Optional[list[RecurringBillUpdateLineItem]] = Field(
        default=UNSET, alias="recurringBillLineItems"
    )
    """Recurring bill line item information"""

    processing_options: Optional[ProcessingOptionsBillV3RecurringbillsApi] = Field(
        default=UNSET, alias="processingOptions"
    )
    payment_information: Optional[PaymentInformation] = Field(default=UNSET, alias="paymentInformation")


class RecurringBillUpdateRequestDtoDict(TypedDict):
    vendor_id: NotRequired[str]
    description: NotRequired[str]
    schedule: NotRequired[ScheduleBillV3RecurringbillsApiDict]
    recurring_bill_line_items: NotRequired[list[RecurringBillUpdateLineItemDict]]
    processing_options: NotRequired[ProcessingOptionsBillV3RecurringbillsApiDict]
    payment_information: NotRequired[PaymentInformationDict]
