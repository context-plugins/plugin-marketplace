from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.bill_approval_rule_operator_response import BillApprovalRuleOperatorResponseOrStr
from .enums.rule_key_response import RuleKeyResponseOrStr
from .rule_value_dto import RuleValueDto, RuleValueDtoDict


class BillApprovalPolicyRuleResponseDto(SdkBaseModel):
    """Rules for a bill approval policy."""

    key: Optional[RuleKeyResponseOrStr] = UNSET
    op: Optional[BillApprovalRuleOperatorResponseOrStr] = UNSET
    values: Optional[list[RuleValueDto]] = UNSET
    """Rule values"""


class BillApprovalPolicyRuleResponseDtoDict(TypedDict):
    key: NotRequired[RuleKeyResponseOrStr]
    op: NotRequired[BillApprovalRuleOperatorResponseOrStr]
    values: NotRequired[list[RuleValueDtoDict]]
