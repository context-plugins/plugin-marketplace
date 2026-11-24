from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class Coordinate(SdkBaseModel):
    """Geographic coordinates of the place."""

    lat: OptionalNullable[float] = UNSET
    """Latitude in decimal degrees."""

    lon: OptionalNullable[float] = UNSET
    """Longitude in decimal degrees."""


class CoordinateDict(TypedDict):
    lat: NotRequired[float | None]
    lon: NotRequired[float | None]
