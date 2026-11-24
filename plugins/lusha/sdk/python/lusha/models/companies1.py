from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .v3_company_prospecting_filters import V3CompanyProspectingFilters, V3CompanyProspectingFiltersDict


class Companies1(SdkBaseModel):
    include: V3CompanyProspectingFilters
    exclude: Optional[V3CompanyProspectingFilters] = UNSET


class Companies1Dict(TypedDict):
    include: V3CompanyProspectingFiltersDict
    exclude: NotRequired[V3CompanyProspectingFiltersDict]
