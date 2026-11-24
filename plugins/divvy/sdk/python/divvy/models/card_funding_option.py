from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .fee_info import FeeInfo, FeeInfoDict


class CardFundingOption(SdkBaseModel):
    """Card Funding option."""

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

    id: Optional[str] = UNSET
    """BILL-generated ID of the card account. The value begins with ``cat``."""

    name: Optional[str] = UNSET
    """Card account name"""

    brand: Optional[str] = UNSET
    """Card brand"""

    fee_info: Optional[FeeInfo] = Field(default=UNSET, alias="feeInfo")


class CardFundingOptionDict(TypedDict):
    available: NotRequired[bool]
    delivery_date: NotRequired[Date]
    process_date: NotRequired[Date]
    reason: NotRequired[str]
    conditions: NotRequired[list[str]]
    id: NotRequired[str]
    name: NotRequired[str]
    brand: NotRequired[str]
    fee_info: NotRequired[FeeInfoDict]
