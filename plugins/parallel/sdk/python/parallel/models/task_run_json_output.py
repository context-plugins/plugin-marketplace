from __future__ import annotations

from typing import Any, Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .field_basis import FieldBasis, FieldBasisDict
from .mcp_tool_call import McpToolCall, McpToolCallDict


class TaskRunJsonOutput(SdkBaseModel):
    """Output from a task that returns JSON."""

    basis: list[FieldBasis]
    """Basis for each top-level field in the JSON output. Per-list-element basis entries are available only when the
    ``parallel-beta: field-basis-2025-11-25`` header is supplied."""

    type_: Literal["json"] = Field(default="json", alias="type")
    """The type of output being returned, as determined by the output schema of the task spec."""

    mcp_tool_calls: Optional[list[McpToolCall]] = UNSET
    """MCP tool calls made by the task."""

    beta_fields: Optional[Any] = UNSET
    """Deprecated. mcp-server-2025-07-17 is now included directly in the output (e.g. mcp_tool_calls)."""

    content: Any
    """Output from the task as a native JSON object, as determined by the output schema of the task spec."""

    output_schema: Optional[Any] = UNSET
    """Output schema for the Task Run. Populated only if the task was executed with an auto schema."""


class TaskRunJsonOutputDict(TypedDict):
    basis: list[FieldBasisDict]
    type_: Literal["json"]
    mcp_tool_calls: NotRequired[list[McpToolCallDict]]
    beta_fields: NotRequired[Any]
    content: Any
    output_schema: NotRequired[Any]
