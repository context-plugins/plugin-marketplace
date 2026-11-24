from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .route_filter_prefix import RouteFilterPrefix, RouteFilterPrefixDict


class UpdateDirectConnectGatewayAssociationRequest(SdkBaseModel):
    association_id: Optional[str] = Field(default=UNSET, alias="associationId")
    """The ID of the Direct Connect gateway association."""

    add_allowed_prefixes_to_direct_connect_gateway: Optional[list[RouteFilterPrefix]] = Field(
        default=UNSET, alias="addAllowedPrefixesToDirectConnectGateway"
    )
    """The Amazon VPC prefixes to advertise to the Direct Connect gateway."""

    remove_allowed_prefixes_to_direct_connect_gateway: Optional[list[RouteFilterPrefix]] = Field(
        default=UNSET, alias="removeAllowedPrefixesToDirectConnectGateway"
    )
    """The Amazon VPC prefixes to no longer advertise to the Direct Connect gateway."""


class UpdateDirectConnectGatewayAssociationRequestDict(TypedDict):
    association_id: NotRequired[str]
    add_allowed_prefixes_to_direct_connect_gateway: NotRequired[list[RouteFilterPrefixDict]]
    remove_allowed_prefixes_to_direct_connect_gateway: NotRequired[list[RouteFilterPrefixDict]]
