from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .user import User, UserDict


class CompaniesApiUsersResponse(SdkBaseModel):
    value: Optional[list[User]] = UNSET


class CompaniesApiUsersResponseDict(TypedDict):
    value: NotRequired[list[UserDict]]
