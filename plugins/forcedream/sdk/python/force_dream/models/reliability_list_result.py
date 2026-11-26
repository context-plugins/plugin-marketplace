from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .agent1 import Agent1, Agent1Dict


class ReliabilityListResult(SdkBaseModel):
    agents: Optional[list[Agent1]] = UNSET


class ReliabilityListResultDict(TypedDict):
    agents: NotRequired[list[Agent1Dict]]
