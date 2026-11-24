from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class NetworkInterface(SdkBaseModel):
    subnet_id: Optional[str] = Field(default=UNSET, alias="subnetId")
    """The ID of the subnet."""

    network_interface_id: Optional[str] = Field(default=UNSET, alias="networkInterfaceId")
    """The ID of the network interface."""


class NetworkInterfaceDict(TypedDict):
    subnet_id: NotRequired[str]
    network_interface_id: NotRequired[str]
