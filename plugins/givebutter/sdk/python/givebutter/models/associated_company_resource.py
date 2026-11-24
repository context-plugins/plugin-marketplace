from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .address_resource import AddressResource, AddressResourceDict


class AssociatedCompanyResource(SdkBaseModel):
    id: str
    type_: str = Field(alias="type")
    company_name: str
    name_display: str
    title: str
    twitter_url: str
    linkedin_url: str
    facebook_url: str
    tiktok_url: str
    instagram_url: str
    website_url: str
    image_url: str | None
    emails: dict[str, Any]
    phones: dict[str, Any]
    primary_email: str
    primary_phone: str
    is_email_subscribed: str
    is_phone_subscribed: str
    is_address_subscribed: str
    address_unsubscribed_at: str
    note: str
    addresses: list[AddressResource]
    primary_address: AddressResource
    archived_at: str
    created_at: str
    updated_at: str
    first_time_supporter_at: str


class AssociatedCompanyResourceDict(TypedDict):
    id: str
    type_: str
    company_name: str
    name_display: str
    title: str
    twitter_url: str
    linkedin_url: str
    facebook_url: str
    tiktok_url: str
    instagram_url: str
    website_url: str
    image_url: str | None
    emails: dict[str, Any]
    phones: dict[str, Any]
    primary_email: str
    primary_phone: str
    is_email_subscribed: str
    is_phone_subscribed: str
    is_address_subscribed: str
    address_unsubscribed_at: str
    note: str
    addresses: list[AddressResourceDict]
    primary_address: AddressResourceDict
    archived_at: str
    created_at: str
    updated_at: str
    first_time_supporter_at: str
