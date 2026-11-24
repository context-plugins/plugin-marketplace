from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .queue import Queue, QueueDict


class ListQueuesResponse(SdkBaseModel):
    """Response message for ListQueues."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token to retrieve next page of results. To return the next page of results, call ListQueues with this value as
    the page_token. If the next_page_token is empty, there are no more results. The page token is valid for only 2
    hours."""

    queues: Optional[list[Queue]] = UNSET
    """The list of queues."""


class ListQueuesResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    queues: NotRequired[list[QueueDict]]
