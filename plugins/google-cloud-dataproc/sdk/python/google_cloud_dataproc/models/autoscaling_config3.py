from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AutoscalingConfig3(SdkBaseModel):
    """Optional. Autoscaling config for the policy associated with the cluster. Cluster does not autoscale if this field
    is unset."""

    policy_uri: Optional[str] = Field(default=UNSET, alias="policyUri")
    """Optional. The autoscaling policy used by the cluster.Only resource names including projectid and location
    (region) are valid. Examples:
    https://www.googleapis.com/compute/v1/projects/[project_id]/locations/[dataproc_region]/autoscalingPolicies/[policy_id]
    projects/[project_id]/locations/[dataproc_region]/autoscalingPolicies/[policy_id]Note that the policy must be in the
    same project and region."""


class AutoscalingConfig3Dict(TypedDict):
    policy_uri: NotRequired[str]
