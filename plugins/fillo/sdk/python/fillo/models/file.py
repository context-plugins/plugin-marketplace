from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class File(SdkBaseModel):
    id: str
    name: str
    size: int
    """Bytes."""


class FileDict(TypedDict):
    id: str
    name: str
    size: int
