from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class NatGatewayAddress(SdkBaseModel):
    allocation_id: Optional[str] = Field(default=UNSET, alias="allocationId")
    network_interface_id: Optional[str] = Field(default=UNSET, alias="networkInterfaceId")
    private_ip: Optional[str] = Field(default=UNSET, alias="privateIp")
    public_ip: Optional[str] = Field(default=UNSET, alias="publicIp")


class NatGatewayAddressDict(TypedDict):
    allocation_id: NotRequired[str]
    network_interface_id: NotRequired[str]
    private_ip: NotRequired[str]
    public_ip: NotRequired[str]
