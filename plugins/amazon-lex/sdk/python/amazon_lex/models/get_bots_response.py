from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bot_metadata import BotMetadata, BotMetadataDict


class GetBotsResponse(SdkBaseModel):
    bots: Optional[list[BotMetadata]] = UNSET
    """An array of botMetadata objects, with one entry for each bot."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """If the response is truncated, it includes a pagination token that you can specify in your next request to fetch
    the next page of bots."""


class GetBotsResponseDict(TypedDict):
    bots: NotRequired[list[BotMetadataDict]]
    next_token: NotRequired[str]
