from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.collection import CollectionOrStr
from .enums.play_category import PlayCategoryOrStr


class ChartFilterPlay(SdkBaseModel):
    collection: Optional[CollectionOrStr] = UNSET
    """An enumeration."""

    country: str
    date: Optional[str] = UNSET
    category: PlayCategoryOrStr
    """An enumeration."""


class ChartFilterPlayDict(TypedDict):
    collection: NotRequired[CollectionOrStr]
    country: str
    date: NotRequired[str]
    category: PlayCategoryOrStr
