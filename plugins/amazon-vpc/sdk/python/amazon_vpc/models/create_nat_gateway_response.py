from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .nat_gateway import NatGateway, NatGatewayDict


class CreateNatGatewayResponse(SdkBaseModel):
    """Response from the CreateNatGateway action"""

    nat_gateway: Optional[NatGateway] = Field(default=UNSET, alias="natGateway")
    """Describes a NAT gateway"""


class CreateNatGatewayResponseDict(TypedDict):
    nat_gateway: NotRequired[NatGatewayDict]
