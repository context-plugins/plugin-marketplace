from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .company_location_filter2 import CompanyLocationFilter2, CompanyLocationFilter2Dict
from .company_size_range import CompanySizeRange, CompanySizeRangeDict
from .company_technology import CompanyTechnology, CompanyTechnologyDict
from .employees_in_linked_in_filter import EmployeesInLinkedInFilter, EmployeesInLinkedInFilterDict
from .location_lusha_api_documentation_prospecting_search_enrich_api import (
    LocationLushaApiDocumentationProspectingSearchEnrichApi,
    LocationLushaApiDocumentationProspectingSearchEnrichApiDict,
)
from .revenue_range import RevenueRange, RevenueRangeDict
from .signal_lusha_api_documentation_prospecting_search_enrich_api import (
    SignalLushaApiDocumentationProspectingSearchEnrichApi,
    SignalLushaApiDocumentationProspectingSearchEnrichApiDict,
)


class Include(SdkBaseModel):
    names: Optional[list[str]] = UNSET
    domains: Optional[list[str]] = UNSET
    locations: Optional[list[LocationLushaApiDocumentationProspectingSearchEnrichApi]] = UNSET
    technologies: Optional[list[CompanyTechnology]] = UNSET
    intent_topics: Optional[list[str]] = Field(default=UNSET, alias="intentTopics")
    sizes: Optional[list[CompanySizeRange]] = UNSET
    revenues: Optional[list[RevenueRange]] = UNSET
    sic_codes: Optional[list[str]] = Field(default=UNSET, alias="sicCodes")
    naics_codes: Optional[list[str]] = Field(default=UNSET, alias="naicsCodes")
    main_industries_ids: Optional[list[float]] = Field(default=UNSET, alias="mainIndustriesIds")
    sub_industries_ids: Optional[list[float]] = Field(default=UNSET, alias="subIndustriesIds")
    search_text: Optional[str] = Field(default=UNSET, alias="searchText")
    """Free-text search across company fields"""

    exclude_partial_companies: Optional[bool] = Field(default=UNSET, alias="excludePartialCompanies")
    company_locations: Optional[list[CompanyLocationFilter2]] = Field(default=UNSET, alias="companyLocations")
    """Filter by company site-level office locations as reported by LinkedIn. This includes all physical office
    locations where the company has a presence."""

    employees_in_linked_in: Optional[EmployeesInLinkedInFilter] = Field(default=UNSET, alias="employeesInLinkedIn")
    """Filter companies by LinkedIn-reported employee count. Both ``min`` and ``max`` are optional — provide either or
    both."""

    signal: Optional[SignalLushaApiDocumentationProspectingSearchEnrichApi] = UNSET
    """Filter companies by signal types (premium filter - charges apply per signal type)."""


class IncludeDict(TypedDict):
    names: NotRequired[list[str]]
    domains: NotRequired[list[str]]
    locations: NotRequired[list[LocationLushaApiDocumentationProspectingSearchEnrichApiDict]]
    technologies: NotRequired[list[CompanyTechnologyDict]]
    intent_topics: NotRequired[list[str]]
    sizes: NotRequired[list[CompanySizeRangeDict]]
    revenues: NotRequired[list[RevenueRangeDict]]
    sic_codes: NotRequired[list[str]]
    naics_codes: NotRequired[list[str]]
    main_industries_ids: NotRequired[list[float]]
    sub_industries_ids: NotRequired[list[float]]
    search_text: NotRequired[str]
    exclude_partial_companies: NotRequired[bool]
    company_locations: NotRequired[list[CompanyLocationFilter2Dict]]
    employees_in_linked_in: NotRequired[EmployeesInLinkedInFilterDict]
    signal: NotRequired[SignalLushaApiDocumentationProspectingSearchEnrichApiDict]
