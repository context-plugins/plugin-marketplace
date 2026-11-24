from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .job_response import JobResponse, JobResponseDict


class PaginatedResponseJobResponse(SdkBaseModel):
    items: list[JobResponse]
    total: int
    limit: int
    offset: int


class PaginatedResponseJobResponseDict(TypedDict):
    items: list[JobResponseDict]
    total: int
    limit: int
    offset: int
