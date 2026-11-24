from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .range import Range, RangeDict


class CompanyFilters(SdkBaseModel):
    """Company-based filters."""

    industries: Optional[list[str]] = UNSET
    employee_count: Optional[Range] = Field(default=UNSET, alias="employeeCount")
    revenue: Optional[Range] = UNSET
    countries: Optional[list[str]] = UNSET
    domains: Optional[list[str]] = UNSET
    keywords: Optional[list[str]] = UNSET


class CompanyFiltersDict(TypedDict):
    industries: NotRequired[list[str]]
    employee_count: NotRequired[RangeDict]
    revenue: NotRequired[RangeDict]
    countries: NotRequired[list[str]]
    domains: NotRequired[list[str]]
    keywords: NotRequired[list[str]]
