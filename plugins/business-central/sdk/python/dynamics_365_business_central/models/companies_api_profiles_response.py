from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .profile import Profile, ProfileDict


class CompaniesApiProfilesResponse(SdkBaseModel):
    value: Optional[list[Profile]] = UNSET


class CompaniesApiProfilesResponseDict(TypedDict):
    value: NotRequired[list[ProfileDict]]
