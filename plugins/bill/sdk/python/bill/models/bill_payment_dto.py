from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel


class BillPaymentDto(SdkBaseModel):
    """A single payment applied to a bill."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the payment. The value begins with ``stp``."""

    amount: Optional[float] = UNSET
    """Payment amount applied to the bill"""

    process_date: Optional[Date] = Field(default=UNSET, alias="processDate")
    """Date the payment was processed. The value is in the ``yyyy-MM-dd`` format."""


class BillPaymentDtoDict(TypedDict):
    id: NotRequired[str]
    amount: NotRequired[float]
    process_date: NotRequired[Date]
