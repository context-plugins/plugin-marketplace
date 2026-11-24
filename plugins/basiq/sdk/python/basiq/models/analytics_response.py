from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .datum1_core_analytics_api import Datum1CoreAnalyticsApi, Datum1CoreAnalyticsApiDict
from .initial1 import Initial1, Initial1Dict
from .meta_core_analytics_api import MetaCoreAnalyticsApi, MetaCoreAnalyticsApiDict


class AnalyticsResponse(SdkBaseModel):
    interval: Optional[str] = UNSET
    from_date: Optional[Date] = Field(default=UNSET, alias="fromDate")
    to_date: Optional[Date] = Field(default=UNSET, alias="toDate")
    meta: Optional[MetaCoreAnalyticsApi] = UNSET
    initial: Optional[Initial1] = UNSET
    data: Optional[list[Datum1CoreAnalyticsApi]] = UNSET


class AnalyticsResponseDict(TypedDict):
    interval: NotRequired[str]
    from_date: NotRequired[Date]
    to_date: NotRequired[Date]
    meta: NotRequired[MetaCoreAnalyticsApiDict]
    initial: NotRequired[Initial1Dict]
    data: NotRequired[list[Datum1CoreAnalyticsApiDict]]
