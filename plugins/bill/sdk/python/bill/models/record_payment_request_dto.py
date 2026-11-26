from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .classifications import Classifications, ClassificationsDict
from .record_bill_pay_request_dto import RecordBillPayRequestDto, RecordBillPayRequestDtoDict


class RecordPaymentRequestDto(SdkBaseModel):
    """Record AP payment"""

    vendor_id: str = Field(alias="vendorId")
    """BILL-generated ID of the vendor. The value begins with ``009``."""

    process_date: Date = Field(alias="processDate")
    """Payment process date. The value is in the ``yyyy-MM-dd`` format."""

    to_print_check: bool = Field(alias="toPrintCheck")
    """Set as ``true`` to set the payment check as printable in your accounting system. Use this field only for check
    payments."""

    classifications: Optional[Classifications] = UNSET
    description: Optional[str] = UNSET
    """Payment description"""

    sync_reference: Optional[str] = Field(default=UNSET, alias="syncReference")
    """Payment reference ID in your accounting system. Set this field with payment information, such as check number."""

    payments: list[RecordBillPayRequestDto]
    """List of bill payments"""

    allow_export: Optional[bool] = Field(default=UNSET, alias="allowExport")
    """Set as ``true`` to sync the bill payment with your accounting system"""


class RecordPaymentRequestDtoDict(TypedDict):
    vendor_id: str
    process_date: Date
    to_print_check: bool
    classifications: NotRequired[ClassificationsDict]
    description: NotRequired[str]
    sync_reference: NotRequired[str]
    payments: list[RecordBillPayRequestDtoDict]
    allow_export: NotRequired[bool]
