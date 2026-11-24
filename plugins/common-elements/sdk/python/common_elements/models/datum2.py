from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class Datum2(SdkBaseModel):
    id: Optional[UUID] = UNSET
    """Association id."""

    name: Optional[str] = UNSET
    """Association legal name."""

    subtype: OptionalNullable[str] = UNSET
    """"hoa", "condo", or "coop"."""

    city: OptionalNullable[str] = UNSET
    """Location on the association record."""

    county: OptionalNullable[str] = UNSET
    """Location on the association record."""

    state: OptionalNullable[str] = UNSET
    """Location on the association record."""

    zip: OptionalNullable[str] = UNSET
    """Location on the association record."""

    lat: Optional[float] = UNSET
    """Coordinates the distance was computed from."""

    lng: Optional[float] = UNSET
    """Coordinates the distance was computed from."""

    unit_count: OptionalNullable[float] = UNSET
    """Units or lots, where known."""

    external_document_number: OptionalNullable[str] = UNSET
    """State registration document number."""

    distance_m: Optional[float] = UNSET
    """Distance from your centre point in metres, rounded."""


class Datum2Dict(TypedDict):
    id: NotRequired[UUID]
    name: NotRequired[str]
    subtype: NotRequired[str | None]
    city: NotRequired[str | None]
    county: NotRequired[str | None]
    state: NotRequired[str | None]
    zip: NotRequired[str | None]
    lat: NotRequired[float]
    lng: NotRequired[float]
    unit_count: NotRequired[float | None]
    external_document_number: NotRequired[str | None]
    distance_m: NotRequired[float]
