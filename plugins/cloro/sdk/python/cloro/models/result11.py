from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .news_result1 import NewsResult1, NewsResult1Dict


class Result11(SdkBaseModel):
    """Google News results data"""

    news_results: Optional[list[NewsResult1]] = Field(default=UNSET, alias="newsResults")
    """News articles from Google News"""

    html: Optional[list[str]] = UNSET
    """Raw HTML from Google News pages (if requested)"""


class Result11Dict(TypedDict):
    news_results: NotRequired[list[NewsResult1Dict]]
    html: NotRequired[list[str]]
