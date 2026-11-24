from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .commute_info1 import CommuteInfo1, CommuteInfo1Dict
from .job1 import Job1, Job1Dict


class MatchingJob(SdkBaseModel):
    """Job entry with metadata inside SearchJobsResponse."""

    job_title_snippet: Optional[str] = Field(default=UNSET, alias="jobTitleSnippet")
    """Contains snippets of text from the Job.title field most closely matching a search query's keywords, if available.
    The matching query keywords are enclosed in HTML bold tags."""

    commute_info: Optional[CommuteInfo1] = Field(default=UNSET, alias="commuteInfo")
    """Commute information which is generated based on specified CommuteFilter."""

    job_summary: Optional[str] = Field(default=UNSET, alias="jobSummary")
    """A summary of the job with core information that's displayed on the search results listing page."""

    job: Optional[Job1] = UNSET
    """Job resource that matches the specified SearchJobsRequest."""

    search_text_snippet: Optional[str] = Field(default=UNSET, alias="searchTextSnippet")
    """Contains snippets of text from the Job.description and similar fields that most closely match a search query's
    keywords, if available. All HTML tags in the original fields are stripped when returned in this field, and matching
    query keywords are enclosed in HTML bold tags."""


class MatchingJobDict(TypedDict):
    job_title_snippet: NotRequired[str]
    commute_info: NotRequired[CommuteInfo1Dict]
    job_summary: NotRequired[str]
    job: NotRequired[Job1Dict]
    search_text_snippet: NotRequired[str]
