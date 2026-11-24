from __future__ import annotations

from typing import Literal
from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .identity_insight_data import IdentityInsightData, IdentityInsightDataDict
from .links1_insights_api import Links1InsightsApi, Links1InsightsApiDict


class IdentityInsightResponse(SdkBaseModel):
    type_: Literal["insight"] = Field(default="insight", alias="type")
    """The type of response object"""

    id: UUID
    """Unique identifier for this insight"""

    created: RFC3339DateTime
    """Timestamp when the insight was created"""

    insight_type: Literal["identity"] = Field(default="identity", alias="insightType")
    """The type of insight"""

    data: list[IdentityInsightData]
    """Array of identity matching results"""

    links: Links1InsightsApi


class IdentityInsightResponseDict(TypedDict):
    type_: Literal["insight"]
    id: UUID
    created: RFC3339DateTime
    insight_type: Literal["identity"]
    data: list[IdentityInsightDataDict]
    links: Links1InsightsApiDict
