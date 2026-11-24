from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UserInfo(SdkBaseModel):
    """User information in API responses."""

    id: str
    email: str
    full_name: str


class UserInfoDict(TypedDict):
    id: str
    email: str
    full_name: str
