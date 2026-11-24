from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class Data5(SdkBaseModel):
    building_count: Optional[float] = UNSET
    """Mapped buildings for this association."""

    total_footprint_sqft: OptionalNullable[float] = UNSET
    """Summed footprint area across mapped buildings."""

    total_footprint_sqm: OptionalNullable[float] = UNSET
    """Summed footprint area across mapped buildings."""

    primary_building_sqft: OptionalNullable[float] = UNSET
    """Largest building's footprint, and the average across all of them."""

    avg_footprint_sqm: OptionalNullable[float] = UNSET
    """Largest building's footprint, and the average across all of them."""

    roof_area_sqft_estimate: OptionalNullable[float] = UNSET
    """Estimated from footprint; add a pitch multiplier for sloped roofs."""

    facade_area_sqft_estimate: OptionalNullable[float] = UNSET
    """Perimeter x height estimate. A starting point for painting/waterproofing scope."""

    floors_estimate: OptionalNullable[float] = UNSET
    """Rough estimate from measured height only. Not a milestone determination."""

    max_height_m: OptionalNullable[float] = UNSET
    """Measured height, capped ~34m by the underlying source; null when unmeasured. Never a hard stories count."""

    height_confidence: OptionalNullable[str] = UNSET
    """Confidence label for the height figure."""

    stories: OptionalNullable[float] = UNSET
    """Recorded stories from the county parcel roll (FL only currently) — measured, not estimated."""

    year_built: OptionalNullable[float] = UNSET
    """Earliest recorded year built across the association's buildings."""

    milestone_inspection_relevant: OptionalNullable[bool] = UNSET
    """True when a recorded building has 3+ stories — the real FL Ch. 553 signal. Reference-only."""

    structural_source: OptionalNullable[str] = UNSET
    """Where each figure came from."""

    source: OptionalNullable[str] = UNSET
    """Where each figure came from."""

    attribution: OptionalNullable[str] = UNSET
    """Where each figure came from."""


class Data5Dict(TypedDict):
    building_count: NotRequired[float]
    total_footprint_sqft: NotRequired[float | None]
    total_footprint_sqm: NotRequired[float | None]
    primary_building_sqft: NotRequired[float | None]
    avg_footprint_sqm: NotRequired[float | None]
    roof_area_sqft_estimate: NotRequired[float | None]
    facade_area_sqft_estimate: NotRequired[float | None]
    floors_estimate: NotRequired[float | None]
    max_height_m: NotRequired[float | None]
    height_confidence: NotRequired[str | None]
    stories: NotRequired[float | None]
    year_built: NotRequired[float | None]
    milestone_inspection_relevant: NotRequired[bool | None]
    structural_source: NotRequired[str | None]
    source: NotRequired[str | None]
    attribution: NotRequired[str | None]
