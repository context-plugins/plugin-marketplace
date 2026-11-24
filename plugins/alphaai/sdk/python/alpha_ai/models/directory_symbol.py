from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DirectorySymbol(SdkBaseModel):
    ticker: str
    name: str
    news_count: int
    """Above-floor enriched-news rows mentioning the ticker in the window."""


class DirectorySymbolDict(TypedDict):
    ticker: str
    name: str
    news_count: int
