from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Tag1(SdkBaseModel):
    name: str
    value: str


class Tag1Dict(TypedDict):
    name: str
    value: str
