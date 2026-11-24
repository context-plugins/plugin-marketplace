from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .job_data1 import JobData1, JobData1Dict


class AccessSparkApplicationJobResponse(SdkBaseModel):
    """Details of a particular job associated with Spark Application"""

    job_data: Optional[JobData1] = Field(default=UNSET, alias="jobData")
    """Output only. Data corresponding to a spark job."""


class AccessSparkApplicationJobResponseDict(TypedDict):
    job_data: NotRequired[JobData1Dict]
