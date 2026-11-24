from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListMediaAnalysisJobsRequest(SdkBaseModel):
    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Pagination token, if the previous response was incomplete."""

    max_results: Optional[int] = Field(default=UNSET, alias="MaxResults")
    """The maximum number of results to return per paginated call. The largest value user can specify is 100. If user
    specifies a value greater than 100, an InvalidParameterException error occurs. The default value is 100."""


class ListMediaAnalysisJobsRequestDict(TypedDict):
    next_token: NotRequired[str]
    max_results: NotRequired[int]
