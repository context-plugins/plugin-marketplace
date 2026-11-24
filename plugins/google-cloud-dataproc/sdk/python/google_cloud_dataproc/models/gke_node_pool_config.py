from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .gke_node_config2 import GkeNodeConfig2, GkeNodeConfig2Dict
from .gke_node_pool_autoscaling_config2 import GkeNodePoolAutoscalingConfig2, GkeNodePoolAutoscalingConfig2Dict


class GkeNodePoolConfig(SdkBaseModel):
    """The configuration of a GKE node pool used by a Dataproc-on-GKE cluster
    (https://cloud.google.com/dataproc/docs/concepts/jobs/dataproc-gke#create-a-dataproc-on-gke-cluster)."""

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


class GkeNodePoolConfigDict(TypedDict):
    autoscaling: NotRequired[GkeNodePoolAutoscalingConfig2Dict]
    config: NotRequired[GkeNodeConfig2Dict]
    locations: NotRequired[list[str]]
