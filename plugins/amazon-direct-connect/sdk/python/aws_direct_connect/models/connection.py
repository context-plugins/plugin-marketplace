from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.billing_mode1 import BillingMode1OrStr
from .enums.connection_state import ConnectionStateOrStr
from .enums.has_logical_redundancy import HasLogicalRedundancyOrStr
from .mac_sec_key import MacSecKey, MacSecKeyDict
from .rate_limiter_status import RateLimiterStatus, RateLimiterStatusDict
from .tag_model import TagModel, TagModelDict


class Connection(SdkBaseModel):
    owner_account: Optional[str] = Field(default=UNSET, alias="ownerAccount")
    """The ID of the Amazon Web Services account that owns the connection."""

    connection_id: Optional[str] = Field(default=UNSET, alias="connectionId")
    """The ID of the connection."""

    connection_name: Optional[str] = Field(default=UNSET, alias="connectionName")
    """The name of the connection."""

    connection_state: Optional[ConnectionStateOrStr] = Field(default=UNSET, alias="connectionState")
    """The state of the connection. The following are the possible values: ordering: The initial state of a hosted
    connection provisioned on an interconnect. The connection stays in the ordering state until the owner of the hosted
    connection confirms or declines the connection order. requested: The initial state of a standard connection. The
    connection stays in the requested state until the Letter of Authorization (LOA) is sent to the customer. pending:
    The connection has been approved and is being initialized. available: The network link is up and the connection is
    ready for use. down: The network l"""

    region: Optional[str] = UNSET
    """The Amazon Web Services Region where the connection is located."""

    location: Optional[str] = UNSET
    """The location of the connection."""

    bandwidth: Optional[str] = UNSET
    """The bandwidth of the connection."""

    vlan: Optional[int] = UNSET
    """The ID of the VLAN."""

    partner_name: Optional[str] = Field(default=UNSET, alias="partnerName")
    """The name of the Direct Connect service provider associated with the connection."""

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

    has_logical_redundancy: Optional[HasLogicalRedundancyOrStr] = Field(default=UNSET, alias="hasLogicalRedundancy")
    """Indicates whether the connection supports a secondary BGP peer in the same address family (IPv4/IPv6)."""

    tags: Optional[list[TagModel]] = UNSET
    """The tags associated with the connection."""

    provider_name: Optional[str] = Field(default=UNSET, alias="providerName")
    """The name of the service provider associated with the connection."""

    mac_sec_capable: Optional[bool] = Field(default=UNSET, alias="macSecCapable")
    """Indicates whether the connection supports MAC Security (MACsec)."""

    port_encryption_status: Optional[str] = Field(default=UNSET, alias="portEncryptionStatus")
    """The MAC Security (MACsec) port link status of the connection. The valid values are Encryption Up, which means
    that there is an active Connection Key Name, or Encryption Down."""

    encryption_mode: Optional[str] = Field(default=UNSET, alias="encryptionMode")
    """The MAC Security (MACsec) connection encryption mode. The valid values are no_encrypt, should_encrypt, and
    must_encrypt."""

    mac_sec_keys: Optional[list[MacSecKey]] = Field(default=UNSET, alias="macSecKeys")
    """The MAC Security (MACsec) security keys associated with the connection."""

    rate_limiter_status: Optional[RateLimiterStatus] = Field(default=UNSET, alias="rateLimiterStatus")
    partner_interconnect_mac_sec_capable: Optional[bool] = Field(
        default=UNSET, alias="partnerInterconnectMacSecCapable"
    )
    """Indicates whether the interconnect hosting this connection supports MAC Security (MACsec)."""

    prefix_pool_size_ipv4: Optional[int] = Field(default=UNSET, alias="prefixPoolSizeIpv4")
    """The total number of inbound IPv4 route prefixes you can allocate across the virtual interfaces on the connection.
    Not applicable to hosted connections or interconnects."""

    prefix_pool_size_ipv6: Optional[int] = Field(default=UNSET, alias="prefixPoolSizeIpv6")
    """The total number of inbound IPv6 route prefixes you can allocate across the virtual interfaces on the connection.
    Not applicable to hosted connections or interconnects."""

    prefix_pool_unallocated_count_ipv4: Optional[int] = Field(default=UNSET, alias="prefixPoolUnallocatedCountIpv4")
    """The number of inbound IPv4 route prefixes in the connection prefix pool not yet allocated to a virtual interface.
    Not applicable to hosted connections or interconnects."""

    prefix_pool_unallocated_count_ipv6: Optional[int] = Field(default=UNSET, alias="prefixPoolUnallocatedCountIpv6")
    """The number of inbound IPv6 route prefixes in the connection prefix pool not yet allocated to a virtual interface.
    Not applicable to hosted connections or interconnects."""

    billing_mode: Optional[BillingMode1OrStr] = Field(default=UNSET, alias="billingMode")
    """The billing mode of the connection."""


class ConnectionDict(TypedDict):
    owner_account: NotRequired[str]
    connection_id: NotRequired[str]
    connection_name: NotRequired[str]
    connection_state: NotRequired[ConnectionStateOrStr]
    region: NotRequired[str]
    location: NotRequired[str]
    bandwidth: NotRequired[str]
    vlan: NotRequired[int]
    partner_name: NotRequired[str]
    loa_issue_time: NotRequired[RFC3339DateTime]
    lag_id: NotRequired[str]
    aws_device: NotRequired[str]
    jumbo_frame_capable: NotRequired[bool]
    aws_device_v2: NotRequired[str]
    aws_logical_device_id: NotRequired[str]
    has_logical_redundancy: NotRequired[HasLogicalRedundancyOrStr]
    tags: NotRequired[list[TagModelDict]]
    provider_name: NotRequired[str]
    mac_sec_capable: NotRequired[bool]
    port_encryption_status: NotRequired[str]
    encryption_mode: NotRequired[str]
    mac_sec_keys: NotRequired[list[MacSecKeyDict]]
    rate_limiter_status: NotRequired[RateLimiterStatusDict]
    partner_interconnect_mac_sec_capable: NotRequired[bool]
    prefix_pool_size_ipv4: NotRequired[int]
    prefix_pool_size_ipv6: NotRequired[int]
    prefix_pool_unallocated_count_ipv4: NotRequired[int]
    prefix_pool_unallocated_count_ipv6: NotRequired[int]
    billing_mode: NotRequired[BillingMode1OrStr]
