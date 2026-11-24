from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.address_family import AddressFamilyOrStr
from .enums.bgp_peer_state import BgpPeerStateOrStr
from .enums.bgp_status import BgpStatusOrStr


class BgpPeer(SdkBaseModel):
    bgp_peer_id: Optional[str] = Field(default=UNSET, alias="bgpPeerId")
    """The ID of the BGP peer."""

    asn: Optional[int] = UNSET
    """The autonomous system number (ASN). The valid range is from 1 to 2147483646 for Border Gateway Protocol (BGP)
    configuration. If you provide a number greater than the maximum, an error is returned. Use asnLong instead. You can
    use asnLong or asn, but not both. We recommend using asnLong as it supports a greater pool of numbers. If you
    provide a value in the same API call for both asn and asnLong, the API will only accept the value for asnLong. If
    you enter a 4-byte ASN for the asn parameter, the API returns an error. If you are using a 2-byte ASN, the API
    response will include the 2-byte value"""

    asn_long: Optional[int] = Field(default=UNSET, alias="asnLong")
    """The long ASN for the BGP peer. The valid range is from 1 to 4294967294 for BGP configuration. Note the following
    limitations when using asnLong: You can use asnLong or asn, but not both. We recommend using asnLong as it supports
    a greater pool of numbers. asnLong accepts any valid ASN value, regardless if it's 2-byte or 4-byte. When using a
    4-byte asnLong, the API response returns 0 for the legacy asn attribute since 4-byte ASN values exceed the maximum
    supported value of 2,147,483,647. If you are using a 2-byte ASN, the API response will include the 2-byte value for
    both the asn and asnLong f"""

    auth_key: Optional[str] = Field(default=UNSET, alias="authKey")
    """The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun
    lenth of 80 characters."""

    address_family: Optional[AddressFamilyOrStr] = Field(default=UNSET, alias="addressFamily")
    """The address family for the BGP peer."""

    amazon_address: Optional[str] = Field(default=UNSET, alias="amazonAddress")
    """The IP address assigned to the Amazon interface."""

    customer_address: Optional[str] = Field(default=UNSET, alias="customerAddress")
    """The IP address assigned to the customer interface."""

    bgp_peer_state: Optional[BgpPeerStateOrStr] = Field(default=UNSET, alias="bgpPeerState")
    """The state of the BGP peer. The following are the possible values: verifying: The BGP peering addresses or ASN
    require validation before the BGP peer can be created. This state applies only to public virtual interfaces.
    pending: The BGP peer is created, and remains in this state until it is ready to be established. available: The BGP
    peer is ready to be established. deleting: The BGP peer is being deleted. deleted: The BGP peer is deleted and
    cannot be established."""

    bgp_status: Optional[BgpStatusOrStr] = Field(default=UNSET, alias="bgpStatus")
    """The status of the BGP peer. The following are the possible values: up: The BGP peer is established. This state
    does not indicate the state of the routing function. Ensure that you are receiving routes over the BGP session.
    down: The BGP peer is down. unknown: The BGP peer status is not available."""

    aws_device_v2: Optional[str] = Field(default=UNSET, alias="awsDeviceV2")
    """The Direct Connect endpoint that terminates the BGP peer."""

    aws_logical_device_id: Optional[str] = Field(default=UNSET, alias="awsLogicalDeviceId")
    """The Direct Connect endpoint that terminates the logical connection. This device might be different than the
    device that terminates the physical connection."""


class BgpPeerDict(TypedDict):
    bgp_peer_id: NotRequired[str]
    asn: NotRequired[int]
    asn_long: NotRequired[int]
    auth_key: NotRequired[str]
    address_family: NotRequired[AddressFamilyOrStr]
    amazon_address: NotRequired[str]
    customer_address: NotRequired[str]
    bgp_peer_state: NotRequired[BgpPeerStateOrStr]
    bgp_status: NotRequired[BgpStatusOrStr]
    aws_device_v2: NotRequired[str]
    aws_logical_device_id: NotRequired[str]
