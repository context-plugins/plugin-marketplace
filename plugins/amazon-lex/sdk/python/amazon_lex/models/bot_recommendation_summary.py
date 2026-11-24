from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.bot_recommendation_status import BotRecommendationStatusOrStr


class BotRecommendationSummary(SdkBaseModel):
    bot_recommendation_status: BotRecommendationStatusOrStr = Field(alias="botRecommendationStatus")
    """The status of the bot recommendation. If the status is Failed, then the reasons for the failure are listed in the
    failureReasons field."""

    bot_recommendation_id: str = Field(alias="botRecommendationId")
    """The unique identifier of the bot recommendation to be updated."""

    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """A timestamp of the date and time that the bot recommendation was created."""

    last_updated_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdatedDateTime")
    """A timestamp of the date and time that the bot recommendation was last updated."""


class BotRecommendationSummaryDict(TypedDict):
    bot_recommendation_status: BotRecommendationStatusOrStr
    bot_recommendation_id: str
    creation_date_time: NotRequired[RFC3339DateTime]
    last_updated_date_time: NotRequired[RFC3339DateTime]
