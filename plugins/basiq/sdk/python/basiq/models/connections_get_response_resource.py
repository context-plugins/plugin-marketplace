from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .datum_connections_api import DatumConnectionsApi, DatumConnectionsApiDict
from .resource_link import ResourceLink, ResourceLinkDict


class ConnectionsGetResponseResource(SdkBaseModel):
    """Object containing details for connections."""

    type_: str = Field(alias="type")
    """Type, always "list"."""

    data: Optional[list[DatumConnectionsApi]] = UNSET
    links: Optional[ResourceLink] = UNSET
    """Link object containing a link to the resource, self reference."""


class ConnectionsGetResponseResourceDict(TypedDict):
    type_: str
    data: NotRequired[list[DatumConnectionsApiDict]]
    links: NotRequired[ResourceLinkDict]
