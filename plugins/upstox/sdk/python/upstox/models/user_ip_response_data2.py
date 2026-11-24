from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .family_member_data import FamilyMemberData, FamilyMemberDataDict


class UserIpResponseData2(SdkBaseModel):
    """Current IP configuration."""

    primary_ip: Optional[str] = UNSET
    secondary_ip: Optional[str] = UNSET
    primary_ip_updated_at: Optional[str] = UNSET
    """ISO-8601 timestamp when primary IP was last changed."""

    secondary_ip_updated_at: Optional[str] = UNSET
    """ISO-8601 timestamp when secondary IP was last changed."""

    primary_ip_family_members: Optional[list[FamilyMemberData]] = UNSET
    secondary_ip_family_members: Optional[list[FamilyMemberData]] = UNSET
    access_tokens_invalidated: Optional[bool] = UNSET


class UserIpResponseData2Dict(TypedDict):
    primary_ip: NotRequired[str]
    secondary_ip: NotRequired[str]
    primary_ip_updated_at: NotRequired[str]
    secondary_ip_updated_at: NotRequired[str]
    primary_ip_family_members: NotRequired[list[FamilyMemberDataDict]]
    secondary_ip_family_members: NotRequired[list[FamilyMemberDataDict]]
    access_tokens_invalidated: NotRequired[bool]
