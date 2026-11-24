from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .company_filters import CompanyFilters, CompanyFiltersDict
from .people_filters import PeopleFilters, PeopleFiltersDict


class PeopleSearchRequest(SdkBaseModel):
    limit: int
    """Maximum results per page."""

    people: Optional[PeopleFilters] = UNSET
    """Person-based filters."""

    companies: Optional[CompanyFilters] = UNSET
    """Company-based filters."""

    people_per_company: Optional[int] = Field(default=UNSET, alias="peoplePerCompany")
    """Maximum results returned per company."""

    page_token: Optional[str] = Field(default=UNSET, alias="pageToken")
    """Pagination token from a previous response."""


class PeopleSearchRequestDict(TypedDict):
    limit: int
    people: NotRequired[PeopleFiltersDict]
    companies: NotRequired[CompanyFiltersDict]
    people_per_company: NotRequired[int]
    page_token: NotRequired[str]
