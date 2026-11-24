from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .application_attempt_info import ApplicationAttemptInfo, ApplicationAttemptInfoDict


class JobsSummary(SdkBaseModel):
    """Data related to Jobs page summary"""

    failed_jobs: Optional[int] = Field(default=UNSET, alias="failedJobs")
    """Number of failed jobs"""

    scheduling_mode: Optional[str] = Field(default=UNSET, alias="schedulingMode")
    """Spark Scheduling mode"""

    active_jobs: Optional[int] = Field(default=UNSET, alias="activeJobs")
    """Number of active jobs"""

    completed_jobs: Optional[int] = Field(default=UNSET, alias="completedJobs")
    """Number of completed jobs"""

    attempts: Optional[list[ApplicationAttemptInfo]] = UNSET
    """Attempts info"""

    application_id: Optional[str] = Field(default=UNSET, alias="applicationId")
    """Spark Application Id"""


class JobsSummaryDict(TypedDict):
    failed_jobs: NotRequired[int]
    scheduling_mode: NotRequired[str]
    active_jobs: NotRequired[int]
    completed_jobs: NotRequired[int]
    attempts: NotRequired[list[ApplicationAttemptInfoDict]]
    application_id: NotRequired[str]
