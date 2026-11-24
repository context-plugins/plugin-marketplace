from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SmbLocalGroups(SdkBaseModel):
    gateway_admins: Optional[list[str]] = Field(default=UNSET, alias="GatewayAdmins")
    r"""A list of Active Directory users and groups that have local Gateway Admin permissions. Acceptable formats
    include: DOMAIN\User1, user1, DOMAIN\group1, and group1. Gateway Admins can use the Shared Folders Microsoft
    Management Console snap-in to force-close files that are open and locked."""


class SmbLocalGroupsDict(TypedDict):
    gateway_admins: NotRequired[list[str]]
