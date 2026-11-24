from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.collection import CollectionOrStr
from .enums.ios_category import IosCategoryOrStr
from .enums.ios_platform import IosPlatformOrStr


class ChartFilterIos(SdkBaseModel):
    collection: Optional[CollectionOrStr] = UNSET
    """An enumeration."""

    country: str
    date: Optional[str] = UNSET
    category: Optional[IosCategoryOrStr] = UNSET
    """An enumeration."""

    platform: IosPlatformOrStr
    """An enumeration."""


class ChartFilterIosDict(TypedDict):
    collection: NotRequired[CollectionOrStr]
    country: str
    date: NotRequired[str]
    category: NotRequired[IosCategoryOrStr]
    platform: IosPlatformOrStr
