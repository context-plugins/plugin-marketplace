from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Association(SdkBaseModel):
    route_table_association_id: Optional[str] = Field(default=UNSET, alias="routeTableAssociationId")
    route_table_id: Optional[str] = Field(default=UNSET, alias="routeTableId")
    subnet_id: Optional[str] = Field(default=UNSET, alias="subnetId")
    gateway_id: Optional[str] = Field(default=UNSET, alias="gatewayId")
    main: Optional[bool] = UNSET
    """Indicates whether this is the main route table"""


class AssociationDict(TypedDict):
    route_table_association_id: NotRequired[str]
    route_table_id: NotRequired[str]
    subnet_id: NotRequired[str]
    gateway_id: NotRequired[str]
    main: NotRequired[bool]
