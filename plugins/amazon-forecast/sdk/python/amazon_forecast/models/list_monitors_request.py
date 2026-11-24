from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .filter import Filter, FilterDict


class ListMonitorsRequest(SdkBaseModel):
    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If the result of the previous request was truncated, the response includes a NextToken. To retrieve the next set
    of results, use the token in the next request. Tokens expire after 24 hours."""

    max_results: Optional[int] = Field(default=UNSET, alias="MaxResults")
    """The maximum number of monitors to include in the response."""

    filters: Optional[list[Filter]] = Field(default=UNSET, alias="Filters")
    """An array of filters. For each filter, provide a condition and a match statement. The condition is either IS or
    IS_NOT, which specifies whether to include or exclude the resources that match the statement from the list. The
    match statement consists of a key and a value. Filter properties Condition - The condition to apply. Valid values
    are IS and IS_NOT. Key - The name of the parameter to filter on. The only valid value is Status. Value - The value
    to match. For example, to list all monitors who's status is ACTIVE, you would specify: "Filters": [ { "Condition":
    "IS", "Key": "Status", "Value": "
    """


class ListMonitorsRequestDict(TypedDict):
    next_token: NotRequired[str]
    max_results: NotRequired[int]
    filters: NotRequired[list[FilterDict]]
