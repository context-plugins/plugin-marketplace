from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .income_insight_data_item import IncomeInsightDataItem, IncomeInsightDataItemDict


class IncomeInsightResponse(SdkBaseModel):
    insight_type: Literal["income"] = Field(default="income", alias="insightType")
    """Type of insight returned"""

    data: list[IncomeInsightDataItem]
    """Array containing income verification result"""


class IncomeInsightResponseDict(TypedDict):
    insight_type: Literal["income"]
    data: list[IncomeInsightDataItemDict]
