from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class IgnoreRegion(SdkBaseModel):
    x: float
    y: float
    width: float
    """Pixels (> 0)"""

    height: float
    """Pixels (> 0)"""


class IgnoreRegionDict(TypedDict):
    x: float
    y: float
    width: float
    height: float
