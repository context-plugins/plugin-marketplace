from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .datum_core_analytics_api import DatumCoreAnalyticsApi, DatumCoreAnalyticsApiDict
from .initial import Initial, InitialDict
from .meta_core_analytics_api import MetaCoreAnalyticsApi, MetaCoreAnalyticsApiDict


class ConnectionAnalyticsResponse(SdkBaseModel):
    interval: Optional[str] = UNSET
    from_date: Optional[Date] = Field(default=UNSET, alias="fromDate")
    to_date: Optional[Date] = Field(default=UNSET, alias="toDate")
    meta: Optional[MetaCoreAnalyticsApi] = UNSET
    initial: Optional[Initial] = UNSET
    data: Optional[list[DatumCoreAnalyticsApi]] = UNSET


class ConnectionAnalyticsResponseDict(TypedDict):
    interval: NotRequired[str]
    from_date: NotRequired[Date]
    to_date: NotRequired[Date]
    meta: NotRequired[MetaCoreAnalyticsApiDict]
    initial: NotRequired[InitialDict]
    data: NotRequired[list[DatumCoreAnalyticsApiDict]]
