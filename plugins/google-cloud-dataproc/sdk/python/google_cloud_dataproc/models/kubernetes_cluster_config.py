from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .gke_cluster_config2 import GkeClusterConfig2, GkeClusterConfig2Dict
from .kubernetes_software_config2 import KubernetesSoftwareConfig2, KubernetesSoftwareConfig2Dict


class KubernetesClusterConfig(SdkBaseModel):
    """The configuration for running the Dataproc cluster on Kubernetes."""

    gke_cluster_config: Optional[GkeClusterConfig2] = Field(default=UNSET, alias="gkeClusterConfig")
    """Required. The configuration for running the Dataproc cluster on GKE."""

    kubernetes_namespace: Optional[str] = Field(default=UNSET, alias="kubernetesNamespace")
    """Optional. A namespace within the Kubernetes cluster to deploy into. If this namespace does not exist, it is
    created. If it exists, Dataproc verifies that another Dataproc VirtualCluster is not installed into it. If not
    specified, the name of the Dataproc Cluster is used."""

    kubernetes_software_config: Optional[KubernetesSoftwareConfig2] = Field(
        default=UNSET, alias="kubernetesSoftwareConfig"
    )
    """Optional. The software configuration for this Dataproc cluster running on Kubernetes."""


class KubernetesClusterConfigDict(TypedDict):
    gke_cluster_config: NotRequired[GkeClusterConfig2Dict]
    kubernetes_namespace: NotRequired[str]
    kubernetes_software_config: NotRequired[KubernetesSoftwareConfig2Dict]
