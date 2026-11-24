from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .call_analytics_job import CallAnalyticsJob, CallAnalyticsJobDict


class GetCallAnalyticsJobResponse(SdkBaseModel):
    call_analytics_job: Optional[CallAnalyticsJob] = Field(default=UNSET, alias="CallAnalyticsJob")


class GetCallAnalyticsJobResponseDict(TypedDict):
    call_analytics_job: NotRequired[CallAnalyticsJobDict]
