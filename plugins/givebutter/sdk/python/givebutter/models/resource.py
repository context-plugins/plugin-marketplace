from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Resource(SdkBaseModel):
    id: str


class ResourceDict(TypedDict):
    id: str
