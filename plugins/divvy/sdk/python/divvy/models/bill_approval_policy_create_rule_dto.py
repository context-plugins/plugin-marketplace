from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.rule_key_create_dto import RuleKeyCreateDtoOrStr
from .enums.rule_operator_create_dto import RuleOperatorCreateDtoOrStr


class BillApprovalPolicyCreateRuleDto(SdkBaseModel):
    """Rules for a bill approval policy."""

    key: Optional[RuleKeyCreateDtoOrStr] = UNSET
    op: Optional[RuleOperatorCreateDtoOrStr] = UNSET
    values: Optional[list[str]] = UNSET
    """Rule values"""


class BillApprovalPolicyCreateRuleDtoDict(TypedDict):
    key: NotRequired[RuleKeyCreateDtoOrStr]
    op: NotRequired[RuleOperatorCreateDtoOrStr]
    values: NotRequired[list[str]]
