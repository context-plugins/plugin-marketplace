from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Attribute1(SdkBaseModel):
    label: str
    value: str


class Attribute1Dict(TypedDict):
    label: str
    value: str
