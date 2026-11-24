from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.address_family5 import AddressFamily5OrStr
from .enums.route_direction import RouteDirectionOrStr


class RouteFilters(SdkBaseModel):
    route_direction: Optional[RouteDirectionOrStr] = Field(default=UNSET, alias="routeDirection")
    """The direction of the routes to return. The valid values are accepted (routes received from the customer network)
    and advertised (routes advertised to the customer network)."""

    address_family: Optional[AddressFamily5OrStr] = Field(default=UNSET, alias="addressFamily")
    """The address family of the routes to return. The valid values are ipv4 and ipv6."""

    cidrs: Optional[list[str]] = UNSET
    """The CIDRs (prefixes) used to filter the routes. You can specify up to 10 CIDRs."""

    as_path: Optional[list[int]] = Field(default=UNSET, alias="asPath")
    """The autonomous system (AS) numbers used to filter the routes by their AS path."""

    communities: Optional[list[str]] = UNSET
    """The BGP communities used to filter the routes."""


class RouteFiltersDict(TypedDict):
    route_direction: NotRequired[RouteDirectionOrStr]
    address_family: NotRequired[AddressFamily5OrStr]
    cidrs: NotRequired[list[str]]
    as_path: NotRequired[list[int]]
    communities: NotRequired[list[str]]
