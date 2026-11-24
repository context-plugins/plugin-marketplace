from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .connection import Connection, ConnectionDict
from .enums.billing_mode4 import BillingMode4OrStr
from .enums.has_logical_redundancy2 import HasLogicalRedundancy2OrStr
from .enums.lag_state import LagStateOrStr
from .mac_sec_key import MacSecKey, MacSecKeyDict
from .rate_limiter_status import RateLimiterStatus, RateLimiterStatusDict
from .tag_model import TagModel, TagModelDict


class Lag(SdkBaseModel):
    connections_bandwidth: Optional[str] = Field(default=UNSET, alias="connectionsBandwidth")
    """The individual bandwidth of the physical connections bundled by the LAG. The possible values are 1Gbps, 10Gbps,
    100Gbps, or 400 Gbps.."""

    number_of_connections: Optional[int] = Field(default=UNSET, alias="numberOfConnections")
    """The number of physical dedicated connections initially provisioned and bundled by the LAG. You can have a maximum
    of four connections when the port speed is 1 Gbps or 10 Gbps, or two when the port speed is 100 Gbps or 400 Gbps."""

    lag_id: Optional[str] = Field(default=UNSET, alias="lagId")
    """The ID of the LAG."""

    owner_account: Optional[str] = Field(default=UNSET, alias="ownerAccount")
    """The ID of the Amazon Web Services account that owns the LAG."""

    lag_name: Optional[str] = Field(default=UNSET, alias="lagName")
    """The name of the LAG."""

    lag_state: Optional[LagStateOrStr] = Field(default=UNSET, alias="lagState")
    """The state of the LAG. The following are the possible values: requested: The initial state of a LAG. The LAG stays
    in the requested state until the Letter of Authorization (LOA) is available. pending: The LAG has been approved and
    is being initialized. available: The network link is established and the LAG is ready for use. down: The network
    link is down. deleting: The LAG is being deleted. deleted: The LAG is deleted. unknown: The state of the LAG is not
    available."""

    location: Optional[str] = UNSET
    """The location of the LAG."""

    region: Optional[str] = UNSET
    """The Amazon Web Services Region where the connection is located."""

    minimum_links: Optional[int] = Field(default=UNSET, alias="minimumLinks")
    """The minimum number of physical dedicated connections that must be operational for the LAG itself to be
    operational."""

    aws_device: Optional[str] = Field(default=UNSET, alias="awsDevice")
    """The Direct Connect endpoint that hosts the LAG."""

    aws_device_v2: Optional[str] = Field(default=UNSET, alias="awsDeviceV2")
    """The Direct Connect endpoint that hosts the LAG."""

    aws_logical_device_id: Optional[str] = Field(default=UNSET, alias="awsLogicalDeviceId")
    """The Direct Connect endpoint that terminates the logical connection. This device might be different than the
    device that terminates the physical connection."""

    connections: Optional[list[Connection]] = UNSET
    """The connections bundled by the LAG."""

    allows_hosted_connections: Optional[bool] = Field(default=UNSET, alias="allowsHostedConnections")
    """Indicates whether the LAG can host other connections."""

    jumbo_frame_capable: Optional[bool] = Field(default=UNSET, alias="jumboFrameCapable")
    """Indicates whether jumbo frames are supported."""

    has_logical_redundancy: Optional[HasLogicalRedundancy2OrStr] = Field(default=UNSET, alias="hasLogicalRedundancy")
    """Indicates whether the LAG supports a secondary BGP peer in the same address family (IPv4/IPv6)."""

    tags: Optional[list[TagModel]] = UNSET
    """The tags associated with the LAG."""

    provider_name: Optional[str] = Field(default=UNSET, alias="providerName")
    """The name of the service provider associated with the LAG."""

    mac_sec_capable: Optional[bool] = Field(default=UNSET, alias="macSecCapable")
    """Indicates whether the LAG supports MAC Security (MACsec)."""

    encryption_mode: Optional[str] = Field(default=UNSET, alias="encryptionMode")
    """The LAG MAC Security (MACsec) encryption mode. The valid values are no_encrypt, should_encrypt, and
    must_encrypt."""

    mac_sec_keys: Optional[list[MacSecKey]] = Field(default=UNSET, alias="macSecKeys")
    """The MAC Security (MACsec) security keys associated with the LAG."""

    prefix_pool_size_ipv4: Optional[int] = Field(default=UNSET, alias="prefixPoolSizeIpv4")
    """The total number of inbound IPv4 route prefixes you can allocate across the virtual interfaces on the LAG. Not
    applicable to LAGs that are interconnects and support hosted connections."""

    prefix_pool_size_ipv6: Optional[int] = Field(default=UNSET, alias="prefixPoolSizeIpv6")
    """The total number of inbound IPv6 route prefixes you can allocate across the virtual interfaces on the LAG. Not
    applicable to LAGs that are interconnects and support hosted connections."""

    prefix_pool_unallocated_count_ipv4: Optional[int] = Field(default=UNSET, alias="prefixPoolUnallocatedCountIpv4")
    """The number of inbound IPv4 route prefixes in the LAG prefix pool not yet allocated to a virtual interface. Not
    applicable to LAGs that are interconnects and support hosted connections."""

    prefix_pool_unallocated_count_ipv6: Optional[int] = Field(default=UNSET, alias="prefixPoolUnallocatedCountIpv6")
    """The number of inbound IPv6 route prefixes in the LAG prefix pool not yet allocated to a virtual interface. Not
    applicable to LAGs that are interconnects and support hosted connections."""

    rate_limiter_status: Optional[RateLimiterStatus] = Field(default=UNSET, alias="rateLimiterStatus")
    billing_mode: Optional[BillingMode4OrStr] = Field(default=UNSET, alias="billingMode")
    """The billing mode of the LAG."""


class LagDict(TypedDict):
    connections_bandwidth: NotRequired[str]
    number_of_connections: NotRequired[int]
    lag_id: NotRequired[str]
    owner_account: NotRequired[str]
    lag_name: NotRequired[str]
    lag_state: NotRequired[LagStateOrStr]
    location: NotRequired[str]
    region: NotRequired[str]
    minimum_links: NotRequired[int]
    aws_device: NotRequired[str]
    aws_device_v2: NotRequired[str]
    aws_logical_device_id: NotRequired[str]
    connections: NotRequired[list[ConnectionDict]]
    allows_hosted_connections: NotRequired[bool]
    jumbo_frame_capable: NotRequired[bool]
    has_logical_redundancy: NotRequired[HasLogicalRedundancy2OrStr]
    tags: NotRequired[list[TagModelDict]]
    provider_name: NotRequired[str]
    mac_sec_capable: NotRequired[bool]
    encryption_mode: NotRequired[str]
    mac_sec_keys: NotRequired[list[MacSecKeyDict]]
    prefix_pool_size_ipv4: NotRequired[int]
    prefix_pool_size_ipv6: NotRequired[int]
    prefix_pool_unallocated_count_ipv4: NotRequired[int]
    prefix_pool_unallocated_count_ipv6: NotRequired[int]
    rate_limiter_status: NotRequired[RateLimiterStatusDict]
    billing_mode: NotRequired[BillingMode4OrStr]
