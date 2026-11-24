from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .filter import Filter, FilterDict


class ListDatasetImportJobsRequest(SdkBaseModel):
    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If the result of the previous request was truncated, the response includes a NextToken. To retrieve the next set
    of results, use the token in the next request. Tokens expire after 24 hours."""

    max_results: Optional[int] = Field(default=UNSET, alias="MaxResults")
    """The number of items to return in the response."""

    filters: Optional[list[Filter]] = Field(default=UNSET, alias="Filters")
    """An array of filters. For each filter, you provide a condition and a match statement. The condition is either IS
    or IS_NOT, which specifies whether to include or exclude the datasets that match the statement from the list,
    respectively. The match statement consists of a key and a value. Filter properties Condition - The condition to
    apply. Valid values are IS and IS_NOT. To include the datasets that match the statement, specify IS. To exclude
    matching datasets, specify IS_NOT. Key - The name of the parameter to filter on. Valid values are DatasetArn and
    Status. Value - The value to match. For e"""


class ListDatasetImportJobsRequestDict(TypedDict):
    next_token: NotRequired[str]
    max_results: NotRequired[int]
    filters: NotRequired[list[FilterDict]]
