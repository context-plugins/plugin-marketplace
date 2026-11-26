from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .agent import Agent, AgentDict


class AgentListResult(SdkBaseModel):
    count: Optional[int] = UNSET
    agents: Optional[list[Agent]] = UNSET
    note: Optional[str] = UNSET


class AgentListResultDict(TypedDict):
    count: NotRequired[int]
    agents: NotRequired[list[AgentDict]]
    note: NotRequired[str]
