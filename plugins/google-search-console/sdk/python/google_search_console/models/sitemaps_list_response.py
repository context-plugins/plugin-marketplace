from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .wmx_sitemap import WmxSitemap, WmxSitemapDict


class SitemapsListResponse(SdkBaseModel):
    """List of sitemaps."""

    sitemap: Optional[list[WmxSitemap]] = UNSET
    """Contains detailed information about a specific URL submitted as a `sitemap
    <https://support.google.com/webmasters/answer/156184>`__."""


class SitemapsListResponseDict(TypedDict):
    sitemap: NotRequired[list[WmxSitemapDict]]
