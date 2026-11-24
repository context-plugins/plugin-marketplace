from __future__ import annotations

from typing import TypeAlias

from ..crawl_request import CrawlRequest, CrawlRequestDict

CrawlRequest1: TypeAlias = CrawlRequest | list[CrawlRequest]

CrawlRequest1Dict: TypeAlias = CrawlRequestDict | list[CrawlRequestDict]
