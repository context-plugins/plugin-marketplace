from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ConvenienceFee1(SdkBaseModel):
    percentage: Optional[float] = UNSET
    """Convenience fee percentage"""


class ConvenienceFee1Dict(TypedDict):
    percentage: NotRequired[float]
