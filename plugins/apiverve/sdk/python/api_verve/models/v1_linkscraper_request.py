from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1LinkscraperRequest(SdkBaseModel):
    url: str
    """The URL of the web page to scrape links from"""

    maxlinks: Optional[float] = UNSET
    """Maximum number of links to scrape and return"""

    includequery: Optional[bool] = UNSET
    """Include query strings in the scraped links"""


class V1LinkscraperRequestDict(TypedDict):
    url: str
    maxlinks: NotRequired[float]
    includequery: NotRequired[bool]
