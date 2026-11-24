from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_documentation8 import (
    GoogleCloudApihubV1Documentation8,
    GoogleCloudApihubV1Documentation8Dict,
)
from .google_cloud_apihub_v1_http_operation import (
    GoogleCloudApihubV1HttpOperation,
    GoogleCloudApihubV1HttpOperationDict,
)
from .google_cloud_apihub_v1_mcp_tool2 import GoogleCloudApihubV1McpTool2, GoogleCloudApihubV1McpTool2Dict


class GoogleCloudApihubV1OperationDetails2(SdkBaseModel):
    """Optional. Operation details. Note: Even though this field is optional, it is required for CreateApiOperation API
    and we will fail the request if not provided."""

    description: Optional[str] = UNSET
    """Optional. Description of the operation behavior. For OpenAPI spec, this will map to ``operation.description`` in
    the spec, in case description is empty, ``operation.summary`` will be used."""

    http_operation: Optional[GoogleCloudApihubV1HttpOperation] = Field(default=UNSET, alias="httpOperation")
    """The HTTP Operation."""

    deprecated: Optional[bool] = UNSET
    """Optional. For OpenAPI spec, this will be set if ``operation.deprecated``is marked as ``true`` in the spec."""

    documentation: Optional[GoogleCloudApihubV1Documentation8] = UNSET
    """Optional. Additional external documentation for this operation. For OpenAPI spec, this will map to
    ``operation.documentation`` in the spec."""

    mcp_tool: Optional[GoogleCloudApihubV1McpTool2] = Field(default=UNSET, alias="mcpTool")
    """The MCP Tool Operation."""


class GoogleCloudApihubV1OperationDetails2Dict(TypedDict):
    description: NotRequired[str]
    http_operation: NotRequired[GoogleCloudApihubV1HttpOperationDict]
    deprecated: NotRequired[bool]
    documentation: NotRequired[GoogleCloudApihubV1Documentation8Dict]
    mcp_tool: NotRequired[GoogleCloudApihubV1McpTool2Dict]
