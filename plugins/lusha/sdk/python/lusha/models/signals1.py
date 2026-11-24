from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .filter_by_department import FilterByDepartment, FilterByDepartmentDict
from .filter_by_location import FilterByLocation, FilterByLocationDict


class Signals1(SdkBaseModel):
    types: Optional[list[str]] = UNSET
    start_date: Optional[Date] = Field(default=UNSET, alias="startDate")
    filter_by_location: Optional[list[FilterByLocation]] = Field(default=UNSET, alias="filterByLocation")
    filter_by_department: Optional[list[FilterByDepartment]] = Field(default=UNSET, alias="filterByDepartment")
    filter_by_intent_category: Optional[list[str]] = Field(default=UNSET, alias="filterByIntentCategory")
    """Refines linkedinActivityIntent results by Bombora intent category. Applied only when linkedinActivityIntent is
    present in ``types`` (or selected via allSignals). Omit to match all categories. See GET
    /v3/companies/signals/filters/intentCategories for the full list of valid values."""


class Signals1Dict(TypedDict):
    types: NotRequired[list[str]]
    start_date: NotRequired[Date]
    filter_by_location: NotRequired[list[FilterByLocationDict]]
    filter_by_department: NotRequired[list[FilterByDepartmentDict]]
    filter_by_intent_category: NotRequired[list[str]]
