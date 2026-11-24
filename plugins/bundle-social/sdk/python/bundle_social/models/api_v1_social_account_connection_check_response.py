from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1SocialAccountConnectionCheckResponse(SdkBaseModel):
    success: bool
    message: Optional[str] = UNSET
    social_account_id: str = Field(alias="socialAccountId")
    checked_at: str = Field(alias="checkedAt")
    limit: int
    used: int
    remaining: int
    window_seconds: int = Field(alias="windowSeconds")


class ApiV1SocialAccountConnectionCheckResponseDict(TypedDict):
    success: bool
    message: NotRequired[str]
    social_account_id: str
    checked_at: str
    limit: int
    used: int
    remaining: int
    window_seconds: int
