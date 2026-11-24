from __future__ import annotations

from pydantic import ConfigDict, EmailStr, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .contact_item2 import ContactItem2, ContactItem2Dict


class ContactIdentifiersBatch2(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    linkedin_urls: Optional[list[str]] = Field(default=UNSET, alias="linkedinUrls")
    contacts: Optional[list[ContactItem2]] = UNSET
    emails: Optional[list[EmailStr]] = UNSET
    contact_ids: Optional[list[int]] = Field(default=UNSET, alias="contactIds")


class ContactIdentifiersBatch2Dict(TypedDict):
    linkedin_urls: NotRequired[list[str]]
    contacts: NotRequired[list[ContactItem2Dict]]
    emails: NotRequired[list[EmailStr]]
    contact_ids: NotRequired[list[int]]
