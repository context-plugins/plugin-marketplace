from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class WikidataLabelHolder(SdkBaseModel):
    wikidata_id: OptionalNullable[str] = Field(default=UNSET, alias="wikidataId")
    label: OptionalNullable[str] = UNSET


class WikidataLabelHolderDict(TypedDict):
    wikidata_id: NotRequired[str | None]
    label: NotRequired[str | None]
