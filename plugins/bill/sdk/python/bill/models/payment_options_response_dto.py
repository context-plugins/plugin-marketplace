from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .funding_options2 import FundingOptions2, FundingOptions2Dict


class PaymentOptionsResponseDto(SdkBaseModel):
    """Payments options response dto."""

    vendor_id: str = Field(alias="vendorId")
    """BILL-generated ID of the vendor to be paid. The value begins with ``009``."""

    amount: float
    """Vendor payment amount"""

    funding_options: Optional[FundingOptions2] = Field(default=UNSET, alias="fundingOptions")


class PaymentOptionsResponseDtoDict(TypedDict):
    vendor_id: str
    amount: float
    funding_options: NotRequired[FundingOptions2Dict]
