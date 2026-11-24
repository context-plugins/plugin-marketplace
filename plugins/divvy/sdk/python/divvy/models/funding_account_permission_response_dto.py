from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .organization import Organization, OrganizationDict
from .user import User, UserDict


class FundingAccountPermissionResponseDto(SdkBaseModel):
    """Funding Account Permission response DTO."""

    organization: Optional[Organization] = UNSET
    user: Optional[User] = UNSET


class FundingAccountPermissionResponseDtoDict(TypedDict):
    organization: NotRequired[OrganizationDict]
    user: NotRequired[UserDict]
