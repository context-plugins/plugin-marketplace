from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .tag_model import TagModel, TagModelDict


class CreateDirectConnectGatewayRequest(SdkBaseModel):
    direct_connect_gateway_name: str = Field(alias="directConnectGatewayName")
    """The name of the Direct Connect gateway."""

    tags: Optional[list[TagModel]] = UNSET
    """The key-value pair tags associated with the request."""

    amazon_side_asn: Optional[int] = Field(default=UNSET, alias="amazonSideAsn")
    """The autonomous system number (ASN) for Border Gateway Protocol (BGP) to be configured on the Amazon side of the
    connection. The ASN must be in the private range of 64,512 to 65,534 or 4,200,000,000 to 4,294,967,294. The default
    is 64512."""


class CreateDirectConnectGatewayRequestDict(TypedDict):
    direct_connect_gateway_name: str
    tags: NotRequired[list[TagModelDict]]
    amazon_side_asn: NotRequired[int]
