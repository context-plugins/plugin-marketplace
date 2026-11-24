from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .app_http_resources_api_address_resource import (
    AppHttpResourcesApiAddressResource,
    AppHttpResourcesApiAddressResourceDict,
)
from .associated_company_resource import AssociatedCompanyResource, AssociatedCompanyResourceDict
from .email_resource import EmailResource, EmailResourceDict
from .external_id_resource import ExternalIdResource, ExternalIdResourceDict
from .phone_resource import PhoneResource, PhoneResourceDict
from .point_of_contact_resource import PointOfContactResource, PointOfContactResourceDict
from .stats import Stats, StatsDict


class ContactResource(SdkBaseModel):
    id: str
    external_id: str
    contact_since: str
    type_: str = Field(alias="type")
    prefix: str
    first_name: str
    preferred_name: str
    middle_name: str
    last_name: str
    suffix: str
    gender: str
    pronouns: str
    dob: str
    company: str
    employer: str
    company_name: str
    point_of_contact: Optional[PointOfContactResource] = UNSET
    associated_companies: OptionalNullable[list[AssociatedCompanyResource]] = UNSET
    title: str
    website_url: str
    twitter_url: str
    linkedin_url: str
    facebook_url: str
    tiktok_url: str
    instagram_url: str
    emails: list[EmailResource]
    phones: list[PhoneResource]
    primary_email: str
    primary_phone: str
    note: str
    addresses: list[AppHttpResourcesApiAddressResource]
    primary_address: AppHttpResourcesApiAddressResource
    last_donation_amount: str
    stats: Stats
    tags: str
    custom_fields: list[Any]
    external_ids: list[ExternalIdResource]
    is_email_subscribed: str
    is_phone_subscribed: str
    is_address_subscribed: str
    email_opt_in: str
    sms_opt_in: str
    address_unsubscribed_at: str
    archived_at: str
    created_at: str
    updated_at: str
    salutation_name: str


class ContactResourceDict(TypedDict):
    id: str
    external_id: str
    contact_since: str
    type_: str
    prefix: str
    first_name: str
    preferred_name: str
    middle_name: str
    last_name: str
    suffix: str
    gender: str
    pronouns: str
    dob: str
    company: str
    employer: str
    company_name: str
    point_of_contact: NotRequired[PointOfContactResourceDict]
    associated_companies: NotRequired[list[AssociatedCompanyResourceDict] | None]
    title: str
    website_url: str
    twitter_url: str
    linkedin_url: str
    facebook_url: str
    tiktok_url: str
    instagram_url: str
    emails: list[EmailResourceDict]
    phones: list[PhoneResourceDict]
    primary_email: str
    primary_phone: str
    note: str
    addresses: list[AppHttpResourcesApiAddressResourceDict]
    primary_address: AppHttpResourcesApiAddressResourceDict
    last_donation_amount: str
    stats: StatsDict
    tags: str
    custom_fields: list[Any]
    external_ids: list[ExternalIdResourceDict]
    is_email_subscribed: str
    is_phone_subscribed: str
    is_address_subscribed: str
    email_opt_in: str
    sms_opt_in: str
    address_unsubscribed_at: str
    archived_at: str
    created_at: str
    updated_at: str
    salutation_name: str
