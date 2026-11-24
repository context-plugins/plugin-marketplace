from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class WatchlistCompany(SdkBaseModel):
    """Updated list of companies to include in the watchlist"""

    name: OptionalNullable[str] = UNSET
    description: OptionalNullable[str] = UNSET
    id: OptionalNullable[str] = UNSET
    domain: OptionalNullable[str] = UNSET
    aliases: OptionalNullable[list[str]] = UNSET
    query: OptionalNullable[str] = UNSET


class WatchlistCompanyDict(TypedDict):
    name: NotRequired[str | None]
    description: NotRequired[str | None]
    id: NotRequired[str | None]
    domain: NotRequired[str | None]
    aliases: NotRequired[list[str] | None]
    query: NotRequired[str | None]
