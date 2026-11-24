from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class NodeGroupAffinity2(SdkBaseModel):
    """Optional. Node Group Affinity for sole-tenant clusters."""

    node_group_uri: Optional[str] = Field(default=UNSET, alias="nodeGroupUri")
    """Required. The URI of a sole-tenant node group resource
    (https://cloud.google.com/compute/docs/reference/rest/v1/nodeGroups) that the cluster will be created on.A full URL,
    partial URI, or node group name are valid. Examples:
    https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone]/nodeGroups/node-group-1
    projects/[project_id]/zones/[zone]/nodeGroups/node-group-1 node-group-1"""


class NodeGroupAffinity2Dict(TypedDict):
    node_group_uri: NotRequired[str]
