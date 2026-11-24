from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1SitemapgeneratorRequest(SdkBaseModel):
    urls: str
    """Array of URLs (strings or objects with url, priority, changeFreq, lastMod)"""

    base_url: Optional[str] = Field(default=UNSET, alias="baseUrl")
    """Base URL to prepend to relative paths"""

    change_freq: Optional[str] = Field(default=UNSET, alias="changeFreq")
    """Default change frequency"""

    priority: Optional[float] = UNSET
    """Default priority"""

    include_last_mod: Optional[bool] = Field(default=UNSET, alias="includeLastMod")
    """Include lastmod dates in sitemap"""


class V1SitemapgeneratorRequestDict(TypedDict):
    urls: str
    base_url: NotRequired[str]
    change_freq: NotRequired[str]
    priority: NotRequired[float]
    include_last_mod: NotRequired[bool]
