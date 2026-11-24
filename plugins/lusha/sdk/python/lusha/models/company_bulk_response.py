from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .company_funding import CompanyFunding, CompanyFundingDict
from .company_headcount_change_signal import CompanyHeadcountChangeSignal, CompanyHeadcountChangeSignalDict
from .company_industry_primary_group_details import (
    CompanyIndustryPrimaryGroupDetails,
    CompanyIndustryPrimaryGroupDetailsDict,
)
from .company_intent import CompanyIntent, CompanyIntentDict
from .company_it_spend_signal import CompanyItSpendSignal, CompanyItSpendSignalDict
from .company_location import CompanyLocation, CompanyLocationDict
from .company_news_signal import CompanyNewsSignal, CompanyNewsSignalDict
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


class CompanyBulkResponse(SdkBaseModel):
    id: Optional[float] = UNSET
    lusha_company_id: Optional[str] = Field(default=UNSET, alias="lushaCompanyId")
    name: Optional[str] = UNSET
    company_size: Optional[list[float]] = Field(default=UNSET, alias="companySize")
    linkedin_followers: Optional[int] = Field(default=UNSET, alias="linkedinFollowers")
    email_domain: Optional[str] = Field(default=UNSET, alias="emailDomain")
    company_locations: Optional[list[CompanyLocation]] = Field(default=UNSET, alias="companyLocations")
    alternative_name: Optional[str] = Field(default=UNSET, alias="alternativeName")
    company_type: Optional[str] = Field(default=UNSET, alias="companyType")
    lusha_popularity_tier: Optional[int] = Field(default=UNSET, alias="lushaPopularityTier")
    employees_in_linkedin: Optional[float] = Field(default=UNSET, alias="employeesInLinkedin")
    revenue_range: Optional[list[float]] = Field(default=UNSET, alias="revenueRange")
    fqdn: Optional[str] = UNSET
    founded: Optional[str] = UNSET
    description: Optional[str] = UNSET
    logo_url: Optional[str] = Field(default=UNSET, alias="logoUrl")
    industry_primary_group_details: Optional[CompanyIndustryPrimaryGroupDetails] = Field(
        default=UNSET, alias="industryPrimaryGroupDetails"
    )
    linkedin: Optional[str] = UNSET
    main_industry: Optional[str] = Field(default=UNSET, alias="mainIndustry")
    sub_industry: Optional[str] = Field(default=UNSET, alias="subIndustry")
    city: Optional[str] = UNSET
    state: Optional[str] = UNSET
    country: Optional[str] = UNSET
    country_iso2: Optional[str] = Field(default=UNSET, alias="countryIso2")
    continent: Optional[str] = UNSET
    raw_location: Optional[str] = Field(default=UNSET, alias="rawLocation")
    crunchbase: Optional[str] = UNSET
    specialities: Optional[list[str]] = UNSET
    funding: Optional[CompanyFunding] = UNSET
    intent: Optional[CompanyIntent] = UNSET
    technologies: Optional[list[CompanyTechnology]] = UNSET
    risk_news: Optional[list[CompanyNewsSignal]] = Field(default=UNSET, alias="riskNews")
    commercial_activity_news: Optional[list[CompanyNewsSignal]] = Field(default=UNSET, alias="commercialActivityNews")
    corporate_strategy_news: Optional[list[CompanyNewsSignal]] = Field(default=UNSET, alias="corporateStrategyNews")
    financial_events_news: Optional[list[CompanyNewsSignal]] = Field(default=UNSET, alias="financialEventsNews")
    people_news: Optional[list[CompanyNewsSignal]] = Field(default=UNSET, alias="peopleNews")
    market_intelligence_news: Optional[list[CompanyNewsSignal]] = Field(default=UNSET, alias="marketIntelligenceNews")
    product_activity_news: Optional[list[CompanyNewsSignal]] = Field(default=UNSET, alias="productActivityNews")
    surge_in_hiring: Optional[list[CompanySurgeInHiringSignal]] = Field(default=UNSET, alias="surgeInHiring")
    surge_in_hiring_by_department: Optional[list[CompanySurgeInHiringByDepartmentSignal]] = Field(
        default=UNSET, alias="surgeInHiringByDepartment"
    )
    surge_in_hiring_by_location: Optional[list[CompanySurgeInHiringByLocationSignal]] = Field(
        default=UNSET, alias="surgeInHiringByLocation"
    )
    website_traffic_increase: Optional[list[CompanyWebsiteTrafficSignal]] = Field(
        default=UNSET, alias="websiteTrafficIncrease"
    )
    website_traffic_decrease: Optional[list[CompanyWebsiteTrafficSignal]] = Field(
        default=UNSET, alias="websiteTrafficDecrease"
    )
    it_spend_increase: Optional[list[CompanyItSpendSignal]] = Field(default=UNSET, alias="itSpendIncrease")
    it_spend_decrease: Optional[list[CompanyItSpendSignal]] = Field(default=UNSET, alias="itSpendDecrease")
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


class CompanyBulkResponseDict(TypedDict):
    id: NotRequired[float]
    lusha_company_id: NotRequired[str]
    name: NotRequired[str]
    company_size: NotRequired[list[float]]
    linkedin_followers: NotRequired[int]
    email_domain: NotRequired[str]
    company_locations: NotRequired[list[CompanyLocationDict]]
    alternative_name: NotRequired[str]
    company_type: NotRequired[str]
    lusha_popularity_tier: NotRequired[int]
    employees_in_linkedin: NotRequired[float]
    revenue_range: NotRequired[list[float]]
    fqdn: NotRequired[str]
    founded: NotRequired[str]
    description: NotRequired[str]
    logo_url: NotRequired[str]
    industry_primary_group_details: NotRequired[CompanyIndustryPrimaryGroupDetailsDict]
    linkedin: NotRequired[str]
    main_industry: NotRequired[str]
    sub_industry: NotRequired[str]
    city: NotRequired[str]
    state: NotRequired[str]
    country: NotRequired[str]
    country_iso2: NotRequired[str]
    continent: NotRequired[str]
    raw_location: NotRequired[str]
    crunchbase: NotRequired[str]
    specialities: NotRequired[list[str]]
    funding: NotRequired[CompanyFundingDict]
    intent: NotRequired[CompanyIntentDict]
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
