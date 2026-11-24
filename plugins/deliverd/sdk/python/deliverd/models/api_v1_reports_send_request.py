from __future__ import annotations

from pydantic import EmailStr, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1ReportsSendRequest(SdkBaseModel):
    to: list[EmailStr]
    message: Optional[str] = UNSET
    """A covering note, shown above the link"""

    allow_comments: Optional[bool] = Field(default=UNSET, alias="allowComments")
    """Let recipients comment back. True when omitted"""

    expires_in_days: Optional[int] = Field(default=UNSET, alias="expiresInDays")
    """Revoke their access automatically after this long"""


class ApiV1ReportsSendRequestDict(TypedDict):
    to: list[EmailStr]
    message: NotRequired[str]
    allow_comments: NotRequired[bool]
    expires_in_days: NotRequired[int]
