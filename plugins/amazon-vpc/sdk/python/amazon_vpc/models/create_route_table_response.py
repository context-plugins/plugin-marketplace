from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .route_table import RouteTable, RouteTableDict


class CreateRouteTableResponse(SdkBaseModel):
    """Response from the CreateRouteTable action"""

    route_table: Optional[RouteTable] = Field(default=UNSET, alias="routeTable")
    """Describes a route table"""


class CreateRouteTableResponseDict(TypedDict):
    route_table: NotRequired[RouteTableDict]
