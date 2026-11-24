from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .directory_symbol import DirectorySymbol, DirectorySymbolDict


class DirectorySector(SdkBaseModel):
    sector: str
    slug: str
    count: int
    """Total index-eligible symbols across all pages of the sector."""

    top: list[DirectorySymbol]


class DirectorySectorDict(TypedDict):
    sector: str
    slug: str
    count: int
    top: list[DirectorySymbolDict]
