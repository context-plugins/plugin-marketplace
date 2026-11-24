from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .crawl_parameters import CrawlParameters, CrawlParametersDict
from .crawl_result import CrawlResult, CrawlResultDict


class CrawlResponse(SdkBaseModel):
    crawl_parameters: CrawlParameters = Field(alias="crawlParameters")
    results: CrawlResult


class CrawlResponseDict(TypedDict):
    crawl_parameters: CrawlParametersDict
    results: CrawlResultDict
