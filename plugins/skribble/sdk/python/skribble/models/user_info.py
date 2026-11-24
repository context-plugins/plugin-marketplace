from __future__ import annotations

from pydantic import EmailStr
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UserInfo(SdkBaseModel):
    """Information about the user observer."""

    id: Optional[str] = UNSET
    """User ID."""

    email: Optional[EmailStr] = UNSET
    """User email address."""


class UserInfoDict(TypedDict):
    id: NotRequired[str]
    email: NotRequired[EmailStr]
