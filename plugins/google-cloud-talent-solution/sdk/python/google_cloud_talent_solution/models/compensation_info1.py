from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .compensation_entry import CompensationEntry, CompensationEntryDict
from .compensation_range1 import CompensationRange1, CompensationRange1Dict
from .compensation_range5 import CompensationRange5, CompensationRange5Dict


class CompensationInfo1(SdkBaseModel):
    """Job compensation information (a.k.a. "pay rate") i.e., the compensation that will paid to the employee."""

    annualized_base_compensation_range: Optional[CompensationRange5] = Field(
        default=UNSET, alias="annualizedBaseCompensationRange"
    )
    """Output only. Annualized base compensation range. Computed as base compensation entry's CompensationEntry.amount
    times CompensationEntry.expected_units_per_year. See CompensationEntry for explanation on compensation
    annualization."""

    annualized_total_compensation_range: Optional[CompensationRange1] = Field(
        default=UNSET, alias="annualizedTotalCompensationRange"
    )
    """Output only. Annualized total compensation range. Computed as all compensation entries' CompensationEntry.amount
    times CompensationEntry.expected_units_per_year. See CompensationEntry for explanation on compensation
    annualization."""

    entries: Optional[list[CompensationEntry]] = UNSET
    """Job compensation information. At most one entry can be of type CompensationInfo.CompensationType.BASE, which is
    referred as **base compensation entry** for the job."""


class CompensationInfo1Dict(TypedDict):
    annualized_base_compensation_range: NotRequired[CompensationRange5Dict]
    annualized_total_compensation_range: NotRequired[CompensationRange1Dict]
    entries: NotRequired[list[CompensationEntryDict]]
