from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1MiscGoogleBusinessMediaRequest1(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    team_id: str = Field(alias="teamId")
    media_name: str = Field(alias="mediaName")


class ApiV1MiscGoogleBusinessMediaRequest1Dict(TypedDict):
    team_id: str
    media_name: str
