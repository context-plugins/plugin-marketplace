from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .resource_link import ResourceLink, ResourceLinkDict


class GetUserConnectionData(SdkBaseModel):
    """Object containing connection data."""

    type_: str = Field(alias="type")
    """Always "connection"."""

    id: str
    """Connection identification."""

    links: ResourceLink
    """Link object containing a link to the resource, self reference."""


class GetUserConnectionDataDict(TypedDict):
    type_: str
    id: str
    links: ResourceLinkDict
