from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .v3_company_filter_criteria import V3CompanyFilterCriteria, V3CompanyFilterCriteriaDict


class Companies(SdkBaseModel):
    include: Optional[V3CompanyFilterCriteria] = UNSET
    exclude: Optional[V3CompanyFilterCriteria] = UNSET


class CompaniesDict(TypedDict):
    include: NotRequired[V3CompanyFilterCriteriaDict]
    exclude: NotRequired[V3CompanyFilterCriteriaDict]
