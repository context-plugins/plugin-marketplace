from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Bbox(SdkBaseModel):
    """Bounding box in decimal degrees. REQUIRED unless searchUrls is supplied at the request level — the search engine
    needs a real bounding box to render results."""

    west: float
    south: float
    east: float
    north: float


class BboxDict(TypedDict):
    west: float
    south: float
    east: float
    north: float
