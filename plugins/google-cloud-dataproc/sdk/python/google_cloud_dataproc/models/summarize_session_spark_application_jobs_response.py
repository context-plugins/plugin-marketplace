from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .jobs_summary2 import JobsSummary2, JobsSummary2Dict


class SummarizeSessionSparkApplicationJobsResponse(SdkBaseModel):
    """Summary of a Spark Application jobs."""

    jobs_summary: Optional[JobsSummary2] = Field(default=UNSET, alias="jobsSummary")
    """Summary of a Spark Application Jobs"""


class SummarizeSessionSparkApplicationJobsResponseDict(TypedDict):
    jobs_summary: NotRequired[JobsSummary2Dict]
