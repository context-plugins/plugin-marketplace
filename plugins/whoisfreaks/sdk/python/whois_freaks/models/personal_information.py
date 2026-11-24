from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PersonalInformation(SdkBaseModel):
    """Contact block (registrant/administrative/technical/billing)."""

    id: Optional[str] = UNSET
    id_type: Optional[str] = UNSET
    handle: Optional[str] = UNSET
    name: Optional[str] = UNSET
    company: Optional[str] = UNSET
    street: Optional[str] = UNSET
    city: Optional[str] = UNSET
    state: Optional[str] = UNSET
    zip_code: Optional[str] = UNSET
    country_name: Optional[str] = UNSET
    country_code: Optional[str] = UNSET
    email_address: Optional[str] = UNSET
    phone: Optional[str] = UNSET
    fax: Optional[str] = UNSET
    mailing_address: Optional[str] = UNSET


class PersonalInformationDict(TypedDict):
    id: NotRequired[str]
    id_type: NotRequired[str]
    handle: NotRequired[str]
    name: NotRequired[str]
    company: NotRequired[str]
    street: NotRequired[str]
    city: NotRequired[str]
    state: NotRequired[str]
    zip_code: NotRequired[str]
    country_name: NotRequired[str]
    country_code: NotRequired[str]
    email_address: NotRequired[str]
    phone: NotRequired[str]
    fax: NotRequired[str]
    mailing_address: NotRequired[str]
