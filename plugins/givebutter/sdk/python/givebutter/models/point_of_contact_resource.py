from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PointOfContactResource(SdkBaseModel):
    id: str
    type_: str = Field(alias="type")
    prefix: str
    first_name: str
    middle_name: str
    last_name: str
    suffix: str
    gender: str
    pronouns: str
    dob: str
    employer: str
    title: str
    twitter_url: str
    linkedin_url: str
    facebook_url: str
    tiktok_url: str
    instagram_url: str
    website_url: str
    emails: dict[str, Any]
    phones: dict[str, Any]
    primary_email: str
    primary_phone: str
    is_email_subscribed: str
    is_phone_subscribed: str
    is_address_subscribed: str
    address_unsubscribed_at: str
    archived_at: str
    created_at: str
    updated_at: str
    first_time_supporter_at: str


class PointOfContactResourceDict(TypedDict):
    id: str
    type_: str
    prefix: str
    first_name: str
    middle_name: str
    last_name: str
    suffix: str
    gender: str
    pronouns: str
    dob: str
    employer: str
    title: str
    twitter_url: str
    linkedin_url: str
    facebook_url: str
    tiktok_url: str
    instagram_url: str
    website_url: str
    emails: dict[str, Any]
    phones: dict[str, Any]
    primary_email: str
    primary_phone: str
    is_email_subscribed: str
    is_phone_subscribed: str
    is_address_subscribed: str
    address_unsubscribed_at: str
    archived_at: str
    created_at: str
    updated_at: str
    first_time_supporter_at: str
