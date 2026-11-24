from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .news_response_page_data import NewsResponsePageData, NewsResponsePageDataDict


class NewsResponseMetaData(SdkBaseModel):
    page: Optional[NewsResponsePageData] = UNSET


class NewsResponseMetaDataDict(TypedDict):
    page: NotRequired[NewsResponsePageDataDict]
