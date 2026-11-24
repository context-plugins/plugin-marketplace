from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .image_holder import ImageHolder, ImageHolderDict
from .wikidata_date_holder import WikidataDateHolder, WikidataDateHolderDict
from .wikidata_label_holder import WikidataLabelHolder, WikidataLabelHolderDict
from .wikidata_political_party_holder import WikidataPoliticalPartyHolder, WikidataPoliticalPartyHolderDict
from .wikidata_position_holder import WikidataPositionHolder, WikidataPositionHolderDict


class Person(SdkBaseModel):
    wikidata_id: OptionalNullable[str] = Field(default=UNSET, alias="wikidataId")
    created_at: OptionalNullable[str] = Field(default=UNSET, alias="createdAt")
    updated_at: OptionalNullable[str] = Field(default=UNSET, alias="updatedAt")
    name: OptionalNullable[str] = UNSET
    gender: Optional[WikidataLabelHolder] = UNSET
    date_of_birth: Optional[WikidataDateHolder] = Field(default=UNSET, alias="dateOfBirth")
    date_of_death: Optional[WikidataDateHolder] = Field(default=UNSET, alias="dateOfDeath")
    description: OptionalNullable[str] = UNSET
    aliases: OptionalNullable[list[str]] = UNSET
    occupation: OptionalNullable[list[WikidataLabelHolder]] = UNSET
    position: OptionalNullable[list[WikidataPositionHolder]] = UNSET
    political_party: OptionalNullable[list[WikidataPoliticalPartyHolder]] = Field(default=UNSET, alias="politicalParty")
    image: Optional[ImageHolder] = UNSET
    abstract: OptionalNullable[str] = UNSET


class PersonDict(TypedDict):
    wikidata_id: NotRequired[str | None]
    created_at: NotRequired[str | None]
    updated_at: NotRequired[str | None]
    name: NotRequired[str | None]
    gender: NotRequired[WikidataLabelHolderDict]
    date_of_birth: NotRequired[WikidataDateHolderDict]
    date_of_death: NotRequired[WikidataDateHolderDict]
    description: NotRequired[str | None]
    aliases: NotRequired[list[str] | None]
    occupation: NotRequired[list[WikidataLabelHolderDict] | None]
    position: NotRequired[list[WikidataPositionHolderDict] | None]
    political_party: NotRequired[list[WikidataPoliticalPartyHolderDict] | None]
    image: NotRequired[ImageHolderDict]
    abstract: NotRequired[str | None]
