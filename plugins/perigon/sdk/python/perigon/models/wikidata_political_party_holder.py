from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .wikidata_date_holder import WikidataDateHolder, WikidataDateHolderDict


class WikidataPoliticalPartyHolder(SdkBaseModel):
    wikidata_id: OptionalNullable[str] = Field(default=UNSET, alias="wikidataId")
    label: OptionalNullable[str] = UNSET
    start_time: Optional[WikidataDateHolder] = Field(default=UNSET, alias="startTime")
    end_time: Optional[WikidataDateHolder] = Field(default=UNSET, alias="endTime")


class WikidataPoliticalPartyHolderDict(TypedDict):
    wikidata_id: NotRequired[str | None]
    label: NotRequired[str | None]
    start_time: NotRequired[WikidataDateHolderDict]
    end_time: NotRequired[WikidataDateHolderDict]
