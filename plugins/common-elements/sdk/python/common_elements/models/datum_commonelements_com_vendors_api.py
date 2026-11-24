from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class DatumCommonelementsComVendorsApi(SdkBaseModel):
    id: Optional[UUID] = UNSET
    """Vendor organization id."""

    name: Optional[str] = UNSET
    """Vendor legal name."""

    subtype: OptionalNullable[str] = UNSET
    """Vendor category subtype."""

    city: OptionalNullable[str] = UNSET
    """Vendor location."""

    state: OptionalNullable[str] = UNSET
    """Vendor location."""

    zip: OptionalNullable[str] = UNSET
    """Vendor location."""

    website: OptionalNullable[str] = UNSET
    """Vendor website."""

    service_states: Optional[list[str]] = UNSET
    """States the vendor reports serving."""

    directory_slug: OptionalNullable[str] = UNSET
    """Slug for the public vendor directory page."""

    review_count: OptionalNullable[float] = UNSET
    """Platform review volume and average rating. Results are sorted by rating, highest first."""

    review_avg_rating: OptionalNullable[float] = UNSET
    """Platform review volume and average rating. Results are sorted by rating, highest first."""

    description: OptionalNullable[str] = UNSET
    """Vendor-authored description."""

    service_categories: Optional[list[str]] = UNSET
    """Vendor-self-asserted service scope."""

    service_counties: Optional[list[str]] = UNSET
    """Vendor-self-asserted service scope."""

    license_number: OptionalNullable[str] = UNSET
    """Vendor-self-asserted credentials. Not independently verified at this endpoint — see /v1/vendors/{id} for the
    verified trust profile."""

    insurance_carrier: OptionalNullable[str] = UNSET
    """Vendor-self-asserted credentials. Not independently verified at this endpoint — see /v1/vendors/{id} for the
    verified trust profile."""


class DatumCommonelementsComVendorsApiDict(TypedDict):
    id: NotRequired[UUID]
    name: NotRequired[str]
    subtype: NotRequired[str | None]
    city: NotRequired[str | None]
    state: NotRequired[str | None]
    zip: NotRequired[str | None]
    website: NotRequired[str | None]
    service_states: NotRequired[list[str]]
    directory_slug: NotRequired[str | None]
    review_count: NotRequired[float | None]
    review_avg_rating: NotRequired[float | None]
    description: NotRequired[str | None]
    service_categories: NotRequired[list[str]]
    service_counties: NotRequired[list[str]]
    license_number: NotRequired[str | None]
    insurance_carrier: NotRequired[str | None]
