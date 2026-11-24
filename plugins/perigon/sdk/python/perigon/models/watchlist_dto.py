from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .watchlist_company_dto import WatchlistCompanyDto, WatchlistCompanyDtoDict
from .watchlist_person_dto import WatchlistPersonDto, WatchlistPersonDtoDict


class WatchlistDto(SdkBaseModel):
    """Watchlist of people and companies for use with monitors."""

    id: OptionalNullable[int] = UNSET
    """Numeric identifier for the watchlist."""

    created_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="createdAt")
    """Date and time the watchlist was created, in ISO 8601 format."""

    updated_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="updatedAt")
    """Date and time the watchlist was last updated, in ISO 8601 format."""

    name: OptionalNullable[str] = UNSET
    """Unique slug name for the watchlist."""

    display_name: OptionalNullable[str] = Field(default=UNSET, alias="displayName")
    """Human-readable display name."""

    description: OptionalNullable[str] = UNSET
    """Optional description of the watchlist."""

    people: OptionalNullable[list[WatchlistPersonDto]] = UNSET
    """People included in the watchlist."""

    companies: OptionalNullable[list[WatchlistCompanyDto]] = UNSET
    """Companies included in the watchlist."""

    organization_id: OptionalNullable[int] = Field(default=UNSET, alias="organizationId")
    """Owning organization ID when the watchlist is private."""

    visible: OptionalNullable[bool] = UNSET
    """Whether the watchlist is publicly visible."""


class WatchlistDtoDict(TypedDict):
    id: NotRequired[int | None]
    created_at: NotRequired[RFC3339DateTime | None]
    updated_at: NotRequired[RFC3339DateTime | None]
    name: NotRequired[str | None]
    display_name: NotRequired[str | None]
    description: NotRequired[str | None]
    people: NotRequired[list[WatchlistPersonDtoDict] | None]
    companies: NotRequired[list[WatchlistCompanyDtoDict] | None]
    organization_id: NotRequired[int | None]
    visible: NotRequired[bool | None]
