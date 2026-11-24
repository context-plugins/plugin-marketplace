from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteCallAnalyticsJobRequest(SdkBaseModel):
    call_analytics_job_name: str = Field(alias="CallAnalyticsJobName")
    """The name of the Call Analytics job you want to delete. Job names are case sensitive."""


class DeleteCallAnalyticsJobRequestDict(TypedDict):
    call_analytics_job_name: str
