from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.action_deliverd_dev_governance_api import ActionDeliverdDevGovernanceApiOrStr


class ApiV1GovernanceAuthorityEvaluateRequest(SdkBaseModel):
    action: ActionDeliverdDevGovernanceApiOrStr
    agent_id: Optional[UUID] = Field(default=UNSET, alias="agentId")
    """An agent of this organisation; the requesting agent when omitted"""


class ApiV1GovernanceAuthorityEvaluateRequestDict(TypedDict):
    action: ActionDeliverdDevGovernanceApiOrStr
    agent_id: NotRequired[UUID]
