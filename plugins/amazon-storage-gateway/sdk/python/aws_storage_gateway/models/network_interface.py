from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class NetworkInterface(SdkBaseModel):
    ipv4_address: Optional[str] = Field(default=UNSET, alias="Ipv4Address")
    """The Internet Protocol version 4 (IPv4) address of the interface."""

    mac_address: Optional[str] = Field(default=UNSET, alias="MacAddress")
    """The Media Access Control (MAC) address of the interface. This is currently unsupported and will not be returned
    in output."""

    ipv6_address: Optional[str] = Field(default=UNSET, alias="Ipv6Address")
    """The Internet Protocol version 6 (IPv6) address of the interface. This element returns IPv6 addresses for all
    gateway types except FSx File Gateway."""


class NetworkInterfaceDict(TypedDict):
    ipv4_address: NotRequired[str]
    mac_address: NotRequired[str]
    ipv6_address: NotRequired[str]
