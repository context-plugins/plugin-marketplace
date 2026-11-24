from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .connection_response_resource import ConnectionResponseResource, ConnectionResponseResourceDict


class ConnectionsRefreshResource(SdkBaseModel):
    """Object containing details for connections refresh."""

    type_: str = Field(alias="type")
    """Type, always "list"."""

    data: list[ConnectionResponseResource]
    """Job details data."""


class ConnectionsRefreshResourceDict(TypedDict):
    type_: str
    data: list[ConnectionResponseResourceDict]
