from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .registrar_information import RegistrarInformation, RegistrarInformationDict


class RegistryData(SdkBaseModel):
    domain_name: Optional[str] = UNSET
    query_time: Optional[str] = UNSET
    whois_server: Optional[str] = UNSET
    domain_registered: Optional[str] = UNSET
    create_date: Optional[str] = UNSET
    update_date: Optional[str] = UNSET
    expiry_date: Optional[str] = UNSET
    domain_registrar: Optional[RegistrarInformation] = UNSET
    """Registrar details (used by domain_registrar, abuse_contact)."""

    name_servers: Optional[list[str]] = UNSET
    domain_status: Optional[list[str]] = UNSET
    whois_raw_domain: Optional[str] = UNSET


class RegistryDataDict(TypedDict):
    domain_name: NotRequired[str]
    query_time: NotRequired[str]
    whois_server: NotRequired[str]
    domain_registered: NotRequired[str]
    create_date: NotRequired[str]
    update_date: NotRequired[str]
    expiry_date: NotRequired[str]
    domain_registrar: NotRequired[RegistrarInformationDict]
    name_servers: NotRequired[list[str]]
    domain_status: NotRequired[list[str]]
    whois_raw_domain: NotRequired[str]
