from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.address_family import AddressFamilyOrStr
from .tag_model import TagModel, TagModelDict


class NewTransitVirtualInterface(SdkBaseModel):
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
    """The long ASN for a new transit virtual interface.The valid range is from 1 to 4294967294 for BGP configuration.
    Note the following limitations when using asnLong: You can use asnLong or asn, but not both. We recommend using
    asnLong as it supports a greater pool of numbers. asnLong accepts any valid ASN value, regardless if it's 2-byte or
    4-byte. When using a 4-byte asnLong, the API response returns 0 for the legacy asn attribute since 4-byte ASN values
    exceed the maximum supported value of 2,147,483,647. If you are using a 2-byte ASN, the API response will include
    the 2-byte value for both the"""

    mtu: Optional[int] = UNSET
    """The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 8500. The default value is
    1500."""

    auth_key: Optional[str] = Field(default=UNSET, alias="authKey")
    """The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun
    lenth of 80 characters."""

    amazon_address: Optional[str] = Field(default=UNSET, alias="amazonAddress")
    """The IP address assigned to the Amazon interface."""

    customer_address: Optional[str] = Field(default=UNSET, alias="customerAddress")
    """The IP address assigned to the customer interface."""

    address_family: Optional[AddressFamilyOrStr] = Field(default=UNSET, alias="addressFamily")
    """The address family for the BGP peer."""

    direct_connect_gateway_id: Optional[str] = Field(default=UNSET, alias="directConnectGatewayId")
    """The ID of the Direct Connect gateway."""

    tags: Optional[list[TagModel]] = UNSET
    """The tags associated with the transitive virtual interface."""

    enable_site_link: Optional[bool] = Field(default=UNSET, alias="enableSiteLink")
    """Indicates whether to enable or disable SiteLink."""

    prefix_pool_allocated_count_ipv4: Optional[int] = Field(default=UNSET, alias="prefixPoolAllocatedCountIpv4")
    """The number of inbound IPv4 route prefixes to allocate to the virtual interface."""

    prefix_pool_allocated_count_ipv6: Optional[int] = Field(default=UNSET, alias="prefixPoolAllocatedCountIpv6")
    """The number of inbound IPv6 route prefixes to allocate to the virtual interface."""

    rate_limit: Optional[str] = Field(default=UNSET, alias="rateLimit")
    """The rate limit (bandwidth allocation) to apply to the virtual interface. The rate limit restricts the maximum
    bandwidth that the virtual interface can use on the parent connection."""


class NewTransitVirtualInterfaceDict(TypedDict):
    virtual_interface_name: NotRequired[str]
    vlan: NotRequired[int]
    asn: NotRequired[int]
    asn_long: NotRequired[int]
    mtu: NotRequired[int]
    auth_key: NotRequired[str]
    amazon_address: NotRequired[str]
    customer_address: NotRequired[str]
    address_family: NotRequired[AddressFamilyOrStr]
    direct_connect_gateway_id: NotRequired[str]
    tags: NotRequired[list[TagModelDict]]
    enable_site_link: NotRequired[bool]
    prefix_pool_allocated_count_ipv4: NotRequired[int]
    prefix_pool_allocated_count_ipv6: NotRequired[int]
    rate_limit: NotRequired[str]
