from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1SeoscraperRequest(SdkBaseModel):
    url: str
    """The URL of the web page to scrape SEO data from"""


class V1SeoscraperRequestDict(TypedDict):
    url: str
