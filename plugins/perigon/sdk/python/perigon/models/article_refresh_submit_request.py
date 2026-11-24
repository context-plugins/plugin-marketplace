from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ArticleRefreshSubmitRequest(SdkBaseModel):
    article_ids: list[str] = Field(alias="articleIds")


class ArticleRefreshSubmitRequestDict(TypedDict):
    article_ids: list[str]
