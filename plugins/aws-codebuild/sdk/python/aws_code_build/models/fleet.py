from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .compute_configuration import ComputeConfiguration, ComputeConfigurationDict
from .enums.compute_type_aws_code_build_fleet_api import ComputeTypeAwsCodeBuildFleetApiOrStr
from .enums.environment_type import EnvironmentTypeOrStr
from .enums.overflow_behavior import OverflowBehaviorOrStr
from .fleet_status import FleetStatus, FleetStatusDict
from .proxy_configuration import ProxyConfiguration, ProxyConfigurationDict
from .scaling_configuration_output import ScalingConfigurationOutput, ScalingConfigurationOutputDict
from .tag_model import TagModel, TagModelDict
from .vpc_config import VpcConfig, VpcConfigDict


class Fleet(SdkBaseModel):
    arn: Optional[str] = UNSET
    """The ARN of the compute fleet."""

    name: Optional[str] = UNSET
    """The name of the compute fleet."""

    id: Optional[str] = UNSET
    """The ID of the compute fleet."""

    created: Optional[RFC3339DateTime] = UNSET
    """The time at which the compute fleet was created."""

    last_modified: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastModified")
    """The time at which the compute fleet was last modified."""

    status: Optional[FleetStatus] = UNSET
    base_capacity: Optional[int] = Field(default=UNSET, alias="baseCapacity")
    """The initial number of machines allocated to the compute ﬂeet, which deﬁnes the number of builds that can run in
    parallel."""

    environment_type: Optional[EnvironmentTypeOrStr] = Field(default=UNSET, alias="environmentType")
    """The environment type of the compute fleet. The environment type ARM_CONTAINER is available only in regions US
    East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), Asia Pacific (Mumbai), Asia Pacific (Tokyo),
    Asia Pacific (Singapore), Asia Pacific (Sydney), EU (Frankfurt), and South America (São Paulo). The environment type
    ARM_EC2 is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), EU
    (Frankfurt), Asia Pacific (Tokyo), Asia Pacific (Singapore), Asia Pacific (Sydney), South America (São Paulo), and
    Asia Pacific (Mumbai). The environ"""

    compute_type: Optional[ComputeTypeAwsCodeBuildFleetApiOrStr] = Field(default=UNSET, alias="computeType")
    """Information about the compute resources the compute fleet uses. Available values include:
    ATTRIBUTE_BASED_COMPUTE: Specify the amount of vCPUs, memory, disk space, and the type of machine. If you use
    ATTRIBUTE_BASED_COMPUTE, you must define your attributes by using computeConfiguration. CodeBuild will select the
    cheapest instance that satisfies your specified attributes. For more information, see Reserved capacity environment
    types in the CodeBuild User Guide. CUSTOM_INSTANCE_TYPE: Specify the instance type for your compute fleet. For a
    list of supported instance types, see Supported instance"""

    compute_configuration: Optional[ComputeConfiguration] = Field(default=UNSET, alias="computeConfiguration")
    scaling_configuration: Optional[ScalingConfigurationOutput] = Field(default=UNSET, alias="scalingConfiguration")
    overflow_behavior: Optional[OverflowBehaviorOrStr] = Field(default=UNSET, alias="overflowBehavior")
    """The compute fleet overflow behavior. For overflow behavior QUEUE, your overflow builds need to wait on the
    existing fleet instance to become available. For overflow behavior ON_DEMAND, your overflow builds run on CodeBuild
    on-demand. If you choose to set your overflow behavior to on-demand while creating a VPC-connected fleet, make sure
    that you add the required VPC permissions to your project service role. For more information, see Example policy
    statement to allow CodeBuild access to Amazon Web Services services required to create a VPC network interface."""

    vpc_config: Optional[VpcConfig] = Field(default=UNSET, alias="vpcConfig")
    proxy_configuration: Optional[ProxyConfiguration] = Field(default=UNSET, alias="proxyConfiguration")
    image_id: Optional[str] = Field(default=UNSET, alias="imageId")
    """The Amazon Machine Image (AMI) of the compute fleet."""

    fleet_service_role: Optional[str] = Field(default=UNSET, alias="fleetServiceRole")
    """The service role associated with the compute fleet. For more information, see Allow a user to add a permission
    policy for a fleet service role in the CodeBuild User Guide."""

    tags: Optional[list[TagModel]] = UNSET
    """A list of tag key and value pairs associated with this compute fleet. These tags are available for use by Amazon
    Web Services services that support CodeBuild build project tags."""


class FleetDict(TypedDict):
    arn: NotRequired[str]
    name: NotRequired[str]
    id: NotRequired[str]
    created: NotRequired[RFC3339DateTime]
    last_modified: NotRequired[RFC3339DateTime]
    status: NotRequired[FleetStatusDict]
    base_capacity: NotRequired[int]
    environment_type: NotRequired[EnvironmentTypeOrStr]
    compute_type: NotRequired[ComputeTypeAwsCodeBuildFleetApiOrStr]
    compute_configuration: NotRequired[ComputeConfigurationDict]
    scaling_configuration: NotRequired[ScalingConfigurationOutputDict]
    overflow_behavior: NotRequired[OverflowBehaviorOrStr]
    vpc_config: NotRequired[VpcConfigDict]
    proxy_configuration: NotRequired[ProxyConfigurationDict]
    image_id: NotRequired[str]
    fleet_service_role: NotRequired[str]
    tags: NotRequired[list[TagModelDict]]
