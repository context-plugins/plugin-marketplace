from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.has_logical_redundancy1 import HasLogicalRedundancy1OrStr
from .enums.interconnect_state import InterconnectStateOrStr
from .mac_sec_key import MacSecKey, MacSecKeyDict
from .tag_model import TagModel, TagModelDict


class Interconnect(SdkBaseModel):
    interconnect_id: Optional[str] = Field(default=UNSET, alias="interconnectId")
    """The ID of the interconnect."""

    interconnect_name: Optional[str] = Field(default=UNSET, alias="interconnectName")
    """The name of the interconnect."""

    interconnect_state: Optional[InterconnectStateOrStr] = Field(default=UNSET, alias="interconnectState")
    """The state of the interconnect. The following are the possible values: requested: The initial state of an
    interconnect. The interconnect stays in the requested state until the Letter of Authorization (LOA) is sent to the
    customer. pending: The interconnect is approved, and is being initialized. available: The network link is up, and
    the interconnect is ready for use. down: The network link is down. deleting: The interconnect is being deleted.
    deleted: The interconnect is deleted. unknown: The state of the interconnect is not available."""

    region: Optional[str] = UNSET
    """The Amazon Web Services Region where the connection is located."""

    location: Optional[str] = UNSET
    """The location of the connection."""

    bandwidth: Optional[str] = UNSET
    """The bandwidth of the connection."""

    loa_issue_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="loaIssueTime")
    """The time of the most recent call to DescribeLoa for this connection."""

    lag_id: Optional[str] = Field(default=UNSET, alias="lagId")
    """The ID of the LAG."""

    aws_device: Optional[str] = Field(default=UNSET, alias="awsDevice")
    """The Direct Connect endpoint on which the physical connection terminates."""

    jumbo_frame_capable: Optional[bool] = Field(default=UNSET, alias="jumboFrameCapable")
    """Indicates whether jumbo frames are supported."""

    aws_device_v2: Optional[str] = Field(default=UNSET, alias="awsDeviceV2")
    """The Direct Connect endpoint that terminates the physical connection."""

    aws_logical_device_id: Optional[str] = Field(default=UNSET, alias="awsLogicalDeviceId")
    """The Direct Connect endpoint that terminates the logical connection. This device might be different than the
    device that terminates the physical connection."""

    has_logical_redundancy: Optional[HasLogicalRedundancy1OrStr] = Field(default=UNSET, alias="hasLogicalRedundancy")
    """Indicates whether the interconnect supports a secondary BGP in the same address family (IPv4/IPv6)."""

    tags: Optional[list[TagModel]] = UNSET
    """The tags associated with the interconnect."""

    provider_name: Optional[str] = Field(default=UNSET, alias="providerName")
    """The name of the service provider associated with the interconnect."""

    mac_sec_capable: Optional[bool] = Field(default=UNSET, alias="macSecCapable")
    """Indicates whether the interconnect supports MAC Security (MACsec)."""

    port_encryption_status: Optional[str] = Field(default=UNSET, alias="portEncryptionStatus")
    """The MAC Security (MACsec) port link status. The valid values are Encryption Up, which means that there is an
    active Connection Key Name, or Encryption Down."""

    encryption_mode: Optional[str] = Field(default=UNSET, alias="encryptionMode")
    """The MAC Security (MACsec) encryption mode. The valid values are no_encrypt, should_encrypt, and must_encrypt."""

    mac_sec_keys: Optional[list[MacSecKey]] = Field(default=UNSET, alias="macSecKeys")
    """The MAC Security (MACsec) security keys."""


class InterconnectDict(TypedDict):
    interconnect_id: NotRequired[str]
    interconnect_name: NotRequired[str]
    interconnect_state: NotRequired[InterconnectStateOrStr]
    region: NotRequired[str]
    location: NotRequired[str]
    bandwidth: NotRequired[str]
    loa_issue_time: NotRequired[RFC3339DateTime]
    lag_id: NotRequired[str]
    aws_device: NotRequired[str]
    jumbo_frame_capable: NotRequired[bool]
    aws_device_v2: NotRequired[str]
    aws_logical_device_id: NotRequired[str]
    has_logical_redundancy: NotRequired[HasLogicalRedundancy1OrStr]
    tags: NotRequired[list[TagModelDict]]
    provider_name: NotRequired[str]
    mac_sec_capable: NotRequired[bool]
    port_encryption_status: NotRequired[str]
    encryption_mode: NotRequired[str]
    mac_sec_keys: NotRequired[list[MacSecKeyDict]]
