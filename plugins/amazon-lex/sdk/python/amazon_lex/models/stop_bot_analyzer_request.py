from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class StopBotAnalyzerRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The unique identifier of the bot."""

    bot_analyzer_request_id: str = Field(alias="botAnalyzerRequestId")
    """The unique identifier of the analysis request to stop."""


class StopBotAnalyzerRequestDict(TypedDict):
    bot_id: str
    bot_analyzer_request_id: str
