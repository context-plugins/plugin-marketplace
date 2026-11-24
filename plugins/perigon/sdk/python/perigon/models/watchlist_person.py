from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class WatchlistPerson(SdkBaseModel):
    """Updated list of people to include in the watchlist"""

    name: OptionalNullable[str] = UNSET
    description: OptionalNullable[str] = UNSET
    aliases: OptionalNullable[list[str]] = UNSET
    wikidata_id: OptionalNullable[str] = Field(default=UNSET, alias="wikidataId")
    query: OptionalNullable[str] = UNSET


class WatchlistPersonDict(TypedDict):
    name: NotRequired[str | None]
    description: NotRequired[str | None]
    aliases: NotRequired[list[str] | None]
    wikidata_id: NotRequired[str | None]
    query: NotRequired[str | None]
