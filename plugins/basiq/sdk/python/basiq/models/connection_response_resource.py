from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .resource_link import ResourceLink, ResourceLinkDict


class ConnectionResponseResource(SdkBaseModel):
    """Object containing details for connection post."""

    type_: str = Field(alias="type")
    """Type, always "job"."""

    id: str
    """Job identification."""

    links: ResourceLink
    """Link object containing a link to the resource, self reference."""


class ConnectionResponseResourceDict(TypedDict):
    type_: str
    id: str
    links: ResourceLinkDict
