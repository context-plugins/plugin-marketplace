from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.type3_bundle_social_social_account_api import Type3BundleSocialSocialAccountApiOrStr


class ApiV1SocialAccountUnsetChannelRequest(SdkBaseModel):
    type_: Type3BundleSocialSocialAccountApiOrStr = Field(alias="type")
    team_id: str = Field(alias="teamId")


class ApiV1SocialAccountUnsetChannelRequestDict(TypedDict):
    type_: Type3BundleSocialSocialAccountApiOrStr
    team_id: str
