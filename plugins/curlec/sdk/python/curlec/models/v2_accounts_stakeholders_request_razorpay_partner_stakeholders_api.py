from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .kyc1 import Kyc1, Kyc1Dict
from .relationship_razorpay_partner_stakeholders_api import (
    RelationshipRazorpayPartnerStakeholdersApi,
    RelationshipRazorpayPartnerStakeholdersApiDict,
)


class V2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApi(SdkBaseModel):
    name: str
    email: str
    percentage_ownership: Optional[float] = UNSET
    relationship: Optional[RelationshipRazorpayPartnerStakeholdersApi] = UNSET
    phone: Optional[Any] = UNSET
    addresses: Optional[Any] = UNSET
    kyc: Optional[Kyc1] = UNSET
    notes: Optional[dict[str, str]] = UNSET
    """Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256
    characters."""


class V2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApiDict(TypedDict):
    name: str
    email: str
    percentage_ownership: NotRequired[float]
    relationship: NotRequired[RelationshipRazorpayPartnerStakeholdersApiDict]
    phone: NotRequired[Any]
    addresses: NotRequired[Any]
    kyc: NotRequired[Kyc1Dict]
    notes: NotRequired[dict[str, str]]
