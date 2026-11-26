from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.approver_type import ApproverTypeOrStr
from .enums.transaction_reviewer_status_type import TransactionReviewerStatusTypeOrStr


class Reviewer(SdkBaseModel):
    r"""Spend \& Expense transactions reviewer information."""

    approver_type: Optional[ApproverTypeOrStr] = Field(default=UNSET, alias="approverType")
    reviewed_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="reviewedTime")
    """Transaction review date and time"""

    status: Optional[TransactionReviewerStatusTypeOrStr] = UNSET
    user_id: Optional[str] = Field(default=UNSET, alias="userId")
    """BILL-generated ID of the user assigned to review the transaction"""

    user_uuid: Optional[str] = Field(default=UNSET, alias="userUuid")
    """BILL-generated UUID of the user assigned to review the transaction"""

    user_name: Optional[str] = Field(default=UNSET, alias="userName")
    """Display name of the user assigned to review the transaction"""


class ReviewerDict(TypedDict):
    approver_type: NotRequired[ApproverTypeOrStr]
    reviewed_time: NotRequired[RFC3339DateTime]
    status: NotRequired[TransactionReviewerStatusTypeOrStr]
    user_id: NotRequired[str]
    user_uuid: NotRequired[str]
    user_name: NotRequired[str]
