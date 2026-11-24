from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .flywheel_iteration_filter import FlywheelIterationFilter, FlywheelIterationFilterDict


class ListFlywheelIterationHistoryRequest(SdkBaseModel):
    flywheel_arn: str = Field(alias="FlywheelArn")
    """The ARN of the flywheel."""

    filter: Optional[FlywheelIterationFilter] = Field(default=UNSET, alias="Filter")
    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Next token"""

    max_results: Optional[int] = Field(default=UNSET, alias="MaxResults")
    """Maximum number of iteration history results to return"""


class ListFlywheelIterationHistoryRequestDict(TypedDict):
    flywheel_arn: str
    filter: NotRequired[FlywheelIterationFilterDict]
    next_token: NotRequired[str]
    max_results: NotRequired[int]
