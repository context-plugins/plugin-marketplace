from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GetBotsRequest(SdkBaseModel):
    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """A pagination token that fetches the next page of bots. If the response to this call is truncated, Amazon Lex
    returns a pagination token in the response. To fetch the next page of bots, specify the pagination token in the next
    request."""

    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum number of bots to return in the response that the request will return. The default is 10."""

    name_contains: Optional[str] = Field(default=UNSET, alias="nameContains")
    """Substring to match in bot names. A bot will be returned if any part of its name matches the substring. For
    example, "xyz" matches both "xyzabc" and "abcxyz."
    """


class GetBotsRequestDict(TypedDict):
    next_token: NotRequired[str]
    max_results: NotRequired[int]
    name_contains: NotRequired[str]
