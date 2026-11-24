from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GetIntentsRequest(SdkBaseModel):
    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """A pagination token that fetches the next page of intents. If the response to this API call is truncated, Amazon
    Lex returns a pagination token in the response. To fetch the next page of intents, specify the pagination token in
    the next request."""

    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum number of intents to return in the response. The default is 10."""

    name_contains: Optional[str] = Field(default=UNSET, alias="nameContains")
    """Substring to match in intent names. An intent will be returned if any part of its name matches the substring. For
    example, "xyz" matches both "xyzabc" and "abcxyz."
    """


class GetIntentsRequestDict(TypedDict):
    next_token: NotRequired[str]
    max_results: NotRequired[int]
    name_contains: NotRequired[str]
