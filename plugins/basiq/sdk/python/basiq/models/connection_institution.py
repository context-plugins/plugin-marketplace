from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .resource_link import ResourceLink, ResourceLinkDict


class ConnectionInstitution(SdkBaseModel):
    """Institution details."""

    id: str
    """Institution id"""

    links: ResourceLink
    """Link object containing a link to the resource, self reference."""

    type_: str = Field(alias="type")
    """Always "institution"."""


class ConnectionInstitutionDict(TypedDict):
    id: str
    links: ResourceLinkDict
    type_: str
