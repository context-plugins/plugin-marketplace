from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .social_account import SocialAccount, SocialAccountDict


class ApiV1SocialAccountProfileRefreshResponse(SdkBaseModel):
    success: bool
    message: Optional[str] = UNSET
    social_account_id: str = Field(alias="socialAccountId")
    social_account: SocialAccount = Field(alias="socialAccount")
    refreshed_at: str = Field(alias="refreshedAt")
    limit: int
    used: int
    remaining: int
    window_seconds: int = Field(alias="windowSeconds")


class ApiV1SocialAccountProfileRefreshResponseDict(TypedDict):
    success: bool
    message: NotRequired[str]
    social_account_id: str
    social_account: SocialAccountDict
    refreshed_at: str
    limit: int
    used: int
    remaining: int
    window_seconds: int
