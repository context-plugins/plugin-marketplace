from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.bill_approve_deny_action import BillApproveDenyActionOrStr


class BillApproveDenyActionRequestDto(SdkBaseModel):
    """Bill approve/deny action request"""

    bill_id: str = Field(alias="billId")
    """BILL-generated ID of the bill. The value begins with ``00n``."""

    action: BillApproveDenyActionOrStr
    comment: Optional[str] = UNSET
    """Reason of the decision"""


class BillApproveDenyActionRequestDtoDict(TypedDict):
    bill_id: str
    action: BillApproveDenyActionOrStr
    comment: NotRequired[str]
