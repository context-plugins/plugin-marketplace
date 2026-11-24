from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bill_user_approvals_response_dto import BillUserApprovalsResponseDto, BillUserApprovalsResponseDtoDict


class ListBillUserApprovalsResponseDto(SdkBaseModel):
    """List Bill User Approvals Response Dto."""

    bills: Optional[list[BillUserApprovalsResponseDto]] = UNSET
    """List of bills pending approval"""


class ListBillUserApprovalsResponseDtoDict(TypedDict):
    bills: NotRequired[list[BillUserApprovalsResponseDtoDict]]
