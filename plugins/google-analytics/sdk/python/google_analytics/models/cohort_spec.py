from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cohort import Cohort, CohortDict
from .cohort_report_settings2 import CohortReportSettings2, CohortReportSettings2Dict
from .cohorts_range2 import CohortsRange2, CohortsRange2Dict


class CohortSpec(SdkBaseModel):
    """The specification of cohorts for a cohort report. Cohort reports create a time series of user retention for the
    cohort. For example, you could select the cohort of users that were acquired in the first week of September and
    follow that cohort for the next six weeks. Selecting the users acquired in the first week of September cohort is
    specified in the ``cohort`` object. Following that cohort for the next six weeks is specified in the
    ``cohortsRange`` object. For examples, see `Cohort Report Examples
    <https://developers.google.com/analytics/devguides/reporting/data/v1/advanced#cohort_report_examples>`__. The report
    response could show a weekly time series where say your app has retained 60% of this cohort after three weeks and
    25% of this cohort after six weeks. These two percentages can be calculated by the metric
    ``cohortActiveUsers/cohortTotalUsers`` and will be separate rows in the report."""

    cohorts_range: Optional[CohortsRange2] = Field(default=UNSET, alias="cohortsRange")
    """Cohort reports follow cohorts over an extended reporting date range. This range specifies an offset duration to
    follow the cohorts over."""

    cohort_report_settings: Optional[CohortReportSettings2] = Field(default=UNSET, alias="cohortReportSettings")
    """Optional settings for a cohort report."""

    cohorts: Optional[list[Cohort]] = UNSET
    """Defines the selection criteria to group users into cohorts. Most cohort reports define only a single cohort. If
    multiple cohorts are specified, each cohort can be recognized in the report by their name."""


class CohortSpecDict(TypedDict):
    cohorts_range: NotRequired[CohortsRange2Dict]
    cohort_report_settings: NotRequired[CohortReportSettings2Dict]
    cohorts: NotRequired[list[CohortDict]]
