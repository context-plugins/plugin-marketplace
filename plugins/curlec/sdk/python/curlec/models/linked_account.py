from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .apps import Apps, AppsDict
from .contact_info import ContactInfo, ContactInfoDict
from .enums.business_type_razorpay_linked_accounts_api import BusinessTypeRazorpayLinkedAccountsApiOrStr
from .enums.status_razorpay_linked_accounts_api import StatusRazorpayLinkedAccountsApiOrStr
from .enums.type_razorpay_linked_accounts_api import TypeRazorpayLinkedAccountsApiOrStr
from .legal_info import LegalInfo, LegalInfoDict
from .profile import Profile, ProfileDict


class LinkedAccount(SdkBaseModel):
    """A sub-merchant (Linked Account) created under a Route marketplace account. Linked Accounts can receive transfers
    and settlements. Prefix: acc_"""

    id: Optional[str] = UNSET
    """Account ID. Prefix: acc_"""

    type_: Optional[TypeRazorpayLinkedAccountsApiOrStr] = Field(default=UNSET, alias="type")
    """Account type. Always 'route' for Route marketplace accounts."""

    status: Optional[StatusRazorpayLinkedAccountsApiOrStr] = UNSET
    """Account status."""

    email: Optional[str] = UNSET
    """Contact email. Cannot be updated after creation."""

    phone: Optional[str] = UNSET
    """Contact phone number with country code (e.g., +919876543210)."""

    legal_business_name: Optional[str] = UNSET
    """Registered legal name of the business."""

    business_type: Optional[BusinessTypeRazorpayLinkedAccountsApiOrStr] = UNSET
    """Business type. Cannot be updated after creation."""

    profile: Optional[Profile] = UNSET
    legal_info: Optional[LegalInfo] = UNSET
    contact_name: Optional[str] = UNSET
    """Name of the primary contact person."""

    contact_info: Optional[ContactInfo] = UNSET
    apps: Optional[Apps] = UNSET
    notes: Optional[dict[str, str]] = UNSET
    """Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256
    characters."""

    created_at: Optional[int] = UNSET


class LinkedAccountDict(TypedDict):
    id: NotRequired[str]
    type_: NotRequired[TypeRazorpayLinkedAccountsApiOrStr]
    status: NotRequired[StatusRazorpayLinkedAccountsApiOrStr]
    email: NotRequired[str]
    phone: NotRequired[str]
    legal_business_name: NotRequired[str]
    business_type: NotRequired[BusinessTypeRazorpayLinkedAccountsApiOrStr]
    profile: NotRequired[ProfileDict]
    legal_info: NotRequired[LegalInfoDict]
    contact_name: NotRequired[str]
    contact_info: NotRequired[ContactInfoDict]
    apps: NotRequired[AppsDict]
    notes: NotRequired[dict[str, str]]
    created_at: NotRequired[int]
