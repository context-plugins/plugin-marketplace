from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .watchlist_company import WatchlistCompany, WatchlistCompanyDict
from .watchlist_person import WatchlistPerson, WatchlistPersonDict


class CreateWatchlistParams(SdkBaseModel):
    name: str
    """Unique name for the watchlist within the organization"""

    display_name: OptionalNullable[str] = Field(default=UNSET, alias="displayName")
    """Display name for the watchlist"""

    description: OptionalNullable[str] = UNSET
    """Description of the watchlist"""

    people: list[WatchlistPerson]
    """List of people to include in the watchlist"""

    companies: list[WatchlistCompany]
    """List of companies to include in the watchlist"""

    visible: bool | None = True
    """Whether the watchlist is visible in the UI"""


class CreateWatchlistParamsDict(TypedDict):
    name: str
    display_name: NotRequired[str | None]
    description: NotRequired[str | None]
    people: list[WatchlistPersonDict]
    companies: list[WatchlistCompanyDict]
    visible: NotRequired[bool | None]
