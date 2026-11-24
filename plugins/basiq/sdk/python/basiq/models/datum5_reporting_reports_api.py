from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .filter1 import Filter1, Filter1Dict
from .links_platform_events_api import LinksPlatformEventsApi, LinksPlatformEventsApiDict


class Datum5ReportingReportsApi(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="type")
    id: Optional[str] = UNSET
    title: Optional[str] = UNSET
    report_type: Optional[str] = Field(default=UNSET, alias="reportType")
    created_date: Optional[str] = Field(default=UNSET, alias="createdDate")
    expires_at: Optional[str] = Field(default=UNSET, alias="expiresAt")
    created_by: Optional[str] = Field(default=UNSET, alias="createdBy")
    filters: Optional[list[Filter1]] = UNSET
    links: Optional[LinksPlatformEventsApi] = UNSET


class Datum5ReportingReportsApiDict(TypedDict):
    type_: NotRequired[str]
    id: NotRequired[str]
    title: NotRequired[str]
    report_type: NotRequired[str]
    created_date: NotRequired[str]
    expires_at: NotRequired[str]
    created_by: NotRequired[str]
    filters: NotRequired[list[Filter1Dict]]
    links: NotRequired[LinksPlatformEventsApiDict]
