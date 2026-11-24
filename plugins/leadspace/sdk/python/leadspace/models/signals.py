from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Signals(SdkBaseModel):
    fortune_500_rank: Optional[float] = UNSET
    fortune_1000_rank: Optional[float] = UNSET
    g2k_rank: Optional[float] = UNSET


class SignalsDict(TypedDict):
    fortune_500_rank: NotRequired[float]
    fortune_1000_rank: NotRequired[float]
    g2k_rank: NotRequired[float]
