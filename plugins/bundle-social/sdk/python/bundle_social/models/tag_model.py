from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TagModel(SdkBaseModel):
    display: str
    urn: str


class TagModelDict(TypedDict):
    display: str
    urn: str
