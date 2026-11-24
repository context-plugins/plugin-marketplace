from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class File1(SdkBaseModel):
    role: str
    label: str
    url: str
    name: str


class File1Dict(TypedDict):
    role: str
    label: str
    url: str
    name: str
