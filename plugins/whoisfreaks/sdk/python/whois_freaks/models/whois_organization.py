from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class WhoisOrganization(SdkBaseModel):
    handle: Optional[str] = UNSET
    name: Optional[str] = UNSET
    type_: Optional[str] = Field(default=UNSET, alias="type")
    description: Optional[list[str]] = UNSET
    address: Optional[list[str]] = UNSET
    street: Optional[str] = UNSET
    city: Optional[str] = UNSET
    district: Optional[str] = UNSET
    state: Optional[str] = UNSET
    zip_code: Optional[str] = UNSET
    country: Optional[list[str]] = UNSET
    latitude: Optional[float] = UNSET
    longitude: Optional[float] = UNSET
    email: Optional[list[str]] = UNSET
    abuse_mailbox: Optional[list[str]] = UNSET
    phone: Optional[list[str]] = UNSET
    fax_no: Optional[list[str]] = UNSET
    organizations: Optional[list[str]] = UNSET
    admin_contacts: Optional[list[str]] = UNSET
    tech_contacts: Optional[list[str]] = UNSET
    abuse_contacts: Optional[list[str]] = UNSET
    languages: Optional[list[str]] = UNSET
    remarks: Optional[list[str]] = UNSET
    notify: Optional[list[str]] = UNSET
    ref_nfy: Optional[list[str]] = UNSET
    mnt_ref: Optional[list[str]] = UNSET
    mnt_by: Optional[list[str]] = UNSET
    date_created: Optional[str] = UNSET
    date_updated: Optional[str] = UNSET
    source: Optional[str] = UNSET


class WhoisOrganizationDict(TypedDict):
    handle: NotRequired[str]
    name: NotRequired[str]
    type_: NotRequired[str]
    description: NotRequired[list[str]]
    address: NotRequired[list[str]]
    street: NotRequired[str]
    city: NotRequired[str]
    district: NotRequired[str]
    state: NotRequired[str]
    zip_code: NotRequired[str]
    country: NotRequired[list[str]]
    latitude: NotRequired[float]
    longitude: NotRequired[float]
    email: NotRequired[list[str]]
    abuse_mailbox: NotRequired[list[str]]
    phone: NotRequired[list[str]]
    fax_no: NotRequired[list[str]]
    organizations: NotRequired[list[str]]
    admin_contacts: NotRequired[list[str]]
    tech_contacts: NotRequired[list[str]]
    abuse_contacts: NotRequired[list[str]]
    languages: NotRequired[list[str]]
    remarks: NotRequired[list[str]]
    notify: NotRequired[list[str]]
    ref_nfy: NotRequired[list[str]]
    mnt_ref: NotRequired[list[str]]
    mnt_by: NotRequired[list[str]]
    date_created: NotRequired[str]
    date_updated: NotRequired[str]
    source: NotRequired[str]
