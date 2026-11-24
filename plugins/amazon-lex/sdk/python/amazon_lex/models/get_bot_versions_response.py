from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bot_metadata import BotMetadata, BotMetadataDict


class GetBotVersionsResponse(SdkBaseModel):
    bots: Optional[list[BotMetadata]] = UNSET
    """An array of BotMetadata objects, one for each numbered version of the bot plus one for the $LATEST version."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """A pagination token for fetching the next page of bot versions. If the response to this call is truncated, Amazon
    Lex returns a pagination token in the response. To fetch the next page of versions, specify the pagination token in
    the next request."""


class GetBotVersionsResponseDict(TypedDict):
    bots: NotRequired[list[BotMetadataDict]]
    next_token: NotRequired[str]
