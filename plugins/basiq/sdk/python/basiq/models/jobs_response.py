from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .links_connect_jobs_api import LinksConnectJobsApi, LinksConnectJobsApiDict
from .step import Step, StepDict


class JobsResponse(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="type")
    id: Optional[str] = UNSET
    partner_id: Optional[str] = Field(default=UNSET, alias="partnerId")
    status: Optional[str] = UNSET
    job_type: Optional[str] = Field(default=UNSET, alias="jobType")
    application_id: Optional[str] = Field(default=UNSET, alias="applicationId")
    created: Optional[RFC3339DateTime] = UNSET
    """date and time in ISO format of when the job request was created"""

    updated: Optional[RFC3339DateTime] = UNSET
    """date and time in ISO format of when the job request was updated"""

    steps: Optional[list[Step]] = UNSET
    links: Optional[LinksConnectJobsApi] = UNSET


class JobsResponseDict(TypedDict):
    type_: NotRequired[str]
    id: NotRequired[str]
    partner_id: NotRequired[str]
    status: NotRequired[str]
    job_type: NotRequired[str]
    application_id: NotRequired[str]
    created: NotRequired[RFC3339DateTime]
    updated: NotRequired[RFC3339DateTime]
    steps: NotRequired[list[StepDict]]
    links: NotRequired[LinksConnectJobsApiDict]
