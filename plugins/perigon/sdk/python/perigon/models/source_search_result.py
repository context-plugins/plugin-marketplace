from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .source import Source, SourceDict


class SourceSearchResult(SdkBaseModel):
    """Source search result"""

    status: int
    num_results: int = Field(alias="numResults")
    results: list[Source]


class SourceSearchResultDict(TypedDict):
    status: int
    num_results: int
    results: list[SourceDict]
