from __future__ import annotations

from pydantic import EmailStr, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .address1 import Address1, Address1Dict
from .email import Email, EmailDict
from .enums.contact_type1 import ContactType1OrStr
from .enums.gender_enum import GenderEnumOrStr
from .phone import Phone, PhoneDict


class UpdateContactRequest(SdkBaseModel):
    first_name: OptionalNullable[str] = UNSET
    """Required for individual contacts. Optional for company contacts, which require company_name instead."""

    last_name: OptionalNullable[str] = UNSET
    """Required for individual contacts. Optional for company contacts, which require company_name instead."""

    middle_name: OptionalNullable[str] = UNSET
    preferred_name: OptionalNullable[str] = UNSET
    gender: Optional[GenderEnumOrStr] = UNSET
    pronouns: OptionalNullable[str] = UNSET
    suffix: OptionalNullable[str] = UNSET
    prefix: OptionalNullable[str] = UNSET
    type_: Optional[ContactType1OrStr] = Field(default=UNSET, alias="type")
    """Determines which fields are required: individual contacts require a name, company contacts require
    company_name."""

    company_name: OptionalNullable[str] = UNSET
    """Required for company contacts. Optional for individual contacts, which require first_name and last_name
    instead."""

    employer: OptionalNullable[str] = UNSET
    company: OptionalNullable[str] = UNSET
    title: OptionalNullable[str] = UNSET
    twitter_url: OptionalNullable[str] = UNSET
    linkedin_url: OptionalNullable[str] = UNSET
    facebook_url: OptionalNullable[str] = UNSET
    tiktok_url: OptionalNullable[str] = UNSET
    website_url: OptionalNullable[str] = UNSET
    note: OptionalNullable[str] = UNSET
    bio: OptionalNullable[str] = UNSET
    external_id: OptionalNullable[str] = UNSET
    contact_since: OptionalNullable[RFC3339DateTime] = UNSET
    dob: Optional[str] = UNSET
    email_opt_in: OptionalNullable[bool] = UNSET
    sms_opt_in: OptionalNullable[bool] = UNSET
    address_subscription: OptionalNullable[bool] = UNSET
    custom_fields: OptionalNullable[list[str]] = UNSET
    tags: OptionalNullable[list[str]] = UNSET
    remove_emails: OptionalNullable[list[EmailStr]] = UNSET
    remove_phones: OptionalNullable[list[str]] = UNSET
    remove_address_ids: OptionalNullable[list[int]] = UNSET
    emails: OptionalNullable[list[Email]] = UNSET
    phones: OptionalNullable[list[Phone]] = UNSET
    addresses: OptionalNullable[list[Address1]] = UNSET


class UpdateContactRequestDict(TypedDict):
    first_name: NotRequired[str | None]
    last_name: NotRequired[str | None]
    middle_name: NotRequired[str | None]
    preferred_name: NotRequired[str | None]
    gender: NotRequired[GenderEnumOrStr]
    pronouns: NotRequired[str | None]
    suffix: NotRequired[str | None]
    prefix: NotRequired[str | None]
    type_: NotRequired[ContactType1OrStr]
    company_name: NotRequired[str | None]
    employer: NotRequired[str | None]
    company: NotRequired[str | None]
    title: NotRequired[str | None]
    twitter_url: NotRequired[str | None]
    linkedin_url: NotRequired[str | None]
    facebook_url: NotRequired[str | None]
    tiktok_url: NotRequired[str | None]
    website_url: NotRequired[str | None]
    note: NotRequired[str | None]
    bio: NotRequired[str | None]
    external_id: NotRequired[str | None]
    contact_since: NotRequired[RFC3339DateTime | None]
    dob: NotRequired[str]
    email_opt_in: NotRequired[bool | None]
    sms_opt_in: NotRequired[bool | None]
    address_subscription: NotRequired[bool | None]
    custom_fields: NotRequired[list[str] | None]
    tags: NotRequired[list[str] | None]
    remove_emails: NotRequired[list[EmailStr] | None]
    remove_phones: NotRequired[list[str] | None]
    remove_address_ids: NotRequired[list[int] | None]
    emails: NotRequired[list[EmailDict] | None]
    phones: NotRequired[list[PhoneDict] | None]
    addresses: NotRequired[list[Address1Dict] | None]
