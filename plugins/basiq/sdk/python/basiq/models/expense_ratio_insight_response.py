from __future__ import annotations

from typing import Literal
from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .expense_ratio_insight_data_item import ExpenseRatioInsightDataItem, ExpenseRatioInsightDataItemDict
from .links1_insights_api import Links1InsightsApi, Links1InsightsApiDict


class ExpenseRatioInsightResponse(SdkBaseModel):
    type_: Literal["insight"] = Field(default="insight", alias="type")
    """Type of response object"""

    id: UUID
    """Unique identifier for this insight"""

    created: RFC3339DateTime
    """Timestamp when the insight was created"""

    insight_type: Literal["expense-ratio"] = Field(default="expense-ratio", alias="insightType")
    """Type of insight returned"""

    data: list[ExpenseRatioInsightDataItem]
    """Array containing expense ratio result"""

    links: Links1InsightsApi


class ExpenseRatioInsightResponseDict(TypedDict):
    type_: Literal["insight"]
    id: UUID
    created: RFC3339DateTime
    insight_type: Literal["expense-ratio"]
    data: list[ExpenseRatioInsightDataItemDict]
    links: Links1InsightsApiDict
