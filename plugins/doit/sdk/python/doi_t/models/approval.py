from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Approval(SdkBaseModel):
    """Approval configuration without recipients (recipients are tenant-scoped and removed at export)."""

    required: Optional[bool] = UNSET
    message: Optional[str] = UNSET
    reject_approval_after_time: Optional[bool] = Field(default=UNSET, alias="rejectApprovalAfterTime")
    reject_time_value: Optional[int] = Field(default=UNSET, alias="rejectTimeValue")
    reject_time_unit: Optional[str] = Field(default=UNSET, alias="rejectTimeUnit")


class ApprovalDict(TypedDict):
    required: NotRequired[bool]
    message: NotRequired[str]
    reject_approval_after_time: NotRequired[bool]
    reject_time_value: NotRequired[int]
    reject_time_unit: NotRequired[str]
