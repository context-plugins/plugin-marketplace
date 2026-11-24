from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class WatchChangedRegion(SdkBaseModel):
    """Normalized (0..1) union bounding box of all changed regions on the page — the "where" of a visual change.
    Multiply by the capture's dimensions to get pixels; use it to crop or annotate in your own tooling."""

    x: Optional[float] = UNSET
    """Left edge as a fraction of page width (0..1)."""

    y: Optional[float] = UNSET
    """Top edge as a fraction of page height (0..1)."""

    width: Optional[float] = UNSET
    """Width as a fraction of page width (0..1)."""

    height: Optional[float] = UNSET
    """Height as a fraction of page height (0..1)."""


class WatchChangedRegionDict(TypedDict):
    x: NotRequired[float]
    y: NotRequired[float]
    width: NotRequired[float]
    height: NotRequired[float]
