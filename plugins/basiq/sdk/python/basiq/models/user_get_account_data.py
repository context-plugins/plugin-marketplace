from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .resource_link import ResourceLink, ResourceLinkDict


class UserGetAccountData(SdkBaseModel):
    """Object containing account data."""

    type_: str = Field(alias="type")
    """Always "account"."""

    id: str
    """Account identification."""

    links: ResourceLink
    """Link object containing a link to the resource, self reference."""


class UserGetAccountDataDict(TypedDict):
    type_: str
    id: str
    links: ResourceLinkDict
