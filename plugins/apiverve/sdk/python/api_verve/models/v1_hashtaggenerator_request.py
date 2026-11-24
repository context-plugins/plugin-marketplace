from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1HashtaggeneratorRequest(SdkBaseModel):
    text: str
    """The text to generate hashtags from"""

    count: Optional[float] = UNSET
    """Number of hashtags to generate. 1 to 10)"""


class V1HashtaggeneratorRequestDict(TypedDict):
    text: str
    count: NotRequired[float]
