from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Link(SdkBaseModel):
    label: str
    url: str


class LinkDict(TypedDict):
    label: str
    url: str
