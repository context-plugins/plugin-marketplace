from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .news_result import NewsResult, NewsResultDict


class Result7(SdkBaseModel):
    """Google News results data"""

    news_results: Optional[list[NewsResult]] = Field(default=UNSET, alias="newsResults")
    """News articles from Google News"""

    html: Optional[list[str]] = UNSET
    """Raw HTML from Google News pages (if requested)"""


class Result7Dict(TypedDict):
    news_results: NotRequired[list[NewsResultDict]]
    html: NotRequired[list[str]]
