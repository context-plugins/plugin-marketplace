from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .links2_connect_jobs_api import Links2ConnectJobsApi, Links2ConnectJobsApiDict
from .step2 import Step2, Step2Dict


class JobsResponse2(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="type")
    id: Optional[str] = UNSET
    partner_id: Optional[str] = Field(default=UNSET, alias="partnerId")
    application_id: Optional[str] = Field(default=UNSET, alias="applicationId")
    created: Optional[str] = UNSET
    updated: Optional[str] = UNSET
    status: Optional[str] = UNSET
    job_type: Optional[str] = Field(default=UNSET, alias="jobType")
    steps: Optional[list[Step2]] = UNSET
    links: Optional[Links2ConnectJobsApi] = UNSET


class JobsResponse2Dict(TypedDict):
    type_: NotRequired[str]
    id: NotRequired[str]
    partner_id: NotRequired[str]
    application_id: NotRequired[str]
    created: NotRequired[str]
    updated: NotRequired[str]
    status: NotRequired[str]
    job_type: NotRequired[str]
    steps: NotRequired[list[Step2Dict]]
    links: NotRequired[Links2ConnectJobsApiDict]
