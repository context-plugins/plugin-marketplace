from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TraceStorageObject(SdkBaseModel):
    path: str
    download_url: str


class TraceStorageObjectDict(TypedDict):
    path: str
    download_url: str
