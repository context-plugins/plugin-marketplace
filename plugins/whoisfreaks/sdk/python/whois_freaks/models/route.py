from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Route(SdkBaseModel):
    route: Optional[str] = UNSET
    description: Optional[list[str]] = UNSET
    origin: Optional[str] = UNSET
    pingable: Optional[list[str]] = UNSET
    ping_hdl: Optional[list[str]] = UNSET
    holes: Optional[list[str]] = UNSET
    country: Optional[str] = UNSET
    organizations: Optional[list[str]] = UNSET
    member_of: Optional[list[str]] = UNSET
    inject: Optional[list[str]] = UNSET
    aggr_mtd: Optional[str] = UNSET
    aggr_bndry: Optional[str] = UNSET
    export_comps: Optional[str] = UNSET
    components: Optional[str] = UNSET
    remarks: Optional[list[str]] = UNSET
    notify: Optional[list[str]] = UNSET
    mnt_lower: Optional[list[str]] = UNSET
    mnt_routes: Optional[list[str]] = UNSET
    mnt_by: Optional[list[str]] = UNSET
    date_created: Optional[str] = UNSET
    date_updated: Optional[str] = UNSET
    source: Optional[str] = UNSET


class RouteDict(TypedDict):
    route: NotRequired[str]
    description: NotRequired[list[str]]
    origin: NotRequired[str]
    pingable: NotRequired[list[str]]
    ping_hdl: NotRequired[list[str]]
    holes: NotRequired[list[str]]
    country: NotRequired[str]
    organizations: NotRequired[list[str]]
    member_of: NotRequired[list[str]]
    inject: NotRequired[list[str]]
    aggr_mtd: NotRequired[str]
    aggr_bndry: NotRequired[str]
    export_comps: NotRequired[str]
    components: NotRequired[str]
    remarks: NotRequired[list[str]]
    notify: NotRequired[list[str]]
    mnt_lower: NotRequired[list[str]]
    mnt_routes: NotRequired[list[str]]
    mnt_by: NotRequired[list[str]]
    date_created: NotRequired[str]
    date_updated: NotRequired[str]
    source: NotRequired[str]
