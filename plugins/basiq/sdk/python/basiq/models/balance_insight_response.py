from __future__ import annotations

from typing import Literal
from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .account_balance_data import AccountBalanceData, AccountBalanceDataDict
from .links1_insights_api import Links1InsightsApi, Links1InsightsApiDict


class BalanceInsightResponse(SdkBaseModel):
    type_: Literal["insight"] = Field(default="insight", alias="type")
    """Type of response object"""

    id: UUID
    """Unique identifier for this insight"""

    created: RFC3339DateTime
    """Timestamp when the insight was created"""

    insight_type: Literal["balance"] = Field(default="balance", alias="insightType")
    """Type of insight"""

    data: list[AccountBalanceData]
    """Array of account balance analysis results"""

    links: Links1InsightsApi


class BalanceInsightResponseDict(TypedDict):
    type_: Literal["insight"]
    id: UUID
    created: RFC3339DateTime
    insight_type: Literal["balance"]
    data: list[AccountBalanceDataDict]
    links: Links1InsightsApiDict
