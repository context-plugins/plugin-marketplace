from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .company_funding1 import CompanyFunding1, CompanyFunding1Dict
from .company_headcount_change_signal import CompanyHeadcountChangeSignal, CompanyHeadcountChangeSignalDict
from .company_industry_primary_group_details import (
    CompanyIndustryPrimaryGroupDetails,
    CompanyIndustryPrimaryGroupDetailsDict,
)
from .company_intent1 import CompanyIntent1, CompanyIntent1Dict
from .company_it_spend_signal import CompanyItSpendSignal, CompanyItSpendSignalDict
from .company_location import CompanyLocation, CompanyLocationDict
from .company_location_response import CompanyLocationResponse, CompanyLocationResponseDict
from .company_news_signal import CompanyNewsSignal, CompanyNewsSignalDict
from .company_size import CompanySize, CompanySizeDict
from .company_social_response1 import CompanySocialResponse1, CompanySocialResponse1Dict
from .company_surge_in_hiring_by_department_signal import (
    CompanySurgeInHiringByDepartmentSignal,
    CompanySurgeInHiringByDepartmentSignalDict,
)
from .company_surge_in_hiring_by_location_signal import (
    CompanySurgeInHiringByLocationSignal,
    CompanySurgeInHiringByLocationSignalDict,
)
from .company_surge_in_hiring_signal import CompanySurgeInHiringSignal, CompanySurgeInHiringSignalDict
from .company_technology import CompanyTechnology, CompanyTechnologyDict
from .company_website_traffic_signal import CompanyWebsiteTrafficSignal, CompanyWebsiteTrafficSignalDict


