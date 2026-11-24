from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListDeadLetterSourceQueuesResult(SdkBaseModel):
    queue_urls: list[str] = Field(alias="queueUrls")
    """A list of source queue URLs that have the RedrivePolicy queue attribute configured with a dead-letter queue."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Pagination token to include in the next request. Token value is null if there are no additional results to
    request, or if you did not set MaxResults in the request."""


class ListDeadLetterSourceQueuesResultDict(TypedDict):
    queue_urls: list[str]
    next_token: NotRequired[str]
