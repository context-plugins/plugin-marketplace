from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .item2 import Item2, Item2Dict
from .social_account import SocialAccount, SocialAccountDict


class ApiV1AnalyticsSocialAccountRawResponse(SdkBaseModel):
    social_account: SocialAccount = Field(alias="socialAccount")
    items: list[Item2]


class ApiV1AnalyticsSocialAccountRawResponseDict(TypedDict):
    social_account: SocialAccountDict
    items: list[Item2Dict]
