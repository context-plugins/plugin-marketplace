from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cohort import Cohort, CohortDict
from .cohort_report_settings2 import CohortReportSettings2, CohortReportSettings2Dict
from .cohorts_range2 import CohortsRange2, CohortsRange2Dict


class CohortSpec1(SdkBaseModel):
    """Cohort group associated with this request. If there is a cohort group in the request the 'cohort' dimension must
    be present."""

    cohorts_range: Optional[CohortsRange2] = Field(default=UNSET, alias="cohortsRange")
    """Cohort reports follow cohorts over an extended reporting date range. This range specifies an offset duration to
    follow the cohorts over."""

    cohort_report_settings: Optional[CohortReportSettings2] = Field(default=UNSET, alias="cohortReportSettings")
    """Optional settings for a cohort report."""

    cohorts: Optional[list[Cohort]] = UNSET
    """Defines the selection criteria to group users into cohorts. Most cohort reports define only a single cohort. If
    multiple cohorts are specified, each cohort can be recognized in the report by their name."""


class CohortSpec1Dict(TypedDict):
    cohorts_range: NotRequired[CohortsRange2Dict]
    cohort_report_settings: NotRequired[CohortReportSettings2Dict]
    cohorts: NotRequired[list[CohortDict]]
