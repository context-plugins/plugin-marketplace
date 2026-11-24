from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bot_analyzer_history_summary import BotAnalyzerHistorySummary, BotAnalyzerHistorySummaryDict


class ListBotAnalyzerHistoryResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The unique identifier of the bot."""

    locale_id: Optional[str] = Field(default=UNSET, alias="localeId")
    """The locale identifier used to filter the history."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The bot version used to filter the history."""

    bot_analyzer_history_list: Optional[list[BotAnalyzerHistorySummary]] = Field(
        default=UNSET, alias="botAnalyzerHistoryList"
    )
    """A list of historical analysis executions, ordered by creation date with the most recent first."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """If the response is truncated, this token can be used in a subsequent request to retrieve the next page of history
    entries."""


class ListBotAnalyzerHistoryResponseDict(TypedDict):
    bot_id: NotRequired[str]
    locale_id: NotRequired[str]
    bot_version: NotRequired[str]
    bot_analyzer_history_list: NotRequired[list[BotAnalyzerHistorySummaryDict]]
    next_token: NotRequired[str]
