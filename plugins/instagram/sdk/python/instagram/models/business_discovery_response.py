from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .user import User, UserDict


class BusinessDiscoveryResponse(SdkBaseModel):
    business_discovery: Optional[User] = UNSET


class BusinessDiscoveryResponseDict(TypedDict):
    business_discovery: NotRequired[UserDict]
