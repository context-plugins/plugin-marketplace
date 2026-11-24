from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .directory_symbol import DirectorySymbol, DirectorySymbolDict


class SectorSymbols(SdkBaseModel):
    sector: str
    slug: str
    count: int
    """Number of symbols on this page."""

    total_count: int
    """Total index-eligible symbols in the sector."""

    page: int
    page_size: Literal[500] = 500
    has_next: bool
    symbols: list[DirectorySymbol]


class SectorSymbolsDict(TypedDict):
    sector: str
    slug: str
    count: int
    total_count: int
    page: int
    page_size: Literal[500]
    has_next: bool
    symbols: list[DirectorySymbolDict]
