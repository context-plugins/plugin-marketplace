from __future__ import annotations

from typing import Any

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AgentToolCall(SdkBaseModel):
    """A tool invocation embedded inside an assistant message.

    Distinct from ``ToolCallEvent``: this is the *intent* the agent surfaced in its response, before the MCP call
    actually happened. The matching ``ToolCallEvent`` carries the result."""

    model_config = ConfigDict(extra="forbid")

    tool_call_id: Optional[str] = UNSET
    name: str
    arguments: Optional[Any] = UNSET
    subagent_event_id: Optional[str] = UNSET


class AgentToolCallDict(TypedDict):
    tool_call_id: NotRequired[str]
    name: str
    arguments: NotRequired[Any]
    subagent_event_id: NotRequired[str]
