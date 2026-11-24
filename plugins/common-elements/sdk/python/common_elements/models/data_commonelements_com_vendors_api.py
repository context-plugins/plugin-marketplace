from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel


class DataCommonelementsComVendorsApi(SdkBaseModel):
    id: OptionalNullable[str] = UNSET
    """Vendor identity and location."""

    name: OptionalNullable[str] = UNSET
    """Vendor identity and location."""

    subtype: OptionalNullable[str] = UNSET
    """Vendor identity and location."""

    city: OptionalNullable[str] = UNSET
    """Vendor identity and location."""

    state: OptionalNullable[str] = UNSET
    """Vendor identity and location."""

    zip: OptionalNullable[str] = UNSET
    """Vendor identity and location."""

    website: OptionalNullable[str] = UNSET
    """Vendor identity and location."""

    verification_status: Optional[str] = UNSET
    """Always "verified" for a row this endpoint returns."""

    service_states: Optional[list[str]] = UNSET
    """States the vendor reports serving."""

    review_count: OptionalNullable[float] = UNSET
    """Platform review summary."""

    review_avg_rating: OptionalNullable[float] = UNSET
    """Platform review summary."""

    description: OptionalNullable[str] = UNSET
    """Vendor-self-asserted display fields."""

    license_number: OptionalNullable[str] = UNSET
    """Vendor-self-asserted display fields."""

    insurance_carrier: OptionalNullable[str] = UNSET
    """Vendor-self-asserted display fields."""

    team_size: OptionalNullable[str] = UNSET
    """Vendor-self-asserted display fields."""

    booth_tagline: OptionalNullable[str] = UNSET
    """Vendor-self-asserted display fields."""

    services_offered: Optional[list[str]] = UNSET
    """Vendor-self-asserted service scope and credentials."""

    certifications: Optional[list[str]] = UNSET
    """Vendor-self-asserted service scope and credentials."""

    service_categories: Optional[list[str]] = UNSET
    """Vendor-self-asserted service scope and credentials."""

    service_counties: Optional[list[str]] = UNSET
    """Vendor-self-asserted service scope and credentials."""

    service_offerings: Optional[list[Any]] = UNSET
    """Published offering posts: id, title, body, category_slugs, service_states, service_counties, pinned,
    published_at."""

    trust_profile: OptionalNullable[Any] = UNSET
    """Independently-sourced, public-record credential facts (FL workers'-comp status, professional licenses,
    enforcement count). Null when the vendor has no confirmed public-record match — this is the verified boundary,
    distinct from the self-asserted fields above."""

    created_at: Optional[RFC3339DateTime] = UNSET
    """When the vendor record was created."""


class DataCommonelementsComVendorsApiDict(TypedDict):
    id: NotRequired[str | None]
    name: NotRequired[str | None]
    subtype: NotRequired[str | None]
    city: NotRequired[str | None]
    state: NotRequired[str | None]
    zip: NotRequired[str | None]
    website: NotRequired[str | None]
    verification_status: NotRequired[str]
    service_states: NotRequired[list[str]]
    review_count: NotRequired[float | None]
    review_avg_rating: NotRequired[float | None]
    description: NotRequired[str | None]
    license_number: NotRequired[str | None]
    insurance_carrier: NotRequired[str | None]
    team_size: NotRequired[str | None]
    booth_tagline: NotRequired[str | None]
    services_offered: NotRequired[list[str]]
    certifications: NotRequired[list[str]]
    service_categories: NotRequired[list[str]]
    service_counties: NotRequired[list[str]]
    service_offerings: NotRequired[list[Any]]
    trust_profile: NotRequired[Any | None]
    created_at: NotRequired[RFC3339DateTime]
