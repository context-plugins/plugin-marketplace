from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PersonSearchItem(SdkBaseModel):
    person_id: UUID
    """Stable UUID key for this person. Use with ``GET /persons/{personId}/connections``."""

    display_name: str | None
    """Full display name of the person."""

    birth_year: int | None
    """Year of birth when known (derived from registry data; full birth date is not exposed). ``null`` if
    unavailable."""

    company_count: int
    """Number of distinct companies this person is linked to."""


class PersonSearchItemDict(TypedDict):
    person_id: UUID
    display_name: str | None
    birth_year: int | None
    company_count: int
