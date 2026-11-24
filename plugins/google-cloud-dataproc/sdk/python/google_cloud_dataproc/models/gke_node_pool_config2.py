from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .gke_node_config2 import GkeNodeConfig2, GkeNodeConfig2Dict
from .gke_node_pool_autoscaling_config2 import GkeNodePoolAutoscalingConfig2, GkeNodePoolAutoscalingConfig2Dict


class GkeNodePoolConfig2(SdkBaseModel):
    """Input only. The configuration for the GKE node pool.If specified, Dataproc attempts to create a node pool with
    the specified shape. If one with the same name already exists, it is verified against all specified fields. If a
    field differs, the virtual cluster creation will fail.If omitted, any node pool with the specified name is used. If
    a node pool with the specified name does not exist, Dataproc create a node pool with default values.This is an input
    only field. It will not be returned by the API."""

    autoscaling: Optional[GkeNodePoolAutoscalingConfig2] = UNSET
    """Optional. The autoscaler configuration for this node pool. The autoscaler is enabled only when a valid
    configuration is present."""

    config: Optional[GkeNodeConfig2] = UNSET
    """Optional. The node pool configuration."""

    locations: Optional[list[str]] = UNSET
    """Optional. The list of Compute Engine zones (https://cloud.google.com/compute/docs/zones#available) where node
    pool nodes associated with a Dataproc on GKE virtual cluster will be located.Note: All node pools associated with a
    virtual cluster must be located in the same region as the virtual cluster, and they must be located in the same zone
    within that region.If a location is not specified during node pool creation, Dataproc on GKE will choose the
    zone."""


class GkeNodePoolConfig2Dict(TypedDict):
    autoscaling: NotRequired[GkeNodePoolAutoscalingConfig2Dict]
    config: NotRequired[GkeNodeConfig2Dict]
    locations: NotRequired[list[str]]
