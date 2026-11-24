from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.cohort_source import CohortSourceOrStr


class CohortInfo(SdkBaseModel):
    """Information about the cohort that the workload belongs to."""

    cohort_source: Optional[CohortSourceOrStr] = Field(default=UNSET, alias="cohortSource")
    """Output only. Source of the cohort."""

    cohort: Optional[str] = UNSET
    """Output only. Final cohort that was used to tune the workload."""


class CohortInfoDict(TypedDict):
    cohort_source: NotRequired[CohortSourceOrStr]
    cohort: NotRequired[str]
