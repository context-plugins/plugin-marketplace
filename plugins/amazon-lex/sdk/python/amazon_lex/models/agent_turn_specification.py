from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AgentTurnSpecification(SdkBaseModel):
    agent_prompt: str = Field(alias="agentPrompt")
    """The agent prompt for the agent turn in a test set."""


class AgentTurnSpecificationDict(TypedDict):
    agent_prompt: str
