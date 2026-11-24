from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bgp_peer import BgpPeer, BgpPeerDict
from .enums.address_family import AddressFamilyOrStr
from .enums.virtual_interface_state import VirtualInterfaceStateOrStr
from .route_filter_prefix import RouteFilterPrefix, RouteFilterPrefixDict
from .tag_model import TagModel, TagModelDict


class VirtualInterface(SdkBaseModel):
    owner_account: Optional[str] = Field(default=UNSET, alias="ownerAccount")
    """The ID of the Amazon Web Services account that owns the virtual interface."""

    virtual_interface_id: Optional[str] = Field(default=UNSET, alias="virtualInterfaceId")
    """The ID of the virtual interface."""

    location: Optional[str] = UNSET
    """The location of the connection."""

    connection_id: Optional[str] = Field(default=UNSET, alias="connectionId")
    """The ID of the connection."""

    virtual_interface_type: Optional[str] = Field(default=UNSET, alias="virtualInterfaceType")
    """The type of virtual interface. The possible values are private, public and transit."""

    virtual_interface_name: Optional[str] = Field(default=UNSET, alias="virtualInterfaceName")
    """The name of the virtual interface assigned by the customer network. The name has a maximum of 100 characters. The
    following are valid characters: a-z, 0-9 and a hyphen (-)."""

    vlan: Optional[int] = UNSET
    """The ID of the VLAN."""

    asn: Optional[int] = UNSET
    """The autonomous system number (ASN). The valid range is from 1 to 2147483646 for Border Gateway Protocol (BGP)
    configuration. If you provide a number greater than the maximum, an error is returned. Use asnLong instead. You can
    use asnLong or asn, but not both. We recommend using asnLong as it supports a greater pool of numbers. If you
    provide a value in the same API call for both asn and asnLong, the API will only accept the value for asnLong. If
    you enter a 4-byte ASN for the asn parameter, the API returns an error. If you are using a 2-byte ASN, the API
    response will include the 2-byte value"""

    asn_long: Optional[int] = Field(default=UNSET, alias="asnLong")
    """The long ASN for the virtual interface. The valid range is from 1 to 4294967294 for BGP configuration. Note the
    following limitations when using asnLong: You can use asnLong or asn, but not both. We recommend using asnLong as it
    supports a greater pool of numbers. asnLong accepts any valid ASN value, regardless if it's 2-byte or 4-byte. When
    using a 4-byte asnLong, the API response returns 0 for the legacy asn attribute since 4-byte ASN values exceed the
    maximum supported value of 2,147,483,647. If you are using a 2-byte ASN, the API response will include the 2-byte
    value for both the asn and"""

    amazon_side_asn: Optional[int] = Field(default=UNSET, alias="amazonSideAsn")
    """The autonomous system number (AS) for the Amazon side of the connection."""

    auth_key: Optional[str] = Field(default=UNSET, alias="authKey")
    """The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun
    lenth of 80 characters."""

    amazon_address: Optional[str] = Field(default=UNSET, alias="amazonAddress")
    """The IP address assigned to the Amazon interface."""

    customer_address: Optional[str] = Field(default=UNSET, alias="customerAddress")
    """The IP address assigned to the customer interface."""

    address_family: Optional[AddressFamilyOrStr] = Field(default=UNSET, alias="addressFamily")
    """The address family for the BGP peer."""

    virtual_interface_state: Optional[VirtualInterfaceStateOrStr] = Field(default=UNSET, alias="virtualInterfaceState")
    """The state of the virtual interface. The following are the possible values: confirming: The creation of the
    virtual interface is pending confirmation from the virtual interface owner. If the owner of the virtual interface is
    different from the owner of the connection on which it is provisioned, then the virtual interface will remain in
    this state until it is confirmed by the virtual interface owner. verifying: This state only applies to public
    virtual interfaces. Each public virtual interface needs validation before the virtual interface can be created.
    pending: A virtual interface is in this s"""

    customer_router_config: Optional[str] = Field(default=UNSET, alias="customerRouterConfig")
    """The customer router configuration."""

    mtu: Optional[int] = UNSET
    """The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 8500. The default value is
    1500"""

    jumbo_frame_capable: Optional[bool] = Field(default=UNSET, alias="jumboFrameCapable")
    """Indicates whether jumbo frames are supported."""

    virtual_gateway_id: Optional[str] = Field(default=UNSET, alias="virtualGatewayId")
    """The ID of the virtual private gateway. Applies only to private virtual interfaces."""

    direct_connect_gateway_id: Optional[str] = Field(default=UNSET, alias="directConnectGatewayId")
    """The ID of the Direct Connect gateway."""

    route_filter_prefixes: Optional[list[RouteFilterPrefix]] = Field(default=UNSET, alias="routeFilterPrefixes")
    """The routes to be advertised to the Amazon Web Services network in this Region. Applies to public virtual
    interfaces."""

    bgp_peers: Optional[list[BgpPeer]] = Field(default=UNSET, alias="bgpPeers")
    """The BGP peers configured on this virtual interface."""

    region: Optional[str] = UNSET
    """The Amazon Web Services Region where the virtual interface is located."""

    aws_device_v2: Optional[str] = Field(default=UNSET, alias="awsDeviceV2")
    """The Direct Connect endpoint that terminates the physical connection."""

    aws_logical_device_id: Optional[str] = Field(default=UNSET, alias="awsLogicalDeviceId")
    """The Direct Connect endpoint that terminates the logical connection. This device might be different than the
    device that terminates the physical connection."""

    tags: Optional[list[TagModel]] = UNSET
    """The tags associated with the virtual interface."""

    site_link_enabled: Optional[bool] = Field(default=UNSET, alias="siteLinkEnabled")
    """Indicates whether SiteLink is enabled."""

    prefix_pool_allocated_count_ipv4: Optional[int] = Field(default=UNSET, alias="prefixPoolAllocatedCountIpv4")
    """The number of inbound IPv4 route prefixes allocated to the virtual interface. Not applicable to public virtual
    interfaces."""

    prefix_pool_allocated_count_ipv6: Optional[int] = Field(default=UNSET, alias="prefixPoolAllocatedCountIpv6")
    """The number of inbound IPv6 route prefixes allocated to the virtual interface. Not applicable to public virtual
    interfaces."""

    rate_limit: Optional[str] = Field(default=UNSET, alias="rateLimit")
    """The rate limit (bandwidth allocation) applied to the virtual interface. The value must be one of the supported
    bandwidth values and cannot exceed the bandwidth of the parent connection or LAG. Supported values: 50Mbps, 100Mbps,
    200Mbps, 300Mbps, 400Mbps, 500Mbps, 600Mbps, 700Mbps, 800Mbps, 900Mbps, 1Gbps, 1.2Gbps, 1.5Gbps, 1.8Gbps, 2Gbps,
    2.1Gbps, 2.4Gbps, 2.7Gbps, 3Gbps, 3.2Gbps, 3.6Gbps, 4Gbps, 5Gbps, 6Gbps, 7Gbps, 8Gbps, 9Gbps, 10Gbps, 12Gbps,
    15Gbps, 18Gbps, 20Gbps, 21Gbps, 24Gbps, 27Gbps, 30Gbps, 32Gbps, 36Gbps, 40Gbps, 50Gbps, 60Gbps, 70Gbps, 80Gbps,
    100Gbps, 120Gbps, 150Gbps, 180Gbps, 2"""


