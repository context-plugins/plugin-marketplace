from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class NewsItemData(SdkBaseModel):
    heading: Optional[str] = UNSET
    summary: Optional[str] = UNSET
    thumbnail: Optional[str] = UNSET
    article_link: Optional[str] = UNSET
    published_time: Optional[int] = UNSET


class NewsItemDataDict(TypedDict):
    heading: NotRequired[str]
    summary: NotRequired[str]
    thumbnail: NotRequired[str]
    article_link: NotRequired[str]
    published_time: NotRequired[int]
