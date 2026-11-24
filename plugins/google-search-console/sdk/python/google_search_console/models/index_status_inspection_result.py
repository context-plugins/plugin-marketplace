from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.crawled_as import CrawledAsOrStr
from .enums.indexing_state import IndexingStateOrStr
from .enums.page_fetch_state import PageFetchStateOrStr
from .enums.robots_txt_state import RobotsTxtStateOrStr
from .enums.verdict1 import Verdict1OrStr


class IndexStatusInspectionResult(SdkBaseModel):
    """Results of index status inspection for either the live page or the version in Google's index, depending on
    whether you requested a live inspection or not. For more information, see the `Index coverage report documentation
    <https://support.google.com/webmasters/answer/7440203>`__."""

    indexing_state: Optional[IndexingStateOrStr] = Field(default=UNSET, alias="indexingState")
    """Whether or not the page blocks indexing through a noindex rule."""

    user_canonical: Optional[str] = Field(default=UNSET, alias="userCanonical")
    """The URL that your page or site `declares as canonical
    <https://developers.google.com/search/docs/advanced/crawling/consolidate-duplicate-urls?#define-canonical>`__. If
    you did not declare a canonical URL, this field is absent."""

    crawled_as: Optional[CrawledAsOrStr] = Field(default=UNSET, alias="crawledAs")
    """Primary crawler that was used by Google to crawl your site."""

    coverage_state: Optional[str] = Field(default=UNSET, alias="coverageState")
    """Could Google find and index the page. More details about page indexing appear in 'indexing_state'."""

    referring_urls: Optional[list[str]] = Field(default=UNSET, alias="referringUrls")
    """URLs that link to the inspected URL, directly and indirectly."""

    page_fetch_state: Optional[PageFetchStateOrStr] = Field(default=UNSET, alias="pageFetchState")
    """Whether or not Google could retrieve the page from your server. Equivalent to `"page fetch"
    <https://support.google.com/webmasters/answer/9012289#index_coverage>`__ in the URL inspection report."""

    robots_txt_state: Optional[RobotsTxtStateOrStr] = Field(default=UNSET, alias="robotsTxtState")
    """Whether or not the page is blocked to Google by a robots.txt rule."""

    verdict: Optional[Verdict1OrStr] = UNSET
    """High level verdict about whether the URL *is* indexed (indexed status), or *can be* indexed (live inspection)."""

    google_canonical: Optional[str] = Field(default=UNSET, alias="googleCanonical")
    """The URL of the page that Google selected as canonical. If the page was not indexed, this field is absent."""

    sitemap: Optional[list[str]] = UNSET
    """Any sitemaps that this URL was listed in, as known by Google. Not guaranteed to be an exhaustive list, especially
    if Google did not discover this URL through a sitemap. Absent if no sitemaps were found."""

    last_crawl_time: Optional[str] = Field(default=UNSET, alias="lastCrawlTime")
    """Last time this URL was crawled by Google using the `primary crawler
    <https://support.google.com/webmasters/answer/7440203#primary_crawler>`__. Absent if the URL was never crawled
    successfully."""


class IndexStatusInspectionResultDict(TypedDict):
    indexing_state: NotRequired[IndexingStateOrStr]
    user_canonical: NotRequired[str]
    crawled_as: NotRequired[CrawledAsOrStr]
    coverage_state: NotRequired[str]
    referring_urls: NotRequired[list[str]]
    page_fetch_state: NotRequired[PageFetchStateOrStr]
    robots_txt_state: NotRequired[RobotsTxtStateOrStr]
    verdict: NotRequired[Verdict1OrStr]
    google_canonical: NotRequired[str]
    sitemap: NotRequired[list[str]]
    last_crawl_time: NotRequired[str]
