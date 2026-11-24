from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Tagged1(SdkBaseModel):
    username: str
    x: float
    y: float


class Tagged1Dict(TypedDict):
    username: str
    x: float
    y: float
