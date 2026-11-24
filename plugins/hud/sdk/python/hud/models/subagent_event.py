from __future__ import annotations

from typing import Any, Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class SubagentEvent(SdkBaseModel):
    """A nested-agent invocation (one ``AgentTool.__call__``)."""

    id: str
    parent_id: Optional[str] = UNSET
    started_at: Optional[RFC3339DateTime] = UNSET
    ended_at: Optional[RFC3339DateTime] = UNSET
    seq: int = 0
    kind: Literal["subagent"] = "subagent"
    agent_name: str
    arguments: Optional[Any] = UNSET
    result: Optional[Any] = UNSET


class SubagentEventDict(TypedDict):
    id: str
    parent_id: NotRequired[str]
    started_at: NotRequired[RFC3339DateTime]
    ended_at: NotRequired[RFC3339DateTime]
    seq: NotRequired[int]
    kind: Literal["subagent"]
    agent_name: str
    arguments: NotRequired[Any]
    result: NotRequired[Any]
