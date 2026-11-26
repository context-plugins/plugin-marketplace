from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel


class BillUserApprovalsResponseDto(SdkBaseModel):
    """Bill User Approvals Response Dto."""

    bill_id: str = Field(alias="billId")
    """BILL-generated ID of the bill. The value begins with ``00n``."""

    vendor_id: str = Field(alias="vendorId")
    """BILL-generated ID of the vendor. The value begins with ``009``."""

    amount: Optional[float] = UNSET
    """Bill amount. This value is in USD."""

    due_date: Optional[Date] = Field(default=UNSET, alias="dueDate")
    """Bill due date. The value is in the ``yyyy-MM-dd`` format."""


class BillUserApprovalsResponseDtoDict(TypedDict):
    bill_id: str
    vendor_id: str
    amount: NotRequired[float]
    due_date: NotRequired[Date]
