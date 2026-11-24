from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .inet_num import InetNum, InetNumDict
from .irt import Irt, IrtDict
from .route import Route, RouteDict
from .whois_organization import WhoisOrganization, WhoisOrganizationDict
from .whois_person import WhoisPerson, WhoisPersonDict


class IpWhoisResponse(SdkBaseModel):
    status: Optional[bool] = UNSET
    ip_address: Optional[str] = UNSET
    as_number: Optional[str] = UNSET
    query_time: Optional[str] = UNSET
    whois_server: Optional[str] = UNSET
    whois_raw_response: Optional[str] = UNSET
    r_whois_raw_response: Optional[str] = UNSET
    inet_nums: Optional[list[InetNum]] = UNSET
    organization: Optional[WhoisOrganization] = UNSET
    irt: Optional[Irt] = UNSET
    administrative_contacts: Optional[list[WhoisPerson]] = UNSET
    technical_contacts: Optional[list[WhoisPerson]] = UNSET
    abuse_contacts: Optional[list[WhoisPerson]] = UNSET
    routes: Optional[list[Route]] = UNSET


class IpWhoisResponseDict(TypedDict):
    status: NotRequired[bool]
    ip_address: NotRequired[str]
    as_number: NotRequired[str]
    query_time: NotRequired[str]
    whois_server: NotRequired[str]
    whois_raw_response: NotRequired[str]
    r_whois_raw_response: NotRequired[str]
    inet_nums: NotRequired[list[InetNumDict]]
    organization: NotRequired[WhoisOrganizationDict]
    irt: NotRequired[IrtDict]
    administrative_contacts: NotRequired[list[WhoisPersonDict]]
    technical_contacts: NotRequired[list[WhoisPersonDict]]
    abuse_contacts: NotRequired[list[WhoisPersonDict]]
    routes: NotRequired[list[RouteDict]]
