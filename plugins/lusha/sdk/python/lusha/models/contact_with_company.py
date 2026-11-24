from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .company_response import CompanyResponse, CompanyResponseDict
from .contact_tag import ContactTag, ContactTagDict
from .email_address import EmailAddress, EmailAddressDict
from .job_title_lusha_api_documentation_enrichment_api import (
    JobTitleLushaApiDocumentationEnrichmentApi,
    JobTitleLushaApiDocumentationEnrichmentApiDict,
)
from .linkedin_award import LinkedinAward, LinkedinAwardDict
from .linkedin_certification import LinkedinCertification, LinkedinCertificationDict
from .linkedin_course import LinkedinCourse, LinkedinCourseDict
from .location_response import LocationResponse, LocationResponseDict
from .phone_numbers import PhoneNumbers, PhoneNumbersDict
from .previous_job_response import PreviousJobResponse, PreviousJobResponseDict
from .social_links_lusha_api_documentation_enrichment_api import (
    SocialLinksLushaApiDocumentationEnrichmentApi,
    SocialLinksLushaApiDocumentationEnrichmentApiDict,
)


class ContactWithCompany(SdkBaseModel):
    company_id: float = Field(alias="companyId")
    first_name: str = Field(alias="firstName")
    last_name: str = Field(alias="lastName")
    full_name: str = Field(alias="fullName")
    emails: Optional[list[str]] = UNSET
    """Simple array of email addresses (deprecated - use emailAddresses)"""

    email_addresses: Optional[list[EmailAddress]] = Field(default=UNSET, alias="emailAddresses")
    """Detailed email addresses with metadata"""

    phones: Optional[str] = UNSET
    """Simple array of phone numbers (deprecated - use phoneNumbers)"""

    phone_numbers: Optional[list[PhoneNumbers]] = Field(default=UNSET, alias="phoneNumbers")
    """Detailed phone numbers with metadata"""

    person_id: Optional[float] = Field(default=UNSET, alias="personId")
    location: Optional[LocationResponse] = UNSET
    job_title: Optional[JobTitleLushaApiDocumentationEnrichmentApi] = Field(default=UNSET, alias="jobTitle")
    social_links: Optional[SocialLinksLushaApiDocumentationEnrichmentApi] = Field(default=UNSET, alias="socialLinks")
    job_start_date: Optional[str] = Field(default=UNSET, alias="jobStartDate")
    previous_job: Optional[PreviousJobResponse] = Field(default=UNSET, alias="previousJob")
    contact_tags: Optional[list[ContactTag]] = Field(default=UNSET, alias="contactTags")
    update_date: Optional[str] = Field(default=UNSET, alias="updateDate")
    linkedin_followers_count: Optional[int] = Field(default=UNSET, alias="linkedinFollowersCount")
    linkedin_connections_count: Optional[int] = Field(default=UNSET, alias="linkedinConnectionsCount")
    linkedin_certifications: Optional[list[LinkedinCertification]] = Field(
        default=UNSET, alias="linkedinCertifications"
    )
    linkedin_courses: Optional[list[LinkedinCourse]] = Field(default=UNSET, alias="linkedinCourses")
    linkedin_awards: Optional[list[LinkedinAward]] = Field(default=UNSET, alias="linkedinAwards")
    linkedin_skills: Optional[list[str]] = Field(default=UNSET, alias="linkedinSkills")
    company: CompanyResponse


class ContactWithCompanyDict(TypedDict):
    company_id: float
    first_name: str
    last_name: str
    full_name: str
    emails: NotRequired[list[str]]
    email_addresses: NotRequired[list[EmailAddressDict]]
    phones: NotRequired[str]
    phone_numbers: NotRequired[list[PhoneNumbersDict]]
    person_id: NotRequired[float]
    location: NotRequired[LocationResponseDict]
    job_title: NotRequired[JobTitleLushaApiDocumentationEnrichmentApiDict]
    social_links: NotRequired[SocialLinksLushaApiDocumentationEnrichmentApiDict]
    job_start_date: NotRequired[str]
    previous_job: NotRequired[PreviousJobResponseDict]
    contact_tags: NotRequired[list[ContactTagDict]]
    update_date: NotRequired[str]
    linkedin_followers_count: NotRequired[int]
    linkedin_connections_count: NotRequired[int]
    linkedin_certifications: NotRequired[list[LinkedinCertificationDict]]
    linkedin_courses: NotRequired[list[LinkedinCourseDict]]
    linkedin_awards: NotRequired[list[LinkedinAwardDict]]
    linkedin_skills: NotRequired[list[str]]
    company: CompanyResponseDict
