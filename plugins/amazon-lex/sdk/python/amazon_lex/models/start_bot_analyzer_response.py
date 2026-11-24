from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.bot_analyzer_status2 import BotAnalyzerStatus2OrStr


class StartBotAnalyzerResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The unique identifier of the bot being analyzed."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The version of the bot being analyzed."""

    locale_id: Optional[str] = Field(default=UNSET, alias="localeId")
    """The locale identifier of the bot locale being analyzed."""

    bot_analyzer_status: Optional[BotAnalyzerStatus2OrStr] = Field(default=UNSET, alias="botAnalyzerStatus")
    """The current status of the analysis. The initial status is Processing. Valid Values: Processing | Available |
    Failed | Stopping | Stopped"""

    bot_analyzer_request_id: Optional[str] = Field(default=UNSET, alias="botAnalyzerRequestId")
    """A unique identifier for this analysis request. Use this identifier to check the status and retrieve results."""

    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """The date and time when the analysis was initiated."""


class StartBotAnalyzerResponseDict(TypedDict):
    bot_id: NotRequired[str]
    bot_version: NotRequired[str]
    locale_id: NotRequired[str]
    bot_analyzer_status: NotRequired[BotAnalyzerStatus2OrStr]
    bot_analyzer_request_id: NotRequired[str]
    creation_date_time: NotRequired[RFC3339DateTime]
