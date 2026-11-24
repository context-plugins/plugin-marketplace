from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListQueuesResult(SdkBaseModel):
    queue_urls: Optional[list[str]] = Field(default=UNSET, alias="QueueUrls")
    """A list of queue URLs, up to 1,000 entries, or the value of MaxResults that you sent in the request."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Pagination token to include in the next request. Token value is null if there are no additional results to
    request, or if you did not set MaxResults in the request."""


class ListQueuesResultDict(TypedDict):
    queue_urls: NotRequired[list[str]]
    next_token: NotRequired[str]
