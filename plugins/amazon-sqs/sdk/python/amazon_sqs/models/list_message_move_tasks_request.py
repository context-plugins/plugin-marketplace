from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListMessageMoveTasksRequest(SdkBaseModel):
    source_arn: str = Field(alias="SourceArn")
    """The ARN of the queue whose message movement tasks are to be listed."""

    max_results: Optional[int] = Field(default=UNSET, alias="MaxResults")
    """The maximum number of results to include in the response. The default is 1, which provides the most recent
    message movement task. The upper limit is 10."""


class ListMessageMoveTasksRequestDict(TypedDict):
    source_arn: str
    max_results: NotRequired[int]
