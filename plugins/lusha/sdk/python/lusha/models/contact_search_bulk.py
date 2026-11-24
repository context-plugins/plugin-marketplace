from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .company_lusha_api_documentation_enrichment_api import (
    CompanyLushaApiDocumentationEnrichmentApi,
    CompanyLushaApiDocumentationEnrichmentApiDict,
)


class ContactSearchBulk(SdkBaseModel):
    contact_id: str = Field(alias="contactId")
    """A unique sequential ID to associate with the contact object in the API response"""

    person_id: Optional[str] = Field(default=UNSET, alias="personId")
    """The unique person identifier in Lusha"""

    full_name: Optional[str] = Field(default=UNSET, alias="fullName")
    """The full name of the person"""

    location: Optional[str] = UNSET
    """The raw location of the person"""

    linkedin_url: Optional[str] = Field(default=UNSET, alias="linkedinUrl")
    """The LinkedIn URL of the person"""

    email: Optional[str] = UNSET
    """The email address of the person"""

    companies: Optional[list[CompanyLushaApiDocumentationEnrichmentApi]] = UNSET
    """Details of the company where the contact is currently employed (or previously employed if applicable)"""


class ContactSearchBulkDict(TypedDict):
    contact_id: str
    person_id: NotRequired[str]
    full_name: NotRequired[str]
    location: NotRequired[str]
    linkedin_url: NotRequired[str]
    email: NotRequired[str]
    companies: NotRequired[list[CompanyLushaApiDocumentationEnrichmentApiDict]]
