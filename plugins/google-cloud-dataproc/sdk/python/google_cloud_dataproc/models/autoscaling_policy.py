from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .basic_autoscaling_algorithm import BasicAutoscalingAlgorithm, BasicAutoscalingAlgorithmDict
from .enums.cluster_type1 import ClusterType1OrStr
from .instance_group_autoscaling_policy_config1 import (
    InstanceGroupAutoscalingPolicyConfig1,
    InstanceGroupAutoscalingPolicyConfig1Dict,
)
from .instance_group_autoscaling_policy_config2 import (
    InstanceGroupAutoscalingPolicyConfig2,
    InstanceGroupAutoscalingPolicyConfig2Dict,
)


class AutoscalingPolicy(SdkBaseModel):
    """Describes an autoscaling policy for Dataproc cluster autoscaler."""

    id: Optional[str] = UNSET
    """Required. The policy id.The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens
    (-). Cannot begin or end with underscore or hyphen. Must consist of between 3 and 50 characters."""

    secondary_worker_config: Optional[InstanceGroupAutoscalingPolicyConfig1] = Field(
        default=UNSET, alias="secondaryWorkerConfig"
    )
    """Optional. Describes how the autoscaler will operate for secondary workers."""

    labels: Optional[dict[str, str]] = UNSET
    """Optional. The labels to associate with this autoscaling policy. Label keys must contain 1 to 63 characters, and
    must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must
    contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32
    labels can be associated with an autoscaling policy."""

    worker_config: Optional[InstanceGroupAutoscalingPolicyConfig2] = Field(default=UNSET, alias="workerConfig")
    """Required. Describes how the autoscaler will operate for primary workers."""

    basic_algorithm: Optional[BasicAutoscalingAlgorithm] = Field(default=UNSET, alias="basicAlgorithm")
    """Basic algorithm for autoscaling."""

    name: Optional[str] = UNSET
    """Output only. The "resource name" of the autoscaling policy, as described in
    https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies, the resource name of
    the policy has the following format: projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id} For
    projects.locations.autoscalingPolicies, the resource name of the policy has the following format:
    projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id}"""

    cluster_type: Optional[ClusterType1OrStr] = Field(default=UNSET, alias="clusterType")
    """Optional. The type of the clusters for which this autoscaling policy is to be configured."""


class AutoscalingPolicyDict(TypedDict):
    id: NotRequired[str]
    secondary_worker_config: NotRequired[InstanceGroupAutoscalingPolicyConfig1Dict]
    labels: NotRequired[dict[str, str]]
    worker_config: NotRequired[InstanceGroupAutoscalingPolicyConfig2Dict]
    basic_algorithm: NotRequired[BasicAutoscalingAlgorithmDict]
    name: NotRequired[str]
    cluster_type: NotRequired[ClusterType1OrStr]
