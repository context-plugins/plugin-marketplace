from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InetNum(SdkBaseModel):
    start_ip: Optional[str] = UNSET
    end_ip: Optional[str] = UNSET
    cidr: Optional[list[str]] = UNSET
    net_name: Optional[str] = UNSET
    net_handle: Optional[str] = UNSET
    description: Optional[list[str]] = UNSET
    countries: Optional[list[str]] = UNSET
    geofeed: Optional[str] = UNSET
    latitude: Optional[float] = UNSET
    longitude: Optional[float] = UNSET
    city: Optional[str] = UNSET
    languages: Optional[list[str]] = UNSET
    status: Optional[str] = UNSET
    organization: Optional[str] = UNSET
    sponsoring_organization: Optional[str] = UNSET
    remarks: Optional[list[str]] = UNSET
    assignment_size: Optional[str] = UNSET
    notify: Optional[list[str]] = UNSET
    mnt_by: Optional[list[str]] = UNSET
    mnt_lower: Optional[list[str]] = UNSET
    mnt_domains: Optional[list[str]] = UNSET
    mnt_routes: Optional[list[str]] = UNSET
    mnt_irt: Optional[list[str]] = UNSET
    date_created: Optional[str] = UNSET
    date_updated: Optional[str] = UNSET
    source: Optional[str] = UNSET
    parents: Optional[list[str]] = UNSET


class InetNumDict(TypedDict):
    start_ip: NotRequired[str]
    end_ip: NotRequired[str]
    cidr: NotRequired[list[str]]
    net_name: NotRequired[str]
    net_handle: NotRequired[str]
    description: NotRequired[list[str]]
    countries: NotRequired[list[str]]
    geofeed: NotRequired[str]
    latitude: NotRequired[float]
    longitude: NotRequired[float]
    city: NotRequired[str]
    languages: NotRequired[list[str]]
    status: NotRequired[str]
    organization: NotRequired[str]
    sponsoring_organization: NotRequired[str]
    remarks: NotRequired[list[str]]
    assignment_size: NotRequired[str]
    notify: NotRequired[list[str]]
    mnt_by: NotRequired[list[str]]
    mnt_lower: NotRequired[list[str]]
    mnt_domains: NotRequired[list[str]]
    mnt_routes: NotRequired[list[str]]
    mnt_irt: NotRequired[list[str]]
    date_created: NotRequired[str]
    date_updated: NotRequired[str]
    source: NotRequired[str]
    parents: NotRequired[list[str]]
