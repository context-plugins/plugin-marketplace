from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .association import Association, AssociationDict
from .route import Route, RouteDict
from .tag_model import TagModel, TagModelDict


class RouteTable(SdkBaseModel):
    """Describes a route table"""

    route_table_id: Optional[str] = Field(default=UNSET, alias="routeTableId")
    """The ID of the route table"""

    vpc_id: Optional[str] = Field(default=UNSET, alias="vpcId")
    """The ID of the VPC"""

    routes: Optional[list[Route]] = UNSET
    """The routes in the route table"""

    associations: Optional[list[Association]] = UNSET
    """The associations between the route table and subnets or gateways"""

    owner_id: Optional[str] = Field(default=UNSET, alias="ownerId")
    """The ID of the AWS account that owns the route table"""

    tags: Optional[list[TagModel]] = UNSET
    """Any tags assigned to the route table"""


class RouteTableDict(TypedDict):
    route_table_id: NotRequired[str]
    vpc_id: NotRequired[str]
    routes: NotRequired[list[RouteDict]]
    associations: NotRequired[list[AssociationDict]]
    owner_id: NotRequired[str]
    tags: NotRequired[list[TagModelDict]]
