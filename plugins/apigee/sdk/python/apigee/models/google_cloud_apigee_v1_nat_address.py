from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.state10 import State10OrStr


class GoogleCloudApigeeV1NatAddress(SdkBaseModel):
    """Apigee NAT(network address translation) address. A NAT address is a static external IP address used for Internet
    egress traffic."""

    ip_address: Optional[str] = Field(default=UNSET, alias="ipAddress")
    """Output only. The static IPV4 address."""

    state: Optional[State10OrStr] = UNSET
    """Output only. State of the nat address."""

    name: Optional[str] = UNSET
    """Required. Resource ID of the NAT address."""


class GoogleCloudApigeeV1NatAddressDict(TypedDict):
    ip_address: NotRequired[str]
    state: NotRequired[State10OrStr]
    name: NotRequired[str]
