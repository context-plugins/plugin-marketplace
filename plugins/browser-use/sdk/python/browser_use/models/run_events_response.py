from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .run_event import RunEvent, RunEventDict


class RunEventsResponse(SdkBaseModel):
    events: list[RunEvent]
    next_after: Optional[int] = Field(default=UNSET, alias="nextAfter")
    has_more: bool = Field(default=False, alias="hasMore")


class RunEventsResponseDict(TypedDict):
    events: list[RunEventDict]
    next_after: NotRequired[int]
    has_more: NotRequired[bool]
