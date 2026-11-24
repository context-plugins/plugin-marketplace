from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GetIntentVersionsRequest(SdkBaseModel):
    name: str
    """The name of the intent for which versions should be returned."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """A pagination token for fetching the next page of intent versions. If the response to this call is truncated,
    Amazon Lex returns a pagination token in the response. To fetch the next page of versions, specify the pagination
    token in the next request."""

    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum number of intent versions to return in the response. The default is 10."""


class GetIntentVersionsRequestDict(TypedDict):
    name: str
    next_token: NotRequired[str]
    max_results: NotRequired[int]
