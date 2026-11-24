from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V2AccountsStakeholdersRequest1(SdkBaseModel):
    name: Optional[str] = UNSET
    percentage_ownership: Optional[float] = UNSET
    relationship: Optional[Any] = UNSET
    phone: Optional[Any] = UNSET
    addresses: Optional[Any] = UNSET
    kyc: Optional[Any] = UNSET
    notes: Optional[dict[str, str]] = UNSET
    """Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256
    characters."""


class V2AccountsStakeholdersRequest1Dict(TypedDict):
    name: NotRequired[str]
    percentage_ownership: NotRequired[float]
    relationship: NotRequired[Any]
    phone: NotRequired[Any]
    addresses: NotRequired[Any]
    kyc: NotRequired[Any]
    notes: NotRequired[dict[str, str]]
