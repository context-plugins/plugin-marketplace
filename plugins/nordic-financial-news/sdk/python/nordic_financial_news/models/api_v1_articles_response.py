from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .article_detail import ArticleDetail, ArticleDetailDict


class ApiV1ArticlesResponse(SdkBaseModel):
    article: Optional[ArticleDetail] = UNSET


class ApiV1ArticlesResponseDict(TypedDict):
    article: NotRequired[ArticleDetailDict]
