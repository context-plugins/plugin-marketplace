from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CompanyLushaApiDocumentationEnrichmentApi(SdkBaseModel):
    name: Optional[str] = UNSET
    """The name of the company, Required if no domain."""

    domain: Optional[str] = UNSET
    """The domain of the company, Required if no name."""

    is_current: bool = Field(alias="isCurrent")
    """Indicates whether this is the person's current company"""

    job_title: Optional[str] = Field(default=UNSET, alias="jobTitle")
    """The job title of the person at the company"""

    fqdn: Optional[str] = UNSET
    """The fully qualified domain name of the company"""

    company_social_id: Optional[str] = Field(default=UNSET, alias="companySocialId")
    """The social ID associated with the company (if available)"""


class CompanyLushaApiDocumentationEnrichmentApiDict(TypedDict):
    name: NotRequired[str]
    domain: NotRequired[str]
    is_current: bool
    job_title: NotRequired[str]
    fqdn: NotRequired[str]
    company_social_id: NotRequired[str]
