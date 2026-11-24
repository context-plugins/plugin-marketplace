from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type_google_search_console_sitemaps_api import TypeGoogleSearchConsoleSitemapsApiOrStr
from .wmx_sitemap_content import WmxSitemapContent, WmxSitemapContentDict


class WmxSitemap(SdkBaseModel):
    """Contains detailed information about a specific URL submitted as a `sitemap
    <https://support.google.com/webmasters/answer/156184>`__."""

    type_: Optional[TypeGoogleSearchConsoleSitemapsApiOrStr] = Field(default=UNSET, alias="type")
    """The type of the sitemap. For example: ``rssFeed``."""

    contents: Optional[list[WmxSitemapContent]] = UNSET
    """The various content types in the sitemap."""

    last_submitted: Optional[str] = Field(default=UNSET, alias="lastSubmitted")
    """Date & time in which this sitemap was submitted. Date format is in RFC 3339 format (yyyy-mm-dd)."""

    is_sitemaps_index: Optional[bool] = Field(default=UNSET, alias="isSitemapsIndex")
    """If true, the sitemap is a collection of sitemaps."""

    path: Optional[str] = UNSET
    """The url of the sitemap."""

    last_downloaded: Optional[str] = Field(default=UNSET, alias="lastDownloaded")
    """Date & time in which this sitemap was last downloaded. Date format is in RFC 3339 format (yyyy-mm-dd)."""

    is_pending: Optional[bool] = Field(default=UNSET, alias="isPending")
    """If true, the sitemap has not been processed."""

    warnings: Optional[str] = UNSET
    """Number of warnings for the sitemap. These are generally non-critical issues with URLs in the sitemaps."""

    errors: Optional[str] = UNSET
    """Number of errors in the sitemap. These are issues with the sitemap itself that need to be fixed before it can be
    processed correctly."""


class WmxSitemapDict(TypedDict):
    type_: NotRequired[TypeGoogleSearchConsoleSitemapsApiOrStr]
    contents: NotRequired[list[WmxSitemapContentDict]]
    last_submitted: NotRequired[str]
    is_sitemaps_index: NotRequired[bool]
    path: NotRequired[str]
    last_downloaded: NotRequired[str]
    is_pending: NotRequired[bool]
    warnings: NotRequired[str]
    errors: NotRequired[str]
