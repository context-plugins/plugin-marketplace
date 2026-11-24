from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .company1 import Company1, Company1Dict
from .contact_location import ContactLocation, ContactLocationDict
from .job_title1 import JobTitle1, JobTitle1Dict
from .social_links2 import SocialLinks2, SocialLinks2Dict


class LookalikeContactResult(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    contact_id: Optional[str] = Field(default=UNSET, alias="contactId")
    first_name: OptionalNullable[str] = Field(default=UNSET, alias="firstName")
    last_name: OptionalNullable[str] = Field(default=UNSET, alias="lastName")
    social_links: Optional[SocialLinks2] = Field(default=UNSET, alias="socialLinks")
    company: Optional[Company1] = UNSET
    job_title: Optional[JobTitle1] = Field(default=UNSET, alias="jobTitle")
    location: Optional[ContactLocation] = UNSET


class LookalikeContactResultDict(TypedDict):
    contact_id: NotRequired[str]
    first_name: NotRequired[str | None]
    last_name: NotRequired[str | None]
    social_links: NotRequired[SocialLinks2Dict]
    company: NotRequired[Company1Dict]
    job_title: NotRequired[JobTitle1Dict]
    location: NotRequired[ContactLocationDict]
