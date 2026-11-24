from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GetSlotTypeVersionsRequest(SdkBaseModel):
    name: str
    """The name of the slot type for which versions should be returned."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """A pagination token for fetching the next page of slot type versions. If the response to this call is truncated,
    Amazon Lex returns a pagination token in the response. To fetch the next page of versions, specify the pagination
    token in the next request."""

    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum number of slot type versions to return in the response. The default is 10."""


class GetSlotTypeVersionsRequestDict(TypedDict):
    name: str
    next_token: NotRequired[str]
    max_results: NotRequired[int]
