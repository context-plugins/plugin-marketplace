from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .generation_sort_by import GenerationSortBy, GenerationSortByDict


class ListBotResourceGenerationsRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The unique identifier of the bot whose generation requests you want to view."""

    bot_version: str = Field(alias="botVersion")
    """The version of the bot whose generation requests you want to view."""

    locale_id: str = Field(alias="localeId")
    """The locale of the bot whose generation requests you want to view."""

    sort_by: Optional[GenerationSortBy] = Field(default=UNSET, alias="sortBy")
    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum number of results to return in the response."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """If the total number of results is greater than the number specified in the maxResults, the response returns a
    token in the nextToken field. Use this token when making a request to return the next batch of results."""


class ListBotResourceGenerationsRequestDict(TypedDict):
    bot_id: str
    bot_version: str
    locale_id: str
    sort_by: NotRequired[GenerationSortByDict]
    max_results: NotRequired[int]
    next_token: NotRequired[str]
