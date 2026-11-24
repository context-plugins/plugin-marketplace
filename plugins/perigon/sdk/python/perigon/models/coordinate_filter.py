from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class CoordinateFilter(SdkBaseModel):
    """Filter articles from publishers based at specific geographic locations. Uses latitude, longitude, and radius
    parameters to define a circular search area for publisher locations."""

    lat: OptionalNullable[float] = UNSET
    lon: OptionalNullable[float] = UNSET
    radius: OptionalNullable[float] = UNSET


class CoordinateFilterDict(TypedDict):
    lat: NotRequired[float | None]
    lon: NotRequired[float | None]
    radius: NotRequired[float | None]
