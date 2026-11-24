from __future__ import annotations

from typing import Any, Literal

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class ToolCallEvent(SdkBaseModel):
    """A single MCP tool call with its result merged in.

    Mirrors what FastMCP returns: ``result_data`` preserves ``structuredContent`` when present; otherwise text content
    is unwrapped into ``result_text`` so renderers don't have to dig."""

    model_config = ConfigDict(extra="forbid")

    id: str
    parent_id: Optional[str] = UNSET
    started_at: Optional[RFC3339DateTime] = UNSET
    ended_at: Optional[RFC3339DateTime] = UNSET
    seq: int = 0
    kind: Literal["tool_call"] = "tool_call"
    method: str
    tool_call_id: Optional[str] = UNSET
    tool_name: Optional[str] = UNSET
    arguments: Optional[Any] = UNSET
    result_text: Optional[str] = UNSET
    result_data: Optional[Any] = UNSET
    error: Optional[str] = UNSET
    is_screenshot: bool = False
    screenshot_url: Optional[str] = UNSET
    screenshot_urls: Optional[list[str]] = UNSET


class ToolCallEventDict(TypedDict):
    id: str
    parent_id: NotRequired[str]
    started_at: NotRequired[RFC3339DateTime]
    ended_at: NotRequired[RFC3339DateTime]
    seq: NotRequired[int]
    kind: Literal["tool_call"]
    method: str
    tool_call_id: NotRequired[str]
    tool_name: NotRequired[str]
    arguments: NotRequired[Any]
    result_text: NotRequired[str]
    result_data: NotRequired[Any]
    error: NotRequired[str]
    is_screenshot: NotRequired[bool]
    screenshot_url: NotRequired[str]
    screenshot_urls: NotRequired[list[str]]
