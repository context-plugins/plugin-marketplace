from __future__ import annotations

from typing import Any
from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .resolved_agent import ResolvedAgent, ResolvedAgentDict


class JobMetadata(SdkBaseModel):
    resolved_agents: Optional[list[ResolvedAgent]] = UNSET
    sdk_agent_params: Optional[Any] = UNSET
    parent_job_id: Optional[UUID] = UNSET


class JobMetadataDict(TypedDict):
    resolved_agents: NotRequired[list[ResolvedAgentDict]]
    sdk_agent_params: NotRequired[Any]
    parent_job_id: NotRequired[UUID]
