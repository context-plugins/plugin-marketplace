from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel


class FundingOption(SdkBaseModel):
    """Funding option."""

    available: Optional[bool] = UNSET
    """This field is set as ``true`` if the funding account is available for vendor payments"""

    delivery_date: Optional[Date] = Field(default=UNSET, alias="deliveryDate")
    """Vendor payment delivery date. The value is in the ``yyyy-MM-dd`` format."""

    process_date: Optional[Date] = Field(default=UNSET, alias="processDate")
    """Vendor payment process date. The value is in the ``yyyy-MM-dd`` format. On this date, BILL starts processing the
    payment and starts withdrawing funds from the sender's funding account."""

    reason: Optional[str] = UNSET
    """Reason why the funding account is not available for vendor payments"""

    conditions: Optional[list[str]] = UNSET
    """Additional information required for vendor payments with the funding account"""


class FundingOptionDict(TypedDict):
    available: NotRequired[bool]
    delivery_date: NotRequired[Date]
    process_date: NotRequired[Date]
    reason: NotRequired[str]
    conditions: NotRequired[list[str]]
