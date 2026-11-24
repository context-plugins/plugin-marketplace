from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .company_lusha_api_documentation_prospecting_search_enrich_api import (
    CompanyLushaApiDocumentationProspectingSearchEnrichApi,
    CompanyLushaApiDocumentationProspectingSearchEnrichApiDict,
)
from .email_address import EmailAddress, EmailAddressDict
from .linkedin_award import LinkedinAward, LinkedinAwardDict
from .linkedin_certification import LinkedinCertification, LinkedinCertificationDict
from .linkedin_course import LinkedinCourse, LinkedinCourseDict
from .location1_lusha_api_documentation_prospecting_search_enrich_api import (
    Location1LushaApiDocumentationProspectingSearchEnrichApi,
    Location1LushaApiDocumentationProspectingSearchEnrichApiDict,
)
from .phone_numbers import PhoneNumbers, PhoneNumbersDict
from .seniority import Seniority, SeniorityDict
from .social_links_lusha_api_documentation_enrich_api import (
    SocialLinksLushaApiDocumentationEnrichApi,
    SocialLinksLushaApiDocumentationEnrichApiDict,
)


class ContactEnrichData(SdkBaseModel):
    first_name: Optional[str] = Field(default=UNSET, alias="firstName")
    last_name: Optional[str] = Field(default=UNSET, alias="lastName")
    full_name: Optional[str] = Field(default=UNSET, alias="fullName")
    is_shown: Optional[bool] = Field(default=UNSET, alias="isShown")
    job_title: Optional[str] = Field(default=UNSET, alias="jobTitle")
    location: Optional[Location1LushaApiDocumentationProspectingSearchEnrichApi] = UNSET
    email_addresses: Optional[list[EmailAddress]] = Field(default=UNSET, alias="emailAddresses")
    phone_numbers: Optional[list[PhoneNumbers]] = Field(default=UNSET, alias="phoneNumbers")
    company_id: Optional[float] = Field(default=UNSET, alias="companyId")
    company_name: Optional[str] = Field(default=UNSET, alias="companyName")
    social_links: Optional[SocialLinksLushaApiDocumentationEnrichApi] = Field(default=UNSET, alias="socialLinks")
    departments: Optional[list[str]] = UNSET
    seniority: Optional[list[Seniority]] = UNSET
    company: Optional[CompanyLushaApiDocumentationProspectingSearchEnrichApi] = UNSET
    linkedin_followers_count: Optional[int] = Field(default=UNSET, alias="linkedinFollowersCount")
    linkedin_connections_count: Optional[int] = Field(default=UNSET, alias="linkedinConnectionsCount")
    linkedin_certifications: Optional[list[LinkedinCertification]] = Field(
        default=UNSET, alias="linkedinCertifications"
    )
    linkedin_courses: Optional[list[LinkedinCourse]] = Field(default=UNSET, alias="linkedinCourses")
    linkedin_awards: Optional[list[LinkedinAward]] = Field(default=UNSET, alias="linkedinAwards")
    linkedin_skills: Optional[list[str]] = Field(default=UNSET, alias="linkedinSkills")


class ContactEnrichDataDict(TypedDict):
    first_name: NotRequired[str]
    last_name: NotRequired[str]
    full_name: NotRequired[str]
    is_shown: NotRequired[bool]
    job_title: NotRequired[str]
    location: NotRequired[Location1LushaApiDocumentationProspectingSearchEnrichApiDict]
    email_addresses: NotRequired[list[EmailAddressDict]]
    phone_numbers: NotRequired[list[PhoneNumbersDict]]
    company_id: NotRequired[float]
    company_name: NotRequired[str]
    social_links: NotRequired[SocialLinksLushaApiDocumentationEnrichApiDict]
    departments: NotRequired[list[str]]
    seniority: NotRequired[list[SeniorityDict]]
    company: NotRequired[CompanyLushaApiDocumentationProspectingSearchEnrichApiDict]
    linkedin_followers_count: NotRequired[int]
    linkedin_connections_count: NotRequired[int]
    linkedin_certifications: NotRequired[list[LinkedinCertificationDict]]
    linkedin_courses: NotRequired[list[LinkedinCourseDict]]
    linkedin_awards: NotRequired[list[LinkedinAwardDict]]
    linkedin_skills: NotRequired[list[str]]
