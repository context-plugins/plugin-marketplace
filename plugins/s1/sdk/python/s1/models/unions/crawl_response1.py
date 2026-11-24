from __future__ import annotations

from typing import TypeAlias

from ..crawl_response import CrawlResponse, CrawlResponseDict

CrawlResponse1: TypeAlias = CrawlResponse | list[CrawlResponse]

CrawlResponse1Dict: TypeAlias = CrawlResponseDict | list[CrawlResponseDict]
