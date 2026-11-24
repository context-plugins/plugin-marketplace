from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .approver_group_dto import ApproverGroupDto, ApproverGroupDtoDict
from .approver_user_dto import ApproverUserDto, ApproverUserDtoDict


class BillApproversDto(SdkBaseModel):
    """Approvers for a bill approval policy."""

    users: Optional[list[ApproverUserDto]] = UNSET
    """List of approver users"""

    groups: Optional[list[ApproverGroupDto]] = UNSET
    """List of approval groups"""


class BillApproversDtoDict(TypedDict):
    users: NotRequired[list[ApproverUserDtoDict]]
    groups: NotRequired[list[ApproverGroupDtoDict]]
