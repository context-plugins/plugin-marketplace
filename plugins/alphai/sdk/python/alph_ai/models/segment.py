from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.scale1 import Scale1OrStr


class Segment(SdkBaseModel):
    name: Optional[str] = UNSET
    revenue: Optional[str] = UNSET
    """The segment's figure exactly as the filing printed it. A segment table names its unit in the header far more
    often than in the cell, so use the three companions below to compute."""

    yoy_change: OptionalNullable[str] = UNSET
    qoq_change: OptionalNullable[str] = UNSET
    driver: Optional[str] = UNSET
    numeric: OptionalNullable[float] = UNSET
    """``revenue`` as a number at the face scale it was printed. Null when the field carries no figure."""

    unit: OptionalNullable[str] = UNSET
    """ISO-style currency code, ``pct`` for a percentage, null when the cell prints no currency (or holds a volume, such
    as units delivered)."""

    scale: OptionalNullable[Scale1OrStr] = UNSET
    """The multiplier ``numeric`` is expressed in, by the same rules as a ``key_metrics`` row. A bare segment figure
    takes the table header's scale only when the segments then fit under the read's own revenue line; otherwise null.
    Added 2026-10-01 to every stored read."""


class SegmentDict(TypedDict):
    name: NotRequired[str]
    revenue: NotRequired[str]
    yoy_change: NotRequired[str | None]
    qoq_change: NotRequired[str | None]
    driver: NotRequired[str]
    numeric: NotRequired[float | None]
    unit: NotRequired[str | None]
    scale: NotRequired[Scale1OrStr | None]
