from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1PlaybooksApprovalRequest(SdkBaseModel):
    approvers: Optional[list[str]] = UNSET
    """Emails, names or groups; the organisation's administrators when omitted"""

    note: Optional[str] = UNSET


class ApiV1PlaybooksApprovalRequestDict(TypedDict):
    approvers: NotRequired[list[str]]
    note: NotRequired[str]
