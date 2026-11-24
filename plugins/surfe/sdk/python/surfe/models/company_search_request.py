from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .company_filters import CompanyFilters, CompanyFiltersDict


class CompanySearchRequest(SdkBaseModel):
    limit: int
    filters: CompanyFilters
    """Company-based filters."""

    page_token: Optional[str] = Field(default=UNSET, alias="pageToken")


class CompanySearchRequestDict(TypedDict):
    limit: int
    filters: CompanyFiltersDict
    page_token: NotRequired[str]
