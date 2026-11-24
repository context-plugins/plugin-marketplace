from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DeleteBgpPeerRequest(SdkBaseModel):
    virtual_interface_id: Optional[str] = Field(default=UNSET, alias="virtualInterfaceId")
    """The ID of the virtual interface."""

    asn: Optional[int] = UNSET
    """The autonomous system number (ASN). The valid range is from 1 to 2147483646 for Border Gateway Protocol (BGP)
    configuration. If you provide a number greater than the maximum, an error is returned. Use asnLong instead. You can
    use asnLong or asn, but not both. We recommend using asnLong as it supports a greater pool of numbers. If you
    provide a value in the same API call for both asn and asnLong, the API will only accept the value for asnLong. If
    you enter a 4-byte ASN for the asn parameter, the API returns an error. If you are using a 2-byte ASN, the API
    response will include the 2-byte value"""

    asn_long: Optional[int] = Field(default=UNSET, alias="asnLong")
    """The long ASN for the BGP peer to be deleted from a Direct Connect virtual interface. The valid range is from 1 to
    4294967294 for BGP configuration. Note the following limitations when using asnLong: You can use asnLong or asn, but
    not both. We recommend using asnLong as it supports a greater pool of numbers. asnLong accepts any valid ASN value,
    regardless if it's 2-byte or 4-byte. When using a 4-byte asnLong, the API response returns 0 for the legacy asn
    attribute since 4-byte ASN values exceed the maximum supported value of 2,147,483,647. If you are using a 2-byte
    ASN, the API response will i"""

    customer_address: Optional[str] = Field(default=UNSET, alias="customerAddress")
    """The IP address assigned to the customer interface."""

    bgp_peer_id: Optional[str] = Field(default=UNSET, alias="bgpPeerId")
    """The ID of the BGP peer."""


class DeleteBgpPeerRequestDict(TypedDict):
    virtual_interface_id: NotRequired[str]
    asn: NotRequired[int]
    asn_long: NotRequired[int]
    customer_address: NotRequired[str]
    bgp_peer_id: NotRequired[str]
