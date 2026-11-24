from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .analytics1 import Analytics1, Analytics1Dict
from .company_family_tree import CompanyFamilyTree, CompanyFamilyTreeDict
from .company_funding import CompanyFunding, CompanyFundingDict
from .company_investors import CompanyInvestors, CompanyInvestorsDict
from .department_size import DepartmentSize, DepartmentSizeDict
from .employees import Employees, EmployeesDict
from .enriched_address import EnrichedAddress, EnrichedAddressDict
from .intent_modeling import IntentModeling, IntentModelingDict
from .matching_confidence import MatchingConfidence, MatchingConfidenceDict
from .revenue_dollar import RevenueDollar, RevenueDollarDict
from .signals import Signals, SignalsDict


class EnrichedCompany(SdkBaseModel):
    ug_company_id: Optional[str] = UNSET
    """Leadspace unique company identifier"""

    ls_id: Optional[str] = UNSET
    """Legacy v3 company identifier that mirrors ug_company_id; scheduled for sunset in 2026"""

    name: Optional[str] = UNSET
    original_name: Optional[str] = UNSET
    description: Optional[str] = UNSET
    website: Optional[str] = UNSET
    phone: Optional[str] = UNSET
    industry: Optional[str] = UNSET
    sub_industry: Optional[str] = UNSET
    sic: Optional[str] = UNSET
    sic_description: Optional[str] = Field(default=UNSET, alias="sicDescription")
    naics: Optional[str] = UNSET
    naics_description: Optional[str] = Field(default=UNSET, alias="naicsDescription")
    ownership: Optional[str] = UNSET
    linkedin_profile: Optional[str] = UNSET
    latitude: Optional[str] = UNSET
    longitude: Optional[str] = UNSET
    primary_location: Optional[str] = UNSET
    address: Optional[EnrichedAddress] = UNSET
    employees: Optional[Employees] = UNSET
    revenue_dollar: Optional[RevenueDollar] = UNSET
    matching_confidence: Optional[MatchingConfidence] = UNSET
    family_tree: Optional[CompanyFamilyTree] = UNSET
    """The company hierarchy in addition to the matched company"""

    department_size: Optional[DepartmentSize] = UNSET
    funding: Optional[CompanyFunding] = UNSET
    investors: Optional[CompanyInvestors] = UNSET
    signals: Optional[Signals] = UNSET
    intent_modeling_v4: Optional[IntentModeling] = UNSET
    domain_intent: Optional[str] = UNSET
    specialties: Optional[list[str]] = UNSET
    analytics: Optional[Analytics1] = UNSET


class EnrichedCompanyDict(TypedDict):
    ug_company_id: NotRequired[str]
    ls_id: NotRequired[str]
    name: NotRequired[str]
    original_name: NotRequired[str]
    description: NotRequired[str]
    website: NotRequired[str]
    phone: NotRequired[str]
    industry: NotRequired[str]
    sub_industry: NotRequired[str]
    sic: NotRequired[str]
    sic_description: NotRequired[str]
    naics: NotRequired[str]
    naics_description: NotRequired[str]
    ownership: NotRequired[str]
    linkedin_profile: NotRequired[str]
    latitude: NotRequired[str]
    longitude: NotRequired[str]
    primary_location: NotRequired[str]
    address: NotRequired[EnrichedAddressDict]
    employees: NotRequired[EmployeesDict]
    revenue_dollar: NotRequired[RevenueDollarDict]
    matching_confidence: NotRequired[MatchingConfidenceDict]
    family_tree: NotRequired[CompanyFamilyTreeDict]
    department_size: NotRequired[DepartmentSizeDict]
    funding: NotRequired[CompanyFundingDict]
    investors: NotRequired[CompanyInvestorsDict]
    signals: NotRequired[SignalsDict]
    intent_modeling_v4: NotRequired[IntentModelingDict]
    domain_intent: NotRequired[str]
    specialties: NotRequired[list[str]]
    analytics: NotRequired[Analytics1Dict]
