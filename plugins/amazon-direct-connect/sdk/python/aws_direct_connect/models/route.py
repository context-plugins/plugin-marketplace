from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .as_path_segment import AsPathSegment, AsPathSegmentDict
from .enums.address_family6 import AddressFamily6OrStr
from .enums.route_direction1 import RouteDirection1OrStr


class Route(SdkBaseModel):
    cidr: Optional[str] = UNSET
    """The CIDR (prefix) of the route."""

    route_direction: Optional[RouteDirection1OrStr] = Field(default=UNSET, alias="routeDirection")
    """The direction of the route. The valid values are accepted (received from the customer network) and advertised
    (advertised to the customer network)."""

    address_family: Optional[AddressFamily6OrStr] = Field(default=UNSET, alias="addressFamily")
    """The address family of the route. The valid values are ipv4 and ipv6."""

    as_path: Optional[list[AsPathSegment]] = Field(default=UNSET, alias="asPath")
    """The autonomous system (AS) path of the route."""

    communities: Optional[list[str]] = UNSET
    """The BGP communities associated with the route."""

    aws_logical_device_id: Optional[str] = Field(default=UNSET, alias="awsLogicalDeviceId")
    """The Direct Connect endpoint that terminates the logical connection. This device might be different than the
    device that terminates the physical connection."""

    route_installed_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="routeInstalledAt")
    """The time when the route was installed. The value is displayed in UTC format."""


class RouteDict(TypedDict):
    cidr: NotRequired[str]
    route_direction: NotRequired[RouteDirection1OrStr]
    address_family: NotRequired[AddressFamily6OrStr]
    as_path: NotRequired[list[AsPathSegmentDict]]
    communities: NotRequired[list[str]]
    aws_logical_device_id: NotRequired[str]
    route_installed_at: NotRequired[RFC3339DateTime]