class VirtualInterfaceDict(TypedDict):
    owner_account: NotRequired[str]
    virtual_interface_id: NotRequired[str]
    location: NotRequired[str]
    connection_id: NotRequired[str]
    virtual_interface_type: NotRequired[str]
    virtual_interface_name: NotRequired[str]
    vlan: NotRequired[int]
    asn: NotRequired[int]
    asn_long: NotRequired[int]
    amazon_side_asn: NotRequired[int]
    auth_key: NotRequired[str]
    amazon_address: NotRequired[str]
    customer_address: NotRequired[str]
    address_family: NotRequired[AddressFamilyOrStr]
    virtual_interface_state: NotRequired[VirtualInterfaceStateOrStr]
    customer_router_config: NotRequired[str]
    mtu: NotRequired[int]
    jumbo_frame_capable: NotRequired[bool]
    virtual_gateway_id: NotRequired[str]
    direct_connect_gateway_id: NotRequired[str]
    route_filter_prefixes: NotRequired[list[RouteFilterPrefixDict]]
    bgp_peers: NotRequired[list[BgpPeerDict]]
    region: NotRequired[str]
    aws_device_v2: NotRequired[str]
    aws_logical_device_id: NotRequired[str]
    tags: NotRequired[list[TagModelDict]]
    site_link_enabled: NotRequired[bool]
    prefix_pool_allocated_count_ipv4: NotRequired[int]
    prefix_pool_allocated_count_ipv6: NotRequired[int]
    rate_limit: NotRequired[str]