class CompanySingleResponseData(SdkBaseModel):
    id: float
    """A unique identifier for the Lusha company."""

    description: Optional[str] = UNSET
    """A brief description of the company."""

    domain: Optional[str] = UNSET
    """The domain name associated with the company's email addresses."""

    employees: Optional[str] = UNSET
    """The company's employee size range."""

    founded: Optional[str] = UNSET
    """The year the company was founded."""

    fqdn: Optional[str] = UNSET
    """The fully qualified domain name of the company."""

    logo_url: Optional[str] = Field(default=UNSET, alias="logoUrl")
    """The URL of the company's logo."""

    name: str
    """The name of the company."""

    linkedin_followers: Optional[int] = Field(default=UNSET, alias="linkedinFollowers")
    """LinkedIn followers count for the company"""

    email_domain: Optional[str] = Field(default=UNSET, alias="emailDomain")
    """Company email domain"""

    company_locations: Optional[list[CompanyLocation]] = Field(default=UNSET, alias="companyLocations")
    """All known company locations (not just HQ)."""

    alternative_name: Optional[str] = Field(default=UNSET, alias="alternativeName")
    """Normalized alternative company name"""

    company_type: Optional[str] = Field(default=UNSET, alias="companyType")
    """Type of company"""

    lusha_popularity_tier: Optional[int] = Field(default=UNSET, alias="lushaPopularityTier")
    """A proprietary ranking used by Lusha to categorize companies based on their popularity in the platform"""

    company_size: Optional[CompanySize] = Field(default=UNSET, alias="companySize")
    """Company size details."""

    revenue_range: Optional[list[float]] = Field(default=UNSET, alias="revenueRange")
    """The company's revenue range."""

    main_industry: Optional[str] = Field(default=UNSET, alias="mainIndustry")
    """The main industry of the company."""

    sub_industry: Optional[str] = Field(default=UNSET, alias="subIndustry")
    """The specific sub-sector within the primary industry."""

    social: Optional[CompanySocialResponse1] = UNSET
    """Social media links associated with the company."""

    address: Optional[str] = UNSET
    """The full address of the company's location."""

    location: Optional[CompanyLocationResponse] = UNSET
    """HQ location only. For all company site locations, see companyLocations."""

    categories: Optional[list[str]] = UNSET
    """LinkedIn industry tags for the company."""

    industry_primary_group_details: Optional[CompanyIndustryPrimaryGroupDetails] = Field(
        default=UNSET, alias="industryPrimaryGroupDetails"
    )
    website: Optional[str] = UNSET
    """The company's website URL."""

    specialities: Optional[list[str]] = UNSET
    """LinkedIn specialties tags associated with the company."""

    funding: Optional[CompanyFunding1] = UNSET
    """Details regarding the company's funding activities."""

    intent: Optional[CompanyIntent1] = UNSET
    """A list of detected intent topics related to the company based on your account's mapped topics."""

    technologies: Optional[list[CompanyTechnology]] = UNSET
    """A list of technologies associated with the company."""

    risk_news: Optional[list[CompanyNewsSignal]] = Field(default=UNSET, alias="riskNews")
    """Litigations and security news signals"""

    commercial_activity_news: Optional[list[CompanyNewsSignal]] = Field(default=UNSET, alias="commercialActivityNews")
    """Launches, partnerships, and go-to-market activity signals"""

    corporate_strategy_news: Optional[list[CompanyNewsSignal]] = Field(default=UNSET, alias="corporateStrategyNews")
    """M&A, restructuring, or strategic direction change signals"""

    financial_events_news: Optional[list[CompanyNewsSignal]] = Field(default=UNSET, alias="financialEventsNews")
    """Funding, IPOs, and financial performance event signals"""

    people_news: Optional[list[CompanyNewsSignal]] = Field(default=UNSET, alias="peopleNews")
    """Hiring, layoffs, or leadership change signals"""

    market_intelligence_news: Optional[list[CompanyNewsSignal]] = Field(default=UNSET, alias="marketIntelligenceNews")
    """Event participation, recognition, and competitor activity signals"""

    product_activity_news: Optional[list[CompanyNewsSignal]] = Field(default=UNSET, alias="productActivityNews")
    """Product launch, development, and integration news signals"""

    surge_in_hiring: Optional[list[CompanySurgeInHiringSignal]] = Field(default=UNSET, alias="surgeInHiring")
    """Overall hiring surge signals"""

    surge_in_hiring_by_department: Optional[list[CompanySurgeInHiringByDepartmentSignal]] = Field(
        default=UNSET, alias="surgeInHiringByDepartment"
    )
    """Department-specific hiring surge signals"""

    surge_in_hiring_by_location: Optional[list[CompanySurgeInHiringByLocationSignal]] = Field(
        default=UNSET, alias="surgeInHiringByLocation"
    )
    """Location-specific hiring surge signals"""

    website_traffic_increase: Optional[list[CompanyWebsiteTrafficSignal]] = Field(
        default=UNSET, alias="websiteTrafficIncrease"
    )
    """Website traffic increase signals"""

    website_traffic_decrease: Optional[list[CompanyWebsiteTrafficSignal]] = Field(
        default=UNSET, alias="websiteTrafficDecrease"
    )
    """Website traffic decrease signals"""

    it_spend_increase: Optional[list[CompanyItSpendSignal]] = Field(default=UNSET, alias="itSpendIncrease")
    """IT spending increase signals"""

    it_spend_decrease: Optional[list[CompanyItSpendSignal]] = Field(default=UNSET, alias="itSpendDecrease")
    """IT spending decrease signals"""

    headcount_increase1m: Optional[list[CompanyHeadcountChangeSignal]] = Field(
        default=UNSET, alias="headcountIncrease1m"
    )
    headcount_decrease1m: Optional[list[CompanyHeadcountChangeSignal]] = Field(
        default=UNSET, alias="headcountDecrease1m"
    )
    headcount_increase3m: Optional[list[CompanyHeadcountChangeSignal]] = Field(
        default=UNSET, alias="headcountIncrease3m"
    )
    headcount_decrease3m: Optional[list[CompanyHeadcountChangeSignal]] = Field(
        default=UNSET, alias="headcountDecrease3m"
    )
    headcount_increase6m: Optional[list[CompanyHeadcountChangeSignal]] = Field(
        default=UNSET, alias="headcountIncrease6m"
    )
    headcount_decrease6m: Optional[list[CompanyHeadcountChangeSignal]] = Field(
        default=UNSET, alias="headcountDecrease6m"
    )
    headcount_increase12m: Optional[list[CompanyHeadcountChangeSignal]] = Field(
        default=UNSET, alias="headcountIncrease12m"
    )
    headcount_decrease12m: Optional[list[CompanyHeadcountChangeSignal]] = Field(
        default=UNSET, alias="headcountDecrease12m"
    )


