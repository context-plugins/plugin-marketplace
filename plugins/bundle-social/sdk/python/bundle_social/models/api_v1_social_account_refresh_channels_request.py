from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.type7_bundle_social_social_account_api import Type7BundleSocialSocialAccountApiOrStr


class ApiV1SocialAccountRefreshChannelsRequest(SdkBaseModel):
    type_: Type7BundleSocialSocialAccountApiOrStr = Field(alias="type")
    team_id: str = Field(alias="teamId")


class ApiV1SocialAccountRefreshChannelsRequestDict(TypedDict):
    type_: Type7BundleSocialSocialAccountApiOrStr
    team_id: str
