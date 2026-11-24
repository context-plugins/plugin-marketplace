from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .user import User, UserDict


class UserListResponse(SdkBaseModel):
    """Paginated response containing user records"""

    total_count: Optional[int] = Field(default=UNSET, alias="totalCount")
    """Total number of users"""

    users: Optional[list[User]] = UNSET


class UserListResponseDict(TypedDict):
    total_count: NotRequired[int]
    users: NotRequired[list[UserDict]]
