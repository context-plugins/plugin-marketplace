from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .employee_count_lusha_lookalikes_api import EmployeeCountLushaLookalikesApi, EmployeeCountLushaLookalikesApiDict
from .location import Location, LocationDict
from .social_links import SocialLinks, SocialLinksDict


class V3LookAlikeCompanyResult(SdkBaseModel):
    id: Optional[str] = UNSET
    name: Optional[str] = UNSET
    domain: Optional[str] = UNSET
    employee_count: Optional[EmployeeCountLushaLookalikesApi] = Field(default=UNSET, alias="employeeCount")
    industry: Optional[str] = UNSET
    location: Optional[Location] = UNSET
    social_links: Optional[SocialLinks] = Field(default=UNSET, alias="socialLinks")


class V3LookAlikeCompanyResultDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    domain: NotRequired[str]
    employee_count: NotRequired[EmployeeCountLushaLookalikesApiDict]
    industry: NotRequired[str]
    location: NotRequired[LocationDict]
    social_links: NotRequired[SocialLinksDict]
