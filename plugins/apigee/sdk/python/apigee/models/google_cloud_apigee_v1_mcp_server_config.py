from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1McpServerConfig(SdkBaseModel):
    """Deployed MCP server configuration for an organization. Response for GetMcpServerConfig. Org-scoped singleton:
    each organization has exactly one McpServerConfig. Multiple logical MCP servers within the same org are expressed
    inside the Cloud Storage blob (McpServerConfigData.hosts map), not as multiple McpServerConfig resources."""

    revision_create_time: Optional[str] = Field(default=UNSET, alias="revisionCreateTime")
    """Output only. Time at which this McpServerConfig revision was created. Mirrors
    IngressConfig.revision_create_time."""

    mcp_server_config_data_location: Optional[str] = Field(default=UNSET, alias="mcpServerConfigDataLocation")
    """Output only. Cloud Storage URI to the McpServerConfigData blob in the Apigee tenant project bucket. The sidecar
    fetches this URI using Cloud Storage, and deserializes the. protojson blob to McpServerConfigData. Treat this as an
    opaque URI — its format may change. Example: gs://{apigee-tp-bucket}/apigee-mcp-config-{org}-{revision_id}.json"""

    revision_id: Optional[str] = Field(default=UNSET, alias="revisionId")
    """Output only. Revision ID that defines the ordering on McpServerConfig revisions. Higher values indicate more
    recently deployed configurations. Monotonically non-decreasing per organization. Mirrors
    IngressConfig.revision_id."""

    uid: Optional[str] = UNSET
    """Output only. Unique ID for the McpServerConfig that will only change if the organization is deleted and
    recreated."""

    name: Optional[str] = UNSET
    """Identifier. Resource name in the singleton form: organizations/{org}/mcpServerConfig"""


class GoogleCloudApigeeV1McpServerConfigDict(TypedDict):
    revision_create_time: NotRequired[str]
    mcp_server_config_data_location: NotRequired[str]
    revision_id: NotRequired[str]
    uid: NotRequired[str]
    name: NotRequired[str]
