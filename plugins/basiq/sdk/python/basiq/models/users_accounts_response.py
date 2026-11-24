from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .account_response_resource import AccountResponseResource, AccountResponseResourceDict
from .resource_account_link import ResourceAccountLink, ResourceAccountLinkDict


class UsersAccountsResponse(SdkBaseModel):
    type_: str = Field(alias="type")
    """Type of the response, always "list"."""

    data: list[AccountResponseResource]
    """Container object, containing account details."""

    links: ResourceAccountLink
    """Link object containing a link to the resource, self reference."""


class UsersAccountsResponseDict(TypedDict):
    type_: str
    data: list[AccountResponseResourceDict]
    links: ResourceAccountLinkDict
