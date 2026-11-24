from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .buyer_intent import BuyerIntent, BuyerIntentDict
from .company_industry_data import CompanyIndustryData, CompanyIndustryDataDict
from .company_technology import CompanyTechnology, CompanyTechnologyDict
from .domains import Domains, DomainsDict
from .funding_data import FundingData, FundingDataDict
from .industry_primary_group_details_response import (
    IndustryPrimaryGroupDetailsResponse,
    IndustryPrimaryGroupDetailsResponseDict,
)
from .location_response import LocationResponse, LocationResponseDict
from .social_response import SocialResponse, SocialResponseDict


class CompanyResponse(SdkBaseModel):
    name: str
    description: Optional[str] = UNSET
    domains: Optional[Domains] = UNSET
    homepage_url: Optional[str] = Field(default=UNSET, alias="homepageUrl")
    fqdn: str
    location: Optional[LocationResponse] = UNSET
    company_size: Optional[list[float]] = Field(default=UNSET, alias="companySize")
    revenue_range: Optional[list[float]] = Field(default=UNSET, alias="revenueRange")
    industry_primary_group: Optional[str] = Field(default=UNSET, alias="industryPrimaryGroup")
    logo_url: Optional[str] = Field(default=UNSET, alias="logoUrl")
    social: Optional[SocialResponse] = UNSET
    specialities: Optional[list[str]] = UNSET
    technologies: Optional[list[CompanyTechnology]] = UNSET
    funding: Optional[FundingData] = UNSET
    industry: Optional[CompanyIndustryData] = UNSET
    intent: Optional[BuyerIntent] = UNSET
    industry_primary_group_details: Optional[IndustryPrimaryGroupDetailsResponse] = Field(
        default=UNSET, alias="industryPrimaryGroupDetails"
    )


class CompanyResponseDict(TypedDict):
    name: str
    description: NotRequired[str]
    domains: NotRequired[DomainsDict]
    homepage_url: NotRequired[str]
    fqdn: str
    location: NotRequired[LocationResponseDict]
    company_size: NotRequired[list[float]]
    revenue_range: NotRequired[list[float]]
    industry_primary_group: NotRequired[str]
    logo_url: NotRequired[str]
    social: NotRequired[SocialResponseDict]
    specialities: NotRequired[list[str]]
    technologies: NotRequired[list[CompanyTechnologyDict]]
    funding: NotRequired[FundingDataDict]
    industry: NotRequired[CompanyIndustryDataDict]
    intent: NotRequired[BuyerIntentDict]
    industry_primary_group_details: NotRequired[IndustryPrimaryGroupDetailsResponseDict]
