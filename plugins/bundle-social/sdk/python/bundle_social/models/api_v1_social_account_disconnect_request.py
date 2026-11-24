from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.type import TypeOrStr


class ApiV1SocialAccountDisconnectRequest(SdkBaseModel):
    type_: TypeOrStr = Field(alias="type")
    team_id: str = Field(alias="teamId")


class ApiV1SocialAccountDisconnectRequestDict(TypedDict):
    type_: TypeOrStr
    team_id: str
