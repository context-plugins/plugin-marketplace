from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .auxiliary_services_config2 import AuxiliaryServicesConfig2, AuxiliaryServicesConfig2Dict
from .kubernetes_cluster_config2 import KubernetesClusterConfig2, KubernetesClusterConfig2Dict


class VirtualClusterConfig2(SdkBaseModel):
    """Optional. The virtual cluster config is used when creating a cluster that does not directly control the
    underlying compute resources, for example, when creating a GKE cluster
    (https://cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-overview). the service may set default values, and
    values may change when clusters are updated. Exactly one of config or virtual_cluster_config must be specified."""

    kubernetes_cluster_config: Optional[KubernetesClusterConfig2] = Field(
        default=UNSET, alias="kubernetesClusterConfig"
    )
    """Required. The configuration for running the cluster on Kubernetes."""

    auxiliary_services_config: Optional[AuxiliaryServicesConfig2] = Field(
        default=UNSET, alias="auxiliaryServicesConfig"
    )
    """Optional. Configuration of auxiliary services used by this cluster."""

    staging_bucket: Optional[str] = Field(default=UNSET, alias="stagingBucket")
    """Optional. A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If
    you do not specify a staging bucket, the service will determine a Cloud Storage location (US, ASIA, or EU) for your
    cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and
    manage this project-level, per-location bucket (see staging and temp buckets
    (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). This field requires a Cloud
    Storage bucket name, not a gs://... URI to a Cloud Storage bucket."""


class VirtualClusterConfig2Dict(TypedDict):
    kubernetes_cluster_config: NotRequired[KubernetesClusterConfig2Dict]
    auxiliary_services_config: NotRequired[AuxiliaryServicesConfig2Dict]
    staging_bucket: NotRequired[str]
