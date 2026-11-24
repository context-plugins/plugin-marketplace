from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .filter import Filter, FilterDict


class ListMonitorEvaluationsRequest(SdkBaseModel):
    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If the result of the previous request was truncated, the response includes a NextToken. To retrieve the next set
    of results, use the token in the next request. Tokens expire after 24 hours."""

    max_results: Optional[int] = Field(default=UNSET, alias="MaxResults")
    """The maximum number of monitoring results to return."""

    monitor_arn: str = Field(alias="MonitorArn")
    """The Amazon Resource Name (ARN) of the monitor resource to get results from."""

    filters: Optional[list[Filter]] = Field(default=UNSET, alias="Filters")
    """An array of filters. For each filter, provide a condition and a match statement. The condition is either IS or
    IS_NOT, which specifies whether to include or exclude the resources that match the statement from the list. The
    match statement consists of a key and a value. Filter properties Condition - The condition to apply. Valid values
    are IS and IS_NOT. Key - The name of the parameter to filter on. The only valid value is EvaluationState. Value -
    The value to match. Valid values are only SUCCESS or FAILURE. For example, to list only successful monitor
    evaluations, you would specify: "Filters":"""


class ListMonitorEvaluationsRequestDict(TypedDict):
    next_token: NotRequired[str]
    max_results: NotRequired[int]
    monitor_arn: str
    filters: NotRequired[list[FilterDict]]
