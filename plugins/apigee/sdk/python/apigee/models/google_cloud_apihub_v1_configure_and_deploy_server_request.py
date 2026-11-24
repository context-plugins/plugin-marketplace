from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_mcp_server_config1 import (
    GoogleCloudApihubV1McpServerConfig1,
    GoogleCloudApihubV1McpServerConfig1Dict,
)


class GoogleCloudApihubV1ConfigureAndDeployServerRequest(SdkBaseModel):
    """Request message for ApiHub.ConfigureAndDeployServer."""

    mcp_server_config: Optional[GoogleCloudApihubV1McpServerConfig1] = Field(default=UNSET, alias="mcpServerConfig")
    """MCP (Model Context Protocol) server configuration."""


class GoogleCloudApihubV1ConfigureAndDeployServerRequestDict(TypedDict):
    mcp_server_config: NotRequired[GoogleCloudApihubV1McpServerConfig1Dict]
