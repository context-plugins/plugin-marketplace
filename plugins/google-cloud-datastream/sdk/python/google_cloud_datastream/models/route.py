from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Route(SdkBaseModel):
    """The route resource is the child of the private connection resource, used for defining a route for a private
    connection."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Required. Display name."""

    name: Optional[str] = UNSET
    """Output only. Identifier. The resource's name."""

    destination_port: Optional[int] = Field(default=UNSET, alias="destinationPort")
    """Destination port for connection"""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. The create time of the resource."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. The update time of the resource."""

    destination_address: Optional[str] = Field(default=UNSET, alias="destinationAddress")
    """Required. Destination address for connection"""

    labels: Optional[dict[str, str]] = UNSET
    """Labels."""


class RouteDict(TypedDict):
    display_name: NotRequired[str]
    name: NotRequired[str]
    destination_port: NotRequired[int]
    create_time: NotRequired[str]
    update_time: NotRequired[str]
    destination_address: NotRequired[str]
    labels: NotRequired[dict[str, str]]
