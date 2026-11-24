from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.permission_level import PermissionLevelOrStr


class WmxSite(SdkBaseModel):
    """Contains permission level information about a Search Console site. For more information, see `Permissions in
    Search Console <https://support.google.com/webmasters/answer/2451999>`__."""

    site_url: Optional[str] = Field(default=UNSET, alias="siteUrl")
    """The URL of the site."""

    permission_level: Optional[PermissionLevelOrStr] = Field(default=UNSET, alias="permissionLevel")
    """The user's permission level for the site."""


class WmxSiteDict(TypedDict):
    site_url: NotRequired[str]
    permission_level: NotRequired[PermissionLevelOrStr]
