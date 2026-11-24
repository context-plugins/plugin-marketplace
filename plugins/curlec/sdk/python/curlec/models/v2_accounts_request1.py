from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V2AccountsRequest1(SdkBaseModel):
    phone: Optional[str] = UNSET
    legal_business_name: Optional[str] = UNSET
    profile: Optional[Any] = UNSET
    legal_info: Optional[Any] = UNSET
    contact_name: Optional[str] = UNSET
    contact_info: Optional[Any] = UNSET
    apps: Optional[Any] = UNSET
    notes: Optional[dict[str, str]] = UNSET
    """Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256
    characters."""


class V2AccountsRequest1Dict(TypedDict):
    phone: NotRequired[str]
    legal_business_name: NotRequired[str]
    profile: NotRequired[Any]
    legal_info: NotRequired[Any]
    contact_name: NotRequired[str]
    contact_info: NotRequired[Any]
    apps: NotRequired[Any]
    notes: NotRequired[dict[str, str]]
