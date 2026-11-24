from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.type_amazon_dev_ops_guru_insights_api import TypeAmazonDevOpsGuruInsightsApiOrStr


class ListInsightsOngoingStatusFilter(SdkBaseModel):
    type_: TypeAmazonDevOpsGuruInsightsApiOrStr = Field(alias="Type")
    """Use to filter for either REACTIVE or PROACTIVE insights."""


class ListInsightsOngoingStatusFilterDict(TypedDict):
    type_: TypeAmazonDevOpsGuruInsightsApiOrStr
