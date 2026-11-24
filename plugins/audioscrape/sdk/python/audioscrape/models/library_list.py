from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .library import Library, LibraryDict


class LibraryList(SdkBaseModel):
    libraries: list[Library]
    total: int


class LibraryListDict(TypedDict):
    libraries: list[LibraryDict]
    total: int
