from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, OptionalNullable, SdkBaseModel


class Data1(SdkBaseModel):
    id: Optional[UUID] = UNSET
    """Vendor organization id."""

    name: Optional[str] = UNSET
    """Vendor legal name."""

    subtype: OptionalNullable[str] = UNSET
    """Vendor subtype."""

    city: OptionalNullable[str] = UNSET
    """Vendor location."""

    state: OptionalNullable[str] = UNSET
    """Vendor location."""

    website: OptionalNullable[str] = UNSET
    """Vendor website."""

    verification_status: OptionalNullable[str] = UNSET
    """Whether the vendor org is verified on the platform."""

    directory_slug: OptionalNullable[str] = UNSET
    """Slug for the public vendor directory page."""

    review_count: OptionalNullable[float] = UNSET
    """Platform review volume and average rating."""

    review_avg_rating: OptionalNullable[float] = UNSET
    """Platform review volume and average rating."""

    relationship_type: OptionalNullable[str] = UNSET
    """"under_contract" or "represented_by". This is the edge type behind the row."""

    relationship_status: OptionalNullable[str] = UNSET
    """Edge status; only active edges are returned."""

    start_date: OptionalNullable[Date] = UNSET
    """Contract window, where recorded."""

    end_date: OptionalNullable[Date] = UNSET
    """Contract window, where recorded."""

    contract_value: OptionalNullable[float] = UNSET
    """Contract value, where recorded."""


class Data1Dict(TypedDict):
    id: NotRequired[UUID]
    name: NotRequired[str]
    subtype: NotRequired[str | None]
    city: NotRequired[str | None]
    state: NotRequired[str | None]
    website: NotRequired[str | None]
    verification_status: NotRequired[str | None]
    directory_slug: NotRequired[str | None]
    review_count: NotRequired[float | None]
    review_avg_rating: NotRequired[float | None]
    relationship_type: NotRequired[str | None]
    relationship_status: NotRequired[str | None]
    start_date: NotRequired[Date | None]
    end_date: NotRequired[Date | None]
    contract_value: NotRequired[float | None]
