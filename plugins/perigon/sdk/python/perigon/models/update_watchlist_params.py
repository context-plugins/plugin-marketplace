from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .watchlist_company import WatchlistCompany, WatchlistCompanyDict
from .watchlist_person import WatchlistPerson, WatchlistPersonDict


class UpdateWatchlistParams(SdkBaseModel):
    name: OptionalNullable[str] = UNSET
    """New name for the watchlist"""

    display_name: OptionalNullable[str] = Field(default=UNSET, alias="displayName")
    """New display name for the watchlist"""

    description: OptionalNullable[str] = UNSET
    """New description for the watchlist"""

    people: OptionalNullable[list[WatchlistPerson]] = UNSET
    """Updated list of people to include in the watchlist"""

    companies: OptionalNullable[list[WatchlistCompany]] = UNSET
    """Updated list of companies to include in the watchlist"""

    visible: OptionalNullable[bool] = UNSET
    """Whether the watchlist is visible in the UI"""


class UpdateWatchlistParamsDict(TypedDict):
    name: NotRequired[str | None]
    display_name: NotRequired[str | None]
    description: NotRequired[str | None]
    people: NotRequired[list[WatchlistPersonDict] | None]
    companies: NotRequired[list[WatchlistCompanyDict] | None]
    visible: NotRequired[bool | None]
