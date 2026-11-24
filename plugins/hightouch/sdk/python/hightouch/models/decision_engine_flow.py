from __future__ import annotations

from typing import Any

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class DecisionEngineFlow(SdkBaseModel):
    """Decision Engine Flow (Public API)"""

    model_config = ConfigDict(extra="forbid")

    id: str
    name: str
    workspace_id: float = Field(alias="workspaceId")
    decision_engine_id: str = Field(alias="decisionEngineId")
    audience_id: float = Field(alias="audienceId")
    status: str
    config: Optional[dict[str, Any]] = UNSET
    created_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdAt")
    updated_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedAt")


class DecisionEngineFlowDict(TypedDict):
    id: str
    name: str
    workspace_id: float
    decision_engine_id: str
    audience_id: float
    status: str
    config: NotRequired[dict[str, Any]]
    created_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]
