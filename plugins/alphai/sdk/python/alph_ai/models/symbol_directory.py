from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .directory_sector import DirectorySector, DirectorySectorDict
from .directory_symbol import DirectorySymbol, DirectorySymbolDict


class SymbolDirectory(SdkBaseModel):
    most_active: list[DirectorySymbol]
    sectors: list[DirectorySector]


class SymbolDirectoryDict(TypedDict):
    most_active: list[DirectorySymbolDict]
    sectors: list[DirectorySectorDict]
