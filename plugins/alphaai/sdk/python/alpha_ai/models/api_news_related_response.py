from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .rich_news_article import RichNewsArticle, RichNewsArticleDict


class ApiNewsRelatedResponse(SdkBaseModel):
    results: list[RichNewsArticle]


class ApiNewsRelatedResponseDict(TypedDict):
    results: list[RichNewsArticleDict]
