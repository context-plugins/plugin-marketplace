from __future__ import annotations

from pydantic import EmailStr
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CustomerContact(SdkBaseModel):
    """Customer point-of-contact details. Shared by the ``getCustomer`` response and the ``updateCustomer`` request body
    so a value is always read and written at the same path."""

    emails: Optional[list[EmailStr]] = UNSET
    """Point-of-contact email addresses for the customer."""


class CustomerContactDict(TypedDict):
    emails: NotRequired[list[EmailStr]]
