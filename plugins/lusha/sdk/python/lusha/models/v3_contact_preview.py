from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .company import Company, CompanyDict
from .job_title import JobTitle, JobTitleDict
from .location import Location, LocationDict
from .social_links import SocialLinks, SocialLinksDict
from .v3_can_reveal_item import V3CanRevealItem, V3CanRevealItemDict
from .v3_item_error import V3ItemError, V3ItemErrorDict


class V3ContactPreview(SdkBaseModel):
    client_reference_id: Optional[str] = Field(default=UNSET, alias="clientReferenceId")
    id: Optional[str] = UNSET
    first_name: Optional[str] = Field(default=UNSET, alias="firstName")
    last_name: Optional[str] = Field(default=UNSET, alias="lastName")
    job_title: Optional[JobTitle] = Field(default=UNSET, alias="jobTitle")
    company: Optional[Company] = UNSET
    location: Optional[Location] = UNSET
    social_links: Optional[SocialLinks] = Field(default=UNSET, alias="socialLinks")
    has: Optional[list[str]] = UNSET
    can_reveal: Optional[list[V3CanRevealItem]] = Field(default=UNSET, alias="canReveal")
    signal_types: Optional[list[str]] = Field(default=UNSET, alias="signalTypes")
    error: Optional[V3ItemError] = UNSET
    """Per-item error in a batch response"""


class V3ContactPreviewDict(TypedDict):
    client_reference_id: NotRequired[str]
    id: NotRequired[str]
    first_name: NotRequired[str]
    last_name: NotRequired[str]
    job_title: NotRequired[JobTitleDict]
    company: NotRequired[CompanyDict]
    location: NotRequired[LocationDict]
    social_links: NotRequired[SocialLinksDict]
    has: NotRequired[list[str]]
    can_reveal: NotRequired[list[V3CanRevealItemDict]]
    signal_types: NotRequired[list[str]]
    error: NotRequired[V3ItemErrorDict]
