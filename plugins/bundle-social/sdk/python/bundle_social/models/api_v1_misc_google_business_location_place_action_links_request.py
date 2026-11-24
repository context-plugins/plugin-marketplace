from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .place_action_link import PlaceActionLink, PlaceActionLinkDict


class ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    team_id: str = Field(alias="teamId")
    place_action_link: PlaceActionLink = Field(alias="placeActionLink")


class ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequestDict(TypedDict):
    team_id: str
    place_action_link: PlaceActionLinkDict
