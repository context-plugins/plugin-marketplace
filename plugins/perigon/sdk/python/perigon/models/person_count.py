from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class PersonCount(SdkBaseModel):
    """People associated with the story and their article counts."""

    wikidata_id: OptionalNullable[str] = Field(default=UNSET, alias="wikidataId")
    """Wikidata identifier for the person."""

    name: OptionalNullable[str] = UNSET
    """Person name."""

    count: OptionalNullable[int] = UNSET
    """Number of story articles mentioning the person."""


class PersonCountDict(TypedDict):
    wikidata_id: NotRequired[str | None]
    name: NotRequired[str | None]
    count: NotRequired[int | None]
