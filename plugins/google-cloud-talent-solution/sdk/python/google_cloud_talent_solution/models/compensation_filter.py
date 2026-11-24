from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .compensation_range import CompensationRange, CompensationRangeDict
from .enums.type1 import Type1OrStr
from .enums.unit1 import Unit1OrStr


class CompensationFilter(SdkBaseModel):
    """Filter on job compensation type and amount."""

    range_: Optional[CompensationRange] = Field(default=UNSET, alias="range")
    """Compensation range."""

    include_jobs_with_unspecified_compensation_range: Optional[bool] = Field(
        default=UNSET, alias="includeJobsWithUnspecifiedCompensationRange"
    )
    """If set to true, jobs with unspecified compensation range fields are included."""

    units: Optional[list[Unit1OrStr]] = UNSET
    """Required. Specify desired ``base compensation entry's`` CompensationInfo.CompensationUnit."""

    type_: Optional[Type1OrStr] = Field(default=UNSET, alias="type")
    """Required. Type of filter."""


class CompensationFilterDict(TypedDict):
    range_: NotRequired[CompensationRangeDict]
    include_jobs_with_unspecified_compensation_range: NotRequired[bool]
    units: NotRequired[list[Unit1OrStr]]
    type_: NotRequired[Type1OrStr]
