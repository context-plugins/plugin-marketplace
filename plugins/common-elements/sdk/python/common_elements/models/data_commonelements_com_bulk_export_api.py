from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, OptionalNullable, SdkBaseModel


class DataCommonelementsComBulkExportApi(SdkBaseModel):
    id: Optional[UUID] = UNSET
    """Stable id for this change event."""

    observed_on: Optional[Date] = UNSET
    """Date the change was observed in the source record."""

    organization_id: Optional[UUID] = UNSET
    """The association the change was observed on."""

    organization_name: Optional[UUID] = UNSET
    """The association the change was observed on."""

    state: OptionalNullable[str] = UNSET
    """Location and type of the association."""

    county: OptionalNullable[str] = UNSET
    """Location and type of the association."""

    subtype: OptionalNullable[str] = UNSET
    """Location and type of the association."""

    event_type: Optional[str] = UNSET
    """One of the 13 change kinds."""

    field: Optional[str] = UNSET
    """The part of the record that moved: board_roster, management_company, entity_status, entity_name, or license."""

    old_value: OptionalNullable[str] = UNSET
    """Person-free before/after summaries: firm names for management changes, statuses for registration changes, seat
    counts and canonical titles for board changes. Never an individual's name."""

    new_value: OptionalNullable[str] = UNSET
    """Person-free before/after summaries: firm names for management changes, statuses for registration changes, seat
    counts and canonical titles for board changes. Never an individual's name."""

    magnitude: OptionalNullable[float] = UNSET
    """Relative size of the change, 0 to 1."""


class DataCommonelementsComBulkExportApiDict(TypedDict):
    id: NotRequired[UUID]
    observed_on: NotRequired[Date]
    organization_id: NotRequired[UUID]
    organization_name: NotRequired[UUID]
    state: NotRequired[str | None]
    county: NotRequired[str | None]
    subtype: NotRequired[str | None]
    event_type: NotRequired[str]
    field: NotRequired[str]
    old_value: NotRequired[str | None]
    new_value: NotRequired[str | None]
    magnitude: NotRequired[float | None]
