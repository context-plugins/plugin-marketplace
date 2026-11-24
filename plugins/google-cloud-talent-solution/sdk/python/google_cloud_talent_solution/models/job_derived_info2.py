from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.job_category import JobCategoryOrStr
from .location import Location, LocationDict


class JobDerivedInfo2(SdkBaseModel):
    """Output only. Derived details about the job posting."""

    job_categories: Optional[list[JobCategoryOrStr]] = Field(default=UNSET, alias="jobCategories")
    """Job categories derived from Job.title and Job.description."""

    locations: Optional[list[Location]] = UNSET
    """Structured locations of the job, resolved from Job.addresses. locations are exactly matched to Job.addresses in
    the same order."""


class JobDerivedInfo2Dict(TypedDict):
    job_categories: NotRequired[list[JobCategoryOrStr]]
    locations: NotRequired[list[LocationDict]]
