from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .bill_approval_policy_create_rule_dto import BillApprovalPolicyCreateRuleDto, BillApprovalPolicyCreateRuleDtoDict


class BillApprovalPolicyRequestDto(SdkBaseModel):
    """Create a bill approval policy"""

    policy_name: str = Field(alias="policyName")
    """Bill approval policy name"""

    rules: list[BillApprovalPolicyCreateRuleDto]
    """Bill approval policy rules. You can set multiple rules for a policy.

    **Note**: Policy rules are applied in the specified order."""

    approvers: list[str]
    """List of approvers. For each approver, set the BILL-generated ID of the user. The value begins with ``006``.

    **Note**: BILL requests approvals in the specified order."""


class BillApprovalPolicyRequestDtoDict(TypedDict):
    policy_name: str
    rules: list[BillApprovalPolicyCreateRuleDtoDict]
    approvers: list[str]
