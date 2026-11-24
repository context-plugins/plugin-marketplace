from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Link1(SdkBaseModel):
    label: str
    url: str


class Link1Dict(TypedDict):
    label: str
    url: str
