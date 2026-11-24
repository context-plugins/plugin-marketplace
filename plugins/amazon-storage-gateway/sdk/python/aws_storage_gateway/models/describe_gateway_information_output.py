from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.gateway_capacity import GatewayCapacityOrStr
from .enums.host_environment import HostEnvironmentOrStr
from .enums.supported_gateway_capacity import SupportedGatewayCapacityOrStr
from .network_interface import NetworkInterface, NetworkInterfaceDict
from .tag_model import TagModel, TagModelDict


class DescribeGatewayInformationOutput(SdkBaseModel):
    gateway_arn: Optional[str] = Field(default=UNSET, alias="GatewayARN")
    gateway_id: Optional[str] = Field(default=UNSET, alias="GatewayId")
    """The unique identifier assigned to your gateway during activation. This ID becomes part of the gateway Amazon
    Resource Name (ARN), which you use as input for other operations."""

    gateway_name: Optional[str] = Field(default=UNSET, alias="GatewayName")
    """The name you configured for your gateway."""

    gateway_timezone: Optional[str] = Field(default=UNSET, alias="GatewayTimezone")
    """A value that indicates the time zone configured for the gateway."""

    gateway_state: Optional[str] = Field(default=UNSET, alias="GatewayState")
    """A value that indicates the operating state of the gateway."""

    gateway_network_interfaces: Optional[list[NetworkInterface]] = Field(
        default=UNSET, alias="GatewayNetworkInterfaces"
    )
    """A NetworkInterface array that contains descriptions of the gateway network interfaces."""

    gateway_type: Optional[str] = Field(default=UNSET, alias="GatewayType")
    """The type of the gateway. Amazon FSx File Gateway is no longer available to new customers. Existing customers of
    FSx File Gateway can continue to use the service normally. For capabilities similar to FSx File Gateway, visit this
    blog post."""

    next_update_availability_date: Optional[str] = Field(default=UNSET, alias="NextUpdateAvailabilityDate")
    """The date on which an update to the gateway is available. This date is in the time zone of the gateway. If the
    gateway is not available for an update this field is not returned in the response."""

    last_software_update: Optional[str] = Field(default=UNSET, alias="LastSoftwareUpdate")
    """The date on which the last software update was applied to the gateway. If the gateway has never been updated,
    this field does not return a value in the response. This only only exist and returns once it have been chosen and
    set by the SGW service, based on the OS version of the gateway VM"""

    ec2_instance_id: Optional[str] = Field(default=UNSET, alias="Ec2InstanceId")
    """The ID of the Amazon EC2 instance that was used to launch the gateway."""

    ec2_instance_region: Optional[str] = Field(default=UNSET, alias="Ec2InstanceRegion")
    """The Amazon Web Services Region where the Amazon EC2 instance is located."""

    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """A list of up to 50 tags assigned to the gateway, sorted alphabetically by key name. Each tag is a key-value pair.
    For a gateway with more than 10 tags assigned, you can view all tags using the ListTagsForResource API operation."""

    vpc_endpoint: Optional[str] = Field(default=UNSET, alias="VPCEndpoint")
    """The configuration settings for the virtual private cloud (VPC) endpoint for your gateway."""

    cloud_watch_log_group_arn: Optional[str] = Field(default=UNSET, alias="CloudWatchLogGroupARN")
    """The Amazon Resource Name (ARN) of the Amazon CloudWatch log group that is used to monitor events in the gateway.
    This field only only exist and returns once it have been chosen and set by the SGW service, based on the OS version
    of the gateway VM"""

    host_environment: Optional[HostEnvironmentOrStr] = Field(default=UNSET, alias="HostEnvironment")
    """The type of hardware or software platform on which the gateway is running. Tape Gateway is no longer available on
    Snow Family devices."""

    endpoint_type: Optional[str] = Field(default=UNSET, alias="EndpointType")
    """The type of endpoint for your gateway. Valid Values: STANDARD | FIPS"""

    software_updates_end_date: Optional[str] = Field(default=UNSET, alias="SoftwareUpdatesEndDate")
    """Date after which this gateway will not receive software updates for new features."""

    deprecation_date: Optional[str] = Field(default=UNSET, alias="DeprecationDate")
    """Date after which this gateway will not receive software updates for new features and bug fixes."""

    gateway_capacity: Optional[GatewayCapacityOrStr] = Field(default=UNSET, alias="GatewayCapacity")
    """Specifies the size of the gateway's metadata cache."""

    supported_gateway_capacities: Optional[list[SupportedGatewayCapacityOrStr]] = Field(
        default=UNSET, alias="SupportedGatewayCapacities"
    )
    """A list of the metadata cache sizes that the gateway can support based on its current hardware specifications."""

    host_environment_id: Optional[str] = Field(default=UNSET, alias="HostEnvironmentId")
    """A unique identifier for the specific instance of the host platform running the gateway. This value is only
    available for certain host environments, and its format depends on the host environment type."""

    software_version: Optional[str] = Field(default=UNSET, alias="SoftwareVersion")
    """The version number of the software running on the gateway appliance."""


class DescribeGatewayInformationOutputDict(TypedDict):
    gateway_arn: NotRequired[str]
    gateway_id: NotRequired[str]
    gateway_name: NotRequired[str]
    gateway_timezone: NotRequired[str]
    gateway_state: NotRequired[str]
    gateway_network_interfaces: NotRequired[list[NetworkInterfaceDict]]
    gateway_type: NotRequired[str]
    next_update_availability_date: NotRequired[str]
    last_software_update: NotRequired[str]
    ec2_instance_id: NotRequired[str]
    ec2_instance_region: NotRequired[str]
    tags: NotRequired[list[TagModelDict]]
    vpc_endpoint: NotRequired[str]
    cloud_watch_log_group_arn: NotRequired[str]
    host_environment: NotRequired[HostEnvironmentOrStr]
    endpoint_type: NotRequired[str]
    software_updates_end_date: NotRequired[str]
    deprecation_date: NotRequired[str]
    gateway_capacity: NotRequired[GatewayCapacityOrStr]
    supported_gateway_capacities: NotRequired[list[SupportedGatewayCapacityOrStr]]
    host_environment_id: NotRequired[str]
    software_version: NotRequired[str]
