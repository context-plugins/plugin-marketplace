from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AppSummary(SdkBaseModel):
    num_completed_stages: Optional[int] = Field(default=UNSET, alias="numCompletedStages")
    num_completed_jobs: Optional[int] = Field(default=UNSET, alias="numCompletedJobs")


class AppSummaryDict(TypedDict):
    num_completed_stages: NotRequired[int]
    num_completed_jobs: NotRequired[int]
