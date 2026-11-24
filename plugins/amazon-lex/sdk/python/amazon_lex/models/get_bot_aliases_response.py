from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bot_alias_metadata import BotAliasMetadata, BotAliasMetadataDict


class GetBotAliasesResponse(SdkBaseModel):
    bot_aliases: Optional[list[BotAliasMetadata]] = Field(default=UNSET, alias="BotAliases")
    """An array of BotAliasMetadata objects, each describing a bot alias."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """A pagination token for fetching next page of aliases. If the response to this call is truncated, Amazon Lex
    returns a pagination token in the response. To fetch the next page of aliases, specify the pagination token in the
    next request."""


class GetBotAliasesResponseDict(TypedDict):
    bot_aliases: NotRequired[list[BotAliasMetadataDict]]
    next_token: NotRequired[str]
