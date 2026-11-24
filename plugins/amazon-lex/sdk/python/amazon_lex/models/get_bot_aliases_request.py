from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GetBotAliasesRequest(SdkBaseModel):
    bot_name: str = Field(alias="botName")
    """The name of the bot."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """A pagination token for fetching the next page of aliases. If the response to this call is truncated, Amazon Lex
    returns a pagination token in the response. To fetch the next page of aliases, specify the pagination token in the
    next request."""

    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum number of aliases to return in the response. The default is 50. ."""

    name_contains: Optional[str] = Field(default=UNSET, alias="nameContains")
    """Substring to match in bot alias names. An alias will be returned if any part of its name matches the substring.
    For example, "xyz" matches both "xyzabc" and "abcxyz."
    """


class GetBotAliasesRequestDict(TypedDict):
    bot_name: str
    next_token: NotRequired[str]
    max_results: NotRequired[int]
    name_contains: NotRequired[str]
