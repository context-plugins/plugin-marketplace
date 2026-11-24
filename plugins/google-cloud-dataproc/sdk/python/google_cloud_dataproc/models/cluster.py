from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cluster_config1 import ClusterConfig1, ClusterConfig1Dict
from .cluster_metrics2 import ClusterMetrics2, ClusterMetrics2Dict
from .cluster_status import ClusterStatus, ClusterStatusDict
from .cluster_status1 import ClusterStatus1, ClusterStatus1Dict
from .virtual_cluster_config2 import VirtualClusterConfig2, VirtualClusterConfig2Dict


class Cluster(SdkBaseModel):
    """Describes the identifying information, config, and status of a cluster"""

    labels: Optional[dict[str, str]] = UNSET
    """Optional. The labels to associate with this cluster. Label keys must contain 1 to 63 characters, and must conform
    to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63
    characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be
    associated with a cluster."""

    project_id: Optional[str] = Field(default=UNSET, alias="projectId")
    """Required. The Google Cloud Platform project ID that the cluster belongs to."""

    metrics: Optional[ClusterMetrics2] = UNSET
    """Output only. Contains cluster daemon metrics such as HDFS and YARN stats.Beta Feature: This report is available
    for testing purposes only. It may be changed before final release."""

    cluster_name: Optional[str] = Field(default=UNSET, alias="clusterName")
    """Required. The cluster name, which must be unique within a project. The name must start with a lowercase letter,
    and can contain up to 51 lowercase letters, numbers, and hyphens. It cannot end with a hyphen. The name of a deleted
    cluster can be reused."""

    cluster_uuid: Optional[str] = Field(default=UNSET, alias="clusterUuid")
    """Output only. A cluster UUID (Unique Universal Identifier). The service generates this value when it creates the
    cluster."""

    virtual_cluster_config: Optional[VirtualClusterConfig2] = Field(default=UNSET, alias="virtualClusterConfig")
    """Optional. The virtual cluster config is used when creating a cluster that does not directly control the
    underlying compute resources, for example, when creating a GKE cluster
    (https://cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-overview). the service may set default values, and
    values may change when clusters are updated. Exactly one of config or virtual_cluster_config must be specified."""

    status_history: Optional[list[ClusterStatus]] = Field(default=UNSET, alias="statusHistory")
    """Output only. The previous cluster status."""

    config: Optional[ClusterConfig1] = UNSET
    """Optional. The cluster config for a cluster of Compute Engine Instances. Note that the service may set default
    values, and values may change when clusters are updated.Exactly one of ClusterConfig or VirtualClusterConfig must be
    specified."""

    status: Optional[ClusterStatus1] = UNSET
    """Output only. Cluster status."""


class ClusterDict(TypedDict):
    labels: NotRequired[dict[str, str]]
    project_id: NotRequired[str]
    metrics: NotRequired[ClusterMetrics2Dict]
    cluster_name: NotRequired[str]
    cluster_uuid: NotRequired[str]
    virtual_cluster_config: NotRequired[VirtualClusterConfig2Dict]
    status_history: NotRequired[list[ClusterStatusDict]]
    config: NotRequired[ClusterConfig1Dict]
    status: NotRequired[ClusterStatus1Dict]
