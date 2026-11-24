from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.host_environment import HostEnvironmentOrStr


class GatewayInfo(SdkBaseModel):
    gateway_id: Optional[str] = Field(default=UNSET, alias="GatewayId")
    """The unique identifier assigned to your gateway during activation. This ID becomes part of the gateway Amazon
    Resource Name (ARN), which you use as input for other operations."""

    gateway_arn: Optional[str] = Field(default=UNSET, alias="GatewayARN")
    """The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for
    your account and Amazon Web Services Region."""

    gateway_type: Optional[str] = Field(default=UNSET, alias="GatewayType")
    """The type of the gateway. Amazon FSx File Gateway is no longer available to new customers. Existing customers of
    FSx File Gateway can continue to use the service normally. For capabilities similar to FSx File Gateway, visit this
    blog post."""

    gateway_operational_state: Optional[str] = Field(default=UNSET, alias="GatewayOperationalState")
    """The state of the gateway. Valid Values: DISABLED | ACTIVE"""

    gateway_name: Optional[str] = Field(default=UNSET, alias="GatewayName")
    """The name of the gateway."""

    ec2_instance_id: Optional[str] = Field(default=UNSET, alias="Ec2InstanceId")
    """The ID of the Amazon EC2 instance that was used to launch the gateway."""

    ec2_instance_region: Optional[str] = Field(default=UNSET, alias="Ec2InstanceRegion")
    """The Amazon Web Services Region where the Amazon EC2 instance is located."""

    host_environment: Optional[HostEnvironmentOrStr] = Field(default=UNSET, alias="HostEnvironment")
    """The type of hardware or software platform on which the gateway is running. Tape Gateway is no longer available on
    Snow Family devices."""

    host_environment_id: Optional[str] = Field(default=UNSET, alias="HostEnvironmentId")
    """A unique identifier for the specific instance of the host platform running the gateway. This value is only
    available for certain host environments, and its format depends on the host environment type."""

    deprecation_date: Optional[str] = Field(default=UNSET, alias="DeprecationDate")
    """Date after which this gateway will not receive software updates for new features and bug fixes."""

    software_version: Optional[str] = Field(default=UNSET, alias="SoftwareVersion")
    """The version number of the software running on the gateway appliance."""


class GatewayInfoDict(TypedDict):
    gateway_id: NotRequired[str]
    gateway_arn: NotRequired[str]
    gateway_type: NotRequired[str]
    gateway_operational_state: NotRequired[str]
    gateway_name: NotRequired[str]
    ec2_instance_id: NotRequired[str]
    ec2_instance_region: NotRequired[str]
    host_environment: NotRequired[HostEnvironmentOrStr]
    host_environment_id: NotRequired[str]
    deprecation_date: NotRequired[str]
    software_version: NotRequired[str]
