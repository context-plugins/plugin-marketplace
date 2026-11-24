from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.type_amazon_dev_ops_guru_insights_api import TypeAmazonDevOpsGuruInsightsApiOrStr
from .start_time_range import StartTimeRange, StartTimeRangeDict


class ListInsightsAnyStatusFilter(SdkBaseModel):
    type_: TypeAmazonDevOpsGuruInsightsApiOrStr = Field(alias="Type")
    """Use to filter for either REACTIVE or PROACTIVE insights."""

    start_time_range: StartTimeRange = Field(alias="StartTimeRange")


class ListInsightsAnyStatusFilterDict(TypedDict):
    type_: TypeAmazonDevOpsGuruInsightsApiOrStr
    start_time_range: StartTimeRangeDict
