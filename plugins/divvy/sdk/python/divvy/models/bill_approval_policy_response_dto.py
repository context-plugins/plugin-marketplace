from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .approvers import Approvers, ApproversDict
from .bill_approval_policy_rule_response_dto import (
    BillApprovalPolicyRuleResponseDto,
    BillApprovalPolicyRuleResponseDtoDict,
)


class BillApprovalPolicyResponseDto(SdkBaseModel):
    """Response DTO for bill approval policy."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the approval policy. The value is in the ``{organization_id}-{unique_id}`` format."""

    policy_name: Optional[str] = Field(default=UNSET, alias="policyName")
    """Bill approval policy name"""

    status: Optional[str] = UNSET
    """Bill approval policy status"""

    rules: Optional[list[BillApprovalPolicyRuleResponseDto]] = UNSET
    """Bill approval policy rules"""

    approvers: Optional[Approvers] = UNSET


class BillApprovalPolicyResponseDtoDict(TypedDict):
    id: NotRequired[str]
    policy_name: NotRequired[str]
    status: NotRequired[str]
    rules: NotRequired[list[BillApprovalPolicyRuleResponseDtoDict]]
    approvers: NotRequired[ApproversDict]
