from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .autoscaling_config3 import AutoscalingConfig3, AutoscalingConfig3Dict
from .auxiliary_node_group import AuxiliaryNodeGroup, AuxiliaryNodeGroupDict
from .dataproc_metric_config2 import DataprocMetricConfig2, DataprocMetricConfig2Dict
from .encryption_config3 import EncryptionConfig3, EncryptionConfig3Dict
from .endpoint_config2 import EndpointConfig2, EndpointConfig2Dict
from .enums.cluster_tier import ClusterTierOrStr
from .enums.cluster_type import ClusterTypeOrStr
from .enums.engine import EngineOrStr
from .flexible_instance_group_config1 import FlexibleInstanceGroupConfig1, FlexibleInstanceGroupConfig1Dict
from .flexible_instance_group_config2 import FlexibleInstanceGroupConfig2, FlexibleInstanceGroupConfig2Dict
from .flexible_instance_group_config4 import FlexibleInstanceGroupConfig4, FlexibleInstanceGroupConfig4Dict
from .gce_cluster_config2 import GceClusterConfig2, GceClusterConfig2Dict
from .gke_cluster_config3 import GkeClusterConfig3, GkeClusterConfig3Dict
from .instance_group_config1 import InstanceGroupConfig1, InstanceGroupConfig1Dict
from .instance_group_config3 import InstanceGroupConfig3, InstanceGroupConfig3Dict
from .instance_group_config5 import InstanceGroupConfig5, InstanceGroupConfig5Dict
from .lifecycle_config2 import LifecycleConfig2, LifecycleConfig2Dict
from .metastore_config3 import MetastoreConfig3, MetastoreConfig3Dict
from .node_initialization_action import NodeInitializationAction, NodeInitializationActionDict
from .scheduling_config2 import SchedulingConfig2, SchedulingConfig2Dict
from .security_config2 import SecurityConfig2, SecurityConfig2Dict
from .software_config2 import SoftwareConfig2, SoftwareConfig2Dict


