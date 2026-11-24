from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.type import TypeOrStr


class ApiV1SocialAccountConnectionCheckRequest(SdkBaseModel):
    type_: TypeOrStr = Field(alias="type")
    team_id: str = Field(alias="teamId")


class ApiV1SocialAccountConnectionCheckRequestDict(TypedDict):
    type_: TypeOrStr
    team_id: str
