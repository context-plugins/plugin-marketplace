from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bot_recommendation_result_statistics import (
    BotRecommendationResultStatistics,
    BotRecommendationResultStatisticsDict,
)


class BotRecommendationResults(SdkBaseModel):
    bot_locale_export_url: Optional[str] = Field(default=UNSET, alias="botLocaleExportUrl")
    """The presigned URL link of the recommended bot definition."""

    associated_transcripts_url: Optional[str] = Field(default=UNSET, alias="associatedTranscriptsUrl")
    """The presigned url link of the associated transcript."""

    statistics: Optional[BotRecommendationResultStatistics] = UNSET


class BotRecommendationResultsDict(TypedDict):
    bot_locale_export_url: NotRequired[str]
    associated_transcripts_url: NotRequired[str]
    statistics: NotRequired[BotRecommendationResultStatisticsDict]
