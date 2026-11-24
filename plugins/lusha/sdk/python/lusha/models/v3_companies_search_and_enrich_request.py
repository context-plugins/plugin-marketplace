from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .v3_company_search_item import V3CompanySearchItem, V3CompanySearchItemDict
from .v3_search_options import V3SearchOptions, V3SearchOptionsDict


class V3CompaniesSearchAndEnrichRequest(SdkBaseModel):
    companies: list[V3CompanySearchItem]
    options: Optional[V3SearchOptions] = UNSET
    """Additional options for search requests"""


class V3CompaniesSearchAndEnrichRequestDict(TypedDict):
    companies: list[V3CompanySearchItemDict]
    options: NotRequired[V3SearchOptionsDict]
