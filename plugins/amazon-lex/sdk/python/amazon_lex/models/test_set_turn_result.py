from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .agent_turn_result import AgentTurnResult, AgentTurnResultDict
from .user_turn_result import UserTurnResult, UserTurnResultDict


class TestSetTurnResult(SdkBaseModel):
    agent: Optional[AgentTurnResult] = UNSET
    user: Optional[UserTurnResult] = UNSET


class TestSetTurnResultDict(TypedDict):
    agent: NotRequired[AgentTurnResultDict]
    user: NotRequired[UserTurnResultDict]
