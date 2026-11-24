from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.actor_role import ActorRoleOrStr
from .enums.reimbursement_status import ReimbursementStatusOrStr


class StatusHistory(SdkBaseModel):
    """DTO representing an action that happened on a reimbursement from the Spend API."""

    actor_id: Optional[str] = Field(default=UNSET, alias="actorId")
    """BILL-generated ID of the user that approved or denied the reimbursement"""

    actor_role: Optional[ActorRoleOrStr] = Field(default=UNSET, alias="actorRole")
    occurred_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="occurredTime")
    """Reimbursement action date and time"""

    note: Optional[str] = UNSET
    """Reimbursement action note"""

    status: Optional[ReimbursementStatusOrStr] = UNSET


class StatusHistoryDict(TypedDict):
    actor_id: NotRequired[str]
    actor_role: NotRequired[ActorRoleOrStr]
    occurred_time: NotRequired[RFC3339DateTime]
    note: NotRequired[str]
    status: NotRequired[ReimbursementStatusOrStr]
