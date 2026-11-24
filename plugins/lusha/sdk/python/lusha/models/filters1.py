from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .company_filters import CompanyFilters, CompanyFiltersDict


class Filters1(SdkBaseModel):
    companies: Optional[CompanyFilters] = UNSET


class Filters1Dict(TypedDict):
    companies: NotRequired[CompanyFiltersDict]
