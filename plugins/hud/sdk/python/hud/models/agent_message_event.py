from __future__ import annotations

from typing import Literal

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .agent_tool_call import AgentToolCall, AgentToolCallDict


class AgentMessageEvent(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    id: str
    parent_id: Optional[str] = UNSET
    started_at: Optional[RFC3339DateTime] = UNSET
    ended_at: Optional[RFC3339DateTime] = UNSET
    seq: int = 0
    kind: Literal["agent_message"] = "agent_message"
    text: Optional[str] = UNSET
    reasoning: Optional[str] = UNSET
    tool_calls: Optional[list[AgentToolCall]] = UNSET
    finish_reason: Optional[str] = UNSET
    refusal: Optional[str] = UNSET


class AgentMessageEventDict(TypedDict):
    id: str
    parent_id: NotRequired[str]
    started_at: NotRequired[RFC3339DateTime]
    ended_at: NotRequired[RFC3339DateTime]
    seq: NotRequired[int]
    kind: Literal["agent_message"]
    text: NotRequired[str]
    reasoning: NotRequired[str]
    tool_calls: NotRequired[list[AgentToolCallDict]]
    finish_reason: NotRequired[str]
    refusal: NotRequired[str]
