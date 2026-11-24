from __future__ import annotations

from typing import Any
from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel


class DatumCommonelementsComAssociationsApi(SdkBaseModel):
    id: Optional[UUID] = UNSET
    """Common Elements id for the matched record."""

    canonical_name: Optional[str] = UNSET
    """Normalized association name."""

    sim: Optional[float] = UNSET
    """Trigram similarity against your query, 0 to 1. Rows come back ranked. Parcel hits use 1 (exact) or 0.99
    (building) so a client that thresholds on sim still keeps a real address match."""

    resolved_via: Optional[Any] = UNSET
    """How this request was resolved. Address-shaped q never falls through to name matching."""

    matched_address: OptionalNullable[str] = UNSET
    """Present when resolved_via is address: the indexed parcel and exact or building."""

    match_confidence: OptionalNullable[str] = UNSET
    """Present when resolved_via is address: the indexed parcel and exact or building."""

    unit_count: OptionalNullable[float] = UNSET
    """Present when resolved_via is address. Units in the association, where known and above our confidence floor; null
    does not mean zero."""

    county: OptionalNullable[str] = UNSET
    """Location on the matched record."""

    state: OptionalNullable[str] = UNSET
    """Location on the matched record."""

    sunbiz_corp_id: OptionalNullable[str] = UNSET
    """State corporate registry id, where known."""

    registration_status: OptionalNullable[str] = UNSET
    """Registry status on the record."""

    registered_at: OptionalNullable[RFC3339DateTime] = UNSET
    """Registry formation and most recent filing timestamps."""

    last_filing_at: OptionalNullable[RFC3339DateTime] = UNSET
    """Registry formation and most recent filing timestamps."""

    cam_firm_name: OptionalNullable[str] = UNSET
    """Management firm of record, where known."""

    cam_license_number: OptionalNullable[str] = UNSET
    """License of the management firm of record."""

    cam_license_status: OptionalNullable[str] = UNSET
    """License of the management firm of record."""

    association_type: OptionalNullable[str] = UNSET
    """Association type on the record."""

    sb_4d_applicable: OptionalNullable[bool] = UNSET
    """Whether Florida SB 4-D structural requirements are recorded as applicable."""

    sb_4d_inspection_status: OptionalNullable[str] = UNSET
    """Recorded SB 4-D inspection state."""

    sb_4d_last_inspection_at: OptionalNullable[str] = UNSET
    """Recorded SB 4-D inspection state."""

    data_provenance: OptionalNullable[Any] = UNSET
    """Per-field source attribution for the record."""

    last_refreshed_at: OptionalNullable[RFC3339DateTime] = UNSET
    """When the record was last refreshed from source."""

    ai_summary: OptionalNullable[str] = UNSET
    """Generated plain-language summary, where one exists."""

    ai_summary_generated_at: OptionalNullable[str] = UNSET
    """Generated plain-language summary, where one exists."""


class DatumCommonelementsComAssociationsApiDict(TypedDict):
    id: NotRequired[UUID]
    canonical_name: NotRequired[str]
    sim: NotRequired[float]
    resolved_via: NotRequired[Any]
    matched_address: NotRequired[str | None]
    match_confidence: NotRequired[str | None]
    unit_count: NotRequired[float | None]
    county: NotRequired[str | None]
    state: NotRequired[str | None]
    sunbiz_corp_id: NotRequired[str | None]
    registration_status: NotRequired[str | None]
    registered_at: NotRequired[RFC3339DateTime | None]
    last_filing_at: NotRequired[RFC3339DateTime | None]
    cam_firm_name: NotRequired[str | None]
    cam_license_number: NotRequired[str | None]
    cam_license_status: NotRequired[str | None]
    association_type: NotRequired[str | None]
    sb_4d_applicable: NotRequired[bool | None]
    sb_4d_inspection_status: NotRequired[str | None]
    sb_4d_last_inspection_at: NotRequired[str | None]
    data_provenance: NotRequired[Any | None]
    last_refreshed_at: NotRequired[RFC3339DateTime | None]
    ai_summary: NotRequired[str | None]
    ai_summary_generated_at: NotRequired[str | None]
