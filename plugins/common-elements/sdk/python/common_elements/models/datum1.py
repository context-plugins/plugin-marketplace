from __future__ import annotations

from typing import Any
from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class Datum1(SdkBaseModel):
    organization_id: Optional[UUID] = UNSET
    """Common Elements id for the matched association."""

    association_name: Optional[str] = UNSET
    """Name of the matched association."""

    matched_address: Optional[str] = UNSET
    """The indexed parcel address this query matched, for your own audit trail."""

    zip5: Optional[str] = UNSET
    """Location on the matched record."""

    state: Optional[str] = UNSET
    """Location on the matched record."""

    source_table: Optional[str] = UNSET
    """Which parcel source produced the link (internal provenance, not stable API surface)."""

    match_confidence: Optional[Any] = UNSET
    """"exact" is a normalized address match. "building" means your address included a unit and the indexed parcel is
    the building it sits in — the common shape for a condo, where our source data is building-level."""

    unit_count: OptionalNullable[float] = UNSET
    """Units in the association, where known and above our confidence floor. Null does not mean zero — it means we do
    not have a trustworthy count for this one yet."""


class Datum1Dict(TypedDict):
    organization_id: NotRequired[UUID]
    association_name: NotRequired[str]
    matched_address: NotRequired[str]
    zip5: NotRequired[str]
    state: NotRequired[str]
    source_table: NotRequired[str]
    match_confidence: NotRequired[Any]
    unit_count: NotRequired[float | None]
