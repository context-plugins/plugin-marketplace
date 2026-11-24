from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data_staying_jobs_api import DataStayingJobsApi, DataStayingJobsApiDict
from .meta2 import Meta2, Meta2Dict


class JobInProgress(SdkBaseModel):
    """pending | running — carries a Retry-After header; poll again after the back-off."""

    data: DataStayingJobsApi
    meta: Meta2


class JobInProgressDict(TypedDict):
    data: DataStayingJobsApiDict
    meta: Meta2Dict
