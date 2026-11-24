from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_flattened_api_version_deployment_view2 import (
    GoogleCloudApihubV1FlattenedApiVersionDeploymentView2,
    GoogleCloudApihubV1FlattenedApiVersionDeploymentView2Dict,
)
from .google_cloud_apihub_v1_flattened_api_version_operation_deployment_view1 import (
    GoogleCloudApihubV1FlattenedApiVersionOperationDeploymentView1,
    GoogleCloudApihubV1FlattenedApiVersionOperationDeploymentView1Dict,
)


class GoogleCloudApihubV1ApiView(SdkBaseModel):
    """The view of an API."""

    mcp_server_view: Optional[GoogleCloudApihubV1FlattenedApiVersionDeploymentView2] = Field(
        default=UNSET, alias="mcpServerView"
    )
    """MCP server view."""

    mcp_tool_view: Optional[GoogleCloudApihubV1FlattenedApiVersionOperationDeploymentView1] = Field(
        default=UNSET, alias="mcpToolView"
    )
    """MCP tools view."""


class GoogleCloudApihubV1ApiViewDict(TypedDict):
    mcp_server_view: NotRequired[GoogleCloudApihubV1FlattenedApiVersionDeploymentView2Dict]
    mcp_tool_view: NotRequired[GoogleCloudApihubV1FlattenedApiVersionOperationDeploymentView1Dict]
