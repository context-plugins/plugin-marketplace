from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .date_range2 import DateRange2, DateRange2Dict


class Cohort(SdkBaseModel):
    """Defines a cohort selection criteria. A cohort is a group of users who share a common characteristic. For example,
    users with the same ``firstSessionDate`` belong to the same cohort."""

    name: Optional[str] = UNSET
    """Assigns a name to this cohort. The dimension ``cohort`` is valued to this name in a report response. If set,
    cannot begin with ``cohort_`` or ``RESERVED_``. If not set, cohorts are named by their zero based index
    ``cohort_0``, ``cohort_1``, etc."""

    dimension: Optional[str] = UNSET
    """Dimension used by the cohort. Required and only supports ``firstSessionDate``."""

    date_range: Optional[DateRange2] = Field(default=UNSET, alias="dateRange")
    """The cohort selects users whose first touch date is between start date and end date defined in the ``dateRange``.
    This ``dateRange`` does not specify the full date range of event data that is present in a cohort report. In a
    cohort report, this ``dateRange`` is extended by the granularity and offset present in the ``cohortsRange``; event
    data for the extended reporting date range is present in a cohort report. In a cohort request, this ``dateRange`` is
    required and the ``dateRanges`` in the ``RunReportRequest`` or ``RunPivotReportRequest`` must be unspecified. This
    ``dateRange`` should generally be aligned with the cohort's granularity. If ``CohortsRange`` uses daily granularity,
    this ``dateRange`` can be a single day. If ``CohortsRange`` uses weekly granularity, this ``dateRange`` can be
    aligned to a week boundary, starting at Sunday and ending Saturday. If ``CohortsRange`` uses monthly granularity,
    this ``dateRange`` can be aligned to a month, starting at the first and ending on the last day of the month."""


class CohortDict(TypedDict):
    name: NotRequired[str]
    dimension: NotRequired[str]
    date_range: NotRequired[DateRange2Dict]
