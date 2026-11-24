from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class PostStatsWeb(SdkBaseModel):
    """Stats scoped only to web views. Not relevant for posts published only to email"""

    views: int = 0
    """Total number of web views"""

    clicks: int = 0
    """Total number of web clicks"""


class PostStatsWebDict(TypedDict):
    views: NotRequired[int]
    clicks: NotRequired[int]
