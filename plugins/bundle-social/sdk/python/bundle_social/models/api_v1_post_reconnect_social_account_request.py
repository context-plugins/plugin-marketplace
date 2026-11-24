from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type import TypeOrStr


class ApiV1PostReconnectSocialAccountRequest(SdkBaseModel):
    team_id: str = Field(alias="teamId")
    type_: TypeOrStr = Field(alias="type")
    post_ids: Optional[list[str]] = Field(default=UNSET, alias="postIds")


class ApiV1PostReconnectSocialAccountRequestDict(TypedDict):
    team_id: str
    type_: TypeOrStr
    post_ids: NotRequired[list[str]]
