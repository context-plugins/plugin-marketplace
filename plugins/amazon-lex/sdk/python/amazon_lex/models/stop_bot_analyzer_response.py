from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.bot_analyzer_status3 import BotAnalyzerStatus3OrStr


class StopBotAnalyzerResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The unique identifier of the bot."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The version of the bot."""

    locale_id: Optional[str] = Field(default=UNSET, alias="localeId")
    """The locale identifier of the bot locale."""

    bot_analyzer_status: Optional[BotAnalyzerStatus3OrStr] = Field(default=UNSET, alias="botAnalyzerStatus")
    """The updated status of the analysis. The status will be Stopping and will eventually transition to Stopped. Valid
    Values: Processing | Available | Failed | Stopping | Stopped"""

    bot_analyzer_request_id: Optional[str] = Field(default=UNSET, alias="botAnalyzerRequestId")
    """The unique identifier of the analysis request."""


class StopBotAnalyzerResponseDict(TypedDict):
    bot_id: NotRequired[str]
    bot_version: NotRequired[str]
    locale_id: NotRequired[str]
    bot_analyzer_status: NotRequired[BotAnalyzerStatus3OrStr]
    bot_analyzer_request_id: NotRequired[str]
