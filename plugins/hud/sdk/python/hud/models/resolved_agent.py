from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ResolvedAgent(SdkBaseModel):
    model_id: Optional[UUID] = UNSET
    model_name: str
    sdk_agent_type: str


class ResolvedAgentDict(TypedDict):
    model_id: NotRequired[UUID]
    model_name: str
    sdk_agent_type: str
