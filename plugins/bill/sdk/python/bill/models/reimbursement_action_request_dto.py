from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.reimbursement_action_type import ReimbursementActionTypeOrStr


class ReimbursementActionRequestDto(SdkBaseModel):
    """Approve or deny a reimbursement"""

    action: ReimbursementActionTypeOrStr
    note: Optional[str] = UNSET
    """Reimbursement action note"""


class ReimbursementActionRequestDtoDict(TypedDict):
    action: ReimbursementActionTypeOrStr
    note: NotRequired[str]
