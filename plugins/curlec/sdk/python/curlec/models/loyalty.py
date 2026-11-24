from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Loyalty(SdkBaseModel):
    points: Optional[int] = UNSET
    redeemed_points: Optional[int] = UNSET


class LoyaltyDict(TypedDict):
    points: NotRequired[int]
    redeemed_points: NotRequired[int]
