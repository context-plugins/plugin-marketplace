from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CompanySearchData(SdkBaseModel):
    id: Optional[str] = UNSET
    """A unique identifier for a Lusha company"""

    name: Optional[str] = UNSET
    """The name of the company"""

    fqdn: Optional[str] = UNSET
    """The fqdn of the company"""

    description: Optional[str] = UNSET
    """A description of the company"""

    logo_url: Optional[str] = Field(default=UNSET, alias="logoUrl")
    """The URL of the company's logo"""

    has_company_employees_count: Optional[bool] = Field(default=UNSET, alias="hasCompanyEmployeesCount")
    has_company_revenue: Optional[bool] = Field(default=UNSET, alias="hasCompanyRevenue")
    has_company_main_industry: Optional[bool] = Field(default=UNSET, alias="hasCompanyMainIndustry")
    has_company_sub_industry: Optional[bool] = Field(default=UNSET, alias="hasCompanySubIndustry")
    has_company_funding: Optional[bool] = Field(default=UNSET, alias="hasCompanyFunding")
    has_company_intent: Optional[bool] = Field(default=UNSET, alias="hasCompanyIntent")
    has_company_technologies: Optional[bool] = Field(default=UNSET, alias="hasCompanyTechnologies")
    has_company_city: Optional[bool] = Field(default=UNSET, alias="hasCompanyCity")
    has_company_country: Optional[bool] = Field(default=UNSET, alias="hasCompanyCountry")
    signal_types: Optional[list[str]] = Field(default=UNSET, alias="signalTypes")
    """Types of signals detected for this company"""


class CompanySearchDataDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    fqdn: NotRequired[str]
    description: NotRequired[str]
    logo_url: NotRequired[str]
    has_company_employees_count: NotRequired[bool]
    has_company_revenue: NotRequired[bool]
    has_company_main_industry: NotRequired[bool]
    has_company_sub_industry: NotRequired[bool]
    has_company_funding: NotRequired[bool]
    has_company_intent: NotRequired[bool]
    has_company_technologies: NotRequired[bool]
    has_company_city: NotRequired[bool]
    has_company_country: NotRequired[bool]
    signal_types: NotRequired[list[str]]
