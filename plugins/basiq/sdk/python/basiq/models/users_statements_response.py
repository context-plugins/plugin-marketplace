from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .resource_link import ResourceLink, ResourceLinkDict


class UsersStatementsResponse(SdkBaseModel):
    """Object containing details for the statement upload process"""

    type_: str = Field(alias="type")
    """The type of resource, always "job"."""

    id: str
    """The unique identifier of the job."""

    links: ResourceLink
    """Link object containing a link to the resource, self reference."""


class UsersStatementsResponseDict(TypedDict):
    type_: str
    id: str
    links: ResourceLinkDict
