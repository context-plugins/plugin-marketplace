from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Rating2(SdkBaseModel):
    """Aggregate star rating — present for local businesses"""

    rating: Optional[str] = UNSET
    """Star rating value"""

    count: Optional[str] = UNSET
    """Number of reviews"""


class Rating2Dict(TypedDict):
    rating: NotRequired[str]
    count: NotRequired[str]
