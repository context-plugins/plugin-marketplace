from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .job_title import JobTitle, JobTitleDict
from .location_lusha_api_documentation_enrich_api import (
    LocationLushaApiDocumentationEnrichApi,
    LocationLushaApiDocumentationEnrichApiDict,
)
from .previous_employment import PreviousEmployment, PreviousEmploymentDict
from .social_links_lusha_api_documentation_enrich_api import (
    SocialLinksLushaApiDocumentationEnrichApi,
    SocialLinksLushaApiDocumentationEnrichApiDict,
)
from .v3_contact_tag import V3ContactTag, V3ContactTagDict
from .v3_email_address import V3EmailAddress, V3EmailAddressDict
from .v3_enriched_contact_company_ref import V3EnrichedContactCompanyRef, V3EnrichedContactCompanyRefDict
from .v3_item_error import V3ItemError, V3ItemErrorDict
from .v3_phone_number import V3PhoneNumber, V3PhoneNumberDict


class V3SearchAndEnrichContactResult(SdkBaseModel):
    id: Optional[str] = UNSET
    first_name: Optional[str] = Field(default=UNSET, alias="firstName")
    last_name: Optional[str] = Field(default=UNSET, alias="lastName")
    full_name: Optional[str] = Field(default=UNSET, alias="fullName")
    job_title: Optional[JobTitle] = Field(default=UNSET, alias="jobTitle")
    location: Optional[LocationLushaApiDocumentationEnrichApi] = UNSET
    tags: Optional[list[V3ContactTag]] = UNSET
    emails: Optional[list[V3EmailAddress]] = UNSET
    phones: Optional[list[V3PhoneNumber]] = UNSET
    company: Optional[V3EnrichedContactCompanyRef] = UNSET
    social_links: Optional[SocialLinksLushaApiDocumentationEnrichApi] = Field(default=UNSET, alias="socialLinks")
    previous_employment: Optional[list[PreviousEmployment]] = Field(default=UNSET, alias="previousEmployment")
    update_date: Optional[Date] = Field(default=UNSET, alias="updateDate")
    error: Optional[V3ItemError] = UNSET
    """Per-item error in a batch response"""

    client_reference_id: Optional[str] = Field(default=UNSET, alias="clientReferenceId")


class V3SearchAndEnrichContactResultDict(TypedDict):
    id: NotRequired[str]
    first_name: NotRequired[str]
    last_name: NotRequired[str]
    full_name: NotRequired[str]
    job_title: NotRequired[JobTitleDict]
    location: NotRequired[LocationLushaApiDocumentationEnrichApiDict]
    tags: NotRequired[list[V3ContactTagDict]]
    emails: NotRequired[list[V3EmailAddressDict]]
    phones: NotRequired[list[V3PhoneNumberDict]]
    company: NotRequired[V3EnrichedContactCompanyRefDict]
    social_links: NotRequired[SocialLinksLushaApiDocumentationEnrichApiDict]
    previous_employment: NotRequired[list[PreviousEmploymentDict]]
    update_date: NotRequired[Date]
    error: NotRequired[V3ItemErrorDict]
    client_reference_id: NotRequired[str]
