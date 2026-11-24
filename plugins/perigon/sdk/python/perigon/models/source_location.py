from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .coordinate import Coordinate, CoordinateDict


class SourceLocation(SdkBaseModel):
    """Geographic location of the publisher, when available."""

    country: OptionalNullable[str] = UNSET
    """Country where the publisher is located."""

    state: OptionalNullable[str] = UNSET
    """State or region where the publisher is located."""

    county: OptionalNullable[str] = UNSET
    """County where the publisher is located."""

    city: OptionalNullable[str] = UNSET
    """City where the publisher is located."""

    coordinates: Optional[Coordinate] = UNSET


class SourceLocationDict(TypedDict):
    country: NotRequired[str | None]
    state: NotRequired[str | None]
    county: NotRequired[str | None]
    city: NotRequired[str | None]
    coordinates: NotRequired[CoordinateDict]
