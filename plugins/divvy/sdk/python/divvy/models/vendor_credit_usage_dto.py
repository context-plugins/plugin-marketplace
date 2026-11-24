from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class VendorCreditUsageDto(SdkBaseModel):
    """VendorCredit usage Dto."""

    bill_id: Optional[str] = Field(default=UNSET, alias="billId")
    """BILL-generated ID of the bill to which the vendor credit is applied"""

    payment_id: Optional[str] = Field(default=UNSET, alias="paymentId")
    """BILL-generated ID of the payment to which the vendor credit is applied"""

    amount: Optional[float] = UNSET
    """Vendor credit amount applied"""


class VendorCreditUsageDtoDict(TypedDict):
    bill_id: NotRequired[str]
    payment_id: NotRequired[str]
    amount: NotRequired[float]
