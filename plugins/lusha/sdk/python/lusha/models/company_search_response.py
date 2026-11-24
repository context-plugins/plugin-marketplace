from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .company_search_data import CompanySearchData, CompanySearchDataDict


class CompanySearchResponse(SdkBaseModel):
    request_id: Optional[str] = Field(default=UNSET, alias="requestId")
    """The requestId that should be used in Prospecting Enrich request API params"""

    current_page: Optional[float] = Field(default=UNSET, alias="currentPage")
    """Current page of search results"""

    page_length: Optional[float] = Field(default=UNSET, alias="pageLength")
    """Page length"""

    total_results: Optional[float] = Field(default=UNSET, alias="totalResults")
    """Total search results"""

    companies: Optional[list[CompanySearchData]] = UNSET


class CompanySearchResponseDict(TypedDict):
    request_id: NotRequired[str]
    current_page: NotRequired[float]
    page_length: NotRequired[float]
    total_results: NotRequired[float]
    companies: NotRequired[list[CompanySearchDataDict]]
