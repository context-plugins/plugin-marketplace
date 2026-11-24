from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ContactSearchData(SdkBaseModel):
    contact_id: Optional[str] = Field(default=UNSET, alias="contactId")
    """A unique serial contact ID generated for each search response"""

    is_shown: Optional[bool] = Field(default=UNSET, alias="isShown")
    """Indicates whether the contact was already revealed by any of the account users"""

    name: Optional[str] = UNSET
    """The full name of the contact"""

    job_title: Optional[str] = Field(default=UNSET, alias="jobTitle")
    """The job title held by the person at their current company"""

    company_id: Optional[float] = Field(default=UNSET, alias="companyId")
    """A unique identifier for a Lusha company"""

    company_name: Optional[str] = Field(default=UNSET, alias="companyName")
    """The name of the company where the person currently works"""

    fqdn: Optional[str] = UNSET
    """The fqdn of the company"""

    has_company_employees_count: Optional[bool] = Field(default=UNSET, alias="hasCompanyEmployeesCount")
    has_company_revenue: Optional[bool] = Field(default=UNSET, alias="hasCompanyRevenue")
    has_company_main_industry: Optional[bool] = Field(default=UNSET, alias="hasCompanyMainIndustry")
    has_company_sub_industry: Optional[bool] = Field(default=UNSET, alias="hasCompanySubIndustry")
    has_company_funding: Optional[bool] = Field(default=UNSET, alias="hasCompanyFunding")
    has_company_intent: Optional[bool] = Field(default=UNSET, alias="hasCompanyIntent")
    has_company_technologies: Optional[bool] = Field(default=UNSET, alias="hasCompanyTechnologies")
    has_department: Optional[bool] = Field(default=UNSET, alias="hasDepartment")
    has_seniority: Optional[bool] = Field(default=UNSET, alias="hasSeniority")
    has_contact_location: Optional[bool] = Field(default=UNSET, alias="hasContactLocation")
    has_social_link: Optional[bool] = Field(default=UNSET, alias="hasSocialLink")
    has_emails: Optional[bool] = Field(default=UNSET, alias="hasEmails")
    has_work_email: Optional[bool] = Field(default=UNSET, alias="hasWorkEmail")
    has_private_email: Optional[bool] = Field(default=UNSET, alias="hasPrivateEmail")
    has_phones: Optional[bool] = Field(default=UNSET, alias="hasPhones")
    has_mobile_phone: Optional[bool] = Field(default=UNSET, alias="hasMobilePhone")
    has_direct_phone: Optional[bool] = Field(default=UNSET, alias="hasDirectPhone")
    has_company_city: Optional[bool] = Field(default=UNSET, alias="hasCompanyCity")
    has_company_country: Optional[bool] = Field(default=UNSET, alias="hasCompanyCountry")
    signal_types: Optional[list[str]] = Field(default=UNSET, alias="signalTypes")
    """Types of signals detected for this contact"""


class ContactSearchDataDict(TypedDict):
    contact_id: NotRequired[str]
    is_shown: NotRequired[bool]
    name: NotRequired[str]
    job_title: NotRequired[str]
    company_id: NotRequired[float]
    company_name: NotRequired[str]
    fqdn: NotRequired[str]
    has_company_employees_count: NotRequired[bool]
    has_company_revenue: NotRequired[bool]
    has_company_main_industry: NotRequired[bool]
    has_company_sub_industry: NotRequired[bool]
    has_company_funding: NotRequired[bool]
    has_company_intent: NotRequired[bool]
    has_company_technologies: NotRequired[bool]
    has_department: NotRequired[bool]
    has_seniority: NotRequired[bool]
    has_contact_location: NotRequired[bool]
    has_social_link: NotRequired[bool]
    has_emails: NotRequired[bool]
    has_work_email: NotRequired[bool]
    has_private_email: NotRequired[bool]
    has_phones: NotRequired[bool]
    has_mobile_phone: NotRequired[bool]
    has_direct_phone: NotRequired[bool]
    has_company_city: NotRequired[bool]
    has_company_country: NotRequired[bool]
    signal_types: NotRequired[list[str]]
