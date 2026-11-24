from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_operation_schema1 import (
    GoogleCloudApihubV1OperationSchema1,
    GoogleCloudApihubV1OperationSchema1Dict,
)
from .google_cloud_apihub_v1_operation_schema3 import (
    GoogleCloudApihubV1OperationSchema3,
    GoogleCloudApihubV1OperationSchema3Dict,
)
from .google_cloud_apihub_v1_tool_annotations2 import (
    GoogleCloudApihubV1ToolAnnotations2,
    GoogleCloudApihubV1ToolAnnotations2Dict,
)


class GoogleCloudApihubV1McpTool2(SdkBaseModel):
    """The MCP Tool Operation."""

    description: Optional[str] = UNSET
    """Optional. Description of what the tool does."""

    name: Optional[str] = UNSET
    """Required. The name of the tool, unique within its parent scope (version)."""

    input_schema: Optional[GoogleCloudApihubV1OperationSchema3] = Field(default=UNSET, alias="inputSchema")
    """Optional. Input schema for the operation. This can be parsed only from MCP schema type."""

    title: Optional[str] = UNSET
    """Optional. Optional title for the tool."""

    annotations: Optional[GoogleCloudApihubV1ToolAnnotations2] = UNSET
    """Optional. Optional annotations for the tool."""

    output_schema: Optional[GoogleCloudApihubV1OperationSchema1] = Field(default=UNSET, alias="outputSchema")
    """Optional. Output schema for the operation. This can be parsed only from MCP schema type."""


class GoogleCloudApihubV1McpTool2Dict(TypedDict):
    description: NotRequired[str]
    name: NotRequired[str]
    input_schema: NotRequired[GoogleCloudApihubV1OperationSchema3Dict]
    title: NotRequired[str]
    annotations: NotRequired[GoogleCloudApihubV1ToolAnnotations2Dict]
    output_schema: NotRequired[GoogleCloudApihubV1OperationSchema1Dict]
