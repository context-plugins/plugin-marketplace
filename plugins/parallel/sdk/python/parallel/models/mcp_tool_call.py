from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class McpToolCall(SdkBaseModel):
    """Result of an MCP tool call."""

    tool_call_id: str
    """Identifier for the tool call."""

    server_name: str
    """Name of the MCP server."""

    tool_name: str
    """Name of the tool being called."""

    arguments: str
    """Arguments used to call the MCP tool."""

    content: Optional[str] = UNSET
    """Output received from the tool call, if successful."""

    error: Optional[str] = UNSET
    """Error message if the tool call failed."""


class McpToolCallDict(TypedDict):
    tool_call_id: str
    server_name: str
    tool_name: str
    arguments: str
    content: NotRequired[str]
    error: NotRequired[str]
