from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .scheduled_job import ScheduledJob, ScheduledJobDict


class CompaniesApiScheduledJobsResponse(SdkBaseModel):
    value: Optional[list[ScheduledJob]] = UNSET


class CompaniesApiScheduledJobsResponseDict(TypedDict):
    value: NotRequired[list[ScheduledJobDict]]
