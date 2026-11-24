from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .journalist import Journalist, JournalistDict


class JournalistSearchResult(SdkBaseModel):
    """Journalist search result"""

    status: int
    num_results: int = Field(alias="numResults")
    results: list[Journalist]


class JournalistSearchResultDict(TypedDict):
    status: int
    num_results: int
    results: list[JournalistDict]
