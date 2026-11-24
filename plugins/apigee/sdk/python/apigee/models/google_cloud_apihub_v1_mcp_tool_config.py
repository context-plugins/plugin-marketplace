from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_operation_config2 import (
    GoogleCloudApihubV1OperationConfig2,
    GoogleCloudApihubV1OperationConfig2Dict,
)


class GoogleCloudApihubV1McpToolConfig(SdkBaseModel):
    """A tool exposed by the MCP server. Each tool wraps exactly one API Hub operation under a caller-supplied
    identifier."""

    tool_id: Optional[str] = Field(default=UNSET, alias="toolId")
    """Required. Caller-supplied identifier for the tool; each tool must have a unique identifier. This will be by used
    by agents to invoke the tool. Tool ID must be unique across all tools in the given MCP server configuration."""

    description: Optional[str] = UNSET
    """Required. Description of what the tool does and how it is used. Description serves as key reference for the agent
    to know about the tool capabilities."""

    operation: Optional[GoogleCloudApihubV1OperationConfig2] = UNSET
    """Required. The API Hub operation this tool exposes. Each tool wraps exactly one operation; callers that want to
    expose multiple operations should declare multiple tools."""


class GoogleCloudApihubV1McpToolConfigDict(TypedDict):
    tool_id: NotRequired[str]
    description: NotRequired[str]
    operation: NotRequired[GoogleCloudApihubV1OperationConfig2Dict]
