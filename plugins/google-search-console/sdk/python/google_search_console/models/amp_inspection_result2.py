from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .amp_issue import AmpIssue, AmpIssueDict
from .enums.amp_index_status_verdict import AmpIndexStatusVerdictOrStr
from .enums.indexing_state1 import IndexingState1OrStr
from .enums.page_fetch_state1 import PageFetchState1OrStr
from .enums.robots_txt_state import RobotsTxtStateOrStr
from .enums.verdict2 import Verdict2OrStr


class AmpInspectionResult2(SdkBaseModel):
    """Result of the AMP analysis. Absent if the page is not an AMP page."""

    page_fetch_state: Optional[PageFetchState1OrStr] = Field(default=UNSET, alias="pageFetchState")
    """Whether or not Google could fetch the AMP."""

    last_crawl_time: Optional[str] = Field(default=UNSET, alias="lastCrawlTime")
    """Last time this AMP version was crawled by Google. Absent if the URL was never crawled successfully."""

    issues: Optional[list[AmpIssue]] = UNSET
    """A list of zero or more AMP issues found for the inspected URL."""

    indexing_state: Optional[IndexingState1OrStr] = Field(default=UNSET, alias="indexingState")
    """Whether or not the page blocks indexing through a noindex rule."""

    amp_index_status_verdict: Optional[AmpIndexStatusVerdictOrStr] = Field(default=UNSET, alias="ampIndexStatusVerdict")
    """Index status of the AMP URL."""

    amp_url: Optional[str] = Field(default=UNSET, alias="ampUrl")
    """URL of the AMP that was inspected. If the submitted URL is a desktop page that refers to an AMP version, the AMP
    version will be inspected."""

    verdict: Optional[Verdict2OrStr] = UNSET
    """The status of the most severe error on the page. If a page has both warnings and errors, the page status is
    error. Error status means the page cannot be shown in Search results."""

    robots_txt_state: Optional[RobotsTxtStateOrStr] = Field(default=UNSET, alias="robotsTxtState")
    """Whether or not the page is blocked to Google by a robots.txt rule."""


class AmpInspectionResult2Dict(TypedDict):
    page_fetch_state: NotRequired[PageFetchState1OrStr]
    last_crawl_time: NotRequired[str]
    issues: NotRequired[list[AmpIssueDict]]
    indexing_state: NotRequired[IndexingState1OrStr]
    amp_index_status_verdict: NotRequired[AmpIndexStatusVerdictOrStr]
    amp_url: NotRequired[str]
    verdict: NotRequired[Verdict2OrStr]
    robots_txt_state: NotRequired[RobotsTxtStateOrStr]
