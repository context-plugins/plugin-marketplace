from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListDeadLetterSourceQueuesRequest(SdkBaseModel):
    queue_url: str = Field(alias="QueueUrl")
    """The URL of a dead-letter queue. Queue URLs and names are case-sensitive."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Pagination token to request the next set of results."""

    max_results: Optional[int] = Field(default=UNSET, alias="MaxResults")
    """Maximum number of results to include in the response. Value range is 1 to 1000. You must set MaxResults to
    receive a value for NextToken in the response."""


class ListDeadLetterSourceQueuesRequestDict(TypedDict):
    queue_url: str
    next_token: NotRequired[str]
    max_results: NotRequired[int]
