from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest2(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    team_id: str = Field(alias="teamId")
    name: str


class ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest2Dict(TypedDict):
    team_id: str
    name: str
