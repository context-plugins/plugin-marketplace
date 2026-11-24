from __future__ import annotations

from typing import Literal
from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.insight_type1 import InsightType1OrStr
from .links3 import Links3, Links3Dict
from .unions.datum1_insights_api import Datum1InsightsApi, Datum1InsightsApiDict


class Insight(SdkBaseModel):
    type_: Literal["insight"] = Field(default="insight", alias="type")
    """Resource type indicator"""

    id: UUID
    """Unique identifier for the insight"""

    created: RFC3339DateTime
    """ISO 8601 timestamp of when the insight was created"""

    users: Optional[list[UUID]] = UNSET
    """Array of user IDs associated with this insight. Present only on insights created via POST /insights
    (multi-user)."""

    insight_type: InsightType1OrStr = Field(alias="insightType")
    """Type of insight: account verification, balance verification, identity verification, income verification, or
    expense-ratio"""

    data: list[Datum1InsightsApi]
    """Array of insight data objects, structure varies by insightType"""

    links: Links3


class InsightDict(TypedDict):
    type_: Literal["insight"]
    id: UUID
    created: RFC3339DateTime
    users: NotRequired[list[UUID]]
    insight_type: InsightType1OrStr
    data: list[Datum1InsightsApiDict]
    links: Links3Dict
