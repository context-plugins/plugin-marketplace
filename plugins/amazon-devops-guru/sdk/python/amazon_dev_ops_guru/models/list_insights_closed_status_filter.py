from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .end_time_range import EndTimeRange, EndTimeRangeDict
from .enums.type_amazon_dev_ops_guru_insights_api import TypeAmazonDevOpsGuruInsightsApiOrStr


class ListInsightsClosedStatusFilter(SdkBaseModel):
    type_: TypeAmazonDevOpsGuruInsightsApiOrStr = Field(alias="Type")
    """Use to filter for either REACTIVE or PROACTIVE insights."""

    end_time_range: EndTimeRange = Field(alias="EndTimeRange")


class ListInsightsClosedStatusFilterDict(TypedDict):
    type_: TypeAmazonDevOpsGuruInsightsApiOrStr
    end_time_range: EndTimeRangeDict
