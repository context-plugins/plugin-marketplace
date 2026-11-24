from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .user import User, UserDict


class ListUsersResponse(SdkBaseModel):
    users: Optional[list[User]] = Field(default=UNSET, alias="Users")
    """List of UsersID associated with the specified collection."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """A pagination token to be used with the subsequent request if the response is truncated."""


class ListUsersResponseDict(TypedDict):
    users: NotRequired[list[UserDict]]
    next_token: NotRequired[str]
