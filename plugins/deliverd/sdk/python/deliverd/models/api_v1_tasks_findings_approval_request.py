from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class ApiV1TasksFindingsApprovalRequest(SdkBaseModel):
    approvers: Optional[list[str]] = UNSET
    """Emails, names or groups; the organisation's administrators when omitted"""

    note: Optional[str] = UNSET
    expires_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="expiresAt")


class ApiV1TasksFindingsApprovalRequestDict(TypedDict):
    approvers: NotRequired[list[str]]
    note: NotRequired[str]
    expires_at: NotRequired[RFC3339DateTime]
