from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .company_funding import CompanyFunding, CompanyFundingDict
from .company_intent import CompanyIntent, CompanyIntentDict
from .company_technology import CompanyTechnology, CompanyTechnologyDict


class CompanyLushaApiDocumentationProspectingSearchEnrichApi(SdkBaseModel):
    revenue_range: Optional[list[float]] = Field(default=UNSET, alias="revenueRange")
    funding: Optional[CompanyFunding] = UNSET
    intent: Optional[CompanyIntent] = UNSET
    main_industry: Optional[str] = Field(default=UNSET, alias="mainIndustry")
    sub_industry: Optional[str] = Field(default=UNSET, alias="subIndustry")
    technologies: Optional[list[CompanyTechnology]] = UNSET


class CompanyLushaApiDocumentationProspectingSearchEnrichApiDict(TypedDict):
    revenue_range: NotRequired[list[float]]
    funding: NotRequired[CompanyFundingDict]
    intent: NotRequired[CompanyIntentDict]
    main_industry: NotRequired[str]
    sub_industry: NotRequired[str]
    technologies: NotRequired[list[CompanyTechnologyDict]]
