from __future__ import annotations

from typing import Any

from pydantic import EmailStr, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type1_razorpay_x_contacts_api import Type1RazorpayXContactsApiOrStr


class ContactsRequest(SdkBaseModel):
    name: str
    email: Optional[EmailStr] = UNSET
    contact: Optional[str] = UNSET
    type_: Optional[Type1RazorpayXContactsApiOrStr] = Field(default=UNSET, alias="type")
    reference_id: Optional[str] = UNSET
    notes: Optional[Any] = UNSET


class ContactsRequestDict(TypedDict):
    name: str
    email: NotRequired[EmailStr]
    contact: NotRequired[str]
    type_: NotRequired[Type1RazorpayXContactsApiOrStr]
    reference_id: NotRequired[str]
    notes: NotRequired[Any]
