from __future__ import annotations

from pydantic import ConfigDict, EmailStr, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .contact_item import ContactItem, ContactItemDict


class ContactIdentifiersBatch(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    linkedin_urls: Optional[list[str]] = Field(default=UNSET, alias="linkedinUrls")
    contacts: Optional[list[ContactItem]] = UNSET
    emails: Optional[list[EmailStr]] = UNSET
    ids: Optional[list[str]] = UNSET
    """Lusha contact IDs as strings (preferred)"""

    contact_ids: Optional[list[int]] = Field(default=UNSET, alias="contactIds")
    """Lusha contact IDs as numbers (legacy; prefer ids)"""


class ContactIdentifiersBatchDict(TypedDict):
    linkedin_urls: NotRequired[list[str]]
    contacts: NotRequired[list[ContactItemDict]]
    emails: NotRequired[list[EmailStr]]
    ids: NotRequired[list[str]]
    contact_ids: NotRequired[list[int]]
