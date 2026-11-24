from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class PersonHolder(SdkBaseModel):
    """People most strongly associated with the story."""

    wikidata_id: OptionalNullable[str] = Field(default=UNSET, alias="wikidataId")
    """Wikidata identifier for the person."""

    name: OptionalNullable[str] = UNSET
    """Person name."""


class PersonHolderDict(TypedDict):
    wikidata_id: NotRequired[str | None]
    name: NotRequired[str | None]
