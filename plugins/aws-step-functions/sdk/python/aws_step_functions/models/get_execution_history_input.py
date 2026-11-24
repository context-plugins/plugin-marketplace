from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GetExecutionHistoryInput(SdkBaseModel):
    execution_arn: str = Field(alias="executionArn")
    """The Amazon Resource Name (ARN) of the execution."""

    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum number of results that are returned per call. You can use nextToken to obtain further pages of
    results. The default is 100 and the maximum allowed page size is 1000. A value of 0 uses the default. This is only
    an upper limit. The actual number of results returned per call might be fewer than the specified maximum."""

    reverse_order: Optional[bool] = Field(default=UNSET, alias="reverseOrder")
    """Lists events in descending order of their timeStamp."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token
    for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments
    unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400
    InvalidToken error."""

    include_execution_data: Optional[bool] = Field(default=UNSET, alias="includeExecutionData")
    """You can select whether execution data (input or output of a history event) is returned. The default is true."""


class GetExecutionHistoryInputDict(TypedDict):
    execution_arn: str
    max_results: NotRequired[int]
    reverse_order: NotRequired[bool]
    next_token: NotRequired[str]
    include_execution_data: NotRequired[bool]
