from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .generation_summary import GenerationSummary, GenerationSummaryDict


class ListBotResourceGenerationsResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The unique identifier of the bot for which the generation requests were made."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The version of the bot for which the generation requests were made."""

    locale_id: Optional[str] = Field(default=UNSET, alias="localeId")
    """The locale of the bot for which the generation requests were made."""

    generation_summaries: Optional[list[GenerationSummary]] = Field(default=UNSET, alias="generationSummaries")
    """A list of objects, each containing information about a generation request for the bot locale."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """If the total number of results is greater than the number specified in the maxResults, the response returns a
    token in the nextToken field. Use this token when making a request to return the next batch of results."""


class ListBotResourceGenerationsResponseDict(TypedDict):
    bot_id: NotRequired[str]
    bot_version: NotRequired[str]
    locale_id: NotRequired[str]
    generation_summaries: NotRequired[list[GenerationSummaryDict]]
    next_token: NotRequired[str]
