from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .agent_turn_specification import AgentTurnSpecification, AgentTurnSpecificationDict
from .user_turn_specification import UserTurnSpecification, UserTurnSpecificationDict


class TurnSpecification(SdkBaseModel):
    agent_turn: Optional[AgentTurnSpecification] = Field(default=UNSET, alias="agentTurn")
    user_turn: Optional[UserTurnSpecification] = Field(default=UNSET, alias="userTurn")


class TurnSpecificationDict(TypedDict):
    agent_turn: NotRequired[AgentTurnSpecificationDict]
    user_turn: NotRequired[UserTurnSpecificationDict]
