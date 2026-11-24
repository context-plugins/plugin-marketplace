from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .flywheel_summary import FlywheelSummary, FlywheelSummaryDict


class ListFlywheelsResponse(SdkBaseModel):
    flywheel_summary_list: Optional[list[FlywheelSummary]] = Field(default=UNSET, alias="FlywheelSummaryList")
    """A list of flywheel properties retrieved by the service in response to the request."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Identifies the next page of results to return."""


class ListFlywheelsResponseDict(TypedDict):
    flywheel_summary_list: NotRequired[list[FlywheelSummaryDict]]
    next_token: NotRequired[str]
