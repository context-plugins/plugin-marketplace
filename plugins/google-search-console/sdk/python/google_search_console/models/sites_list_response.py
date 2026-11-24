from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .wmx_site import WmxSite, WmxSiteDict


class SitesListResponse(SdkBaseModel):
    """List of sites with access level information."""

    site_entry: Optional[list[WmxSite]] = Field(default=UNSET, alias="siteEntry")
    """Contains permission level information about a Search Console site. For more information, see `Permissions in
    Search Console <https://support.google.com/webmasters/answer/2451999>`__."""


class SitesListResponseDict(TypedDict):
    site_entry: NotRequired[list[WmxSiteDict]]
