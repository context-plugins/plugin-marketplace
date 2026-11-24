from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AttachVolumeInput(SdkBaseModel):
    gateway_arn: str = Field(alias="GatewayARN")
    """The Amazon Resource Name (ARN) of the gateway that you want to attach the volume to."""

    target_name: Optional[str] = Field(default=UNSET, alias="TargetName")
    """The name of the iSCSI target used by an initiator to connect to a volume and used as a suffix for the target ARN.
    For example, specifying TargetName as myvolume results in the target ARN of
    arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume. The
    target name must be unique across all volumes on a gateway. If you don't specify a value, Storage Gateway uses the
    value that was previously used for this volume as the new target name."""

    volume_arn: str = Field(alias="VolumeARN")
    """The Amazon Resource Name (ARN) of the volume to attach to the specified gateway."""

    network_interface_id: str = Field(alias="NetworkInterfaceId")
    """The network interface of the gateway on which to expose the iSCSI target. Accepts IPv4 and IPv6 addresses. Use
    DescribeGatewayInformation to get a list of the network interfaces available on a gateway. Valid Values: A valid IP
    address."""

    disk_id: Optional[str] = Field(default=UNSET, alias="DiskId")
    """The unique device ID or other distinguishing data that identifies the local disk used to create the volume. This
    value is only required when you are attaching a stored volume."""


class AttachVolumeInputDict(TypedDict):
    gateway_arn: str
    target_name: NotRequired[str]
    volume_arn: str
    network_interface_id: str
    disk_id: NotRequired[str]
