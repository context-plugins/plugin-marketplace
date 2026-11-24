from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .links_connect_jobs_api import LinksConnectJobsApi, LinksConnectJobsApiDict
from .step1 import Step1, Step1Dict


class JobsResponse1(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="type")
    id: Optional[str] = UNSET
    created_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdDate")
    """date and time in ISO format of when the job request was created"""

    updated_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedDate")
    """date and time in ISO format of when the job request was updated"""

    job_type: Optional[str] = Field(default=UNSET, alias="jobType")
    source_id: Optional[str] = Field(default=UNSET, alias="sourceId")
    steps: Optional[list[Step1]] = UNSET
    links: Optional[LinksConnectJobsApi] = UNSET


class JobsResponse1Dict(TypedDict):
    type_: NotRequired[str]
    id: NotRequired[str]
    created_date: NotRequired[RFC3339DateTime]
    updated_date: NotRequired[RFC3339DateTime]
    job_type: NotRequired[str]
    source_id: NotRequired[str]
    steps: NotRequired[list[Step1Dict]]
    links: NotRequired[LinksConnectJobsApiDict]
