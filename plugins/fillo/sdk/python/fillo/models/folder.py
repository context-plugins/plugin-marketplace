from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Folder(SdkBaseModel):
    id: str
    name: str


class FolderDict(TypedDict):
    id: str
    name: str
