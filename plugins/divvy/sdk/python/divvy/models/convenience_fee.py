from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ConvenienceFee(SdkBaseModel):
    percentage: Optional[float] = UNSET
    """Convenience fee percentage"""


class ConvenienceFeeDict(TypedDict):
    percentage: NotRequired[float]
