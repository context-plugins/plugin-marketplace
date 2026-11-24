from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .user import User, UserDict


class LoginResponse(SdkBaseModel):
    """Authentication response containing the user's authtoken."""

    user: Optional[User] = UNSET
    """A Contentstack user account."""


class LoginResponseDict(TypedDict):
    user: NotRequired[UserDict]
