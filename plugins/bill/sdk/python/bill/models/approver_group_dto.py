from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .group_users import GroupUsers, GroupUsersDict


class ApproverGroupDto(SdkBaseModel):
    """Groups containing users."""

    group_name: Optional[str] = Field(default=UNSET, alias="groupName")
    """Approval group name"""

    group_id: Optional[str] = Field(default=UNSET, alias="groupId")
    """BILL-generated ID of the approval group. The value begins with ``agp``."""

    users: Optional[list[GroupUsers]] = UNSET
    """Approval group user information"""


class ApproverGroupDtoDict(TypedDict):
    group_name: NotRequired[str]
    group_id: NotRequired[str]
    users: NotRequired[list[GroupUsersDict]]
