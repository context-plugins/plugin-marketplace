from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.granularity import GranularityOrStr


class CohortsRange(SdkBaseModel):
    """Configures the extended reporting date range for a cohort report. Specifies an offset duration to follow the
    cohorts over."""

    start_offset: Optional[int] = Field(default=UNSET, alias="startOffset")
    """``startOffset`` specifies the start date of the extended reporting date range for a cohort report.
    ``startOffset`` is commonly set to 0 so that reports contain data from the acquisition of the cohort forward. If
    ``granularity`` is ``DAILY``, the ``startDate`` of the extended reporting date range is ``startDate`` of the cohort
    plus ``startOffset`` days. If ``granularity`` is ``WEEKLY``, the ``startDate`` of the extended reporting date range
    is ``startDate`` of the cohort plus ``startOffset * 7`` days. If ``granularity`` is ``MONTHLY``, the ``startDate``
    of the extended reporting date range is ``startDate`` of the cohort plus ``startOffset * 30`` days."""

    end_offset: Optional[int] = Field(default=UNSET, alias="endOffset")
    """Required. ``endOffset`` specifies the end date of the extended reporting date range for a cohort report.
    ``endOffset`` can be any positive integer but is commonly set to 5 to 10 so that reports contain data on the cohort
    for the next several granularity time periods. If ``granularity`` is ``DAILY``, the ``endDate`` of the extended
    reporting date range is ``endDate`` of the cohort plus ``endOffset`` days. If ``granularity`` is ``WEEKLY``, the
    ``endDate`` of the extended reporting date range is ``endDate`` of the cohort plus ``endOffset * 7`` days. If
    ``granularity`` is ``MONTHLY``, the ``endDate`` of the extended reporting date range is ``endDate`` of the cohort
    plus ``endOffset * 30`` days."""

    granularity: Optional[GranularityOrStr] = UNSET
    """Required. The granularity used to interpret the ``startOffset`` and ``endOffset`` for the extended reporting date
    range for a cohort report."""


class CohortsRangeDict(TypedDict):
    start_offset: NotRequired[int]
    end_offset: NotRequired[int]
    granularity: NotRequired[GranularityOrStr]
