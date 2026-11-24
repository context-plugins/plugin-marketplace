from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.business_type1 import BusinessType1OrStr
from .legal_info1 import LegalInfo1, LegalInfo1Dict
from .profile1 import Profile1, Profile1Dict


class V2AccountsRequest(SdkBaseModel):
    email: str
    """Contact email. Cannot be changed after creation."""

    phone: Optional[str] = UNSET
    """Phone number with country code."""

    legal_business_name: Optional[str] = UNSET
    business_type: Optional[BusinessType1OrStr] = UNSET
    """Cannot be changed after creation."""

    type_: Literal["route"] = Field(default="route", alias="type")
    profile: Profile1
    legal_info: Optional[LegalInfo1] = UNSET
    notes: Optional[dict[str, str]] = UNSET
    """Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256
    characters."""


class V2AccountsRequestDict(TypedDict):
    email: str
    phone: NotRequired[str]
    legal_business_name: NotRequired[str]
    business_type: NotRequired[BusinessType1OrStr]
    type_: Literal["route"]
    profile: Profile1Dict
    legal_info: NotRequired[LegalInfo1Dict]
    notes: NotRequired[dict[str, str]]
