from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListQueuesRequest(SdkBaseModel):
    queue_name_prefix: Optional[str] = Field(default=UNSET, alias="QueueNamePrefix")
    """A string to use for filtering the list results. Only those queues whose name begins with the specified string are
    returned. Queue URLs and names are case-sensitive."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Pagination token to request the next set of results."""

    max_results: Optional[int] = Field(default=UNSET, alias="MaxResults")
    """Maximum number of results to include in the response. Value range is 1 to 1000. You must set MaxResults to
    receive a value for NextToken in the response."""


class ListQueuesRequestDict(TypedDict):
    queue_name_prefix: NotRequired[str]
    next_token: NotRequired[str]
    max_results: NotRequired[int]
