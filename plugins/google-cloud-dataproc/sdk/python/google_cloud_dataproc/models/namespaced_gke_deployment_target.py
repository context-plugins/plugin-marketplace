from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class NamespacedGkeDeploymentTarget(SdkBaseModel):
    """Deprecated. Used only for the deprecated beta. A full, namespace-isolated deployment target for an existing GKE
    cluster."""

    target_gke_cluster: Optional[str] = Field(default=UNSET, alias="targetGkeCluster")
    """Optional. The target GKE cluster to deploy to. Format:
    'projects/{project}/locations/{location}/clusters/{cluster_id}'"""

    cluster_namespace: Optional[str] = Field(default=UNSET, alias="clusterNamespace")
    """Optional. A namespace within the GKE cluster to deploy into."""


class NamespacedGkeDeploymentTargetDict(TypedDict):
    target_gke_cluster: NotRequired[str]
    cluster_namespace: NotRequired[str]
