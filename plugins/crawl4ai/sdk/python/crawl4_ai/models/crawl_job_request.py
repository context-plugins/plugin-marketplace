from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CrawlJobRequest(SdkBaseModel):
    urls: list[str]
    """List of URLs to crawl"""


class CrawlJobRequestDict(TypedDict):
    urls: list[str]
