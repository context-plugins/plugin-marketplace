from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.role import RoleOrStr
from .gke_node_pool_config2 import GkeNodePoolConfig2, GkeNodePoolConfig2Dict


class GkeNodePoolTarget(SdkBaseModel):
    """GKE node pools that Dataproc workloads run on."""

    node_pool_config: Optional[GkeNodePoolConfig2] = Field(default=UNSET, alias="nodePoolConfig")
    """Input only. The configuration for the GKE node pool.If specified, Dataproc attempts to create a node pool with
    the specified shape. If one with the same name already exists, it is verified against all specified fields. If a
    field differs, the virtual cluster creation will fail.If omitted, any node pool with the specified name is used. If
    a node pool with the specified name does not exist, Dataproc create a node pool with default values.This is an input
    only field. It will not be returned by the API."""

    node_pool: Optional[str] = Field(default=UNSET, alias="nodePool")
    """Required. The target GKE node pool. Format:
    'projects/{project}/locations/{location}/clusters/{cluster}/nodePools/{node_pool}'"""

    roles: Optional[list[RoleOrStr]] = UNSET
    """Required. The roles associated with the GKE node pool."""


class GkeNodePoolTargetDict(TypedDict):
    node_pool_config: NotRequired[GkeNodePoolConfig2Dict]
    node_pool: NotRequired[str]
    roles: NotRequired[list[RoleOrStr]]
