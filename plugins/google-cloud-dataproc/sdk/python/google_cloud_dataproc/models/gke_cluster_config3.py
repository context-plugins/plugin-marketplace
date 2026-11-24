from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .gke_node_pool_target import GkeNodePoolTarget, GkeNodePoolTargetDict
from .namespaced_gke_deployment_target2 import NamespacedGkeDeploymentTarget2, NamespacedGkeDeploymentTarget2Dict


class GkeClusterConfig3(SdkBaseModel):
    """Optional. BETA. The Kubernetes Engine config for clusters deployed to Kubernetes. These config settings are
    mutually exclusive with Compute Engine-based options, such as gce_cluster_config, master_config, worker_config,
    secondary_worker_config, and autoscaling_config."""

    namespaced_gke_deployment_target: Optional[NamespacedGkeDeploymentTarget2] = Field(
        default=UNSET, alias="namespacedGkeDeploymentTarget"
    )
    """Optional. Deprecated. Use gkeClusterTarget. Used only for the deprecated beta. A target for the deployment."""

    gke_cluster_target: Optional[str] = Field(default=UNSET, alias="gkeClusterTarget")
    """Optional. A target GKE cluster to deploy to. It must be in the same project and region as the Dataproc cluster
    (the GKE cluster can be zonal or regional). Format:
    'projects/{project}/locations/{location}/clusters/{cluster_id}'"""

    node_pool_target: Optional[list[GkeNodePoolTarget]] = Field(default=UNSET, alias="nodePoolTarget")
    """Optional. GKE node pools where workloads will be scheduled. At least one node pool must be assigned the DEFAULT
    GkeNodePoolTarget.Role. If a GkeNodePoolTarget is not specified, Dataproc constructs a DEFAULT GkeNodePoolTarget.
    Each role can be given to only one GkeNodePoolTarget. All node pools must have the same location settings."""


class GkeClusterConfig3Dict(TypedDict):
    namespaced_gke_deployment_target: NotRequired[NamespacedGkeDeploymentTarget2Dict]
    gke_cluster_target: NotRequired[str]
    node_pool_target: NotRequired[list[GkeNodePoolTargetDict]]
