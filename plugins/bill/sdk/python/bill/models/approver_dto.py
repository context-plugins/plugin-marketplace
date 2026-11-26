from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.approver_status_dto import ApproverStatusDtoOrStr


class ApproverDto(SdkBaseModel):
    """Approver DTO."""

    user_id: str = Field(alias="userId")
    """BILL-generated ID of the individual user or approval group.
    * **Individual user**: The value begins with ``006``.
    * **Approval group**: The value begins with ``agp``."""

    status: Optional[ApproverStatusDtoOrStr] = UNSET
    approver_order: Optional[float] = Field(default=UNSET, alias="approverOrder")
    """Bill approval order."""

    status_changed_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="statusChangedTime")
    """Status change date and time"""


class ApproverDtoDict(TypedDict):
    user_id: str
    status: NotRequired[ApproverStatusDtoOrStr]
    approver_order: NotRequired[float]
    status_changed_time: NotRequired[RFC3339DateTime]
