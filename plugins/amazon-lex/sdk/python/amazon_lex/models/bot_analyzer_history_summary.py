from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.bot_analyzer_status import BotAnalyzerStatusOrStr


class BotAnalyzerHistorySummary(SdkBaseModel):
    bot_analyzer_status: BotAnalyzerStatusOrStr = Field(alias="botAnalyzerStatus")
    """The status of the historical analysis execution. Valid Values: Processing | Available | Failed | Stopping |
    Stopped"""

    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """The date and time when the analysis was initiated."""

    bot_analyzer_request_id: str = Field(alias="botAnalyzerRequestId")
    """The unique identifier for the analysis request."""


class BotAnalyzerHistorySummaryDict(TypedDict):
    bot_analyzer_status: BotAnalyzerStatusOrStr
    creation_date_time: NotRequired[RFC3339DateTime]
    bot_analyzer_request_id: str
