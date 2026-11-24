from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .employee_count import EmployeeCount, EmployeeCountDict
from .location_lusha_api_documentation_website_visits_api import (
    LocationLushaApiDocumentationWebsiteVisitsApi,
    LocationLushaApiDocumentationWebsiteVisitsApiDict,
)
from .social_links import SocialLinks, SocialLinksDict
from .v3_can_reveal_item import V3CanRevealItem, V3CanRevealItemDict
from .v3_item_error import V3ItemError, V3ItemErrorDict


class V3CompanyPreviewLushaApiDocumentationWebsiteVisitsApi(SdkBaseModel):
    client_reference_id: Optional[str] = Field(default=UNSET, alias="clientReferenceId")
    id: Optional[str] = UNSET
    name: Optional[str] = UNSET
    domain: Optional[str] = UNSET
    employee_count: Optional[EmployeeCount] = Field(default=UNSET, alias="employeeCount")
    industry: Optional[str] = UNSET
    location: Optional[LocationLushaApiDocumentationWebsiteVisitsApi] = UNSET
    social_links: Optional[SocialLinks] = Field(default=UNSET, alias="socialLinks")
    has: Optional[list[str]] = UNSET
    """Available data points that can be revealed via Enrich Companies. Includes base firmographic fields plus new
    revealable fields: employeesByDepartment, employeesByLocation, employeesBySeniority, competitors, businessModel,
    phones, emails, keywords, socialLinks, estimatedAnnualItSpend, monthlyWebsiteTraffic."""

    can_reveal: Optional[list[V3CanRevealItem]] = Field(default=UNSET, alias="canReveal")
    """Data fields that can be revealed via Enrich Companies, with the credit cost per field. A cost of 0 means the
    field has already been revealed for this account."""

    signal_types: Optional[list[str]] = Field(default=UNSET, alias="signalTypes")
    error: Optional[V3ItemError] = UNSET
    """Per-item error in a batch response"""


class V3CompanyPreviewLushaApiDocumentationWebsiteVisitsApiDict(TypedDict):
    client_reference_id: NotRequired[str]
    id: NotRequired[str]
    name: NotRequired[str]
    domain: NotRequired[str]
    employee_count: NotRequired[EmployeeCountDict]
    industry: NotRequired[str]
    location: NotRequired[LocationLushaApiDocumentationWebsiteVisitsApiDict]
    social_links: NotRequired[SocialLinksDict]
    has: NotRequired[list[str]]
    can_reveal: NotRequired[list[V3CanRevealItemDict]]
    signal_types: NotRequired[list[str]]
    error: NotRequired[V3ItemErrorDict]
