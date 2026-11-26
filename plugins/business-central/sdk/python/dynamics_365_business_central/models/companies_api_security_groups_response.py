from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .security_group import SecurityGroup, SecurityGroupDict


class CompaniesApiSecurityGroupsResponse(SdkBaseModel):
    value: Optional[list[SecurityGroup]] = UNSET


class CompaniesApiSecurityGroupsResponseDict(TypedDict):
    value: NotRequired[list[SecurityGroupDict]]
