from __future__ import annotations

from typing import Any
from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.effect import EffectOrStr
from .rule_deliverd_dev_policies_api import RuleDeliverdDevPoliciesApi, RuleDeliverdDevPoliciesApiDict


class ApiV1PoliciesSimulateResponse(SdkBaseModel):
    effect: EffectOrStr
    rule: RuleDeliverdDevPoliciesApi | None
    reason: str | None
    required_approvals: float = Field(alias="requiredApprovals")
    approvers: list[str]
    expires_in_minutes: float | None = Field(alias="expiresInMinutes")
    escalate_after_minutes: float | None = Field(alias="escalateAfterMinutes")
    policy_version_id: UUID | None = Field(alias="policyVersionId")
    input: dict[str, Any]
    governed: bool


class ApiV1PoliciesSimulateResponseDict(TypedDict):
    effect: EffectOrStr
    rule: RuleDeliverdDevPoliciesApiDict | None
    reason: str | None
    required_approvals: float
    approvers: list[str]
    expires_in_minutes: float | None
    escalate_after_minutes: float | None
    policy_version_id: UUID | None
    input: dict[str, Any]
    governed: bool
