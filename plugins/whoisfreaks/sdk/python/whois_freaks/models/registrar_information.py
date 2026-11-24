from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RegistrarInformation(SdkBaseModel):
    """Registrar details (used by domain_registrar, abuse_contact)."""

    id: Optional[str] = UNSET
    id_type: Optional[str] = UNSET
    iana_id: Optional[str] = UNSET
    registry_id: Optional[str] = UNSET
    handle: Optional[str] = UNSET
    status: Optional[str] = UNSET
    registrar_name: Optional[str] = UNSET
    normalized_name: Optional[str] = UNSET
    whois_server: Optional[str] = UNSET
    rdap_server: Optional[str] = UNSET
    website_url: Optional[str] = UNSET
    email_address: Optional[str] = UNSET
    phone_number: Optional[str] = UNSET
    authoritative_registry_name: Optional[str] = UNSET
    organization_number: Optional[str] = UNSET
    is_sponsor: Optional[bool] = UNSET


class RegistrarInformationDict(TypedDict):
    id: NotRequired[str]
    id_type: NotRequired[str]
    iana_id: NotRequired[str]
    registry_id: NotRequired[str]
    handle: NotRequired[str]
    status: NotRequired[str]
    registrar_name: NotRequired[str]
    normalized_name: NotRequired[str]
    whois_server: NotRequired[str]
    rdap_server: NotRequired[str]
    website_url: NotRequired[str]
    email_address: NotRequired[str]
    phone_number: NotRequired[str]
    authoritative_registry_name: NotRequired[str]
    organization_number: NotRequired[str]
    is_sponsor: NotRequired[bool]
