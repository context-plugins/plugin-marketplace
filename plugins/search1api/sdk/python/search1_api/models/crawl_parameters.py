from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CrawlParameters(SdkBaseModel):
    url: str


class CrawlParametersDict(TypedDict):
    url: str
