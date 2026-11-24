from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_apigee_x_target_details1 import (
    GoogleCloudApihubV1ApigeeXTargetDetails1,
    GoogleCloudApihubV1ApigeeXTargetDetails1Dict,
)
from .google_cloud_apihub_v1_mcp_tool_config import (
    GoogleCloudApihubV1McpToolConfig,
    GoogleCloudApihubV1McpToolConfigDict,
)


class GoogleCloudApihubV1McpServerConfig1(SdkBaseModel):
    """MCP (Model Context Protocol) server configuration."""

    tools: Optional[list[GoogleCloudApihubV1McpToolConfig]] = UNSET
    """Required. The tools to expose on the MCP server."""

    apigee_x_target_details: Optional[GoogleCloudApihubV1ApigeeXTargetDetails1] = Field(
        default=UNSET, alias="apigeeXTargetDetails"
    )
    """Optional. The target Apigee X configuration."""


class GoogleCloudApihubV1McpServerConfig1Dict(TypedDict):
    tools: NotRequired[list[GoogleCloudApihubV1McpToolConfigDict]]
    apigee_x_target_details: NotRequired[GoogleCloudApihubV1ApigeeXTargetDetails1Dict]
