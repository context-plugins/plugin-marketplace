from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class FloodCap(SdkBaseModel):
    per_10s: int
    per_min: int


class FloodCapDict(TypedDict):
    per_10s: int
    per_min: int
