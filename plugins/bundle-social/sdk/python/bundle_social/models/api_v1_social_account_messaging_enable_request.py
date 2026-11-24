from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.type9 import Type9OrStr


class ApiV1SocialAccountMessagingEnableRequest(SdkBaseModel):
    team_id: str = Field(alias="teamId")
    type_: Type9OrStr = Field(alias="type")


class ApiV1SocialAccountMessagingEnableRequestDict(TypedDict):
    team_id: str
    type_: Type9OrStr
