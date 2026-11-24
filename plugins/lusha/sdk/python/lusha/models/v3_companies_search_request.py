from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .v3_company_search_item import V3CompanySearchItem, V3CompanySearchItemDict
from .v3_company_signals_dto import V3CompanySignalsDto, V3CompanySignalsDtoDict
from .v3_search_options import V3SearchOptions, V3SearchOptionsDict


class V3CompaniesSearchRequest(SdkBaseModel):
    companies: list[V3CompanySearchItem]
    options: Optional[V3SearchOptions] = UNSET
    """Additional options for search requests"""

    signals: Optional[V3CompanySignalsDto] = UNSET


class V3CompaniesSearchRequestDict(TypedDict):
    companies: list[V3CompanySearchItemDict]
    options: NotRequired[V3SearchOptionsDict]
    signals: NotRequired[V3CompanySignalsDtoDict]
