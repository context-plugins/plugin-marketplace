from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .history_event import HistoryEvent, HistoryEventDict


class History(SdkBaseModel):
    events: list[HistoryEvent]
    """The list of history events."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """If a NextPageToken was returned by a previous call, there are more results available. To retrieve the next page
    of results, make the call again using the returned token in nextPageToken. Keep all other arguments unchanged. The
    configured maximumPageSize determines how many results can be returned in a single call."""


class HistoryDict(TypedDict):
    events: list[HistoryEventDict]
    next_page_token: NotRequired[str]
