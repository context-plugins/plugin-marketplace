from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .address import Address, AddressDict
from .enums.contact_type import ContactTypeOrStr
from .enums.gender_enum import GenderEnumOrStr


class StoreContactRequest(SdkBaseModel):
    first_name: OptionalNullable[str] = UNSET
    last_name: OptionalNullable[str] = UNSET
    middle_name: OptionalNullable[str] = UNSET
    preferred_name: OptionalNullable[str] = UNSET
    primary_email: OptionalNullable[str] = UNSET
    primary_phone: OptionalNullable[str] = UNSET
    company_name: OptionalNullable[str] = UNSET
    external_id: OptionalNullable[str] = UNSET
    contact_since: OptionalNullable[RFC3339DateTime] = UNSET
    type_: Optional[ContactTypeOrStr] = Field(default=UNSET, alias="type")
    gender: Optional[GenderEnumOrStr] = UNSET
    pronouns: OptionalNullable[str] = UNSET
    suffix: OptionalNullable[str] = UNSET
    prefix: OptionalNullable[str] = UNSET
    address_1: OptionalNullable[str] = UNSET
    address_2: OptionalNullable[str] = UNSET
    city: OptionalNullable[str] = UNSET
    state: OptionalNullable[str] = UNSET
    zipcode: OptionalNullable[str] = UNSET
    country: OptionalNullable[str] = UNSET
    primary_address_1: OptionalNullable[str] = UNSET
    primary_address_2: OptionalNullable[str] = UNSET
    primary_city: OptionalNullable[str] = UNSET
    primary_state: OptionalNullable[str] = UNSET
    primary_zipcode: OptionalNullable[str] = UNSET
    primary_country: OptionalNullable[str] = UNSET
    emails: OptionalNullable[list[str]] = UNSET
    phones: OptionalNullable[list[str]] = UNSET
    dob: Optional[str] = UNSET
    employer: OptionalNullable[str] = UNSET
    company: OptionalNullable[str] = UNSET
    title: OptionalNullable[str] = UNSET
    twitter_url: OptionalNullable[str] = UNSET
    linkedin_url: OptionalNullable[str] = UNSET
    facebook_url: OptionalNullable[str] = UNSET
    tiktok_url: OptionalNullable[str] = UNSET
    instagram_url: OptionalNullable[str] = UNSET
    note: OptionalNullable[str] = UNSET
    email_subscription: OptionalNullable[bool] = UNSET
    phone_subscription: OptionalNullable[bool] = UNSET
    address_subscription: OptionalNullable[bool] = UNSET
    custom_fields: OptionalNullable[list[str]] = UNSET
    tags: OptionalNullable[list[str]] = UNSET
    addresses: OptionalNullable[list[Address]] = UNSET


class StoreContactRequestDict(TypedDict):
    first_name: NotRequired[str | None]
    last_name: NotRequired[str | None]
    middle_name: NotRequired[str | None]
    preferred_name: NotRequired[str | None]
    primary_email: NotRequired[str | None]
    primary_phone: NotRequired[str | None]
    company_name: NotRequired[str | None]
    external_id: NotRequired[str | None]
    contact_since: NotRequired[RFC3339DateTime | None]
    type_: NotRequired[ContactTypeOrStr]
    gender: NotRequired[GenderEnumOrStr]
    pronouns: NotRequired[str | None]
    suffix: NotRequired[str | None]
    prefix: NotRequired[str | None]
    address_1: NotRequired[str | None]
    address_2: NotRequired[str | None]
    city: NotRequired[str | None]
    state: NotRequired[str | None]
    zipcode: NotRequired[str | None]
    country: NotRequired[str | None]
    primary_address_1: NotRequired[str | None]
    primary_address_2: NotRequired[str | None]
    primary_city: NotRequired[str | None]
    primary_state: NotRequired[str | None]
    primary_zipcode: NotRequired[str | None]
    primary_country: NotRequired[str | None]
    emails: NotRequired[list[str] | None]
    phones: NotRequired[list[str] | None]
    dob: NotRequired[str]
    employer: NotRequired[str | None]
    company: NotRequired[str | None]
    title: NotRequired[str | None]
    twitter_url: NotRequired[str | None]
    linkedin_url: NotRequired[str | None]
    facebook_url: NotRequired[str | None]
    tiktok_url: NotRequired[str | None]
    instagram_url: NotRequired[str | None]
    note: NotRequired[str | None]
    email_subscription: NotRequired[bool | None]
    phone_subscription: NotRequired[bool | None]
    address_subscription: NotRequired[bool | None]
    custom_fields: NotRequired[list[str] | None]
    tags: NotRequired[list[str] | None]
    addresses: NotRequired[list[AddressDict] | None]
