from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .user_list_item import UserListItem, UserListItemDict


class ListUsersResponseBody(SdkBaseModel):
    """Response body for the list users endpoint."""

    users: Optional[list[UserListItem]] = UNSET
    row_count: Optional[int] = Field(default=UNSET, alias="rowCount")
    """The number of returned records."""


class ListUsersResponseBodyDict(TypedDict):
    users: NotRequired[list[UserListItemDict]]
    row_count: NotRequired[int]
