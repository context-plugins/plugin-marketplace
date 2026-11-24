from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListBotAnalyzerHistoryRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The unique identifier of the bot."""

    locale_id: Optional[str] = Field(default=UNSET, alias="localeId")
    """The locale identifier to filter the history. If not specified, returns history for all locales."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The bot version to filter the history. If not specified, defaults to DRAFT."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """If the response from a previous request was truncated, the nextToken value is used to retrieve the next page of
    history entries."""

    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum number of history entries to return in the response. The default is 10."""


class ListBotAnalyzerHistoryRequestDict(TypedDict):
    bot_id: str
    locale_id: NotRequired[str]
    bot_version: NotRequired[str]
    next_token: NotRequired[str]
    max_results: NotRequired[int]
