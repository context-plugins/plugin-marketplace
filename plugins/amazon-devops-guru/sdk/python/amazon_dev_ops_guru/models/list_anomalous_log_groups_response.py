from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .anomalous_log_group import AnomalousLogGroup, AnomalousLogGroupDict


class ListAnomalousLogGroupsResponse(SdkBaseModel):
    insight_id: str = Field(alias="InsightId")
    """The ID of the insight containing the log groups."""

    anomalous_log_groups: list[AnomalousLogGroup] = Field(alias="AnomalousLogGroups")
    """The list of Amazon CloudWatch log groups that are related to an insight."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """The pagination token to use to retrieve the next page of results for this operation. If there are no more pages,
    this value is null."""


class ListAnomalousLogGroupsResponseDict(TypedDict):
    insight_id: str
    anomalous_log_groups: list[AnomalousLogGroupDict]
    next_token: NotRequired[str]
