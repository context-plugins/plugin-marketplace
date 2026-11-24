from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class Review(SdkBaseModel):
    r"""Review class for Spend \& Expense Transactions."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the review"""

    is_approved: Optional[bool] = Field(default=UNSET, alias="isApproved")
    """Set as ``true`` if the transaction was approved"""

    note: Optional[str] = UNSET
    """Review note"""

    created_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdTime")
    """Review created date and time"""

    deleted_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="deletedTime")
    """Review deleted date and time (if available)"""

    reviewer_id: Optional[str] = Field(default=UNSET, alias="reviewerId")
    """BILL-generated ID of the user who reviewed the transaction"""

    reviewer_uuid: Optional[str] = Field(default=UNSET, alias="reviewerUuid")
    """BILL-generated UUID of the user who reviewed the transaction"""


class ReviewDict(TypedDict):
    id: NotRequired[str]
    is_approved: NotRequired[bool]
    note: NotRequired[str]
    created_time: NotRequired[RFC3339DateTime]
    deleted_time: NotRequired[RFC3339DateTime]
    reviewer_id: NotRequired[str]
    reviewer_uuid: NotRequired[str]
