from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .job import Job, JobDict
from .meta_zillapi_zillow_property_data_jobs_api import (
    MetaZillapiZillowPropertyDataJobsApi,
    MetaZillapiZillowPropertyDataJobsApiDict,
)


class V1JobsResponse(SdkBaseModel):
    data: Optional[list[Job]] = UNSET
    meta: Optional[MetaZillapiZillowPropertyDataJobsApi] = UNSET
    request_id: Optional[str] = UNSET


class V1JobsResponseDict(TypedDict):
    data: NotRequired[list[JobDict]]
    meta: NotRequired[MetaZillapiZillowPropertyDataJobsApiDict]
    request_id: NotRequired[str]
