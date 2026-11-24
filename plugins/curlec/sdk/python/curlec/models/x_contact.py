from __future__ import annotations

from typing import Any

from pydantic import EmailStr, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.entity_razorpay_x_contacts_api import EntityRazorpayXContactsApiOrStr
from .enums.type_razorpay_x_contacts_api import TypeRazorpayXContactsApiOrStr


class XContact(SdkBaseModel):
    """RazorpayX payout recipient. Created before sending payouts."""

    id: Optional[str] = UNSET
    """Contact ID (cont_*)"""

    entity: Optional[EntityRazorpayXContactsApiOrStr] = UNSET
    name: Optional[str] = UNSET
    email: Optional[EmailStr] = UNSET
    contact: Optional[str] = UNSET
    """Phone number"""

    type_: Optional[TypeRazorpayXContactsApiOrStr] = Field(default=UNSET, alias="type")
    """Built-in types only via API; custom types must be created on Dashboard first"""

    reference_id: Optional[str] = UNSET
    """External reference (must be unique per merchant)"""

    batch_id: Optional[str] = UNSET
    active: Optional[bool] = UNSET
    notes: Optional[Any] = UNSET
    created_at: Optional[int] = UNSET
    """Unix timestamp"""


class XContactDict(TypedDict):
    id: NotRequired[str]
    entity: NotRequired[EntityRazorpayXContactsApiOrStr]
    name: NotRequired[str]
    email: NotRequired[EmailStr]
    contact: NotRequired[str]
    type_: NotRequired[TypeRazorpayXContactsApiOrStr]
    reference_id: NotRequired[str]
    batch_id: NotRequired[str]
    active: NotRequired[bool]
    notes: NotRequired[Any]
    created_at: NotRequired[int]
