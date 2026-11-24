from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Link(SdkBaseModel):
    url: str
    title: str


class LinkDict(TypedDict):
    url: str
    title: str