class ClusterConfig3(SdkBaseModel):
    """Required. The cluster configuration."""

    diagnostic_bucket: Optional[str] = Field(default=UNSET, alias="diagnosticBucket")
    """Optional. A Cloud Storage bucket used to collect checkpoint diagnostic data
    (https://cloud.google.com/dataproc/docs/support/diagnose-clusters#checkpoint_diagnostic_data). If you do not specify
    a diagnostic bucket, The service will use the temp bucket to collect the checkpoint diagnostic data. This field
    requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket."""

    security_config: Optional[SecurityConfig2] = Field(default=UNSET, alias="securityConfig")
    """Optional. Security settings for the cluster."""

    software_config: Optional[SoftwareConfig2] = Field(default=UNSET, alias="softwareConfig")
    """Optional. The config settings for cluster software."""

    worker_flexible_config: Optional[FlexibleInstanceGroupConfig4] = Field(default=UNSET, alias="workerFlexibleConfig")
    """Optional. The High Obtainability (HO) config settings for the cluster's worker instances.In High Obtainability
    (HO) mode, flexible configs are the single source of truth for desired cluster configuration. num_instances
    represents the desired capacity of the worker group and is mutable via cluster updates and autoscaling.Only one of
    worker_config or worker_flexible_config can be set.In High Obtainability (HO) mode, for multi-node (standard)
    clusters, both master_flexible_config and worker_flexible_config must be specified. Mixing standard and flexible
    configs across node groups is not allowed. Single-node clusters do not specify worker configs."""

    temp_bucket: Optional[str] = Field(default=UNSET, alias="tempBucket")
    """Optional. A Cloud Storage bucket used to store ephemeral cluster and jobs data, such as Spark and MapReduce
    history files. If you do not specify a temp bucket, the service will determine a Cloud Storage location (US, ASIA,
    or EU) for your cluster's temp bucket according to the Compute Engine zone where your cluster is deployed, and then
    create and manage this project-level, per-location bucket. The default bucket has a TTL of 90 days, but you can use
    any TTL (or none) if you specify a bucket (see staging and temp buckets
    (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). This field requires a Cloud
    Storage bucket name, not a gs://... URI to a Cloud Storage bucket."""

    master_flexible_config: Optional[FlexibleInstanceGroupConfig1] = Field(default=UNSET, alias="masterFlexibleConfig")
    """Optional. The High Obtainability (HO) config settings for the cluster's master instances.In High Obtainability
    (HO) mode, flexible configs are the single source of truth for desired cluster configuration across node groups: *
    For single-node clusters: master_flexible_config must be specified, and no worker configs should be set. * For
    multi-node (standard) clusters: both master_flexible_config and worker_flexible_config must be specified. Mixing
    standard and flexible configs across node groups is not allowed.Only one of master_config or master_flexible_config
    can be set."""

    encryption_config: Optional[EncryptionConfig3] = Field(default=UNSET, alias="encryptionConfig")
    """Optional. Encryption settings for the cluster."""

    scheduling_config: Optional[SchedulingConfig2] = Field(default=UNSET, alias="schedulingConfig")
    """Optional. Config for scheduling the resources to be allocated when available."""

    lifecycle_config: Optional[LifecycleConfig2] = Field(default=UNSET, alias="lifecycleConfig")
    """Optional. Lifecycle setting for the cluster."""

    autoscaling_config: Optional[AutoscalingConfig3] = Field(default=UNSET, alias="autoscalingConfig")
    """Optional. Autoscaling config for the policy associated with the cluster. Cluster does not autoscale if this field
    is unset."""

    cluster_tier: Optional[ClusterTierOrStr] = Field(default=UNSET, alias="clusterTier")
    """Optional. The cluster tier."""

    gke_cluster_config: Optional[GkeClusterConfig3] = Field(default=UNSET, alias="gkeClusterConfig")
    """Optional. BETA. The Kubernetes Engine config for clusters deployed to Kubernetes. These config settings are
    mutually exclusive with Compute Engine-based options, such as gce_cluster_config, master_config, worker_config,
    secondary_worker_config, and autoscaling_config."""

    gce_cluster_config: Optional[GceClusterConfig2] = Field(default=UNSET, alias="gceClusterConfig")
    """Optional. The shared Compute Engine config settings for all instances in a cluster."""

    secondary_worker_flexible_config: Optional[FlexibleInstanceGroupConfig2] = Field(
        default=UNSET, alias="secondaryWorkerFlexibleConfig"
    )
    """Optional. The High Obtainability (HO) config settings for a cluster's secondary worker instances.In High
    Obtainability (HO) mode, flexible configs are the single source of truth for desired cluster configuration.
    num_instances represents the desired capacity of the secondary worker group and is mutable via cluster updates and
    autoscaling.Only one of secondary_worker_config or secondary_worker_flexible_config can be set.In High Obtainability
    (HO) mode, secondary workers are optional. If secondary workers are used in an HO cluster, they must be configured
    using secondary_worker_flexible_config (not secondary_worker_config)."""

    master_config: Optional[InstanceGroupConfig5] = Field(default=UNSET, alias="masterConfig")
    """Optional. The Compute Engine config settings for the cluster's master instance."""

    engine: Optional[EngineOrStr] = UNSET
    """Optional. The cluster engine."""

    config_bucket: Optional[str] = Field(default=UNSET, alias="configBucket")
    """Optional. A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If
    you do not specify a staging bucket, the service will determine a Cloud Storage location (US, ASIA, or EU) for your
    cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and
    manage this project-level, per-location bucket (see staging and temp buckets
    (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). This field requires a Cloud
    Storage bucket name, not a gs://... URI to a Cloud Storage bucket."""

    worker_config: Optional[InstanceGroupConfig1] = Field(default=UNSET, alias="workerConfig")
    """Optional. The Compute Engine config settings for the cluster's worker instances."""

    dataproc_metric_config: Optional[DataprocMetricConfig2] = Field(default=UNSET, alias="dataprocMetricConfig")
    """Optional. The config for metrics."""

    initialization_actions: Optional[list[NodeInitializationAction]] = Field(
        default=UNSET, alias="initializationActions"
    )
    """Optional. Commands to execute on each node after config is completed. By default, executables are run on master
    and all worker nodes. You can test a node's role metadata to run an executable on a master or worker node, as shown
    below using curl (you can also use wget): ROLE=$(curl -H Metadata-Flavor:Google
    http://metadata/computeMetadata/v1/instance/attributes/dataproc-role) if [[ "${ROLE}" == 'Master' ]]; then ...
    master specific actions ... else ... worker specific actions ... fi"""

    cluster_type: Optional[ClusterTypeOrStr] = Field(default=UNSET, alias="clusterType")
    """Optional. The type of the cluster."""

    auxiliary_node_groups: Optional[list[AuxiliaryNodeGroup]] = Field(default=UNSET, alias="auxiliaryNodeGroups")
    """Optional. The node group settings."""

    secondary_worker_config: Optional[InstanceGroupConfig3] = Field(default=UNSET, alias="secondaryWorkerConfig")
    """Optional. The Compute Engine config settings for a cluster's secondary worker instances"""

    metastore_config: Optional[MetastoreConfig3] = Field(default=UNSET, alias="metastoreConfig")
    """Optional. Metastore configuration."""

    endpoint_config: Optional[EndpointConfig2] = Field(default=UNSET, alias="endpointConfig")
    """Optional. Port/endpoint configuration for this cluster"""


class ClusterConfig3Dict(TypedDict):
    diagnostic_bucket: NotRequired[str]
    security_config: NotRequired[SecurityConfig2Dict]
    software_config: NotRequired[SoftwareConfig2Dict]
    worker_flexible_config: NotRequired[FlexibleInstanceGroupConfig4Dict]
    temp_bucket: NotRequired[str]
    master_flexible_config: NotRequired[FlexibleInstanceGroupConfig1Dict]
    encryption_config: NotRequired[EncryptionConfig3Dict]
    scheduling_config: NotRequired[SchedulingConfig2Dict]
    lifecycle_config: NotRequired[LifecycleConfig2Dict]
    autoscaling_config: NotRequired[AutoscalingConfig3Dict]
    cluster_tier: NotRequired[ClusterTierOrStr]
    gke_cluster_config: NotRequired[GkeClusterConfig3Dict]
    gce_cluster_config: NotRequired[GceClusterConfig2Dict]
    secondary_worker_flexible_config: NotRequired[FlexibleInstanceGroupConfig2Dict]
    master_config: NotRequired[InstanceGroupConfig5Dict]
    engine: NotRequired[EngineOrStr]
    config_bucket: NotRequired[str]
    worker_config: NotRequired[InstanceGroupConfig1Dict]
    dataproc_metric_config: NotRequired[DataprocMetricConfig2Dict]
    initialization_actions: NotRequired[list[NodeInitializationActionDict]]
    cluster_type: NotRequired[ClusterTypeOrStr]
    auxiliary_node_groups: NotRequired[list[AuxiliaryNodeGroupDict]]
    secondary_worker_config: NotRequired[InstanceGroupConfig3Dict]
    metastore_config: NotRequired[MetastoreConfig3Dict]
    endpoint_config: NotRequired[EndpointConfig2Dict]
