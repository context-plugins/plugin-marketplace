from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class WebsiteVisitsIntRange(SdkBaseModel):
    """Integer range filter (non-negative)"""

    min: Optional[int] = UNSET
    max: Optional[int] = UNSET


class WebsiteVisitsIntRangeDict(TypedDict):
    min: NotRequired[int]
    max: NotRequired[int]
