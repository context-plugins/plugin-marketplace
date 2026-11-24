from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .addresses1 import Addresses1, Addresses1Dict
from .enums.entity_razorpay_linked_accounts_api import EntityRazorpayLinkedAccountsApiOrStr
from .kyc import Kyc, KycDict
from .phone import Phone, PhoneDict
from .relationship import Relationship, RelationshipDict


class Stakeholder(SdkBaseModel):
    """A business owner or director associated with a Linked Account. Only one stakeholder is allowed per Route Linked
    Account. Prefix: sth_"""

    id: Optional[str] = UNSET
    """Stakeholder ID. Prefix: sth_"""

    entity: Optional[EntityRazorpayLinkedAccountsApiOrStr] = UNSET
    name: Optional[str] = UNSET
    """Full name of the stakeholder."""

    email: Optional[str] = UNSET
    """Email address."""

    percentage_ownership: Optional[float] = UNSET
    """Ownership percentage (0-100)."""

    relationship: Optional[Relationship] = UNSET
    phone: Optional[Phone] = UNSET
    addresses: Optional[Addresses1] = UNSET
    kyc: Optional[Kyc] = UNSET
    notes: Optional[dict[str, str]] = UNSET
    """Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256
    characters."""

    created_at: Optional[int] = UNSET


class StakeholderDict(TypedDict):
    id: NotRequired[str]
    entity: NotRequired[EntityRazorpayLinkedAccountsApiOrStr]
    name: NotRequired[str]
    email: NotRequired[str]
    percentage_ownership: NotRequired[float]
    relationship: NotRequired[RelationshipDict]
    phone: NotRequired[PhoneDict]
    addresses: NotRequired[Addresses1Dict]
    kyc: NotRequired[KycDict]
    notes: NotRequired[dict[str, str]]
    created_at: NotRequired[int]
