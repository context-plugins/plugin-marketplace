from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .item import Item, ItemDict
from .social_account import SocialAccount, SocialAccountDict


class ApiV1AnalyticsSocialAccountResponse(SdkBaseModel):
    social_account: SocialAccount = Field(alias="socialAccount")
    items: list[Item]


class ApiV1AnalyticsSocialAccountResponseDict(TypedDict):
    social_account: SocialAccountDict
    items: list[ItemDict]
