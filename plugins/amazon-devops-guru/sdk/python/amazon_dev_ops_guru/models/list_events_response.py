from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .event import Event, EventDict


class ListEventsResponse(SdkBaseModel):
    events: list[Event] = Field(alias="Events")
    """A list of the requested events."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """The pagination token to use to retrieve the next page of results for this operation. If there are no more pages,
    this value is null."""


class ListEventsResponseDict(TypedDict):
    events: list[EventDict]
    next_token: NotRequired[str]
