from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .list_insights_any_status_filter import ListInsightsAnyStatusFilter, ListInsightsAnyStatusFilterDict
from .list_insights_closed_status_filter import ListInsightsClosedStatusFilter, ListInsightsClosedStatusFilterDict
from .list_insights_ongoing_status_filter import ListInsightsOngoingStatusFilter, ListInsightsOngoingStatusFilterDict


class ListInsightsStatusFilter(SdkBaseModel):
    ongoing: Optional[ListInsightsOngoingStatusFilter] = Field(default=UNSET, alias="Ongoing")
    closed: Optional[ListInsightsClosedStatusFilter] = Field(default=UNSET, alias="Closed")
    any: Optional[ListInsightsAnyStatusFilter] = Field(default=UNSET, alias="Any")


class ListInsightsStatusFilterDict(TypedDict):
    ongoing: NotRequired[ListInsightsOngoingStatusFilterDict]
    closed: NotRequired[ListInsightsClosedStatusFilterDict]
    any: NotRequired[ListInsightsAnyStatusFilterDict]
