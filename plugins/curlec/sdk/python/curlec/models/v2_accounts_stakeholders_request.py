from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .kyc1 import Kyc1, Kyc1Dict
from .relationship1 import Relationship1, Relationship1Dict


class V2AccountsStakeholdersRequest(SdkBaseModel):
    name: str
    email: str
    percentage_ownership: Optional[float] = UNSET
    relationship: Optional[Relationship1] = UNSET
    phone: Optional[Any] = UNSET
    addresses: Optional[Any] = UNSET
    kyc: Optional[Kyc1] = UNSET
    notes: Optional[dict[str, str]] = UNSET
    """Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256
    characters."""


class V2AccountsStakeholdersRequestDict(TypedDict):
    name: str
    email: str
    percentage_ownership: NotRequired[float]
    relationship: NotRequired[Relationship1Dict]
    phone: NotRequired[Any]
    addresses: NotRequired[Any]
    kyc: NotRequired[Kyc1Dict]
    notes: NotRequired[dict[str, str]]
