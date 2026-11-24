from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.field5 import Field5OrStr
from .place_action_link import PlaceActionLink, PlaceActionLinkDict


class ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest1(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    team_id: str = Field(alias="teamId")
    place_action_link: PlaceActionLink = Field(alias="placeActionLink")
    name: str
    fields: list[Field5OrStr]


class ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest1Dict(TypedDict):
    team_id: str
    place_action_link: PlaceActionLinkDict
    name: str
    fields: list[Field5OrStr]
