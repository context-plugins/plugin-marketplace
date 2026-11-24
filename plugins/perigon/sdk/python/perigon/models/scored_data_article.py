from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .article import Article, ArticleDict
from .vector_data import VectorData, VectorDataDict


class ScoredDataArticle(SdkBaseModel):
    score: OptionalNullable[float] = UNSET
    data: Optional[Article] = UNSET
    vectors: OptionalNullable[list[VectorData]] = UNSET


class ScoredDataArticleDict(TypedDict):
    score: NotRequired[float | None]
    data: NotRequired[ArticleDict]
    vectors: NotRequired[list[VectorDataDict] | None]
