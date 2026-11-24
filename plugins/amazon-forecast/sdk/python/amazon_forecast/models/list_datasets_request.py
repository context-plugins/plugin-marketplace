from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListDatasetsRequest(SdkBaseModel):
    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If the result of the previous request was truncated, the response includes a NextToken. To retrieve the next set
    of results, use the token in the next request. Tokens expire after 24 hours."""

    max_results: Optional[int] = Field(default=UNSET, alias="MaxResults")
    """The number of items to return in the response."""


class ListDatasetsRequestDict(TypedDict):
    next_token: NotRequired[str]
    max_results: NotRequired[int]
