from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .user import User, UserDict


class UsersResponse(SdkBaseModel):
    users: Optional[list[User]] = UNSET


class UsersResponseDict(TypedDict):
    users: NotRequired[list[UserDict]]
