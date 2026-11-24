from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .company import Company, CompanyDict
from .job_title import JobTitle, JobTitleDict
from .location import Location, LocationDict
from .social_links import SocialLinks, SocialLinksDict


class V3LookAlikeContactResult(SdkBaseModel):
    id: Optional[str] = UNSET
    first_name: Optional[str] = Field(default=UNSET, alias="firstName")
    last_name: Optional[str] = Field(default=UNSET, alias="lastName")
    social_links: Optional[SocialLinks] = Field(default=UNSET, alias="socialLinks")
    company: Optional[Company] = UNSET
    job_title: Optional[JobTitle] = Field(default=UNSET, alias="jobTitle")
    location: Optional[Location] = UNSET


class V3LookAlikeContactResultDict(TypedDict):
    id: NotRequired[str]
    first_name: NotRequired[str]
    last_name: NotRequired[str]
    social_links: NotRequired[SocialLinksDict]
    company: NotRequired[CompanyDict]
    job_title: NotRequired[JobTitleDict]
    location: NotRequired[LocationDict]
