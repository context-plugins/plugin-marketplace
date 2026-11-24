from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .addresses_razorpay_partner_stakeholders_api import (
    AddressesRazorpayPartnerStakeholdersApi,
    AddressesRazorpayPartnerStakeholdersApiDict,
)
from .enums.entity_razorpay_linked_accounts_api import EntityRazorpayLinkedAccountsApiOrStr
from .kyc_razorpay_partner_stakeholders_api import (
    KycRazorpayPartnerStakeholdersApi,
    KycRazorpayPartnerStakeholdersApiDict,
)
from .phone_razorpay_partner_stakeholders_api import (
    PhoneRazorpayPartnerStakeholdersApi,
    PhoneRazorpayPartnerStakeholdersApiDict,
)
from .relationship_razorpay_partner_stakeholders_api import (
    RelationshipRazorpayPartnerStakeholdersApi,
    RelationshipRazorpayPartnerStakeholdersApiDict,
)


class PartnerStakeholder(SdkBaseModel):
    """A stakeholder (director/executive) associated with a sub-merchant account. Multiple stakeholders allowed per
    account (unlike Route which allows only 1)."""

    id: Optional[str] = UNSET
    """Stakeholder ID with prefix sth_"""

    entity: Optional[EntityRazorpayLinkedAccountsApiOrStr] = UNSET
    name: Optional[str] = UNSET
    email: Optional[str] = UNSET
    percentage_ownership: Optional[float] = UNSET
    relationship: Optional[RelationshipRazorpayPartnerStakeholdersApi] = UNSET
    phone: Optional[PhoneRazorpayPartnerStakeholdersApi] = UNSET
    addresses: Optional[AddressesRazorpayPartnerStakeholdersApi] = UNSET
    kyc: Optional[KycRazorpayPartnerStakeholdersApi] = UNSET
    notes: Optional[Any] = UNSET


class PartnerStakeholderDict(TypedDict):
    id: NotRequired[str]
    entity: NotRequired[EntityRazorpayLinkedAccountsApiOrStr]
    name: NotRequired[str]
    email: NotRequired[str]
    percentage_ownership: NotRequired[float]
    relationship: NotRequired[RelationshipRazorpayPartnerStakeholdersApiDict]
    phone: NotRequired[PhoneRazorpayPartnerStakeholdersApiDict]
    addresses: NotRequired[AddressesRazorpayPartnerStakeholdersApiDict]
    kyc: NotRequired[KycRazorpayPartnerStakeholdersApiDict]
    notes: NotRequired[Any]
