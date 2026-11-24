from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .additional_industry import AdditionalIndustry, AdditionalIndustryDict
from .competitor import Competitor, CompetitorDict
from .employee_count import EmployeeCount, EmployeeCountDict
from .employees_by_department import EmployeesByDepartment, EmployeesByDepartmentDict
from .employees_by_location import EmployeesByLocation, EmployeesByLocationDict
from .employees_by_seniority import EmployeesBySeniority, EmployeesBySeniorityDict
from .estimated_annual_it_spend import EstimatedAnnualItSpend, EstimatedAnnualItSpendDict
from .monthly_website_traffic import MonthlyWebsiteTraffic, MonthlyWebsiteTrafficDict
from .revenue_range import RevenueRange, RevenueRangeDict
from .social_links1 import SocialLinks1, SocialLinks1Dict
from .v3_company_location import V3CompanyLocation, V3CompanyLocationDict
from .v3_item_error import V3ItemError, V3ItemErrorDict
from .v3_naics_code import V3NaicsCode, V3NaicsCodeDict
from .v3_sic_code import V3SicCode, V3SicCodeDict


class V3SearchAndEnrichCompanyResult(SdkBaseModel):
    id: Optional[str] = UNSET
    name: Optional[str] = UNSET
    alternative_name: Optional[str] = Field(default=UNSET, alias="alternativeName")
    domain: Optional[str] = UNSET
    alternative_domains: Optional[list[str]] = Field(default=UNSET, alias="alternativeDomains")
    description: Optional[str] = UNSET
    company_type: Optional[str] = Field(default=UNSET, alias="companyType")
    year_founded: Optional[float] = Field(default=UNSET, alias="yearFounded")
    employee_count: Optional[EmployeeCount] = Field(default=UNSET, alias="employeeCount")
    industry: Optional[str] = UNSET
    sub_industry: Optional[str] = Field(default=UNSET, alias="subIndustry")
    specialities: Optional[list[str]] = UNSET
    industry_tags: Optional[list[str]] = Field(default=UNSET, alias="industryTags")
    sic_codes: Optional[list[V3SicCode]] = Field(default=UNSET, alias="sicCodes")
    naics_codes: Optional[list[V3NaicsCode]] = Field(default=UNSET, alias="naicsCodes")
    company_offering: Optional[str] = Field(default=UNSET, alias="companyOffering")
    """Free field. Short description of what the company sells or does."""

    email_domain: Optional[str] = Field(default=UNSET, alias="emailDomain")
    """Free field. Primary domain used for company email addresses."""

    additional_industries: Optional[list[AdditionalIndustry]] = Field(default=UNSET, alias="additionalIndustries")
    """Free field. Up to 2 secondary industry classifications beyond the primary ``industry``/``subIndustry``."""

    estimated_annual_it_spend: OptionalNullable[EstimatedAnnualItSpend] = Field(
        default=UNSET, alias="estimatedAnnualItSpend"
    )
    """Revealed via reveal: ["estimatedAnnualItSpend"] in Enrich Companies. Charged 1 credit when non-null."""

    monthly_website_traffic: OptionalNullable[MonthlyWebsiteTraffic] = Field(
        default=UNSET, alias="monthlyWebsiteTraffic"
    )
    """Revealed via reveal: ["monthlyWebsiteTraffic"] in Enrich Companies. Charged 1 credit when non-null."""

    location: Optional[V3CompanyLocation] = UNSET
    additional_locations: Optional[list[V3CompanyLocation]] = Field(default=UNSET, alias="additionalLocations")
    social_links: Optional[SocialLinks1] = Field(default=UNSET, alias="socialLinks")
    linkedin_followers: Optional[float] = Field(default=UNSET, alias="linkedinFollowers")
    revenue_range: Optional[RevenueRange] = Field(default=UNSET, alias="revenueRange")
    funding: Optional[Any] = UNSET
    """Funding payload when present"""

    intent: Optional[Any] = UNSET
    """Intent payload when present"""

    technologies: Optional[list[str]] = UNSET
    popularity_tier: Optional[float] = Field(default=UNSET, alias="popularityTier")
    logo_url: Optional[str] = Field(default=UNSET, alias="logoUrl")
    employees_by_department: Optional[list[EmployeesByDepartment]] = Field(default=UNSET, alias="employeesByDepartment")
    """Breakdown of employees by department. Revealed via ``reveal: ["employeesByDepartment"]`` in Enrich Companies."""

    employees_by_location: Optional[list[EmployeesByLocation]] = Field(default=UNSET, alias="employeesByLocation")
    """Breakdown of employees by country and state. Revealed via ``reveal: ["employeesByLocation"]`` in Enrich
    Companies."""

    employees_by_seniority: Optional[list[EmployeesBySeniority]] = Field(default=UNSET, alias="employeesBySeniority")
    """Breakdown of employees by seniority level. Revealed via ``reveal: ["employeesBySeniority"]`` in Enrich
    Companies."""

    competitors: Optional[list[Competitor]] = UNSET
    """List of competitor companies. Revealed via ``reveal: ["competitors"]`` in Enrich Companies. Use Enrich Companies
    with the returned IDs to get full firmographic data on each competitor."""

    business_model: Optional[list[str]] = Field(default=UNSET, alias="businessModel")
    """Company business model classification (e.g. B2B, B2C)"""

    phone: Optional[str] = UNSET
    """Company phone number"""

    email: Optional[str] = UNSET
    """Company contact email address"""

    keywords: Optional[list[str]] = UNSET
    """Keywords associated with the company (normalized from specialities and description)"""

    specialities_refactored: Optional[list[str]] = Field(default=UNSET, alias="specialitiesRefactored")
    """Normalized version of the specialities list"""

    error: Optional[V3ItemError] = UNSET
    """Per-item error in a batch response"""

    client_reference_id: Optional[str] = Field(default=UNSET, alias="clientReferenceId")


class V3SearchAndEnrichCompanyResultDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    alternative_name: NotRequired[str]
    domain: NotRequired[str]
    alternative_domains: NotRequired[list[str]]
    description: NotRequired[str]
    company_type: NotRequired[str]
    year_founded: NotRequired[float]
    employee_count: NotRequired[EmployeeCountDict]
    industry: NotRequired[str]
    sub_industry: NotRequired[str]
    specialities: NotRequired[list[str]]
    industry_tags: NotRequired[list[str]]
    sic_codes: NotRequired[list[V3SicCodeDict]]
    naics_codes: NotRequired[list[V3NaicsCodeDict]]
    company_offering: NotRequired[str]
    email_domain: NotRequired[str]
    additional_industries: NotRequired[list[AdditionalIndustryDict]]
    estimated_annual_it_spend: NotRequired[EstimatedAnnualItSpendDict | None]
    monthly_website_traffic: NotRequired[MonthlyWebsiteTrafficDict | None]
    location: NotRequired[V3CompanyLocationDict]
    additional_locations: NotRequired[list[V3CompanyLocationDict]]
    social_links: NotRequired[SocialLinks1Dict]
    linkedin_followers: NotRequired[float]
    revenue_range: NotRequired[RevenueRangeDict]
    funding: NotRequired[Any]
    intent: NotRequired[Any]
    technologies: NotRequired[list[str]]
    popularity_tier: NotRequired[float]
    logo_url: NotRequired[str]
    employees_by_department: NotRequired[list[EmployeesByDepartmentDict]]
    employees_by_location: NotRequired[list[EmployeesByLocationDict]]
    employees_by_seniority: NotRequired[list[EmployeesBySeniorityDict]]
    competitors: NotRequired[list[CompetitorDict]]
    business_model: NotRequired[list[str]]
    phone: NotRequired[str]
    email: NotRequired[str]
    keywords: NotRequired[list[str]]
    specialities_refactored: NotRequired[list[str]]
    error: NotRequired[V3ItemErrorDict]
    client_reference_id: NotRequired[str]
