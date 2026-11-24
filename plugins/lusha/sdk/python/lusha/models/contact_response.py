from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .contact import Contact, ContactDict
from .contact_error import ContactError, ContactErrorDict


class ContactResponse(SdkBaseModel):
    error: ContactError
    is_credit_charged: bool = Field(alias="isCreditCharged")
    data: Optional[Contact] = UNSET


class ContactResponseDict(TypedDict):
    error: ContactErrorDict
    is_credit_charged: bool
    data: NotRequired[ContactDict]
