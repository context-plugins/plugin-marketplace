from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CardFundingOptionFeeInfo(SdkBaseModel):
    """Card funding option fee info."""

    amount: Optional[float] = UNSET
    """Card fees amount"""

    rate: Optional[float] = UNSET
    """Card fees rate"""


class CardFundingOptionFeeInfoDict(TypedDict):
    amount: NotRequired[float]
    rate: NotRequired[float]
