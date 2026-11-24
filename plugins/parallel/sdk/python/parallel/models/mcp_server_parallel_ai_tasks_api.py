from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type4_parallel_ai_tasks_api import Type4ParallelAiTasksApi, Type4ParallelAiTasksApiOrStr


class McpServerParallelAiTasksApi(SdkBaseModel):
    """MCP server configuration."""

    type_: Type4ParallelAiTasksApiOrStr = Field(default=Type4ParallelAiTasksApi.URL, alias="type")
    """Type of MCP server being configured. Always ``url``."""

    url: str
    """URL of the MCP server."""

    headers: Optional[dict[str, str]] = UNSET
    """Headers for the MCP server."""

    name: str
    """Name of the MCP server."""

    allowed_tools: Optional[list[str]] = UNSET
    """List of allowed tools for the MCP server."""


class McpServerParallelAiTasksApiDict(TypedDict):
    type_: NotRequired[Type4ParallelAiTasksApiOrStr]
    url: str
    headers: NotRequired[dict[str, str]]
    name: str
    allowed_tools: NotRequired[list[str]]
