from __future__ import annotations

from typing import Any
from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, OptionalNullable, SdkBaseModel


class DatumCommonelementsComChangeFeedApi(SdkBaseModel):
    id: Optional[UUID] = UNSET
    """Stable id for this change event."""

    organization_id: Optional[UUID] = UNSET
    """The association the change was observed on."""

    organization_name: Optional[str] = UNSET
    """Association legal name."""

    directory_slug: OptionalNullable[str] = UNSET
    """Kebab-case slug for the public directory page."""

    subtype: OptionalNullable[str] = UNSET
    """"hoa", "condo", or "coop"."""

    city: OptionalNullable[str] = UNSET
    """City on the association record."""

    county: OptionalNullable[str] = UNSET
    """County on the association record."""

    state: OptionalNullable[str] = UNSET
    """Two-letter state code."""

    unit_count: OptionalNullable[float] = UNSET
    """Units or lots in the community, where known."""

    change_kind: Optional[str] = UNSET
    """One of the 13 kinds listed above."""

    observed_on: Optional[Date] = UNSET
    """Date the change was observed in the source record."""

    magnitude: OptionalNullable[float] = UNSET
    """Relative size of the change, 0 to 1."""

    detail: Optional[Any] = UNSET
    """Person-free summary of what changed. Null keys are stripped, so a given event carries only the relevant subset
    of: seats_affected, titles_affected, board_size, previous_manager, new_manager, previous_status, new_status,
    previous_name, new_name."""


class DatumCommonelementsComChangeFeedApiDict(TypedDict):
    id: NotRequired[UUID]
    organization_id: NotRequired[UUID]
    organization_name: NotRequired[str]
    directory_slug: NotRequired[str | None]
    subtype: NotRequired[str | None]
    city: NotRequired[str | None]
    county: NotRequired[str | None]
    state: NotRequired[str | None]
    unit_count: NotRequired[float | None]
    change_kind: NotRequired[str]
    observed_on: NotRequired[Date]
    magnitude: NotRequired[float | None]
    detail: NotRequired[Any]
