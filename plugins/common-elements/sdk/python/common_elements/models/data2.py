from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel


class Data2(SdkBaseModel):
    id: Optional[UUID] = UNSET
    """Association id."""

    name: Optional[str] = UNSET
    """Legal name."""

    state: OptionalNullable[str] = UNSET
    """Location on the record."""

    county: OptionalNullable[str] = UNSET
    """Location on the record."""

    city: OptionalNullable[str] = UNSET
    """Location on the record."""

    zip: OptionalNullable[str] = UNSET
    """Location on the record."""

    subtype: OptionalNullable[str] = UNSET
    """"hoa", "condo", or "coop"."""

    unit_count: OptionalNullable[float] = UNSET
    """Units or lots, where known."""

    address: OptionalNullable[str] = UNSET
    """Street address."""

    lat: OptionalNullable[float] = UNSET
    """Coordinates, where geocoded."""

    lng: OptionalNullable[float] = UNSET
    """Coordinates, where geocoded."""

    website: OptionalNullable[str] = UNSET
    """Public contact info on the record, where present."""

    phone: OptionalNullable[str] = UNSET
    """Public contact info on the record, where present."""

    is_claimed: Optional[bool] = UNSET
    """Whether a board member or manager has claimed this record on the platform."""

    registration_status: OptionalNullable[str] = UNSET
    """State corporate registry status (e.g. "ACTIVE")."""

    external_document_number: OptionalNullable[str] = UNSET
    """State registration document number."""

    management_firm: OptionalNullable[str] = UNSET
    """Management company of record, where known."""

    created_at: Optional[RFC3339DateTime] = UNSET
    """Record lifecycle timestamps."""

    updated_at: Optional[RFC3339DateTime] = UNSET
    """Record lifecycle timestamps."""


class Data2Dict(TypedDict):
    id: NotRequired[UUID]
    name: NotRequired[str]
    state: NotRequired[str | None]
    county: NotRequired[str | None]
    city: NotRequired[str | None]
    zip: NotRequired[str | None]
    subtype: NotRequired[str | None]
    unit_count: NotRequired[float | None]
    address: NotRequired[str | None]
    lat: NotRequired[float | None]
    lng: NotRequired[float | None]
    website: NotRequired[str | None]
    phone: NotRequired[str | None]
    is_claimed: NotRequired[bool]
    registration_status: NotRequired[str | None]
    external_document_number: NotRequired[str | None]
    management_firm: NotRequired[str | None]
    created_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]
