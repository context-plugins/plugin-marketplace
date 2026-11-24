from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .addresses_razorpay_partner_stakeholders_api import (
    AddressesRazorpayPartnerStakeholdersApi,
    AddressesRazorpayPartnerStakeholdersApiDict,
)
from .enums.entity_razorpay_linked_accounts_api import EntityRazorpayLinkedAccountsApiOrStr
from .kyc1_razorpay_partner_stakeholders_api import (
    Kyc1RazorpayPartnerStakeholdersApi,
    Kyc1RazorpayPartnerStakeholdersApiDict,
)
from .phone import Phone, PhoneDict
from .relationship1_razorpay_partner_stakeholders_api import (
    Relationship1RazorpayPartnerStakeholdersApi,
    Relationship1RazorpayPartnerStakeholdersApiDict,
)


class StakeholderRazorpayPartnerStakeholdersApi(SdkBaseModel):
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

    relationship: Optional[Relationship1RazorpayPartnerStakeholdersApi] = UNSET
    phone: Optional[Phone] = UNSET
    addresses: Optional[AddressesRazorpayPartnerStakeholdersApi] = UNSET
    kyc: Optional[Kyc1RazorpayPartnerStakeholdersApi] = UNSET
    notes: Optional[dict[str, str]] = UNSET
    """Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256
    characters."""

    created_at: Optional[int] = UNSET


class StakeholderRazorpayPartnerStakeholdersApiDict(TypedDict):
    id: NotRequired[str]
    entity: NotRequired[EntityRazorpayLinkedAccountsApiOrStr]
    name: NotRequired[str]
    email: NotRequired[str]
    percentage_ownership: NotRequired[float]
    relationship: NotRequired[Relationship1RazorpayPartnerStakeholdersApiDict]
    phone: NotRequired[PhoneDict]
    addresses: NotRequired[AddressesRazorpayPartnerStakeholdersApiDict]
    kyc: NotRequired[Kyc1RazorpayPartnerStakeholdersApiDict]
    notes: NotRequired[dict[str, str]]
    created_at: NotRequired[int]
