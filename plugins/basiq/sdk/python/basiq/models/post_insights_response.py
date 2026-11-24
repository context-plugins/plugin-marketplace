from __future__ import annotations

from typing import Literal
from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.insight_type import InsightTypeOrStr
from .links_insights_api import LinksInsightsApi, LinksInsightsApiDict
from .unions.datum_insights_api import DatumInsightsApi, DatumInsightsApiDict


class PostInsightsResponse(SdkBaseModel):
    """Response for an insight created via POST /insights. Includes a ``users`` array reflecting the users from the
    request."""

    type_: Literal["insight"] = Field(default="insight", alias="type")
    """Resource type indicator"""

    id: UUID
    """Unique identifier for this insight"""

    created: RFC3339DateTime
    """ISO 8601 timestamp of when the insight was created"""

    users: list[UUID]
    """Array of user IDs for whom the insight was generated. Mirrors the ``users`` field from the request."""

    insight_type: InsightTypeOrStr = Field(alias="insightType")
    """Type of insight returned"""

    data: list[DatumInsightsApi]
    """Array containing the insight result. Shape varies by insightType."""

    links: LinksInsightsApi
    """For multi-user insights the self link uses the first userId from the users array."""


class PostInsightsResponseDict(TypedDict):
    type_: Literal["insight"]
    id: UUID
    created: RFC3339DateTime
    users: list[UUID]
    insight_type: InsightTypeOrStr
    data: list[DatumInsightsApiDict]
    links: LinksInsightsApiDict
