from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .bot_analyzer_recommendation import BotAnalyzerRecommendation, BotAnalyzerRecommendationDict
from .enums.bot_analyzer_status1 import BotAnalyzerStatus1OrStr


class DescribeBotAnalyzerRecommendationResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The unique identifier of the bot."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The version of the bot that was analyzed."""

    locale_id: Optional[str] = Field(default=UNSET, alias="localeId")
    """The locale identifier of the bot locale that was analyzed."""

    bot_analyzer_status: Optional[BotAnalyzerStatus1OrStr] = Field(default=UNSET, alias="botAnalyzerStatus")
    """The current status of the analysis. Valid Values: Processing | Available | Failed | Stopping | Stopped"""

    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """The date and time when the analysis was initiated."""

    bot_analyzer_recommendation_list: Optional[list[BotAnalyzerRecommendation]] = Field(
        default=UNSET, alias="botAnalyzerRecommendationList"
    )
    """A list of recommendations for optimizing your bot configuration. Each recommendation includes the issue location,
    priority, description, and proposed fix."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """If the response is truncated, this token can be used in a subsequent request to retrieve the next page of
    recommendations."""


class DescribeBotAnalyzerRecommendationResponseDict(TypedDict):
    bot_id: NotRequired[str]
    bot_version: NotRequired[str]
    locale_id: NotRequired[str]
    bot_analyzer_status: NotRequired[BotAnalyzerStatus1OrStr]
    creation_date_time: NotRequired[RFC3339DateTime]
    bot_analyzer_recommendation_list: NotRequired[list[BotAnalyzerRecommendationDict]]
    next_token: NotRequired[str]
