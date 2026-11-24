from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1WebimagescraperRequest(SdkBaseModel):
    url: str
    """The URL of the website you want to scrape images from"""

    maxlinks: Optional[int] = UNSET
    """The limit of image URLs returned from your query"""

    includequery: Optional[bool] = UNSET
    """Keep query strings on the scraped image URLs instead of trimming them"""


class V1WebimagescraperRequestDict(TypedDict):
    url: str
    maxlinks: NotRequired[int]
    includequery: NotRequired[bool]
