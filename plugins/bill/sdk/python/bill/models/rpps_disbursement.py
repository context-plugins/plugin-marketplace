from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel


class RppsDisbursement(SdkBaseModel):
    """Rpps disbursement dto when the disbursement type is ACH to verified national vendor."""

    sent_date: Optional[Date] = Field(default=UNSET, alias="sentDate")
    """ACH payment to verified national vendor sent date"""

    arrives_by_date: Optional[Date] = Field(default=UNSET, alias="arrivesByDate")
    """ACH payment to verified national vendor arrives by date"""

    trace_number: Optional[int] = Field(default=UNSET, alias="traceNumber")
    """Payment trace number. This value is used to uniquely identify a payment in a batch."""

    batch_number: Optional[int] = Field(default=UNSET, alias="batchNumber")
    """Payment batch number"""


class RppsDisbursementDict(TypedDict):
    sent_date: NotRequired[Date]
    arrives_by_date: NotRequired[Date]
    trace_number: NotRequired[int]
    batch_number: NotRequired[int]
