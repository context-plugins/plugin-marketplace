from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .compensation_range import CompensationRange, CompensationRangeDict
from .enums.type import TypeOrStr
from .enums.unit import UnitOrStr
from .money2 import Money2, Money2Dict


class CompensationEntry(SdkBaseModel):
    """A compensation entry that represents one component of compensation, such as base pay, bonus, or other
    compensation type. Annualization: One compensation entry can be annualized if - it contains valid amount or range. -
    and its expected_units_per_year is set or can be derived. Its annualized range is determined as (amount or range)
    times expected_units_per_year."""

    expected_units_per_year: Optional[float] = Field(default=UNSET, alias="expectedUnitsPerYear")
    """Expected number of units paid each year. If not specified, when Job.employment_types is FULLTIME, a default value
    is inferred based on unit. Default values: - HOURLY: 2080 - DAILY: 260 - WEEKLY: 52 - MONTHLY: 12 - ANNUAL: 1"""

    type_: Optional[TypeOrStr] = Field(default=UNSET, alias="type")
    """Compensation type. Default is CompensationType.COMPENSATION_TYPE_UNSPECIFIED."""

    unit: Optional[UnitOrStr] = UNSET
    """Frequency of the specified amount. Default is CompensationUnit.COMPENSATION_UNIT_UNSPECIFIED."""

    amount: Optional[Money2] = UNSET
    """Compensation amount."""

    range_: Optional[CompensationRange] = Field(default=UNSET, alias="range")
    """Compensation range."""

    description: Optional[str] = UNSET
    """Compensation description. For example, could indicate equity terms or provide additional context to an estimated
    bonus."""


class CompensationEntryDict(TypedDict):
    expected_units_per_year: NotRequired[float]
    type_: NotRequired[TypeOrStr]
    unit: NotRequired[UnitOrStr]
    amount: NotRequired[Money2Dict]
    range_: NotRequired[CompensationRangeDict]
    description: NotRequired[str]
