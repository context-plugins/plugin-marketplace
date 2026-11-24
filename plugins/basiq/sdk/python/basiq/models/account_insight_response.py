from __future__ import annotations

from typing import Literal
from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .account_insight_data import AccountInsightData, AccountInsightDataDict
from .links1_insights_api import Links1InsightsApi, Links1InsightsApiDict


class AccountInsightResponse(SdkBaseModel):
    type_: Literal["insight"] = Field(default="insight", alias="type")
    """The type of response object"""

    id: UUID
    """Unique identifier for this insight"""

    created: RFC3339DateTime
    """Timestamp when the insight was created"""

    insight_type: Literal["account"] = Field(default="account", alias="insightType")
    """The type of insight"""

    data: list[AccountInsightData]
    """Array of account insight data"""

    links: Links1InsightsApi


class AccountInsightResponseDict(TypedDict):
    type_: Literal["insight"]
    id: UUID
    created: RFC3339DateTime
    insight_type: Literal["account"]
    data: list[AccountInsightDataDict]
    links: Links1InsightsApiDict
