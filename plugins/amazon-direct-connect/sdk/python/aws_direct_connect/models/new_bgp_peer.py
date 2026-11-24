from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.address_family import AddressFamilyOrStr


class NewBgpPeer(SdkBaseModel):
    asn: Optional[int] = UNSET
    """The autonomous system number (ASN). The valid range is from 1 to 2147483646 for Border Gateway Protocol (BGP)
    configuration. If you provide a number greater than the maximum, an error is returned. Use asnLong instead."""

    asn_long: Optional[int] = Field(default=UNSET, alias="asnLong")
    """The long ASN for a new BGP peer. The valid range is from 1 to 4294967294."""

    auth_key: Optional[str] = Field(default=UNSET, alias="authKey")
    """The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun
    lenth of 80 characters."""

    address_family: Optional[AddressFamilyOrStr] = Field(default=UNSET, alias="addressFamily")
    """The address family for the BGP peer."""

    amazon_address: Optional[str] = Field(default=UNSET, alias="amazonAddress")
    """The IP address assigned to the Amazon interface."""

    customer_address: Optional[str] = Field(default=UNSET, alias="customerAddress")
    """The IP address assigned to the customer interface."""


class NewBgpPeerDict(TypedDict):
    asn: NotRequired[int]
    asn_long: NotRequired[int]
    auth_key: NotRequired[str]
    address_family: NotRequired[AddressFamilyOrStr]
    amazon_address: NotRequired[str]
    customer_address: NotRequired[str]