class CompanySingleResponseDataDict(TypedDict):
    id: float
    description: NotRequired[str]
    domain: NotRequired[str]
    employees: NotRequired[str]
    founded: NotRequired[str]
    fqdn: NotRequired[str]
    logo_url: NotRequired[str]
    name: str
    linkedin_followers: NotRequired[int]
    email_domain: NotRequired[str]
    company_locations: NotRequired[list[CompanyLocationDict]]
    alternative_name: NotRequired[str]
    company_type: NotRequired[str]
    lusha_popularity_tier: NotRequired[int]
    company_size: NotRequired[CompanySizeDict]
    revenue_range: NotRequired[list[float]]
    main_industry: NotRequired[str]
    sub_industry: NotRequired[str]
    social: NotRequired[CompanySocialResponse1Dict]
    address: NotRequired[str]
    location: NotRequired[CompanyLocationResponseDict]
    categories: NotRequired[list[str]]
    industry_primary_group_details: NotRequired[CompanyIndustryPrimaryGroupDetailsDict]
    website: NotRequired[str]
    specialities: NotRequired[list[str]]
    funding: NotRequired[CompanyFunding1Dict]
    intent: NotRequired[CompanyIntent1Dict]
    technologies: NotRequired[list[CompanyTechnologyDict]]
    risk_news: NotRequired[list[CompanyNewsSignalDict]]
    commercial_activity_news: NotRequired[list[CompanyNewsSignalDict]]
    corporate_strategy_news: NotRequired[list[CompanyNewsSignalDict]]
    financial_events_news: NotRequired[list[CompanyNewsSignalDict]]
    people_news: NotRequired[list[CompanyNewsSignalDict]]
    market_intelligence_news: NotRequired[list[CompanyNewsSignalDict]]
    product_activity_news: NotRequired[list[CompanyNewsSignalDict]]
    surge_in_hiring: NotRequired[list[CompanySurgeInHiringSignalDict]]
    surge_in_hiring_by_department: NotRequired[list[CompanySurgeInHiringByDepartmentSignalDict]]
    surge_in_hiring_by_location: NotRequired[list[CompanySurgeInHiringByLocationSignalDict]]
    website_traffic_increase: NotRequired[list[CompanyWebsiteTrafficSignalDict]]
    website_traffic_decrease: NotRequired[list[CompanyWebsiteTrafficSignalDict]]
    it_spend_increase: NotRequired[list[CompanyItSpendSignalDict]]
    it_spend_decrease: NotRequired[list[CompanyItSpendSignalDict]]
    headcount_increase1m: NotRequired[list[CompanyHeadcountChangeSignalDict]]
    headcount_decrease1m: NotRequired[list[CompanyHeadcountChangeSignalDict]]
    headcount_increase3m: NotRequired[list[CompanyHeadcountChangeSignalDict]]
    headcount_decrease3m: NotRequired[list[CompanyHeadcountChangeSignalDict]]
    headcount_increase6m: NotRequired[list[CompanyHeadcountChangeSignalDict]]
    headcount_decrease6m: NotRequired[list[CompanyHeadcountChangeSignalDict]]
    headcount_increase12m: NotRequired[list[CompanyHeadcountChangeSignalDict]]
    headcount_decrease12m: NotRequired[list[CompanyHeadcountChangeSignalDict]]
