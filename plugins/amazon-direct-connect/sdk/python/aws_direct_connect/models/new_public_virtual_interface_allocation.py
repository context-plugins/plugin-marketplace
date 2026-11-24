from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.address_family import AddressFamilyOrStr
from .route_filter_prefix import RouteFilterPrefix, RouteFilterPrefixDict
from .tag_model import TagModel, TagModelDict


class NewPublicVirtualInterfaceAllocation(SdkBaseModel):
    virtual_interface_name: str = Field(alias="virtualInterfaceName")
    """The name of the virtual interface assigned by the customer network. The name has a maximum of 100 characters. The
    following are valid characters: a-z, 0-9 and a hyphen (-)."""

    vlan: int
    """The ID of the VLAN."""

    asn: Optional[int] = UNSET
    """The autonomous system number (ASN). The valid range is from 1 to 2147483646 for Border Gateway Protocol (BGP)
    configuration. If you provide a number greater than the maximum, an error is returned. Use asnLong instead. You can
    use asnLong or asn, but not both. We recommend using asnLong as it supports a greater pool of numbers. If you
    provide a value in the same API call for both asn and asnLong, the API will only accept the value for asnLong. If
    you enter a 4-byte ASN for the asn parameter, the API returns an error. If you are using a 2-byte ASN, the API
    response will include the 2-byte value"""

    asn_long: Optional[int] = Field(default=UNSET, alias="asnLong")
    """The ASN when allocating a new public virtual interface. The valid range is from 1 to 4294967294 for BGP
    configuration. Note the following limitations when using asnLong: You can use asnLong or asn, but not both. We
    recommend using asnLong as it supports a greater pool of numbers. asnLong accepts any valid ASN value, regardless if
    it's 2-byte or 4-byte. When using a 4-byte asnLong, the API response returns 0 for the legacy asn attribute since
    4-byte ASN values exceed the maximum supported value of 2,147,483,647. If you are using a 2-byte ASN, the API
    response will include the 2-byte value for b"""

    auth_key: Optional[str] = Field(default=UNSET, alias="authKey")
    """The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun
    lenth of 80 characters."""

    amazon_address: Optional[str] = Field(default=UNSET, alias="amazonAddress")
    """The IP address assigned to the Amazon interface."""

    customer_address: Optional[str] = Field(default=UNSET, alias="customerAddress")
    """The IP address assigned to the customer interface."""

    address_family: Optional[AddressFamilyOrStr] = Field(default=UNSET, alias="addressFamily")
    """The address family for the BGP peer."""

    route_filter_prefixes: Optional[list[RouteFilterPrefix]] = Field(default=UNSET, alias="routeFilterPrefixes")
    """The routes to be advertised to the Amazon Web Services network in this Region. Applies to public virtual
    interfaces."""

    tags: Optional[list[TagModel]] = UNSET
    """The tags associated with the public virtual interface."""

    rate_limit: Optional[str] = Field(default=UNSET, alias="rateLimit")
    """The rate limit (bandwidth allocation) to apply to the virtual interface. The rate limit restricts the maximum
    bandwidth that the virtual interface can use on the parent connection."""


class NewPublicVirtualInterfaceAllocationDict(TypedDict):
    virtual_interface_name: str
    vlan: int
    asn: NotRequired[int]
    asn_long: NotRequired[int]
    auth_key: NotRequired[str]
    amazon_address: NotRequired[str]
    customer_address: NotRequired[str]
    address_family: NotRequired[AddressFamilyOrStr]
    route_filter_prefixes: NotRequired[list[RouteFilterPrefixDict]]
    tags: NotRequired[list[TagModelDict]]
    rate_limit: NotRequired[str]
