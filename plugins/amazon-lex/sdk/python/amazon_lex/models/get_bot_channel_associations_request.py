from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GetBotChannelAssociationsRequest(SdkBaseModel):
    bot_name: str = Field(alias="botName")
    """The name of the Amazon Lex bot in the association."""

    bot_alias: str = Field(alias="botAlias")
    """An alias pointing to the specific version of the Amazon Lex bot to which this association is being made."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """A pagination token for fetching the next page of associations. If the response to this call is truncated, Amazon
    Lex returns a pagination token in the response. To fetch the next page of associations, specify the pagination token
    in the next request."""

    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum number of associations to return in the response. The default is 50."""

    name_contains: Optional[str] = Field(default=UNSET, alias="nameContains")
    """Substring to match in channel association names. An association will be returned if any part of its name matches
    the substring. For example, "xyz" matches both "xyzabc" and "abcxyz." To return all bot channel associations, use a
    hyphen ("-") as the nameContains parameter."""


class GetBotChannelAssociationsRequestDict(TypedDict):
    bot_name: str
    bot_alias: str
    next_token: NotRequired[str]
    max_results: NotRequired[int]
    name_contains: NotRequired[str]
