from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class Data1CommonelementsComProfessionalsAndLicensesApi(SdkBaseModel):
    id: Optional[UUID] = UNSET
    """Association organization id."""

    name: Optional[str] = UNSET
    """Association legal name."""

    subtype: OptionalNullable[str] = UNSET
    """"hoa", "condo", or "coop"."""

    city: OptionalNullable[str] = UNSET
    """Association location."""

    state: OptionalNullable[str] = UNSET
    """Association location."""

    directory_slug: OptionalNullable[str] = UNSET
    """Slug for the public directory page."""

    source: Optional[str] = UNSET
    """How this row was resolved: "relationship:<type>" for a confirmed graph edge (managed_by, under_contract,
    represented_by), or "manager_view:<source>" for a name match against the public management registry."""


class Data1CommonelementsComProfessionalsAndLicensesApiDict(TypedDict):
    id: NotRequired[UUID]
    name: NotRequired[str]
    subtype: NotRequired[str | None]
    city: NotRequired[str | None]
    state: NotRequired[str | None]
    directory_slug: NotRequired[str | None]
    source: NotRequired[str]
