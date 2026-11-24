from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ImagePosition(SdkBaseModel):
    """Pixel offset for image positioning within a slot"""

    x: float
    y: float


class ImagePositionDict(TypedDict):
    x: float
    y: float
