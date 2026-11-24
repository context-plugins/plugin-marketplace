from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .flywheel_filter import FlywheelFilter, FlywheelFilterDict


class ListFlywheelsRequest(SdkBaseModel):
    filter: Optional[FlywheelFilter] = Field(default=UNSET, alias="Filter")
    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Identifies the next page of results to return."""

    max_results: Optional[int] = Field(default=UNSET, alias="MaxResults")
    """Maximum number of results to return in a response. The default is 100."""


class ListFlywheelsRequestDict(TypedDict):
    filter: NotRequired[FlywheelFilterDict]
    next_token: NotRequired[str]
    max_results: NotRequired[int]
