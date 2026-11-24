from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class GetCallAnalyticsJobRequest(SdkBaseModel):
    call_analytics_job_name: str = Field(alias="CallAnalyticsJobName")
    """The name of the Call Analytics job you want information about. Job names are case sensitive."""


class GetCallAnalyticsJobRequestDict(TypedDict):
    call_analytics_job_name: str
