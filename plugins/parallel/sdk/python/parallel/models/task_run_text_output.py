from __future__ import annotations

from typing import Any, Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .field_basis import FieldBasis, FieldBasisDict
from .mcp_tool_call import McpToolCall, McpToolCallDict


class TaskRunTextOutput(SdkBaseModel):
    """Output from a task that returns text."""

    basis: list[FieldBasis]
    """Basis for the output. The basis has a single field 'output'."""

    type_: Literal["text"] = Field(default="text", alias="type")
    """The type of output being returned, as determined by the output schema of the task spec."""

    mcp_tool_calls: Optional[list[McpToolCall]] = UNSET
    """MCP tool calls made by the task."""

    beta_fields: Optional[Any] = UNSET
    """Deprecated. mcp-server-2025-07-17 is now included directly in the output (e.g. mcp_tool_calls)."""

    content: str
    """Text output from the task."""


class TaskRunTextOutputDict(TypedDict):
    basis: list[FieldBasisDict]
    type_: Literal["text"]
    mcp_tool_calls: NotRequired[list[McpToolCallDict]]
    beta_fields: NotRequired[Any]
    content: str
