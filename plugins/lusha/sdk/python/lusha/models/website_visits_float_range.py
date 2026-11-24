from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class WebsiteVisitsFloatRange(SdkBaseModel):
    """Float range filter (non-negative)"""

    min: Optional[float] = UNSET
    max: Optional[float] = UNSET


class WebsiteVisitsFloatRangeDict(TypedDict):
    min: NotRequired[float]
    max: NotRequired[float]
