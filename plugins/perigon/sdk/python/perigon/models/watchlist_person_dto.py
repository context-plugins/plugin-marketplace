from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class WatchlistPersonDto(SdkBaseModel):
    """People included in the watchlist."""

    name: OptionalNullable[str] = UNSET
    description: OptionalNullable[str] = UNSET
    wikidata_id: OptionalNullable[str] = Field(default=UNSET, alias="wikidataId")
    aliases: OptionalNullable[list[str]] = UNSET
    query: OptionalNullable[str] = UNSET


class WatchlistPersonDtoDict(TypedDict):
    name: NotRequired[str | None]
    description: NotRequired[str | None]
    wikidata_id: NotRequired[str | None]
    aliases: NotRequired[list[str] | None]
    query: NotRequired[str | None]
